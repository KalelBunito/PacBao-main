class ComidaPacman{
    constructor(x,y,tamanho){
        this.x = x
        this.y = y
        this. tamanho = tamanho     
        this.removida = false   
    }
    exibir(){
        if(!this.removida){
            fill("yellow")
            ellipse(this.x, this.y, this.tamanho,this.tamanho)
        }
    }
    verificarColisao(pacman){
        if(!this.removida){
            const d = dist(this.x, this.y, pacman.position.x ,pacman.position.y)
            if(d < this.tamanho/ 2 + pacman.width/2 ){
                this.removida = true
                return true
            }
            return false
        }
    }
}