class Fantasma {
  constructor(x,y, imagem, tamanho, velocidade){
    this.sprite = createSprite(x,y)
    this.sprite.addImage(imagem)
    this.sprite.scale = tamanho / 100
    this.sprite.velocidade = velocidade
    this.removida = false
  }
  exibir(){
    drawSprite(this.sprite)
  }
  mover(){
    this.sprite.position.x += this.sprite.velocidade

    if(this.sprite.position.x > windowWidth + this.sprite.width/2){
      this.sprite.position.x = this.sprite.width/2
    }
    if(this.sprite.position.x < -this.sprite.width/2){
      this.sprite.position.x = windowWidth+this.sprite.width/2
    }
    if(this.sprite.position.y > windowHeight + this.sprite.height/2){
      this.sprite.position.y = this.sprite.height/2
    }
    if(this.sprite.position.y < -this.sprite.height/2){
      this.sprite.position.y = windowHeight+this.sprite.height/2
    }
  } 

  verificarColisao(pacman){
    if(!this.removida){
        const d = dist(this.sprite.x, this.sprite.y, pacman.position.x ,pacman.position.y)
        if(d < this.sprite.width/2 + pacman.width/2 ){
            this.removida = true
            return true
        }
        return false
    }
}
verificarColisaoPp(paredes, pacman){
  for(let parede of paredes){
    if(this.sprite.collide(parede)){
      this.sprite.velocidade *= -1
    }
  }
  if(this.sprite.collide(pacman)){
    pacman.destroy()
    pacman.velocityX = 0
    pacman.valocityY = 0
  }
}
}
