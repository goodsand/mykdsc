from flask import Flask,request

import urllib
import json
app=Flask(__name__)

@app.route('/xf299',methods=['POST'])
def handle_post():

    out="续费加299："
    out+="\n号码："+request.args.get('num')
    out+="\n机主："+request.args.get('name')
    out+="\n联电："+request.args.get('phone')
    out+="\n证号："+request.args.get('pid')
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
if __name__=='__main__':
    app.run()
