import{w as g,g as f}from"./index.IeYGUXNy.js";const p="(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, naked, nude:1.4, dark skin, asian, asian face",b=g({controlnet_module:"canny",controlnet_threshold_a:156,controlnet_threshold_b:64}),u=g("control_v11p_sd15_canny [d14c016b]"),h=g("https://kraftwer.lan:7860"),d=async(o,t,e=!1)=>{const s=new Date,r=`${f(h)}${o}`,c={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};console.log(o,t);const l=await(await fetch(r,c)).json(),i=(new Date-s)/1e3;return console.log("time",i),l},v=async(o,t=!1)=>{var s;const e=await d("/interrogator/prompt",{image:o,clip_model_name:"ViT-L-14/openai",mode:"classic",local:t});return console.log("fetchInterrogate",e),((s=e==null?void 0:e.prompt)==null?void 0:s.length)===0?(alert("Error: "+e.info),null):e==null?void 0:e.prompt},x=async(o="canny")=>{try{const e=await(await fetch(f(h)+"/controlnet/model_list")).json();if(e&&e.model_list){const s=e.model_list.find(r=>r.includes(o));s?(console.log("found model on remote",s),u.set(s)):console.error("no model found on remote")}}catch(t){console.error(t)}},k=async(o,t,e=!1)=>{const s=await d("/controlnet/detect",{controlnet_input_images:[o],...t,local:e});return console.log("fetchModuleImage",s),s!=null&&s.images.length?"data:image/png;base64,"+s.images[0]:(alert("Error: "+s.info),null)},C=async({prompt:o,image:t,input_image:e,mask:s,controlnetModel:r,steps:c=20,sampler_name:_="Euler a",guidance_end:l=.9,negative_prompt:i=p,local:m=!1})=>{const a=await d("/sdapi/v1/txt2img",{prompt:o,styles:[],seed:-1,subseed:-1,subseed_strength:0,sampler_name:"DPM++ SDE Karras",batch_size:1,n_iter:1,steps:5,cfg_scale:1.5,width:512,height:512,restore_faces:!1,tiling:!1,do_not_save_samples:!1,do_not_save_grid:!1,negative_prompt:i,eta:0,override_settings:{},override_settings_restore_afterwards:!0,script_args:[],script_name:"",send_images:!0,save_images:!0,alwayson_scripts:{controlnet:{args:[{enabled:!0,image:t,module:"canny",model:r,control_mode:"Balanced",processor_res:512,threshold_a:156,threshold_b:64,weight:1,guidance_start:0,guidance_end:l,pixel_perfect:!1,hr_option:"Both",save_detected_map:!1}]}}},m);return console.log("fetchControlnet",a),a!=null&&a.images.length?"data:image/png;base64,"+a.images[0]:(alert("Error: "+a.info),null)},E=async({prompt:o,input_image:t,mask:e,controlnetModel:s,steps:r=20,sampler_name:c="Euler a",guidance_end:_=.9,negative_prompt:l=p,local:i=!1})=>{const n=await d("/sdapi/v1/txt2img",{enable_hr:!1,denoising_strength:0,firstphase_width:0,firstphase_height:0,hr_scale:2,hr_upscaler:"",hr_second_pass_steps:0,hr_resize_x:0,hr_resize_y:0,prompt:o,styles:[],seed:-1,subseed:-1,subseed_strength:0,sampler_name:c,batch_size:1,n_iter:1,steps:r,cfg_scale:7,width:512,height:512,restore_faces:!1,tiling:!1,do_not_save_samples:!1,do_not_save_grid:!1,negative_prompt:l,eta:0,s_churn:0,s_tmax:0,s_tmin:0,s_noise:1,override_settings:{},override_settings_restore_afterwards:!0,script_args:[],script_name:"",send_images:!0,save_images:!0,alwayson_scripts:{controlnet:{args:[{input_image:t,mask:e,module:"none",model:s,weight:1,resize_mode:"Crop and Resize",lowvram:!1,processor_res:512,threshold_a:156,threshold_b:64,guidance:1,guidance_start:0,guidance_end:_,pixel_perfect:!1}]}}},i);return console.log("fetchControlnet",n),n!=null&&n.images.length?"data:image/png;base64,"+n.images[0]:(alert("Error: "+n.info),null)};export{k as a,C as b,b as c,u as d,E as e,v as f,x as g,h};