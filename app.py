from flask import Flask,request

import urllib
import json
app=Flask(__name__)

@app.route('/xf299',methods=['POST'])
def handle_post():

    out="续费加299："
    out+="\n号码："+request.form.get('num')
    out+="\n机主："+request.form.get('name')
    out+="\n联电："+request.form.get('phone')
    out+="\n证号："+request.form.get('pid')
    out+="\n============\n"

    url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=758f2d15-0de0-4b4f-b41f-16a70a9b4fea"  # 这里就是群机器人的Webhook地址
    headers={'Content-Type':'application/json'}
    data={"msgtype": "text","text": { "content": out} }
    data=bytes(json.dumps(data),'utf8')

    requesta=urllib.request.Request(url=url,data=data,headers=headers)
    response=urllib.request.urlopen(requesta)
    content=response.read().decode('utf-8')
    obj=json.loads(content)
    obj=json.dumps(obj).encode('utf-8')
    return obj

@app.route('/msg',methods=['POST'])
def handle_post1():

    out="升级套餐记录："
    out+="\n号码："+request.form.get('number')
    out+="\n号码1："+request.form.get('num')
    out+="\n机主："+request.form.get('name')
    out+="\n联电："+request.form.get('phone')
    out+="\n证号："+request.form.get('pid')
    out+="\n邮箱："+request.form.get('email')
    out+="\n抬头："+request.form.get('taitou')
    out+="\n代码："+request.form.get('tongyi')
    out+="\n============\n00,115一年；01,115一年合约；10,136一年；11,136两年；20,166一年；21,166两年；30,239一年；31,239两年；40,196一年；41,196两年；42,196两年合约；50,299一年；51,299两年；1订购30包，2不订30包"

    url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=758f2d15-0de0-4b4f-b41f-16a70a9b4fea"  # 这里就是群机器人的Webhook地址
    headers={'Content-Type':'application/json'}
    data={"msgtype": "text","text": { "content": out} }
    data=bytes(json.dumps(data),'utf8')

    requesta=urllib.request.Request(url=url,data=data,headers=headers)
    response=urllib.request.urlopen(requesta)
    content=response.read().decode('utf-8')
    obj=json.loads(content)
    obj=json.dumps(obj).encode('utf-8')
    return obj
    
if __name__=='__main__':
    app.run()
