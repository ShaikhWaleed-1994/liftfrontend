(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[30212],{30212:function(e,r,t){"use strict";t.d(r,{d:function(){return u}});var l=t(31041),a=t(29609);class n{isNationalNumber(e){if(null==e||void 0===e||""===e)return!0;if(10!==e.length)return!1;let r;r=e;let t=new Array(10);for(let u=0;u<r.length;u++)t[u]=+r[u];let l=0;for(let u=0;u<t.length-1;u++)if(u%2!=0)l+=t[u];else{let e=(2*t[u]).toString(),r=new Array(e.length),a=0;for(let t=0;t<r.length;t++)r[t]=+e[t],a+=r[t];l+=a}let a=l.toString(),n=+a[a.length-1];return 0===n&&0===t[9]||10-n===t[9]}}class u{static PasswordComplexityValidator(e,r,t,l,a,n){return u=>{const i=u.value;if(null==i||0===i.length)return null;let s=null;return e&&i&&!/[0-9]/.test(i)&&(s=s||{},s.requireDigit=!0),r&&i&&!/[A-Z]/.test(i)&&(s=s||{},s.requireUppercase=!0),t&&i&&!/[a-z]/.test(i)&&(s=s||{},s.requireLowercase=!0),l&&i&&i.length<l&&(s=s||{},s.requiredLength=!0),a&&i&&/^[0-9a-zA-Z]+$/.test(i)&&(s=s||{},s.requireNonAlphanumeric=!0),i.length<n&&(s=s||{}),null!==s?{passwordComplexity:{value:s}}:null}}static NationalIdValidator(){return e=>!1===(new n).isNationalNumber(e.value)?{nationalId:!0}:null}static isIntegerValidator(){return e=>void 0===e.value||null==e.value?null:u.InIntegerCheckerInvalid(e.value)||(e.value||0).toString().length>10?{integerNumber:!0}:null}static InIntegerCheckerInvalid(e){if(!e)return;let r=parseFloat(e)==parseInt(e)?+e:NaN;return r!=r}static RequiredValidator(){return e=>null==e.value||""===e.value.toString().trim()?{required:!0}:l.kI.required(e)}static RequiredValidatorEditor(){return e=>null==e.value||""===e.value.replace(/(<([^>]+)>)/gi,"").toString().trim()?{required:!0}:l.kI.required(e)}static EqualValidator(e){return r=>{const t=e;if(!t)return null;const l=r.value,a=t.value;return l||a?l!==a?{validateEqual:!0}:null:(t.errors&&delete t.errors.validateEqual,t.errors&&!Object.keys(t.errors).length&&t.setErrors(null),null)}}static GreaterThanValidator(e){return r=>{const t=e;if(!t)return null;const l=r.value,a=t.value;return l&&a?l<=a?{GreaterThanValidator:!0}:null:(t.errors&&delete t.errors.GreaterThanValidator,t.errors&&!Object.keys(t.errors).length&&t.setErrors(null),null)}}static NotEqualValidator(e){return r=>{const t=e;if(!t)return null;const l=r.value,a=t.value;return l||a?l===a?{validateNotEqual:!0}:null:(t.errors&&delete t.errors.validateNotEqual,t.errors&&!Object.keys(t.errors).length&&t.setErrors(null),null)}}static RegExValidator(e){return r=>e.test(r.value)?null:{forbiddenReg:{value:r.value}}}static MobileValidator(){return e=>null==e.value||void 0===e.value||""===e.value||new RegExp("^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$").test(e.value)?null:{invalidMobile:{value:e.value}}}static UrlValidator(){return e=>{const r=new RegExp("(https?://(?:www.|(?!www))[a-zA-Z0-9] [a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9] [a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})","gmis").test(e.value);return e.value&&""!=e.value?r?null:{invalidUrl:{value:e.value}}:null}}static EmailValidator(){return e=>null==e.value||void 0===e.value||""===e.value||new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}").test(e.value)?null:{invalidEmail:{value:e.value}}}static InvalidCharacterValidator(){return e=>{let r=Array.from("!$%&*<>[]{]\u2018\u201c;/?+|^#"),t="";return null!=e.value&&r.forEach(r=>{String(e.value).indexOf(r)>=0&&(t+=r||{})}),t.length>0?{InvalidCharacter:t}:null}}static UniqueValidator(e,r){return t=>new Promise((l,a)=>{r.call(e,t.value).subscribe(e=>{l(!0===e?{notUnique:"true"}:null)})})}static UniqueValidatorExpectCurrent(e,r,t){return l=>new Promise((a,n)=>{r.call(e,l.value,t).subscribe(e=>{a(!0===e?{notUnique:"true"}:null)})})}static DateAfterValidator(e){return r=>{if(!e||!r.value)return null;let t,n=r.value;if(e instanceof l.TO){if(t=e.value,!n&&!t)return e.errors&&delete e.errors.validateEqual,e.errors&&!Object.keys(e.errors).length&&e.setErrors(null),null}else t=e;if(n instanceof Date&&t instanceof Date){if(n=new Date(n.toDateString()),t=new Date(t.toDateString()),n<=t)return{validateDateAfter:!0}}else if((0,a.isMoment)(n)&&(0,a.isMoment)(t)){if(a(t).isAfter(n,"day"))return{validateDateAfter:!0}}else if(n<=t)return{validateDateAfter:!0};return null}}}}}]);