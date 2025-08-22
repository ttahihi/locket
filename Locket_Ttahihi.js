// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @Tanhhdzai ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var chuot2k8={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-07-28T01:04:18Z",purchase_date:"2024-07-28T01:04:17Z",store:"app_store"},ttane={grace_period_expires_date:null,purchase_date:"2024-07-28T01:04:17Z",product_identifier:"com.chuot2k8.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(chuot2k8.product_identifier=s,obj.subscriber.subscriptions[s]=ttanhs1):obj.subscriber.subscriptions["com.chuot2k8.premium.yearly"]=ttanhs1,obj.subscriber.entitlements[e]=ttanhs1}else obj.subscriber.subscriptions["com.chuot2k8.premium.yearly"]=ttanhs1,obj.subscriber.entitlements.pro=chuot2lk8;$done({body:JSON.stringify(obj)});
