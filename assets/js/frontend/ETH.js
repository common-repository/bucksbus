(()=>{"use strict";const e=window.React,t=window.wp.i18n,n=window.wc.wcBlocksRegistry,c=window.wp.htmlEntities,s=window.wc.wcSettings;!function(o){const a="ETH".toLowerCase().replace(".",""),i=(0,s.getSetting)(`bucksbus_${a}_data`,{}),w=(0,t.__)("Pay with ETH","woocommerce-gateway-bucksbus"),l=(0,c.decodeEntities)(i.title)||w,r=()=>(0,c.decodeEntities)(i.description||""),u={name:`bucksbus_${a}`,label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n}=t.components;return(0,e.createElement)(n,{text:l})}),null),content:(0,e.createElement)(r,null),edit:(0,e.createElement)(r,null),canMakePayment:()=>!0,ariaLabel:l,supports:{features:i.supports}};(0,n.registerPaymentMethod)(u)}()})();