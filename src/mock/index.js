import Mock from "mockjs"

Mock.mock("/user/userlist","get",Mock.mock({
    'data|20-50':[
        {
            'user_id|+1': 1,
            'user_name':'@cname',
            'phone':/^1(3|5)[0-9]{9}/,
            'avatar':Mock.Random.image('200x100')
        }
    ]
}))

export default Mock