import fs from'node:fs';
const T=Buffer.from('ABFBBAYKCw8AAAAAAAAAAAkJCQkJCQkFCQkJBQkJCQAJCQkAAAAAAAAAAAAAAAAAICQkIAAAAAAAAAAAAAAAAAUIAAAAAAAAAAAAAAAAAAAEBAEE','base64');
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of fs.readdirSync(I)){
 const U=new Uint8Array(1<<16);let ex=1,ol=0;
 try{
  const p=new Uint8Array(fs.readFileSync(I+'/'+d+'/program.bin')),q=new Uint8Array(fs.readFileSync(I+'/'+d+'/input.bin'));
  const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256);
  let sp=0,cp=0,ip=0,pc=0,st=0,A,B,R;
  for(;;){
   if(st===1e6)throw 10;
   if(pc<0||pc>=n)throw 9;
   const o=p[pc],c=T[o];
   if(!c&&o&&o!==52)throw 5;
   const im=c>>4,u=(c>>2)&3,v=c&3;
   if(pc+im>=n)throw 9;
   st++;
   if(sp<u)throw 2;
   if(sp-u+v>256)throw 3;
   pc+=1+im;
   const j=(p[pc-2]|p[pc-1]<<8)<<16>>16;
   switch(o){
    case 0:throw 0;
    case 1:D[sp++]=(p[pc-1]<<24)>>24;break;
    case 2:D[sp++]=p[pc-4]|p[pc-3]<<8|p[pc-2]<<16|p[pc-1]<<24;break;
    case 3:sp--;break;
    case 4:D[sp]=D[sp-1];sp++;break;
    case 5:B=D[sp-1];D[sp-1]=D[sp-2];D[sp-2]=B;break;
    case 6:D[sp]=D[sp-2];sp++;break;
    case 7:A=D[sp-3];D[sp-3]=D[sp-2];D[sp-2]=D[sp-1];D[sp-1]=A;break;
    case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
     B=D[sp-1];A=D[sp-2];
     if(o>18&&o<23&&!B)throw 4;
     switch(o){
      case 16:R=(A+B)|0;break;
      case 17:R=(A-B)|0;break;
      case 18:R=Math.imul(A,B);break;
      case 19:R=(A/B)|0;break;
      case 20:R=(A%B)|0;break;
      case 21:R=Math.floor((A>>>0)/(B>>>0))|0;break;
      case 22:R=((A>>>0)%(B>>>0))|0;break;
      case 24:R=A&B;break;
      case 25:R=A|B;break;
      case 26:R=A^B;break;
      case 28:R=A<<B;break;
      case 29:R=A>>B;break;
      case 30:R=(A>>>B)|0;break;
      case 32:R=A===B?1:0;break;
      case 33:R=A<B?1:0;break;
      case 34:R=(A>>>0)<(B>>>0)?1:0;break;
     }
     sp-=2;D[sp++]=R;break;}
    case 23:D[sp-1]=-D[sp-1]|0;break;
    case 27:D[sp-1]=~D[sp-1];break;
    case 48:pc+=j;break;
    case 49:case 50:A=D[--sp];if((o<50)===(A===0))pc+=j;break;
    case 51:if(cp===64)throw 7;C[cp++]=pc;pc=p[pc-2]|p[pc-1]<<8;break;
    case 52:if(!cp)throw 8;pc=C[--cp];break;
    case 64:A=D[sp-1];if(A<0||A>255)throw 6;D[sp-1]=M[A];break;
    case 65:A=D[sp-1];B=D[sp-2];if(A<0||A>255)throw 6;sp-=2;M[A]=B;break;
    case 80:B=Buffer.from(''+D[sp-1]);if(ol+B.length>1<<16)throw 11;sp--;U.set(B,ol);ol+=B.length;break;
    case 81:if(ol+1>1<<16)throw 11;U[ol++]=D[--sp]&255;break;
    case 82:D[sp++]=ip<q.length?q[ip++]:-1;break;
    case 83:throw D[--sp]&255;
   }
  }
 }catch(e){if(typeof e=='number')ex=e;}
 fs.mkdirSync(O+'/'+d,{recursive:true});
 fs.writeFileSync(O+'/'+d+'/stdout.bin',U.slice(0,ol));
 fs.writeFileSync(O+'/'+d+'/exit.txt',ex+'\n');
}
