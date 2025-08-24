(()=>{"use strict";var e,r={95:(e,r,t)=>{var a=t(848),i=t(540),s=t(338),n=t(581);const o=(0,t(730).defineMessages)({ADITYA_CAR_ZONE:{id:"app.name",defaultMessage:"Aditya Car Zone"},HOME:{id:"nav.home",defaultMessage:"Home"},ABOUT_US:{id:"nav.about",defaultMessage:"About Us"},DRIVING_SCHOOL:{id:"nav.driving-school",defaultMessage:"Driving School"},CARBON_CLEANING:{id:"nav.carbon-cleaning",defaultMessage:"Carbon Cleaning"},SERVICES:{id:"nav.services",defaultMessage:"Services"},PACKAGES:{id:"nav.packages",defaultMessage:"Packages"},GALLERY:{id:"nav.gallery",defaultMessage:"Gallery"},CONTACT_US:{id:"nav.contact",defaultMessage:"Contact Us"},VALIDATING_ACCESS:{id:"access.validating",defaultMessage:"Validating Access..."},VALIDATING_ACCESS_MESSAGE:{id:"access.validating.message",defaultMessage:"Please wait while we verify your access credentials."},ACCESS_DENIED:{id:"access.denied",defaultMessage:"Access Denied"},ACCESS_DENIED_DESCRIPTION:{id:"access.denied.description",defaultMessage:"You dont have permission to access this application. Please check your access key and try again."},ACCESS_DENIED_MESSAGE:{id:"access.denied.message",defaultMessage:"You dont have permission to access this application. Please check your access key and try again."},RETRY_ACCESS:{id:"access.retry",defaultMessage:"Retry Access"},SOMETHING_WENT_WRONG:{id:"error.something.wrong",defaultMessage:"Something went wrong"},UNEXPECTED_ERROR:{id:"error.unexpected",defaultMessage:"An unexpected error occurred. Please try again."},TRY_AGAIN:{id:"error.try.again",defaultMessage:"Try Again"},PHONE_NUMBER:{id:"infobar.phone",defaultMessage:"+91 9849199569"},EMAIL:{id:"infobar.email",defaultMessage:"adityacarzone@gmail.com"},OPENING_HOURS:{id:"infobar.opening-hours",defaultMessage:"Mon - Sat: 9:00 - 20:00"}}),{FormattedMessage:d}=t(730),c=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`,l=n.Ay.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`,g=n.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,h=n.Ay.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`,f=n.Ay.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,m=({children:e})=>{const[r,t]=(0,i.useState)(null),[s,n]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{(async()=>{try{const e="u34kkfe993943kkjerufj3343334h",r="u34kkfe993943kkjerufj3343334h";await new Promise(e=>setTimeout(e,1e3)),t(e===r)}catch(e){t(!1)}finally{n(!1)}})()},[]),s?(0,a.jsxs)(c,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(g,{children:(0,a.jsx)(d,{...o.VALIDATING_ACCESS})}),(0,a.jsx)(h,{children:(0,a.jsx)(d,{...o.VALIDATING_ACCESS_MESSAGE})})]}):r?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsxs)(c,{children:[(0,a.jsx)(l,{children:"🚫"}),(0,a.jsx)(g,{children:(0,a.jsx)(d,{...o.ACCESS_DENIED})}),(0,a.jsx)(h,{children:(0,a.jsx)(d,{...o.ACCESS_DENIED_DESCRIPTION})})]})},u=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,x=()=>(0,a.jsx)(u,{children:(0,a.jsx)("h3",{children:"Aditya Car Zone"})});var p=t(442),E=t(27),y=t(197);const A=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-bg-tertiary);
  height: 40px;

  .info-bar-item {
    color: var(--color-text-default);
  }
`,b=()=>{const e=[{name:(r=(0,p.A)()).formatMessage(o.PHONE_NUMBER),Icon:E.Cab},{name:r.formatMessage(o.EMAIL),Icon:E.maD},{name:r.formatMessage(o.OPENING_HOURS),Icon:y.w_X}];var r;return(0,a.jsx)(A,{"data-testid":"section-infobar",children:e.map((e,r)=>(0,a.jsxs)("div",{className:"info-bar-item","data-testid":`section-infobar-item-${r+1}`,children:[(0,a.jsx)(e.Icon,{size:16}),(0,a.jsx)("span",{children:e.name})]},e.name))})},S=n.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`,{IntlProvider:v}=t(730),{FormattedMessage:j}=t(730),C=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`,M=n.Ay.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`,_=n.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,N=n.Ay.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`,I=n.Ay.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;class D extends i.Component{constructor(e){super(e),this.handleRetry=()=>{this.setState({hasError:!1,isAccessDenied:!1}),window.location.reload()},this.renderAccessDenied=()=>(0,a.jsxs)(C,{children:[(0,a.jsx)(M,{children:"🚫"}),(0,a.jsx)(_,{children:(0,a.jsx)(j,{...o.ACCESS_DENIED})}),(0,a.jsx)(N,{children:(0,a.jsx)(j,{...o.ACCESS_DENIED_MESSAGE})}),(0,a.jsx)(I,{onClick:this.handleRetry,children:(0,a.jsx)(j,{...o.RETRY_ACCESS})})]}),this.renderError=()=>(0,a.jsxs)(C,{children:[(0,a.jsx)(M,{children:"⚠️"}),(0,a.jsx)(_,{children:(0,a.jsx)(j,{...o.SOMETHING_WENT_WRONG})}),(0,a.jsx)(N,{children:this.state.error&&this.state.error.message?this.state.error.message:(0,a.jsx)(j,{...o.UNEXPECTED_ERROR})}),(0,a.jsx)(I,{onClick:this.handleRetry,children:(0,a.jsx)(j,{...o.TRY_AGAIN})})]}),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,r){}render(){return this.state.hasError?this.state.isAccessDenied?this.renderAccessDenied():this.renderError():this.props.children}}const O=D,w=n.DU`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  :root {
    --color-bg-default: #fff;
    --color-bg-tertiary: #000;

    --color-text-default: #fff;
  }
`,k=document.getElementById("root");if(!k)throw new Error("Failed to find the root element");(0,s.H)(k).render((0,a.jsx)(i.StrictMode,{children:(0,a.jsxs)(O,{children:[(0,a.jsx)(w,{}),(0,a.jsx)(()=>(0,a.jsx)(v,{locale:"en",defaultLocale:"en",children:(0,a.jsx)(m,{children:(0,a.jsxs)(S,{children:[(0,a.jsx)(b,{}),(0,a.jsx)(x,{})]})})}),{})]})}))}},t={};function a(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}};return r[e](s,s.exports,a),s.exports}a.m=r,e=[],a.O=(r,t,i,s)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,i,s]=e[l],o=!0,d=0;d<t.length;d++)(!1&s||n>=s)&&Object.keys(a.O).every(e=>a.O[e](t[d]))?t.splice(d--,1):(o=!1,s<n&&(n=s));if(o){e.splice(l--,1);var c=i();void 0!==c&&(r=c)}}return r}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[t,i,s]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var i,s,[n,o,d]=t,c=0;if(n.some(r=>0!==e[r])){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(d)var l=d(a)}for(r&&r(t);c<n.length;c++)s=n[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},t=self.webpackChunkaditya_car_zone=self.webpackChunkaditya_car_zone||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.nc=void 0;var i=a.O(void 0,[4],()=>a(95));i=a.O(i)})();
//# sourceMappingURL=main.0c92eadd04eb266c37c1.js.map