(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminGas~adminManageRecharge~adminRecharge~carRecharge~driver~oilClean~oilCleanManage~oiler"],{"901e":function(e,r,n){var t;(function(i){"use strict";var o,s=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,u=Math.ceil,f=Math.floor,l="[BigNumber Error] ",c=l+"Number primitive has more than 15 significant digits: ",a=1e14,h=14,g=9007199254740991,p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],w=1e7,m=1e9;function d(e){var r,n,t,i=M.prototype={constructor:M,toString:null,valueOf:null},o=new M(1),R=20,S=4,_=-7,D=21,P=-1e7,B=1e7,L=!1,x=1,U=0,C={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},I="0123456789abcdefghijklmnopqrstuvwxyz";function M(e,r){var i,o,u,l,a,p,w,m,d=this;if(!(d instanceof M))return new M(e,r);if(null==r){if(e&&!0===e._isBigNumber)return d.s=e.s,void(!e.c||e.e>B?d.c=d.e=null:e.e<P?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice()));if((p="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,a=e;a>=10;a/=10,l++);return void(l>B?d.c=d.e=null:(d.e=l,d.c=[e]))}m=String(e)}else{if(!s.test(m=String(e)))return t(d,m,p);d.s=45==m.charCodeAt(0)?(m=m.slice(1),-1):1}(l=m.indexOf("."))>-1&&(m=m.replace(".","")),(a=m.search(/e/i))>0?(l<0&&(l=a),l+=+m.slice(a+1),m=m.substring(0,a)):l<0&&(l=m.length)}else{if(b(r,2,I.length,"Base"),10==r)return d=new M(e),F(d,R+d.e+1,S);if(m=String(e),p="number"==typeof e){if(0*e!=0)return t(d,m,p,r);if(d.s=1/e<0?(m=m.slice(1),-1):1,M.DEBUG&&m.replace(/^0\.0*|\./,"").length>15)throw Error(c+e)}else d.s=45===m.charCodeAt(0)?(m=m.slice(1),-1):1;for(i=I.slice(0,r),l=a=0,w=m.length;a<w;a++)if(i.indexOf(o=m.charAt(a))<0){if("."==o){if(a>l){l=w;continue}}else if(!u&&(m==m.toUpperCase()&&(m=m.toLowerCase())||m==m.toLowerCase()&&(m=m.toUpperCase()))){u=!0,a=-1,l=0;continue}return t(d,String(e),p,r)}p=!1,m=n(m,r,10,d.s),(l=m.indexOf("."))>-1?m=m.replace(".",""):l=m.length}for(a=0;48===m.charCodeAt(a);a++);for(w=m.length;48===m.charCodeAt(--w););if(m=m.slice(a,++w)){if(w-=a,p&&M.DEBUG&&w>15&&(e>g||e!==f(e)))throw Error(c+d.s*e);if((l=l-a-1)>B)d.c=d.e=null;else if(l<P)d.c=[d.e=0];else{if(d.e=l,d.c=[],a=(l+1)%h,l<0&&(a+=h),a<w){for(a&&d.c.push(+m.slice(0,a)),w-=h;a<w;)d.c.push(+m.slice(a,a+=h));a=h-(m=m.slice(a)).length}else a-=w;for(;a--;m+="0");d.c.push(+m)}}else d.c=[d.e=0]}function T(e,r,n,t){var i,o,s,u,f;if(null==n?n=S:b(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)f=N(e.c),f=1==t||2==t&&(s<=_||s>=D)?E(f,s):A(f,s,"0");else if(e=F(new M(e),r,n),o=e.e,f=N(e.c),u=f.length,1==t||2==t&&(r<=o||o<=_)){for(;u<r;f+="0",u++);f=E(f,o)}else if(r-=s,f=A(f,o,"0"),o+1>u){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=o-u,r>0)for(o+1==u&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function k(e,r){for(var n,t=1,i=new M(e[0]);t<e.length;t++){if(n=new M(e[t]),!n.s){i=n;break}r.call(i,n)&&(i=n)}return i}function G(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*h-1)>B?e.c=e.e=null:n<P?e.c=[e.e=0]:(e.e=n,e.c=r),e}function F(e,r,n,t){var i,o,s,l,c,g,w,m=e.c,d=p;if(m){e:{for(i=1,l=m[0];l>=10;l/=10,i++);if(o=r-i,o<0)o+=h,s=r,c=m[g=0],w=c/d[i-s-1]%10|0;else if(g=u((o+1)/h),g>=m.length){if(!t)break e;for(;m.length<=g;m.push(0));c=w=0,i=1,o%=h,s=o-h+1}else{for(c=l=m[g],i=1;l>=10;l/=10,i++);o%=h,s=o-h+i,w=s<0?0:c/d[i-s-1]%10|0}if(t=t||r<0||null!=m[g+1]||(s<0?c:c%d[i-s-1]),t=n<4?(w||t)&&(0==n||n==(e.s<0?3:2)):w>5||5==w&&(4==n||t||6==n&&(o>0?s>0?c/d[i-s]:0:m[g-1])%10&1||n==(e.s<0?8:7)),r<1||!m[0])return m.length=0,t?(r-=e.e+1,m[0]=d[(h-r%h)%h],e.e=-r||0):m[0]=e.e=0,e;if(0==o?(m.length=g,l=1,g--):(m.length=g+1,l=d[h-o],m[g]=s>0?f(c/d[i-s]%d[s])*l:0),t)for(;;){if(0==g){for(o=1,s=m[0];s>=10;s/=10,o++);for(s=m[0]+=l,l=1;s>=10;s/=10,l++);o!=l&&(e.e++,m[0]==a&&(m[0]=1));break}if(m[g]+=l,m[g]!=a)break;m[g--]=0,l=1}for(o=m.length;0===m[--o];m.pop());}e.e>B?e.c=e.e=null:e.e<P&&(e.c=[e.e=0])}return e}function q(e){var r,n=e.e;return null===n?e.toString():(r=N(e.c),r=n<=_||n>=D?E(r,n):A(r,n,"0"),e.s<0?"-"+r:r)}return M.clone=d,M.ROUND_UP=0,M.ROUND_DOWN=1,M.ROUND_CEIL=2,M.ROUND_FLOOR=3,M.ROUND_HALF_UP=4,M.ROUND_HALF_DOWN=5,M.ROUND_HALF_EVEN=6,M.ROUND_HALF_CEIL=7,M.ROUND_HALF_FLOOR=8,M.EUCLID=9,M.config=M.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(l+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],b(n,0,m,r),R=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],b(n,0,8,r),S=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],n&&n.pop?(b(n[0],-m,0,r),b(n[1],0,m,r),_=n[0],D=n[1]):(b(n,-m,m,r),_=-(D=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],n&&n.pop)b(n[0],-m,-1,r),b(n[1],1,m,r),P=n[0],B=n[1];else{if(b(n,-m,m,r),!n)throw Error(l+r+" cannot be zero: "+n);P=-(B=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if(n=e[r],n!==!!n)throw Error(l+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw L=!n,Error(l+"crypto unavailable");L=n}else L=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],b(n,0,9,r),x=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],b(n,0,m,r),U=n),e.hasOwnProperty(r="FORMAT")){if(n=e[r],"object"!=typeof n)throw Error(l+r+" not an object: "+n);C=n}if(e.hasOwnProperty(r="ALPHABET")){if(n=e[r],"string"!=typeof n||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(l+r+" invalid: "+n);I=n}}return{DECIMAL_PLACES:R,ROUNDING_MODE:S,EXPONENTIAL_AT:[_,D],RANGE:[P,B],CRYPTO:L,MODULO_MODE:x,POW_PRECISION:U,FORMAT:C,ALPHABET:I}},M.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!M.DEBUG)return!0;var r,n,t=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===o||-1===o)&&i>=-m&&i<=m&&i===f(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if(r=(i+1)%h,r<1&&(r+=h),String(t[0]).length==r){for(r=0;r<t.length;r++)if(n=t[r],n<0||n>=a||n!==f(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(l+"Invalid BigNumber: "+e)},M.maximum=M.max=function(){return k(arguments,i.lt)},M.minimum=M.min=function(){return k(arguments,i.gt)},M.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return f(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,s,c,a=0,g=[],w=new M(o);if(null==e?e=R:b(e,0,m),s=u(e/h),L)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(s*=2));a<s;)c=131072*n[a]+(n[a+1]>>>11),c>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[a]=t[0],n[a+1]=t[1]):(g.push(c%1e14),a+=2);a=s/2}else{if(!crypto.randomBytes)throw L=!1,Error(l+"crypto unavailable");for(n=crypto.randomBytes(s*=7);a<s;)c=281474976710656*(31&n[a])+1099511627776*n[a+1]+4294967296*n[a+2]+16777216*n[a+3]+(n[a+4]<<16)+(n[a+5]<<8)+n[a+6],c>=9e15?crypto.randomBytes(7).copy(n,a):(g.push(c%1e14),a+=7);a=s/7}if(!L)for(;a<s;)c=r(),c<9e15&&(g[a++]=c%1e14);for(s=g[--a],e%=h,s&&e&&(c=p[h-e],g[a]=f(s/c)*c);0===g[a];g.pop(),a--);if(a<0)g=[i=0];else{for(i=-1;0===g[0];g.splice(0,1),i-=h);for(a=1,c=g[0];c>=10;c/=10,a++);a<h&&(i-=h-a)}return w.e=i,w.c=g,w}}(),M.sum=function(){for(var e=1,r=arguments,n=new M(r[0]);e<r.length;)n=n.plus(r[e++]);return n},n=function(){var e="0123456789";function n(e,r,n,t){for(var i,o,s=[0],u=0,f=e.length;u<f;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(u++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(t,i,o,s,u){var f,l,c,a,h,g,p,w,m=t.indexOf("."),d=R,v=S;for(m>=0&&(a=U,U=0,t=t.replace(".",""),w=new M(i),g=w.pow(t.length-m),U=a,w.c=n(A(N(g.c),g.e,"0"),10,o,e),w.e=w.c.length),p=n(t,i,o,u?(f=I,e):(f=e,I)),c=a=p.length;0==p[--a];p.pop());if(!p[0])return f.charAt(0);if(m<0?--c:(g.c=p,g.e=c,g.s=s,g=r(g,w,d,v,o),p=g.c,h=g.r,c=g.e),l=c+d+1,m=p[l],a=o/2,h=h||l<0||null!=p[l+1],h=v<4?(null!=m||h)&&(0==v||v==(g.s<0?3:2)):m>a||m==a&&(4==v||h||6==v&&1&p[l-1]||v==(g.s<0?8:7)),l<1||!p[0])t=h?A(f.charAt(1),-d,f.charAt(0)):f.charAt(0);else{if(p.length=l,h)for(--o;++p[--l]>o;)p[l]=0,l||(++c,p=[1].concat(p));for(a=p.length;!p[--a];);for(m=0,t="";m<=a;t+=f.charAt(p[m++]));t=A(t,c,f.charAt(0))}return t}}(),r=function(){function e(e,r,n){var t,i,o,s,u=0,f=e.length,l=r%w,c=r/w|0;for(e=e.slice();f--;)o=e[f]%w,s=e[f]/w|0,t=c*o+s*l,i=l*o+t%w*w+u,u=(i/n|0)+(t/w|0)+c*s,e[f]=i%n;return u&&(e=[u].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,o,s,u){var l,c,g,p,w,m,d,N,O,b,y,E,A,R,S,_,D,P=t.s==i.s?1:-1,B=t.c,L=i.c;if(!B||!B[0]||!L||!L[0])return new M(t.s&&i.s&&(B?!L||B[0]!=L[0]:L)?B&&0==B[0]||!L?0*P:P/0:NaN);for(N=new M(P),O=N.c=[],c=t.e-i.e,P=o+c+1,u||(u=a,c=v(t.e/h)-v(i.e/h),P=P/h|0),g=0;L[g]==(B[g]||0);g++);if(L[g]>(B[g]||0)&&c--,P<0)O.push(1),p=!0;else{for(R=B.length,_=L.length,g=0,P+=2,w=f(u/(L[0]+1)),w>1&&(L=e(L,w,u),B=e(B,w,u),_=L.length,R=B.length),A=_,b=B.slice(0,_),y=b.length;y<_;b[y++]=0);D=L.slice(),D=[0].concat(D),S=L[0],L[1]>=u/2&&S++;do{if(w=0,l=r(L,b,_,y),l<0){if(E=b[0],_!=y&&(E=E*u+(b[1]||0)),w=f(E/S),w>1){w>=u&&(w=u-1),m=e(L,w,u),d=m.length,y=b.length;while(1==r(m,b,d,y))w--,n(m,_<d?D:L,d,u),d=m.length,l=1}else 0==w&&(l=w=1),m=L.slice(),d=m.length;if(d<y&&(m=[0].concat(m)),n(b,m,y,u),y=b.length,-1==l)while(r(L,b,_,y)<1)w++,n(b,_<y?D:L,y,u),y=b.length}else 0===l&&(w++,b=[0]);O[g++]=w,b[0]?b[y++]=B[A]||0:(b=[B[A]],y=1)}while((A++<R||null!=b[0])&&P--);p=null!=b[0],O[0]||O.splice(0,1)}if(u==a){for(g=1,P=O[0];P>=10;P/=10,g++);F(N,o+(N.e=g+c*h-1)+1,s,p)}else N.e=c,N.r=+p;return N}}(),t=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,s,u,f){var c,a=u?s:s.replace(i,"");if(t.test(a))o.s=isNaN(a)?null:a<0?-1:1;else{if(!u&&(a=a.replace(e,(function(e,r,n){return c="x"==(n=n.toLowerCase())?16:"b"==n?2:8,f&&f!=c?e:r})),f&&(c=f,a=a.replace(r,"$1").replace(n,"0.$1")),s!=a))return new M(a,c);if(M.DEBUG)throw Error(l+"Not a"+(f?" base "+f:"")+" number: "+s);o.s=null}o.c=o.e=null}}(),i.absoluteValue=i.abs=function(){var e=new M(this);return e.s<0&&(e.s=1),e},i.comparedTo=function(e,r){return O(this,new M(e,r))},i.decimalPlaces=i.dp=function(e,r){var n,t,i,o=this;if(null!=e)return b(e,0,m),null==r?r=S:b(r,0,8),F(new M(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-v(this.e/h))*h,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},i.dividedBy=i.div=function(e,n){return r(this,new M(e,n),R,S)},i.dividedToIntegerBy=i.idiv=function(e,n){return r(this,new M(e,n),0,1)},i.exponentiatedBy=i.pow=function(e,r){var n,t,i,s,c,a,g,p,w,m=this;if(e=new M(e),e.c&&!e.isInteger())throw Error(l+"Exponent not an integer: "+q(e));if(null!=r&&(r=new M(r)),a=e.e>14,!m.c||!m.c[0]||1==m.c[0]&&!m.e&&1==m.c.length||!e.c||!e.c[0])return w=new M(Math.pow(+q(m),a?2-y(e):+q(e))),r?w.mod(r):w;if(g=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new M(NaN);t=!g&&m.isInteger()&&r.isInteger(),t&&(m=m.mod(r))}else{if(e.e>9&&(m.e>0||m.e<-1||(0==m.e?m.c[0]>1||a&&m.c[1]>=24e7:m.c[0]<8e13||a&&m.c[0]<=9999975e7)))return s=m.s<0&&y(e)?-0:0,m.e>-1&&(s=1/s),new M(g?1/s:s);U&&(s=u(U/h+2))}for(a?(n=new M(.5),g&&(e.s=1),p=y(e)):(i=Math.abs(+q(e)),p=i%2),w=new M(o);;){if(p){if(w=w.times(m),!w.c)break;s?w.c.length>s&&(w.c.length=s):t&&(w=w.mod(r))}if(i){if(i=f(i/2),0===i)break;p=i%2}else if(e=e.times(n),F(e,e.e+1,1),e.e>14)p=y(e);else{if(i=+q(e),0===i)break;p=i%2}m=m.times(m),s?m.c&&m.c.length>s&&(m.c.length=s):t&&(m=m.mod(r))}return t?w:(g&&(w=o.div(w)),r?w.mod(r):s?F(w,U,S,c):w)},i.integerValue=function(e){var r=new M(this);return null==e?e=S:b(e,0,8),F(r,r.e+1,e)},i.isEqualTo=i.eq=function(e,r){return 0===O(this,new M(e,r))},i.isFinite=function(){return!!this.c},i.isGreaterThan=i.gt=function(e,r){return O(this,new M(e,r))>0},i.isGreaterThanOrEqualTo=i.gte=function(e,r){return 1===(r=O(this,new M(e,r)))||0===r},i.isInteger=function(){return!!this.c&&v(this.e/h)>this.c.length-2},i.isLessThan=i.lt=function(e,r){return O(this,new M(e,r))<0},i.isLessThanOrEqualTo=i.lte=function(e,r){return-1===(r=O(this,new M(e,r)))||0===r},i.isNaN=function(){return!this.s},i.isNegative=function(){return this.s<0},i.isPositive=function(){return this.s>0},i.isZero=function(){return!!this.c&&0==this.c[0]},i.minus=function(e,r){var n,t,i,o,s=this,u=s.s;if(e=new M(e,r),r=e.s,!u||!r)return new M(NaN);if(u!=r)return e.s=-r,s.plus(e);var f=s.e/h,l=e.e/h,c=s.c,g=e.c;if(!f||!l){if(!c||!g)return c?(e.s=-r,e):new M(g?s:NaN);if(!c[0]||!g[0])return g[0]?(e.s=-r,e):new M(c[0]?s:3==S?-0:0)}if(f=v(f),l=v(l),c=c.slice(),u=f-l){for((o=u<0)?(u=-u,i=c):(l=f,i=g),i.reverse(),r=u;r--;i.push(0));i.reverse()}else for(t=(o=(u=c.length)<(r=g.length))?u:r,u=r=0;r<t;r++)if(c[r]!=g[r]){o=c[r]<g[r];break}if(o&&(i=c,c=g,g=i,e.s=-e.s),r=(t=g.length)-(n=c.length),r>0)for(;r--;c[n++]=0);for(r=a-1;t>u;){if(c[--t]<g[t]){for(n=t;n&&!c[--n];c[n]=r);--c[n],c[t]+=a}c[t]-=g[t]}for(;0==c[0];c.splice(0,1),--l);return c[0]?G(e,c,l):(e.s=3==S?-1:1,e.c=[e.e=0],e)},i.modulo=i.mod=function(e,n){var t,i,o=this;return e=new M(e,n),!o.c||!e.s||e.c&&!e.c[0]?new M(NaN):!e.c||o.c&&!o.c[0]?new M(o):(9==x?(i=e.s,e.s=1,t=r(o,e,0,3),e.s=i,t.s*=i):t=r(o,e,0,x),e=o.minus(t.times(e)),e.c[0]||1!=x||(e.s=o.s),e)},i.multipliedBy=i.times=function(e,r){var n,t,i,o,s,u,f,l,c,g,p,m,d,N,O,b=this,y=b.c,E=(e=new M(e,r)).c;if(!y||!E||!y[0]||!E[0])return!b.s||!e.s||y&&!y[0]&&!E||E&&!E[0]&&!y?e.c=e.e=e.s=null:(e.s*=b.s,y&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=v(b.e/h)+v(e.e/h),e.s*=b.s,f=y.length,g=E.length,f<g&&(d=y,y=E,E=d,i=f,f=g,g=i),i=f+g,d=[];i--;d.push(0));for(N=a,O=w,i=g;--i>=0;){for(n=0,p=E[i]%O,m=E[i]/O|0,s=f,o=i+s;o>i;)l=y[--s]%O,c=y[s]/O|0,u=m*l+c*p,l=p*l+u%O*O+d[o]+n,n=(l/N|0)+(u/O|0)+m*c,d[o--]=l%N;d[o]=n}return n?++t:d.splice(0,1),G(e,d,t)},i.negated=function(){var e=new M(this);return e.s=-e.s||null,e},i.plus=function(e,r){var n,t=this,i=t.s;if(e=new M(e,r),r=e.s,!i||!r)return new M(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/h,s=e.e/h,u=t.c,f=e.c;if(!o||!s){if(!u||!f)return new M(i/0);if(!u[0]||!f[0])return f[0]?e:new M(u[0]?t:0*i)}if(o=v(o),s=v(s),u=u.slice(),i=o-s){for(i>0?(s=o,n=f):(i=-i,n=u),n.reverse();i--;n.push(0));n.reverse()}for(i=u.length,r=f.length,i-r<0&&(n=f,f=u,u=n,r=i),i=0;r;)i=(u[--r]=u[r]+f[r]+i)/a|0,u[r]=a===u[r]?0:u[r]%a;return i&&(u=[i].concat(u),++s),G(e,u,s)},i.precision=i.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return b(e,1,m),null==r?r=S:b(r,0,8),F(new M(o),e,r);if(!(n=o.c))return null;if(i=n.length-1,t=i*h+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},i.shiftedBy=function(e){return b(e,-g,g),this.times("1e"+e)},i.squareRoot=i.sqrt=function(){var e,n,t,i,o,s=this,u=s.c,f=s.s,l=s.e,c=R+4,a=new M("0.5");if(1!==f||!u||!u[0])return new M(!f||f<0&&(!u||u[0])?NaN:u?s:1/0);if(f=Math.sqrt(+q(s)),0==f||f==1/0?(n=N(u),(n.length+l)%2==0&&(n+="0"),f=Math.sqrt(+n),l=v((l+1)/2)-(l<0||l%2),f==1/0?n="5e"+l:(n=f.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),t=new M(n)):t=new M(f+""),t.c[0])for(l=t.e,f=l+c,f<3&&(f=0);;)if(o=t,t=a.times(o.plus(r(s,o,c,1))),N(o.c).slice(0,f)===(n=N(t.c)).slice(0,f)){if(t.e<l&&--f,n=n.slice(f-3,f+1),"9999"!=n&&(i||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(F(t,t.e+R+2,1),e=!t.times(t).eq(s));break}if(!i&&(F(o,o.e+R+2,0),o.times(o).eq(s))){t=o;break}c+=4,f+=4,i=1}return F(t,t.e+R+1,S,e)},i.toExponential=function(e,r){return null!=e&&(b(e,0,m),e++),T(this,e,r,1)},i.toFixed=function(e,r){return null!=e&&(b(e,0,m),e=e+this.e+1),T(this,e,r)},i.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=C;else if("object"!=typeof n)throw Error(l+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,s=t.split("."),u=+n.groupSize,f=+n.secondaryGroupSize,c=n.groupSeparator||"",a=s[0],h=s[1],g=i.s<0,p=g?a.slice(1):a,w=p.length;if(f&&(o=u,u=f,f=o,w-=o),u>0&&w>0){for(o=w%u||u,a=p.substr(0,o);o<w;o+=u)a+=c+p.substr(o,u);f>0&&(a+=c+p.slice(o)),g&&(a="-"+a)}t=h?a+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+t+(n.suffix||"")},i.toFraction=function(e){var n,t,i,s,u,f,c,a,g,w,m,d,v=this,O=v.c;if(null!=e&&(c=new M(e),!c.isInteger()&&(c.c||1!==c.s)||c.lt(o)))throw Error(l+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+q(c));if(!O)return new M(v);for(n=new M(o),g=t=new M(o),i=a=new M(o),d=N(O),u=n.e=d.length-v.e-1,n.c[0]=p[(f=u%h)<0?h+f:f],e=!e||c.comparedTo(n)>0?u>0?n:g:c,f=B,B=1/0,c=new M(d),a.c[0]=0;;){if(w=r(c,n,0,1),s=t.plus(w.times(i)),1==s.comparedTo(e))break;t=i,i=s,g=a.plus(w.times(s=g)),a=s,n=c.minus(w.times(s=n)),c=s}return s=r(e.minus(t),i,0,1),a=a.plus(s.times(g)),t=t.plus(s.times(i)),a.s=g.s=v.s,u*=2,m=r(g,i,u,S).minus(v).abs().comparedTo(r(a,t,u,S).minus(v).abs())<1?[g,i]:[a,t],B=f,m},i.toNumber=function(){return+q(this)},i.toPrecision=function(e,r){return null!=e&&b(e,1,m),T(this,e,r,2)},i.toString=function(e){var r,t=this,i=t.s,o=t.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=_||o>=D?E(N(t.c),o):A(N(t.c),o,"0"):10===e?(t=F(new M(t),R+o+1,S),r=A(N(t.c),t.e,"0")):(b(e,2,I.length,"Base"),r=n(A(N(t.c),o,"0"),10,e,i,!0)),i<0&&t.c[0]&&(r="-"+r)),r},i.valueOf=i.toJSON=function(){return q(this)},i._isBigNumber=!0,null!=e&&M.set(e),M}function v(e){var r=0|e;return e>0||e===r?r:r-1}function N(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=h-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function O(e,r){var n,t,i=e.c,o=r.c,s=e.s,u=r.s,f=e.e,l=r.e;if(!s||!u)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-u:s;if(s!=u)return s;if(n=s<0,t=f==l,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>l^n?1:-1;for(u=(f=i.length)<(l=o.length)?f:l,s=0;s<u;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return f==l?0:f>l^n?1:-1}function b(e,r,n,t){if(e<r||e>n||e!==f(e))throw Error(l+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function y(e){var r=e.c.length-1;return v(e.e/h)==r&&e.c[r]%2!=0}function E(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function A(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(t=e.length,++r>t){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}o=d(),o["default"]=o.BigNumber=o,t=function(){return o}.call(r,n,r,e),void 0===t||(e.exports=t)})()}}]);