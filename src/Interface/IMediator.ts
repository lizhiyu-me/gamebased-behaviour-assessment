abstract class IMediator{
    static NAME:string;
    abstract get view();
    abstract registerNotifications();
    abstract onRegister();
}