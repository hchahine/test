(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{23875:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(85893),a=r(64121),o=(r(67294),r(89211)),s=r(26265),i=r(809),c=r.n(i),d=r(92447),l=r(88767),u=r(17242),p=r(37470),f=r(17801),x=r(40980),g=r(31516),k=r(44431),h=r.n(k),b={137:[{address:"0x7164F49cfA6152119009c600e0c3DA736F6cdC6f",vaultAddress:"0xCBd7b263460ad4807dEAdAd3858DE6654f082cA4",poolSite:"https://hermesdefi.io/",active:!0,stakeToken:{address:"0xcbd7b263460ad4807deadad3858de6654f082ca4",symbol:"godIRIS/WMATIC",decimals:18,logo:"/hermes-logo-1.png"},rewardToken:{address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",symbol:"WMATIC",decimals:18,logo:"/matic-logo.png"}},{address:"0x55C105e676BDe6cfaA95dd4A95760afCeAea44f4",vaultAddress:"0x75fd7fa818f0d970668dca795b7d79508776a5b1",poolSite:"https://kavian.finance",active:!0,stakeToken:{address:"0x75fd7fa818f0d970668dca795b7d79508776a5b1",symbol:"godKAVIANL2/WMATIC",decimals:18,logo:"/kavian-logo.png"},rewardToken:{address:"0x9a33bac266b02faff8fa566c8cb5da08820e28ba",symbol:"KAVIANL2",decimals:18,logo:"/kavian-logo.png"}},{address:"0xf4DE1F2773B94cd898eE67C193fE65D6Ff11B16A",vaultAddress:"0x483a58Fd4B023CAE2789cd1E1e5F6F52f93df2C7",poolSite:"https://gamma.polypulsar.farm/",active:!0,stakeToken:{address:"0x483a58Fd4B023CAE2789cd1E1e5F6F52f93df2C7",symbol:"godGBNT/WMATIC",decimals:18,logo:"/gbnt-logo.png"},rewardToken:{address:"0x8c9aaca6e712e2193acccbac1a024e09fb226e51",symbol:"GBNT",decimals:18,logo:"/gbnt-logo.png"}},{address:"0x4C9152B6e5Cb375e9Dc0Dcd4A8b9d2a87382CC8f",vaultAddress:"0xD4d9a3A705ace962F0813ff0E27c965E1b76357D",poolSite:"https://polywise.finance/",active:!0,stakeToken:{address:"0xD4d9a3A705ace962F0813ff0E27c965E1b76357D",symbol:"godWISE/USDC",decimals:18,logo:"/wise-logo.png"},rewardToken:{address:"0x4c19DdeebAF84cA3A255730295AD9d824D4Ff51f",symbol:"WISE",decimals:18,logo:"/wise-logo.png"}},{address:"0xBD47b8f61120b0A963d6e2cA14589901afFBD912",vaultAddress:"0x4806743912E5b4Aeb0426671d1F307FC3372642d",poolSite:"https://polywise.finance/",active:!0,stakeToken:{address:"0x4806743912E5b4Aeb0426671d1F307FC3372642d",symbol:"godWISE/WMATIC",decimals:18,logo:"/wise-logo.png"},rewardToken:{address:"0x4c19DdeebAF84cA3A255730295AD9d824D4Ff51f",symbol:"WISE",decimals:18,logo:"/wise-logo.png"}}]}[r(14734).rC].filter((function(e){return!e.isDisabled})),v=r(65384),m=r(77616),w=r(80792),y=r(92123),j=r(85114);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(){var e=function(){var e=(0,p.X_)(),t=(0,p.n9)(),r=(0,f.b_)(),n=(0,u.aQ)(),a=n.account,o=n.library;return function(){var n=(0,d.Z)(c().mark((function n(s){var i,d,l,u,p,f,x,g,k,b;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i=t(s.address),n.next=4,i.bonusEndBlock();case 4:return d=n.sent,s.rewardEndBlock=d.toString(),s.active=!!s.active&&d.sub(r||0).gt(0),n.next=9,i.totalStakeTokenBalance();case 9:return l=n.sent.toString(),s.totalStaked=m.bM(l,s.stakeToken.decimals),n.next=13,(0,y.tw)(s.rewardToken,o);case 13:if(s.rewardToken.price=n.sent,!s.active){n.next=30;break}return n.t0=v,n.next=18,i.rewardPerBlock();case 18:return n.t1=n.sent,n.t2=s.rewardToken.decimals,u=n.t0.formatUnits.call(n.t0,n.t1,n.t2),n.next=23,i.poolInfo();case 23:p=n.sent.allocPoint.toNumber(),f=new(h())(u).times(288e3).toNumber(),x=new(h())(1e3).div(p).times(f).toNumber(),s.apr=(0,j.E)(parseFloat(s.rewardToken.price||"0"),x,parseFloat(s.stakeToken.price||"0"),parseFloat(s.totalStaked||"0")),n.next=31;break;case 30:s.apr={yearlyAPR:0,weeklyAPR:0,dailyAPR:0};case 31:if(!a){n.next=49;break}return g=e(s.stakeToken.address),n.t3=v,n.next=36,i.pendingReward(a);case 36:return n.t4=n.sent,n.t5=s.rewardToken.decimals,s.rewardsEarned=n.t3.formatUnits.call(n.t3,n.t4,n.t5),n.next=41,i.userInfo(a);case 41:return k=n.sent,s.userTotalStaked=m.bM(k.amount,s.stakeToken.decimals),s.poolShare=new(h())(s.userTotalStaked).dividedBy(s.totalStaked).times(100).toString(),s.hasStaked=!k.amount.isZero(),n.next=47,g.allowance(a,s.address);case 47:b=n.sent,s.hasApprovedPool=!b.isZero();case 49:return n.abrupt("return",s);case 52:return n.prev=52,n.t6=n.catch(0),console.error(n.t6),n.abrupt("return",s);case 56:case"end":return n.stop()}}),n,null,[[0,52]])})));return function(e){return n.apply(this,arguments)}}()}(),t=(0,f.b_)(),r=(0,u.aQ)().account;return(0,l.useQueries)(b.map((function(n){return{enabled:!!t,queryKey:["vault-stake-pool",n.address,r],queryFn:function(){return e(n)}}})))}function E(){var e=(0,u.aQ)().account,t=(0,l.useQueryClient)(),r=(0,p.n9)(),n=(0,x.useToast)();return(0,l.useMutation)(function(){var n=(0,d.Z)(c().mark((function n(a){var o,s,i,d,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=a.id,s=a.amount,e){n.next=3;break}throw new Error("No connected account");case 3:return i=t.getQueryData(["vault-stake-pool",o,e]),d=r(i.address),n.next=7,d.deposit(m.vz(s,i.stakeToken.decimals));case 7:return l=n.sent,n.next=10,l.wait();case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),{onSuccess:function(r,n){var a=n.id,o=n.amount,s=t.getQueryData(["vault-stake-pool",a,e]);t.invalidateQueries(["vault-stake-pool",a,e]),g.ZP.event({category:"Deposits",action:"Depositing ".concat(s.stakeToken.symbol),value:parseInt(o,10),label:s.stakeToken.symbol})},onError:function(e){var t=e.data;console.error("[useDepositIntoPool][error] general error",{data:t}),n({title:"Error depositing token",description:null===t||void 0===t?void 0:t.message,status:"error",position:"top-right",isClosable:!0})}})}var C=r(28675),D=r(26729),F=r(88134),P=r(36618),W=r(56185),z=r(336),I=r(53850),B=r(94096),N=r(45754),O=r(13719),Q=r(48017),_=r(78482),M=r(18125),q=r(64115),Z=r(49444),K=r(36718),V=r(95954),X=function(e){var t=e.stakePool,r=function(){var e=(0,u.aQ)().account,t=(0,l.useQueryClient)(),r=(0,p.X_)(),n=(0,x.useToast)();return(0,l.useMutation)(function(){var n=(0,d.Z)(c().mark((function n(a){var o,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}throw new Error("No connected account");case 2:return o=t.getQueryData(["vault-stake-pool",a,e]),s=r(o.stakeToken.address),n.next=6,(0,w.BD)(s,o.address);case 6:return n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),{onSuccess:function(r){var n=t.getQueryData(["vault-stake-pool",r,e]);t.setQueryData(["vault-stake-pool",r,e],T(T({},n),{},{hasApprovedPool:!0}));var a=null===n||void 0===n?void 0:n.stakeToken.symbol;g.ZP.event({category:"Vault Staking Pool Approval",action:"Approving ".concat(a),label:a})},onError:function(e){var t=e.data;console.error("[useApprovePool][error] general error ",{data:t}),n({title:"Error approving token",description:null===t||void 0===t?void 0:t.message,status:"error",position:"top-right",isClosable:!0})}})}(),a=E(),o=E(),s=function(){var e=(0,u.aQ)().account,t=(0,l.useQueryClient)(),r=(0,p.n9)(),n=(0,x.useToast)();return(0,l.useMutation)(function(){var n=(0,d.Z)(c().mark((function n(a){var o,s,i,d,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=a.id,s=a.amount,e){n.next=3;break}throw new Error("No connected account");case 3:return i=t.getQueryData(["vault-stake-pool",o,e]),d=r(i.address),n.next=7,d.withdraw(m.vz(s,i.stakeToken.decimals));case 7:return l=n.sent,n.next=10,l.wait();case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),{onSuccess:function(r,n){var a=n.id,o=n.amount,s=t.getQueryData(["vault-stake-pool",a,e]);t.invalidateQueries(["vault-stake-pool",a,e]),g.ZP.event({category:"Withdrawals",action:"Withdrawing ".concat(s.stakeToken.symbol),value:parseInt(o,10),label:s.stakeToken.symbol})},onError:function(e){var t=e.data;console.error("[useStakeWithdraw][error] general error",{data:t}),n({title:"Error withdrawing stake token",description:null===t||void 0===t?void 0:t.message,status:"error",position:"top-right",isClosable:!0})}})}();return(0,n.jsxs)(Q.xu,{px:8,py:4,w:"19rem",bg:"accent.500",boxShadow:"rgb(179 142 89 / 65%) 0px 25px 50px -12px",bgGradient:"linear(to-b, primary.500, pink.300)",rounded:"3xl",color:"white",children:[(0,n.jsxs)(C.Ug,{align:"center",mb:5,spacing:2,children:[(0,n.jsx)(_.E,{border:"2px",borderColor:"white",bg:"white",rounded:"24px",src:t.rewardToken.logo,boxSize:12}),(0,n.jsx)(z.X,{fontSize:"3xl",children:t.rewardToken.symbol})]}),(0,n.jsx)(C.Ug,{mb:6,spacing:2,children:(0,n.jsx)(M.C,{textTransform:"capitalize",boxShadow:"md",px:2,rounded:"lg",colorScheme:"white",children:"Stake god"})}),(0,n.jsxs)(C.Kq,{mb:6,children:[(0,n.jsxs)(C.Kq,{direction:"row",justify:"space-between",children:[(0,n.jsx)(q.x,{fontWeight:"600",fontSize:"sm",children:"Pool Share"}),(0,n.jsx)(Q.xu,{display:"flex",alignItems:"center",children:(0,n.jsx)(q.x,{fontWeight:"700",fontSize:"sm",children:t.poolShare?"".concat((0,V.S1)(t.poolShare,!1,6),"%"):"N/A"})})]}),(0,n.jsxs)(C.Kq,{direction:"row",justify:"space-between",children:[(0,n.jsx)(q.x,{fontWeight:"600",fontSize:"sm",children:"Earn"}),(0,n.jsx)(q.x,{fontWeight:"700",fontSize:"sm",children:t.rewardToken.symbol})]})]}),(0,n.jsx)(C.Kq,{mb:8,children:(0,n.jsx)(K.h,{id:t.address,canCompound:!1,stakeToken:t.stakeToken,rewardToken:t.rewardToken,rewardsEarned:t.rewardsEarned,hasApprovedPool:t.hasApprovedPool,userTotalStaked:t.userTotalStaked,approve:r,deposit:o,withdraw:s,harvest:a})}),(0,n.jsxs)(Q.xu,{align:"left",children:[(0,n.jsx)(z.X,{mb:3,fontSize:"xl",children:"Details"}),(0,n.jsxs)(C.Kq,{mb:5,children:[(0,n.jsxs)(C.Kq,{direction:"row",justify:"space-between",children:[(0,n.jsx)(q.x,{fontWeight:"700",fontSize:"sm",children:"Deposit"}),(0,n.jsx)(Z.r,{href:"https://quickswap.exchange/#/swap/".concat(t.stakeToken.address),isExternal:!0,fontWeight:"700",fontSize:"sm",children:t.stakeToken.symbol})]}),(0,n.jsxs)(C.Kq,{direction:"row",justify:"space-between",children:[(0,n.jsx)(q.x,{fontWeight:"700",fontSize:"sm",children:"Total Liquidity"}),(0,n.jsx)(q.x,{fontWeight:"700",fontSize:"sm",children:t.totalStaked?(0,V.S1)(new k.BigNumber(t.totalStaked).toNumber()):"N/A"})]}),(0,n.jsxs)(C.Kq,{direction:"row",justify:"space-between",children:[(0,n.jsx)(q.x,{fontWeight:"700",fontSize:"sm",children:"Reward End Block"}),(0,n.jsx)(q.x,{fontWeight:"700",fontSize:"sm",children:t.rewardEndBlock})]})]}),(0,n.jsxs)(C.Kq,{direction:"row",justify:"space-between",children:[(0,n.jsx)(Z.r,{href:"https://polygonscan.com/address/".concat(t.address),textDecoration:"underline",fontWeight:"700",fontSize:"sm",children:"View on Matic"}),(0,n.jsx)(Z.r,{href:t.poolSite,textDecoration:"underline",fontWeight:"700",fontSize:"sm",children:"View Project"})]})]})]})},U=r(83182),R=function(){var e=(0,o.Z)(!1),t=(0,a.Z)(e,2),r=t[0],s=t[1],i=(0,o.Z)(!0),c=(0,a.Z)(i,2),d=c[0],l=c[1],u=A(),p=u.every((function(e){return"loading"===e.status})),f=u.filter((function(e){var t;return(null===(t=e.data)||void 0===t?void 0:t.active)===d})).filter((function(e){var t;return!r||(null===(t=e.data)||void 0===t?void 0:t.hasStaked)===r}));return(0,n.jsx)(U.L,{children:(0,n.jsxs)(C.Kq,{align:"center",spacing:10,py:10,children:[(0,n.jsxs)(C.Ug,{spacing:14,align:"center",justify:"center",children:[(0,n.jsxs)(D.NI,{w:"auto",display:"flex",alignItems:"center",children:[(0,n.jsx)(F.r,{isChecked:r,onChange:function(){return s()},id:"staked-only",mt:1,mb:0,mr:3}),(0,n.jsx)(P.l,{mr:0,mb:0,fontSize:"md",htmlFor:"staked-only",children:"Staked Only"})]}),(0,n.jsxs)(C.Ug,{justify:"center",divider:(0,n.jsx)(C.cX,{borderColor:"gray.200"}),children:[(0,n.jsx)(W.z,{onClick:function(){return l()},color:d?(0,x.useColorModeValue)("gray.800","gray.300"):(0,x.useColorModeValue)("gray.500","gray.500"),variant:"link",children:(0,n.jsx)(z.X,{fontSize:"xl",children:"Active"})}),(0,n.jsx)(W.z,{onClick:function(){return l()},color:d?(0,x.useColorModeValue)("gray.500","gray.500"):(0,x.useColorModeValue)("gray.800","gray.300"),variant:"link",children:(0,n.jsx)(z.X,{fontSize:"xl",children:"Inactive"})})]})]}),(0,n.jsx)(I.W,{align:"center",maxWidth:"container.lg",children:p?(0,n.jsx)(B.k,{mt:16,align:"center",justify:"center",children:(0,n.jsx)(N.$,{size:"xl"})}):(0,n.jsx)(O.E,{justify:"center",spacing:"40px",children:f.map((function(e){var t=e.data;return(0,n.jsx)(O.U,{children:(0,n.jsx)(X,{stakePool:t})},t.address)}))})})]})})}},2346:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/vault-stake",function(){return r(23875)}])}},function(e){e.O(0,[445,866,423,51,472,41,182,854,774,888,179],(function(){return t=2346,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=vault-stake-7eb6a550e684636f1b7e.js.map