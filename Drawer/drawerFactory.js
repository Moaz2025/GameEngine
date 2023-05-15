class DrawerFactory{
    constructor(name) {
        if(name=="tic-tac-toe"){
            return new Drawer();
        }else if(name == 'sudoku'){
            return new Drawer();
        }else if(name == 'connect-4'){
            return new Drawer();
        }
        return new TwoColorsDrawer();
    }
}