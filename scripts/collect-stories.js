const fs=require('fs');
const path=require('path');
const matter=require('gray-matter');
const storiesDir=path.join(__dirname,'..','docs','community','stories');
const outFile=path.join(__dirname,'..','docs','community','stories.md');
function collect(){
  const entries=[];
  if(!fs.existsSync(storiesDir)){
    fs.writeFileSync(outFile,'# Community Stories\n\nNo stories yet. Be the first by following docs/community/templates/story.md.\n');
    return;
  }
  const files=fs.readdirSync(storiesDir).filter(f=>f.endsWith('.md'));
  if(!files.length){
    fs.writeFileSync(outFile,'# Community Stories\n\nNo stories submitted yet. Use the story template to add yours.\n');
    return;
  }
  files.forEach(file=>{
    const raw=fs.readFileSync(path.join(storiesDir,file),'utf8');
    const parsed=matter(raw);
    entries.push({ title:parsed.data.title||file, role:parsed.data.role||'caregiver', stage:parsed.data.stage||'', year:parsed.data.year||'', body:parsed.content.trim() });
  });
  entries.sort((a,b)=>(b.year||'').localeCompare(a.year||''));
  let output='# Community Stories\n\nSubmit yours via docs/community/templates/story.md or the Human Story issue form.\n\n';
  entries.forEach(entry=>{
    output+=`## ${entry.title}\n`;
    output+=`*Role:* ${entry.role} | *Stage:* ${entry.stage} | *Year:* ${entry.year}\n\n`;
    output+=`${entry.body}\n\n---\n\n`;
  });
  fs.writeFileSync(outFile,output);
}
collect();
