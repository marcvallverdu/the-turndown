import {readFileSync,readdirSync,statSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
const policy=JSON.parse(readFileSync(new URL('./public-copy-policy.json',import.meta.url),'utf8'));
const expectedRoute=null;
assert.equal(policy.methodologyPath,expectedRoute,'the sole exact methodology route must remain pinned');
assert.equal(policy.maxMethodologyPages,1);
assert.equal(policy.decorativeEyebrowsAllowed,false);
if(expectedRoute) assert.ok(['app','src/app'].some(root=>existsSync(root+expectedRoute+'/page.tsx')),'designated route must exist');
const baselineAt=process.argv.indexOf('--baseline');
const baseline=baselineAt>=0?process.argv[baselineAt+1]:null;
const source=f=>baseline?execFileSync('git',['show',baseline+':'+f],{encoding:'utf8'}):readFileSync(f,'utf8');
function walk(p){try{return readdirSync(p).flatMap(n=>{const f=p+'/'+n;return statSync(f).isDirectory()?walk(f):[f]})}catch{return []}}
function hasEyebrow(s){
 if(/className="[^"\n]*(?:editorial-kicker|\bkicker\b|\beyebrow\b)/.test(s))return true;
 const preheading=/<(p|span)\b([^>]*?)>((?:(?!<\/?(?:p|span)\b)[\s\S])*?)<\/\1>\s*(?=<h[1-3]\b)/g;
 for(const m of s.matchAll(preheading)) if(m[3].trim().length<140 && /uppercase|tracking-\[|className="label\b/.test(m[2]))return true;
 return false;
}
assert.ok(hasEyebrow('<p className="text-xs uppercase tracking-[0.3em]">Decorative</p><h1>Title</h1>'));
assert.ok(hasEyebrow('<p className="label mb-4">Decorative</p><h2>Title</h2>'));
assert.ok(!hasEyebrow('<label className="uppercase">Email</label><input />'));
if(existsSync('app/reviews/[slug]/page.tsx')) assert.ok(!source('app/reviews/[slug]/page.tsx').includes('<BrandBadge'), 'review hero must not render a brand eyebrow above the title');
let count=0;
for(const f of ['app','src/app','components','src/components'].flatMap(walk).filter(f=>f.endsWith('.tsx')&&!f.includes('/admin/')&&!f.includes('/profile/')&&!f.includes('/company/'))){
 const s=source(f);
 assert.ok(!hasEyebrow(s),f+' renders a decorative pre-heading');
 assert.ok(!/\bcitation\s*:|#source-/.test(s),f+' renders citation apparatus');
 count++;
}
for(const f of walk('content/blog').filter(f=>f.endsWith('.md'))){
 const s=source(f);
 assert.ok(!/^#{1,6} (?:Sources(?: and further reading| used)?|Source notes|Further reading|References)\s*$/mi.test(s),f+' contains bibliography apparatus');
 assert.ok(!/^Sources?(?: used)?:\s*\[[^\n]+\]\(https?:\/\//mi.test(s),f+' contains a standalone inline source citation');
 count++;
}
if(existsSync('app/blog/[slug]/page.tsx')&&existsSync('data/blog.json')){
 const template=source('app/blog/[slug]/page.tsx');
 assert.ok(!template.includes('https://www.windsorgreatpark.co.uk/'),'generic template must not hardcode one event');
 assert.ok(template.includes('!archived && post.readerLinks.map'),'booking actions must be per-post and suppressed when archived');
 const posts=JSON.parse(source('data/blog.json'));
 for(const post of posts) for(const link of post.readerLinks??[])assert.ok(/^https:\/\//.test(link.href)&&link.label.length>4);
}
assert.ok(!source('app/reviews/[slug]/page.tsx').includes('ReviewMethodology'),'reviews must not render publisher methodology blocks');
console.log(JSON.stringify({passed:true,filesChecked:count,methodologyPath:policy.methodologyPath,baseline}));
