(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="170",Mi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ic=0,Ya=1,sc=2,ml=1,gl=2,fn=3,Nn=0,Fe=1,Ue=2,Dn=0,yi=1,Vs=2,$a=3,Ja=4,oc=5,qn=100,ac=101,rc=102,lc=103,cc=104,hc=200,dc=201,uc=202,pc=203,Fo=204,Bo=205,fc=206,mc=207,gc=208,_c=209,vc=210,xc=211,Mc=212,yc=213,Sc=214,ko=0,Go=1,zo=2,bi=3,Vo=4,Ho=5,Wo=6,jo=7,_l=0,Ec=1,bc=2,On=0,Tc=1,wc=2,Ac=3,vl=4,Cc=5,Rc=6,Pc=7,xl=300,Ti=301,wi=302,Xo=303,qo=304,Ys=306,mn=1e3,Jn=1001,Yo=1002,nn=1003,Lc=1004,ss=1005,tn=1006,Qs=1007,In=1008,Mn=1009,Ml=1010,yl=1011,$i=1012,wa=1013,Zn=1014,gn=1015,Ji=1016,Aa=1017,Ca=1018,Ai=1020,Sl=35902,El=1021,bl=1022,en=1023,Tl=1024,wl=1025,Si=1026,Ci=1027,Al=1028,Ra=1029,Cl=1030,Pa=1031,La=1033,Os=33776,Ns=33777,Us=33778,Fs=33779,$o=35840,Jo=35841,Zo=35842,Ko=35843,Qo=36196,ta=37492,ea=37496,na=37808,ia=37809,sa=37810,oa=37811,aa=37812,ra=37813,la=37814,ca=37815,ha=37816,da=37817,ua=37818,pa=37819,fa=37820,ma=37821,Bs=36492,ga=36494,_a=36495,Rl=36283,va=36284,xa=36285,Ma=36286,Ic=3200,Dc=3201,Pl=0,Oc=1,Ln="",je="srgb",Pi="srgb-linear",$s="linear",ne="srgb",ni=7680,Za=519,Nc=512,Uc=513,Fc=514,Ll=515,Bc=516,kc=517,Gc=518,zc=519,Ka=35044,Qa="300 es",_n=2e3,Hs=2001;class Qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,ya=180/Math.PI;function Zi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Vc(s,t){return(s%t+t)%t}function to(s,t,e){return(1-e)*s+e*t}function Oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Hc={DEG2RAD:ks};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,o,a,r,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,l,c)}set(t,e,n,i,o,a,r,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=r,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],m=n[5],g=n[8],_=i[0],f=i[3],d=i[6],E=i[1],b=i[4],M=i[7],L=i[2],C=i[5],A=i[8];return o[0]=a*_+r*E+l*L,o[3]=a*f+r*b+l*C,o[6]=a*d+r*M+l*A,o[1]=c*_+u*E+h*L,o[4]=c*f+u*b+h*C,o[7]=c*d+u*M+h*A,o[2]=p*_+m*E+g*L,o[5]=p*f+m*b+g*C,o[8]=p*d+m*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*r*c-n*o*u+n*r*l+i*o*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],u=t[8],h=u*a-r*c,p=r*l-u*o,m=c*o-a*l,g=e*h+n*p+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(r*n-i*a)*_,t[3]=p*_,t[4]=(u*e-i*l)*_,t[5]=(i*o-r*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-i*c,i*l,-i*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Nt;function Il(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wc(){const s=Ws("canvas");return s.style.display="block",s}const tr={};function Wi(s){s in tr||(tr[s]=!0,console.warn(s))}function jc(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Xc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?$s:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ei(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const er=[.64,.33,.3,.6,.15,.06],nr=[.2126,.7152,.0722],ir=[.3127,.329],sr=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),or=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Pi]:{primaries:er,whitePoint:ir,transfer:$s,toXYZ:sr,fromXYZ:or,luminanceCoefficients:nr,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:er,whitePoint:ir,transfer:ne,toXYZ:sr,fromXYZ:or,luminanceCoefficients:nr,outputColorSpaceConfig:{drawingBufferColorSpace:je}}});let ii;class Yc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Ws("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=xn(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $c=0;class Dl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(no(i[a].image)):o.push(no(i[a]))}else o=no(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function no(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;class Le extends Qn{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Jn,i=Jn,o=tn,a=In,r=en,l=Mn,c=Le.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Zi(),this.name="",this.source=new Dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mn:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mn:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=xl;Le.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(m+1)/2,L=(d+1)/2,C=(u+p)/4,A=(h+_)/4,P=(g+f)/4;return b>M&&b>L?b<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(b),i=C/n,o=A/n):M>L?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=C/i,o=P/i):L<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(L),n=A/o,i=P/o),this.set(n,i,o,e),this}let E=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(h-_)/E,this.z=(p-u)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zc extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ol extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kc extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Se{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const p=o[a+0],m=o[a+1],g=o[a+2],_=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(r===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==p||c!==m||u!==g){let f=1-r;const d=l*p+c*m+u*g+h*_,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const L=Math.sqrt(b),C=Math.atan2(L,d*E);f=Math.sin(f*C)/L,r=Math.sin(r*C)/L}const M=r*E;if(l=l*f+p*M,c=c*f+m*M,u=u*f+g*M,h=h*f+_*M,f===1-r){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=o[a],p=o[a+1],m=o[a+2],g=o[a+3];return t[e]=r*g+u*h+l*m-c*p,t[e+1]=l*g+u*p+c*h-r*m,t[e+2]=c*g+u*m+r*p-l*h,t[e+3]=u*g-r*h-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(i/2),h=r(o/2),p=l(n/2),m=l(i/2),g=l(o/2);switch(a){case"XYZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"YZX":this._x=p*u*h+c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h-p*m*g;break;case"XZY":this._x=p*u*h-c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+r+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(a-i)*m}else if(n>r&&n>h){const m=2*Math.sqrt(1+n-r-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(o+c)/m}else if(r>h){const m=2*Math.sqrt(1+r-n-h);this._w=(o-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-r);this._w=(a-i)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*r+i*c-o*l,this._y=i*u+a*l+o*r-n*c,this._z=o*u+a*c+n*l-i*r,this._w=a*u-n*r-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,r),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=o*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ar.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ar.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*i-r*n),u=2*(r*e-o*i),h=2*(o*n-a*e);return this.x=e+l*c+a*h-r*u,this.y=n+l*u+r*c-o*h,this.z=i+l*h+o*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=i*l-o*r,this.y=o*a-n*l,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new T,ar=new Se;class Ki{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(o,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),as.subVectors(this.max,Ni),si.subVectors(t.a,Ni),oi.subVectors(t.b,Ni),ai.subVectors(t.c,Ni),En.subVectors(oi,si),bn.subVectors(ai,oi),Bn.subVectors(si,ai);let e=[0,-En.z,En.y,0,-bn.z,bn.y,0,-Bn.z,Bn.y,En.z,0,-En.x,bn.z,0,-bn.x,Bn.z,0,-Bn.x,-En.y,En.x,0,-bn.y,bn.x,0,-Bn.y,Bn.x,0];return!so(e,si,oi,ai,as)||(e=[1,0,0,0,1,0,0,0,1],!so(e,si,oi,ai,as))?!1:(rs.crossVectors(En,bn),e=[rs.x,rs.y,rs.z],so(e,si,oi,ai,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new T,new T,new T,new T,new T,new T,new T,new T],Je=new T,os=new Ki,si=new T,oi=new T,ai=new T,En=new T,bn=new T,Bn=new T,Ni=new T,as=new T,rs=new T,kn=new T;function so(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){kn.fromArray(s,o);const r=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),u=n.dot(kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}const Qc=new Ki,Ui=new T,oo=new T;class Qi{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qc.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ui,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(oo)),this.expandByPoint(Ui.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new T,ao=new T,ls=new T,Tn=new T,ro=new T,cs=new T,lo=new T;class ts{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ao.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(ao);const o=t.distanceTo(e)*.5,a=-this.direction.dot(ls),r=Tn.dot(this.direction),l=-Tn.dot(ls),c=Tn.lengthSq(),u=Math.abs(1-a*a);let h,p,m,g;if(u>0)if(h=a*l-r,p=a*r-l,g=o*u,h>=0)if(p>=-g)if(p<=g){const _=1/u;h*=_,p*=_,m=h*(h+a*p+2*r)+p*(a*h+p+2*l)+c}else p=o,h=Math.max(0,-(a*p+r)),m=-h*h+p*(p+2*l)+c;else p=-o,h=Math.max(0,-(a*p+r)),m=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-a*o+r)),p=h>0?-o:Math.min(Math.max(-o,-l),o),m=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-o,-l),o),m=p*(p+2*l)+c):(h=Math.max(0,-(a*o+r)),p=h>0?o:Math.min(Math.max(-o,-l),o),m=-h*h+p*(p+2*l)+c);else p=a>0?-o:o,h=Math.max(0,-(a*p+r)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ao).addScaledVector(ls,p),m}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),u>=0?(o=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(o=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),h>=0?(r=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(r=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,i,o){ro.subVectors(e,t),cs.subVectors(n,t),lo.crossVectors(ro,cs);let a=this.direction.dot(lo),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const l=r*this.direction.dot(cs.crossVectors(Tn,cs));if(l<0)return null;const c=r*this.direction.dot(ro.cross(Tn));if(c<0||l+c>a)return null;const u=-r*Tn.dot(lo);return u<0?null:this.at(u/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,o,a,r,l,c,u,h,p,m,g,_,f){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,l,c,u,h,p,m,g,_,f)}set(t,e,n,i,o,a,r,l,c,u,h,p,m,g,_,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=o,d[5]=a,d[9]=r,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ri.setFromMatrixColumn(t,0).length(),o=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const p=a*u,m=a*h,g=r*u,_=r*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=p-_*c,e[9]=-r*l,e[2]=_-p*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,m=l*h,g=c*u,_=c*h;e[0]=p+_*r,e[4]=g*r-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-r,e[2]=m*r-g,e[6]=_+p*r,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,m=l*h,g=c*u,_=c*h;e[0]=p-_*r,e[4]=-a*h,e[8]=g+m*r,e[1]=m+g*r,e[5]=a*u,e[9]=_-p*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,m=a*h,g=r*u,_=r*h;e[0]=l*u,e[4]=g*c-m,e[8]=p*c+_,e[1]=l*h,e[5]=_*c+p,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,m=a*c,g=r*l,_=r*c;e[0]=l*u,e[4]=_-p*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-r*u,e[2]=-c*u,e[6]=m*h+g,e[10]=p-_*h}else if(t.order==="XZY"){const p=a*l,m=a*c,g=r*l,_=r*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=r*u,e[10]=_*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(th,t,eh)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),wn.crossVectors(n,ke),wn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),wn.crossVectors(n,ke)),wn.normalize(),hs.crossVectors(ke,wn),i[0]=wn.x,i[4]=hs.x,i[8]=ke.x,i[1]=wn.y,i[5]=hs.y,i[9]=ke.y,i[2]=wn.z,i[6]=hs.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],m=n[13],g=n[2],_=n[6],f=n[10],d=n[14],E=n[3],b=n[7],M=n[11],L=n[15],C=i[0],A=i[4],P=i[8],y=i[12],x=i[1],R=i[5],G=i[9],F=i[13],B=i[2],X=i[6],W=i[10],Y=i[14],H=i[3],Q=i[7],st=i[11],ut=i[15];return o[0]=a*C+r*x+l*B+c*H,o[4]=a*A+r*R+l*X+c*Q,o[8]=a*P+r*G+l*W+c*st,o[12]=a*y+r*F+l*Y+c*ut,o[1]=u*C+h*x+p*B+m*H,o[5]=u*A+h*R+p*X+m*Q,o[9]=u*P+h*G+p*W+m*st,o[13]=u*y+h*F+p*Y+m*ut,o[2]=g*C+_*x+f*B+d*H,o[6]=g*A+_*R+f*X+d*Q,o[10]=g*P+_*G+f*W+d*st,o[14]=g*y+_*F+f*Y+d*ut,o[3]=E*C+b*x+M*B+L*H,o[7]=E*A+b*R+M*X+L*Q,o[11]=E*P+b*G+M*W+L*st,o[15]=E*y+b*F+M*Y+L*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],m=t[14],g=t[3],_=t[7],f=t[11],d=t[15];return g*(+o*l*h-i*c*h-o*r*p+n*c*p+i*r*m-n*l*m)+_*(+e*l*m-e*c*p+o*a*p-i*a*m+i*c*u-o*l*u)+f*(+e*c*h-e*r*m-o*a*h+n*a*m+o*r*u-n*c*u)+d*(-i*r*u-e*l*h+e*r*p+i*a*h-n*a*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],m=t[11],g=t[12],_=t[13],f=t[14],d=t[15],E=h*f*c-_*p*c+_*l*m-r*f*m-h*l*d+r*p*d,b=g*p*c-u*f*c-g*l*m+a*f*m+u*l*d-a*p*d,M=u*_*c-g*h*c+g*r*m-a*_*m-u*r*d+a*h*d,L=g*h*l-u*_*l-g*r*p+a*_*p+u*r*f-a*h*f,C=e*E+n*b+i*M+o*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=E*A,t[1]=(_*p*o-h*f*o-_*i*m+n*f*m+h*i*d-n*p*d)*A,t[2]=(r*f*o-_*l*o+_*i*c-n*f*c-r*i*d+n*l*d)*A,t[3]=(h*l*o-r*p*o-h*i*c+n*p*c+r*i*m-n*l*m)*A,t[4]=b*A,t[5]=(u*f*o-g*p*o+g*i*m-e*f*m-u*i*d+e*p*d)*A,t[6]=(g*l*o-a*f*o-g*i*c+e*f*c+a*i*d-e*l*d)*A,t[7]=(a*p*o-u*l*o+u*i*c-e*p*c-a*i*m+e*l*m)*A,t[8]=M*A,t[9]=(g*h*o-u*_*o-g*n*m+e*_*m+u*n*d-e*h*d)*A,t[10]=(a*_*o-g*r*o+g*n*c-e*_*c-a*n*d+e*r*d)*A,t[11]=(u*r*o-a*h*o-u*n*c+e*h*c+a*n*m-e*r*m)*A,t[12]=L*A,t[13]=(u*_*i-g*h*i+g*n*p-e*_*p-u*n*f+e*h*f)*A,t[14]=(g*r*i-a*_*i-g*n*l+e*_*l+a*n*f-e*r*f)*A,t[15]=(a*h*i-u*r*i+u*n*l-e*h*l-a*n*p+e*r*p)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,u=o*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,u*r+n,u*l-i*a,0,c*l-i*r,u*l+i*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,u=a+a,h=r+r,p=o*c,m=o*u,g=o*h,_=a*u,f=a*h,d=r*h,E=l*c,b=l*u,M=l*h,L=n.x,C=n.y,A=n.z;return i[0]=(1-(_+d))*L,i[1]=(m+M)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(p+d))*C,i[6]=(f+E)*C,i[7]=0,i[8]=(g+b)*A,i[9]=(f-E)*A,i[10]=(1-(p+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),r=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const c=1/o,u=1/a,h=1/r;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=h,Ze.elements[9]*=h,Ze.elements[10]*=h,e.setFromRotationMatrix(Ze),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=_n){const l=this.elements,c=2*o/(e-t),u=2*o/(n-i),h=(e+t)/(e-t),p=(n+i)/(n-i);let m,g;if(r===_n)m=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===Hs)m=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=_n){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-o),p=(e+t)*c,m=(n+i)*u;let g,_;if(r===_n)g=(a+o)*h,_=-2*h;else if(r===Hs)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new T,Ze=new zt,th=new T(0,0,0),eh=new T(1,1,1),wn=new T,hs=new T,ke=new T,rr=new zt,lr=new Se;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],l=i[1],c=i[5],u=i[9],h=i[2],p=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lr.setFromEuler(this),this.setFromQuaternion(lr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Ia{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nh=0;const cr=new T,li=new Se,dn=new zt,ds=new T,Fi=new T,ih=new T,sh=new Se,hr=new T(1,0,0),dr=new T(0,1,0),ur=new T(0,0,1),pr={type:"added"},oh={type:"removed"},ci={type:"childadded",child:null},co={type:"childremoved",child:null};class ge extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new T,e=new qe,n=new Se,i=new T(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Nt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(hr,t)}rotateY(t){return this.rotateOnAxis(dr,t)}rotateZ(t){return this.rotateOnAxis(ur,t)}translateOnAxis(t,e){return cr.copy(t).applyQuaternion(this.quaternion),this.position.add(cr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hr,t)}translateY(t){return this.translateOnAxis(dr,t)}translateZ(t){return this.translateOnAxis(ur,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Fi,ds,this.up):dn.lookAt(ds,Fi,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(dn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pr),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oh),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pr),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),p=a(t.skeletons),m=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const l=[];for(const c in r){const u=r[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new T(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new T,un=new T,ho=new T,pn=new T,hi=new T,di=new T,fr=new T,uo=new T,po=new T,fo=new T,mo=new oe,go=new oe,_o=new oe;class Qe{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Ke.subVectors(i,e),un.subVectors(n,e),ho.subVectors(t,e);const a=Ke.dot(Ke),r=Ke.dot(un),l=Ke.dot(ho),c=un.dot(un),u=un.dot(ho),h=a*c-r*r;if(h===0)return o.set(0,0,0),null;const p=1/h,m=(c*l-r*u)*p,g=(a*u-r*l)*p;return o.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,i,o,a,r,l){return this.getBarycoord(t,e,n,i,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(r,pn.z),l)}static getInterpolatedAttribute(t,e,n,i,o,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(mo,o.x),a.addScaledVector(go,o.y),a.addScaledVector(_o,o.z),a}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),un.subVectors(t,e),Ke.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Ke.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;hi.subVectors(i,n),di.subVectors(o,n),uo.subVectors(t,n);const l=hi.dot(uo),c=di.dot(uo);if(l<=0&&c<=0)return e.copy(n);po.subVectors(t,i);const u=hi.dot(po),h=di.dot(po);if(u>=0&&h<=u)return e.copy(i);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(hi,a);fo.subVectors(t,o);const m=hi.dot(fo),g=di.dot(fo);if(g>=0&&m<=g)return e.copy(o);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(di,r);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return fr.subVectors(o,i),r=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(fr,r);const d=1/(f+_+p);return a=_*d,r=p*d,e.copy(n).addScaledVector(hi,a).addScaledVector(di,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},us={h:0,s:0,l:0};function vo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Vc(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=vo(a,o,t+1/3),this.g=vo(a,o,t),this.b=vo(a,o,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=je){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=Nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Yt.fromWorkingColorSpace(we.copy(this),t),Math.round(Pe(we.r*255,0,255))*65536+Math.round(Pe(we.g*255,0,255))*256+Math.round(Pe(we.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,i=we.g,o=we.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let l,c;const u=(r+a)/2;if(r===a)l=0,c=0;else{const h=a-r;switch(c=u<=.5?h/(a+r):h/(2-a-r),a){case n:l=(i-o)/h+(i<o?6:0);break;case i:l=(o-n)/h+2;break;case o:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=je){Yt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,i=we.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(us);const n=to(An.h,us.h,e),i=to(An.s,us.s,e),o=to(An.l,us.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Ht;Ht.NAMES=Nl;let ah=0;class ti extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Zi(),this.name="",this.blending=yi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Bo,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ee extends ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new T,ps=new Rt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),o=De(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class Ul extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fl extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rh=0;const We=new zt,xo=new ge,ui=new T,Ge=new Ki,Bi=new Ki,ye=new T;class pe extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?Fl:Ul)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Nt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Ge.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Bi.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(Ge.min,Bi.min),Ge.expandByPoint(ye),ye.addVectors(Ge.max,Bi.max),Ge.expandByPoint(ye)):(Ge.expandByPoint(Bi.min),Ge.expandByPoint(Bi.max))}Ge.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)ye.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)ye.fromBufferAttribute(r,c),l&&(ui.fromBufferAttribute(t,c),ye.add(ui)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let P=0;P<n.count;P++)r[P]=new T,l[P]=new T;const c=new T,u=new T,h=new T,p=new Rt,m=new Rt,g=new Rt,_=new T,f=new T;function d(P,y,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),p.fromBufferAttribute(o,P),m.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),u.sub(c),h.sub(c),m.sub(p),g.sub(p);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),r[P].add(_),r[y].add(_),r[x].add(_),l[P].add(f),l[y].add(f),l[x].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,y=E.length;P<y;++P){const x=E[P],R=x.start,G=x.count;for(let F=R,B=R+G;F<B;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new T,M=new T,L=new T,C=new T;function A(P){L.fromBufferAttribute(i,P),C.copy(L);const y=r[P];b.copy(y),b.sub(L.multiplyScalar(L.dot(y))).normalize(),M.crossVectors(C,y);const R=M.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,R)}for(let P=0,y=E.length;P<y;++P){const x=E[P],R=x.start,G=x.count;for(let F=R,B=R+G;F<B;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const i=new T,o=new T,a=new T,r=new T,l=new T,c=new T,u=new T,h=new T;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),_=t.getX(p+1),f=t.getX(p+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),u.subVectors(a,o),h.subVectors(i,o),u.cross(h),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),r.add(u),l.add(u),c.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)i.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,o),h.subVectors(i,o),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(r,l){const c=r.array,u=r.itemSize,h=r.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){r.isInterleavedBufferAttribute?m=l[_]*r.data.stride+r.offset:m=l[_]*u;for(let d=0;d<u;d++)p[g++]=c[m++]}return new Xe(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let u=0,h=c.length;u<h;u++){const p=c[u],m=t(p,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const o=t.morphAttributes;for(const c in o){const u=[],h=o[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mr=new zt,Gn=new ts,fs=new Qi,gr=new T,ms=new T,gs=new T,_s=new T,Mo=new T,vs=new T,_r=new T,xs=new T;class I extends ge{constructor(t=new pe,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){vs.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=r[l],h=o[l];u!==0&&(Mo.fromBufferAttribute(h,t),a?vs.addScaledVector(Mo,u):vs.addScaledVector(Mo.sub(e),u))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(o),Gn.copy(t.ray).recast(t.near),!(fs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(fs,gr)===null||Gn.origin.distanceToSquared(gr)>(t.far-t.near)**2))&&(mr.copy(o).invert(),Gn.copy(t.ray).applyMatrix4(mr),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,p=o.groups,m=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=a[f.materialIndex],E=Math.max(f.start,m.start),b=Math.min(r.count,Math.min(f.start+f.count,m.start+m.count));for(let M=E,L=b;M<L;M+=3){const C=r.getX(M),A=r.getX(M+1),P=r.getX(M+2);i=Ms(this,d,t,n,c,u,h,C,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(r.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const E=r.getX(f),b=r.getX(f+1),M=r.getX(f+2);i=Ms(this,a,t,n,c,u,h,E,b,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=a[f.materialIndex],E=Math.max(f.start,m.start),b=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=E,L=b;M<L;M+=3){const C=M,A=M+1,P=M+2;i=Ms(this,d,t,n,c,u,h,C,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const E=f,b=f+1,M=f+2;i=Ms(this,a,t,n,c,u,h,E,b,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function lh(s,t,e,n,i,o,a,r){let l;if(t.side===Fe?l=n.intersectTriangle(a,o,i,!0,r):l=n.intersectTriangle(i,o,a,t.side===Nn,r),l===null)return null;xs.copy(r),xs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(xs);return c<e.near||c>e.far?null:{distance:c,point:xs.clone(),object:s}}function Ms(s,t,e,n,i,o,a,r,l,c){s.getVertexPosition(r,ms),s.getVertexPosition(l,gs),s.getVertexPosition(c,_s);const u=lh(s,t,e,n,ms,gs,_s,_r);if(u){const h=new T;Qe.getBarycoord(_r,ms,gs,_s,h),i&&(u.uv=Qe.getInterpolatedAttribute(i,r,l,c,h,new Rt)),o&&(u.uv1=Qe.getInterpolatedAttribute(o,r,l,c,h,new Rt)),a&&(u.normal=Qe.getInterpolatedAttribute(a,r,l,c,h,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:r,b:l,c,normal:new T,materialIndex:0};Qe.getNormal(ms,gs,_s,p.normal),u.face=p,u.barycoord=h}return u}class mt extends pe{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],u=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function g(_,f,d,E,b,M,L,C,A,P,y){const x=M/A,R=L/P,G=M/2,F=L/2,B=C/2,X=A+1,W=P+1;let Y=0,H=0;const Q=new T;for(let st=0;st<W;st++){const ut=st*R-F;for(let St=0;St<X;St++){const Vt=St*x-G;Q[_]=Vt*E,Q[f]=ut*b,Q[d]=B,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[f]=0,Q[d]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(St/A),h.push(1-st/P),Y+=1}}for(let st=0;st<P;st++)for(let ut=0;ut<A;ut++){const St=p+ut+X*st,Vt=p+ut+X*(st+1),q=p+(ut+1)+X*(st+1),et=p+(ut+1)+X*st;l.push(St,Vt,et),l.push(Vt,q,et),H+=6}r.addGroup(m,H,y),m+=H,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function ch(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const hh={clone:Ri,merge:Re};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new T,vr=new Rt,xr=new Rt;class ze extends kl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,vr,xr),e.subVectors(xr,vr)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pi=-90,fi=1;class ph extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(pi,fi,t,e);i.layers=this.layers,this.add(i);const o=new ze(pi,fi,t,e);o.layers=this.layers,this.add(o);const a=new ze(pi,fi,t,e);a.layers=this.layers,this.add(a);const r=new ze(pi,fi,t,e);r.layers=this.layers,this.add(r);const l=new ze(pi,fi,t,e);l.layers=this.layers,this.add(l);const c=new ze(pi,fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gl extends Le{constructor(t,e,n,i,o,a,r,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,i,o,a,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new mt(5,5,5),o=new Un({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Dn});o.uniforms.tEquirect.value=e;const a=new I(i,o),r=e.minFilter;return e.minFilter===In&&(e.minFilter=tn),new ph(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const yo=new T,mh=new T,gh=new Nt;class Pn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=yo.subVectors(n,e).cross(mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gh.getNormalMatrix(t),i=this.coplanarPoint(yo).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Qi,ys=new T;class Da{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,o=new Pn,a=new Pn){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],l=i[3],c=i[4],u=i[5],h=i[6],p=i[7],m=i[8],g=i[9],_=i[10],f=i[11],d=i[12],E=i[13],b=i[14],M=i[15];if(n[0].setComponents(l-o,p-c,f-m,M-d).normalize(),n[1].setComponents(l+o,p+c,f+m,M+d).normalize(),n[2].setComponents(l+a,p+u,f+g,M+E).normalize(),n[3].setComponents(l-a,p-u,f-g,M-E).normalize(),n[4].setComponents(l-r,p-h,f-_,M-b).normalize(),e===_n)n[5].setComponents(l+r,p+h,f+_,M+b).normalize();else if(e===Hs)n[5].setComponents(r,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ys.x=i.normal.x>0?t.max.x:t.min.x,ys.y=i.normal.y>0?t.max.y:t.min.y,ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zl(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function _h(s){const t=new WeakMap;function e(r,l){const c=r.array,u=r.usage,h=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,u),r.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:h}}function n(r,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,r),h.length===0)s.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<h.length;m++){const g=h[p],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,h[p]=_)}h.length=p+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(s.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const u=t.get(r);(!u||u.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:o,update:a}}class Ee extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,u=l+1,h=t/r,p=e/l,m=[],g=[],_=[],f=[];for(let d=0;d<u;d++){const E=d*p-a;for(let b=0;b<c;b++){const M=b*h-o;g.push(M,-E,0),_.push(0,0,1),f.push(b/r),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<r;E++){const b=E+c*d,M=E+c*(d+1),L=E+1+c*(d+1),C=E+1+c*d;m.push(b,M,C),m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_d=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ad=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,su=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ou=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,au=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,du=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _u=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ku=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$u=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:vh,alphahash_pars_fragment:xh,alphamap_fragment:Mh,alphamap_pars_fragment:yh,alphatest_fragment:Sh,alphatest_pars_fragment:Eh,aomap_fragment:bh,aomap_pars_fragment:Th,batching_pars_vertex:wh,batching_vertex:Ah,begin_vertex:Ch,beginnormal_vertex:Rh,bsdfs:Ph,iridescence_fragment:Lh,bumpmap_pars_fragment:Ih,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Nh,clipping_planes_vertex:Uh,color_fragment:Fh,color_pars_fragment:Bh,color_pars_vertex:kh,color_vertex:Gh,common:zh,cube_uv_reflection_fragment:Vh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Wh,displacementmap_vertex:jh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:$h,envmap_fragment:Jh,envmap_common_pars_fragment:Zh,envmap_pars_fragment:Kh,envmap_pars_vertex:Qh,envmap_physical_pars_fragment:hd,envmap_vertex:td,fog_vertex:ed,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:od,lightmap_pars_fragment:ad,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:dd,lights_toon_pars_fragment:ud,lights_phong_fragment:pd,lights_phong_pars_fragment:fd,lights_physical_fragment:md,lights_physical_pars_fragment:gd,lights_fragment_begin:_d,lights_fragment_maps:vd,lights_fragment_end:xd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Sd,logdepthbuf_vertex:Ed,map_fragment:bd,map_pars_fragment:Td,map_particle_fragment:wd,map_particle_pars_fragment:Ad,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Rd,morphinstance_vertex:Pd,morphcolor_vertex:Ld,morphnormal_vertex:Id,morphtarget_pars_vertex:Dd,morphtarget_vertex:Od,normal_fragment_begin:Nd,normal_fragment_maps:Ud,normal_pars_fragment:Fd,normal_pars_vertex:Bd,normal_vertex:kd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Wd,opaque_fragment:jd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:$d,dithering_pars_fragment:Jd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:tu,shadowmap_vertex:eu,shadowmask_pars_fragment:nu,skinbase_vertex:iu,skinning_pars_vertex:su,skinning_vertex:ou,skinnormal_vertex:au,specularmap_fragment:ru,specularmap_pars_fragment:lu,tonemapping_fragment:cu,tonemapping_pars_fragment:hu,transmission_fragment:du,transmission_pars_fragment:uu,uv_pars_fragment:pu,uv_pars_vertex:fu,uv_vertex:mu,worldpos_vertex:gu,background_vert:_u,background_frag:vu,backgroundCube_vert:xu,backgroundCube_frag:Mu,cube_vert:yu,cube_frag:Su,depth_vert:Eu,depth_frag:bu,distanceRGBA_vert:Tu,distanceRGBA_frag:wu,equirect_vert:Au,equirect_frag:Cu,linedashed_vert:Ru,linedashed_frag:Pu,meshbasic_vert:Lu,meshbasic_frag:Iu,meshlambert_vert:Du,meshlambert_frag:Ou,meshmatcap_vert:Nu,meshmatcap_frag:Uu,meshnormal_vert:Fu,meshnormal_frag:Bu,meshphong_vert:ku,meshphong_frag:Gu,meshphysical_vert:zu,meshphysical_frag:Vu,meshtoon_vert:Hu,meshtoon_frag:Wu,points_vert:ju,points_frag:Xu,shadow_vert:qu,shadow_frag:Yu,sprite_vert:$u,sprite_frag:Ju},ot={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},an={basic:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Re([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Re([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Re([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Re([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Re([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Re([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Re([ot.common,ot.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Re([ot.lights,ot.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};an.physical={uniforms:Re([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ss={r:0,b:0,g:0},Vn=new qe,Zu=new zt;function Ku(s,t,e,n,i,o,a){const r=new Ht(0);let l=o===!0?0:1,c,u,h=null,p=0,m=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const M=g(E);M===null?d(r,l):M&&M.isColor&&(d(M,1),b=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(E,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===Ys)?(u===void 0&&(u=new I(new mt(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ri(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Vn.copy(b.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zu.makeRotationFromEuler(Vn)),u.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ne,(h!==M||p!==M.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,m=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new I(new Ee(2,2),new Un({name:"BackgroundMaterial",uniforms:Ri(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,m=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,b){E.getRGB(Ss,Bl(s)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,b,a)}return{getClearColor:function(){return r},setClearColor:function(E,b=1){r.set(E),l=b,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(r,l)},render:_,addToRenderList:f}}function Qu(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let o=i,a=!1;function r(x,R,G,F,B){let X=!1;const W=h(F,G,R);o!==W&&(o=W,c(o.object)),X=m(x,F,G,B),X&&g(x,F,G,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(x,R,G,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function u(x){return s.deleteVertexArray(x)}function h(x,R,G){const F=G.wireframe===!0;let B=n[x.id];B===void 0&&(B={},n[x.id]=B);let X=B[R.id];X===void 0&&(X={},B[R.id]=X);let W=X[F];return W===void 0&&(W=p(l()),X[F]=W),W}function p(x){const R=[],G=[],F=[];for(let B=0;B<e;B++)R[B]=0,G[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,R,G,F){const B=o.attributes,X=R.attributes;let W=0;const Y=G.getAttributes();for(const H in Y)if(Y[H].location>=0){const st=B[H];let ut=X[H];if(ut===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),st===void 0||st.attribute!==ut||ut&&st.data!==ut.data)return!0;W++}return o.attributesNum!==W||o.index!==F}function g(x,R,G,F){const B={},X=R.attributes;let W=0;const Y=G.getAttributes();for(const H in Y)if(Y[H].location>=0){let st=X[H];st===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const ut={};ut.attribute=st,st&&st.data&&(ut.data=st.data),B[H]=ut,W++}o.attributes=B,o.attributesNum=W,o.index=F}function _(){const x=o.newAttributes;for(let R=0,G=x.length;R<G;R++)x[R]=0}function f(x){d(x,0)}function d(x,R){const G=o.newAttributes,F=o.enabledAttributes,B=o.attributeDivisors;G[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),B[x]!==R&&(s.vertexAttribDivisor(x,R),B[x]=R)}function E(){const x=o.newAttributes,R=o.enabledAttributes;for(let G=0,F=R.length;G<F;G++)R[G]!==x[G]&&(s.disableVertexAttribArray(G),R[G]=0)}function b(x,R,G,F,B,X,W){W===!0?s.vertexAttribIPointer(x,R,G,B,X):s.vertexAttribPointer(x,R,G,F,B,X)}function M(x,R,G,F){_();const B=F.attributes,X=G.getAttributes(),W=R.defaultAttributeValues;for(const Y in X){const H=X[Y];if(H.location>=0){let Q=B[Y];if(Q===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const st=Q.normalized,ut=Q.itemSize,St=t.get(Q);if(St===void 0)continue;const Vt=St.buffer,q=St.type,et=St.bytesPerElement,vt=q===s.INT||q===s.UNSIGNED_INT||Q.gpuType===wa;if(Q.isInterleavedBufferAttribute){const at=Q.data,Tt=at.stride,Pt=Q.offset;if(at.isInstancedInterleavedBuffer){for(let Lt=0;Lt<H.locationSize;Lt++)d(H.location+Lt,at.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Lt=0;Lt<H.locationSize;Lt++)f(H.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let Lt=0;Lt<H.locationSize;Lt++)b(H.location+Lt,ut/H.locationSize,q,st,Tt*et,(Pt+ut/H.locationSize*Lt)*et,vt)}else{if(Q.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)d(H.location+at,Q.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let at=0;at<H.locationSize;at++)f(H.location+at);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let at=0;at<H.locationSize;at++)b(H.location+at,ut/H.locationSize,q,st,ut*et,ut/H.locationSize*at*et,vt)}}else if(W!==void 0){const st=W[Y];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(H.location,st);break;case 3:s.vertexAttrib3fv(H.location,st);break;case 4:s.vertexAttrib4fv(H.location,st);break;default:s.vertexAttrib1fv(H.location,st)}}}}E()}function L(){P();for(const x in n){const R=n[x];for(const G in R){const F=R[G];for(const B in F)u(F[B].object),delete F[B];delete R[G]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const G in R){const F=R[G];for(const B in F)u(F[B].object),delete F[B];delete R[G]}delete n[x.id]}function A(x){for(const R in n){const G=n[R];if(G[x.id]===void 0)continue;const F=G[x.id];for(const B in F)u(F[B].object),delete F[B];delete G[x.id]}}function P(){y(),a=!0,o!==i&&(o=i,c(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:P,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:E}}function tp(s,t,e){let n;function i(c){n=c}function o(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function r(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,n,1)}function l(c,u,h,p){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*p[_];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function ep(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==en&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const P=A===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gn&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function np(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Pn,r=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||i;return i=p,n=h.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,d=s.get(h);if(!i||g===null||g.length===0||o&&!f)o?u(null):c();else{const E=o?0:n,b=E*4;let M=d.clippingState||null;l.value=M,M=u(g,p,b,m);for(let L=0;L!==b;++L)M[L]=e[L];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=m+_*4,E=p.matrixWorldInverse;r.getNormalMatrix(E),(f===null||f.length<d)&&(f=new Float32Array(d));for(let b=0,M=m;b!==_;++b,M+=4)a.copy(h[b]).applyMatrix4(E,r),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function ip(s){let t=new WeakMap;function e(a,r){return r===Xo?a.mapping=Ti:r===qo&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Xo||r===qo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Vl extends kl{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,Mr=[.125,.215,.35,.446,.526,.582],Yn=20,So=new Vl,yr=new Ht;let Eo=null,bo=0,To=0,wo=!1;const jn=(1+Math.sqrt(5))/2,mi=1/jn,Sr=[new T(-jn,mi,0),new T(jn,mi,0),new T(-mi,0,jn),new T(mi,0,jn),new T(0,jn,-mi),new T(0,jn,mi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Er{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,bo,To),this._renderer.xr.enabled=wo,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ji,format:en,colorSpace:Pi,depthBuffer:!1},i=br(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=br(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sp(o)),this._blurMaterial=op(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,i){const r=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(yr),u.toneMapping=On,u.autoClear=!1;const m=new ee({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new I(new mt,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(yr),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(r.up.set(0,l[d],0),r.lookAt(c[d],0,0)):E===1?(r.up.set(0,0,l[d]),r.lookAt(0,c[d],0)):(r.up.set(0,l[d],0),r.lookAt(0,0,c[d]));const b=this._cubeSize;Es(i,E*b,d>2?b:0,b,b),u.setRenderTarget(i),_&&u.render(g,r),u.render(t,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ti||t.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tr());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new I(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,So)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=Sr[(i-o-1)%Sr.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new I(this._lodPlanes[i],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),_=o/g,f=isFinite(o)?1+Math.floor(u*_):Yn;f>Yn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Yn}`);const d=[];let E=0;for(let A=0;A<Yn;++A){const P=A/_,y=Math.exp(-P*P/2);d.push(y),A===0?E+=y:A<f&&(E+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=a==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-n;const M=this._sizeLods[i],L=3*M*(i>b-vi?i-b+vi:0),C=4*(this._cubeSize-M);Es(e,L,C,3*M,2*M),l.setRenderTarget(e),l.render(h,So)}}function sp(s){const t=[],e=[],n=[];let i=s;const o=s-vi+1+Mr.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let l=1/r;a>s-vi?l=Mr[a-s+vi-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,d=1,E=new Float32Array(_*g*m),b=new Float32Array(f*g*m),M=new Float32Array(d*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,P=C>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(y,_*g*C),b.set(p,f*g*C);const x=[C,C,C,C,C,C];M.set(x,d*g*C)}const L=new pe;L.setAttribute("position",new Xe(E,_)),L.setAttribute("uv",new Xe(b,f)),L.setAttribute("faceIndex",new Xe(M,d)),t.push(L),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function br(s,t,e){const n=new Kn(s,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function op(s,t,e){const n=new Float32Array(Yn),i=new T(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Tr(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function wr(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ap(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Xo||l===qo,u=l===Ti||l===wi;if(c||u){let h=t.get(r);const p=h!==void 0?h.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==p)return e===null&&(e=new Er(s)),h=c?e.fromEquirectangular(r,h):e.fromCubemap(r,h),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),h.texture;if(h!==void 0)return h.texture;{const m=r.image;return c&&m&&m.height>0||u&&m&&i(m)?(e===null&&(e=new Er(s)),h=c?e.fromEquirectangular(r):e.fromCubemap(r),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),r.addEventListener("dispose",o),h.texture):null}}}return r}function i(r){let l=0;const c=6;for(let u=0;u<c;u++)r[u]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lp(s,t,e,n){const i={},o=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let f=0,d=_.length;f<d;f++)t.remove(_[f])}p.removeEventListener("dispose",a),delete i[p.id];const m=o.get(p);m&&(t.remove(m),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(h,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)t.update(p[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,d=_.length;f<d;f++)t.update(_[f],s.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let b=0,M=E.length;b<M;b+=3){const L=E[b+0],C=E[b+1],A=E[b+2];p.push(L,C,C,A,A,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const L=b+0,C=b+1,A=b+2;p.push(L,C,C,A,A,L)}}else return;const f=new(Il(p)?Fl:Ul)(p,1);f.version=_;const d=o.get(h);d&&t.remove(d),o.set(h,f)}function u(h){const p=o.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return o.get(h)}return{get:r,update:l,getWireframeAttribute:u}}function cp(s,t,e){let n;function i(p){n=p}let o,a;function r(p){o=p.type,a=p.bytesPerElement}function l(p,m){s.drawElements(n,m,o,p*a),e.update(m,n,1)}function c(p,m,g){g!==0&&(s.drawElementsInstanced(n,m,o,p*a,g),e.update(m,n,g))}function u(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,p,0,g);let f=0;for(let d=0;d<g;d++)f+=m[d];e.update(f,n,1)}function h(p,m,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)c(p[d]/a,m[d],_[d]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,o,p,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=m[E]*_[E];e.update(d,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dp(s,t,e){const n=new WeakMap,i=new oe;function o(a,r,l){const c=a.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(r);if(p===void 0||p.count!==h){let x=function(){P.dispose(),n.delete(r),r.removeEventListener("dispose",x)};var m=x;p!==void 0&&p.texture.dispose();const g=r.morphAttributes.position!==void 0,_=r.morphAttributes.normal!==void 0,f=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],E=r.morphAttributes.normal||[],b=r.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),f===!0&&(M=3);let L=r.attributes.position.count*M,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*C*4*h),P=new Ol(A,L,C,h);P.type=gn,P.needsUpdate=!0;const y=M*4;for(let R=0;R<h;R++){const G=d[R],F=E[R],B=b[R],X=L*C*4*R;for(let W=0;W<G.count;W++){const Y=W*y;g===!0&&(i.fromBufferAttribute(G,W),A[X+Y+0]=i.x,A[X+Y+1]=i.y,A[X+Y+2]=i.z,A[X+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,W),A[X+Y+4]=i.x,A[X+Y+5]=i.y,A[X+Y+6]=i.z,A[X+Y+7]=0),f===!0&&(i.fromBufferAttribute(B,W),A[X+Y+8]=i.x,A[X+Y+9]=i.y,A[X+Y+10]=i.z,A[X+Y+11]=B.itemSize===4?i.w:1)}}p={count:h,texture:P,size:new Rt(L,C)},n.set(r,p),r.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:o}}function up(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return h}function a(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}class Hl extends Le{constructor(t,e,n,i,o,a,r,l,c,u=Si){if(u!==Si&&u!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=Zn),n===void 0&&u===Ci&&(n=Ai),super(null,i,o,a,r,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wl=new Le,Ar=new Hl(1,1),jl=new Ol,Xl=new Kc,ql=new Gl,Cr=[],Rr=[],Pr=new Float32Array(16),Lr=new Float32Array(9),Ir=new Float32Array(4);function Li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Cr[i];if(o===void 0&&(o=new Float32Array(i),Cr[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Js(s,t){let e=Rr[t];e===void 0&&(e=new Int32Array(t),Rr[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function pp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function _p(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ir.set(n),s.uniformMatrix2fv(this.addr,!1,Ir),Me(e,n)}}function vp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Lr.set(n),s.uniformMatrix3fv(this.addr,!1,Lr),Me(e,n)}}function xp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Pr.set(n),s.uniformMatrix4fv(this.addr,!1,Pr),Me(e,n)}}function Mp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function Ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function Cp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Ar.compareFunction=Ll,o=Ar):o=Wl,e.setTexture2D(t||o,i)}function Rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xl,i)}function Pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ql,i)}function Lp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jl,i)}function Ip(s){switch(s){case 5126:return pp;case 35664:return fp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ep;case 5125:return bp;case 36294:return Tp;case 36295:return wp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Dp(s,t){s.uniform1fv(this.addr,t)}function Op(s,t){const e=Li(t,this.size,2);s.uniform2fv(this.addr,e)}function Np(s,t){const e=Li(t,this.size,3);s.uniform3fv(this.addr,e)}function Up(s,t){const e=Li(t,this.size,4);s.uniform4fv(this.addr,e)}function Fp(s,t){const e=Li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Bp(s,t){const e=Li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function kp(s,t){const e=Li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gp(s,t){s.uniform1iv(this.addr,t)}function zp(s,t){s.uniform2iv(this.addr,t)}function Vp(s,t){s.uniform3iv(this.addr,t)}function Hp(s,t){s.uniform4iv(this.addr,t)}function Wp(s,t){s.uniform1uiv(this.addr,t)}function jp(s,t){s.uniform2uiv(this.addr,t)}function Xp(s,t){s.uniform3uiv(this.addr,t)}function qp(s,t){s.uniform4uiv(this.addr,t)}function Yp(s,t,e){const n=this.cache,i=t.length,o=Js(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),Me(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Wl,o[a])}function $p(s,t,e){const n=this.cache,i=t.length,o=Js(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),Me(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Xl,o[a])}function Jp(s,t,e){const n=this.cache,i=t.length,o=Js(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),Me(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ql,o[a])}function Zp(s,t,e){const n=this.cache,i=t.length,o=Js(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),Me(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||jl,o[a])}function Kp(s){switch(s){case 5126:return Dp;case 35664:return Op;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Bp;case 35676:return kp;case 5124:case 35670:return Gp;case 35667:case 35671:return zp;case 35668:case 35672:return Vp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return jp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Zp}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ip(e.type)}}class tf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kp(e.type)}}class ef{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function Dr(s,t){s.seq.push(t),s.map[t.id]=t}function nf(s,t,e){const n=s.name,i=n.length;for(Ao.lastIndex=0;;){const o=Ao.exec(n),a=Ao.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){Dr(e,c===void 0?new Qp(r,s,t):new tf(r,s,t));break}else{let h=e.map[r];h===void 0&&(h=new ef(r),Dr(e,h)),e=h}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);nf(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Or(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const sf=37297;let of=0;function af(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const Nr=new Nt;function rf(s){Yt._getMatrix(Nr,Yt.workingColorSpace,s);const t=`mat3( ${Nr.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case $s:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ur(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+af(s.getShaderSource(t),a)}else return i}function lf(s,t){const e=rf(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cf(s,t){let e;switch(t){case Tc:e="Linear";break;case wc:e="Reinhard";break;case Ac:e="Cineon";break;case vl:e="ACESFilmic";break;case Rc:e="AgX";break;case Pc:e="Neutral";break;case Cc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bs=new T;function hf(){Yt.getLuminanceCoefficients(bs);const s=bs.x.toFixed(4),t=bs.y.toFixed(4),e=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function df(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function uf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function ji(s){return s!==""}function Fr(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Br(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ff=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(s){return s.replace(ff,gf)}const mf=new Map;function gf(s,t){let e=Gt[t];if(e===void 0){const n=mf.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const _f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kr(s){return s.replace(_f,vf)}function vf(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Gr(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case wi:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Sf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _l:t="ENVMAP_BLENDING_MULTIPLY";break;case Ec:t="ENVMAP_BLENDING_MIX";break;case bc:t="ENVMAP_BLENDING_ADD";break}return t}function Ef(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bf(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=xf(e),c=Mf(e),u=yf(e),h=Sf(e),p=Ef(e),m=df(e),g=uf(o),_=i.createProgram();let f,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),d.length>0&&(d+=`
`)):(f=[Gr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),d=[Gr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Gt.tonemapping_pars_fragment:"",e.toneMapping!==On?cf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,lf("linearToOutputTexel",e.outputColorSpace),hf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),a=Sa(a),a=Fr(a,e),a=Br(a,e),r=Sa(r),r=Fr(r,e),r=Br(r,e),a=kr(a),r=kr(r),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=E+f+a,M=E+d+r,L=Or(i,i.VERTEX_SHADER,b),C=Or(i,i.FRAGMENT_SHADER,M);i.attachShader(_,L),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(C).trim();let X=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,C);else{const Y=Ur(i,L,"vertex"),H=Ur(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+Y+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||B==="")&&(W=!1);W&&(R.diagnostics={runnable:X,programLog:G,vertexShader:{log:F,prefix:f},fragmentShader:{log:B,prefix:d}})}i.deleteShader(L),i.deleteShader(C),P=new Gs(i,_),y=pf(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,sf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=of++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Tf=0;class wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Af(t),e.set(t,n)),n}}class Af{constructor(t){this.id=Tf++,this.code=t,this.usedTimes=0}}function Cf(s,t,e,n,i,o,a){const r=new Ia,l=new wf,c=new Set,u=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,x,R,G,F){const B=G.fog,X=F.geometry,W=y.isMeshStandardMaterial?G.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=Y&&Y.mapping===Ys?Y.image.height:null,Q=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=st!==void 0?st.length:0;let St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let Vt,q,et,vt;if(Q){const te=an[Q];Vt=te.vertexShader,q=te.fragmentShader}else Vt=y.vertexShader,q=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);const at=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Pt=F.isInstancedMesh===!0,Lt=F.isBatchedMesh===!0,$t=!!y.map,Ot=!!y.matcap,me=!!Y,U=!!y.aoMap,Ve=!!y.lightMap,Wt=!!y.bumpMap,jt=!!y.normalMap,At=!!y.displacementMap,ce=!!y.emissiveMap,wt=!!y.metalnessMap,w=!!y.roughnessMap,v=y.anisotropy>0,k=y.clearcoat>0,J=y.dispersion>0,K=y.iridescence>0,$=y.sheen>0,Et=y.transmission>0,lt=v&&!!y.anisotropyMap,ft=k&&!!y.clearcoatMap,qt=k&&!!y.clearcoatNormalMap,tt=k&&!!y.clearcoatRoughnessMap,gt=K&&!!y.iridescenceMap,Ct=K&&!!y.iridescenceThicknessMap,It=$&&!!y.sheenColorMap,_t=$&&!!y.sheenRoughnessMap,Xt=!!y.specularMap,kt=!!y.specularColorMap,re=!!y.specularIntensityMap,D=Et&&!!y.transmissionMap,rt=Et&&!!y.thicknessMap,j=!!y.gradientMap,Z=!!y.alphaMap,dt=y.alphaTest>0,ct=!!y.alphaHash,Ut=!!y.extensions;let fe=On;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(fe=s.toneMapping);const be={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Vt,fragmentShader:q,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Lt,batchingColor:Lt&&F._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&F.instanceColor!==null,instancingMorph:Pt&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Pi,alphaToCoverage:!!y.alphaToCoverage,map:$t,matcap:Ot,envMap:me,envMapMode:me&&Y.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Ve,bumpMap:Wt,normalMap:jt,displacementMap:p&&At,emissiveMap:ce,normalMapObjectSpace:jt&&y.normalMapType===Oc,normalMapTangentSpace:jt&&y.normalMapType===Pl,metalnessMap:wt,roughnessMap:w,anisotropy:v,anisotropyMap:lt,clearcoat:k,clearcoatMap:ft,clearcoatNormalMap:qt,clearcoatRoughnessMap:tt,dispersion:J,iridescence:K,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:It,sheenRoughnessMap:_t,specularMap:Xt,specularColorMap:kt,specularIntensityMap:re,transmission:Et,transmissionMap:D,thicknessMap:rt,gradientMap:j,opaque:y.transparent===!1&&y.blending===yi&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:dt,alphaHash:ct,combine:y.combine,mapUv:$t&&_(y.map.channel),aoMapUv:U&&_(y.aoMap.channel),lightMapUv:Ve&&_(y.lightMap.channel),bumpMapUv:Wt&&_(y.bumpMap.channel),normalMapUv:jt&&_(y.normalMap.channel),displacementMapUv:At&&_(y.displacementMap.channel),emissiveMapUv:ce&&_(y.emissiveMap.channel),metalnessMapUv:wt&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:lt&&_(y.anisotropyMap.channel),clearcoatMapUv:ft&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(y.sheenRoughnessMap.channel),specularMapUv:Xt&&_(y.specularMap.channel),specularColorMapUv:kt&&_(y.specularColorMap.channel),specularIntensityMapUv:re&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:rt&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(jt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&($t||Z),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:St,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:$t&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ue,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(E(x,y),b(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),y.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),y.push(r.mask)}function M(y){const x=g[y.type];let R;if(x){const G=an[x];R=hh.clone(G.uniforms)}else R=y.uniforms;return R}function L(y,x){let R;for(let G=0,F=u.length;G<F;G++){const B=u[G];if(B.cacheKey===x){R=B,++R.usedTimes;break}}return R===void 0&&(R=new bf(s,x,y,o),u.push(R)),R}function C(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:P}}function Rf(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function n(a){s.delete(a)}function i(a,r,l){s.get(a)[r]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function Pf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zr(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vr(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(h,p,m,g,_,f){let d=s[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},s[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=f),t++,d}function r(h,p,m,g,_,f){const d=a(h,p,m,g,_,f);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(h,p,m,g,_,f){const d=a(h,p,m,g,_,f);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,p){e.length>1&&e.sort(h||Pf),n.length>1&&n.sort(p||zr),i.length>1&&i.sort(p||zr)}function u(){for(let h=t,p=s.length;h<p;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:l,finish:u,sort:c}}function Lf(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new Vr,s.set(n,[a])):i>=o.length?(a=new Vr,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function If(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ht};break;case"SpotLight":e={position:new T,direction:new T,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function Df(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Of=0;function Nf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Uf(s){const t=new If,e=Df(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,o=new zt,a=new zt;function r(c){let u=0,h=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,_=0,f=0,d=0,E=0,b=0,M=0,L=0,C=0,A=0;c.sort(Nf);for(let y=0,x=c.length;y<x;y++){const R=c[y],G=R.color,F=R.intensity,B=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=G.r*F,h+=G.g*F,p+=G.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],F);A++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=R.shadow.matrix,E++}n.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(G).multiplyScalar(F),W.distance=B,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const Y=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Y.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,M++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(G).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=W,f++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Y=R.shadow,H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[d]=W,d++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==f||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=f,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=A,n.version=Of++)}function l(c,u){let h=0,p=0,m=0,g=0,_=0;const f=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const b=c[d];if(b.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),h++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),m++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(f),_++}}}return{setup:r,setupView:l,state:n}}function Hr(s){const t=new Uf(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function r(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function Ff(s){let t=new WeakMap;function e(i,o=0){const a=t.get(i);let r;return a===void 0?(r=new Hr(s),t.set(i,[r])):o>=a.length?(r=new Hr(s),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}class Bf extends ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kf extends ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vf(s,t,e){let n=new Da;const i=new Rt,o=new Rt,a=new oe,r=new Bf({depthPacking:Dc}),l=new kf,c={},u=e.maxTextureSize,h={[Nn]:Fe,[Fe]:Nn,[Ue]:Ue},p=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Gf,fragmentShader:zf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let d=this.type;this.render=function(C,A,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=d!==fn&&this.type===fn,B=d===fn&&this.type!==fn;for(let X=0,W=C.length;X<W;X++){const Y=C[X],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Q=H.getFrameExtents();if(i.multiply(Q),o.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/Q.x),i.x=o.x*Q.x,H.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/Q.y),i.y=o.y*Q.y,H.mapSize.y=o.y)),H.map===null||F===!0||B===!0){const ut=this.type!==fn?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new Kn(i.x,i.y,ut),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const st=H.getViewportCount();for(let ut=0;ut<st;ut++){const St=H.getViewport(ut);a.set(o.x*St.x,o.y*St.y,o.x*St.z,o.y*St.w),G.viewport(a),H.updateMatrices(Y,ut),n=H.getFrustum(),M(A,P,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&E(H,P),H.needsUpdate=!1}d=this.type,f.needsUpdate=!1,s.setRenderTarget(y,x,R)};function E(C,A){const P=t.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Kn(i.x,i.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,P,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,P,m,_,null)}function b(C,A,P,y){let x=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:r,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=x.uuid,F=A.uuid;let B=c[G];B===void 0&&(B={},c[G]=B);let X=B[F];X===void 0&&(X=x.clone(),B[F]=X,A.addEventListener("dispose",L)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,y===fn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=s.properties.get(x);G.light=P}return x}function M(C,A,P,y,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===fn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const F=t.update(C),B=C.material;if(Array.isArray(B)){const X=F.groups;for(let W=0,Y=X.length;W<Y;W++){const H=X[W],Q=B[H.materialIndex];if(Q&&Q.visible){const st=b(C,Q,y,x);C.onBeforeShadow(s,C,A,P,F,st,H),s.renderBufferDirect(P,null,F,st,C,H),C.onAfterShadow(s,C,A,P,F,st,H)}}}else if(B.visible){const X=b(C,B,y,x);C.onBeforeShadow(s,C,A,P,F,X,null),s.renderBufferDirect(P,null,F,X,C,null),C.onAfterShadow(s,C,A,P,F,X,null)}}const G=C.children;for(let F=0,B=G.length;F<B;F++)M(G[F],A,P,y,x)}function L(C){C.target.removeEventListener("dispose",L);for(const P in c){const y=c[P],x=C.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Hf={[ko]:Go,[zo]:Wo,[Vo]:jo,[bi]:Ho,[Go]:ko,[Wo]:zo,[jo]:Vo,[Ho]:bi};function Wf(s,t){function e(){let D=!1;const rt=new oe;let j=null;const Z=new oe(0,0,0,0);return{setMask:function(dt){j!==dt&&!D&&(s.colorMask(dt,dt,dt,dt),j=dt)},setLocked:function(dt){D=dt},setClear:function(dt,ct,Ut,fe,be){be===!0&&(dt*=fe,ct*=fe,Ut*=fe),rt.set(dt,ct,Ut,fe),Z.equals(rt)===!1&&(s.clearColor(dt,ct,Ut,fe),Z.copy(rt))},reset:function(){D=!1,j=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,j=null,Z=null,dt=null;return{setReversed:function(ct){if(rt!==ct){const Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const fe=dt;dt=null,this.setClear(fe)}rt=ct},getReversed:function(){return rt},setTest:function(ct){ct?at(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(ct){j!==ct&&!D&&(s.depthMask(ct),j=ct)},setFunc:function(ct){if(rt&&(ct=Hf[ct]),Z!==ct){switch(ct){case ko:s.depthFunc(s.NEVER);break;case Go:s.depthFunc(s.ALWAYS);break;case zo:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case Vo:s.depthFunc(s.EQUAL);break;case Ho:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case jo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){D=ct},setClear:function(ct){dt!==ct&&(rt&&(ct=1-ct),s.clearDepth(ct),dt=ct)},reset:function(){D=!1,j=null,Z=null,dt=null,rt=!1}}}function i(){let D=!1,rt=null,j=null,Z=null,dt=null,ct=null,Ut=null,fe=null,be=null;return{setTest:function(te){D||(te?at(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(te){rt!==te&&!D&&(s.stencilMask(te),rt=te)},setFunc:function(te,Ye,rn){(j!==te||Z!==Ye||dt!==rn)&&(s.stencilFunc(te,Ye,rn),j=te,Z=Ye,dt=rn)},setOp:function(te,Ye,rn){(ct!==te||Ut!==Ye||fe!==rn)&&(s.stencilOp(te,Ye,rn),ct=te,Ut=Ye,fe=rn)},setLocked:function(te){D=te},setClear:function(te){be!==te&&(s.clearStencil(te),be=te)},reset:function(){D=!1,rt=null,j=null,Z=null,dt=null,ct=null,Ut=null,fe=null,be=null}}}const o=new e,a=new n,r=new i,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,m=[],g=null,_=!1,f=null,d=null,E=null,b=null,M=null,L=null,C=null,A=new Ht(0,0,0),P=0,y=!1,x=null,R=null,G=null,F=null,B=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Y>=2);let Q=null,st={};const ut=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Vt=new oe().fromArray(ut),q=new oe().fromArray(St);function et(D,rt,j,Z){const dt=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<j;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(rt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ct}const vt={};vt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),at(s.DEPTH_TEST),a.setFunc(bi),Wt(!1),jt(Ya),at(s.CULL_FACE),U(Dn);function at(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Tt(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Pt(D,rt){return h[D]!==rt?(s.bindFramebuffer(D,rt),h[D]=rt,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=rt),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function Lt(D,rt){let j=m,Z=!1;if(D){j=p.get(rt),j===void 0&&(j=[],p.set(rt,j));const dt=D.textures;if(j.length!==dt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Ut=dt.length;ct<Ut;ct++)j[ct]=s.COLOR_ATTACHMENT0+ct;j.length=dt.length,Z=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,Z=!0);Z&&s.drawBuffers(j)}function $t(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Ot={[qn]:s.FUNC_ADD,[ac]:s.FUNC_SUBTRACT,[rc]:s.FUNC_REVERSE_SUBTRACT};Ot[lc]=s.MIN,Ot[cc]=s.MAX;const me={[hc]:s.ZERO,[dc]:s.ONE,[uc]:s.SRC_COLOR,[Fo]:s.SRC_ALPHA,[vc]:s.SRC_ALPHA_SATURATE,[gc]:s.DST_COLOR,[fc]:s.DST_ALPHA,[pc]:s.ONE_MINUS_SRC_COLOR,[Bo]:s.ONE_MINUS_SRC_ALPHA,[_c]:s.ONE_MINUS_DST_COLOR,[mc]:s.ONE_MINUS_DST_ALPHA,[xc]:s.CONSTANT_COLOR,[Mc]:s.ONE_MINUS_CONSTANT_COLOR,[yc]:s.CONSTANT_ALPHA,[Sc]:s.ONE_MINUS_CONSTANT_ALPHA};function U(D,rt,j,Z,dt,ct,Ut,fe,be,te){if(D===Dn){_===!0&&(Tt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),D!==oc){if(D!==f||te!==y){if((d!==qn||M!==qn)&&(s.blendEquation(s.FUNC_ADD),d=qn,M=qn),te)switch(D){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.ONE,s.ONE);break;case $a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ja:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,b=null,L=null,C=null,A.set(0,0,0),P=0,f=D,y=te}return}dt=dt||rt,ct=ct||j,Ut=Ut||Z,(rt!==d||dt!==M)&&(s.blendEquationSeparate(Ot[rt],Ot[dt]),d=rt,M=dt),(j!==E||Z!==b||ct!==L||Ut!==C)&&(s.blendFuncSeparate(me[j],me[Z],me[ct],me[Ut]),E=j,b=Z,L=ct,C=Ut),(fe.equals(A)===!1||be!==P)&&(s.blendColor(fe.r,fe.g,fe.b,be),A.copy(fe),P=be),f=D,y=!1}function Ve(D,rt){D.side===Ue?Tt(s.CULL_FACE):at(s.CULL_FACE);let j=D.side===Fe;rt&&(j=!j),Wt(j),D.blending===yi&&D.transparent===!1?U(Dn):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),o.setMask(D.colorWrite);const Z=D.stencilWrite;r.setTest(Z),Z&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function jt(D){D!==ic?(at(s.CULL_FACE),D!==R&&(D===Ya?s.cullFace(s.BACK):D===sc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),R=D}function At(D){D!==G&&(W&&s.lineWidth(D),G=D)}function ce(D,rt,j){D?(at(s.POLYGON_OFFSET_FILL),(F!==rt||B!==j)&&(s.polygonOffset(rt,j),F=rt,B=j)):Tt(s.POLYGON_OFFSET_FILL)}function wt(D){D?at(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+X-1),Q!==D&&(s.activeTexture(D),Q=D)}function v(D,rt,j){j===void 0&&(Q===null?j=s.TEXTURE0+X-1:j=Q);let Z=st[j];Z===void 0&&(Z={type:void 0,texture:void 0},st[j]=Z),(Z.type!==D||Z.texture!==rt)&&(Q!==j&&(s.activeTexture(j),Q=j),s.bindTexture(D,rt||vt[D]),Z.type=D,Z.texture=rt)}function k(){const D=st[Q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){Vt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Vt.copy(D))}function _t(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Xt(D,rt){let j=c.get(rt);j===void 0&&(j=new WeakMap,c.set(rt,j));let Z=j.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(rt,D.name),j.set(D,Z))}function kt(D,rt){const Z=c.get(rt).get(D);l.get(rt)!==Z&&(s.uniformBlockBinding(rt,Z,D.__bindingPointIndex),l.set(rt,Z))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Q=null,st={},h={},p=new WeakMap,m=[],g=null,_=!1,f=null,d=null,E=null,b=null,M=null,L=null,C=null,A=new Ht(0,0,0),P=0,y=!1,x=null,R=null,G=null,F=null,B=null,Vt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:at,disable:Tt,bindFramebuffer:Pt,drawBuffers:Lt,useProgram:$t,setBlending:U,setMaterial:Ve,setFlipSided:Wt,setCullFace:jt,setLineWidth:At,setPolygonOffset:ce,setScissorTest:wt,activeTexture:w,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:K,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:It,viewport:_t,reset:re}}function Wr(s,t,e,n){const i=jf(n);switch(e){case El:return s*t;case Tl:return s*t;case wl:return s*t*2;case Al:return s*t/i.components*i.byteLength;case Ra:return s*t/i.components*i.byteLength;case Cl:return s*t*2/i.components*i.byteLength;case Pa:return s*t*2/i.components*i.byteLength;case bl:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case La:return s*t*4/i.components*i.byteLength;case Os:case Ns:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Us:case Fs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jo:case Ko:return Math.max(s,16)*Math.max(t,8)/4;case $o:case Zo:return Math.max(s,8)*Math.max(t,8)/2;case Qo:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ha:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Bs:case ga:case _a:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rl:case va:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xa:case Ma:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jf(s){switch(s){case Mn:case Ml:return{byteLength:1,components:1};case $i:case yl:case Ji:return{byteLength:2,components:1};case Aa:case Ca:return{byteLength:2,components:4};case Zn:case wa:case gn:return{byteLength:4,components:1};case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Xf(s,t,e,n,i,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return m?new OffscreenCanvas(w,v):Ws("canvas")}function _(w,v,k){let J=1;const K=wt(w);if((K.width>k||K.height>k)&&(J=k/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(J*K.width),Et=Math.floor(J*K.height);h===void 0&&(h=g($,Et));const lt=v?g($,Et):h;return lt.width=$,lt.height=Et,lt.getContext("2d").drawImage(w,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+Et+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function f(w){return w.generateMipmaps}function d(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,v,k,J,K=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=v;if(v===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),v===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),v===s.RGBA){const Et=K?$s:Yt.getTransfer(J);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=Et===ne?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(w,v){let k;return w?v===null||v===Zn||v===Ai?k=s.DEPTH24_STENCIL8:v===gn?k=s.DEPTH32F_STENCIL8:v===$i&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===Ai?k=s.DEPTH_COMPONENT24:v===gn?k=s.DEPTH_COMPONENT32F:v===$i&&(k=s.DEPTH_COMPONENT16),k}function L(w,v){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==tn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),P(v),v.isVideoTexture&&u.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),x(v)}function P(w){const v=n.get(w);if(v.__webglInit===void 0)return;const k=w.source,J=p.get(k);if(J){const K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(w),Object.keys(J).length===0&&p.delete(k)}n.remove(w)}function y(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const k=w.source,J=p.get(k);delete J[v.__cacheKey],a.memory.textures--}function x(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let K=0;K<v.__webglFramebuffer[J].length;K++)s.deleteFramebuffer(v.__webglFramebuffer[J][K]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=w.textures;for(let J=0,K=k.length;J<K;J++){const $=n.get(k[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(w)}let R=0;function G(){R=0}function F(){const w=R;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),R+=1,w}function B(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function X(w,v){const k=n.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,w,v);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function W(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function Y(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function H(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){et(k,w,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const Q={[mn]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[Yo]:s.MIRRORED_REPEAT},st={[nn]:s.NEAREST,[Lc]:s.NEAREST_MIPMAP_NEAREST,[ss]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Qs]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},ut={[Nc]:s.NEVER,[zc]:s.ALWAYS,[Uc]:s.LESS,[Ll]:s.LEQUAL,[Fc]:s.EQUAL,[Gc]:s.GEQUAL,[Bc]:s.GREATER,[kc]:s.NOTEQUAL};function St(w,v){if(v.type===gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===tn||v.magFilter===Qs||v.magFilter===ss||v.magFilter===In||v.minFilter===tn||v.minFilter===Qs||v.minFilter===ss||v.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Q[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Q[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Q[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,st[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==ss&&v.minFilter!==In||v.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const J=v.source;let K=p.get(J);K===void 0&&(K={},p.set(J,K));const $=B(v);if($!==w.__cacheKey){K[$]===void 0&&(K[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[$].usedTimes++;const Et=K[w.__cacheKey];Et!==void 0&&(K[w.__cacheKey].usedTimes--,Et.usedTimes===0&&y(v)),w.__cacheKey=$,w.__webglTexture=K[$].texture}return k}function q(w,v,k){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const K=Vt(w,v),$=v.source;e.bindTexture(J,w.__webglTexture,s.TEXTURE0+k);const Et=n.get($);if($.version!==Et.__version||K===!0){e.activeTexture(s.TEXTURE0+k);const lt=Yt.getPrimaries(Yt.workingColorSpace),ft=v.colorSpace===Ln?null:Yt.getPrimaries(v.colorSpace),qt=v.colorSpace===Ln||lt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=_(v.image,!1,i.maxTextureSize);tt=ce(v,tt);const gt=o.convert(v.format,v.colorSpace),Ct=o.convert(v.type);let It=b(v.internalFormat,gt,Ct,v.colorSpace,v.isVideoTexture);St(J,v);let _t;const Xt=v.mipmaps,kt=v.isVideoTexture!==!0,re=Et.__version===void 0||K===!0,D=$.dataReady,rt=L(v,tt);if(v.isDepthTexture)It=M(v.format===Ci,v.type),re&&(kt?e.texStorage2D(s.TEXTURE_2D,1,It,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,It,tt.width,tt.height,0,gt,Ct,null));else if(v.isDataTexture)if(Xt.length>0){kt&&re&&e.texStorage2D(s.TEXTURE_2D,rt,It,Xt[0].width,Xt[0].height);for(let j=0,Z=Xt.length;j<Z;j++)_t=Xt[j],kt?D&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,j,It,_t.width,_t.height,0,gt,Ct,_t.data);v.generateMipmaps=!1}else kt?(re&&e.texStorage2D(s.TEXTURE_2D,rt,It,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Ct,tt.data)):e.texImage2D(s.TEXTURE_2D,0,It,tt.width,tt.height,0,gt,Ct,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,It,Xt[0].width,Xt[0].height,tt.depth);for(let j=0,Z=Xt.length;j<Z;j++)if(_t=Xt[j],v.format!==en)if(gt!==null)if(kt){if(D)if(v.layerUpdates.size>0){const dt=Wr(_t.width,_t.height,v.format,v.type);for(const ct of v.layerUpdates){const Ut=_t.data.subarray(ct*dt/_t.data.BYTES_PER_ELEMENT,(ct+1)*dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,ct,_t.width,_t.height,1,gt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,tt.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,It,_t.width,_t.height,tt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,tt.depth,gt,Ct,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,It,_t.width,_t.height,tt.depth,0,gt,Ct,_t.data)}else{kt&&re&&e.texStorage2D(s.TEXTURE_2D,rt,It,Xt[0].width,Xt[0].height);for(let j=0,Z=Xt.length;j<Z;j++)_t=Xt[j],v.format!==en?gt!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,j,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,j,It,_t.width,_t.height,0,gt,Ct,_t.data)}else if(v.isDataArrayTexture)if(kt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,It,tt.width,tt.height,tt.depth),D)if(v.layerUpdates.size>0){const j=Wr(tt.width,tt.height,v.format,v.type);for(const Z of v.layerUpdates){const dt=tt.data.subarray(Z*j/tt.data.BYTES_PER_ELEMENT,(Z+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,gt,Ct,dt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Ct,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,tt.width,tt.height,tt.depth,0,gt,Ct,tt.data);else if(v.isData3DTexture)kt?(re&&e.texStorage3D(s.TEXTURE_3D,rt,It,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Ct,tt.data)):e.texImage3D(s.TEXTURE_3D,0,It,tt.width,tt.height,tt.depth,0,gt,Ct,tt.data);else if(v.isFramebufferTexture){if(re)if(kt)e.texStorage2D(s.TEXTURE_2D,rt,It,tt.width,tt.height);else{let j=tt.width,Z=tt.height;for(let dt=0;dt<rt;dt++)e.texImage2D(s.TEXTURE_2D,dt,It,j,Z,0,gt,Ct,null),j>>=1,Z>>=1}}else if(Xt.length>0){if(kt&&re){const j=wt(Xt[0]);e.texStorage2D(s.TEXTURE_2D,rt,It,j.width,j.height)}for(let j=0,Z=Xt.length;j<Z;j++)_t=Xt[j],kt?D&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,gt,Ct,_t):e.texImage2D(s.TEXTURE_2D,j,It,gt,Ct,_t);v.generateMipmaps=!1}else if(kt){if(re){const j=wt(tt);e.texStorage2D(s.TEXTURE_2D,rt,It,j.width,j.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ct,tt)}else e.texImage2D(s.TEXTURE_2D,0,It,gt,Ct,tt);f(v)&&d(J),Et.__version=$.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function et(w,v,k){if(v.image.length!==6)return;const J=Vt(w,v),K=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const $=n.get(K);if(K.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const Et=Yt.getPrimaries(Yt.workingColorSpace),lt=v.colorSpace===Ln?null:Yt.getPrimaries(v.colorSpace),ft=v.colorSpace===Ln||Et===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const qt=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!qt&&!tt?gt[Z]=_(v.image[Z],!0,i.maxCubemapSize):gt[Z]=tt?v.image[Z].image:v.image[Z],gt[Z]=ce(v,gt[Z]);const Ct=gt[0],It=o.convert(v.format,v.colorSpace),_t=o.convert(v.type),Xt=b(v.internalFormat,It,_t,v.colorSpace),kt=v.isVideoTexture!==!0,re=$.__version===void 0||J===!0,D=K.dataReady;let rt=L(v,Ct);St(s.TEXTURE_CUBE_MAP,v);let j;if(qt){kt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Xt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){j=gt[Z].mipmaps;for(let dt=0;dt<j.length;dt++){const ct=j[dt];v.format!==en?It!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,Xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ct.width,ct.height,It,_t,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,Xt,ct.width,ct.height,0,It,_t,ct.data)}}}else{if(j=v.mipmaps,kt&&re){j.length>0&&rt++;const Z=wt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,It,_t,gt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,gt[Z].width,gt[Z].height,0,It,_t,gt[Z].data);for(let dt=0;dt<j.length;dt++){const Ut=j[dt].image[Z].image;kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,Ut.width,Ut.height,It,_t,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,Xt,Ut.width,Ut.height,0,It,_t,Ut.data)}}else{kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,It,_t,gt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,It,_t,gt[Z]);for(let dt=0;dt<j.length;dt++){const ct=j[dt];kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,It,_t,ct.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,Xt,It,_t,ct.image[Z])}}}f(v)&&d(s.TEXTURE_CUBE_MAP),$.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function vt(w,v,k,J,K,$){const Et=o.convert(k.format,k.colorSpace),lt=o.convert(k.type),ft=b(k.internalFormat,Et,lt,k.colorSpace),qt=n.get(v),tt=n.get(k);if(tt.__renderTarget=v,!qt.__hasExternalTextures){const gt=Math.max(1,v.width>>$),Ct=Math.max(1,v.height>>$);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,$,ft,gt,Ct,v.depth,0,Et,lt,null):e.texImage2D(K,$,ft,gt,Ct,0,Et,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),jt(v)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,tt.__webglTexture,0,Wt(v)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,K,tt.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(w,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){const J=v.depthTexture,K=J&&J.isDepthTexture?J.type:null,$=M(v.stencilBuffer,K),Et=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Wt(v);jt(v)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,$,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,w)}else{const J=v.textures;for(let K=0;K<J.length;K++){const $=J[K],Et=o.convert($.format,$.colorSpace),lt=o.convert($.type),ft=b($.internalFormat,Et,lt,$.colorSpace),qt=Wt(v);k&&jt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,ft,v.width,v.height):jt(v)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,ft,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ft,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const K=J.__webglTexture,$=Wt(v);if(v.depthTexture.format===Si)jt(v)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(v.depthTexture.format===Ci)jt(v)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pt(w){const v=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=J}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=s.createRenderbuffer(),at(v.__webglDepthbuffer[J],w,!1);else{const K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),at(v.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(w,v,k){const J=n.get(w);v!==void 0&&vt(J.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Pt(w)}function $t(w){const v=w.texture,k=n.get(w),J=n.get(v);w.addEventListener("dispose",A);const K=w.textures,$=w.isWebGLCubeRenderTarget===!0,Et=K.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let ft=0;ft<v.mipmaps.length;ft++)k.__webglFramebuffer[lt][ft]=s.createFramebuffer()}else k.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)k.__webglFramebuffer[lt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Et)for(let lt=0,ft=K.length;lt<ft;lt++){const qt=n.get(K[lt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&jt(w)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<K.length;lt++){const ft=K[lt];k.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const qt=o.convert(ft.format,ft.colorSpace),tt=o.convert(ft.type),gt=b(ft.internalFormat,qt,tt,ft.colorSpace,w.isXRRenderTarget===!0),Ct=Wt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,gt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),at(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),St(s.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)vt(k.__webglFramebuffer[lt][ft],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else vt(k.__webglFramebuffer[lt],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);f(v)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,ft=K.length;lt<ft;lt++){const qt=K[lt],tt=n.get(qt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),St(s.TEXTURE_2D,qt),vt(k.__webglFramebuffer,w,qt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),f(qt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,J.__webglTexture),St(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)vt(k.__webglFramebuffer[ft],w,v,s.COLOR_ATTACHMENT0,lt,ft);else vt(k.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,lt,0);f(v)&&d(lt),e.unbindTexture()}w.depthBuffer&&Pt(w)}function Ot(w){const v=w.textures;for(let k=0,J=v.length;k<J;k++){const K=v[k];if(f(K)){const $=E(w),Et=n.get(K).__webglTexture;e.bindTexture($,Et),d($),e.unbindTexture()}}}const me=[],U=[];function Ve(w){if(w.samples>0){if(jt(w)===!1){const v=w.textures,k=w.width,J=w.height;let K=s.COLOR_BUFFER_BIT;const $=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(w),lt=v.length>1;if(lt)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const qt=n.get(v[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,K,s.NEAREST),l===!0&&(me.length=0,U.length=0,me.push(s.COLOR_ATTACHMENT0+ft),w.depthBuffer&&w.resolveDepthBuffer===!1&&(me.push($),U.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const qt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Wt(w){return Math.min(i.maxSamples,w.samples)}function jt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function ce(w,v){const k=w.colorSpace,J=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Pi&&k!==Ln&&(Yt.getTransfer(k)===ne?(J!==en||K!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function wt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Lt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=jt}function qf(s,t){function e(n,i=Ln){let o;const a=Yt.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Aa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return s.BYTE;if(n===yl)return s.SHORT;if(n===$i)return s.UNSIGNED_SHORT;if(n===wa)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===gn)return s.FLOAT;if(n===Ji)return s.HALF_FLOAT;if(n===El)return s.ALPHA;if(n===bl)return s.RGB;if(n===en)return s.RGBA;if(n===Tl)return s.LUMINANCE;if(n===wl)return s.LUMINANCE_ALPHA;if(n===Si)return s.DEPTH_COMPONENT;if(n===Ci)return s.DEPTH_STENCIL;if(n===Al)return s.RED;if(n===Ra)return s.RED_INTEGER;if(n===Cl)return s.RG;if(n===Pa)return s.RG_INTEGER;if(n===La)return s.RGBA_INTEGER;if(n===Os||n===Ns||n===Us||n===Fs)if(a===ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Os)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Os)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Jo||n===Zo||n===Ko)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===$o)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===ta||n===ea)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Qo||n===ta)return a===ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ea)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===sa||n===oa||n===aa||n===ra||n===la||n===ca||n===ha||n===da||n===ua||n===pa||n===fa||n===ma)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===na)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return a===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===ga||n===_a)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Bs)return a===ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===va||n===xa||n===Ma)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Bs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===va)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Yf extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $f={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent($f)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:Jf,fragmentShader:Zf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qf extends Qn{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,g=null;const _=new Kf,f=e.getContextAttributes();let d=null,E=null;const b=[],M=[],L=new Rt;let C=null;const A=new ze;A.viewport=new oe;const P=new ze;P.viewport=new oe;const y=[A,P],x=new Yf;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=b[q];return et===void 0&&(et=new Co,b[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=b[q];return et===void 0&&(et=new Co,b[q]=et),et.getGripSpace()},this.getHand=function(q){let et=b[q];return et===void 0&&(et=new Co,b[q]=et),et.getHandSpace()};function F(q){const et=M.indexOf(q.inputSource);if(et===-1)return;const vt=b[et];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",X);for(let q=0;q<b.length;q++){const et=M[q];et!==null&&(M[q]=null,b[q].disconnect(et))}R=null,G=null,_.reset(),t.setRenderTarget(d),m=null,p=null,h=null,i=null,E=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Kn(m.framebufferWidth,m.framebufferHeight,{format:en,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,vt=null,at=null;f.depth&&(at=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?Ci:Si,vt=f.stencil?Ai:Zn);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:o};h=new XRWebGLBinding(i,e),p=h.createProjectionLayer(Tt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new Kn(p.textureWidth,p.textureHeight,{format:en,type:Mn,depthTexture:new Hl(p.textureWidth,p.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),Vt.setContext(i),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let et=0;et<q.removed.length;et++){const vt=q.removed[et],at=M.indexOf(vt);at>=0&&(M[at]=null,b[at].disconnect(vt))}for(let et=0;et<q.added.length;et++){const vt=q.added[et];let at=M.indexOf(vt);if(at===-1){for(let Pt=0;Pt<b.length;Pt++)if(Pt>=M.length){M.push(vt),at=Pt;break}else if(M[Pt]===null){M[Pt]=vt,at=Pt;break}if(at===-1)break}const Tt=b[at];Tt&&Tt.connect(vt)}}const W=new T,Y=new T;function H(q,et,vt){W.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(vt.matrixWorld);const at=W.distanceTo(Y),Tt=et.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Lt=Tt[14]/(Tt[10]-1),$t=Tt[14]/(Tt[10]+1),Ot=(Tt[9]+1)/Tt[5],me=(Tt[9]-1)/Tt[5],U=(Tt[8]-1)/Tt[0],Ve=(Pt[8]+1)/Pt[0],Wt=Lt*U,jt=Lt*Ve,At=at/(-U+Ve),ce=At*-U;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ce),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const wt=Lt+At,w=$t+At,v=Wt-ce,k=jt+(at-ce),J=Ot*$t/w*wt,K=me*$t/w*wt;q.projectionMatrix.makePerspective(v,k,J,K,wt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),x.near=P.near=A.near=et,x.far=P.far=A.far=vt,(R!==x.near||G!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,G=x.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,x.layers.mask=A.layers.mask|P.layers.mask;const at=q.parent,Tt=x.cameras;Q(x,at);for(let Pt=0;Pt<Tt.length;Pt++)Q(Tt[Pt],at);Tt.length===2?H(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),st(q,x,at)};function st(q,et,vt){vt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ya*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ut=null;function St(q,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const vt=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let at=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Pt=0;Pt<vt.length;Pt++){const Lt=vt[Pt];let $t=null;if(m!==null)$t=m.getViewport(Lt);else{const me=h.getViewSubImage(p,Lt);$t=me.viewport,Pt===0&&(t.setRenderTargetTextures(E,me.colorTexture,p.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(E))}let Ot=y[Pt];Ot===void 0&&(Ot=new ze,Ot.layers.enable(Pt),Ot.viewport=new oe,y[Pt]=Ot),Ot.matrix.fromArray(Lt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Lt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set($t.x,$t.y,$t.width,$t.height),Pt===0&&(x.matrix.copy(Ot.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Ot)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=h.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let vt=0;vt<b.length;vt++){const at=M[vt],Tt=b[vt];at!==null&&Tt!==void 0&&Tt.update(at,et,c||a)}ut&&ut(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Vt=new zl;Vt.setAnimationLoop(St),this.setAnimationLoop=function(q){ut=q},this.dispose=function(){}}}const Hn=new qe,tm=new zt;function em(s,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Bl(s)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function i(f,d,E,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(f,d):d.isMeshToonMaterial?(o(f,d),h(f,d)):d.isMeshPhongMaterial?(o(f,d),u(f,d)):d.isMeshStandardMaterial?(o(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,M)):d.isMeshMatcapMaterial?(o(f,d),g(f,d)):d.isMeshDepthMaterial?o(f,d):d.isMeshDistanceMaterial?(o(f,d),_(f,d)):d.isMeshNormalMaterial?o(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&r(f,d)):d.isPointsMaterial?l(f,d,E,b):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Fe&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Fe&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const E=t.get(d),b=E.envMap,M=E.envMapRotation;b&&(f.envMap.value=b,Hn.copy(M),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),f.envMapRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Hn)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function r(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,E,b){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*E,f.scale.value=b*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,E){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const E=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nm(s,t,e,n){let i={},o={},a=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const M=b.program;n.uniformBlockBinding(E,M)}function c(E,b){let M=i[E.id];M===void 0&&(g(E),M=u(E),i[E.id]=M,E.addEventListener("dispose",f));const L=b.program;n.updateUBOMapping(E,L);const C=t.render.frame;o[E.id]!==C&&(p(E),o[E.id]=C)}function u(E){const b=h();E.__bindingPointIndex=b;const M=s.createBuffer(),L=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function h(){for(let E=0;E<r;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const b=i[E.id],M=E.uniforms,L=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let C=0,A=M.length;C<A;C++){const P=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,x=P.length;y<x;y++){const R=P[y];if(m(R,C,y,L)===!0){const G=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let X=0;X<F.length;X++){const W=F[X],Y=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,G+B,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,b,M,L){const C=E.value,A=b+"_"+M;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const P=L[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(E){const b=E.uniforms;let M=0;const L=16;for(let A=0,P=b.length;A<P;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let x=0,R=y.length;x<R;x++){const G=y[x],F=Array.isArray(G.value)?G.value:[G.value];for(let B=0,X=F.length;B<X;B++){const W=F[B],Y=_(W),H=M%L,Q=H%Y.boundary,st=H+Q;M+=Q,st!==0&&L-st<Y.storage&&(M+=L-st),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=Y.storage}}}const C=M%L;return C>0&&(M+=L-C),E.__size=M,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function f(E){const b=E.target;b.removeEventListener("dispose",f);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete o[b.id]}function d(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},o={}}return{bind:l,update:c,dispose:d}}class im{constructor(t={}){const{canvas:e=Wc(),context:n=null,depth:i=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,d=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=On,this.toneMappingExposure=1;const M=this;let L=!1,C=0,A=0,P=null,y=-1,x=null;const R=new oe,G=new oe;let F=null;const B=new Ht(0);let X=0,W=e.width,Y=e.height,H=1,Q=null,st=null;const ut=new oe(0,0,W,Y),St=new oe(0,0,W,Y);let Vt=!1;const q=new Da;let et=!1,vt=!1;const at=new zt,Tt=new zt,Pt=new T,Lt=new oe,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function me(){return P===null?H:1}let U=n;function Ve(S,O){return e.getContext(S,O)}try{const S={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ta}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){const O="webgl2";if(U=Ve(O,S),U===null)throw Ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Wt,jt,At,ce,wt,w,v,k,J,K,$,Et,lt,ft,qt,tt,gt,Ct,It,_t,Xt,kt,re,D;function rt(){Wt=new rp(U),Wt.init(),kt=new qf(U,Wt),jt=new ep(U,Wt,t,kt),At=new Wf(U,Wt),jt.reverseDepthBuffer&&p&&At.buffers.depth.setReversed(!0),ce=new hp(U),wt=new Rf,w=new Xf(U,Wt,At,wt,jt,kt,ce),v=new ip(M),k=new ap(M),J=new _h(U),re=new Qu(U,J),K=new lp(U,J,ce,re),$=new up(U,K,J,ce),It=new dp(U,jt,w),tt=new np(wt),Et=new Cf(M,v,k,Wt,jt,re,tt),lt=new em(M,wt),ft=new Lf,qt=new Ff(Wt),Ct=new Ku(M,v,k,At,$,m,l),gt=new Vf(M,$,jt),D=new nm(U,ce,jt,At),_t=new tp(U,Wt,ce),Xt=new cp(U,Wt,ce),ce.programs=Et.programs,M.capabilities=jt,M.extensions=Wt,M.properties=wt,M.renderLists=ft,M.shadowMap=gt,M.state=At,M.info=ce}rt();const j=new Qf(M,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(W,Y,!1))},this.getSize=function(S){return S.set(W,Y)},this.setSize=function(S,O,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Y=O,e.width=Math.floor(S*H),e.height=Math.floor(O*H),z===!0&&(e.style.width=S+"px",e.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(W*H,Y*H).floor()},this.setDrawingBufferSize=function(S,O,z){W=S,Y=O,H=z,e.width=Math.floor(S*z),e.height=Math.floor(O*z),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(ut)},this.setViewport=function(S,O,z,V){S.isVector4?ut.set(S.x,S.y,S.z,S.w):ut.set(S,O,z,V),At.viewport(R.copy(ut).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,O,z,V){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,O,z,V),At.scissor(G.copy(St).multiplyScalar(H).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(S){At.setScissorTest(Vt=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,O=!0,z=!0){let V=0;if(S){let N=!1;if(P!==null){const nt=P.texture.format;N=nt===La||nt===Pa||nt===Ra}if(N){const nt=P.texture.type,ht=nt===Mn||nt===Zn||nt===$i||nt===Ai||nt===Aa||nt===Ca,xt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Dt=xt.r,Ft=xt.g,yt=xt.b;ht?(g[0]=Dt,g[1]=Ft,g[2]=yt,g[3]=Mt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=yt,_[3]=Mt,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT),z&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),qt.dispose(),wt.dispose(),v.dispose(),k.dispose(),$.dispose(),re.dispose(),D.dispose(),Et.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ga),j.removeEventListener("sessionend",za),Fn.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=ce.autoReset,O=gt.enabled,z=gt.autoUpdate,V=gt.needsUpdate,N=gt.type;rt(),ce.autoReset=S,gt.enabled=O,gt.autoUpdate=z,gt.needsUpdate=V,gt.type=N}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ut(S){const O=S.target;O.removeEventListener("dispose",Ut),fe(O)}function fe(S){be(S),wt.remove(S)}function be(S){const O=wt.get(S).programs;O!==void 0&&(O.forEach(function(z){Et.releaseProgram(z)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,z,V,N,nt){O===null&&(O=$t);const ht=N.isMesh&&N.matrixWorld.determinant()<0,xt=tc(S,O,z,V,N);At.setMaterial(V,ht);let Mt=z.index,Dt=1;if(V.wireframe===!0){if(Mt=K.getWireframeAttribute(z),Mt===void 0)return;Dt=2}const Ft=z.drawRange,yt=z.attributes.position;let Jt=Ft.start*Dt,le=(Ft.start+Ft.count)*Dt;nt!==null&&(Jt=Math.max(Jt,nt.start*Dt),le=Math.min(le,(nt.start+nt.count)*Dt)),Mt!==null?(Jt=Math.max(Jt,0),le=Math.min(le,Mt.count)):yt!=null&&(Jt=Math.max(Jt,0),le=Math.min(le,yt.count));const he=le-Jt;if(he<0||he===1/0)return;re.setup(N,V,xt,z,Mt);let Ie,Zt=_t;if(Mt!==null&&(Ie=J.get(Mt),Zt=Xt,Zt.setIndex(Ie)),N.isMesh)V.wireframe===!0?(At.setLineWidth(V.wireframeLinewidth*me()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(N.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*me()),N.isLineSegments?Zt.setMode(U.LINES):N.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else N.isPoints?Zt.setMode(U.POINTS):N.isSprite&&Zt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,ln=N._multiDrawCounts,Kt=N._multiDrawCount,$e=Mt?J.get(Mt).bytesPerElement:1,ei=wt.get(V).currentProgram.getUniforms();for(let Be=0;Be<Kt;Be++)ei.setValue(U,"_gl_DrawID",Be),Zt.render(bt[Be]/$e,ln[Be])}else if(N.isInstancedMesh)Zt.renderInstances(Jt,he,N.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ln=Math.min(z.instanceCount,bt);Zt.renderInstances(Jt,he,ln)}else Zt.render(Jt,he)};function te(S,O,z){S.transparent===!0&&S.side===Ue&&S.forceSinglePass===!1?(S.side=Fe,S.needsUpdate=!0,is(S,O,z),S.side=Nn,S.needsUpdate=!0,is(S,O,z),S.side=Ue):is(S,O,z)}this.compile=function(S,O,z=null){z===null&&(z=S),d=qt.get(z),d.init(O),b.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const xt=nt[ht];te(xt,z,N),V.add(xt)}else te(nt,z,N),V.add(nt)}),b.pop(),d=null,V},this.compileAsync=function(S,O,z=null){const V=this.compile(S,O,z);return new Promise(N=>{function nt(){if(V.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){N(S);return}setTimeout(nt,10)}Wt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ye=null;function rn(S){Ye&&Ye(S)}function Ga(){Fn.stop()}function za(){Fn.start()}const Fn=new zl;Fn.setAnimationLoop(rn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(S){Ye=S,j.setAnimationLoop(S),S===null?Fn.stop():Fn.start()},j.addEventListener("sessionstart",Ga),j.addEventListener("sessionend",za),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,O,P),d=qt.get(S,b.length),d.init(O),b.push(d),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Tt),vt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,vt),f=ft.get(S,E.length),f.init(),E.push(f),j.enabled===!0&&j.isPresenting===!0){const nt=M.xr.getDepthSensingMesh();nt!==null&&Ks(nt,O,-1/0,M.sortObjects)}Ks(S,O,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(Q,st),Ot=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ot&&Ct.addToRenderList(f,S),this.info.render.frame++,et===!0&&tt.beginShadows();const z=d.state.shadowsArray;gt.render(z,S,O),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=f.opaque,N=f.transmissive;if(d.setupLights(),O.isArrayCamera){const nt=O.cameras;if(N.length>0)for(let ht=0,xt=nt.length;ht<xt;ht++){const Mt=nt[ht];Ha(V,N,S,Mt)}Ot&&Ct.render(S);for(let ht=0,xt=nt.length;ht<xt;ht++){const Mt=nt[ht];Va(f,S,Mt,Mt.viewport)}}else N.length>0&&Ha(V,N,S,O),Ot&&Ct.render(S),Va(f,S,O);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,O),re.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(d=b[b.length-1],et===!0&&tt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?f=E[E.length-1]:f=null};function Ks(S,O,z,V){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){V&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Tt);const ht=$.update(S),xt=S.material;xt.visible&&f.push(S,ht,xt,z,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const ht=$.update(S),xt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Lt.copy(ht.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(Tt)),Array.isArray(xt)){const Mt=ht.groups;for(let Dt=0,Ft=Mt.length;Dt<Ft;Dt++){const yt=Mt[Dt],Jt=xt[yt.materialIndex];Jt&&Jt.visible&&f.push(S,ht,Jt,z,Lt.z,yt)}}else xt.visible&&f.push(S,ht,xt,z,Lt.z,null)}}const nt=S.children;for(let ht=0,xt=nt.length;ht<xt;ht++)Ks(nt[ht],O,z,V)}function Va(S,O,z,V){const N=S.opaque,nt=S.transmissive,ht=S.transparent;d.setupLightsView(z),et===!0&&tt.setGlobalState(M.clippingPlanes,z),V&&At.viewport(R.copy(V)),N.length>0&&ns(N,O,z),nt.length>0&&ns(nt,O,z),ht.length>0&&ns(ht,O,z),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ha(S,O,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Kn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Ji:Mn,minFilter:In,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const nt=d.state.transmissionRenderTarget[V.id],ht=V.viewport||R;nt.setSize(ht.z,ht.w);const xt=M.getRenderTarget();M.setRenderTarget(nt),M.getClearColor(B),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Ot&&Ct.render(z);const Mt=M.toneMapping;M.toneMapping=On;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),et===!0&&tt.setGlobalState(M.clippingPlanes,V),ns(S,z,V),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let yt=0,Jt=O.length;yt<Jt;yt++){const le=O[yt],he=le.object,Ie=le.geometry,Zt=le.material,bt=le.group;if(Zt.side===Ue&&he.layers.test(V.layers)){const ln=Zt.side;Zt.side=Fe,Zt.needsUpdate=!0,Wa(he,z,V,Ie,Zt,bt),Zt.side=ln,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}M.setRenderTarget(xt),M.setClearColor(B,X),Dt!==void 0&&(V.viewport=Dt),M.toneMapping=Mt}function ns(S,O,z){const V=O.isScene===!0?O.overrideMaterial:null;for(let N=0,nt=S.length;N<nt;N++){const ht=S[N],xt=ht.object,Mt=ht.geometry,Dt=V===null?ht.material:V,Ft=ht.group;xt.layers.test(z.layers)&&Wa(xt,O,z,Mt,Dt,Ft)}}function Wa(S,O,z,V,N,nt){S.onBeforeRender(M,O,z,V,N,nt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,O,z,V,S,nt),N.transparent===!0&&N.side===Ue&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,M.renderBufferDirect(z,O,V,N,S,nt),N.side=Nn,N.needsUpdate=!0,M.renderBufferDirect(z,O,V,N,S,nt),N.side=Ue):M.renderBufferDirect(z,O,V,N,S,nt),S.onAfterRender(M,O,z,V,N,nt)}function is(S,O,z){O.isScene!==!0&&(O=$t);const V=wt.get(S),N=d.state.lights,nt=d.state.shadowsArray,ht=N.state.version,xt=Et.getParameters(S,N.state,nt,O,z),Mt=Et.getProgramCacheKey(xt);let Dt=V.programs;V.environment=S.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(S.isMeshStandardMaterial?k:v).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Ut),Dt=new Map,V.programs=Dt);let Ft=Dt.get(Mt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ht)return Xa(S,xt),Ft}else xt.uniforms=Et.getUniforms(S),S.onBeforeCompile(xt,M),Ft=Et.acquireProgram(xt,Mt),Dt.set(Mt,Ft),V.uniforms=xt.uniforms;const yt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=tt.uniform),Xa(S,xt),V.needsLights=nc(S),V.lightsStateVersion=ht,V.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function ja(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Gs.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Xa(S,O){const z=wt.get(S);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function tc(S,O,z,V,N){O.isScene!==!0&&(O=$t),w.resetTextureUnits();const nt=O.fog,ht=V.isMeshStandardMaterial?O.environment:null,xt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pi,Mt=(V.isMeshStandardMaterial?k:v).get(V.envMap||ht),Dt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,le=!!z.morphAttributes.color;let he=On;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(he=M.toneMapping);const Ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=Ie!==void 0?Ie.length:0,bt=wt.get(V),ln=d.state.lights;if(et===!0&&(vt===!0||S!==x)){const He=S===x&&V.id===y;tt.setState(V,S,He)}let Kt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ln.state.version||bt.outputColorSpace!==xt||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==Mt||V.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ft||bt.morphTargets!==yt||bt.morphNormals!==Jt||bt.morphColors!==le||bt.toneMapping!==he||bt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,bt.__version=V.version);let $e=bt.currentProgram;Kt===!0&&($e=is(V,O,N));let ei=!1,Be=!1,Ii=!1;const de=$e.getUniforms(),sn=bt.uniforms;if(At.useProgram($e.program)&&(ei=!0,Be=!0,Ii=!0),V.id!==y&&(y=V.id,Be=!0),ei||x!==S){At.buffers.depth.getReversed()?(at.copy(S.projectionMatrix),Xc(at),qc(at),de.setValue(U,"projectionMatrix",at)):de.setValue(U,"projectionMatrix",S.projectionMatrix),de.setValue(U,"viewMatrix",S.matrixWorldInverse);const yn=de.map.cameraPosition;yn!==void 0&&yn.setValue(U,Pt.setFromMatrixPosition(S.matrixWorld)),jt.logarithmicDepthBuffer&&de.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&de.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Be=!0,Ii=!0)}if(N.isSkinnedMesh){de.setOptional(U,N,"bindMatrix"),de.setOptional(U,N,"bindMatrixInverse");const He=N.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),de.setValue(U,"boneTexture",He.boneTexture,w))}N.isBatchedMesh&&(de.setOptional(U,N,"batchingTexture"),de.setValue(U,"batchingTexture",N._matricesTexture,w),de.setOptional(U,N,"batchingIdTexture"),de.setValue(U,"batchingIdTexture",N._indirectTexture,w),de.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(U,"batchingColorTexture",N._colorsTexture,w));const Di=z.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&It.update(N,z,$e),(Be||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,de.setValue(U,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(sn.envMap.value=Mt,sn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(sn.envMapIntensity.value=O.environmentIntensity),Be&&(de.setValue(U,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&ec(sn,Ii),nt&&V.fog===!0&&lt.refreshFogUniforms(sn,nt),lt.refreshMaterialUniforms(sn,V,H,Y,d.state.transmissionRenderTarget[S.id]),Gs.upload(U,ja(bt),sn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gs.upload(U,ja(bt),sn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&de.setValue(U,"center",N.center),de.setValue(U,"modelViewMatrix",N.modelViewMatrix),de.setValue(U,"normalMatrix",N.normalMatrix),de.setValue(U,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const He=V.uniformsGroups;for(let yn=0,Sn=He.length;yn<Sn;yn++){const qa=He[yn];D.update(qa,$e),D.bind(qa,$e)}}return $e}function ec(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function nc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,O,z){wt.get(S.texture).__webglTexture=O,wt.get(S.depthTexture).__webglTexture=z;const V=wt.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){const z=wt.get(S);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,z=0){P=S,C=O,A=z;let V=!0,N=null,nt=!1,ht=!1;if(S){const Mt=wt.get(S);if(Mt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Mt.__hasExternalTextures)w.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const yt=S.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&wt.has(yt)&&(S.width!==yt.image.width||S.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ht=!0);const Ft=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?N=Ft[O][z]:N=Ft[O],nt=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=wt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[z]:N=Ft,R.copy(S.viewport),G.copy(S.scissor),F=S.scissorTest}else R.copy(ut).multiplyScalar(H).floor(),G.copy(St).multiplyScalar(H).floor(),F=Vt;if(At.bindFramebuffer(U.FRAMEBUFFER,N)&&V&&At.drawBuffers(S,N),At.viewport(R),At.scissor(G),At.setScissorTest(F),nt){const Mt=wt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,z)}else if(ht){const Mt=wt.get(S.texture),Dt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,z||0,Dt)}y=-1},this.readRenderTargetPixels=function(S,O,z,V,N,nt,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){At.bindFramebuffer(U.FRAMEBUFFER,xt);try{const Mt=S.texture,Dt=Mt.format,Ft=Mt.type;if(!jt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-V&&z>=0&&z<=S.height-N&&U.readPixels(O,z,V,N,kt.convert(Dt),kt.convert(Ft),nt)}finally{const Mt=P!==null?wt.get(P).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,O,z,V,N,nt,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){const Mt=S.texture,Dt=Mt.format,Ft=Mt.type;if(!jt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-V&&z>=0&&z<=S.height-N){At.bindFramebuffer(U.FRAMEBUFFER,xt);const yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(O,z,V,N,kt.convert(Dt),kt.convert(Ft),0);const Jt=P!==null?wt.get(P).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,Jt);const le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await jc(U,le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(yt),U.deleteSync(le),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,z=0){S.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-z),N=Math.floor(S.image.width*V),nt=Math.floor(S.image.height*V),ht=O!==null?O.x:0,xt=O!==null?O.y:0;w.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,ht,xt,N,nt),At.unbindTexture()},this.copyTextureToTexture=function(S,O,z=null,V=null,N=0){S.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],O=arguments[2],N=arguments[3]||0,z=null);let nt,ht,xt,Mt,Dt,Ft,yt,Jt,le;const he=S.isCompressedTexture?S.mipmaps[N]:S.image;z!==null?(nt=z.max.x-z.min.x,ht=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Mt=z.min.x,Dt=z.min.y,Ft=z.isBox3?z.min.z:0):(nt=he.width,ht=he.height,xt=he.depth||1,Mt=0,Dt=0,Ft=0),V!==null?(yt=V.x,Jt=V.y,le=V.z):(yt=0,Jt=0,le=0);const Ie=kt.convert(O.format),Zt=kt.convert(O.type);let bt;O.isData3DTexture?(w.setTexture3D(O,0),bt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),bt=U.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const ln=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$e=U.getParameter(U.UNPACK_SKIP_PIXELS),ei=U.getParameter(U.UNPACK_SKIP_ROWS),Be=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const Ii=S.isDataArrayTexture||S.isData3DTexture,de=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const sn=wt.get(S),Di=wt.get(O),He=wt.get(sn.__renderTarget),yn=wt.get(Di.__renderTarget);At.bindFramebuffer(U.READ_FRAMEBUFFER,He.__webglFramebuffer),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Sn=0;Sn<xt;Sn++)Ii&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(S).__webglTexture,N,Ft+Sn),S.isDepthTexture?(de&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(O).__webglTexture,N,le+Sn),U.blitFramebuffer(Mt,Dt,nt,ht,yt,Jt,nt,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):de?U.copyTexSubImage3D(bt,N,yt,Jt,le+Sn,Mt,Dt,nt,ht):U.copyTexSubImage2D(bt,N,yt,Jt,le+Sn,Mt,Dt,nt,ht);At.bindFramebuffer(U.READ_FRAMEBUFFER,null),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else de?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(bt,N,yt,Jt,le,nt,ht,xt,Ie,Zt,he.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,N,yt,Jt,le,nt,ht,xt,Ie,he.data):U.texSubImage3D(bt,N,yt,Jt,le,nt,ht,xt,Ie,Zt,he):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,yt,Jt,nt,ht,Ie,Zt,he.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,yt,Jt,he.width,he.height,Ie,he.data):U.texSubImage2D(U.TEXTURE_2D,N,yt,Jt,nt,ht,Ie,Zt,he);U.pixelStorei(U.UNPACK_ROW_LENGTH,ln),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,ei),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be),N===0&&O.generateMipmaps&&U.generateMipmap(bt),At.unbindTexture()},this.copyTextureToTexture3D=function(S,O,z=null,V=null,N=0){return S.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,S=arguments[2],O=arguments[3],N=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,z,V,N)},this.initRenderTarget=function(S){wt.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),At.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,At.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Na{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sm extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vn extends ti{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const js=new T,Xs=new T,jr=new zt,ki=new ts,Ts=new Qi,Ro=new T,Xr=new T;class Ne extends ge{constructor(t=new pe,e=new vn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)js.fromBufferAttribute(e,i-1),Xs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=js.distanceTo(Xs);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=o,t.ray.intersectsSphere(Ts)===!1)return;jr.copy(i).invert(),ki.copy(t.ray).applyMatrix4(jr);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=m,f=g-1;_<f;_+=c){const d=u.getX(_),E=u.getX(_+1),b=ws(this,t,ki,l,d,E);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(g-1),f=u.getX(m),d=ws(this,t,ki,l,_,f);d&&e.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=m,f=g-1;_<f;_+=c){const d=ws(this,t,ki,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=ws(this,t,ki,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function ws(s,t,e,n,i,o){const a=s.geometry.attributes.position;if(js.fromBufferAttribute(a,i),Xs.fromBufferAttribute(a,o),e.distanceSqToSegment(js,Xs,Ro,Xr)>n)return;Ro.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ro);if(!(l<t.near||l>t.far))return{distance:l,point:Xr.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const qr=new T,Yr=new T;class Yl extends Ne{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)qr.fromBufferAttribute(e,i),Yr.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qr.distanceTo(Yr);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $l extends ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $r=new zt,Ea=new ts,As=new Qi,Cs=new T;class om extends ge{constructor(t=new pe,e=new $l){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=o,t.ray.intersectsSphere(As)===!1)return;$r.copy(i).invert(),Ea.copy(t.ray).applyMatrix4($r);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=p,_=m;g<_;g++){const f=c.getX(g);Cs.fromBufferAttribute(h,f),Jr(Cs,f,l,i,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=p,_=m;g<_;g++)Cs.fromBufferAttribute(h,g),Jr(Cs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Jr(s,t,e,n,i,o,a){const r=Ea.distanceSqToPoint(s);if(r<e){const l=new T;Ea.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yi extends Le{constructor(t,e,n,i,o,a,r,l,c){super(t,e,n,i,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new T,u=new Rt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const m=n+h/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),r.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pt extends pe{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const u=[],h=[],p=[],m=[];let g=0;const _=[],f=n/2;let d=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2));function E(){const M=new T,L=new T;let C=0;const A=(e-t)/n;for(let P=0;P<=o;P++){const y=[],x=P/o,R=x*(e-t)+t;for(let G=0;G<=i;G++){const F=G/i,B=F*l+r,X=Math.sin(B),W=Math.cos(B);L.x=R*X,L.y=-x*n+f,L.z=R*W,h.push(L.x,L.y,L.z),M.set(X,A,W).normalize(),p.push(M.x,M.y,M.z),m.push(F,1-x),y.push(g++)}_.push(y)}for(let P=0;P<i;P++)for(let y=0;y<o;y++){const x=_[y][P],R=_[y+1][P],G=_[y+1][P+1],F=_[y][P+1];(t>0||y!==0)&&(u.push(x,R,F),C+=3),(e>0||y!==o-1)&&(u.push(R,G,F),C+=3)}c.addGroup(d,C,0),d+=C}function b(M){const L=g,C=new Rt,A=new T;let P=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,f*x,0),p.push(0,x,0),m.push(.5,.5),g++;const R=g;for(let G=0;G<=i;G++){const B=G/i*l+r,X=Math.cos(B),W=Math.sin(B);A.x=y*W,A.y=f*x,A.z=y*X,h.push(A.x,A.y,A.z),p.push(0,x,0),C.x=X*.5+.5,C.y=W*.5*x+.5,m.push(C.x,C.y),g++}for(let G=0;G<i;G++){const F=L+G,B=R+G;M===!0?u.push(B,B+1,F):u.push(B+1,B,F),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ua extends pt{constructor(t=1,e=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,t,e,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(t){return new Ua(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fa extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];r(i),c(n),u(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(E){const b=new T,M=new T,L=new T;for(let C=0;C<e.length;C+=3)m(e[C+0],b),m(e[C+1],M),m(e[C+2],L),l(b,M,L,E)}function l(E,b,M,L){const C=L+1,A=[];for(let P=0;P<=C;P++){A[P]=[];const y=E.clone().lerp(M,P/C),x=b.clone().lerp(M,P/C),R=C-P;for(let G=0;G<=R;G++)G===0&&P===C?A[P][G]=y:A[P][G]=y.clone().lerp(x,G/R)}for(let P=0;P<C;P++)for(let y=0;y<2*(C-P)-1;y++){const x=Math.floor(y/2);y%2===0?(p(A[P][x+1]),p(A[P+1][x]),p(A[P][x])):(p(A[P][x+1]),p(A[P+1][x+1]),p(A[P+1][x]))}}function c(E){const b=new T;for(let M=0;M<o.length;M+=3)b.x=o[M+0],b.y=o[M+1],b.z=o[M+2],b.normalize().multiplyScalar(E),o[M+0]=b.x,o[M+1]=b.y,o[M+2]=b.z}function u(){const E=new T;for(let b=0;b<o.length;b+=3){E.x=o[b+0],E.y=o[b+1],E.z=o[b+2];const M=f(E)/2/Math.PI+.5,L=d(E)/Math.PI+.5;a.push(M,1-L)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const b=a[E+0],M=a[E+2],L=a[E+4],C=Math.max(b,M,L),A=Math.min(b,M,L);C>.9&&A<.1&&(b<.2&&(a[E+0]+=1),M<.2&&(a[E+2]+=1),L<.2&&(a[E+4]+=1))}}function p(E){o.push(E.x,E.y,E.z)}function m(E,b){const M=E*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function g(){const E=new T,b=new T,M=new T,L=new T,C=new Rt,A=new Rt,P=new Rt;for(let y=0,x=0;y<o.length;y+=9,x+=6){E.set(o[y+0],o[y+1],o[y+2]),b.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),C.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),L.copy(E).add(b).add(M).divideScalar(3);const R=f(L);_(C,x+0,E,R),_(A,x+2,b,R),_(P,x+4,M,R)}}function _(E,b,M,L){L<0&&E.x===1&&(a[b]=E.x-1),M.x===0&&M.z===0&&(a[b]=L/2/Math.PI+.5)}function f(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.vertices,t.indices,t.radius,t.details)}}class xi extends Fa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xi(t.radius,t.detail)}}class es extends pe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const u=[],h=new T,p=new T,m=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const E=[],b=d/n;let M=0;d===0&&a===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const C=L/e;h.x=-t*Math.cos(i+C*o)*Math.sin(a+b*r),h.y=t*Math.cos(a+b*r),h.z=t*Math.sin(i+C*o)*Math.sin(a+b*r),g.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),f.push(C+M,1-b),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const b=u[d][E+1],M=u[d][E],L=u[d+1][E],C=u[d+1][E+1];(d!==0||a>0)&&m.push(b,M,C),(d!==n-1||l<Math.PI)&&m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $n extends pe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],l=[],c=[],u=new T,h=new T,p=new T;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*o,f=m/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(_),h.y=(t+e*Math.cos(f))*Math.sin(_),h.z=e*Math.sin(f),r.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,f=(i+1)*(m-1)+g-1,d=(i+1)*(m-1)+g,E=(i+1)*m+g;a.push(_,f,E),a.push(f,d,E)}this.setIndex(a),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ie extends ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ba extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Po=new zt,Zr=new T,Kr=new T;class Jl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zr.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zr),Kr.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kr),e.updateMatrixWorld(),Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qr=new zt,Gi=new T,Lo=new T;class am extends Jl{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),Lo.copy(n.position),Lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lo),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Qr.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr)}}class tl extends Ba{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new am}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class rm extends Jl{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Io extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new rm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lm extends Ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class cm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=el(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=el();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function el(){return performance.now()}const nl=new zt;class hm{constructor(t,e,n=0,i=1/0){this.ray=new ts(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nl),this}intersectObject(t,e=!0,n=[]){return ba(t,this,n,e),n.sort(il),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)ba(t[i],this,n,e);return n.sort(il),n}}function il(s,t){return s.distance-t.distance}function ba(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let a=0,r=o.length;a<r;a++)ba(o[a],t,e,!0)}}class sl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dm extends Yl{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ht(n),i=new Ht(i);const o=e/2,a=t/e,r=t/2,l=[],c=[];for(let p=0,m=0,g=-r;p<=e;p++,g+=a){l.push(-r,0,g,r,0,g),l.push(g,0,-r,g,0,r);const _=p===o?n:i;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const u=new pe;u.setAttribute("position",new Qt(l,3)),u.setAttribute("color",new Qt(c,3));const h=new vn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class um extends Yl{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new pe;i.setAttribute("position",new Qt(e,3)),i.setAttribute("color",new Qt(n,3));const o=new vn({vertexColors:!0,toneMapped:!1});super(i,o),this.type="AxesHelper"}setColors(t,e,n){const i=new Ht,o=this.geometry.attributes.color.array;return i.set(t),i.toArray(o,0),i.toArray(o,3),i.set(e),i.toArray(o,6),i.toArray(o,9),i.set(n),i.toArray(o,12),i.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zl extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);const ol={type:"change"},ka={type:"start"},Kl={type:"end"},Rs=new ts,al=new Pn,pm=Math.cos(70*Hc.DEG2RAD),ve=new T,Oe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Do=1e-6;class fm extends Zl{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Se,this._lastTargetPosition=new T,this._quat=new Se().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sl,this._sphericalDelta=new sl,this._scale=1,this._panOffset=new T,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new T,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gm.bind(this),this._onPointerDown=mm.bind(this),this._onPointerUp=_m.bind(this),this._onContextMenu=bm.bind(this),this._onMouseWheel=Mm.bind(this),this._onKeyDown=ym.bind(this),this._onTouchStart=Sm.bind(this),this._onTouchMove=Em.bind(this),this._onMouseDown=vm.bind(this),this._onMouseMove=xm.bind(this),this._interceptControlDown=Tm.bind(this),this._interceptControlUp=wm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ol),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),i<-Math.PI?i+=Oe:i>Math.PI&&(i-=Oe),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=ve.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new T(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Rs.origin.copy(this.object.position),Rs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rs.direction))<pm?this.object.lookAt(this.target):(al.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rs.intersectPlane(al,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Do||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Do||this._lastTargetPosition.distanceToSquared(this.target)>Do?(this.dispatchEvent(ol),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ve.copy(i).sub(this.target);let o=ve.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,a=n.width,r=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function mm(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function gm(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function _m(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kl),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vm(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=se.DOLLY;break;case Mi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=se.ROTATE}break;case Mi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(ka)}function xm(s){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Mm(s){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(s.preventDefault(),this.dispatchEvent(ka),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Kl))}function ym(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Sm(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=se.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=se.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(ka)}function Em(s){switch(this._trackPointer(s),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=se.NONE}}function bm(s){this.enabled!==!1&&s.preventDefault()}function Tm(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wm(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wn=new hm,Ae=new T,Rn=new T,ue=new Se,rl={X:new T(1,0,0),Y:new T(0,1,0),Z:new T(0,0,1)},Oo={type:"change"},ll={type:"mouseDown",mode:null},cl={type:"mouseUp",mode:null},hl={type:"objectChange"};class Am extends Zl{constructor(t,e=null){super(void 0,e);const n=new Dm(this);this._root=n;const i=new Om;this._gizmo=i,n.add(i);const o=new Nm;this._plane=o,n.add(o);const a=this;function r(b,M){let L=M;Object.defineProperty(a,b,{get:function(){return L!==void 0?L:M},set:function(C){L!==C&&(L=C,o[b]=C,i[b]=C,a.dispatchEvent({type:b+"-changed",value:C}),a.dispatchEvent(Oo))}}),a[b]=M,o[b]=M,i[b]=M}r("camera",t),r("object",void 0),r("enabled",!0),r("axis",null),r("mode","translate"),r("translationSnap",null),r("rotationSnap",null),r("scaleSnap",null),r("space","world"),r("size",1),r("dragging",!1),r("showX",!0),r("showY",!0),r("showZ",!0),r("minX",-1/0),r("maxX",1/0),r("minY",-1/0),r("maxY",1/0),r("minZ",-1/0),r("maxZ",1/0);const l=new T,c=new T,u=new Se,h=new Se,p=new T,m=new Se,g=new T,_=new T,f=new T,d=0,E=new T;r("worldPosition",l),r("worldPositionStart",c),r("worldQuaternion",u),r("worldQuaternionStart",h),r("cameraPosition",p),r("cameraQuaternion",m),r("pointStart",g),r("pointEnd",_),r("rotationAxis",f),r("rotationAngle",d),r("eye",E),this._offset=new T,this._startNorm=new T,this._endNorm=new T,this._cameraScale=new T,this._parentPosition=new T,this._parentQuaternion=new Se,this._parentQuaternionInv=new Se,this._parentScale=new T,this._worldScaleStart=new T,this._worldQuaternionInv=new Se,this._worldScale=new T,this._positionStart=new T,this._quaternionStart=new Se,this._scaleStart=new T,this._getPointer=Cm.bind(this),this._onPointerDown=Pm.bind(this),this._onPointerHover=Rm.bind(this),this._onPointerMove=Lm.bind(this),this._onPointerUp=Im.bind(this),e!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Wn.setFromCamera(t,this.camera);const e=No(this._gizmo.picker[this.mode],Wn);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Wn.setFromCamera(t,this.camera);const e=No(this._plane,Wn,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,ll.mode=this.mode,this.dispatchEvent(ll)}}pointerMove(t){const e=this.axis,n=this.mode,i=this.object;let o=this.space;if(n==="scale"?o="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(o="world"),i===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Wn.setFromCamera(t,this.camera);const a=No(this._plane,Wn,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(i.position.applyQuaternion(ue.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),o==="world"&&(i.parent&&i.position.add(Ae.setFromMatrixPosition(i.parent.matrixWorld)),e.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Ae.setFromMatrixPosition(i.parent.matrixWorld)))),i.position.x=Math.max(this.minX,Math.min(this.maxX,i.position.x)),i.position.y=Math.max(this.minY,Math.min(this.maxY,i.position.y)),i.position.z=Math.max(this.minZ,Math.min(this.maxZ,i.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let r=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(r*=-1),Rn.set(r,r,r)}else Ae.copy(this.pointStart),Rn.copy(this.pointEnd),Ae.applyQuaternion(this._worldQuaternionInv),Rn.applyQuaternion(this._worldQuaternionInv),Rn.divide(Ae),e.search("X")===-1&&(Rn.x=1),e.search("Y")===-1&&(Rn.y=1),e.search("Z")===-1&&(Rn.z=1);i.scale.copy(this._scaleStart).multiply(Rn),this.scaleSnap&&(e.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const r=20/this.worldPosition.distanceTo(Ae.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ae.copy(this.rotationAxis).cross(this.eye))*r):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(rl[e]),Ae.copy(rl[e]),o==="local"&&Ae.applyQuaternion(this.worldQuaternion),Ae.cross(this.eye),Ae.length()===0?l=!0:this.rotationAngle=this._offset.dot(Ae.normalize())*r),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&e!=="E"&&e!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(ue.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(ue.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Oo),this.dispatchEvent(hl)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(cl.mode=this.mode,this.dispatchEvent(cl)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Oo),this.dispatchEvent(hl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Wn}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function Cm(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const t=this.domElement.getBoundingClientRect();return{x:(s.clientX-t.left)/t.width*2-1,y:-(s.clientY-t.top)/t.height*2+1,button:s.button}}}function Rm(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function Pm(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function Lm(s){this.enabled&&this.pointerMove(this._getPointer(s))}function Im(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function No(s,t,e){const n=t.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||e)return n[i];return!1}const Ps=new qe,ae=new T(0,1,0),dl=new T(0,0,0),ul=new zt,Ls=new Se,zs=new Se,on=new T,pl=new zt,Xi=new T(1,0,0),Xn=new T(0,1,0),qi=new T(0,0,1),Is=new T,zi=new T,Vi=new T;class Dm extends ge{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class Om extends ge{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new ee({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new vn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const i=e.clone();i.opacity=.5;const o=t.clone();o.color.setHex(16711680);const a=t.clone();a.color.setHex(65280);const r=t.clone();r.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const h=t.clone();h.opacity=.25;const p=t.clone();p.color.setHex(16776960),p.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const _=new pt(0,.04,.1,12);_.translate(0,.05,0);const f=new mt(.08,.08,.08);f.translate(0,.04,0);const d=new pe;d.setAttribute("position",new Qt([0,0,0,1,0,0],3));const E=new pt(.0075,.0075,.5,3);E.translate(0,.25,0);function b(X,W){const Y=new $n(X,.0075,3,64,W*Math.PI*2);return Y.rotateY(Math.PI/2),Y.rotateX(Math.PI/2),Y}function M(){const X=new pe;return X.setAttribute("position",new Qt([0,0,0,1,1,1],3)),X}const L={X:[[new I(_,o),[.5,0,0],[0,0,-Math.PI/2]],[new I(_,o),[-.5,0,0],[0,0,Math.PI/2]],[new I(E,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new I(_,a),[0,.5,0]],[new I(_,a),[0,-.5,0],[Math.PI,0,0]],[new I(E,a)]],Z:[[new I(_,r),[0,0,.5],[Math.PI/2,0,0]],[new I(_,r),[0,0,-.5],[-Math.PI/2,0,0]],[new I(E,r),null,[Math.PI/2,0,0]]],XYZ:[[new I(new xi(.1,0),h.clone()),[0,0,0]]],XY:[[new I(new mt(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new I(new mt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new I(new mt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new I(new pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new I(new pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new I(new pt(.2,0,.6,4),n),[0,.3,0]],[new I(new pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new I(new pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new I(new pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new I(new xi(.2,0),n)]],XY:[[new I(new mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new I(new mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new I(new mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new I(new xi(.01,2),i),null,null,null,"helper"]],END:[[new I(new xi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Ne(M(),i),null,null,null,"helper"]],X:[[new Ne(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ne(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ne(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new I(b(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new I(b(.5,.5),o)]],Y:[[new I(b(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new I(b(.5,.5),r),null,[0,Math.PI/2,0]]],E:[[new I(b(.75,1),p),null,[0,Math.PI/2,0]]]},y={AXIS:[[new Ne(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},x={XYZE:[[new I(new es(.25,10,8),n)]],X:[[new I(new $n(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new I(new $n(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new I(new $n(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new I(new $n(.75,.1,2,24),n)]]},R={X:[[new I(f,o),[.5,0,0],[0,0,-Math.PI/2]],[new I(E,o),[0,0,0],[0,0,-Math.PI/2]],[new I(f,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new I(f,a),[0,.5,0]],[new I(E,a)],[new I(f,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new I(f,r),[0,0,.5],[Math.PI/2,0,0]],[new I(E,r),[0,0,0],[Math.PI/2,0,0]],[new I(f,r),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new I(new mt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new I(new mt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new I(new mt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new I(new mt(.1,.1,.1),h.clone())]]},G={X:[[new I(new pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new I(new pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new I(new pt(.2,0,.6,4),n),[0,.3,0]],[new I(new pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new I(new pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new I(new pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new I(new mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new I(new mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new I(new mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new I(new mt(.2,.2,.2),n),[0,0,0]]]},F={X:[[new Ne(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ne(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ne(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function B(X){const W=new ge;for(const Y in X)for(let H=X[Y].length;H--;){const Q=X[Y][H][0].clone(),st=X[Y][H][1],ut=X[Y][H][2],St=X[Y][H][3],Vt=X[Y][H][4];Q.name=Y,Q.tag=Vt,st&&Q.position.set(st[0],st[1],st[2]),ut&&Q.rotation.set(ut[0],ut[1],ut[2]),St&&Q.scale.set(St[0],St[1],St[2]),Q.updateMatrix();const q=Q.geometry.clone();q.applyMatrix4(Q.matrix),Q.geometry=q,Q.renderOrder=1/0,Q.position.set(0,0,0),Q.rotation.set(0,0,0),Q.scale.set(1,1,1),W.add(Q)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=B(L)),this.add(this.gizmo.rotate=B(P)),this.add(this.gizmo.scale=B(R)),this.add(this.picker.translate=B(C)),this.add(this.picker.rotate=B(x)),this.add(this.picker.scale=B(G)),this.add(this.helper.translate=B(A)),this.add(this.helper.rotate=B(y)),this.add(this.helper.scale=B(F)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:zs;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let o=0;o<i.length;o++){const a=i[o];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let r;if(this.camera.isOrthographicCamera?r=(this.camera.top-this.camera.bottom)/this.camera.zoom:r=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(r*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(ue.setFromEuler(Ps.set(0,0,0)),a.quaternion.copy(n).multiply(ue),Math.abs(ae.copy(Xi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(ue.setFromEuler(Ps.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(ue),Math.abs(ae.copy(Xn).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(ue.setFromEuler(Ps.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(ue),Math.abs(ae.copy(qi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(ue.setFromEuler(Ps.set(0,Math.PI/2,0)),ae.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(ul.lookAt(dl,ae,Xn)),a.quaternion.multiply(ue),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Ae.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ae.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Ae),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(ae.copy(Xi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(ae.copy(Xn).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(ae.copy(qi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(ae.copy(qi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(ae.copy(Xi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(ae.copy(Xn).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Ls.copy(n),ae.copy(this.eye).applyQuaternion(ue.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(ul.lookAt(this.eye,dl,Xn)),a.name==="X"&&(ue.setFromAxisAngle(Xi,Math.atan2(-ae.y,ae.z)),ue.multiplyQuaternions(Ls,ue),a.quaternion.copy(ue)),a.name==="Y"&&(ue.setFromAxisAngle(Xn,Math.atan2(ae.x,ae.z)),ue.multiplyQuaternions(Ls,ue),a.quaternion.copy(ue)),a.name==="Z"&&(ue.setFromAxisAngle(qi,Math.atan2(ae.y,ae.x)),ue.multiplyQuaternions(Ls,ue),a.quaternion.copy(ue))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(t)}}class Nm extends I{constructor(){super(new Ee(1e5,1e5,2,2),new ee({visible:!1,wireframe:!0,side:Ue,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Is.copy(Xi).applyQuaternion(e==="local"?this.worldQuaternion:zs),zi.copy(Xn).applyQuaternion(e==="local"?this.worldQuaternion:zs),Vi.copy(qi).applyQuaternion(e==="local"?this.worldQuaternion:zs),ae.copy(zi),this.mode){case"translate":case"scale":switch(this.axis){case"X":ae.copy(this.eye).cross(Is),on.copy(Is).cross(ae);break;case"Y":ae.copy(this.eye).cross(zi),on.copy(zi).cross(ae);break;case"Z":ae.copy(this.eye).cross(Vi),on.copy(Vi).cross(ae);break;case"XY":on.copy(Vi);break;case"YZ":on.copy(Is);break;case"XZ":ae.copy(Vi),on.copy(zi);break;case"XYZ":case"E":on.set(0,0,0);break}break;case"rotate":default:on.set(0,0,0)}on.length()===0?this.quaternion.copy(this.cameraQuaternion):(pl.lookAt(Ae.set(0,0,0),on,ae),this.quaternion.setFromRotationMatrix(pl)),super.updateMatrixWorld(t)}}class Um{constructor(t){this.container=t,this.scene=new sm,this.scene.background=new Ht(724500),this.scene.fog=new Na(724500,.11),this.camera=new ze(45,this.container.clientWidth/this.container.clientHeight,.05,50),this.camera.position.set(1.4,1.2,1.6),this.renderer=new im({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=gl,this.renderer.toneMapping=vl,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement),this.controls=new fm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.target.set(0,.45,.2),this.controls.maxPolarAngle=Math.PI/2+.02,this.controls.minDistance=.4,this.controls.maxDistance=6,this.setupLighting(),this.setupTransformGizmo(),window.addEventListener("resize",()=>this.onResize())}setupLighting(){const t=new lm(1976118,1.35);this.scene.add(t);const e=new Io(16775149,2.7);e.position.set(2.2,3.8,2),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=8,e.shadow.camera.left=-1.5,e.shadow.camera.right=1.5,e.shadow.camera.top=1.5,e.shadow.camera.bottom=-1.5,e.shadow.bias=-5e-4,this.scene.add(e);const n=new Io(3718648,1.25);n.position.set(-2.5,2.2,-2),this.scene.add(n);const i=new Io(16096779,.35);i.position.set(0,.2,2.5),this.scene.add(i)}setupTransformGizmo(){const t=new es(.02,16,16),e=new ee({color:58879,wireframe:!0,transparent:!0,opacity:.8});this.gizmoAnchor=new I(t,e),this.gizmoAnchor.position.set(0,.45,.4),this.scene.add(this.gizmoAnchor),this.transformControls=new Am(this.camera,this.renderer.domElement),this.transformControls.size=.65,this.transformControls.setSpace("world"),this.transformControls.attach(this.gizmoAnchor),this.scene.add(this.transformControls.getHelper()),this.transformControls.addEventListener("dragging-changed",n=>{this.controls.enabled=!n.value})}setGizmoVisible(t){this.transformControls.enabled=t,this.gizmoAnchor.visible=t;const e=this.transformControls.getHelper();e&&(e.visible=t)}setGizmoMode(t="translate"){this.transformControls.setMode(t)}onResize(){if(!this.container)return;const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}setCameraView(t){const e={iso:{pos:new T(1.4,1.2,1.6),target:new T(0,.4,.15)},stn1:{pos:new T(-1.15,.75,.35),target:new T(-.55,.28,.12)},stn2:{pos:new T(0,.85,1.25),target:new T(0,.35,.52)},stn3:{pos:new T(1.15,.75,.35),target:new T(.55,.28,.18)},rear:{pos:new T(0,1.25,-2.15),target:new T(0,.45,-.3)},bot:{pos:new T(.45,.42,-.95),target:new T(0,.12,-.58)}},n=e[t]||e.iso;this.camera.position.copy(n.pos),this.controls.target.copy(n.target),this.controls.update()}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}}class Fm{constructor(){this.ctx=null,this.isMuted=!1,this.servoGain=null,this.servoOsc1=null,this.servoOsc2=null,this.servoActive=!1,this.initDone=!1}init(){if(!this.initDone)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupServoSynth(),this.initDone=!0}catch(t){console.warn("AudioContext failed to initialize:",t)}}ensureContext(){this.initDone||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.isMuted=t,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(t?0:.35,this.ctx.currentTime)}setupServoSynth(){if(!this.ctx)return;this.servoGain=this.ctx.createGain(),this.servoGain.gain.setValueAtTime(0,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(800,this.ctx.currentTime),t.Q.setValueAtTime(4,this.ctx.currentTime),this.servoOsc1=this.ctx.createOscillator(),this.servoOsc1.type="sawtooth",this.servoOsc1.frequency.setValueAtTime(220,this.ctx.currentTime),this.servoOsc2=this.ctx.createOscillator(),this.servoOsc2.type="triangle",this.servoOsc2.frequency.setValueAtTime(440,this.ctx.currentTime),this.servoOsc1.connect(t),this.servoOsc2.connect(t),t.connect(this.servoGain),this.servoGain.connect(this.masterGain),this.servoOsc1.start(),this.servoOsc2.start()}updateServoSound(t){if(!this.ctx||this.isMuted||!this.servoGain)return;const e=this.ctx.currentTime;if(t>.01){const n=Math.min(.22,t*.25),i=240+t*650;this.servoGain.gain.setTargetAtTime(n,e,.04),this.servoOsc1.frequency.setTargetAtTime(i,e,.03),this.servoOsc2.frequency.setTargetAtTime(i*2,e,.03)}else this.servoGain.gain.setTargetAtTime(0,e,.06)}playPneumatic(t=!0){if(!this.ctx||this.isMuted)return;this.ensureContext();const e=this.ctx.currentTime,n=this.ctx.sampleRate*(t?.18:.14),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),o=i.getChannelData(0);for(let c=0;c<n;c++)o[c]=(Math.random()*2-1)*Math.exp(-c/(n*.35));const a=this.ctx.createBufferSource();a.buffer=i;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.setValueAtTime(t?1800:2200,e);const l=this.ctx.createGain();l.gain.setValueAtTime(.35,e),l.gain.exponentialRampToValueAtTime(.001,e+(t?.18:.14)),a.connect(r),r.connect(l),l.connect(this.masterGain),a.start(e),this.playClick(t?1200:900,.03,.25)}playClampImpact(){if(!this.ctx||this.isMuted)return;this.ensureContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(45,t+.08);const n=this.ctx.createGain();n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.08),this.playClick(2400,.015,.3)}playClick(t=1600,e=.02,n=.2){if(!this.ctx||this.isMuted)return;this.ensureContext();const i=this.ctx.currentTime,o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,i),o.frequency.exponentialRampToValueAtTime(t*.4,i+e);const a=this.ctx.createGain();a.gain.setValueAtTime(n,i),a.gain.exponentialRampToValueAtTime(.001,i+e),o.connect(a),a.connect(this.masterGain),o.start(i),o.stop(i+e)}playSensorBeam(){if(!this.ctx||this.isMuted)return;this.ensureContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(1046.5,t),e.frequency.setValueAtTime(1318.5,t+.06);const n=this.ctx.createGain();n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2)}playSuccessChime(){if(!this.ctx||this.isMuted)return;this.ensureContext();const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(n,t+i*.07);const a=this.ctx.createGain();a.gain.setValueAtTime(.15,t+i*.07),a.gain.exponentialRampToValueAtTime(.001,t+i*.07+.4),o.connect(a),a.connect(this.masterGain),o.start(t+i*.07),o.stop(t+i*.07+.4)})}playEStop(){if(!this.ctx||this.isMuted)return;this.ensureContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(320,t),e.frequency.setValueAtTime(260,t+.12);const n=this.ctx.createGain();n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+.28),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.28)}startWeldingArc(){if(!this.ctx||this.isMuted||(this.ensureContext(),this.weldActive))return;this.weldActive=!0;const t=this.ctx.currentTime,e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let a=0;a<e;a++)i[a]=(Math.random()*2-1)*(Math.random()>.3?1:.2);this.weldNoise=this.ctx.createBufferSource(),this.weldNoise.buffer=n,this.weldNoise.loop=!0,this.weldFilter=this.ctx.createBiquadFilter(),this.weldFilter.type="bandpass",this.weldFilter.frequency.setValueAtTime(1600,t),this.weldFilter.Q.setValueAtTime(3.5,t),this.weldHum=this.ctx.createOscillator(),this.weldHum.type="sawtooth",this.weldHum.frequency.setValueAtTime(120,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.08,t),this.weldHum.connect(o),this.weldGain=this.ctx.createGain(),this.weldGain.gain.setValueAtTime(.01,t),this.weldGain.gain.exponentialRampToValueAtTime(.22,t+.05),this.weldNoise.connect(this.weldFilter),this.weldFilter.connect(this.weldGain),o.connect(this.weldGain),this.weldGain.connect(this.masterGain),this.weldNoise.start(t),this.weldHum.start(t)}stopWeldingArc(){if(!this.weldActive||!this.ctx)return;this.weldActive=!1;const t=this.ctx.currentTime;this.weldGain&&(this.weldGain.gain.cancelScheduledValues(t),this.weldGain.gain.setValueAtTime(this.weldGain.gain.value,t),this.weldGain.gain.exponentialRampToValueAtTime(.001,t+.1)),setTimeout(()=>{try{this.weldNoise&&(this.weldNoise.stop(),this.weldNoise.disconnect()),this.weldHum&&(this.weldHum.stop(),this.weldHum.disconnect())}catch{}},120)}playVisionScan(){if(!this.ctx||this.isMuted)return;this.ensureContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(3200,t+.18);const n=this.ctx.createGain();n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.22)}playMaintBotBeep(){if(!this.ctx||this.isMuted)return;this.ensureContext();const t=this.ctx.currentTime;[880,1320,1760,2200].forEach((n,i)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,t+i*.05),a.gain.setValueAtTime(.09,t+i*.05),a.gain.exponentialRampToValueAtTime(.001,t+i*.05+.045),o.connect(a),a.connect(this.masterGain),o.start(t+i*.05),o.stop(t+i*.05+.05)})}}const it=new Fm;class Bm{constructor(t){this.scene=t,this.group=new Bt,this.group.name="Workcell",this.payloads=[],this.conveyorRunning=!1,this.conveyorSpeed=.18,this.conveyorTextureOffset=0,this.beamBroken=!1,this.onBeamStateChange=null,this.gateClosed=!0,this.onGateStateChange=null,this.maintBotMode="PATROL",this.maintBotPatrolTime=0,this.andonState={red:!1,amber:!0,green:!1,blue:!1},this.initMaterials(),this.buildFloorAndPerimeter(),this.buildStation1Infeed(),this.buildStation2Process(),this.buildStation3Pallet(),this.buildMaintenanceBay(),this.buildMaintBot(),this.buildAndonTower(),this.initWeldingFX(),this.spawnInitialWorkpieces(),this.scene.add(this.group)}createConcreteTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#232a35",e.fillRect(0,0,512,512);const n=e.getImageData(0,0,512,512),i=n.data;for(let a=0;a<i.length;a+=4){const r=(Math.random()-.5)*14;i[a]=Math.min(255,Math.max(0,i[a]+r)),i[a+1]=Math.min(255,Math.max(0,i[a+1]+r)),i[a+2]=Math.min(255,Math.max(0,i[a+2]+r*.9))}e.putImageData(n,0,0),e.strokeStyle="#161c24",e.lineWidth=3,e.strokeRect(0,0,512,512),e.strokeStyle="rgba(255, 255, 255, 0.05)",e.lineWidth=1,e.strokeRect(2,2,508,508);const o=new Yi(t);return o.wrapS=mn,o.wrapT=mn,o.repeat.set(4,4),o}createHazardStripeTexture(t=256,e=256,n=24){const i=document.createElement("canvas");i.width=t,i.height=e;const o=i.getContext("2d");o.fillStyle="#f59e0b",o.fillRect(0,0,t,e),o.fillStyle="#111827";const a=t+e;for(let l=-a;l<a*2;l+=n*2)o.beginPath(),o.moveTo(l,0),o.lineTo(l+n,0),o.lineTo(l+n-e,e),o.lineTo(l-e,e),o.closePath(),o.fill();const r=new Yi(i);return r.wrapS=mn,r.wrapT=mn,r}createSignTexture(t,e,n="#111827",i="#f59e0b",o="#94a3b8"){const a=document.createElement("canvas");a.width=512,a.height=128;const r=a.getContext("2d");return r.fillStyle=n,r.fillRect(0,0,512,128),r.strokeStyle=i,r.lineWidth=6,r.strokeRect(4,4,504,120),r.fillStyle=i,r.font="bold 36px monospace",r.textAlign="center",r.textBaseline="middle",r.fillText(t,256,44),r.fillStyle=o,r.font="bold 20px monospace",r.fillText(e,256,88),new Yi(a)}initMaterials(){const t=this.createConcreteTexture(),e=this.createHazardStripeTexture(256,256,32);e.repeat.set(2,6),this.materials={floor:new ie({map:t,color:16777215,roughness:.88,metalness:.08,bumpMap:t,bumpScale:.002}),hazardWalkway:new ie({map:e,roughness:.6,metalness:.2}),pedestal:new ie({color:1251618,roughness:.35,metalness:.85}),aluminum:new ie({color:9741240,roughness:.25,metalness:.92}),pallet:new ie({color:2239030,roughness:.3,metalness:.88}),belt:new ie({color:988448,roughness:.85,metalness:.1}),safetyYellow:new ie({color:16096779,roughness:.4,metalness:.5}),safetyRed:new ie({color:14427686,roughness:.35,metalness:.4}),beamActive:new ee({color:15680580,transparent:!0,opacity:.85}),beamIdle:new ee({color:65416,transparent:!0,opacity:.55}),steelDark:new ie({color:1975859,roughness:.38,metalness:.9}),toggleRed:new ie({color:15680580,roughness:.35,metalness:.6}),laserCyan:new ee({color:440020,transparent:!0,opacity:.55,side:Ue}),fenceMesh:new ie({color:3359061,roughness:.5,metalness:.8,wireframe:!0})}}buildFloorAndPerimeter(){const t=new Ee(8,8),e=new I(t,this.materials.floor);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.group.add(e);const n=new dm(8,32,4016473,1844013);n.position.y=.001,this.group.add(n);const i=1.45,o=new pe,a=[new T(-i,.002,-i),new T(i,.002,-i),new T(i,.002,i),new T(-i,.002,i),new T(-i,.002,-i)];o.setFromPoints(a);const r=new Ne(o,new vn({color:16096779,linewidth:2}));this.group.add(r);const l=(c,u,h,p,m)=>{const g=new pe().setFromPoints([new T(c,.002,h),new T(u,.002,h),new T(u,.002,p),new T(c,.002,p),new T(c,.002,h)]),_=new Ne(g,new vn({color:16096779,linewidth:2}));if(this.group.add(_),m){const f=this.createSignTexture(m,"OPERATIONAL CELL","#0f172a","#38bdf8","#64748b"),d=new ee({map:f,transparent:!0,opacity:.85}),E=new I(new Ee(.36,.09),d);E.rotation.x=-Math.PI/2,E.position.set((c+u)/2,.003,p-.06),this.group.add(E)}};l(-.78,-.36,-.22,.38,"STATION 1: INFEED"),l(-.3,.3,.36,.7,"STATION 2: PROCESS"),l(.36,.78,.02,.38,"STATION 3: PALLET")}buildStation1Infeed(){this.station1Group=new Bt,this.station1Group.position.set(-.55,0,.08),this.conveyorGroup=new Bt,this.conveyorGroup.position.set(0,0,.08);const t=new mt(.04,.2,.04);for(const M of[-.12,.12])for(const L of[-.22,.22]){const C=new I(t,this.materials.pedestal);C.position.set(M,.1,L),C.castShadow=!0,this.conveyorGroup.add(C)}const e=new mt(.02,.04,.54),n=new I(e,this.materials.aluminum);n.position.set(-.12,.22,0);const i=new I(e,this.materials.aluminum);i.position.set(.12,.22,0),this.conveyorGroup.add(n,i);const o=new mt(.22,.015,.52);this.conveyorBeltMesh=new I(o,this.materials.belt),this.conveyorBeltMesh.position.y=.205,this.conveyorBeltMesh.receiveShadow=!0,this.conveyorGroup.add(this.conveyorBeltMesh);const a=new Bt;a.position.set(-.16,.14,-.2);const r=new I(new pt(.04,.04,.1,16),this.materials.pedestal);r.rotation.z=Math.PI/2;const l=new I(new mt(.08,.08,.08),this.materials.safetyYellow);l.position.x=.04,a.add(r,l),this.conveyorGroup.add(a);const c=new mt(.025,.04,.025),u=new ie({color:3900150}),h=new I(c,u);h.position.set(-.13,.24,.09),this.conveyorGroup.add(h);const p=new I(c,u);p.position.set(.13,.24,.09),this.conveyorGroup.add(p);const m=new pt(.0015,.0015,.26,8);this.beamLine=new I(m,this.materials.beamIdle),this.beamLine.rotation.z=Math.PI/2,this.beamLine.position.set(0,.24,.09),this.conveyorGroup.add(this.beamLine),this.station1Group.add(this.conveyorGroup),this.conveyorPickPos=new T(-.55,.27,.25),this.feederGroup=new Bt,this.feederGroup.position.set(0,0,-.13);const g=new mt(.18,.22,.18),_=new I(g,this.materials.pedestal);_.position.y=.11,_.castShadow=!0,this.feederGroup.add(_);const f=new mt(.24,.02,.24),d=new I(f,this.materials.aluminum);d.position.y=.23,d.castShadow=!0,this.feederGroup.add(d);const E=new pt(.045,.045,.015,24),b=new I(E,this.materials.pallet);b.position.y=.245,this.feederGroup.add(b),this.station1Group.add(this.feederGroup),this.feederPickPos=new T(-.55,.28,-.05),this.group.add(this.station1Group)}buildStation2Process(){this.station2Group=new Bt,this.station2Group.position.set(0,0,.52);const t=new mt(.48,.18,.32),e=new I(t,this.materials.pedestal);e.position.y=.09,e.castShadow=!0,this.station2Group.add(e);const n=new mt(.52,.025,.36),i=new I(n,this.materials.aluminum);i.position.y=.192,i.castShadow=!0,this.station2Group.add(i);const o=new mt(.26,.015,.09),a=new I(o,this.materials.steelDark);a.position.set(0,.21,0),a.castShadow=!0,this.station2Group.add(a);const r=new mt(.24,.045,.012),l=new I(r,this.materials.steelDark);l.position.set(0,.24,-.015),l.castShadow=!0,this.station2Group.add(l);for(const b of[-.14,.14]){const M=new mt(.025,.03,.04),L=new I(M,this.materials.pallet);L.position.set(b,.215,0),this.station2Group.add(L);const C=new mt(.012,.035,.012),A=new I(C,this.materials.toggleRed);A.position.set(b,.24,.01),A.rotation.x=.3,this.station2Group.add(A)}const c=new mt(.03,.02,.03),u=new I(c,this.materials.safetyYellow);u.position.set(.18,.21,-.08),this.station2Group.add(u);const h=new pe().setFromPoints([new T(-.11,.218,-.009),new T(.11,.218,-.009)]),p=new Ne(h,new vn({color:4674921,linewidth:2}));this.station2Group.add(p),this.visionGroup=new Bt,this.visionGroup.position.set(-.24,0,0);const m=new mt(.035,.42,.035),g=new I(m,this.materials.pedestal);g.position.y=.21,g.castShadow=!0,this.visionGroup.add(g);const _=new mt(.03,.025,.14),f=new I(_,this.materials.aluminum);f.position.set(0,.42,.05),f.castShadow=!0,this.visionGroup.add(f);for(const b of[.02,.09]){const M=new pt(.014,.014,.025,16),L=new I(M,this.materials.pallet);L.position.set(0,.405,b),this.visionGroup.add(L);const C=new pt(.008,.008,.003,16),A=new ee({color:3718648}),P=new I(C,A);P.position.set(0,.392,b),this.visionGroup.add(P)}const d=new pt(.018,.018,.012,16);this.visionBeaconMat=new ee({color:16096779}),this.visionBeacon=new I(d,this.visionBeaconMat),this.visionBeacon.position.set(0,.44,.06),this.visionGroup.add(this.visionBeacon);const E=new Ua(.14,.22,16,1,!0);E.rotateX(Math.PI),this.laserFanMat=new ee({color:440020,transparent:!0,opacity:.55,side:Ue,blending:Vs,depthWrite:!1}),this.laserFanMesh=new I(E,this.laserFanMat),this.laserFanMesh.position.set(0,.3,.06),this.laserFanMesh.visible=!1,this.visionGroup.add(this.laserFanMesh),this.station2Group.add(this.visionGroup),this.group.add(this.station2Group)}buildStation3Pallet(){this.palletGroup=new Bt,this.palletGroup.position.set(.55,0,.18);const t=new mt(.38,.18,.38),e=new I(t,this.materials.pedestal);e.position.y=.09,e.castShadow=!0,this.palletGroup.add(e);const n=new mt(.42,.025,.42),i=new I(n,this.materials.pallet);i.position.y=.192,i.castShadow=!0,this.palletGroup.add(i),this.palletSlots=[];const o=.12,a=.12;for(let c=0;c<2;c++)for(let u=0;u<2;u++){const h=(u-.5)*o,p=(c-.5)*a,m=new pt(.038,.038,.012,16),g=new I(m,this.materials.aluminum);g.position.set(h,.208,p),this.palletGroup.add(g),this.palletSlots.push(new T(.55+h,.25,.18+p))}const r=new pe().setFromPoints([new T(.24,.003,-.1),new T(.4,.003,0),new T(.24,.003,.1)]),l=new Ne(r,new vn({color:3718648,linewidth:2}));this.palletGroup.add(l),this.group.add(this.palletGroup)}buildMaintenanceBay(){this.maintGroup=new Bt,this.maintGroup.name="MaintenanceBay";const t=new Ee(.5,.9),e=new I(t,this.materials.hazardWalkway);e.rotation.x=-Math.PI/2,e.position.set(0,.0025,-.7),e.receiveShadow=!0,this.maintGroup.add(e);const n=this.createSignTexture("MAINTENANCE ACCESS ONLY","LOCKOUT / TAGOUT REQUIRED","#1e293b","#f59e0b","#cbd5e1"),i=new ee({map:n,transparent:!0,opacity:.9}),o=new I(new Ee(.48,.12),i);o.rotation.x=-Math.PI/2,o.position.set(0,.003,-.32),this.maintGroup.add(o);const a=new Bt;a.position.set(0,0,-1.15);const r=new mt(.05,1.05,.05);[-1.35,-.36,.36,1.35].forEach(Lt=>{const $t=new I(r,this.materials.safetyYellow);$t.position.set(Lt,.525,0),$t.castShadow=!0,a.add($t);const Ot=new I(new mt(.1,.015,.1),this.materials.pedestal);Ot.position.set(Lt,.008,0),a.add(Ot)});const c=.99,u=new Ee(c,.85),h=new I(u,this.materials.fenceMesh);h.position.set(-.855,.525,0);const p=new I(u,this.materials.fenceMesh);p.position.set(.855,.525,0),a.add(h,p);const m=new mt(c,.03,.03);for(const Lt of[-.855,.855])for(const $t of[.12,.95]){const Ot=new I(m,this.materials.safetyYellow);Ot.position.set(Lt,$t,0),a.add(Ot)}for(const Lt of[-1.35,1.35]){const $t=new I(r,this.materials.safetyYellow);$t.position.set(Lt,.525,.6),a.add($t);const Ot=new I(new Ee(.6,.85),this.materials.fenceMesh);Ot.rotation.y=Math.PI/2,Ot.position.set(Lt,.525,.3),a.add(Ot)}this.gateGroup=new Bt,this.gateGroup.position.set(-.36,0,0);const g=.72,_=new pt(.015,.015,g,12),f=new pt(.015,.015,.82,12),d=new I(_,this.materials.safetyYellow);d.rotation.z=Math.PI/2,d.position.set(g/2,.92,0);const E=new I(_,this.materials.safetyYellow);E.rotation.z=Math.PI/2,E.position.set(g/2,.15,0);const b=new I(f,this.materials.safetyYellow);b.position.set(g,.535,0);const M=new I(new Ee(g-.04,.76),this.materials.fenceMesh);M.position.set(g/2,.535,0);const L=this.createSignTexture("INTERLOCKED GATE","DI.3 SAFETY CIRCUIT","#7f1d1d","#fef08a","#ffffff"),C=new I(new Ee(.36,.09),new ee({map:L}));C.position.set(g/2,.65,.01),this.gateGroup.add(d,E,b,M,C);const A=new mt(.04,.09,.04);this.interlockSwitch=new I(A,this.materials.safetyRed),this.interlockSwitch.position.set(.36,.75,-.02),a.add(this.interlockSwitch);const P=new mt(.015,.03,.025),y=new I(P,this.materials.aluminum);y.position.set(g-.01,.75,-.02),this.gateGroup.add(y),a.add(this.gateGroup),this.maintGroup.add(a),this.lotoConsoleGroup=new Bt,this.lotoConsoleGroup.position.set(-.55,0,-.65);const x=new I(new pt(.035,.035,.65,16),this.materials.pedestal);x.position.y=.325,this.lotoConsoleGroup.add(x);const R=new mt(.24,.32,.16),G=new I(R,this.materials.safetyRed);G.position.y=.81,G.castShadow=!0,this.lotoConsoleGroup.add(G);const F=new I(new pt(.035,.035,.01,16),this.materials.safetyYellow);F.rotation.x=Math.PI/2,F.position.set(-.05,.88,.085);const B=new I(new mt(.012,.05,.02),this.materials.safetyRed);B.position.set(-.05,.88,.098),this.lotoConsoleGroup.add(F,B);const X=new I(new mt(.03,.03,.03),this.materials.aluminum);X.position.set(.05,.88,.09);const W=new I(new mt(.008,.045,.01),this.materials.safetyYellow);W.position.set(.05,.9,.105),W.rotation.z=-.4;const Y=new I(new pt(.022,.022,.01,16),this.materials.aluminum);Y.rotation.x=Math.PI/2,Y.position.set(.05,.94,.09);const H=new I(new Zs(.018,16),new ee({color:16777215}));H.position.set(.05,.94,.096),this.lotoConsoleGroup.add(X,W,Y,H);const Q=new I(new pt(.025,.025,.015,16),this.materials.safetyYellow);Q.rotation.x=Math.PI/2,Q.position.set(0,.74,.085);const st=new I(new pt(.02,.02,.015,16),this.materials.safetyRed);st.rotation.x=Math.PI/2,st.position.set(0,.74,.095),this.lotoConsoleGroup.add(Q,st);const ut=new Ee(.045,.08),St=new ee({color:16707722,side:Ue}),Vt=new I(ut,St);Vt.position.set(-.05,.73,.086),this.lotoConsoleGroup.add(Vt),this.maintGroup.add(this.lotoConsoleGroup),this.toolStandGroup=new Bt,this.toolStandGroup.position.set(.55,0,-.65);const q=new I(new mt(.08,.55,.08),this.materials.pedestal);q.position.y=.275,this.toolStandGroup.add(q);const et=new mt(.28,.02,.22),vt=new I(et,this.materials.aluminum);vt.position.y=.56,this.toolStandGroup.add(vt);const at=new I(new pt(.035,.035,.08,16),this.materials.pedestal);at.position.set(-.06,.61,0);const Tt=new I(new pt(.02,.02,.02,16),this.materials.safetyYellow);Tt.position.set(-.06,.66,0),this.toolStandGroup.add(at,Tt);const Pt=new I(new pt(.015,.015,.12,12),this.materials.aluminum);Pt.rotation.z=Math.PI/3,Pt.position.set(.05,.59,0),this.toolStandGroup.add(Pt),this.maintGroup.add(this.toolStandGroup),this.group.add(this.maintGroup)}buildMaintBot(){this.maintBotGroup=new Bt,this.maintBotGroup.name="MaintBot",this.maintBotDockPos=new T(-.18,.035,-.85);const t=new mt(.28,.008,.22),e=new I(t,this.materials.pallet);e.position.set(-.18,.004,-.85),e.receiveShadow=!0,this.maintGroup.add(e);for(const st of[-.07,.07]){const ut=new pt(.02,.02,.006,16),St=new I(ut,this.materials.aluminum);St.position.set(-.18+st,.009,-.85),this.maintGroup.add(St)}const n=new pt(.012,.012,.01,16);this.dockLedMat=new ee({color:440020});const i=new I(n,this.dockLedMat);i.position.set(-.18,.015,-.93),this.maintGroup.add(i),this.maintBotGroup.position.copy(this.maintBotDockPos);const o=new mt(.2,.045,.16),a=new I(o,this.materials.pedestal);a.position.y=.035,a.castShadow=!0,this.maintBotGroup.add(a);const r=new mt(.18,.035,.14),l=new I(r,this.materials.safetyYellow);l.position.y=.065,l.castShadow=!0,this.maintBotGroup.add(l);const c=new mt(.205,.02,.025),u=new ie({map:this.materials.hazardWalkway.map,roughness:.5}),h=new I(c,u);h.position.set(0,.035,.085),this.maintBotGroup.add(h),this.maintBotWheels=[];const p=new pt(.032,.032,.022,16),m=new ie({color:988970,roughness:.8}),g=new ie({color:14251782,metalness:.9,roughness:.3});for(const st of[-.095,.095])for(const ut of[-.06,.06]){const St=new I(p,m);St.rotation.z=Math.PI/2,St.position.set(st,.032,ut),St.castShadow=!0;const Vt=new I(new pt(.015,.015,.024,12),g);St.add(Vt),this.maintBotWheels.push(St),this.maintBotGroup.add(St)}this.maintBotUnderglow=new tl(440020,.65,.35),this.maintBotUnderglow.position.set(0,.02,0),this.maintBotGroup.add(this.maintBotUnderglow);const _=new pt(.024,.026,.015,16),f=new I(_,this.materials.pedestal);f.position.set(0,.088,-.03),this.maintBotGroup.add(f);const d=new pt(.02,.02,.022,16),E=new ie({color:1976635,metalness:.9});this.maintBotLidarRotor=new I(d,E),this.maintBotLidarRotor.position.set(0,.105,-.03);const b=new mt(.008,.012,.022),M=new ee({color:440020}),L=new I(b,M);this.maintBotLidarRotor.add(L),this.maintBotGroup.add(this.maintBotLidarRotor);const C=new Ee(.09,.03);this.maintBotFaceMat=new ee({color:440020,transparent:!0,opacity:.95,side:Ue}),this.maintBotFace=new I(C,this.maintBotFaceMat),this.maintBotFace.position.set(0,.068,.072),this.maintBotGroup.add(this.maintBotFace);for(const st of[-.03,.03]){const ut=new pt(.008,.008,.006,12),St=new ee({color:3718648}),Vt=new I(ut,St);Vt.rotation.x=Math.PI/2,Vt.position.set(st,.075,.074),this.maintBotGroup.add(Vt)}this.maintArmTurret=new Bt,this.maintArmTurret.position.set(.065,.085,.03);const A=new I(new pt(.014,.016,.012,12),this.materials.pedestal);this.maintArmTurret.add(A),this.maintArmShoulder=new Bt,this.maintArmShoulder.position.y=.01;const P=new mt(.012,.065,.012),y=new I(P,this.materials.aluminum);y.position.y=.03,y.rotation.x=.4,this.maintArmShoulder.add(y),this.maintArmForearm=new Bt,this.maintArmForearm.position.set(0,.06,.022);const x=new mt(.01,.055,.01),R=new I(x,this.materials.pedestal);R.position.y=.025,R.rotation.x=-.7,this.maintArmForearm.add(R);const G=new pt(.008,.006,.025,12),F=new I(G,this.materials.safetyYellow);F.rotation.x=Math.PI/2,F.position.set(0,.045,.01),this.maintArmForearm.add(F);const B=new pt(.001,.001,.45,8);this.maintBotLaserBeam=new I(B,new ee({color:65416,transparent:!0,opacity:.85})),this.maintBotLaserBeam.position.set(0,.045,.23),this.maintBotLaserBeam.rotation.x=Math.PI/2,this.maintBotLaserBeam.visible=!1,this.maintArmForearm.add(this.maintBotLaserBeam),this.maintArmShoulder.add(this.maintArmForearm),this.maintArmTurret.add(this.maintArmShoulder),this.maintBotGroup.add(this.maintArmTurret);const X=new pt(.002,.002,.12,8),W=new I(X,this.materials.aluminum);W.position.set(-.065,.125,-.05),this.maintBotGroup.add(W);const Y=new es(.006,12,12);this.maintBotAntennaLED=new I(Y,new ee({color:65416})),this.maintBotAntennaLED.position.set(-.065,.185,-.05),this.maintBotGroup.add(this.maintBotAntennaLED);const H=this.createSignTexture("MAINT-BOT 2026","AUTO-SERVICE AMR","#0f172a","#38bdf8","#cbd5e1"),Q=new I(new Ee(.08,.02),new ee({map:H}));Q.rotation.y=Math.PI/2,Q.position.set(.101,.055,0),this.maintBotGroup.add(Q),this.maintGroup.add(this.maintBotGroup)}setMaintBotMode(t){this.maintBotMode=t,it.playMaintBotBeep()}setGateState(t){this.gateClosed=t,this.gateGroup&&(this.gateGroup.rotation.y=t?0:-Math.PI/2),this.interlockSwitch&&(this.interlockSwitch.material=t?this.materials.safetyYellow:this.materials.safetyRed),this.onGateStateChange&&this.onGateStateChange(this.gateClosed)}buildAndonTower(){this.andonGroup=new Bt,this.andonGroup.position.set(-.85,0,-.45);const t=new pt(.02,.02,.7,16),e=new I(t,this.materials.aluminum);e.position.y=.35,this.andonGroup.add(e),this.andonLights={},[{name:"blue",color:165063,y:.73},{name:"green",color:1096065,y:.78},{name:"amber",color:16096779,y:.83},{name:"red",color:15680580,y:.88}].forEach(i=>{const o=new pt(.035,.035,.045,16),a=new ee({color:2236962,transparent:!0,opacity:.85}),r=new I(o,a);r.position.y=i.y,this.andonGroup.add(r),this.andonLights[i.name]={mesh:r,onColor:i.color,offColor:2236962}}),this.group.add(this.andonGroup),this.updateAndon()}setAndonState(t,e,n,i){this.andonState={red:t,amber:e,green:n,blue:i},this.updateAndon()}updateAndon(){for(const[t,e]of Object.entries(this.andonState))if(this.andonLights[t]){const n=this.andonLights[t];n.mesh.material.color.setHex(e?n.onColor:n.offColor)}}spawnWorkpiece(t="cylinder",e=16096779,n=new T(-.55,.25,-.05)){const i=new pt(.03,.03,.06,24),o=new ie({color:e,roughness:.3,metalness:.75}),a=new pt(.02,.02,.002,16),r=new ie({color:9741240,metalness:.9}),l=new I(a,r);l.position.y=.031;const c=new I(i,o);c.add(l),c.position.copy(n),c.castShadow=!0,this.group.add(c);const u={mesh:c,type:t,isHeld:!1,onConveyor:!1,id:`Part_${this.payloads.length+1}`};return this.payloads.push(u),u}spawnInitialWorkpieces(){this.spawnWorkpiece("cylinder",16096779,new T(-.55,.265,-.05));const t=this.spawnWorkpiece("cylinder",3718648,new T(-.55,.242,-.15));t.onConveyor=!0}initWeldingFX(){this.isWelding=!1,this.isScanning=!1,this.scanTime=0,this.arcLight=new tl(10875900,0,3),this.arcLight.castShadow=!1,this.group.add(this.arcLight),this.sparkCount=80,this.sparkGeo=new pe,this.sparkPosArray=new Float32Array(this.sparkCount*3),this.sparkColorArray=new Float32Array(this.sparkCount*3),this.sparks=[];for(let e=0;e<this.sparkCount;e++)this.sparks.push({x:0,y:-10,z:0,vx:0,vy:0,vz:0,life:0,maxLife:.3+Math.random()*.4}),this.sparkPosArray[e*3]=0,this.sparkPosArray[e*3+1]=-10,this.sparkPosArray[e*3+2]=0,this.sparkColorArray[e*3]=1,this.sparkColorArray[e*3+1]=.8,this.sparkColorArray[e*3+2]=.3;this.sparkGeo.setAttribute("position",new Xe(this.sparkPosArray,3)),this.sparkGeo.setAttribute("color",new Xe(this.sparkColorArray,3));const t=new $l({size:.016,vertexColors:!0,transparent:!0,opacity:.95,blending:Vs,depthWrite:!1});this.sparkMesh=new om(this.sparkGeo,t),this.sparkMesh.visible=!1,this.group.add(this.sparkMesh),this.weldBeadPoints=[],this.weldBeadGroup=new Bt,this.group.add(this.weldBeadGroup)}startWelding(t){this.isWelding=!0,this.sparkMesh.visible=!0,this.arcLight.intensity=3.5,this.arcLight.position.copy(t),it.startWeldingArc()}updateWelding(t,e){if(!this.isWelding)return;this.arcLight.position.copy(e),this.arcLight.intensity=2.5+Math.random()*4.5,this.arcLight.color.setHex(Math.random()>.4?9684477:16777215);const n=this.sparkGeo.attributes.position.array,i=this.sparkGeo.attributes.color.array;for(let o=0;o<this.sparkCount;o++){const a=this.sparks[o];if(a.life+=t,a.life>=a.maxLife){a.life=0,a.maxLife=.25+Math.random()*.45,a.x=e.x+(Math.random()-.5)*.01,a.y=e.y+(Math.random()-.5)*.01,a.z=e.z+(Math.random()-.5)*.01;const l=Math.random()*Math.PI*2,c=.8+Math.random()*1.6;a.vx=Math.cos(l)*c,a.vy=.4+Math.random()*1.5,a.vz=Math.sin(l)*c}else a.vy-=9.8*t*.6,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.y<.22&&(a.y=.22,a.vy=-a.vy*.35,a.vx*=.7,a.vz*=.7);n[o*3]=a.x,n[o*3+1]=a.y,n[o*3+2]=a.z;const r=a.life/a.maxLife;i[o*3]=1,i[o*3+1]=Math.max(.1,.9-r*.8),i[o*3+2]=Math.max(0,.3-r*.3)}this.sparkGeo.attributes.position.needsUpdate=!0,this.sparkGeo.attributes.color.needsUpdate=!0,this.addWeldBeadPoint(e)}addWeldBeadPoint(t){if(this.weldBeadPoints.length===0||this.weldBeadPoints[this.weldBeadPoints.length-1].distanceTo(t)>.008){const e=t.clone();if(e.y=.228,this.weldBeadPoints.push(e),this.weldBeadPoints.length>=2){const n=this.weldBeadPoints[this.weldBeadPoints.length-2],i=new pt(.0035,.0035,n.distanceTo(e),8),o=new ee({color:16733440}),a=new I(i,o);a.position.copy(n).lerp(e,.5),a.quaternion.setFromUnitVectors(new T(0,1,0),e.clone().sub(n).normalize()),this.weldBeadGroup.add(a)}}}stopWelding(){this.isWelding=!1,this.arcLight.intensity=0,this.sparkMesh.visible=!1,it.stopWeldingArc()}startVisionScan(t){this.isScanning=!0,this.scanTime=0,this.laserFanMesh.visible=!0,this.visionBeaconMat.color.setHex(440020),it.playVisionScan()}updateVisionScan(t){this.isScanning&&(this.scanTime+=t,this.laserFanMesh.position.y=.3+Math.sin(this.scanTime*12)*.04,this.laserFanMat.opacity=.45+Math.sin(this.scanTime*20)*.25)}stopVisionScan(){this.isScanning=!1,this.laserFanMesh.visible=!1,this.visionBeaconMat.color.setHex(1096065),it.playClick(2400,.03,.2)}resetWeldingAndVision(){if(this.stopWelding(),this.stopVisionScan(),this.visionBeaconMat&&this.visionBeaconMat.color.setHex(16096779),this.weldBeadGroup)for(;this.weldBeadGroup.children.length>0;)this.weldBeadGroup.remove(this.weldBeadGroup.children[0]);this.weldBeadPoints=[]}resetWorkpieces(){for(const t of this.payloads)this.group.remove(t.mesh);this.payloads=[],this.spawnInitialWorkpieces(),this.resetWeldingAndVision()}update(t){if(this.conveyorRunning)for(const n of this.payloads)!n.isHeld&&n.onConveyor&&(n.mesh.position.z+=this.conveyorSpeed*t,n.mesh.position.z>.25&&(n.mesh.position.z=.25));let e=!1;for(const n of this.payloads)if(!n.isHeld){const i=Math.abs(n.mesh.position.x- -.55),o=Math.abs(n.mesh.position.z-.25);if(i<.05&&o<.04){e=!0;break}}if(e!==this.beamBroken&&(this.beamBroken=e,this.beamLine.material=this.beamBroken?this.materials.beamActive:this.materials.beamIdle,this.beamBroken&&it.playSensorBeam(),this.onBeamStateChange&&this.onBeamStateChange(this.beamBroken)),this.isScanning&&this.updateVisionScan(t),this.maintBotGroup){if(this.maintBotLidarRotor&&(this.maintBotLidarRotor.rotation.y+=t*16),this.maintBotAntennaLED){const n=Math.floor(Date.now()/250)%2===0;this.maintBotAntennaLED.material.color.setHex(n?65416:440020)}if(this.maintBotPatrolTime+=t,this.maintBotMode==="PATROL"){const n=this.maintBotPatrolTime%16/16;let i,o,a=!1;n<.4?(i=-.82+n/.4*.4,o=0):n<.65?(i=-.42,o=0,a=!0):(i=-.42-(n-.65)/.35*.4,o=Math.PI);const r=Math.sin(this.maintBotPatrolTime*8)*.0015;this.maintBotGroup.position.set(0,.035+r,i),this.maintBotGroup.rotation.y=o,!a&&this.maintBotWheels&&this.maintBotWheels.forEach(l=>{l.rotation.x+=t*6}),a?(this.maintArmShoulder.rotation.x=-.35+Math.sin(this.maintBotPatrolTime*3)*.12,this.maintArmForearm.rotation.x=-.4+Math.cos(this.maintBotPatrolTime*4)*.18,this.maintBotLaserBeam.visible=!0,this.maintBotFaceMat.color.setHex(65416),Math.random()<.008&&it.playMaintBotBeep()):(this.maintArmShoulder.rotation.x=0,this.maintArmForearm.rotation.x=0,this.maintBotLaserBeam.visible=!1,this.maintBotFaceMat.color.setHex(440020))}else this.maintBotMode==="DOCK"&&(this.maintBotGroup.position.set(-.18,.035,-.85),this.maintBotGroup.rotation.y=Math.PI,this.maintBotLaserBeam.visible=!1,this.maintBotFaceMat.color.setHex(3718648))}}}const Ce={d1:.35,a2:.4,a3:.38,d6:.16,jointLimits:[{min:-180,max:180,name:"J1 (Base Turntable)"},{min:-85,max:110,name:"J2 (Shoulder Pitch)"},{min:-150,max:130,name:"J3 (Elbow Pitch)"},{min:-180,max:180,name:"J4 (Forearm Roll)"},{min:-130,max:130,name:"J5 (Wrist Pitch)"},{min:-360,max:360,name:"J6 (Flange Roll)"}],homePose:[0,25,45,0,-70,0]},km=Math.PI/180,Ds=180/Math.PI;class Ql{constructor(t=Ce){this.cfg=t}degToRad(t){return t.map(e=>e*km)}radToDeg(t){return t.map(e=>e*Ds)}clampJoints(t){return t.map((e,n)=>{const i=this.cfg.jointLimits[n];return Math.max(i.min,Math.min(i.max,e))})}computeFK(t){const[e,n,i,o,a,r]=this.degToRad(t),{d1:l,a2:c,a3:u,d6:h}=this.cfg,p=new zt().identity(),m=new zt().makeRotationY(e).setPosition(0,l,0),g=new zt().makeRotationX(n),_=m.clone().multiply(g),f=new zt().makeTranslation(0,c,0).multiply(new zt().makeRotationX(i)),d=_.clone().multiply(f),E=new zt().makeTranslation(0,u,0).multiply(new zt().makeRotationY(o)),b=d.clone().multiply(E),M=new zt().makeRotationX(a),L=b.clone().multiply(M),C=new zt().makeRotationY(r).multiply(new zt().makeTranslation(0,h,0)),A=L.clone().multiply(C),P=new T().setFromMatrixPosition(A),y=new qe().setFromRotationMatrix(A,"XYZ"),x={rx:y.x*Ds,ry:y.y*Ds,rz:y.z*Ds},R=[new T().setFromMatrixPosition(p),new T().setFromMatrixPosition(m),new T().setFromMatrixPosition(_),new T().setFromMatrixPosition(d),new T().setFromMatrixPosition(b),new T().setFromMatrixPosition(L),P];return{tcpPosition:P,tcpEulerDeg:x,tcpMatrix:A,jointFrames:R,isReachable:!0}}solveIK(t,e={rx:0,ry:0,rz:0},n=Ce.homePose){const{d1:i,a2:o,a3:a,d6:r}=this.cfg,l=o+a+r,c=new T(t.x,t.y-i,t.z).length();let u=null;c>l&&(u="Target beyond reach envelope");let h=this.degToRad(n);h[0]=Math.atan2(t.x,t.z);const p=1e-5,m=.001,g=40;for(let E=0;E<g;E++){const M=this.computeFK(this.radToDeg(h)).tcpPosition,L=new T().subVectors(t,M);if(L.length()<8e-4)break;const C=[];for(let F=0;F<6;F++){h[F]+=p;const B=this.computeFK(this.radToDeg(h));h[F]-=p,C.push(new T().subVectors(B.tcpPosition,M).divideScalar(p))}const A=[[0,0,0],[0,0,0],[0,0,0]];for(let F=0;F<6;F++){const B=C[F];A[0][0]+=B.x*B.x,A[0][1]+=B.x*B.y,A[0][2]+=B.x*B.z,A[1][0]+=B.y*B.x,A[1][1]+=B.y*B.y,A[1][2]+=B.y*B.z,A[2][0]+=B.z*B.x,A[2][1]+=B.z*B.y,A[2][2]+=B.z*B.z}A[0][0]+=m,A[1][1]+=m,A[2][2]+=m;const y=new Nt().set(A[0][0],A[0][1],A[0][2],A[1][0],A[1][1],A[1][2],A[2][0],A[2][1],A[2][2]).invert().elements,x=y[0]*L.x+y[3]*L.y+y[6]*L.z,R=y[1]*L.x+y[4]*L.y+y[7]*L.z,G=y[2]*L.x+y[5]*L.y+y[8]*L.z;for(let F=0;F<6;F++){const B=C[F],X=B.x*x+B.y*R+B.z*G;h[F]+=Math.max(-.25,Math.min(.25,X*.85))}}let _=this.clampJoints(this.radToDeg(h));const f=this.computeFK(_),d=f.tcpPosition.distanceTo(t);return{success:d<.03,jointsDeg:_,errorDistance:d,tcpPosition:f.tcpPosition,singularityWarning:u}}}class Gm{constructor(){this.group=new Bt,this.group.name="PneumaticGripper",this.isOpen=!0,this.jawStroke=.038,this.currentStroke=.038,this.targetStroke=.038,this.holdingObject=null,this.jawSpeed=.22,this.bodyMat=new ie({color:2040877,roughness:.35,metalness:.8}),this.jawMat=new ie({color:9741240,roughness:.2,metalness:.95}),this.padMat=new ie({color:988970,roughness:.9,metalness:.1}),this.beamMat=new ee({color:65416,transparent:!0,opacity:0}),this.buildModel()}buildModel(){const t=new mt(.09,.06,.06),e=new I(t,this.bodyMat);e.position.y=.03,e.castShadow=!0,this.group.add(e);const n=new pt(.008,.008,.004,16);this.ledMat=new ee({color:1096065});const i=new I(n,this.ledMat);i.position.set(0,.03,.031),i.rotation.x=Math.PI/2,this.group.add(i);const o=new pt(.016,.016,.05,16),a=new ie({color:14251782,roughness:.4,metalness:.7}),r=new I(o,a);r.position.set(-.026,.03,0);const l=new I(o,a);l.position.set(.026,.03,0),this.group.add(r,l),this.leftJawGroup=new Bt,this.leftJawGroup.position.set(-this.currentStroke,.06,0);const c=new mt(.012,.06,.024),u=new I(c,this.jawMat);u.position.y=.03,u.castShadow=!0;const h=new mt(.004,.045,.022),p=new I(h,this.padMat);p.position.set(.007,.035,0),this.leftJawGroup.add(u,p),this.rightJawGroup=new Bt,this.rightJawGroup.position.set(this.currentStroke,.06,0);const m=new I(c,this.jawMat);m.position.y=.03,m.castShadow=!0;const g=new I(h,this.padMat);g.position.set(-.007,.035,0),this.rightJawGroup.add(m,g),this.group.add(this.leftJawGroup,this.rightJawGroup);const _=new pt(.001,.001,.08,8),f=new I(_,this.beamMat);f.rotation.z=Math.PI/2,f.position.y=.095,this.group.add(f),this.tcpLocal=new T(0,.095,0)}open(){this.isOpen||(this.isOpen=!0,this.targetStroke=this.jawStroke,it.playPneumatic(!0),this.releaseObject(),this.ledMat.color.setHex(3718648))}close(t=[]){if(!this.isOpen)return;this.isOpen=!1,it.playPneumatic(!1);const e=this.getTCPWorldPosition();let n=null;for(const i of t){if(!i||!i.mesh)continue;if(e.distanceTo(i.mesh.position)<.075){n=i;break}}n?(this.holdingObject=n,n.isHeld=!0,this.targetStroke=.022,it.playClampImpact(),this.ledMat.color.setHex(1096065),this.beamMat.opacity=.75):(this.targetStroke=.004,this.ledMat.color.setHex(16096779),this.beamMat.opacity=0)}setTargetWidthMm(t,e=[]){const i=Math.max(0,Math.min(60,t))/1e3/2;if(this.targetStroke=Math.max(.004,Math.min(this.jawStroke,i)),this.isOpen=this.targetStroke>.015,!this.holdingObject&&i<.025){const o=this.getTCPWorldPosition();for(const a of e)if(!(!a||!a.mesh)&&o.distanceTo(a.mesh.position)<.075){this.holdingObject=a,a.isHeld=!0,this.targetStroke=.022,it.playClampImpact(),this.ledMat.color.setHex(1096065),this.beamMat.opacity=.75;return}}this.isOpen?(this.ledMat.color.setHex(3718648),this.holdingObject&&i>.025&&this.releaseObject()):this.holdingObject||(this.ledMat.color.setHex(16096779),this.beamMat.opacity=0)}releaseObject(){this.holdingObject&&(this.holdingObject.isHeld=!1,this.holdingObject=null,this.beamMat.opacity=0)}forceDrop(){this.releaseObject(),this.ledMat.color.setHex(3718648),it.playPneumatic(!0)}getGripStatus(){const t=(this.currentStroke*2*1e3).toFixed(1);return{isOpen:this.isOpen,widthMm:parseFloat(t),isHolding:!!this.holdingObject,heldId:this.holdingObject?this.holdingObject.id:null,pressureBar:this.isOpen?5.8:6.2}}getTCPWorldPosition(){const t=new T;return this.group.localToWorld(t.copy(this.tcpLocal)),t}update(t,e=[]){const n=this.targetStroke-this.currentStroke;if(Math.abs(n)>5e-4){const i=Math.sign(n)*Math.min(Math.abs(n),this.jawSpeed*t);this.currentStroke+=i,this.leftJawGroup.position.x=-this.currentStroke,this.rightJawGroup.position.x=this.currentStroke}if(this.holdingObject&&this.holdingObject.mesh){const i=this.getTCPWorldPosition();this.holdingObject.mesh.position.copy(i),this.holdingObject.mesh.quaternion.copy(this.group.getWorldQuaternion(new Se))}}}const gi={fanuc:{name:"FANUC Industrial Yellow",primaryColor:16096779,secondaryColor:1976635,accentColor:14251782,metalColor:9741240,label:"ROBOFORGE R-2000iC"},kuka:{name:"KUKA Industrial Orange",primaryColor:15357964,secondaryColor:1580068,accentColor:12730636,metalColor:9741240,label:"ROBOFORGE KR QUANTEC"}};class zm{constructor(t,e="fanuc"){this.scene=t,this.currentTheme=e,this.kinematics=new Ql(Ce),this.joints=[...Ce.homePose],this.targetJoints=[...Ce.homePose],this.prevJoints=[...Ce.homePose],this.jointVelocities=[0,0,0,0,0,0],this.root=new Bt,this.root.name="IndustrialRobotArm",this.materials={},this.initMaterials(),this.gripper=new Gm,this.buildHierarchy(),this.scene.add(this.root),this.setupCoordinateAxes(),this.setJoints(this.joints)}initMaterials(){const t=gi[this.currentTheme]||gi.fanuc;this.materials.primary=new ie({color:t.primaryColor,roughness:.28,metalness:.45}),this.materials.secondary=new ie({color:t.secondaryColor,roughness:.45,metalness:.8}),this.materials.metal=new ie({color:t.metalColor,roughness:.15,metalness:.95}),this.materials.chrome=new ie({color:16777215,roughness:.08,metalness:.98}),this.materials.accent=new ie({color:t.accentColor,roughness:.35,metalness:.5});const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n.fillStyle="#f59e0b",n.fillRect(0,0,128,128),n.fillStyle="#0f172a";for(let o=-128;o<256;o+=32)n.beginPath(),n.moveTo(o,0),n.lineTo(o+32,128),n.lineTo(o+48,128),n.lineTo(o+16,0),n.fill();const i=new Yi(e);i.wrapS=mn,i.wrapT=mn,i.repeat.set(4,1),this.materials.hazard=new ee({map:i}),this.initBrandDecals()}initBrandDecals(){this.brandCanvases={},this.brandTextures={},this.brandMaterials={};const t=[{key:"forearm",width:1024,height:256},{key:"boom_front",width:512,height:384},{key:"boom_side",width:1024,height:384},{key:"turret",width:512,height:256}];for(const e of t){const n=document.createElement("canvas");n.width=e.width,n.height=e.height,this.renderBrandCanvas(n,e.key,this.currentTheme);const i=new Yi(n);i.anisotropy=8,i.minFilter=In,i.magFilter=tn,i.generateMipmaps=!0;const o=new ie({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.32,roughness:.35,metalness:.15,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.brandCanvases[e.key]=n,this.brandTextures[e.key]=i,this.brandMaterials[e.key]=o}}updateBrandDecals(t){if(this.brandCanvases)for(const e of Object.keys(this.brandCanvases)){const n=this.brandCanvases[e],i=this.brandTextures[e];n&&i&&(this.renderBrandCanvas(n,e,t),i.needsUpdate=!0)}}renderBrandCanvas(t,e,n){const i=t.getContext("2d"),o=t.width,a=t.height,l="#"+(gi[n]||gi.fanuc).primaryColor.toString(16).padStart(6,"0"),u=n==="fanuc"?"RF-2000iC":"RF-QUANTEC";if(i.clearRect(0,0,o,a),e==="forearm"){i.fillStyle="#0a0d14",i.fillRect(0,0,o,a),i.strokeStyle="#141a26",i.lineWidth=1.5;for(let _=-a;_<o+a;_+=18)i.beginPath(),i.moveTo(_,0),i.lineTo(_+a*.7,a),i.stroke();i.strokeStyle="#273244",i.lineWidth=5,i.strokeRect(6,6,o-12,a-12),i.strokeStyle="#1a2332",i.lineWidth=1.5,i.strokeRect(12,12,o-24,a-24),i.fillStyle=l,i.beginPath(),i.moveTo(28,26),i.lineTo(54,26),i.lineTo(36,a-26),i.lineTo(20,a-26),i.closePath(),i.fill(),i.beginPath(),i.moveTo(60,26),i.lineTo(76,26),i.lineTo(58,a-26),i.lineTo(44,a-26),i.closePath(),i.fill(),i.save(),i.translate(142,a/2),i.fillStyle=l,i.beginPath();for(let _=0;_<6;_++){const f=_*Math.PI/3-Math.PI/6,d=44*Math.cos(f),E=44*Math.sin(f);_===0?i.moveTo(d,E):i.lineTo(d,E)}i.closePath(),i.fill(),i.fillStyle="#0a0d14",i.beginPath();for(let _=0;_<6;_++){const f=_*Math.PI/3-Math.PI/6,d=28*Math.cos(f),E=28*Math.sin(f);_===0?i.moveTo(d,E):i.lineTo(d,E)}i.closePath(),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(-16,-10),i.lineTo(16,-10),i.lineTo(10,4),i.lineTo(14,12),i.lineTo(-14,12),i.lineTo(-10,4),i.closePath(),i.fill(),i.restore(),i.fillStyle="#ffffff",i.shadowColor="rgba(0, 0, 0, 0.85)",i.shadowBlur=8,i.shadowOffsetX=3,i.shadowOffsetY=3,i.font='900 86px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Arial Black", sans-serif',i.textBaseline="middle",i.fillText("ROBOFORGE",215,a/2-20),i.shadowColor="transparent",i.fillStyle=l,i.font='700 23px -apple-system, BlinkMacSystemFont, "Segoe UI", monospace',i.fillText("HEAVY INDUSTRIAL ROBOTICS  //  6-AXIS ARTICULATED",222,a/2+48);const h=o-260,p=32,m=224,g=a-64;i.fillStyle="#111827",i.strokeStyle=l,i.lineWidth=2.5,i.beginPath(),i.roundRect(h,p,m,g,8),i.fill(),i.stroke(),i.fillStyle="#ffffff",i.font="900 32px monospace",i.textAlign="center",i.fillText(u,h+m/2,p+52),i.fillStyle="#64748b",i.font="700 16px monospace",i.fillText("PAYLOAD: 165 KG",h+m/2,p+92),i.fillText("IP67  •  CE  •  CLASS 4",h+m/2,p+124),i.fillText("SER. RF-2026-X8",h+m/2,p+152),i.textAlign="start",this.drawCornerRivets(i,o,a,16,7)}else if(e==="boom_front"){i.fillStyle="#0b0e17",i.fillRect(0,0,o,a),i.strokeStyle="#151d2c",i.lineWidth=1.5;for(let h=0;h<a;h+=14)i.beginPath(),i.moveTo(0,h),i.lineTo(o,h),i.stroke();i.strokeStyle="#2d3748",i.lineWidth=6,i.strokeRect(6,6,o-12,a-12),i.fillStyle=l,i.fillRect(16,16,o-32,10),i.save(),i.translate(o/2,85),i.fillStyle=l,i.beginPath();for(let h=0;h<6;h++){const p=h*Math.PI/3-Math.PI/6,m=36*Math.cos(p),g=36*Math.sin(p);h===0?i.moveTo(m,g):i.lineTo(m,g)}i.closePath(),i.fill(),i.fillStyle="#0b0e17",i.beginPath();for(let h=0;h<6;h++){const p=h*Math.PI/3-Math.PI/6,m=22*Math.cos(p),g=22*Math.sin(p);h===0?i.moveTo(m,g):i.lineTo(m,g)}i.closePath(),i.fill(),i.fillStyle="#ffffff",i.fillRect(-10,-6,20,12),i.restore(),i.textAlign="center",i.fillStyle="#ffffff",i.shadowColor="rgba(0,0,0,0.9)",i.shadowBlur=8,i.shadowOffsetY=3,i.font='900 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Arial Black", sans-serif',i.fillText("ROBOFORGE",o/2,185),i.shadowColor="transparent",i.fillStyle=l,i.fillRect(48,220,o-96,4),i.fillStyle="#f8fafc",i.font="800 28px monospace",i.fillText(u+" // 6-AXIS",o/2,260),i.fillStyle="#94a3b8",i.font="700 18px monospace",i.fillText("AUTOMATED WORKCELL SYSTEM",o/2,296),i.fillStyle="#64748b",i.font="600 15px monospace",i.fillText("MAX PAYLOAD 165KG  •  REACH 2.05M",o/2,330),i.fillStyle=l,i.fillRect(16,a-26,o-32,10),i.textAlign="start",this.drawCornerRivets(i,o,a,16,7)}else if(e==="boom_side"){i.fillStyle="#0a0e16",i.fillRect(0,0,o,a),i.strokeStyle="#2d3748",i.lineWidth=6,i.strokeRect(6,6,o-12,a-12),i.fillStyle=l,i.fillRect(20,20,18,a-40),i.save(),i.translate(95,a/2),i.fillStyle=l,i.beginPath();for(let h=0;h<6;h++){const p=h*Math.PI/3,m=36*Math.cos(p),g=36*Math.sin(p);h===0?i.moveTo(m,g):i.lineTo(m,g)}i.closePath(),i.fill(),i.restore(),i.fillStyle="#ffffff",i.shadowColor="rgba(0,0,0,0.85)",i.shadowBlur=10,i.shadowOffsetY=4,i.font='900 96px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Arial Black", sans-serif',i.textBaseline="middle",i.fillText("ROBOFORGE",160,a/2-25),i.shadowColor="transparent",i.fillStyle=l,i.font='800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", monospace',i.fillText("INDUSTRIAL ROBOTICS  //  "+u,165,a/2+55),this.drawCornerRivets(i,o,a,18,8)}else e==="turret"&&(i.fillStyle="#0f172a",i.fillRect(0,0,o,a),i.strokeStyle="#334155",i.lineWidth=4,i.strokeRect(6,6,o-12,a-12),i.fillStyle=l,i.fillRect(12,12,o-24,6),i.fillStyle="#ffffff",i.font='900 38px -apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Black", sans-serif',i.textAlign="center",i.fillText("ROBOFORGE DYNAMICS",o/2,58),i.fillStyle=l,i.font="800 18px monospace",i.fillText("HEAVY INDUSTRIAL DIVISION",o/2,88),i.fillStyle="#94a3b8",i.font="600 16px monospace",i.fillText("TYPE: 6-DOF ARTICULATED MANIPULATOR",o/2,128),i.fillText("VOLTS: 400V 3PH 50/60Hz  •  IP67",o/2,156),i.fillText("SER. NO: RF-2026-X9482  •  CE / ISO 9001",o/2,184),i.fillStyle=l,i.fillRect(12,a-18,o-24,6),i.textAlign="start",this.drawCornerRivets(i,o,a,14,5))}drawCornerRivets(t,e,n,i,o){const a=[[i,i],[e-i,i],[i,n-i],[e-i,n-i]];for(const[r,l]of a)t.fillStyle="#64748b",t.beginPath(),t.arc(r,l,o,0,Math.PI*2),t.fill(),t.fillStyle="#0b0f19",t.beginPath(),t.arc(r,l,o*.5,0,Math.PI*2),t.fill()}createBadgePlate(t,e,n,i){const o=new Bt,a=new mt(t,e,n),r=new I(a,this.materials.secondary);r.castShadow=!0,o.add(r);const l=new Ee(t-.002,e-.002),c=new I(l,i);return c.position.z=n/2+6e-4,o.add(c),o}createForearmBadgeMesh(t,e="right"){const a=this.createBadgePlate(.24,.058,.0025,this.brandMaterials.forearm),r=e==="right"?.045+.0025/2:-.045-.0025/2;a.position.set(r,t*.54,0);const l=new zt;return e==="right"?l.makeBasis(new T(0,-1,0),new T(0,0,-1),new T(1,0,0)):l.makeBasis(new T(0,1,0),new T(0,0,-1),new T(-1,0,0)),a.rotation.setFromRotationMatrix(l),a}createBoomFrontBadgeMesh(t){const o=this.createBadgePlate(.096,.15,.0025,this.brandMaterials.boom_front);return o.position.set(0,t*.52,.06+.0025/2),o}createBoomSideBadgeMesh(t,e=1){const a=this.createBadgePlate(.096,.052,.0025,this.brandMaterials.boom_side),r=e===1?t*.68:t*.58,l=e===1?.012:0,c=e*(.055+.0025/2);return a.position.set(c,r,l),a.rotation.y=e*(Math.PI/2),a}createTurretBadgeMesh(t){const o=this.createBadgePlate(.1,.045,.0025,this.brandMaterials.turret);return o.position.set(0,(t+.12)/2+.02,.166+.0025/2),o}setTheme(t){if(!gi[t])return;this.currentTheme=t;const e=gi[t];this.materials.primary.color.setHex(e.primaryColor),this.materials.secondary.color.setHex(e.secondaryColor),this.materials.accent.color.setHex(e.accentColor),this.updateBrandDecals(t)}buildHierarchy(){const{d1:t,a2:e,a3:n}=Ce;this.baseMesh=this.createBasePlate(),this.root.add(this.baseMesh),this.j1Pivot=new Bt,this.j1Pivot.name="Joint1_Turntable",this.root.add(this.j1Pivot),this.j1Mesh=this.createTurntableCasting(),this.j1Pivot.add(this.j1Mesh),this.j2Pivot=new Bt,this.j2Pivot.name="Joint2_Shoulder",this.j2Pivot.position.set(0,t,0),this.j1Pivot.add(this.j2Pivot),this.j2Mesh=this.createShoulderCasting(),this.j2Pivot.add(this.j2Mesh),this.j3Pivot=new Bt,this.j3Pivot.name="Joint3_Elbow",this.j3Pivot.position.set(0,e,0),this.j2Pivot.add(this.j3Pivot),this.j3Mesh=this.createElbowCasting(),this.j3Pivot.add(this.j3Mesh),this.j4Pivot=new Bt,this.j4Pivot.name="Joint4_ForearmRoll",this.j4Pivot.position.set(0,n,0),this.j3Pivot.add(this.j4Pivot),this.j4Mesh=this.createForearmCasting(),this.j4Pivot.add(this.j4Mesh),this.j5Pivot=new Bt,this.j5Pivot.name="Joint5_WristPitch",this.j4Pivot.add(this.j5Pivot),this.j5Mesh=this.createWristCasting(),this.j5Pivot.add(this.j5Mesh),this.j6Pivot=new Bt,this.j6Pivot.name="Joint6_FlangeRoll",this.j5Pivot.add(this.j6Pivot),this.j6Mesh=this.createFlangePlate(),this.j6Pivot.add(this.j6Mesh),this.gripper.group.position.set(0,.02,0),this.j6Pivot.add(this.gripper.group),this.jointPivots=[this.j1Pivot,this.j2Pivot,this.j3Pivot,this.j4Pivot,this.j5Pivot,this.j6Pivot]}createBasePlate(){const t=new Bt,e=new pt(.24,.28,.08,8),n=new I(e,this.materials.secondary);n.position.y=.04,n.receiveShadow=!0,n.castShadow=!0,t.add(n);const i=new pt(.242,.242,.024,32),o=new I(i,this.materials.hazard);o.position.y=.04,t.add(o);const a=new pt(.015,.015,.02,6);for(let r=0;r<8;r++){const l=r/8*Math.PI*2,c=new I(a,this.materials.chrome);c.position.set(Math.cos(l)*.21,.09,Math.sin(l)*.21),t.add(c)}return t}createTurntableCasting(){const t=new Bt,{d1:e}=Ce,n=new pt(.18,.2,.08,32),i=new I(n,this.materials.primary);i.position.y=.12,i.castShadow=!0,t.add(i);const o=new pt(.15,.17,e-.12,24),a=new I(o,this.materials.primary);a.position.y=(e+.12)/2,a.castShadow=!0,t.add(a);const r=new mt(.12,.16,.14),l=new I(r,this.materials.secondary);l.position.set(0,.22,-.12),l.castShadow=!0,t.add(l);const c=this.createTurretBadgeMesh(e);return t.add(c),t}createShoulderCasting(){const t=new Bt,{a2:e}=Ce,n=new pt(.1,.1,.18,32),i=new I(n,this.materials.secondary);i.rotation.z=Math.PI/2,i.castShadow=!0,t.add(i);const o=new mt(.11,e,.12),a=new I(o,this.materials.primary);a.position.set(0,e/2,0),a.castShadow=!0,t.add(a);const r=new pt(.022,.022,e*.75,16),l=new I(r,this.materials.chrome);l.position.set(.07,e*.45,-.04),l.castShadow=!0,t.add(l);const c=new Zs(.065,32),u=new ee({color:58879}),h=new I(c,u);h.position.set(.092,0,0),h.rotation.y=Math.PI/2,t.add(h);const p=this.createBoomFrontBadgeMesh(e);t.add(p);const m=this.createBoomSideBadgeMesh(e,1);t.add(m);const g=this.createBoomSideBadgeMesh(e,-1);return t.add(g),t}createElbowCasting(){const t=new Bt,{a3:e}=Ce,n=new pt(.08,.08,.15,32),i=new I(n,this.materials.secondary);i.rotation.z=Math.PI/2,i.castShadow=!0,t.add(i);const o=new mt(.09,e,.09),a=new I(o,this.materials.primary);a.position.set(0,e/2,0),a.castShadow=!0,t.add(a);const r=new pt(.045,.045,.12,16),l=new I(r,this.materials.secondary);l.position.set(0,.06,.07),t.add(l);const c=this.createForearmBadgeMesh(e,"right");t.add(c);const u=this.createForearmBadgeMesh(e,"left");return t.add(u),t}createForearmCasting(){const t=new Bt,e=new pt(.05,.055,.07,24),n=new I(e,this.materials.secondary);return n.position.y=.02,n.castShadow=!0,t.add(n),t}createWristCasting(){const t=new Bt,e=new mt(.075,.05,.065),n=new I(e,this.materials.primary);n.position.y=.04,n.castShadow=!0,t.add(n);const i=new pt(.025,.025,.076,16),o=new I(i,this.materials.metal);return o.rotation.z=Math.PI/2,o.position.y=.04,t.add(o),t}createFlangePlate(){const t=new Bt,e=new pt(.045,.045,.015,32),n=new I(e,this.materials.chrome);return n.position.y=.065,n.castShadow=!0,t.add(n),t}setupCoordinateAxes(){this.tcpAxesHelper=new um(.12),this.j6Pivot.add(this.tcpAxesHelper),this.tcpAxesHelper.position.y=.16}setJoints(t){this.joints=this.kinematics.clampJoints(t);const e=this.kinematics.degToRad(this.joints);this.j1Pivot.rotation.y=e[0],this.j2Pivot.rotation.x=e[1],this.j3Pivot.rotation.x=e[2],this.j4Pivot.rotation.y=e[3],this.j5Pivot.rotation.x=e[4],this.j6Pivot.rotation.y=e[5]}getJoints(){return[...this.joints]}getTCPWorldPosition(){const t=new T;return this.gripper.group.localToWorld(t.copy(this.gripper.tcpLocal)),t}update(t,e=[]){let n=0;for(let o=0;o<6;o++){const a=Math.abs(this.joints[o]-this.prevJoints[o])/Math.max(.001,t);this.jointVelocities[o]=a,a>n&&(n=a),this.prevJoints[o]=this.joints[o]}const i=Math.min(1,n/120);it.updateServoSound(i),this.gripper.update(t,e)}}class Vm{constructor(t){this.kinematics=t}planMoveJ(t,e,n=1){let i=0;for(let u=0;u<6;u++){const h=Math.abs(e[u]-t[u]);h>i&&(i=h)}const o=90*Math.max(.2,n),a=Math.max(.4,i/o),r=Math.max(15,Math.ceil(a*60)),l=[],c=[];for(let u=0;u<=r;u++){const h=u/r,p=.5*(1-Math.cos(Math.PI*h)),m=[];for(let _=0;_<6;_++)m.push(t[_]+(e[_]-t[_])*p);const g=this.kinematics.computeFK(m);l.push({t:h*a,joints:m,tcpPos:g.tcpPosition,tcpEuler:g.tcpEulerDeg}),c.push(g.tcpPosition)}return{type:"MoveJ",duration:a,steps:r,samples:l,path3D:c,startJoints:[...t],targetJoints:[...e]}}planMoveL(t,e,n,i=1){const o=this.kinematics.computeFK(t),a=o.tcpPosition,r=o.tcpEulerDeg,l=a.distanceTo(e),c=.25*Math.max(.2,i),u=Math.max(.4,l/c),h=Math.max(15,Math.ceil(u*60)),p=[],m=[];let g=[...t];for(let _=0;_<=h;_++){const f=_/h,d=.5*(1-Math.cos(Math.PI*f)),E=new T().lerpVectors(a,e,d),b={rx:r.rx+(n.rx-r.rx)*d,ry:r.ry+(n.ry-r.ry)*d,rz:r.rz+(n.rz-r.rz)*d};g=this.kinematics.solveIK(E,b,g).jointsDeg,p.push({t:f*u,joints:[...g],tcpPos:E.clone(),tcpEuler:{...b}}),m.push(E.clone())}return{type:"MoveL",duration:u,steps:h,samples:p,path3D:m,startPos:a.clone(),targetPos:e.clone()}}createTrajectoryVisual(t,e=!1){const n=new pe().setFromPoints(t),i=new vn({color:e?58879:16096779,linewidth:2,transparent:!0,opacity:.85});return new Ne(n,i)}}class Hm{constructor(t,e,n){this.arm=t,this.workcell=e,this.planner=n,this.ioDeck=null,this.instructions=[],this.currentLine=0,this.status="IDLE",this.speedMultiplier=1,this.isLooping=!1,this.activeTrajectory=null,this.trajectorySampleIdx=0,this.waitRemaining=0,this.isWelding=!1,this.isScanning=!1,this.onLineChange=null,this.onStatusChange=null,this.onTrajectoryUpdate=null,this.onProgramComplete=null,this.onJSLog=null}loadProgram(t){this.stop(),this.instructions=t.map((e,n)=>({...e,id:e.id||`line_${n+1}`})),this.currentLine=0,this.onLineChange&&this.onLineChange(this.currentLine)}play(){if(this.instructions.length!==0){if(it.playClick(1400,.03,.2),this.activeTrajectory&&this.pausedJoints&&this.arm.getJoints().some((n,i)=>Math.abs(n-this.pausedJoints[i])>.5)){this.activeTrajectory=null,this.executeCurrentLine();return}this.status="RUNNING",this.onStatusChange&&this.onStatusChange(this.status),this.workcell.setAndonState(!1,!1,!0,!1)}}pause(){it.playClick(900,.03,.2),this.status="PAUSED",this.pausedJoints=[...this.arm.getJoints()],this.isWelding&&this.workcell&&this.workcell.stopWelding(),this.onStatusChange&&this.onStatusChange(this.status),this.workcell.setAndonState(!1,!0,!1,!1)}step(){this.instructions.length!==0&&(it.playClick(1800,.02,.25),this.status="STEPPING",this.onStatusChange&&this.onStatusChange(this.status),this.executeCurrentLine())}stop(){this.status="IDLE",this.activeTrajectory=null,this.waitRemaining=0,this.pausedJoints=null,this.isWelding=!1,this.isScanning=!1,this.workcell&&(this.workcell.stopWelding(),this.workcell.stopVisionScan()),this.onStatusChange&&this.onStatusChange(this.status),this.workcell.setAndonState(!1,!0,!1,!1)}reset(){this.stop(),this.currentLine=0,this.onLineChange&&this.onLineChange(this.currentLine),it.playClick(1100,.03,.2)}setSpeed(t){this.speedMultiplier=Math.max(.1,Math.min(3,t))}update(t){if(!(this.status!=="RUNNING"&&this.status!=="STEPPING")){if(this.isWelding&&this.workcell&&this.workcell.updateWelding(t,this.arm.getTCPWorldPosition()),this.activeTrajectory){const e=Math.max(1,Math.round(this.speedMultiplier*(t/.016666666666666666)));if(this.trajectorySampleIdx+=e,this.trajectorySampleIdx<this.activeTrajectory.samples.length){const n=this.activeTrajectory.samples[this.trajectorySampleIdx],i=this.arm.kinematics.computeFK(n.joints);if(i.tcpPosition.y<.245){const o=i.tcpPosition.clone();o.y=Math.max(.25,o.y);const a=this.arm.kinematics.solveIK(o,i.tcpEulerDeg,n.joints);a.success?this.arm.setJoints(a.jointsDeg):this.arm.setJoints(n.joints)}else this.arm.setJoints(n.joints)}else{const n=this.activeTrajectory.samples[this.activeTrajectory.samples.length-1];this.arm.setJoints(n.joints),this.activeTrajectory=null,this.pausedJoints=null,this.status==="STEPPING"?(this.advanceLine(),this.status="PAUSED",this.onStatusChange&&this.onStatusChange(this.status)):(this.advanceLine(),this.executeCurrentLine())}return}if(this.waitRemaining>0){this.waitRemaining-=t*this.speedMultiplier,this.waitRemaining<=0&&(this.waitRemaining=0,this.status==="STEPPING"?(this.advanceLine(),this.status="PAUSED",this.onStatusChange&&this.onStatusChange(this.status)):(this.advanceLine(),this.executeCurrentLine()));return}this.status==="RUNNING"&&this.executeCurrentLine()}}executeCurrentLine(){if(this.currentLine>=this.instructions.length)if(this.isLooping)this.currentLine=0,this.onLineChange&&this.onLineChange(this.currentLine);else{this.status="IDLE",it.playSuccessChime(),this.onStatusChange&&this.onStatusChange(this.status),this.onProgramComplete&&this.onProgramComplete(),this.workcell.setAndonState(!1,!1,!1,!0);return}const t=this.instructions[this.currentLine];switch(this.onLineChange&&this.onLineChange(this.currentLine),t.type){case"MOVE_J":{const e=t.joints;this.activeTrajectory=this.planner.planMoveJ(this.arm.getJoints(),e,this.speedMultiplier),this.trajectorySampleIdx=0,this.onTrajectoryUpdate&&this.onTrajectoryUpdate(this.activeTrajectory);break}case"MOVE_L":{const e=t.position,n=t.euler||{rx:0,ry:0,rz:0};this.activeTrajectory=this.planner.planMoveL(this.arm.getJoints(),e,n,this.speedMultiplier),this.trajectorySampleIdx=0,this.onTrajectoryUpdate&&this.onTrajectoryUpdate(this.activeTrajectory);break}case"GRIPPER_CLOSE":{this.arm.gripper.close(this.workcell.payloads),this.waitRemaining=.3;break}case"GRIPPER_OPEN":{this.arm.gripper.open(),this.waitRemaining=.25;break}case"CONVEYOR":{this.workcell.conveyorRunning=!!t.state,it.playClick(1e3,.04,.2),this.completeInstantInstruction();break}case"WAIT":{this.waitRemaining=(t.durationMs||500)/1e3;break}case"WAIT_DI":{let e=!1;t.pin===1&&(e=this.workcell.beamBroken===!!t.expectedValue),e&&this.completeInstantInstruction();break}case"SET_DO":{it.playClick(1300,.02,.2),this.completeInstantInstruction();break}case"WELD_START":{this.isWelding=!0,this.workcell.startWelding(this.arm.getTCPWorldPosition()),this.waitRemaining=(t.dwellMs||300)/1e3;break}case"WELD_STOP":{this.isWelding=!1,this.workcell.stopWelding(),this.waitRemaining=(t.dwellMs||350)/1e3;break}case"VISION_SCAN_START":{this.isScanning=!0,this.workcell.startVisionScan(this.arm.getTCPWorldPosition()),this.waitRemaining=(t.dwellMs||250)/1e3;break}case"VISION_SCAN_STOP":{this.isScanning=!1,this.workcell.stopVisionScan(),this.waitRemaining=(t.dwellMs||250)/1e3;break}case"JS_SCRIPT":{try{if(t.code){const e=this.createRobotAPI();new Function("robot",t.code)(e)}}catch(e){console.error("[Sequencer JS Execution Error]",e),this.onJSLog&&this.onJSLog(`❌ JS Error: ${e.message}`)}this.completeInstantInstruction();break}default:this.completeInstantInstruction();break}}executeMoveJDirect(t,e=1){!t||t.length<6||(it.playClick(1600,.02,.2),this.activeTrajectory=this.planner.planMoveJ(this.arm.getJoints(),t,e*this.speedMultiplier),this.trajectorySampleIdx=0,this.status="RUNNING",this.onStatusChange&&this.onStatusChange(this.status),this.onTrajectoryUpdate&&this.onTrajectoryUpdate(this.activeTrajectory))}executeMoveLDirect(t,e,n=1){it.playClick(1600,.02,.2);const i=t instanceof T?t:new T(t.x,t.y,t.z),o=e||{rx:0,ry:0,rz:0};this.activeTrajectory=this.planner.planMoveL(this.arm.getJoints(),i,o,n*this.speedMultiplier),this.trajectorySampleIdx=0,this.status="RUNNING",this.onStatusChange&&this.onStatusChange(this.status),this.onTrajectoryUpdate&&this.onTrajectoryUpdate(this.activeTrajectory)}createRobotAPI(){return{moveJ:(t,e=1)=>{this.executeMoveJDirect(t,e)},moveL:(t,e,n,i=0,o=0,a=0,r=1)=>{typeof t=="object"&&t!==null?this.executeMoveLDirect(t,e||{rx:0,ry:0,rz:0},n||1):this.executeMoveLDirect(new T(t,e,n),{rx:i,ry:o,rz:a},r)},home:()=>{this.executeMoveJDirect([0,25,45,0,-70,0])},pickFeeder:()=>{this.executeMoveJDirect([-95,59,109,0,-114,0])},placePallet:()=>{this.executeMoveJDirect([76,60,117,0,-118,0])},grip:(t=!0)=>{it.playClick(t?1500:1200,.02,.2),t?this.arm.gripper.close(this.workcell.payloads):this.arm.gripper.open(),this.ioDeck&&this.ioDeck.updateFromSystem()},conveyor:(t=!0)=>{this.workcell.conveyorRunning=!!t,it.playClick(1e3,.04,.2),this.ioDeck&&this.ioDeck.updateFromSystem()},di:t=>this.ioDeck?this.ioDeck.getDI(t):t===1?!!this.workcell.beamBroken:!1,do:t=>this.ioDeck?this.ioDeck.getDO(t):!1,setDO:(t,e)=>{this.ioDeck&&this.ioDeck.setDO(t,e)},getJoints:()=>this.arm.getJoints().map(t=>+t.toFixed(1)),getTCP:()=>{const t=this.arm.kinematics.computeFK(this.arm.getJoints());return{x:+t.tcpPosition.x.toFixed(3),y:+t.tcpPosition.y.toFixed(3),z:+t.tcpPosition.z.toFixed(3),rx:+t.tcpEulerDeg.rx.toFixed(1),ry:+t.tcpEulerDeg.ry.toFixed(1),rz:+t.tcpEulerDeg.rz.toFixed(1)}},runProgram:()=>this.play(),pause:()=>this.pause(),reset:()=>this.reset(),log:t=>{this.onJSLog?this.onJSLog(t):console.log("[ROBOFORGE JS]",t)}}}completeInstantInstruction(){this.status==="STEPPING"?(this.advanceLine(),this.status="PAUSED",this.onStatusChange&&this.onStatusChange(this.status)):(this.advanceLine(),this.executeCurrentLine())}advanceLine(){this.currentLine++,this.onLineChange&&this.onLineChange(this.currentLine)}}class Wm{constructor(t,e,n,i,o=null){this.arm=t,this.kinematics=e,this.onJointChange=n,this.onRecordTarget=i,this.workcell=o,this.jogMode="joint",this.rotStepDeg=5,this.cartStepMeters=.02,this.jointSliders=[],this.jointValueLabels=[]}setWorkcell(t){this.workcell=t}mount(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="teach-pendant-panel">
        <!-- 1. Primary Jog Mode Toggle (All Joints vs Cartesian 6-DOF) -->
        <div class="pendant-mode-bar">
          <button id="pendant-mode-joint" class="pendant-tab-btn active">🕹️ ALL JOINTS (J1 - J6)</button>
          <button id="pendant-mode-cart" class="pendant-tab-btn">📐 CARTESIAN (XYZ / ROT)</button>
        </div>

        <!-- VIEW A: ALL 6 JOINTS (Base J1-J3 + Wrist J4-J6) -->
        <div id="pendant-joint-view" class="pendant-view active">
          <!-- Base & Boom Axes (J1 - J3) -->
          <div class="joint-group-box">
            <div class="joint-group-header">
              <span class="group-title">BASE & BOOM AXES</span>
              <span class="group-tag">J1 - J3</span>
            </div>
            <div class="joints-grid" id="base-joints-grid"></div>
          </div>

          <!-- Wrist Knuckle Axes (J4 - J6) -->
          <div class="joint-group-box wrist-group-box">
            <div class="joint-group-header">
              <span class="group-title title-wrist">🦾 WRIST KNUCKLE AXES</span>
              <span class="group-tag tag-wrist">J4 - J6</span>
            </div>
            <div class="joints-grid" id="wrist-joints-grid"></div>

            <!-- Wrist Quick-Alignment Presets -->
            <div class="wrist-quick-row">
              <button id="wrist-snap-down" class="wrist-snap-btn" title="Point Gripper vertically down toward table/conveyor">⬇️ Tool Down (-90°)</button>
              <button id="wrist-snap-level" class="wrist-snap-btn" title="Point Gripper horizontally level">➡️ Tool Level (0°)</button>
              <button id="wrist-snap-spin90" class="wrist-snap-btn" title="Rotate Flange +90°">🔄 Spin +90°</button>
              <button id="wrist-snap-zero" class="wrist-snap-btn" title="Zero J4, J5, J6 angles">0️⃣ Zero Wrist</button>
            </div>
          </div>
        </div>

        <!-- VIEW B: CARTESIAN (XYZ Position + RxRyRz Wrist Rotation) -->
        <div id="pendant-cart-view" class="pendant-view">
          <!-- XYZ Position Translation -->
          <div class="dpad-group-box">
            <div class="dpad-group-title">TCP POSITION (X, Y, Z) // 20mm</div>
            <div class="cartesian-dpad-grid">
              <div class="dpad-axis">
                <span class="axis-tag">X (TRANSVERSAL)</span>
                <div class="dpad-btn-pair">
                  <button class="jog-cart-btn" data-axis="x" data-dir="-1">◀ -X</button>
                  <button class="jog-cart-btn" data-axis="x" data-dir="1">+X ▶</button>
                </div>
              </div>
              <div class="dpad-axis">
                <span class="axis-tag">Y (ELEVATION)</span>
                <div class="dpad-btn-pair">
                  <button class="jog-cart-btn" data-axis="y" data-dir="-1">▼ -Y</button>
                  <button class="jog-cart-btn" data-axis="y" data-dir="1">+Y ▲</button>
                </div>
              </div>
              <div class="dpad-axis">
                <span class="axis-tag">Z (REACH DEPTH)</span>
                <div class="dpad-btn-pair">
                  <button class="jog-cart-btn" data-axis="z" data-dir="-1">▼ -Z</button>
                  <button class="jog-cart-btn" data-axis="z" data-dir="1">+Z ▲</button>
                </div>
              </div>
            </div>
          </div>

          <!-- RxRyRz Wrist Rotation -->
          <div class="dpad-group-box" style="margin-top: 8px;">
            <div class="dpad-group-title title-wrist">WRIST ROTATION (Rx, Ry, Rz) // 5°</div>
            <div class="wrist-rot-grid">
              <div class="rot-axis-box">
                <span class="rot-axis-lbl">Rx (PITCH / TILT)</span>
                <div class="rot-btn-pair">
                  <button class="jog-rot-btn" data-axis="rx" data-dir="-1">↺ -Rx</button>
                  <button class="jog-rot-btn" data-axis="rx" data-dir="1">+Rx ↻</button>
                </div>
              </div>
              <div class="rot-axis-box">
                <span class="rot-axis-lbl">Ry (YAW / PAN)</span>
                <div class="rot-btn-pair">
                  <button class="jog-rot-btn" data-axis="ry" data-dir="-1">◀ -Ry</button>
                  <button class="jog-rot-btn" data-axis="ry" data-dir="1">+Ry ▶</button>
                </div>
              </div>
              <div class="rot-axis-box">
                <span class="rot-axis-lbl">Rz (FLANGE SPIN)</span>
                <div class="rot-btn-pair">
                  <button class="jog-rot-btn" data-axis="rz" data-dir="-1">↺ -Rz</button>
                  <button class="jog-rot-btn" data-axis="rz" data-dir="1">+Rz ↻</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. INTEGRATED PNEUMATIC GRIPPER STATION (ALWAYS VISIBLE & ACCESSIBLE) -->
        <div class="pendant-gripper-station">
          <div class="station-header">
            <div class="station-title-wrap">
              <span class="station-icon">🗜️</span>
              <span class="station-title">PNEUMATIC END-EFFECTOR</span>
            </div>
            <div class="station-status-pill">
              <span id="grip-status-dot" class="status-dot dot-cyan"></span>
              <span id="grip-status-label" class="grip-status-txt">OPEN (60mm)</span>
            </div>
          </div>

          <!-- Actuation Buttons -->
          <div class="gripper-action-bar">
            <button id="pendant-clamp-btn" class="grip-act-btn btn-clamp" title="Pneumatically Clamp Workpiece">
              <span>🗜️ CLAMP</span>
            </button>
            <button id="pendant-open-btn" class="grip-act-btn btn-open" title="Pneumatic Exhaust Open">
              <span>👐 OPEN</span>
            </button>
            <button id="pendant-drop-btn" class="grip-act-btn btn-drop" title="Force Drop Payload without moving arm">
              <span>⚠️ DROP</span>
            </button>
          </div>

          <!-- Continuous Jaw Width Slider -->
          <div class="gripper-slider-row">
            <span class="slider-mini-lbl">JAW WIDTH:</span>
            <input type="range" id="pendant-width-slider" class="joint-slider mini-slider" min="0" max="60" step="1" value="60">
            <span id="pendant-width-num" class="slider-mini-val">60.0mm</span>
          </div>

          <!-- Quick Width Chips -->
          <div class="gripper-quick-widths">
            <button class="width-chip" data-width="60">60mm (FULL)</button>
            <button class="width-chip" data-width="40">40mm</button>
            <button class="width-chip" data-width="25">25mm</button>
            <button class="width-chip" data-width="0">0mm (CLAMP)</button>
          </div>
        </div>

        <!-- 3. Tool Center Point (TCP) Telemetry Readout Box -->
        <div class="tcp-telemetry-box">
          <div class="telemetry-header">
            <span class="telemetry-title">TOOL CENTER POINT (TCP)</span>
            <span id="pendant-singularity-flag" class="singularity-tag safe">NORMAL</span>
          </div>
          <div class="telemetry-values">
            <div class="coord-item"><span class="coord-lbl">X:</span><span id="tcp-val-x" class="coord-num">0.00</span><span class="coord-unit">mm</span></div>
            <div class="coord-item"><span class="coord-lbl">Y:</span><span id="tcp-val-y" class="coord-num">0.00</span><span class="coord-unit">mm</span></div>
            <div class="coord-item"><span class="coord-lbl">Z:</span><span id="tcp-val-z" class="coord-num">0.00</span><span class="coord-unit">mm</span></div>
            <div class="coord-item"><span class="coord-lbl">Rx:</span><span id="tcp-val-rx" class="coord-num">0.0°</span></div>
            <div class="coord-item"><span class="coord-lbl">Ry:</span><span id="tcp-val-ry" class="coord-num">0.0°</span></div>
            <div class="coord-item"><span class="coord-lbl">Rz:</span><span id="tcp-val-rz" class="coord-num">0.0°</span></div>
          </div>
        </div>

        <!-- 4. Quick Action Buttons -->
        <div class="pendant-action-deck">
          <button id="pendant-teach-target-btn" class="pendant-action-btn btn-teach" title="Record current TCP pose as a waypoint">
            <span>🔴 TEACH TARGET</span>
          </button>
          <button id="pendant-home-btn" class="pendant-action-btn" title="Return to Safe Home stance">
            <span>🏠 HOME</span>
          </button>
        </div>
      </div>
    `,this.bindDOM())}bindDOM(){const t=document.getElementById("pendant-mode-joint"),e=document.getElementById("pendant-mode-cart"),n=document.getElementById("pendant-joint-view"),i=document.getElementById("pendant-cart-view");t.addEventListener("click",()=>{it.playClick(1500,.02,.15),t.classList.add("active"),e.classList.remove("active"),n.classList.add("active"),i.classList.remove("active"),this.jogMode="joint"}),e.addEventListener("click",()=>{it.playClick(1500,.02,.15),e.classList.add("active"),t.classList.remove("active"),i.classList.add("active"),n.classList.remove("active"),this.jogMode="cartesian"}),this.jointSliders=[],this.jointValueLabels=[];const o=document.getElementById("base-joints-grid"),a=document.getElementById("wrist-joints-grid");Ce.jointLimits.forEach((h,p)=>{const m=p<3?o:a,g=document.createElement("div");g.className=`joint-row ${p>=3?"joint-wrist-row":""}`,g.innerHTML=`
        <div class="joint-header">
          <span class="joint-name">${h.name}</span>
          <span class="joint-val" id="joint-val-${p}">0.0°</span>
        </div>
        <div class="joint-input-wrap">
          <button class="jog-step-btn" data-joint="${p}" data-dir="-1" title="Jog -5°">-5°</button>
          <button class="jog-step-btn btn-fine" data-joint="${p}" data-dir="-0.2" title="Jog -1°">-1°</button>
          <input type="range" class="joint-slider" id="joint-slider-${p}" min="${h.min}" max="${h.max}" step="0.5" value="0">
          <button class="jog-step-btn btn-fine" data-joint="${p}" data-dir="0.2" title="Jog +1°">+1°</button>
          <button class="jog-step-btn" data-joint="${p}" data-dir="1" title="Jog +5°">+5°</button>
        </div>
      `,m.appendChild(g);const _=g.querySelector(`#joint-slider-${p}`),f=g.querySelector(`#joint-val-${p}`);this.jointSliders.push(_),this.jointValueLabels.push(f),_.addEventListener("input",d=>{const E=parseFloat(d.target.value);f.textContent=`${E.toFixed(1)}°`;const b=this.arm.getJoints();b[p]=E,this.arm.setJoints(b),this.onJointChange&&this.onJointChange(b),this.updateTelemetry()}),g.querySelectorAll(".jog-step-btn").forEach(d=>{d.addEventListener("click",()=>{it.playClick(1300,.02,.15);const b=parseFloat(d.dataset.dir)*5,M=this.arm.getJoints();M[p]+=b,this.arm.setJoints(M),this.onJointChange&&this.onJointChange(M),this.syncSlidersFromArm(),this.updateTelemetry()})})}),document.getElementById("wrist-snap-down").addEventListener("click",()=>{it.playClick(1600,.02,.2),this.orientWristStraightDown()}),document.getElementById("wrist-snap-level").addEventListener("click",()=>{it.playClick(1600,.02,.2),this.orientWristLevel()}),document.getElementById("wrist-snap-spin90").addEventListener("click",()=>{it.playClick(1400,.02,.15);const h=this.arm.getJoints();h[5]+=90,h[5]>360&&(h[5]-=360),this.arm.setJoints(h),this.onJointChange&&this.onJointChange(h),this.syncSlidersFromArm(),this.updateTelemetry()}),document.getElementById("wrist-snap-zero").addEventListener("click",()=>{it.playClick(1200,.02,.2);const h=this.arm.getJoints();h[3]=0,h[4]=0,h[5]=0,this.arm.setJoints(h),this.onJointChange&&this.onJointChange(h),this.syncSlidersFromArm(),this.updateTelemetry()}),document.querySelectorAll(".jog-cart-btn").forEach(h=>{h.addEventListener("click",()=>{it.playClick(1400,.02,.15),this.jogCartesian(h.dataset.axis,parseFloat(h.dataset.dir))})}),document.querySelectorAll(".jog-rot-btn").forEach(h=>{h.addEventListener("click",()=>{it.playClick(1500,.02,.15),this.jogWristRotation(h.dataset.axis,parseFloat(h.dataset.dir))})});const r=document.getElementById("pendant-clamp-btn"),l=document.getElementById("pendant-open-btn"),c=document.getElementById("pendant-drop-btn"),u=document.getElementById("pendant-width-slider");r.addEventListener("click",()=>{const h=this.workcell?this.workcell.payloads:[];this.arm.gripper.close(h),this.updateGripperUI()}),l.addEventListener("click",()=>{this.arm.gripper.open(),this.updateGripperUI()}),c.addEventListener("click",()=>{this.arm.gripper.forceDrop(),this.updateGripperUI()}),u.addEventListener("input",h=>{const p=parseFloat(h.target.value),m=this.workcell?this.workcell.payloads:[];this.arm.gripper.setTargetWidthMm(p,m),this.updateGripperUI()}),document.querySelectorAll(".width-chip").forEach(h=>{h.addEventListener("click",()=>{it.playClick(1600,.02,.15);const p=parseFloat(h.dataset.width),m=this.workcell?this.workcell.payloads:[];this.arm.gripper.setTargetWidthMm(p,m),this.updateGripperUI()})}),this.tcpXEl=document.getElementById("tcp-val-x"),this.tcpYEl=document.getElementById("tcp-val-y"),this.tcpZEl=document.getElementById("tcp-val-z"),this.tcpRxEl=document.getElementById("tcp-val-rx"),this.tcpRyEl=document.getElementById("tcp-val-ry"),this.tcpRzEl=document.getElementById("tcp-val-rz"),this.singularityEl=document.getElementById("pendant-singularity-flag"),document.getElementById("pendant-teach-target-btn").addEventListener("click",()=>{if(it.playClick(2e3,.03,.3),this.onRecordTarget){const h=this.kinematics.computeFK(this.arm.getJoints());this.onRecordTarget({joints:this.arm.getJoints(),position:h.tcpPosition.clone(),euler:{...h.tcpEulerDeg}})}}),document.getElementById("pendant-home-btn").addEventListener("click",()=>{it.playClick(1e3,.03,.25),this.arm.setJoints(Ce.homePose),this.onJointChange&&this.onJointChange(Ce.homePose),this.syncSlidersFromArm(),this.updateTelemetry()}),this.syncSlidersFromArm(),this.updateTelemetry(),this.updateGripperUI()}jogCartesian(t,e){const n=this.kinematics.computeFK(this.arm.getJoints()),i=n.tcpPosition.clone(),o={...n.tcpEulerDeg},a=this.cartStepMeters*e;t==="x"?i.x+=a:t==="y"?i.y+=a:t==="z"&&(i.z+=a);const r=this.kinematics.solveIK(i,o,this.arm.getJoints());r.success?(this.arm.setJoints(r.jointsDeg),this.onJointChange&&this.onJointChange(r.jointsDeg),this.syncSlidersFromArm(),this.updateTelemetry()):it.playClick(300,.08,.3)}jogWristRotation(t,e){const n=this.arm.getJoints(),i=this.rotStepDeg*e;t==="rx"?n[4]+=i:t==="ry"?n[3]+=i:t==="rz"&&(n[5]+=i),this.arm.setJoints(n),this.onJointChange&&this.onJointChange(n),this.syncSlidersFromArm(),this.updateTelemetry()}orientWristStraightDown(){const t=this.arm.getJoints(),e=t[1]+t[2];t[3]=0,t[4]=-e,t[5]=0,this.arm.setJoints(t),this.onJointChange&&this.onJointChange(t),this.syncSlidersFromArm(),this.updateTelemetry()}orientWristLevel(){const t=this.arm.getJoints(),e=t[1]+t[2];t[3]=0,t[4]=90-e,t[5]=0,this.arm.setJoints(t),this.onJointChange&&this.onJointChange(t),this.syncSlidersFromArm(),this.updateTelemetry()}updateGripperUI(){const t=this.arm.gripper.getGripStatus(),e=document.getElementById("grip-status-dot"),n=document.getElementById("grip-status-label"),i=document.getElementById("pendant-width-slider"),o=document.getElementById("pendant-width-num");!e||!n||(i&&(i.value=t.widthMm),o&&(o.textContent=`${t.widthMm.toFixed(1)}mm`),t.isHolding?(e.className="status-dot dot-green",n.textContent=`CLAMPED: ${t.heldId||"PART"} (${t.widthMm}mm)`):t.isOpen?(e.className="status-dot dot-cyan",n.textContent=`OPEN (${t.widthMm}mm)`):(e.className="status-dot dot-amber",n.textContent=`CLOSED EMPTY (${t.widthMm}mm)`))}syncSlidersFromArm(){this.arm.getJoints().forEach((e,n)=>{this.jointSliders[n]&&(this.jointSliders[n].value=e,this.jointValueLabels[n].textContent=`${e.toFixed(1)}°`)}),this.updateGripperUI()}updateTelemetry(){const t=this.kinematics.computeFK(this.arm.getJoints());this.tcpXEl&&(this.tcpXEl.textContent=(t.tcpPosition.x*1e3).toFixed(1)),this.tcpYEl&&(this.tcpYEl.textContent=(t.tcpPosition.y*1e3).toFixed(1)),this.tcpZEl&&(this.tcpZEl.textContent=(t.tcpPosition.z*1e3).toFixed(1)),this.tcpRxEl&&(this.tcpRxEl.textContent=`${t.tcpEulerDeg.rx.toFixed(1)}°`),this.tcpRyEl&&(this.tcpRyEl.textContent=`${t.tcpEulerDeg.ry.toFixed(1)}°`),this.tcpRzEl&&(this.tcpRzEl.textContent=`${t.tcpEulerDeg.rz.toFixed(1)}°`)}}const Hi={pick_and_place:`// 1. SMART PICK & PLACE WITH I/O CHECKS
// Reads Station 1 optical sensor and Rear Maintenance Gate
const partPresent = robot.di(1); // DI.1 Conveyor optical sensor
const safetyOk = robot.di(3);    // DI.3 Maintenance interlock gate

robot.log(\`Sensor DI.1: \${partPresent ? 'HIGH (Part Present)' : 'LOW'}, Safety DI.3: \${safetyOk ? 'CLEAR (Gate Closed)' : 'TRIPPED (Gate Open)'}\`);

if (partPresent && safetyOk) {
  robot.log("📦 Part detected! Transferring from Station 1 to Station 3 Pallet...");
  robot.moveJ([-95, 59, 109, 0, -114, 0]); // Move to Station 1 Feeder
  setTimeout(() => {
    robot.grip(true);                        // Clamp workpiece
    setTimeout(() => {
      robot.moveJ([0, 25, 45, 0, -70, 0]);   // Lift clear Home
      setTimeout(() => {
        robot.moveJ([76, 60, 117, 0, -118, 0]); // Move to Station 3 Pallet
        setTimeout(() => {
          robot.grip(false);                      // Release workpiece
          robot.setDO(4, true);                   // Chime horn
          setTimeout(() => robot.setDO(4, false), 500);
          robot.log("✅ Workpiece safely delivered to Station 3 pallet nest!");
          setTimeout(() => robot.home(), 400);
        }, 600);
      }, 600);
    }, 400);
  }, 700);
} else if (!partPresent) {
  robot.log("⚠️ No part at feeder! Starting Station 1 conveyor...");
  robot.conveyor(true);
} else {
  robot.log("🛑 Maintenance safety gate open! Robot movement interlocked.");
} `,wrist_dance:`// 2. 6-AXIS WRIST ARTICULATION DANCE
// Direct multi-joint mathematical sweeps
robot.log("🎵 Initiating 6-Axis Articulated Wrist Motion...");
const joints = robot.getJoints();
robot.log(\`Current Joint Angles: [\${joints.join('°, ')}°]\`);

const pose1 = [0, 25, -35, 60, -50, 90];
const pose2 = [0, 25, -35, -60, 50, -90];
const poseHome = [0, 25, 45, 0, -70, 0];

robot.moveJ(pose1, 1.4);
setTimeout(() => {
  robot.moveJ(pose2, 1.4);
  setTimeout(() => {
    robot.moveJ(poseHome, 1.2);
    robot.log("✨ Wrist demonstration routine complete!");
  }, 850);
}, 850);`,conveyor_sorter:`// 3. CONVEYOR CONTINUOUS PART SORTER
// Station 1 infeed handshake with workpiece arrival
const sensorTripped = robot.di(1);
const tcp = robot.getTCP();
robot.log(\`Tool Position: X=\${tcp.x}m, Y=\${tcp.y}m, Z=\${tcp.z}m\`);

if (sensorTripped) {
  robot.conveyor(false);
  robot.log("🛑 Part arrived at Station 1 optical beam: Stopped conveyor belt.");
  robot.pickFeeder();
} else {
  robot.conveyor(true);
  robot.log("▶ Station 1 Conveyor running: Feeding workpiece forward to sensor...");
} `,cartesian_motion:`// 4. DIRECT CARTESIAN COORDINATE SWEEPS (3 STATIONS)
// Sweep tool across Station 2 (Center), Station 3 (Right), Station 1 (Left)
robot.log("📐 Executing 3-Station Cartesian MoveL linear trajectory...");

robot.moveL(0.0, 0.44, 0.52, 0, 0, 0, 1.2); // Station 2 Process Table
setTimeout(() => {
  robot.moveL(0.49, 0.40, 0.12, 0, 25, 0, 1.2); // Station 3 Pallet Nest
  setTimeout(() => {
    robot.moveL(-0.55, 0.40, 0.25, 0, -25, 0, 1.2); // Station 1 Conveyor
    setTimeout(() => {
      robot.home();
      robot.log("🎯 3-Station Cartesian sweep routine completed!");
    }, 750);
  }, 750);
}, 750);`};class jm{constructor(t,e,n){this.sequencer=t,this.onProgramModified=e,this.onSelectTarget=n,this.targets=[{id:"HOME",name:"Safe Home Pose",joints:[0,25,45,0,-70,0]},{id:"STATION_1_FEED",name:"Stn 1 Feeder Pick",joints:[-95,59,109,0,-114,0]},{id:"STATION_1_CONV",name:"Stn 1 Conveyor Pick",joints:[-66,62,99,0,-108,0]},{id:"STATION_2_WELD",name:"Stn 2 Weld Center",joints:[0,58,115,0,-117,0]},{id:"STATION_2_SCAN",name:"Stn 2 Vision Bay",joints:[-25,53,104,0,-116,0]},{id:"STATION_3_PALLET",name:"Stn 3 Pallet Slot 1",joints:[76,60,117,0,-118,0]},{id:"REAR_SERVICE",name:"Rear Maintenance Pose",joints:[180,25,45,0,-70,0]}],this.activeSubtab="blocks",this.autoRunOnIO=!1,this.listContainer=null,this.targetListContainer=null,this.jsConsoleContainer=null}mount(t){const e=document.getElementById(t);if(!e)return;e.innerHTML=`
      <div class="program-editor-panel">
        <!-- Sub-tabs: Sequence Blocks vs JavaScript Controller -->
        <div class="prog-subtabs-nav">
          <button id="btn-subtab-blocks" class="prog-subtab-btn active" data-subtab="blocks">
            <span>📋 SEQUENCE BLOCKS</span>
          </button>
          <button id="btn-subtab-js" class="prog-subtab-btn" data-subtab="js">
            <span>⚡ JAVASCRIPT CONTROLLER</span>
          </button>
        </div>

        <!-- 1. Sequence Blocks View -->
        <div id="prog-view-blocks" class="prog-subview active">
          <!-- Toolbar for adding new instructions -->
          <div class="program-toolbar">
            <button id="add-movej-btn" class="inst-add-btn" title="Add MoveJ joint interpolated motion">+ MOVE_J</button>
            <button id="add-movel-btn" class="inst-add-btn" title="Add MoveL Cartesian linear motion">+ MOVE_L</button>
            <button id="add-grip-btn" class="inst-add-btn" title="Add Gripper open/close">+ GRIPPER</button>
            <button id="add-wait-btn" class="inst-add-btn" title="Add dwell wait timer">+ WAIT</button>
            <button id="add-conveyor-btn" class="inst-add-btn" title="Add Conveyor motor control">+ CONVEYOR</button>
            <button id="add-js-btn" class="inst-add-btn btn-js-add" title="Add executable JavaScript instruction block">+ JS_CODE</button>
          </div>

          <!-- Instructions Sequence List -->
          <div class="instructions-scrollbox">
            <div class="instructions-list" id="program-instructions-list"></div>
          </div>

          <!-- Recorded Target Waypoints Deck -->
          <div class="target-waypoints-deck">
            <div class="deck-header">
              <span class="deck-title">🎯 TARGET WAYPOINTS</span>
              <span class="deck-count" id="target-count-badge">3 TARGETS</span>
            </div>
            <div class="targets-chips-list" id="targets-chips-list"></div>
          </div>
        </div>

        <!-- 2. JavaScript Live Motion Controller View -->
        <div id="prog-view-js" class="prog-subview">
          <div class="js-controller-wrap">
            <div class="js-ctrl-header">
              <div class="js-preset-wrap">
                <span class="js-lbl">PRESET SCRIPT:</span>
                <select id="js-preset-select" class="nav-select">
                  <option value="pick_and_place">1. Smart Pick & Place (with DI checks)</option>
                  <option value="wrist_dance">2. 6-Axis Articulated Wrist Dance</option>
                  <option value="conveyor_sorter">3. Conveyor Part Sorter Handshake</option>
                  <option value="cartesian_motion">4. Cartesian Linear Motion Sweeps</option>
                </select>
              </div>
              <div class="js-auto-wrap">
                <label class="js-auto-label" title="Automatically re-run script when any DI input signal changes">
                  <input type="checkbox" id="js-autorun-cb">
                  <span>AUTO-RUN ON SENSOR</span>
                </label>
              </div>
            </div>

            <!-- Monospace Code Editor -->
            <div class="js-editor-container">
              <textarea id="js-code-editor" class="js-code-textarea" spellcheck="false"></textarea>
            </div>

            <!-- API Quick Reference Chips -->
            <div class="js-api-chips-bar">
              <span class="api-chip" data-insert="robot.moveJ([0, 15, -45, 0, 30, 0]);">robot.moveJ()</span>
              <span class="api-chip" data-insert="robot.home();">robot.home()</span>
              <span class="api-chip" data-insert="robot.grip(true);">robot.grip()</span>
              <span class="api-chip" data-insert="robot.conveyor(true);">robot.conveyor()</span>
              <span class="api-chip" data-insert="robot.di(1)">robot.di(1)</span>
              <span class="api-chip" data-insert="robot.log('Status: OK');">robot.log()</span>
            </div>

            <!-- Action Controls -->
            <div class="js-action-bar">
              <button id="js-run-btn" class="btn-action btn-js-run" title="Execute JavaScript script immediately">
                <span>▶ RUN JAVASCRIPT</span>
              </button>
              <button id="js-stop-btn" class="btn-action" title="Pause robot motion immediately">
                <span>⏹ PAUSE</span>
              </button>
              <button id="js-reset-code-btn" class="btn-action" title="Revert to preset template">
                <span>🔄 RESET</span>
              </button>
            </div>

            <!-- Live Output Terminal -->
            <div class="js-console-panel">
              <div class="js-console-header">
                <span class="console-title">TERMINAL LOG</span>
                <button id="js-clear-log-btn" class="console-clear-btn">CLEAR</button>
              </div>
              <div id="js-console-output" class="js-console-output"></div>
            </div>
          </div>
        </div>
      </div>
    `,this.listContainer=document.getElementById("program-instructions-list"),this.targetListContainer=document.getElementById("targets-chips-list"),this.jsConsoleContainer=document.getElementById("js-console-output"),this.sequencer.onJSLog=i=>{this.logToConsole(i)},this.bindEvents(),this.bindJSEvents(),this.renderInstructions(),this.renderTargets();const n=document.getElementById("js-code-editor");n&&(n.value=Hi.pick_and_place),this.logToConsole("⚡ ROBOFORGE JavaScript Motion Controller ready."),this.logToConsole("💡 Click [▶ RUN JAVASCRIPT] to execute or select a preset.")}bindEvents(){const t=document.getElementById("btn-subtab-blocks"),e=document.getElementById("btn-subtab-js"),n=document.getElementById("prog-view-blocks"),i=document.getElementById("prog-view-js");t.addEventListener("click",()=>{it.playClick(1400,.02,.15),t.classList.add("active"),e.classList.remove("active"),n.classList.add("active"),i.classList.remove("active"),this.activeSubtab="blocks"}),e.addEventListener("click",()=>{it.playClick(1400,.02,.15),e.classList.add("active"),t.classList.remove("active"),i.classList.add("active"),n.classList.remove("active"),this.activeSubtab="js"}),document.getElementById("add-movej-btn").addEventListener("click",()=>{it.playClick(1700,.02,.2);const o=this.sequencer.arm.getJoints();this.sequencer.instructions.push({type:"MOVE_J",label:`MoveJ P${this.sequencer.instructions.length+1}`,joints:[...o]}),this.renderInstructions(),this.onProgramModified&&this.onProgramModified()}),document.getElementById("add-movel-btn").addEventListener("click",()=>{it.playClick(1700,.02,.2);const o=this.sequencer.arm.kinematics.computeFK(this.sequencer.arm.getJoints());this.sequencer.instructions.push({type:"MOVE_L",label:`MoveL P${this.sequencer.instructions.length+1}`,position:o.tcpPosition.clone(),euler:{...o.tcpEulerDeg}}),this.renderInstructions(),this.onProgramModified&&this.onProgramModified()}),document.getElementById("add-grip-btn").addEventListener("click",()=>{it.playClick(1500,.02,.2);const o=this.sequencer.arm.gripper.isOpen;this.sequencer.instructions.push({type:o?"GRIPPER_CLOSE":"GRIPPER_OPEN",label:o?"Gripper CLOSE":"Gripper OPEN"}),this.renderInstructions(),this.onProgramModified&&this.onProgramModified()}),document.getElementById("add-wait-btn").addEventListener("click",()=>{it.playClick(1400,.02,.2),this.sequencer.instructions.push({type:"WAIT",label:"Wait 300ms",durationMs:300}),this.renderInstructions(),this.onProgramModified&&this.onProgramModified()}),document.getElementById("add-conveyor-btn").addEventListener("click",()=>{it.playClick(1400,.02,.2);const o=this.sequencer.workcell.conveyorRunning;this.sequencer.instructions.push({type:"CONVEYOR",label:`Conveyor ${o?"STOP":"RUN"}`,state:!o}),this.renderInstructions(),this.onProgramModified&&this.onProgramModified()}),document.getElementById("add-js-btn").addEventListener("click",()=>{it.playClick(1800,.03,.25),this.sequencer.instructions.push({type:"JS_SCRIPT",label:"JS: Check DI.1 & Grip",code:'robot.log("JS Block executed!"); if (robot.di(1)) robot.grip(true);'}),this.renderInstructions(),this.onProgramModified&&this.onProgramModified()})}bindJSEvents(){const t=document.getElementById("js-code-editor"),e=document.getElementById("js-run-btn"),n=document.getElementById("js-stop-btn"),i=document.getElementById("js-reset-code-btn"),o=document.getElementById("js-preset-select"),a=document.getElementById("js-autorun-cb"),r=document.getElementById("js-clear-log-btn");e.addEventListener("click",()=>{it.playSuccessChime(),this.executeJSScript(t.value)}),n.addEventListener("click",()=>{it.playClick(800,.03,.3),this.sequencer.pause(),this.logToConsole("⏹ Motion paused by user.")}),i.addEventListener("click",()=>{it.playClick(1200,.02,.2);const l=o.value;Hi[l]&&(t.value=Hi[l],this.logToConsole(`🔄 Reset code to preset: ${o.options[o.selectedIndex].text}`))}),o.addEventListener("change",l=>{it.playClick(1400,.02,.2);const c=l.target.value;Hi[c]&&(t.value=Hi[c],this.logToConsole(`📂 Loaded preset: ${l.target.options[l.target.selectedIndex].text}`))}),a.addEventListener("change",l=>{this.autoRunOnIO=l.target.checked,it.playClick(1500,.02,.2),this.logToConsole(`⚡ Auto-Run on Sensor Change: ${this.autoRunOnIO?"ENABLED":"DISABLED"}`)}),r.addEventListener("click",()=>{this.jsConsoleContainer&&(this.jsConsoleContainer.innerHTML="")}),document.querySelectorAll(".api-chip").forEach(l=>{l.addEventListener("click",()=>{it.playClick(1600,.02,.15);const c=l.getAttribute("data-insert");t.value+=`
`+c,t.scrollTop=t.scrollHeight})})}notifyIOChange(){if(this.autoRunOnIO){const t=document.getElementById("js-code-editor");t&&t.value.trim()&&this.executeJSScript(t.value)}}executeJSScript(t){if(!(!t||!t.trim())){this.logToConsole("▶ Executing JavaScript routine...");try{const e=this.sequencer.createRobotAPI();e.log=i=>{this.logToConsole(`[JS] ${i}`)},new Function("robot",t)(e),this.logToConsole("✅ Script evaluated successfully.")}catch(e){it.playClick(500,.05,.4),this.logToConsole(`❌ Script Runtime Error: ${e.message}`),console.error("[ROBOFORGE JS Runner Error]",e)}}}logToConsole(t){if(!this.jsConsoleContainer)return;const e=new Date().toLocaleTimeString(),n=document.createElement("div");n.className="console-line",t.includes("❌")||t.includes("Error")?n.classList.add("line-error"):t.includes("✅")||t.includes("✨")?n.classList.add("line-success"):(t.includes("⚡")||t.includes("▶"))&&n.classList.add("line-accent"),n.innerHTML=`<span class="log-time">[${e}]</span> <span class="log-msg">${t}</span>`,this.jsConsoleContainer.appendChild(n),this.jsConsoleContainer.scrollTop=this.jsConsoleContainer.scrollHeight}addTarget(t){const e=`P${this.targets.length+1}`;this.targets.push({id:e,name:`Target ${e}`,...t}),this.renderTargets()}renderTargets(){if(!this.targetListContainer)return;this.targetListContainer.innerHTML="";const t=document.getElementById("target-count-badge");t&&(t.textContent=`${this.targets.length} TARGETS`),this.targets.forEach(e=>{const n=document.createElement("div");n.className="target-chip",n.innerHTML=`
        <span class="target-name">${e.id}</span>
        <button class="target-goto-btn" title="Jog Arm to this target">GO</button>
      `,n.querySelector(".target-goto-btn").addEventListener("click",()=>{if(it.playClick(1600,.02,.2),e.joints)this.sequencer.arm.setJoints(e.joints);else if(e.position){const i=this.sequencer.arm.kinematics.solveIK(e.position,e.euler,this.sequencer.arm.getJoints());i.success&&this.sequencer.arm.setJoints(i.jointsDeg)}this.onSelectTarget&&this.onSelectTarget(e)}),this.targetListContainer.appendChild(n)})}renderInstructions(){if(!this.listContainer)return;this.listContainer.innerHTML="";const t=this.sequencer.instructions;if(t.length===0){this.listContainer.innerHTML='<div class="empty-inst-msg">No instructions loaded. Select a Preset or click [+ MOVE_J] above.</div>';return}t.forEach((e,n)=>{const i=document.createElement("div");i.className=`instruction-row ${n===this.sequencer.currentLine?"active-line":""}`,i.dataset.index=n;let o="badge-move",a="⚡";e.type.includes("GRIP")?(o="badge-tool",a="🗜️"):e.type.includes("WELD")?(o="badge-weld",a="🔥"):e.type.includes("SCAN")||e.type.includes("VISION")?(o="badge-vision",a="📡"):e.type.includes("WAIT")?(o="badge-wait",a="⏱️"):e.type.includes("CONVEY")?(o="badge-io",a="⚙️"):e.type.includes("JS")&&(o="badge-js",a="⚡"),i.innerHTML=`
        <span class="line-num">${String(n+1).padStart(2,"0")}</span>
        <span class="inst-badge ${o}">${a} ${e.type}</span>
        <span class="inst-label">${e.label||""}</span>
        <div class="inst-actions">
          <button class="inst-btn btn-del" title="Delete instruction">✕</button>
        </div>
      `,i.addEventListener("click",r=>{r.target.closest(".btn-del")||(this.sequencer.currentLine=n,this.updateActiveLine(n))}),i.querySelector(".btn-del").addEventListener("click",r=>{r.stopPropagation(),it.playClick(800,.02,.2),this.sequencer.instructions.splice(n,1),this.renderInstructions(),this.onProgramModified&&this.onProgramModified()}),this.listContainer.appendChild(i)})}updateActiveLine(t){if(!this.listContainer)return;this.listContainer.querySelectorAll(".instruction-row").forEach((n,i)=>{i===t?(n.classList.add("active-line"),n.scrollIntoView({behavior:"smooth",block:"nearest"})):n.classList.remove("active-line")})}}class Xm{constructor(t,e,n=null,i=null){this.workcell=t,this.arm=e,this.sequencer=n,this.kinematics=i,this.di={1:{name:"DI[1] Conveyor Optical Sensor",val:!1,auto:!0},2:{name:"DI[2] Pallet Nest Part Detector",val:!1,auto:!1},3:{name:"DI[3] Rear Maintenance Interlock Gate",val:!0,auto:!0},4:{name:"DI[4] Operator Cycle Start PB",val:!1,auto:!1}},this.do={1:{name:"DO[1] Gripper Pneumatic Solenoid",val:!1},2:{name:"DO[2] Conveyor Belt Drive Motor",val:!1},3:{name:"DO[3] Andon Amber Warning Beacon",val:!0},4:{name:"DO[4] Cycle Complete Horn / Buzzer",val:!1}},this.gateRungs=[{id:1,enabled:!0,name:"Optical Auto-Pick Interlock",inputA:"DI_1",gate:"AND",inputB:"DI_3",action:"PICK_CONVEYOR",prevOutput:!1,output:!1},{id:2,enabled:!0,name:"Operator Two-Hand Start",inputA:"DI_4",gate:"AND",inputB:"DI_3",action:"START_CYCLE",prevOutput:!1,output:!1},{id:3,enabled:!0,name:"Maintenance Gate Safety Trip",inputA:"DI_3",gate:"NOT",inputB:"NONE",action:"SAFETY_STOP",prevOutput:!1,output:!1},{id:4,enabled:!1,name:"Conveyor Feed On-Demand",inputA:"DI_1",gate:"XOR",inputB:"DO_2",action:"TOGGLE_CONV",prevOutput:!1,output:!1}],this.onDIChange=null,this.workcell.onBeamStateChange=o=>{this.di[1].auto&&(this.di[1].val=o,this.updateDOM(),this.evaluateGates(),this.onDIChange&&this.onDIChange())},this.workcell.onGateStateChange=o=>{this.di[3].auto&&(this.di[3].val=o,this.updateDOM(),this.evaluateGates(),this.onDIChange&&this.onDIChange())}}setSequencer(t){this.sequencer=t}getDI(t){return this.di[t]?!!this.di[t].val:!1}setDI(t,e){this.di[t]&&(this.di[t].val=!!e,this.di[t].auto=!1,t===3&&this.workcell.setGateState&&this.workcell.setGateState(!!e),this.updateDOM(),this.evaluateGates(),this.onDIChange&&this.onDIChange())}getDO(t){return this.do[t]?!!this.do[t].val:!1}setDO(t,e){this.do[t]&&(this.do[t].val=!!e,this.updateDOM(),this.evaluateGates())}readSignal(t){if(t.startsWith("DI_")){const e=parseInt(t.replace("DI_",""),10);return this.getDI(e)}if(t.startsWith("DO_")){const e=parseInt(t.replace("DO_",""),10);return this.getDO(e)}return!1}mount(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="io-deck-panel">
        <!-- Live Logic Gate Event Alert -->
        <div id="gate-alert-banner" class="gate-alert-banner hidden">
          <span class="gate-alert-icon">⚡</span>
          <span id="gate-alert-text" class="gate-alert-text">LOGIC INTERLOCK ACTIVE</span>
        </div>

        <!-- 1. 24V Signal Columns (Inputs & Outputs) -->
        <div class="io-columns-wrap">
          <!-- Digital Inputs Column -->
          <div class="io-column">
            <div class="io-col-header">
              <span class="io-col-title">DIGITAL INPUTS (DI)</span>
              <span class="io-col-sub">24V DC SENSORS & SWITCHES</span>
            </div>
            <div class="io-signals-list" id="di-signals-list"></div>
          </div>

          <!-- Digital Outputs Column -->
          <div class="io-column">
            <div class="io-col-header">
              <span class="io-col-title">DIGITAL OUTPUTS (DO)</span>
              <span class="io-col-sub">24V ACTUATORS / RELAYS</span>
            </div>
            <div class="io-signals-list" id="do-signals-list"></div>
          </div>
        </div>

        <!-- 2. Logic Gate Interlock Section (PLC Boolean Rungs) -->
        <div class="gates-deck-section">
          <div class="gates-header">
            <div class="gates-title-wrap">
              <span class="gates-title">⚡ LOGIC GATES INTERLOCK CONTROLLER</span>
              <span class="gates-sub">BOOLEAN GATES (AND / OR / NOT / XOR) COMMAND ROBOT MOTION</span>
            </div>
            <div class="gates-presets-wrap">
              <button class="gate-preset-btn" data-preset="autopick" title="Auto-Pick part when optical sensor AND light curtain are HIGH">⚡ AUTO-PICK</button>
              <button class="gate-preset-btn" data-preset="safetystart" title="Operator PB AND Safety Curtain starts cycle">🛡️ SAFETY START</button>
              <button class="gate-preset-btn" data-preset="curtaintrip" title="Light Curtain trip halts motion">🛑 CURTAIN TRIP</button>
            </div>
          </div>

          <!-- Rungs List -->
          <div class="gates-rungs-list" id="gates-rungs-list"></div>
        </div>

        <div class="io-logic-explainer">
          <span class="info-icon">💡</span>
          <span><b>Live PLC Gates:</b> When logic rungs evaluate to <code>TRUE (1)</code>, they fire real-time arm movements (Auto-Pick, Home, Cycle Start, Gripper, Conveyor). Toggle any <b>DI</b> or <b>DO</b> pin above to watch the gate chips glow and control motion!</span>
        </div>
      </div>
    `,this.renderSignals(),this.renderGateRungs(),this.bindGateEvents(),this.evaluateGates(!0))}renderSignals(){const t=document.getElementById("di-signals-list");if(!t)return;t.innerHTML="",Object.entries(this.di).forEach(([n,i])=>{const o=document.createElement("div");o.className=`io-row ${i.val?"signal-high":"signal-low"}`,o.id=`di-row-${n}`,o.innerHTML=`
        <div class="io-led-wrap">
          <div class="io-led ${i.val?"led-on":"led-off"}"></div>
          <span class="io-pin-tag">DI.${n}</span>
        </div>
        <span class="io-name">${i.name}</span>
        <button class="io-test-btn" data-pin="${n}" title="Toggle Input State">
          ${i.val?"HIGH":"LOW"}
        </button>
      `,o.querySelector(".io-test-btn").addEventListener("click",()=>{it.playClick(1500,.02,.15),i.val=!i.val,i.auto=!1,this.updateDOM(),this.evaluateGates(),this.onDIChange&&this.onDIChange()}),t.appendChild(o)});const e=document.getElementById("do-signals-list");e&&(e.innerHTML="",Object.entries(this.do).forEach(([n,i])=>{const o=document.createElement("div");o.className=`io-row ${i.val?"signal-high":"signal-low"}`,o.id=`do-row-${n}`,o.innerHTML=`
        <div class="io-led-wrap">
          <div class="io-led ${i.val?"led-on":"led-off"}"></div>
          <span class="io-pin-tag">DO.${n}</span>
        </div>
        <span class="io-name">${i.name}</span>
        <span class="io-status-badge ${i.val?"badge-on":"badge-off"}">
          ${i.val?"ACTIVE":"OFF"}
        </span>
      `,e.appendChild(o)}))}renderGateRungs(){const t=document.getElementById("gates-rungs-list");if(!t)return;t.innerHTML="";const e=[{id:"DI_1",label:"DI.1 Conveyor Sensor"},{id:"DI_2",label:"DI.2 Pallet Part Sensor"},{id:"DI_3",label:"DI.3 Safety Light Curtain"},{id:"DI_4",label:"DI.4 Operator Start PB"},{id:"DO_1",label:"DO.1 Gripper Solenoid"},{id:"DO_2",label:"DO.2 Conveyor Belt Motor"},{id:"DO_3",label:"DO.3 Andon Beacon"},{id:"DO_4",label:"DO.4 Cycle Complete Horn"}],n=["AND","OR","XOR","NAND","NOT"],i=[{id:"PICK_CONVEYOR",label:"📦 PICK FROM CONVEYOR"},{id:"START_CYCLE",label:"🚀 START PROGRAM CYCLE"},{id:"MOVE_HOME",label:"🎯 MOVE TO HOME POSE"},{id:"TOGGLE_GRIP",label:"🦾 TOGGLE GRIPPER JAW"},{id:"TOGGLE_CONV",label:"🔄 TOGGLE CONVEYOR"},{id:"SAFETY_STOP",label:"🛑 SAFETY PAUSE (INTERLOCK)"},{id:"CHIME_HORN",label:"📢 SOUND COMPLETE CHIME"}];this.gateRungs.forEach((o,a)=>{const r=document.createElement("div");r.className=`gate-rung-card ${o.enabled?"rung-enabled":"rung-disabled"}`,r.id=`gate-rung-${o.id}`;const l=e.map(p=>`<option value="${p.id}" ${p.id===o.inputA?"selected":""}>${p.label}</option>`).join(""),c=e.map(p=>`<option value="${p.id}" ${p.id===o.inputB?"selected":""}>${p.label}</option>`).join(""),u=n.map(p=>`<option value="${p}" ${p===o.gate?"selected":""}>${p}</option>`).join(""),h=i.map(p=>`<option value="${p.id}" ${p.id===o.action?"selected":""}>${p.label}</option>`).join("");r.innerHTML=`
        <div class="rung-header">
          <div class="rung-meta">
            <input type="checkbox" id="rung-enable-${o.id}" class="rung-enable-cb" ${o.enabled?"checked":""} title="Enable/Disable Gate Rung">
            <span class="rung-id">RUNG ${o.id}</span>
            <span class="rung-name">${o.name}</span>
          </div>
          <button class="rung-pulse-btn" data-rung="${o.id}" title="Simulate manual pulse trigger">PULSE ▶</button>
        </div>

        <div class="rung-logic-row">
          <!-- Input A -->
          <div class="rung-node">
            <div class="node-tag">INPUT A</div>
            <select class="rung-select rung-input-a" data-rung="${o.id}">${l}</select>
            <span class="node-val-tag" id="val-a-${o.id}">0</span>
          </div>

          <!-- Gate Chip Symbol -->
          <div class="rung-gate-chip gate-${o.gate.toLowerCase()}" id="gate-chip-${o.id}">
            <select class="rung-gate-select" data-rung="${o.id}">${u}</select>
            <span class="gate-symbol">⊳</span>
          </div>

          <!-- Input B -->
          <div class="rung-node ${o.gate==="NOT"?"node-disabled":""}" id="node-b-${o.id}">
            <div class="node-tag">INPUT B</div>
            <select class="rung-select rung-input-b" data-rung="${o.id}">${c}</select>
            <span class="node-val-tag" id="val-b-${o.id}">0</span>
          </div>

          <!-- Arrow Output -->
          <div class="rung-eval-arrow">
            <span class="arrow-trace">➔</span>
            <span class="eval-out-tag" id="eval-out-${o.id}">LOW</span>
          </div>

          <!-- Action Target -->
          <div class="rung-action-box">
            <div class="node-tag">MOTION TRIGGER</div>
            <select class="rung-select rung-action" data-rung="${o.id}">${h}</select>
          </div>
        </div>
      `,t.appendChild(r)})}bindGateEvents(){document.querySelectorAll(".gate-preset-btn").forEach(e=>{e.addEventListener("click",n=>{it.playClick(1700,.02,.2);const i=n.target.getAttribute("data-preset");this.applyGatePreset(i)})}),document.querySelectorAll(".rung-enable-cb").forEach(e=>{e.addEventListener("change",n=>{const i=parseInt(n.target.id.replace("rung-enable-",""),10),o=this.gateRungs.find(a=>a.id===i);if(o){o.enabled=n.target.checked;const a=document.getElementById(`gate-rung-${o.id}`);a&&(a.classList.toggle("rung-enabled",o.enabled),a.classList.toggle("rung-disabled",!o.enabled)),this.evaluateGates()}})}),document.querySelectorAll(".rung-input-a").forEach(e=>{e.addEventListener("change",n=>{const i=parseInt(n.target.getAttribute("data-rung"),10),o=this.gateRungs.find(a=>a.id===i);o&&(o.inputA=n.target.value,this.evaluateGates())})}),document.querySelectorAll(".rung-gate-select").forEach(e=>{e.addEventListener("change",n=>{const i=parseInt(n.target.getAttribute("data-rung"),10),o=this.gateRungs.find(a=>a.id===i);if(o){o.gate=n.target.value;const a=document.getElementById(`node-b-${o.id}`);a&&a.classList.toggle("node-disabled",o.gate==="NOT");const r=document.getElementById(`gate-chip-${o.id}`);r&&(r.className=`rung-gate-chip gate-${o.gate.toLowerCase()}`),this.evaluateGates()}})}),document.querySelectorAll(".rung-input-b").forEach(e=>{e.addEventListener("change",n=>{const i=parseInt(n.target.getAttribute("data-rung"),10),o=this.gateRungs.find(a=>a.id===i);o&&(o.inputB=n.target.value,this.evaluateGates())})}),document.querySelectorAll(".rung-action").forEach(e=>{e.addEventListener("change",n=>{const i=parseInt(n.target.getAttribute("data-rung"),10),o=this.gateRungs.find(a=>a.id===i);o&&(o.action=n.target.value,this.evaluateGates())})}),document.querySelectorAll(".rung-pulse-btn").forEach(e=>{e.addEventListener("click",n=>{const i=parseInt(n.target.getAttribute("data-rung"),10),o=this.gateRungs.find(a=>a.id===i);o&&(it.playClick(1800,.03,.25),this.executeGateAction(o))})})}applyGatePreset(t){t==="autopick"?(this.gateRungs[0].enabled=!0,this.gateRungs[0].inputA="DI_1",this.gateRungs[0].gate="AND",this.gateRungs[0].inputB="DI_3",this.gateRungs[0].action="PICK_CONVEYOR",this.showLogicAlert("Loaded Preset: AUTO-PICK ON CONVEYOR SENSOR (DI.1 AND DI.3)")):t==="safetystart"?(this.gateRungs[1].enabled=!0,this.gateRungs[1].inputA="DI_4",this.gateRungs[1].gate="AND",this.gateRungs[1].inputB="DI_3",this.gateRungs[1].action="START_CYCLE",this.showLogicAlert("Loaded Preset: TWO-HAND SAFETY CYCLE START (DI.4 AND DI.3)")):t==="curtaintrip"&&(this.gateRungs[2].enabled=!0,this.gateRungs[2].inputA="DI_3",this.gateRungs[2].gate="NOT",this.gateRungs[2].action="SAFETY_STOP",this.showLogicAlert("Loaded Preset: LIGHT CURTAIN SAFETY TRIP (NOT DI.3)")),this.renderGateRungs(),this.bindGateEvents(),this.evaluateGates()}evaluateGates(t=!1){this.gateRungs.forEach(e=>{const n=this.readSignal(e.inputA),i=e.gate==="NOT"?!1:this.readSignal(e.inputB);let o=!1;switch(e.gate){case"AND":o=n&&i;break;case"OR":o=n||i;break;case"NOT":o=!n;break;case"XOR":o=n&&!i||!n&&i;break;case"NAND":o=!(n&&i);break;default:o=!1;break}e.output=o;const a=document.getElementById(`val-a-${e.id}`),r=document.getElementById(`val-b-${e.id}`),l=document.getElementById(`eval-out-${e.id}`),c=document.getElementById(`gate-chip-${e.id}`),u=document.getElementById(`gate-rung-${e.id}`);a&&(a.textContent=n?"1":"0",a.className=`node-val-tag ${n?"val-high":"val-low"}`),r&&e.gate!=="NOT"&&(r.textContent=i?"1":"0",r.className=`node-val-tag ${i?"val-high":"val-low"}`),l&&(l.textContent=o?"HIGH (1)":"LOW (0)",l.className=`eval-out-tag ${o?"out-high":"out-low"}`),c&&c.classList.toggle("chip-satisfied",o&&e.enabled),u&&u.classList.toggle("rung-satisfied",o&&e.enabled),!t&&e.enabled&&o&&!e.prevOutput&&this.executeGateAction(e),e.prevOutput=o})}executeGateAction(t){switch(it.playSuccessChime(),this.showLogicAlert(`⚡ GATE [${t.id}] FIRED: ${t.gate} => Executing ${t.action}!`),t.action){case"PICK_CONVEYOR":{this.sequencer&&(this.sequencer.executeMoveJDirect([-66,62,99,0,-108,0]),setTimeout(()=>{this.arm.gripper.close(this.workcell.payloads),this.updateFromSystem(),setTimeout(()=>{this.sequencer.executeMoveJDirect([0,25,45,0,-70,0]),setTimeout(()=>{this.sequencer.executeMoveJDirect([76,60,117,0,-118,0]),setTimeout(()=>{this.arm.gripper.open(),this.updateFromSystem(),setTimeout(()=>{this.sequencer.executeMoveJDirect([0,25,45,0,-70,0])},400)},700)},700)},500)},700));break}case"START_CYCLE":{this.sequencer&&this.sequencer.status!=="RUNNING"&&this.sequencer.play();break}case"MOVE_HOME":{this.sequencer&&this.sequencer.executeMoveJDirect([0,25,45,0,-70,0]);break}case"TOGGLE_GRIP":{!this.arm.gripper.isOpen?this.arm.gripper.open():this.arm.gripper.close(this.workcell.payloads),this.updateFromSystem();break}case"TOGGLE_CONV":{this.workcell.conveyorRunning=!this.workcell.conveyorRunning,this.updateFromSystem();break}case"SAFETY_STOP":{this.sequencer&&this.sequencer.status==="RUNNING"&&(it.playClick(600,.05,.4),this.sequencer.pause());break}case"CHIME_HORN":{this.setDO(4,!0),setTimeout(()=>this.setDO(4,!1),800);break}}}showLogicAlert(t){const e=document.getElementById("gate-alert-banner"),n=document.getElementById("gate-alert-text");!e||!n||(n.textContent=t,e.classList.remove("hidden"),e.classList.add("visible"),clearTimeout(this._alertTimeout),this._alertTimeout=setTimeout(()=>{e.classList.remove("visible"),e.classList.add("hidden")},3500))}updateFromSystem(){this.do[1].val=!this.arm.gripper.isOpen,this.do[2].val=this.workcell.conveyorRunning,this.updateDOM(),this.evaluateGates()}updateDOM(){Object.entries(this.di).forEach(([t,e])=>{const n=document.getElementById(`di-row-${t}`);if(!n)return;n.className=`io-row ${e.val?"signal-high":"signal-low"}`;const i=n.querySelector(".io-led"),o=n.querySelector(".io-test-btn");i&&(i.className=`io-led ${e.val?"led-on":"led-off"}`),o&&(o.textContent=e.val?"HIGH":"LOW")}),Object.entries(this.do).forEach(([t,e])=>{const n=document.getElementById(`do-row-${t}`);if(!n)return;n.className=`io-row ${e.val?"signal-high":"signal-low"}`;const i=n.querySelector(".io-led"),o=n.querySelector(".io-status-badge");i&&(i.className=`io-led ${e.val?"led-on":"led-off"}`),o&&(o.className=`io-status-badge ${e.val?"badge-on":"badge-off"}`,o.textContent=e.val?"ACTIVE":"OFF")})}}const qs={pick_and_place:{id:"pick_and_place",title:"Standard Pick & Place (Feeder ➜ Pallet)",description:"Pick machined billet from Station 1 Feeder Stand and precision deposit into Station 3 Pallet Slot 1.",instructions:[{type:"MOVE_J",label:"1. MoveJ HOME",joints:[0,25,45,0,-70,0]},{type:"GRIPPER_OPEN",label:"2. Gripper OPEN"},{type:"MOVE_J",label:"3. MoveJ Above Feeder (Station 1)",joints:[-95,42,103,0,-121,0]},{type:"MOVE_L",label:"4. MoveL Down to Pick",position:new T(-.55,.28,-.05),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_CLOSE",label:"5. Gripper CLOSE (Grasp Part)"},{type:"WAIT",label:"6. Wait 200ms Dwell",durationMs:200},{type:"MOVE_L",label:"7. MoveL Retract Clear",position:new T(-.55,.48,-.05),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"8. MoveJ Above Pallet (Station 3)",joints:[76,38,112,0,-126,0]},{type:"MOVE_L",label:"9. MoveL Place Slot 1",position:new T(.49,.25,.12),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_OPEN",label:"10. Gripper OPEN (Release Part)"},{type:"MOVE_L",label:"11. MoveL Retract Clear",position:new T(.49,.48,.12),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"12. MoveJ Return HOME",joints:[0,25,45,0,-70,0]}]},conveyor_sort:{id:"conveyor_sort",title:"Conveyor Interlock & Optical Beam Sort",description:"Station 1 Conveyor belt feeds incoming billet. Optical sensor trips, stops conveyor, robot picks part and transfers to Station 3 Pallet.",instructions:[{type:"MOVE_J",label:"1. MoveJ HOME",joints:[0,25,45,0,-70,0]},{type:"GRIPPER_OPEN",label:"2. Gripper OPEN"},{type:"CONVEYOR",label:"3. Conveyor RUN (Motor On)",state:!0},{type:"WAIT_DI",label:"4. Wait DI[1] Optical Beam Trip",pin:1,expectedValue:!0},{type:"CONVEYOR",label:"5. Conveyor HALT (Interlock)",state:!1},{type:"MOVE_J",label:"6. MoveJ Approach Conveyor (Station 1)",joints:[-66,45,95,0,-111,0]},{type:"MOVE_L",label:"7. MoveL Down to Conveyor Part",position:new T(-.55,.27,.25),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_CLOSE",label:"8. Gripper CLOSE (Clamp Part)"},{type:"WAIT",label:"9. Dwell 200ms",durationMs:200},{type:"MOVE_L",label:"10. MoveL Retract Lift",position:new T(-.55,.48,.25),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"11. MoveJ Above Pallet (Station 3)",joints:[79,46,92,0,-109,0]},{type:"MOVE_L",label:"12. MoveL Deposit Pallet Slot 2",position:new T(.61,.25,.12),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_OPEN",label:"13. Gripper OPEN"},{type:"MOVE_L",label:"14. MoveL Retract Up",position:new T(.61,.48,.12),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"15. MoveJ Return HOME",joints:[0,25,45,0,-70,0]}]},seam_contour:{id:"seam_contour",title:"3D Precision Seam Welding & Plasma Arc",description:"Robotic MIG welding on Station 2 structural steel gusset bracket with live plasma arc, dynamic sparks, and molten bead generation.",instructions:[{type:"MOVE_J",label:"1. MoveJ Pre-Weld Clearance",joints:[0,39,109,0,-123,0]},{type:"MOVE_L",label:"2. MoveL Torch Lead-in to Seam Start",position:new T(-.11,.28,.52),euler:{rx:0,ry:0,rz:0}},{type:"WELD_START",label:"3. WELD_START (Arc Strike & Sparks)",dwellMs:350},{type:"MOVE_L",label:"4. MoveL Seam Waypoint 1",position:new T(-.06,.28,.52),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_L",label:"5. MoveL Seam Center P2",position:new T(0,.28,.52),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_L",label:"6. MoveL Seam Waypoint 3",position:new T(.06,.28,.52),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_L",label:"7. MoveL Seam End P4",position:new T(.11,.28,.52),euler:{rx:0,ry:0,rz:0}},{type:"WELD_STOP",label:"8. WELD_STOP (Crater-Fill & Extinguish)",dwellMs:400},{type:"MOVE_L",label:"9. MoveL Vertical Torch Retract",position:new T(.11,.48,.52),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"10. MoveJ Return HOME",joints:[0,25,45,0,-70,0]}]},palletizing_matrix:{id:"palletizing_matrix",title:"3D Laser Vision Inspection & Pallet Loading",description:"Multi-part handling cycle across all 3 stations: Intercept Station 1 conveyor billet, execute 3D laser scan sweep with wrist spin at Station 2, and palletize into dual matrix pockets at Station 3.",instructions:[{type:"MOVE_J",label:"1. MoveJ HOME Clearance",joints:[0,25,45,0,-70,0]},{type:"CONVEYOR",label:"2. DO[2] Conveyor START",state:!0},{type:"WAIT_DI",label:"3. WAIT_DI[1] Sensor Beam Trip",pin:1,expectedValue:!0},{type:"CONVEYOR",label:"4. DO[2] Conveyor STOP (Part Arrived)",state:!1},{type:"MOVE_J",label:"5. MoveJ Approach Conveyor (Station 1)",joints:[-66,45,95,0,-111,0]},{type:"MOVE_L",label:"6. MoveL Descend to Conveyor Billet",position:new T(-.55,.27,.25),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_CLOSE",label:"7. Gripper CLOSE (Clamp Billet 1)"},{type:"MOVE_L",label:"8. MoveL Lift Part",position:new T(-.55,.48,.25),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"9. MoveJ Transit to 3D Vision Station (Station 2)",joints:[-25,43,100,0,-117,0]},{type:"MOVE_L",label:"10. MoveL Enter Laser Inspection Bay",position:new T(-.24,.36,.52),euler:{rx:0,ry:0,rz:0}},{type:"VISION_SCAN_START",label:"11. VISION_SCAN_START (Laser Fan On)",dwellMs:300},{type:"MOVE_J",label:"12. MoveJ Axial Wrist Spin (+180° Scan)",joints:[-25,43,100,0,-117,180]},{type:"MOVE_J",label:"13. MoveJ Reverse Wrist Spin (360° Scan)",joints:[-25,43,100,0,-117,-90]},{type:"VISION_SCAN_STOP",label:"14. VISION_SCAN_STOP (Inspection PASS 100%)",dwellMs:250},{type:"MOVE_L",label:"15. MoveL Retract from Vision Bay",position:new T(-.24,.48,.52),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"16. MoveJ High Transit to Pallet (Station 3)",joints:[76,38,112,0,-126,0]},{type:"MOVE_L",label:"17. MoveL Place in Pallet Pocket 1",position:new T(.49,.25,.12),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_OPEN",label:"18. Gripper OPEN (Seat Billet 1)"},{type:"MOVE_L",label:"19. MoveL Retract Above Pallet",position:new T(.49,.48,.12),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"20. MoveJ High Transit to Feeder Stand (Station 1)",joints:[-95,42,103,0,-121,0]},{type:"MOVE_L",label:"21. MoveL Descend to Feeder Billet 2",position:new T(-.55,.28,-.05),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_CLOSE",label:"22. Gripper CLOSE (Clamp Billet 2)"},{type:"MOVE_L",label:"23. MoveL Lift Billet 2",position:new T(-.55,.48,-.05),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"24. MoveJ Transit to Pallet Pocket 2 (Station 3)",joints:[79,46,92,0,-109,0]},{type:"MOVE_L",label:"25. MoveL Place in Pallet Pocket 2",position:new T(.61,.25,.12),euler:{rx:0,ry:0,rz:0}},{type:"GRIPPER_OPEN",label:"26. Gripper OPEN (Seat Billet 2)"},{type:"MOVE_L",label:"27. MoveL Retract Above Pallet",position:new T(.61,.48,.12),euler:{rx:0,ry:0,rz:0}},{type:"MOVE_J",label:"28. MoveJ Return HOME",joints:[0,25,45,0,-70,0]}]}},Uo=[{id:"task_pick_place",title:"MISSION 01: Precision Feeder Transfer",difficulty:"LEVEL 1 // OPERATOR",badge:"PICK & PLACE",description:"Pick the raw machined aluminum billet from the Feed Stand and place it securely into Pallet Pocket #1.",presetId:"pick_and_place",objectives:["Position gripper over feeder nest (-0.48, 0.28, 0.32)","Actuate pneumatic gripper to clamp part","Maintain minimum 400mm clearance elevation during transit","Deposit part into Pallet Pocket 1 (0.42, 0.26, 0.26)"]},{id:"task_conveyor_sort",title:"MISSION 02: Conveyor Optical Sensor Interlock",difficulty:"LEVEL 2 // AUTOMATION TECH",badge:"I/O INTERLOCK",description:"Synchronize robot picking with the automated conveyor line. The optical beam break must halt the line before robot descent.",presetId:"conveyor_sort",objectives:["Start conveyor motor via DO[2]","Wait for DI[1] Photo-Eye Beam Trip","Interlock: Halt conveyor immediately upon detection","Execute MoveL descent to grip moving part cleanly","Sort part onto Pallet Pocket 2"]},{id:"task_seam_welding",title:"MISSION 03: Robotic Arc Welding & Plasma Sparks",difficulty:"LEVEL 3 // ROBOT PROGRAMMER",badge:"MIG WELDING",description:"Execute high-precision 3D fillet seam welding along a fabricated steel gusset bracket with live plasma arc, dynamic sparks, and molten bead generation.",presetId:"seam_contour",objectives:["Descend to seam start with 15° torch lead angle","Ignite plasma arc (WELD_START) with synchronized sparks and audio","Track 4 linear Cartesian weld points (MoveL) along V-groove seam","Execute crater-fill dwell (WELD_STOP) and vertical torch retract"]},{id:"task_pallet_matrix",title:"MISSION 04: 3D Laser Vision Inspection & Palletizing",difficulty:"LEVEL 4 // SYSTEMS ENGINEER",badge:"VISION & PALLET",description:"Intercept incoming conveyor parts, transfer into the 3D Laser Vision Bay for full 360° dimensional scanning, and sequence both billets into the pallet matrix.",presetId:"palletizing_matrix",objectives:["Conveyor feed interlock: Optical beam sensor detection & pick","Transfer to 3D Vision Laser Bay and execute axial J6 inspection spin","Verify 100% dimensional tolerance and seat Billet 1 in Pallet Pocket 1","Transfer raw Billet 2 from Feeder Stand into Pallet Pocket 2"]}];class qm{constructor(t,e,n){this.sequencer=t,this.workcell=e,this.onLoadPreset=n,this.activeTaskIndex=0}mount(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="tasks-panel">
        <div class="tasks-header">
          <span class="tasks-title">INDUSTRIAL CERTIFICATION TASKS</span>
          <span class="tasks-progress" id="tasks-progress-badge">TASK 1 / 4</span>
        </div>

        <div class="tasks-cards-list" id="tasks-cards-list"></div>
      </div>
    `,this.renderTasks())}renderTasks(){const t=document.getElementById("tasks-cards-list");t&&(t.innerHTML="",Uo.forEach((e,n)=>{const i=document.createElement("div");i.className=`task-card ${n===this.activeTaskIndex?"active-task":""}`,i.innerHTML=`
        <div class="task-card-header">
          <div class="task-badge-wrap">
            <span class="task-diff">${e.difficulty}</span>
            <span class="task-badge">${e.badge}</span>
          </div>
          <h3 class="task-title">${e.title}</h3>
        </div>
        <p class="task-desc">${e.description}</p>
        <div class="task-objectives">
          ${e.objectives.map(o=>`
            <div class="task-obj-item">
              <span class="obj-dot">◆</span>
              <span class="obj-text">${o}</span>
            </div>
          `).join("")}
        </div>
        <div class="task-footer">
          <button class="task-load-btn" data-task-idx="${n}">
            <span>LOAD TASK PROGRAM ➔</span>
          </button>
        </div>
      `,i.querySelector(".task-load-btn").addEventListener("click",()=>{it.playClick(1800,.03,.25),this.selectTask(n)}),t.appendChild(i)}))}selectTask(t){this.activeTaskIndex=t;const e=Uo[t],n=document.getElementById("tasks-progress-badge");n&&(n.textContent=`TASK ${t+1} / ${Uo.length}`),document.querySelectorAll(".task-card").forEach((i,o)=>{i.classList.toggle("active-task",o===t)}),this.workcell.resetWorkpieces(),e.presetId&&qs[e.presetId]&&this.onLoadPreset&&this.onLoadPreset(qs[e.presetId])}}class Ym{static generateCode(t,e="fanuc"){switch(e.toLowerCase()){case"fanuc":return this.generateFanuc(t);case"kuka":return this.generateKuka(t);case"urscript":return this.generateURScript(t);case"python":default:return this.generatePython(t)}}static generateFanuc(t){const e=["/PROG ROBOFORGE_RUN","/ATTR",'OWNER		= "JACK";','COMMENT		= "ROBOFORGE INDUSTRIAL GENERATOR";',"DEFAULT_GROUP	= 1,*,*,*,*;","/MN"];let n=1,i=1;const o=[];return t.forEach(a=>{switch(a.type){case"MOVE_J":e.push(`   ${n++}: J P[${i}] 100% CNT50 ;`),o.push({id:i++,joints:a.joints,comment:a.label||"Joint Target"});break;case"MOVE_L":e.push(`   ${n++}: L P[${i}] 250mm/sec FINE ;`),o.push({id:i++,pos:a.position,euler:a.euler,comment:a.label||"Cartesian Target"});break;case"GRIPPER_CLOSE":e.push(`   ${n++}: RO[1:PNEUMATIC_VALVE] = ON ;`);break;case"GRIPPER_OPEN":e.push(`   ${n++}: RO[1:PNEUMATIC_VALVE] = OFF ;`);break;case"CONVEYOR":e.push(`   ${n++}: DO[2:CONVEYOR_RUN] = ${a.state?"ON":"OFF"} ;`);break;case"WAIT":e.push(`   ${n++}: WAIT ${(a.durationMs/1e3).toFixed(2)}(sec) ;`);break;case"WAIT_DI":e.push(`   ${n++}: WAIT DI[${a.pin}:OPTICAL_SENSOR] = ${a.expectedValue?"ON":"OFF"} ;`);break;case"SET_DO":e.push(`   ${n++}: DO[${a.pin}] = ${a.val?"ON":"OFF"} ;`);break;case"WELD_START":e.push(`   ${n++}: ! ARC WELDING IGNITION ;`),e.push(`   ${n++}: WELD_START[1:TORCH, 24.5V, 180A] ;`);break;case"WELD_STOP":e.push(`   ${n++}: ! CRATER FILL & EXTINCTION ;`),e.push(`   ${n++}: WELD_END[1:FILL_0.4S] ;`);break;case"VISION_SCAN_START":e.push(`   ${n++}: ! 3D LASER VISION SCAN TRIGGER ;`),e.push(`   ${n++}: VISION RUN_FIND 'PART_INSPECT' ;`);break;case"VISION_SCAN_STOP":e.push(`   ${n++}: WAIT DI[3:VISION_PASS] = ON ;`);break}}),e.push(`   ${n++}: ! CYCLE COMPLETED ;`),e.push("/POS"),o.forEach(a=>{a.joints?(e.push(`P[${a.id}]{`),e.push("   GP1:"),e.push("	UF : 0, UT : 1,"),e.push(`	J1 = ${a.joints[0].toFixed(2)} deg, J2 = ${a.joints[1].toFixed(2)} deg, J3 = ${a.joints[2].toFixed(2)} deg,`),e.push(`	J4 = ${a.joints[3].toFixed(2)} deg, J5 = ${a.joints[4].toFixed(2)} deg, J6 = ${a.joints[5].toFixed(2)} deg`),e.push("};")):a.pos&&(e.push(`P[${a.id}]{`),e.push("   GP1:"),e.push("	UF : 0, UT : 1,"),e.push(`	X  = ${(a.pos.x*1e3).toFixed(1)} mm, Y  = ${(a.pos.y*1e3).toFixed(1)} mm, Z  = ${(a.pos.z*1e3).toFixed(1)} mm,`),e.push(`	W  = ${a.euler.rx.toFixed(1)} deg, P  = ${a.euler.ry.toFixed(1)} deg, R  = ${a.euler.rz.toFixed(1)} deg`),e.push("};"))}),e.push("/END"),e.join(`
`)}static generateKuka(t){const e=["&ACCESS RVP","&REL 1",'&COMMENT "RoboForge KUKA KRL Post-Processor"',"DEF ROBOFORGE_MAIN()","  ;--- INITIALIZATION ---","  $BWDSTART = FALSE","  PDAT_ACT = PDEFAULT","  BAS(#INITMOV, 0)","  $TOOL = TOOL_DATA[1]","  $BASE = BASE_DATA[1]","  $VEL.CP = 0.25 ; m/s","  $ACC.CP = 2.0  ; m/s^2","","  ;--- EXECUTION SEQUENCE ---"];return t.forEach(n=>{switch(n.type){case"MOVE_J":e.push(`  ; ${n.label||"MoveJ"}`),e.push(`  PTP {A1 ${n.joints[0].toFixed(2)}, A2 ${n.joints[1].toFixed(2)}, A3 ${n.joints[2].toFixed(2)}, A4 ${n.joints[3].toFixed(2)}, A5 ${n.joints[4].toFixed(2)}, A6 ${n.joints[5].toFixed(2)}}`);break;case"MOVE_L":e.push(`  ; ${n.label||"MoveL"}`),e.push(`  LIN {X ${(n.position.x*1e3).toFixed(1)}, Y ${(n.position.y*1e3).toFixed(1)}, Z ${(n.position.z*1e3).toFixed(1)}, A ${n.euler.rz.toFixed(1)}, B ${n.euler.ry.toFixed(1)}, C ${n.euler.rx.toFixed(1)}}`);break;case"GRIPPER_CLOSE":e.push("  $OUT[1] = TRUE  ; Close Pneumatic Gripper");break;case"GRIPPER_OPEN":e.push("  $OUT[1] = FALSE ; Open Pneumatic Gripper");break;case"CONVEYOR":e.push(`  $OUT[2] = ${n.state?"TRUE":"FALSE"} ; Conveyor Motor`);break;case"WAIT":e.push(`  WAIT SEC ${(n.durationMs/1e3).toFixed(2)}`);break;case"WAIT_DI":e.push(`  WAIT FOR $IN[${n.pin}] == ${n.expectedValue?"TRUE":"FALSE"}`);break;case"WELD_START":e.push("  ; Arc Welding Ignition"),e.push("  ARCON(WELD_PARAM_1)");break;case"WELD_STOP":e.push("  ; Arc Extinguish"),e.push("  ARCOFF(WELD_PARAM_1)");break;case"VISION_SCAN_START":e.push("  ; 3D Laser Vision Trigger"),e.push("  $OUT[4] = TRUE  ; Camera Trigger");break;case"VISION_SCAN_STOP":e.push("  WAIT FOR $IN[4] == TRUE  ; Vision Pass"),e.push("  $OUT[4] = FALSE");break}}),e.push(""),e.push("  ;--- SHUTDOWN ---"),e.push("  $OUT[1] = FALSE"),e.push("END"),e.join(`
`)}static generateURScript(t){const e=["# Universal Robots URScript generated by RoboForge","def roboforge_routine():","  set_tcp(p[0, 0, 0.16, 0, 0, 0])","  set_payload(1.5, [0, 0, 0.08])","  accel_joint = 1.4","  vel_joint = 1.05","  accel_linear = 1.2","  vel_linear = 0.25",""],n=Math.PI/180;return t.forEach(i=>{switch(i.type){case"MOVE_J":{const o=i.joints.map(a=>(a*n).toFixed(4)).join(", ");e.push(`  # ${i.label||"MoveJ"}`),e.push(`  movej([${o}], a=accel_joint, v=vel_joint)`);break}case"MOVE_L":{const o=i.position.x.toFixed(4),a=i.position.y.toFixed(4),r=i.position.z.toFixed(4),l=((i.euler.rx||0)*n).toFixed(4),c=((i.euler.ry||0)*n).toFixed(4),u=((i.euler.rz||0)*n).toFixed(4);e.push(`  # ${i.label||"MoveL"}`),e.push(`  movel(p[${o}, ${a}, ${r}, ${l}, ${c}, ${u}], a=accel_linear, v=vel_linear)`);break}case"GRIPPER_CLOSE":e.push("  set_digital_out(1, True) # Gripper Close");break;case"GRIPPER_OPEN":e.push("  set_digital_out(1, False) # Gripper Open");break;case"CONVEYOR":e.push(`  set_digital_out(2, ${i.state?"True":"False"}) # Conveyor`);break;case"WAIT":e.push(`  sleep(${(i.durationMs/1e3).toFixed(2)})`);break;case"WAIT_DI":e.push(`  while not (get_digital_in(${i.pin}) == ${i.expectedValue?"True":"False"}):`),e.push("    sleep(0.01)"),e.push("  end");break;case"WELD_START":e.push("  set_digital_out(3, True) # Arc Torch Ignition"),e.push("  sleep(0.35)");break;case"WELD_STOP":e.push("  set_digital_out(3, False) # Arc Torch Extinguish"),e.push("  sleep(0.40)");break;case"VISION_SCAN_START":e.push("  set_digital_out(4, True) # 3D Laser Scanner Active");break;case"VISION_SCAN_STOP":e.push("  set_digital_out(4, False) # Vision Inspection Verified");break}}),e.push("end"),e.push("roboforge_routine()"),e.join(`
`)}static generatePython(t){const e=["# RoboForge Python Automation Script (Industrial Robot Interface)","import time","import math","","class IndustrialRobotClient:",'    """Standard industrial robot controller client."""','    def __init__(self, host="192.168.1.100", port=30002):',"        self.host = host","        self.port = port",'        print(f"Connected to Robot Controller at {self.host}:{self.port}")',"","    def move_j(self, joints_deg, speed=90):",'        print(f"MoveJ -> Joints: {joints_deg} | Speed: {speed} deg/s")',"","    def move_l(self, x_mm, y_mm, z_mm, rx=0, ry=0, rz=0, speed=250):",'        print(f"MoveL -> Target: ({x_mm:.1f}, {y_mm:.1f}, {z_mm:.1f}) mm | Speed: {speed} mm/s")',"","    def set_do(self, pin, state):",'        print(f"Set DO[{pin}] = {state}")',"","    def get_di(self, pin):","        return 1","","# Connect to robot controller","robot = IndustrialRobotClient()",'print("RoboForge automated sequence initialized...")',""];return t.forEach(n=>{switch(n.type){case"MOVE_J":e.push(`# ${n.label}`),e.push(`robot.move_j([${n.joints.map(i=>i.toFixed(2)).join(", ")}])`);break;case"MOVE_L":e.push(`# ${n.label}`),e.push(`robot.move_l(${(n.position.x*1e3).toFixed(1)}, ${(n.position.y*1e3).toFixed(1)}, ${(n.position.z*1e3).toFixed(1)}, rx=${n.euler.rx.toFixed(1)}, ry=${n.euler.ry.toFixed(1)}, rz=${n.euler.rz.toFixed(1)})`);break;case"GRIPPER_CLOSE":e.push("robot.set_do(1, 1)  # Pneumatic Gripper Grip"),e.push("time.sleep(0.2)");break;case"GRIPPER_OPEN":e.push("robot.set_do(1, 0)  # Pneumatic Gripper Release"),e.push("time.sleep(0.2)");break;case"CONVEYOR":e.push(`robot.set_do(2, ${n.state?1:0}) # Conveyor Motor`);break;case"WAIT":e.push(`time.sleep(${(n.durationMs/1e3).toFixed(2)})`);break;case"WAIT_DI":e.push(`while robot.get_di(${n.pin}) != ${n.expectedValue?1:0}:`),e.push("    time.sleep(0.02)");break;case"WELD_START":e.push('print(">>> WELD_START: High-voltage plasma arc struck")'),e.push("robot.set_do(3, 1)  # Torch Arc Power On"),e.push("time.sleep(0.35)");break;case"WELD_STOP":e.push('print(">>> WELD_STOP: Crater-fill completed, torch off")'),e.push("robot.set_do(3, 0)  # Torch Arc Power Off"),e.push("time.sleep(0.40)");break;case"VISION_SCAN_START":e.push('print(">>> 3D Laser Vision Scanner active")'),e.push("robot.set_do(4, 1)  # Laser Scanner On");break;case"VISION_SCAN_STOP":e.push('print(">>> 3D Laser Vision PASS 100%")'),e.push("robot.set_do(4, 0)  # Laser Scanner Off");break}}),e.push('print("RoboForge routine finished successfully!")'),e.join(`
`)}}class $m{constructor(){this.env=null,this.workcell=null,this.arm=null,this.kinematics=null,this.planner=null,this.sequencer=null,this.teachPendant=null,this.programEditor=null,this.ioDeck=null,this.taskManager=null,this.trajectoryLine=null,this.init()}init(){const t=document.getElementById("viewport-3d-container");this.env=new Um(t),this.kinematics=new Ql(Ce),this.arm=new zm(this.env.scene,"fanuc"),this.workcell=new Bm(this.env.scene),this.planner=new Vm(this.kinematics),this.sequencer=new Hm(this.arm,this.workcell,this.planner),this.setupUI(),this.setupInteractiveGizmo(),this.setupGlobalControls(),this.loadProgramPreset(qs.pick_and_place),this.clock=new cm,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupUI(){this.teachPendant=new Wm(this.arm,this.kinematics,i=>{this.updateGizmoAnchorFromArm(),this.ioDeck&&this.ioDeck.updateFromSystem()},i=>{this.programEditor.addTarget(i)},this.workcell),this.teachPendant.mount("tab-content-pendant"),this.programEditor=new jm(this.sequencer,()=>{},i=>{this.teachPendant.syncSlidersFromArm(),this.teachPendant.updateTelemetry(),this.updateGizmoAnchorFromArm()}),this.programEditor.mount("tab-content-program"),this.ioDeck=new Xm(this.workcell,this.arm,this.sequencer,this.kinematics),this.sequencer.ioDeck=this.ioDeck,this.ioDeck.onDIChange=()=>{this.programEditor&&this.programEditor.notifyIOChange()},this.ioDeck.mount("tab-content-io"),this.taskManager=new qm(this.sequencer,this.workcell,i=>{this.loadProgramPreset(i)}),this.taskManager.mount("tab-content-tasks"),this.sequencer.onLineChange=i=>{this.programEditor.updateActiveLine(i)},this.sequencer.onStatusChange=i=>{const o=document.getElementById("nav-play-pause-btn"),a=document.getElementById("nav-play-label"),r=document.getElementById("nav-play-icon");i==="RUNNING"?(o.classList.add("is-running"),a.textContent="RUNNING",r.textContent="⏸"):(o.classList.remove("is-running"),a.textContent="PAUSED",r.textContent="▶"),this.ioDeck&&this.ioDeck.updateFromSystem()},this.sequencer.onTrajectoryUpdate=i=>{this.drawTrajectoryLine(i)},document.querySelectorAll(".deck-nav-tab").forEach(i=>{i.addEventListener("click",()=>{it.playClick(1400,.02,.15),document.querySelectorAll(".deck-nav-tab").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".deck-tab-panel").forEach(r=>r.classList.remove("active")),i.classList.add("active");const o=i.dataset.tab,a=document.getElementById(o);a&&a.classList.add("active"),o==="tab-content-export"&&this.refreshCodeExport()})});const t=()=>{const i=window.location.hash.toLowerCase();if(i==="#io"||i==="#gates"){const o=document.querySelector('button[data-tab="tab-content-io"]');o&&o.click()}else if(i==="#program"||i==="#js"){const o=document.querySelector('button[data-tab="tab-content-program"]');if(o&&o.click(),i==="#js"){const a=document.getElementById("btn-subtab-js");a&&a.click()}}else if(i==="#tasks"){const o=document.querySelector('button[data-tab="tab-content-tasks"]');o&&o.click()}else if(i==="#export"){const o=document.querySelector('button[data-tab="tab-content-export"]');o&&o.click()}};t(),window.addEventListener("hashchange",t);const e=document.getElementById("export-dialect-select");e&&e.addEventListener("change",()=>{this.refreshCodeExport()});const n=document.getElementById("export-copy-btn");n&&n.addEventListener("click",()=>{it.playClick(2e3,.02,.2);const i=document.getElementById("export-code-display").textContent;navigator.clipboard.writeText(i),n.textContent="COPIED!",setTimeout(()=>{n.textContent="COPY CODE"},1500)})}setupInteractiveGizmo(){this.updateGizmoAnchorFromArm(),this.env.transformControls.addEventListener("change",()=>{if(this.env.transformControls.dragging){it.ensureContext();const r=this.env.gizmoAnchor.position,c=this.kinematics.computeFK(this.arm.getJoints()).tcpEulerDeg,u=this.kinematics.solveIK(r,c,this.arm.getJoints());u.success&&(this.arm.setJoints(u.jointsDeg),this.teachPendant.syncSlidersFromArm(),this.teachPendant.updateTelemetry())}});const t=document.getElementById("gizmo-mode-translate"),e=document.getElementById("gizmo-mode-rotate"),n=document.getElementById("gizmo-toggle-btn");if(t&&e&&(t.addEventListener("click",()=>{it.playClick(1500,.02,.15),this.env.setGizmoMode("translate"),t.classList.add("active"),e.classList.remove("active")}),e.addEventListener("click",()=>{it.playClick(1500,.02,.15),this.env.setGizmoMode("rotate"),e.classList.add("active"),t.classList.remove("active")})),n){let r=!0;n.addEventListener("click",()=>{r=!r,this.env.setGizmoVisible(r),n.classList.toggle("active",r)})}const i=document.getElementById("btn-spawn-part-jaw");i&&i.addEventListener("click",()=>{it.ensureContext(),it.playClick(1800,.02,.25);const l=this.arm.getTCPWorldPosition().clone();this.workcell.spawnWorkpiece("cylinder",16096779,l),this.arm.gripper.close(this.workcell.payloads),this.teachPendant.updateGripperUI()});const o=document.getElementById("btn-reset-parts");o&&o.addEventListener("click",()=>{it.ensureContext(),it.playClick(1200,.03,.2),this.workcell.resetWorkpieces(),this.teachPendant.updateGripperUI()});const a={iso:document.getElementById("cam-view-iso"),stn1:document.getElementById("cam-view-stn1"),stn2:document.getElementById("cam-view-stn2"),stn3:document.getElementById("cam-view-stn3"),rear:document.getElementById("cam-view-rear"),bot:document.getElementById("cam-view-bot")};Object.entries(a).forEach(([r,l])=>{l&&l.addEventListener("click",()=>{r==="bot"?it.playMaintBotBeep():it.playClick(1700,.02,.15),Object.values(a).forEach(c=>c&&c.classList.remove("active")),l.classList.add("active"),this.env.setCameraView(r)})})}updateGizmoAnchorFromArm(){const t=this.arm.getTCPWorldPosition();this.env.gizmoAnchor.position.copy(t)}setupGlobalControls(){document.getElementById("nav-play-pause-btn").addEventListener("click",()=>{it.ensureContext(),this.sequencer.status==="RUNNING"?this.sequencer.pause():this.sequencer.play()}),document.getElementById("nav-step-btn").addEventListener("click",()=>{it.ensureContext(),this.sequencer.step()}),document.getElementById("nav-speed-select").addEventListener("change",l=>{this.sequencer.setSpeed(parseFloat(l.target.value))}),document.getElementById("robot-theme-select").addEventListener("change",l=>{it.playClick(1600,.02,.2),this.arm.setTheme(l.target.value)});const i=document.getElementById("nav-restart-btn")||document.getElementById("nav-reset-bot-btn");i&&i.addEventListener("click",()=>{this.resetSimulation()}),document.getElementById("nav-estop-btn").addEventListener("click",()=>{it.playEStop(),this.sequencer.stop(),this.workcell.conveyorRunning=!1,this.workcell.setAndonState(!0,!1,!1,!1)});const a=document.getElementById("nav-sound-btn");a.addEventListener("click",()=>{it.ensureContext();const l=!it.isMuted;it.setMuted(l),a.textContent=l?"🔇 MUTED":"🔊 SOUND",a.classList.toggle("is-muted",l)}),document.getElementById("nav-preset-select").addEventListener("change",l=>{it.ensureContext();const c=qs[l.target.value];c&&this.loadProgramPreset(c)}),window.addEventListener("keydown",l=>{l.target.tagName==="INPUT"||l.target.tagName==="SELECT"||l.target.tagName==="TEXTAREA"||(l.code==="Space"?(l.preventDefault(),it.ensureContext(),this.sequencer.status==="RUNNING"?this.sequencer.pause():this.sequencer.play()):l.key==="."?(it.ensureContext(),this.sequencer.step()):l.key.toLowerCase()==="r"?this.resetSimulation():l.key.toLowerCase()==="h"&&(this.arm.setJoints(Ce.homePose),this.teachPendant.syncSlidersFromArm(),this.teachPendant.updateTelemetry(),this.updateGizmoAnchorFromArm()))})}resetSimulation(){it.ensureContext(),it.playClick(1100,.04,.25),this.sequencer.reset(),this.arm.setJoints(Ce.homePose),this.arm.gripper.open(),this.workcell.resetWorkpieces(),this.teachPendant.syncSlidersFromArm(),this.teachPendant.updateTelemetry(),this.teachPendant.updateGripperUI(),this.updateGizmoAnchorFromArm(),this.clearTrajectoryLine(),this.ioDeck&&this.ioDeck.updateFromSystem(),this.workcell&&this.workcell.setAndonState(!1,!0,!1,!1)}loadProgramPreset(t){this.clearTrajectoryLine(),this.sequencer.loadProgram(t.instructions),this.programEditor.renderInstructions(),this.refreshCodeExport()}drawTrajectoryLine(t){this.clearTrajectoryLine(),!(!t||!t.path3D)&&(this.trajectoryLine=this.planner.createTrajectoryVisual(t.path3D,t.type==="MoveL"),this.env.scene.add(this.trajectoryLine))}clearTrajectoryLine(){this.trajectoryLine&&(this.env.scene.remove(this.trajectoryLine),this.trajectoryLine=null)}refreshCodeExport(){var n;const t=((n=document.getElementById("export-dialect-select"))==null?void 0:n.value)||"fanuc",e=document.getElementById("export-code-display");e&&(e.textContent=Ym.generateCode(this.sequencer.instructions,t))}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta();this.workcell.update(t),this.sequencer.update(t),this.arm.update(t,this.workcell.payloads),(this.sequencer.status==="RUNNING"||this.sequencer.status==="STEPPING")&&(this.teachPendant.syncSlidersFromArm(),this.teachPendant.updateTelemetry(),this.updateGizmoAnchorFromArm()),this.env.render()}}function fl(){window.roboForgeApp||(window.roboForgeApp=new $m)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fl):fl();
