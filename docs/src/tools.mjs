export const evaluators={
  'creative-brief-completeness-checker': i=>{const fields=['objective','audience','message','mandatories','deliverables','approvals'],missing=fields.filter(f=>Array.isArray(i[f])?!i[f].length:!i[f]);return{valid:!missing.length,missing,score:fields.length-missing.length}},
  'audience-message-matrix': i=>{const fields=['audience','message','proof','action'],rows=(i.segments||[]).map(x=>({audience:x.audience,missing:fields.filter(f=>!x[f])}));return{valid:rows.length>0&&rows.every(x=>!x.missing.length),rows}}
};
export function evaluate(slug,input){const fn=evaluators[slug];if(!fn)throw new Error('Unknown tool');return fn(input)}
