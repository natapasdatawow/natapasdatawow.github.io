"use strict";(self.webpackChunknextjs_template=self.webpackChunknextjs_template||[]).push([[583],{"./node_modules/@mui/material/Checkbox/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Checkbox_Checkbox});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js"),useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSwitchBaseUtilityClass(slot){return(0,generateUtilityClass.Ay)("PrivateSwitchBase",slot)}(0,generateUtilityClasses.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],SwitchBaseRoot=(0,styled.Ay)(ButtonBase.A)((({ownerState})=>(0,esm_extends.A)({padding:9,borderRadius:"50%"},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12}))),SwitchBaseInput=(0,styled.Ay)("input",{shouldForwardProp:rootShouldForwardProp.A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),internal_SwitchBase=react.forwardRef((function SwitchBase(props,ref){const{autoFocus,checked:checkedProp,checkedIcon,className,defaultChecked,disabled:disabledProp,disableFocusRipple=!1,edge=!1,icon,id,inputProps,inputRef,name,onBlur,onChange,onFocus,readOnly,required=!1,tabIndex,type,value}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),[checked,setCheckedState]=(0,useControlled.A)({controlled:checkedProp,default:Boolean(defaultChecked),name:"SwitchBase",state:"checked"}),muiFormControl=(0,useFormControl.A)();let disabled=disabledProp;muiFormControl&&void 0===disabled&&(disabled=muiFormControl.disabled);const hasLabelFor="checkbox"===type||"radio"===type,ownerState=(0,esm_extends.A)({},props,{checked,disabled,disableFocusRipple,edge}),classes=(ownerState=>{const{classes,checked,disabled,edge}=ownerState,slots={root:["root",checked&&"checked",disabled&&"disabled",edge&&`edge${(0,capitalize.A)(edge)}`],input:["input"]};return(0,composeClasses.A)(slots,getSwitchBaseUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SwitchBaseRoot,(0,esm_extends.A)({component:"span",className:(0,clsx.A)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,tabIndex:null,role:void 0,onFocus:event=>{onFocus&&onFocus(event),muiFormControl&&muiFormControl.onFocus&&muiFormControl.onFocus(event)},onBlur:event=>{onBlur&&onBlur(event),muiFormControl&&muiFormControl.onBlur&&muiFormControl.onBlur(event)},ownerState,ref},other,{children:[(0,jsx_runtime.jsx)(SwitchBaseInput,(0,esm_extends.A)({autoFocus,checked:checkedProp,defaultChecked,className:classes.input,disabled,id:hasLabelFor?id:void 0,name,onChange:event=>{if(event.nativeEvent.defaultPrevented)return;const newChecked=event.target.checked;setCheckedState(newChecked),onChange&&onChange(event,newChecked)},readOnly,ref:inputRef,required,ownerState,tabIndex,type},"checkbox"===type&&void 0===value?{}:{value},inputProps)),checked?checkedIcon:icon]}))}));var createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");const CheckBoxOutlineBlank=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),CheckBox=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),IndeterminateCheckBox=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js");function getCheckboxUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiCheckbox",slot)}const Checkbox_checkboxClasses=(0,generateUtilityClasses.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Checkbox_excluded=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],CheckboxRoot=(0,styled.Ay)(internal_SwitchBase,{shouldForwardProp:prop=>(0,rootShouldForwardProp.A)(prop)||"classes"===prop,name:"MuiCheckbox",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.indeterminate&&styles.indeterminate,styles[`size${(0,capitalize.A)(ownerState.size)}`],"default"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`]]}})((({theme,ownerState})=>(0,esm_extends.A)({color:(theme.vars||theme).palette.text.secondary},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${"default"===ownerState.color?theme.vars.palette.action.activeChannel:theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)("default"===ownerState.color?theme.palette.action.active:theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==ownerState.color&&{[`&.${Checkbox_checkboxClasses.checked}, &.${Checkbox_checkboxClasses.indeterminate}`]:{color:(theme.vars||theme).palette[ownerState.color].main},[`&.${Checkbox_checkboxClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled}}))),defaultCheckedIcon=(0,jsx_runtime.jsx)(CheckBox,{}),defaultIcon=(0,jsx_runtime.jsx)(CheckBoxOutlineBlank,{}),defaultIndeterminateIcon=(0,jsx_runtime.jsx)(IndeterminateCheckBox,{}),Checkbox_Checkbox=react.forwardRef((function Checkbox(inProps,ref){var _icon$props$fontSize,_indeterminateIcon$pr;const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiCheckbox"}),{checkedIcon=defaultCheckedIcon,color="primary",icon:iconProp=defaultIcon,indeterminate=!1,indeterminateIcon:indeterminateIconProp=defaultIndeterminateIcon,inputProps,size="medium",className}=props,other=(0,objectWithoutPropertiesLoose.A)(props,Checkbox_excluded),icon=indeterminate?indeterminateIconProp:iconProp,indeterminateIcon=indeterminate?indeterminateIconProp:checkedIcon,ownerState=(0,esm_extends.A)({},props,{color,indeterminate,size}),classes=(ownerState=>{const{classes,indeterminate,color,size}=ownerState,slots={root:["root",indeterminate&&"indeterminate",`color${(0,capitalize.A)(color)}`,`size${(0,capitalize.A)(size)}`]},composedClasses=(0,composeClasses.A)(slots,getCheckboxUtilityClass,classes);return(0,esm_extends.A)({},classes,composedClasses)})(ownerState);return(0,jsx_runtime.jsx)(CheckboxRoot,(0,esm_extends.A)({type:"checkbox",inputProps:(0,esm_extends.A)({"data-indeterminate":indeterminate},inputProps),icon:react.cloneElement(icon,{fontSize:null!=(_icon$props$fontSize=icon.props.fontSize)?_icon$props$fontSize:size}),checkedIcon:react.cloneElement(indeterminateIcon,{fontSize:null!=(_indeterminateIcon$pr=indeterminateIcon.props.fontSize)?_indeterminateIcon$pr:size}),ownerState,ref,className:(0,clsx.A)(classes.root,className)},other,{classes}))}))},"./node_modules/@mui/material/FormControlLabel/FormControlLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormControlLabel_FormControlLabel});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getFormControlLabelUtilityClasses(slot){return(0,generateUtilityClass.Ay)("MuiFormControlLabel",slot)}const FormControlLabel_formControlLabelClasses=(0,generateUtilityClasses.A)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var formControlState=__webpack_require__("./node_modules/@mui/material/FormControl/formControlState.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],FormControlLabelRoot=(0,styled.Ay)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${FormControlLabel_formControlLabelClasses.label}`]:styles.label},styles.root,styles[`labelPlacement${(0,capitalize.A)(ownerState.labelPlacement)}`]]}})((({theme,ownerState})=>(0,esm_extends.A)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${FormControlLabel_formControlLabelClasses.disabled}`]:{cursor:"default"}},"start"===ownerState.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===ownerState.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===ownerState.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${FormControlLabel_formControlLabelClasses.label}`]:{[`&.${FormControlLabel_formControlLabelClasses.disabled}`]:{color:(theme.vars||theme).palette.text.disabled}}}))),AsteriskComponent=(0,styled.Ay)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(props,styles)=>styles.asterisk})((({theme})=>({[`&.${FormControlLabel_formControlLabelClasses.error}`]:{color:(theme.vars||theme).palette.error.main}}))),FormControlLabel_FormControlLabel=react.forwardRef((function FormControlLabel(inProps,ref){var _ref,_slotProps$typography;const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiFormControlLabel"}),{className,componentsProps={},control,disabled:disabledProp,disableTypography,label:labelProp,labelPlacement="end",required:requiredProp,slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),muiFormControl=(0,useFormControl.A)(),disabled=null!=(_ref=null!=disabledProp?disabledProp:control.props.disabled)?_ref:null==muiFormControl?void 0:muiFormControl.disabled,required=null!=requiredProp?requiredProp:control.props.required,controlProps={disabled,required};["checked","name","onChange","value","inputRef"].forEach((key=>{void 0===control.props[key]&&void 0!==props[key]&&(controlProps[key]=props[key])}));const fcs=(0,formControlState.A)({props,muiFormControl,states:["error"]}),ownerState=(0,esm_extends.A)({},props,{disabled,labelPlacement,required,error:fcs.error}),classes=(ownerState=>{const{classes,disabled,labelPlacement,error,required}=ownerState,slots={root:["root",disabled&&"disabled",`labelPlacement${(0,capitalize.A)(labelPlacement)}`,error&&"error",required&&"required"],label:["label",disabled&&"disabled"],asterisk:["asterisk",error&&"error"]};return(0,composeClasses.A)(slots,getFormControlLabelUtilityClasses,classes)})(ownerState),typographySlotProps=null!=(_slotProps$typography=slotProps.typography)?_slotProps$typography:componentsProps.typography;let label=labelProp;return null==label||label.type===Typography.A||disableTypography||(label=(0,jsx_runtime.jsx)(Typography.A,(0,esm_extends.A)({component:"span"},typographySlotProps,{className:(0,clsx.A)(classes.label,null==typographySlotProps?void 0:typographySlotProps.className),children:label}))),(0,jsx_runtime.jsxs)(FormControlLabelRoot,(0,esm_extends.A)({className:(0,clsx.A)(classes.root,className),ownerState,ref},other,{children:[react.cloneElement(control,controlProps),required?(0,jsx_runtime.jsxs)(Stack.A,{display:"block",children:[label,(0,jsx_runtime.jsxs)(AsteriskComponent,{ownerState,"aria-hidden":!0,className:classes.asterisk,children:[" ","*"]})]}):label]}))}))},"./node_modules/@mui/material/FormGroup/FormGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormGroup_FormGroup});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getFormGroupUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiFormGroup",slot)}(0,generateUtilityClasses.A)("MuiFormGroup",["root","row","error"]);var useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),formControlState=__webpack_require__("./node_modules/@mui/material/FormControl/formControlState.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["className","row"],FormGroupRoot=(0,styled.Ay)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.row&&styles.row]}})((({ownerState})=>(0,esm_extends.A)({display:"flex",flexDirection:"column",flexWrap:"wrap"},ownerState.row&&{flexDirection:"row"}))),FormGroup_FormGroup=react.forwardRef((function FormGroup(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiFormGroup"}),{className,row=!1}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),muiFormControl=(0,useFormControl.A)(),fcs=(0,formControlState.A)({props,muiFormControl,states:["error"]}),ownerState=(0,esm_extends.A)({},props,{row,error:fcs.error}),classes=(ownerState=>{const{classes,row,error}=ownerState,slots={root:["root",row&&"row",error&&"error"]};return(0,composeClasses.A)(slots,getFormGroupUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(FormGroupRoot,(0,esm_extends.A)({className:(0,clsx.A)(classes.root,className),ownerState,ref},other))}))},"./node_modules/@mui/material/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Stack_Stack});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge/deepmerge.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js");const _excluded=["ownerState"],_excluded2=["variants"],_excluded3=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function shouldForwardProp(prop){return"ownerState"!==prop&&"theme"!==prop&&"sx"!==prop&&"as"!==prop}const systemDefaultTheme=(0,createTheme.A)(),lowercaseFirstLetter=string=>string?string.charAt(0).toLowerCase()+string.slice(1):string;function resolveTheme({defaultTheme,theme,themeId}){return function isEmpty(obj){return 0===Object.keys(obj).length}(theme)?defaultTheme:theme[themeId]||theme}function defaultOverridesResolver(slot){return slot?(props,styles)=>styles[slot]:null}function processStyleArg(callableStyle,_ref){let{ownerState}=_ref,props=(0,objectWithoutPropertiesLoose.A)(_ref,_excluded);const resolvedStylesArg="function"==typeof callableStyle?callableStyle((0,esm_extends.A)({ownerState},props)):callableStyle;if(Array.isArray(resolvedStylesArg))return resolvedStylesArg.flatMap((resolvedStyle=>processStyleArg(resolvedStyle,(0,esm_extends.A)({ownerState},props))));if(resolvedStylesArg&&"object"==typeof resolvedStylesArg&&Array.isArray(resolvedStylesArg.variants)){const{variants=[]}=resolvedStylesArg;let result=(0,objectWithoutPropertiesLoose.A)(resolvedStylesArg,_excluded2);return variants.forEach((variant=>{let isMatch=!0;"function"==typeof variant.props?isMatch=variant.props((0,esm_extends.A)({ownerState},props,ownerState)):Object.keys(variant.props).forEach((key=>{(null==ownerState?void 0:ownerState[key])!==variant.props[key]&&props[key]!==variant.props[key]&&(isMatch=!1)})),isMatch&&(Array.isArray(result)||(result=[result]),result.push("function"==typeof variant.style?variant.style((0,esm_extends.A)({ownerState},props,ownerState)):variant.style))})),result}return resolvedStylesArg}const styled=function createStyled(input={}){const{themeId,defaultTheme=systemDefaultTheme,rootShouldForwardProp=shouldForwardProp,slotShouldForwardProp=shouldForwardProp}=input,systemSx=props=>(0,styleFunctionSx.A)((0,esm_extends.A)({},props,{theme:resolveTheme((0,esm_extends.A)({},props,{defaultTheme,themeId}))}));return systemSx.__mui_systemSx=!0,(tag,inputOptions={})=>{(0,styled_engine.internal_processStyles)(tag,(styles=>styles.filter((style=>!(null!=style&&style.__mui_systemSx)))));const{name:componentName,slot:componentSlot,skipVariantsResolver:inputSkipVariantsResolver,skipSx:inputSkipSx,overridesResolver=defaultOverridesResolver(lowercaseFirstLetter(componentSlot))}=inputOptions,options=(0,objectWithoutPropertiesLoose.A)(inputOptions,_excluded3),skipVariantsResolver=void 0!==inputSkipVariantsResolver?inputSkipVariantsResolver:componentSlot&&"Root"!==componentSlot&&"root"!==componentSlot||!1,skipSx=inputSkipSx||!1;let shouldForwardPropOption=shouldForwardProp;"Root"===componentSlot||"root"===componentSlot?shouldForwardPropOption=rootShouldForwardProp:componentSlot?shouldForwardPropOption=slotShouldForwardProp:function isStringTag(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96}(tag)&&(shouldForwardPropOption=void 0);const defaultStyledResolver=(0,styled_engine.default)(tag,(0,esm_extends.A)({shouldForwardProp:shouldForwardPropOption,label:undefined},options)),transformStyleArg=stylesArg=>"function"==typeof stylesArg&&stylesArg.__emotion_real!==stylesArg||(0,deepmerge.Q)(stylesArg)?props=>processStyleArg(stylesArg,(0,esm_extends.A)({},props,{theme:resolveTheme({theme:props.theme,defaultTheme,themeId})})):stylesArg,muiStyledResolver=(styleArg,...expressions)=>{let transformedStyleArg=transformStyleArg(styleArg);const expressionsWithDefaultTheme=expressions?expressions.map(transformStyleArg):[];componentName&&overridesResolver&&expressionsWithDefaultTheme.push((props=>{const theme=resolveTheme((0,esm_extends.A)({},props,{defaultTheme,themeId}));if(!theme.components||!theme.components[componentName]||!theme.components[componentName].styleOverrides)return null;const styleOverrides=theme.components[componentName].styleOverrides,resolvedStyleOverrides={};return Object.entries(styleOverrides).forEach((([slotKey,slotStyle])=>{resolvedStyleOverrides[slotKey]=processStyleArg(slotStyle,(0,esm_extends.A)({},props,{theme}))})),overridesResolver(props,resolvedStyleOverrides)})),componentName&&!skipVariantsResolver&&expressionsWithDefaultTheme.push((props=>{var _theme$components;const theme=resolveTheme((0,esm_extends.A)({},props,{defaultTheme,themeId}));return processStyleArg({variants:null==theme||null==(_theme$components=theme.components)||null==(_theme$components=_theme$components[componentName])?void 0:_theme$components.variants},(0,esm_extends.A)({},props,{theme}))})),skipSx||expressionsWithDefaultTheme.push(systemSx);const numOfCustomFnsApplied=expressionsWithDefaultTheme.length-expressions.length;if(Array.isArray(styleArg)&&numOfCustomFnsApplied>0){const placeholders=new Array(numOfCustomFnsApplied).fill("");transformedStyleArg=[...styleArg,...placeholders],transformedStyleArg.raw=[...styleArg.raw,...placeholders]}const Component=defaultStyledResolver(transformedStyleArg,...expressionsWithDefaultTheme);return tag.muiName&&(Component.muiName=tag.muiName),Component};return defaultStyledResolver.withConfig&&(muiStyledResolver.withConfig=defaultStyledResolver.withConfig),muiStyledResolver}}(),esm_styled=styled;var resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps/resolveProps.js");var useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,useTheme.A)(defaultTheme);themeId&&(theme=theme[themeId]||theme);const mergedProps=function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,resolveProps.A)(theme.components[name].defaultProps,props):props}({theme,name,props});return mergedProps}var extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const createStack_excluded=["component","direction","spacing","divider","children","className","useFlexGap"],defaultTheme=(0,createTheme.A)(),defaultCreateStyledComponent=esm_styled("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return useThemeProps({props,name:"MuiStack",defaultTheme})}function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const style=({ownerState,theme})=>{let styles=(0,esm_extends.A)({display:"flex",flexDirection:"column"},(0,breakpoints.NI)({theme},(0,breakpoints.kW)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.LX)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.kW)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.kW)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return ownerState.useFlexGap?{gap:(0,spacing._W)(transformer,propValue)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing._W)(transformer,propValue)}};var direction};styles=(0,deepmerge.A)(styles,(0,breakpoints.NI)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.iZ)(theme.breakpoints,styles),styles};var styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js");const Stack=function createStack(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiStack"}=options,StackRoot=createStyledComponent(style),Stack=react.forwardRef((function Grid(inProps,ref){const themeProps=useThemeProps(inProps),props=(0,extendSxProp.A)(themeProps),{component="div",direction="column",spacing=0,divider,children,className,useFlexGap=!1}=props,other=(0,objectWithoutPropertiesLoose.A)(props,createStack_excluded),ownerState={direction,spacing,useFlexGap},classes=(0,composeClasses.A)({root:["root"]},(slot=>(0,generateUtilityClass.Ay)(componentName,slot)),{});return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.A)({as:component,ownerState,ref,className:(0,clsx.A)(classes.root,className)},other,{children:divider?joinChildren(children,divider):children}))}));return Stack}({createStyledComponent:(0,styles_styled.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,DefaultPropsProvider.b)({props:inProps,name:"MuiStack"})}),Stack_Stack=Stack}}]);