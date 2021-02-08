const Query = {
    user: (parent, args) => {
        return {
            userName: 'MEHMET',
            createdAt: '02/08/2021'
        }
    }
}
module.exports=Query;