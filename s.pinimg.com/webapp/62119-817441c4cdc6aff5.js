"use strict";(self.legacyJsonp=self.legacyJsonp||[]).push([[62119],{775232:function(e,n,t){t.d(n,{Z:function(){return r}});function r(e,n){throw Error(null!=n?n:"Unexpected value in assertNever: ".concat(JSON.stringify(e)))}},993294:function(e,n,t){t.d(n,{Z:function(){return Z},G:function(){return Q}});var r=t(506933),a=t.n(r),o=t(909904),i=t(378626);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(n){var r,a,o;r=e,a=n,o=t[n],(a=function(e){var n=function(e,n){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=f(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==f(n)?n:n+""}(a))in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d={vDASHHEVCSLCONTROL:"V_DASH_HEVC_SL_CONTROL",vHLSHEVC2SEC:"V_HLS_HEVC_2_SEC",vHLSHEVCSLCONTROL:"V_HLS_HEVC_SL_CONTROL",vHLSSINGLEFILECMAFEXP:"V_HLS_SINGLE_FILE_CMAF_EXP",vHLSSINGLEFILECONTROL:"V_HLS_SINGLE_FILE_CONTROL",vHLSSINGLEFILETSEXP:"V_HLS_SINGLE_FILE_TS_EXP",vHLSSLCONTROL:"V_HLS_SL_CONTROL",vHLSV3:"V_HLSV3",vHLSV3EXP:"V_HLSV3_EXP",vHLSV3MOBILE:"V_HLSV3_MOBILE",vHLSV3WEB:"V_HLSV3_WEB",vHLSV4:"V_HLSV4",vLOWBITRATEEXPHLSHEVCCONTROL:"V_LOW_BITRATE_EXP_HLS_HEVC_CONTROL",vLOWBITRATEEXPHLSHEVCLOB:"V_LOW_BITRATE_EXP_HLS_HEVC_LOB",vLOWBITRATEEXPHLSHEVCLQS:"V_LOW_BITRATE_EXP_HLS_HEVC_LQS"},p=/(\d\d0P)(\d\d0K)/,y=/QVBR(8|10)/,g=/(EXP\d?|ADSHQ|AVC|DASH|MANI|HIGHQUAL|HEVC|HLS|H265|H264|720P?|MP4|ENABLED|CONTROL|PROD|T\d|Q?VBR\d*|AUTOABR|MEDIACONVERT|QUALITY|REARRANGED|REMHIGHRES|VISIONULAR|480$|640$|V2$|\dSEC$|\d\d0P\d\d0K$)/g,m=/^v/,h=function(e){var n;return null!=(n=d[e])?n:e.replace(g,"_$1").replace(p,"$1_$2").replace(y,"QVBR_$1").replace("ADSHQ","ADS_HQ").replace("HIGHQUAL","HIGH_QUAL").replace("REMHIGHRES","REM_HIGH_RES").replace(m,"V")},v=/[A-Z]/g,S=/^_/,b=function(e){return e.replace(v,function(e){return"_".concat(e.toLowerCase())}).replace(S,"")},I=["actionOptions","feedbackText","selectedItem","savedInfo","undoCallbackProps"],k=["boardId","localPinId","showFeedback","showFeedbackOverlay","sectionId","subTitle","viewType","viewParameter"],L=function(e,n){if(k.includes(e))return e;switch(e){case"entityId":return"id";case"__id":return a()(n.node_id,"node_id is missing. Please only select the __id field on objects which have an id field."),"node_id";default:return b(e)}},C=function(e){return"StoryPinPage"===e||"StoryPinImageBlock"===e},_=function(e,n,t){if(C(t)){if("images"===e)return"image";else if("imagesAdjusted"===e)return"image_adjusted"}if("PinTagChipImagesPerSpec"===t&&"image"===e)return"images";if("VideoDetail"===n)return h(e);if(I.includes(e))return e;switch(e){case"reactionCountsData":return"reaction_counts";case"videoDataV2":return"video";case"formattedCloseupDescription":return"formatted_description";case"annotationsWithLinksArray":return"annotations_with_links";default:return b(e)}},A=function(e,n){switch(e){case"reactionType":return"string"==typeof n?Number(n):n;case"campaignId":case"pinPromotionId":return"number"==typeof n?String(n):n;default:return n}},E=function(e,n,t){if("Video"===n&&"duration"===e){var r;return(null==t?void 0:t.duration)!=null?t.duration:null==(r=Object.values((null==t?void 0:t.video_list)||{}).find(function(e){return(null==e?void 0:e.duration)!=null}))?void 0:r.duration}return"__typename"===e?null!=n?n:function(e){if(!e)return null;if("string"==typeof e.type)return(0,i.dF)(e.type);if("number"==typeof e.block_type){var n=e.block_type.toString();return n in H?H[n]:null}return null}(t):A(e,null==t?void 0:t[L(e,t)])},O=function(e){var n=e.untypedInput,t=e.concreteType;if(!n)return null;switch(a()("object"===f(n),"legacy data must be an object"),t){case"AnnotationsWithLinks":return Object.entries(n).map(function(e){var n=u(e,2),t=(n[0],n[1]);return{name:t.name,url:t.url}});case"MessageReactions":if(Array.isArray(n)&&n.length>0)return n.flatMap(function(e){return Object.keys(e).map(function(n){return{user_id:n,reaction_text:e[n]}})});return null;case"ReactionCountModel":return Object.entries(n).map(function(e){var n=u(e,2);return{reaction_type:n[0],reaction_count:n[1]}});case"PinThroughProperties":case"ThroughProperties":case"TrackingParamsMap":return Object.entries(n).map(function(e){var n=u(e,2);return{key:n[0],data:n[1]}});case"DescriptionSpecDetail":if(Array.isArray(n)){var r=[];return n.forEach(function(e){if(e)for(var n=Object.entries(e),t=0;t<n.length;t++){var a=n[t];r.push({key:a[0],value:a[1]})}}),r}return Object.entries(n).map(function(e){var n=u(e,2);return{key:n[0],value:n[1]}});default:if(Array.isArray(n))return n;return Object.entries(n).map(function(e){var n=u(e,2);return{key:n[0],value:n[1]}})}},P=function(e){var n=e.args,t=e.name,r=n.find(function(e){return e.name===t});return r&&"string"==typeof r.value?r.value:null},D=function(e,n,t){var r,o=t.args,i=t.name,l=t.plural;if("PinTagChipImagesPerSpec"===n&&"image"===i)return null==e||null==(r=e.images)?void 0:r["750x"];var u=null==e?void 0:e[_(i,t.concreteType,n)];if(!u)return u;if("collaboratingUsers"===i){var s=null==e?void 0:e.collaborating_users;return null==s?null:{kind:"user_collaborating_users_connection_container",connection:{edges:s.map(function(e){return{node:e}})}}}var d=P({args:null!=o?o:[],name:"spec"});if(d){if(a()("object"===f(u),"value must be an object"),C(n)){var p=u.dominant_color,y=u.images;if(!y)return y;a()("object"===f(y),"images must be an object");var g=y["orig"===d?"originals":d];return g&&p?c(c({},g),{},{dominant_color:p}):g}return l&&Array.isArray(u)?u.map(function(e){return e[d]}).filter(function(e){return null!=e}):u[d]}return u},T={HeadingBlock:"StoryPinHeadingBlock",IngredientBlock:"StoryPinIngredientBlock",InstantContentURLNavigateAction:"InstantContentActionUrlNavigate",InstantContentHeaderBlock:"InstantContentHeader",InstantContentParagraphBlock:"InstantContentParagraph",InstantContentTextBlock:"InstantContentText",InstantContentHeadingBlock:"InstantContentHeading",InstantContentImageBlock:"InstantContentImage",InstantContentVideoBlock:"InstantContentVideo",InstantContentTableBlock:"InstantContentTable",InstantContentGroupBlock:"InstantContentGroup",InstantContentOrderedListBlock:"InstantContentOrderedList",InstantContentUnorderedListBlock:"InstantContentUnorderedList",InstantContentSectionBlock:"InstantContentSection",InstantContentSeparatorBlock:"InstantContentSeparator",InstantContentUserBlock:"InstantContentUser",InstantContentWebBlock:"InstantContentWeb",InstantContentPromotedWebBlock:"InstantContentPromotedWeb",LinkBlock:"StoryPinLinkBlock",ParagraphBlock:"StoryPinParagraphBlock",SupplyBlock:"StoryPinSupplyBlock",TextBlock:"StoryPinTextBlock",DescriptionString:"FormattedDescriptionParagraphComponent",DescriptionHeader:"FormattedDescriptionHeaderComponent",DescriptionPoints:"FormattedDescriptionPointsComponent",DescriptionStringBold:"FormattedDescriptionBoldComponent",DescriptionTable:"FormattedDescriptionTableComponent",DescriptionSpecs:"FormattedDescriptionSpecsComponent",RichPinProductMetadata:"RichProductMetadata",ConversationMessage:"Message"},R={tempmessage:"message"},F=["article","board","pin","story"],w=function(e,n){var t,r;return(null!=(t=T[e])?t:e).toLowerCase()===(null!=(r=R[n])?r:n)},H={0:"StoryPinParagraphBlock",1:"StoryPinHeadingBlock",2:"StoryPinImageBlock",3:"StoryPinVideoBlock",4:"StoryPinLinkBlock",5:"StoryPinIngredientBlock",6:"StoryPinSupplyBlock",7:"StoryPinListBlock",8:"StoryPinKeyValueBlock",9:"StoryPinTextBlock",11:"StoryPinMusicBlock",12:"StoryPinMentionStickerBlock",13:"StoryPinProductStickerBlock",14:"StoryPinStaticStickerBlock",15:"StoryPinAnimatedStickerBlock",16:"StoryPinCommentReplyBlock",17:"StoryPinVirtualTryOnMakeupStickerBlock",18:"StoryPinAdBlock",19:"StoryPinGenericInteractiveStickerBlock"},B=/_/g,x=function(e){if("schema"in e&&"string"==typeof e.schema)return e.schema.toLowerCase();if("string"==typeof e.type)return e.type.replace(B,"").toLowerCase();if("number"==typeof e.block_type){var n=e.block_type.toString();return n in H?H[n].toLowerCase():void 0}},j=t(942886),V=t(136438),N=function(e,n){var t=e.condition,r=e.passingValue;return n[t]===r},U=t(48416),M=t(992114);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Q=Symbol("inlineFragmentSpread"),W=function e(n){var t=n.conditionContext,r=n.fragmentName,o=n.mutableOutput,i=n.parentType,l=n.selections,c=n.legacyData,u=n.paginationInfo,s=n.refetchInfo,f=n.getDataFromRedux;l.forEach(function(n){switch(n.kind){case"ScalarField":var l=n.alias,d=n.name;o[null!=l?l:d]=E(d,i,c);break;case"LinkedField":var p=n.alias,y=n.name,g=n.concreteType,m=n.plural,h=n.selections,v=null!=p?p:y,S=D(c,i,n);if(null==S){o[v]=S;return}if(m){var b=O({untypedInput:S,concreteType:g}),I=o[v];a()(!I||Array.isArray(I),"plural data must be an array"),o[v]=null==b?void 0:b.filter(Boolean).map(function(n,a){var o,i=null!=(o=null==I?void 0:I[a])?o:{};return e({conditionContext:t,fragmentName:r,mutableOutput:i,parentType:g,selections:h,legacyData:n,refetchInfo:s,paginationInfo:u,getDataFromRedux:f}),i})}else{a()("object"===G(S),"Value for ".concat(y," must be an object").concat(g?" with type ".concat(g):"",", but a ").concat(G(S)," is given"));var k,L=null!=(k=o[v])?k:{};o[v]=L,e({conditionContext:t,fragmentName:r,mutableOutput:L,parentType:g,selections:h,legacyData:S,refetchInfo:s,paginationInfo:u,getDataFromRedux:f})}break;case"InlineFragment":var C,_,A=n.abstractKey,P=n.type,T=n.selections;if(a()(null!=P&&null===A,"We only support using inline fragment to refine to concrete types for now. Contact @jackhsu or @robertbalicki"),null==c)break;var R=c;"schema"in(C=R)&&"string"==typeof C.schema&&F.includes(C.schema)&&(R=null!=(_=f(R.id,R.schema))?_:c);var H=x(R);null!=H&&w(P,H)&&e({conditionContext:t,fragmentName:r,mutableOutput:o,parentType:P,selections:T,legacyData:R,paginationInfo:u,refetchInfo:s,getDataFromRedux:f});break;case"Condition":var B=n.selections;N(n,t)&&e({conditionContext:t,fragmentName:r,mutableOutput:o,parentType:i,selections:B,legacyData:c,paginationInfo:u,refetchInfo:s,getDataFromRedux:f});break;case"FragmentSpread":(0,V.I9)(o,{kind:"LegacyData",singularLegacyData:c,refetchInfo:s,paginationInfo:u});break;case"ClientExtension":e({conditionContext:t,fragmentName:r,mutableOutput:o,parentType:i,selections:n.selections,legacyData:c,paginationInfo:u,refetchInfo:s,getDataFromRedux:f});break;case"InlineDataFragmentSpread":var j={},U=n.selections,M=n.name;e({conditionContext:t,fragmentName:M,mutableOutput:j,parentType:i,selections:U,legacyData:c,paginationInfo:u,refetchInfo:s,getDataFromRedux:f}),o[Q]||(o[Q]={}),o[Q][M]=j;break;case"Defer":case"Stream":case"ActorChange":case"FlightField":case"ModuleImport":case"RelayResolver":case"RequiredField":case"ClientEdge":throw Error("The selection type '".concat(n.kind,"' is not supported yet. Contact @jackhsu or @robertbalicki"));default:throw Error("Unexpected selection type")}})},X=new Set;function Z(e){var n,t=e.conditionContext,r=e.fragment,i=e.legacyData,l=e.paginationInfo,c=e.refetchInfo,u=e.stableReferencesExperimentStatus,s=e.getDataFromRedux,f=(0,o.getFragment)(r);try{n=function(e){var n=e.conditionContext,t=e.fragment,r=e.legacyData,o=e.paginationInfo,i=e.refetchInfo,l=e.getDataFromRedux;if(null==t.abstractKey){var c=null!=r?x(r):null;null!=c&&a()(w(t.type,c),"fragment data type '".concat(t.type,"' does not match legacy data ")+"type '".concat(c,"'. See ")+"http://pinch.pinadmin.com/fragment-data-type-does-not-match-legacy-data-type.")}var u={};return W({conditionContext:n,fragmentName:t.name,mutableOutput:u,parentType:t.type,selections:t.selections,legacyData:r,paginationInfo:o,refetchInfo:i,getDataFromRedux:l}),u}({conditionContext:t,fragment:f,legacyData:i,paginationInfo:l,refetchInfo:c,getDataFromRedux:s})}catch(e){throw X.has(f.name)||(X.add(f.name),(0,M.nP)("autoLegacyAdapter.erroredReadResults",{sampleRate:1,tags:{fragmentName:f.name,rootId:i.id,rootType:i.type,url:window.location.href,isAuth:t.isAuth}})),e}var d=i.id;if(!(null!=u&&u.shouldCalculateStableReferences)||!d)return n;var p=(0,U._0)(f,i.id),y=(0,j.Z)({cacheKey:p,data:n,fragment:f});return null!=u&&u.shouldUseStableReferences?y:n}},989043:function(e,n,t){t.d(n,{Z:function(){return function e(n,t){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={};return!function n(t,u,s,d){var p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=c(e.reduce(function(e,n){return"InlineFragment"===n.kind?e[0].push(n):e[1].push(n),e},[[],[]]),2),r=t[0],a=t[1];if(1===r.length){var o=c(f(a),2),i=o[0];if(0===o[1].length){var u=c(f(r[0].selections),2),s=u[0],d=u[1],p=[].concat(l(i),l(s));return 0===p.length?{kind:"Uncategorized"}:{kind:"InlineFragmentWithTypename",typenameAliases:p,selections:d,concreteType:r[0].type,remainingPathCount:n}}}else if(1===e.length&&(null==(b=e[0])?void 0:b.kind)==="Condition"){var y=e[0];if(!y||"Condition"!==y.kind)throw Error("Error on @skip/@include directive");return{kind:"OnlyConditionWrapper",selections:y.selections,remainingPathCount:n}}else if(1===e.length&&"LinkedField"===e[0].kind){var g=e[0],m=null!=(I=g.concreteType)?I:null;if(g.plural&&1!==n)return{kind:"Uncategorized"};if(null==m)return{kind:"OnlyLinkedFieldAndTypename",selections:g.selections,name:g.name,concreteTypeAndAliases:null,remainingPathCount:null==n?null:n-1};var h=c(f(g.selections),2),v=h[0],S=h[1];if(1===n){var b,I,k,L,C=null!=(k=g.alias)?k:g.name,_=function(e){if(0===e.length||e.length>2||e.some(function(e){return"LinkedField"!==e.kind}))throw Error("Unexpected selections");var n=e.reduce(function(e,n){if("pageInfo"===n.name){if(null!==e.pageInfoSelection)throw Error("Expected only one pageInfo selection");e.pageInfoSelection=n}else{if(null!==e.edgeSelection)throw Error("Expected only one edge selection");e.edgeSelection=n}return e},{pageInfoSelection:null,edgeSelection:null});if(n.edgeSelection&&!n.edgeSelection.selections.find(function(e){return"node"===e.name}))throw Error("Expected to find a node field inside of edges");return{pageInfoSelection:n.pageInfoSelection,edgeSelection:n.edgeSelection}}(S),A=_.pageInfoSelection,E=_.edgeSelection;if(null===E)throw Error("No edges found in connection field");var O=null!=(L=E.alias)?L:E.name,P=g.concreteType;if(null==P&&v.length>0)throw Error("No concrete type found in connection field, so we cannot have __typename");var D=null!=P?{concreteType:P,typenameAliases:v}:null;return{kind:"ConnectionFieldAndTypename",selections:E.selections.filter(function(e){return"ScalarField"!==e.kind||"cursor"!==e.name}),pageInfoSelection:A,nameOrAliasOfEdgesField:O,nameOrAliasOfConnectionField:C,concreteTypeAndAliases:D}}return{kind:"OnlyLinkedFieldAndTypename",selections:S,name:g.name,concreteTypeAndAliases:{concreteType:m,typenameAliases:v},remainingPathCount:null==n?null:n-1}}else if(e.length>0&&e.every(function(e){return"FragmentSpread"===e.kind}))return{kind:"OnlyFragmentSpread"};return{kind:"Uncategorized"}}(t,d);switch(p.kind){case"OnlyConditionWrapper":n(p.selections,u,s,p.remainingPathCount);break;case"InlineFragmentWithTypename":var y=p.concreteType,g=p.typenameAliases,m=p.selections,h=p.remainingPathCount;g.forEach(function(e){return u[e]=y}),n(m,u,s,h);break;case"OnlyFragmentSpread":(0,a.I9)(u,s);break;case"OnlyLinkedFieldAndTypename":var v=p.name,S=p.selections,b=p.concreteTypeAndAliases,I=p.remainingPathCount,k={};if(u[v]=k,b&&b.typenameAliases.length>0){var L,C=b.concreteType,_=i(b.typenameAliases);try{for(_.s();!(L=_.n()).done;)k[L.value]=C}catch(e){_.e(e)}finally{_.f()}}n(S,k,s,I);break;case"ConnectionFieldAndTypename":var A=p.nameOrAliasOfEdgesField,E=p.nameOrAliasOfConnectionField,O=p.pageInfoSelection,P=p.selections,D=p.concreteTypeAndAliases;if("PaginationLegacyData"!==s.kind)throw Error("Error, expected a PaginationLegacyData kind for this query");var T=(F={},w=A,H=s.paginationLegacyData.map(function(n){return e(P,{kind:"LegacyData",refetchInfo:s.refetchInfo,paginationInfo:s.paginationInfo,singularLegacyData:n})}),(R=function(e,n){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=o(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(w,"string"),(w="symbol"==o(R)?R:R+"")in F)?Object.defineProperty(F,w,{value:H,enumerable:!0,configurable:!0,writable:!0}):F[w]=H,F);if(O&&s.paginationInfo&&(T[null!=(B=O.alias)?B:O.name]=null),null!=D){var R,F,w,H,B,x,j=D.concreteType,V=i(D.typenameAliases);try{for(V.s();!(x=V.n()).done;)T[x.value]=j}catch(e){V.e(e)}finally{V.f()}}u[E]=T;break;case"Uncategorized":throw Error("The query passed to useLazyLoadQueryOrLegacy contained unsupported/uncategorized elements. Please simplify the query.");default:(0,r.Z)(p,"Unexpected category")}}(n,s,t,u),s}}});var r=t(775232),a=t(136438);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=u(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw o}}}}function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,n)||u(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){if(e){if("string"==typeof e)return s(e,n);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function f(e){return e.reduce(function(e,n){if("ScalarField"===n.kind&&"__typename"===n.name){var t;e[0].push(null!=(t=n.alias)?t:n.name)}else e[1].push(n);return e},[[],[]])}},509936:function(e,n,t){t.d(n,{g:function(){return a},o:function(){return o}});var r=t(136438);function a(e){if(Array.isArray(e)){var n=e[0];if(null==n)return{kind:"PluralLegacy",data:[],paginationInfo:null,refetchInfo:null};if(null!=n.__fragments)return{kind:"GraphQL",data:e};var t=(0,r.G5)(n);if(null!=t)return{kind:"PluralLegacy",data:e.map(function(e){var n=(0,r.Be)(e);if("LegacyData"===n.kind)return n.singularLegacyData;throw Error("Unexpected plural object")}),paginationInfo:t.paginationInfo,refetchInfo:t.refetchInfo};throw Error("Expected either __fragments or [legacyDataSymbol]")}var a=(0,r.G5)(e);if(null!=a&&"LegacyData"===a.kind)return{kind:"SingularLegacy",data:a.singularLegacyData,refetchInfo:a.refetchInfo,paginationInfo:a.paginationInfo};if(e.__fragments)return{kind:"GraphQL",data:e};if("graphqlRef"===e.type)return{kind:"GraphQL",data:e.data};if("deprecated"===e.type){var o=e.data;return Array.isArray(o)?{kind:"PluralLegacy",data:o,refetchInfo:null,paginationInfo:null}:{kind:"SingularLegacy",data:o,refetchInfo:null,paginationInfo:null}}if(null!=a&&"PaginationLegacyData"===a.kind)return{kind:"PaginationLegacyData",paginationLegacyData:a.paginationLegacyData,refetchInfo:a.refetchInfo,paginationInfo:a.paginationInfo};throw Error("Invalid value")}function o(e){return a(e).kind}},942886:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(993294),a=t(136438);function o(e,n,t){if(null===t)return null===n?n:t;if(void 0===t)return void 0===n?n:t;if(Array.isArray(t)){if(!Array.isArray(n))return t;if(t.length!==n.length)return t;for(var r=!0,a=0;a<t.length;a+=1){var l=o(e,n[a],t[a]);l!==n[a]?r=!1:t[a]=l}return r?n:t}switch(e.kind){case"ScalarField":return n===t?n:t;case"LinkedField":case"InlineDataFragmentSpread":if(null==n)return t;return i({fragmentSelections:e.selections,oldSourceObject:n,newSourceObject:t});default:throw Error("Unexpected case.")}}function i(e){for(var n=e.fragmentSelections,t=e.oldSourceObject,i=e.newSourceObject,l=!0,c=[n];c.length>0;){var u=c.pop();if(!u)break;for(var s=0;s<u.length;s+=1){var f=u[s];switch(null==f?void 0:f.kind){case"LinkedField":case"ScalarField":var d=f.alias,p=f.name,y=null!=d?d:p,g=t[y],m=o(f,g,i[y]);m!==g?l=!1:i[y]=m;break;case"FragmentSpread":var h=(0,a.G5)(i);h&&(0,a.I9)(t,h);break;case"InlineDataFragmentSpread":var v,S,b=f.name,I=null==t||null==(v=t[r.G])?void 0:v[b];o(f,I,null==i||null==(S=i[r.G])?void 0:S[b])!==I&&(l=!1);break;case"ClientExtension":case"Condition":c.push(f.selections);break;case"InlineFragment":var k=f.type;i.__typename===k&&(t.__typename===i.__typename?c.push(f.selections):l=!1);break;case"Defer":case"Stream":case"ActorChange":case"FlightField":case"ModuleImport":case"RelayResolver":case"RequiredField":case"ClientEdge":case void 0:throw Error("The selection type '".concat(null==f?void 0:f.kind,"' is not supported yet"));default:throw Error("Unexpected case")}}}return l?t:i}var l=t(48416);function c(e){var n=e.fragment,t=e.cacheKey,r=e.data,a=(0,l.aL)(t),o=r;if(null!=a){var c=i({oldSourceObject:a.data,newSourceObject:r,fragmentSelections:n.selections});c!==a.data&&(0,l.ax)(t,{count:a.count,data:c}),o=c}else(0,l.ax)(t,{count:0,data:r});return(0,l.U5)(t),setTimeout(function(){return(0,l.H8)(t)},3e4),o}},136438:function(e,n,t){t.d(n,{Be:function(){return o},G5:function(){return a},I9:function(){return i}});var r=Symbol("legacyData");function a(e){return e[r]}function o(e){return e[r]}function i(e,n){return e[r]=n,e}},378626:function(e,n,t){t.d(n,{O7:function(){return o},dF:function(){return s},dX:function(){return c},pm:function(){return l},tx:function(){return i}});var r=t(174646),a=t(538645),o=function(){return{isAuth:!!(0,r.B)().isAuthenticated,isDesktop:(0,a.HG)()}},i={" $fragmentSpreads":void 0," $fragmentType":void 0};function l(e){var n=e.isAuthParam,t=e.isDesktop,r=e.authDesktopQuery,a=e.authMobileQuery,o=e.unauthDesktopQuery,i=e.unauthMobileQuery;return n?t?r:a:t?o:i}function c(e){var n=e.isAuthParam,t=e.isDesktop,r=e.authDesktopFragment,a=e.authMobileFragment,o=e.unauthDesktopFragment,i=e.unauthMobileFragment;return n?t?r:a:t?o:i}var u=/(?:^|_)([a-z])/g;function s(e){return e.replace(u,function(e,n){return n.toUpperCase()})}},48416:function(e,n,t){t.d(n,{H8:function(){return u},Ly:function(){return l},U5:function(){return c},_0:function(){return d},aL:function(){return s},ax:function(){return f},w3:function(){return p}});var r=t(967312),a=t(174646),o=t(992114),i=new Map;function l(e){var n=(0,r.F)(),t=(0,a.B)().isAuthenticated;if(!e)return{shouldCalculateStableReferences:!1,shouldUseStableReferences:!1};switch(n.checkExperiment(t?"auth_web_gql_stable_refs":"unauth_web_gql_stable_refs").group){case"control":default:return{shouldCalculateStableReferences:!1,shouldUseStableReferences:!1};case"enabled":return{shouldCalculateStableReferences:!0,shouldUseStableReferences:!0};case"enabled_only_calculation":return{shouldCalculateStableReferences:!0,shouldUseStableReferences:!1}}}function c(e){var n=i.get(e);n&&i.set(e,{count:n.count+1,data:n.data})}function u(e){var n=i.get(e);if(!n){var t=e.split("/")[0];throw(0,o.nP)("autoLegacyAdapter.stableReferences.cacheItemMissing",{sampleRate:1,tags:{fragmentName:t}}),Error("Item with key ".concat(e," not found in cache"))}if(1===n.count)return void i.delete(e);i.set(e,{count:n.count-1,data:n.data})}function s(e){return i.get(e)}function f(e,n){i.set(e,n)}function d(e,n){return"".concat(e.name,"/").concat(n)}function p(e,n,t){return n?{key:d(e,n),data:t}:null}},962119:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(57855),a=t(909904),o=t(775232),i=t(258712),l=t(509936),c=t(993294),u=t(989043),s=t(942886),f=t(378626),d=t(48416),p=t(992114),y=function(e){var n=e.items,t=e.shouldCalculateStableReferences;return(0,i.useEffect)(function(){if(n&&t)return n.forEach(function(e){var n=e.key,t=e.data;if(!(0,d.aL)(n)){var r=n.split("/")[0];(0,p.nP)("autoLegacyAdapter.stableReferences.useRetainWhileMounted.cacheItemMissing",{sampleRate:1,tags:{fragmentName:r}}),(0,d.ax)(n,{count:0,data:t})}(0,d.U5)(n)}),function(){n.forEach(function(e){var n=e.key;return(0,d.H8)(n)})}},[null==n?void 0:n.map(function(e){return e.key}).join(","),t])},g=function(e,n,t,r,o){var l,p=(0,d.Ly)(t),g=(0,f.O7)(),m=(0,i.useMemo)(function(){if((null==n?void 0:n.kind)==="SingularLegacy"&&r(n)){var t=n.data,i=n.refetchInfo,l=n.paginationInfo,f=(0,c.Z)({conditionContext:g,fragment:e,legacyData:t,paginationInfo:l,refetchInfo:i,stableReferencesExperimentStatus:p,getDataFromRedux:o});return{itemsToRetain:[{legacyData:t,graphQLShapedData:f}],autoLegacyAdapterData:[f]}}if((null==n?void 0:n.kind)==="PluralLegacy"){var y=n.data,m=n.refetchInfo,h=n.paginationInfo,v=[],S=[];return y.forEach(function(n){var t=(0,c.Z)({conditionContext:g,fragment:e,legacyData:n,paginationInfo:h,refetchInfo:m,stableReferencesExperimentStatus:p,getDataFromRedux:o});null==v||v.push(t),null==S||S.push({legacyData:n,graphQLShapedData:t})}),{itemsToRetain:S,autoLegacyAdapterData:v}}if((null==n?void 0:n.kind)==="PaginationLegacyData"){var b,I,k,L,C,_=null!=(b=null==e||null==(I=e.metadata)||null==(k=I.connection)||null==(L=k[0])||null==(C=L.path)?void 0:C.length)?b:null,A=(0,u.Z)(e.selections,n,_),E=A;if("Query"===e.type&&p.shouldCalculateStableReferences){var O=(0,d._0)(e,a.ROOT_ID);E=(0,s.Z)({cacheKey:O,data:A,fragment:e})}return{itemsToRetain:[{graphQLShapedData:E,legacyData:{id:"Query"===e.type?a.ROOT_ID:null}}],autoLegacyAdapterData:[A]}}return null},[(null==n?void 0:n.kind)==="PaginationLegacyData"?n.paginationLegacyData:null==n?void 0:n.data]);return y({items:null==m||null==(l=m.itemsToRetain)?void 0:l.map(function(n){var t=n.legacyData,r=n.graphQLShapedData,o=t&&"id"in t&&"string"==typeof t.id?t.id:null;return(0,d.w3)(e,"Query"===e.type?a.ROOT_ID:o,r)}).filter(function(e){return null!=e}),shouldCalculateStableReferences:p.shouldCalculateStableReferences}),null==m?void 0:m.autoLegacyAdapterData},m=t(545007),h=function(e,n){var t,c,u,s,f,d=function(e,n){var t,r,o,c=(o=null==(r=(0,i.useContext)(m.ET))||null==(t=r.store)?void 0:t.getState(),{getDataFromRedux:function(e,n){var t,r,a,i;return"pin"===n?null==o||null==(t=o.pins)?void 0:t[e]:"story"===n?null==o||null==(r=o.stories)?void 0:r[e]:"board"===n?null==o||null==(a=o.boards)?void 0:a[e]:"article"===n?null==o||null==(i=o.articles)?void 0:i[e]:null}}).getDataFromRedux,u=n?(0,l.g)(n):null,s=(null==u?void 0:u.kind)!=="GraphQL",f=(0,a.getFragment)(e);if(!s)return{dataKey:u,isUsingALA:s,actualFragment:f,autoLegacyAdapterData:null};var d=g(f,u,s,function(){return!0},c);return null===n||null==u?null:{dataKey:u,isUsingALA:s,actualFragment:f,autoLegacyAdapterData:d}}(e,n);if(!function(e,n){var t=(0,i.useRef)(null);if(null!=e){if(null==t.current)t.current=e;else if(t.current!==e)throw Error("".concat(n(),": reference type mismatch: expected ").concat(t.current,", but received ").concat(e,"."))}}(null==d?void 0:d.dataKey.kind,function(){return(0,a.getFragment)(e).name}),null==d)return null;var p=d.dataKey,y=d.actualFragment,h=d.autoLegacyAdapterData;switch(p.kind){case"SingularLegacy":return null==h?void 0:h[0];case"PluralLegacy":return h;case"GraphQL":return(0,r.useFragment)(e,p.data);case"PaginationLegacyData":if(Array.isArray(n))throw Error("Unexpected Plural fragment");if(null!=(null!=(t=null==y||null==(c=y.metadata)||null==(u=c.connection)||null==(s=u[0])||null==(f=s.path)?void 0:f.length)?t:null))throw Error("Unexpected fragment containing a @connection directive. You should read this fragment with usePaginationFragmentOrLegacy instead.");return null==h?void 0:h[0];default:return(0,o.Z)(p,"Unexpected case")}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/62119-817441c4cdc6aff5.js.map