/**启动命令 */
class CMD_StartUp implements ISimpleCommand {
    static NAME: string = 'CMD_StartUp';
    execute(param) {
        // AppFacade.getInstance().registerMediator(OrderBoxMediator,OrderBoxScene);
        AppFacade.getInstance().registerMediator(LobbySelectMediator,LobbySelectScene);
       
    }
}