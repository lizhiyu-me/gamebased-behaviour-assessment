abstract class IMediator{
    static NAME:string;//TODO NAME 写到baseMediator，构造函数传参赋值
    abstract get view();
    abstract registerNotifications();
    abstract onRegister();
}