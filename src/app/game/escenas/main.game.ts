import * as Phaser from 'phaser'
export class MainScene extends Phaser.Scene {

    player!: Phaser.Physics.Arcade.Sprite;
    //cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    cursors!: any;
    BotonInicio!: Phaser.GameObjects.Rectangle;
    BotonPausa!:Phaser.GameObjects.Rectangle;
    //coins!: Phaser.Physics.Arcade.Sprite;
    coins!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    Distraccion1!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    score: number = 0;
    ScoreText!: Phaser.GameObjects.Text;
    DistraccionText!: Phaser.GameObjects.Text;
    TextoInicio!:Phaser.GameObjects.Text;
    TextoPausa!:Phaser.GameObjects.Text;
    Usuario!:Phaser.GameObjects.Text;
    Distracciones:number = 0;
    numero: number = 0;
    Eje_Y: any;
    VelocidadExamen: any;
    JuegoEnMarxa:number = 0;

    constructor (){
        super ('MainScene')
    }

    preload(){

        this.load.image('fondo', 'assets/fondo.png')
        this.load.image('player', 'assets/Jugador1.png')
        this.load.image('coins', 'assets/examen1.png')
        this.load.image('Distraccion1', 'assets/Insta1.png')
    }

    create(){        
        //cursor
        this.cursors = this.input.keyboard?.createCursorKeys();
        //fondo
        const fondojuego = this.add.image(0,0, 'fondo').setOrigin(0, 0);
        fondojuego.setDisplaySize(this.scale.width, this.scale.height);


        //Botones  de inicio
        this.BotonInicio = this.add.rectangle(
          this.scale.width / 2,   
          this.scale.height / 2,  
          300,                    
          100,                    
          0x1e90ff,               
          1                       
        )
        this.BotonInicio.setStrokeStyle(4, 0xffffff)
        this.BotonInicio.setInteractive({useHandCursor: true });
        this.BotonInicio.setDepth(10);
        this.BotonInicio.on('pointerdown', () => {
          this.JuegoEnMarxa = 1
          this.BotonInicio.setVisible(false)
          this.TextoInicio.setVisible(false)
          this.BotonPausa.setVisible(true)
          this.TextoPausa.setVisible(true)
          //console.log(this.JuegoEnMarxa)
        })
        this.TextoInicio = this.add.text(
          this.scale.width / 2,
          this.scale.height / 2,
          'INICIAR JUEGO',
          {
          fontSize: '32px',
          color: '#ffffff',
          fontFamily: 'Arial'
          }
        )
        this.TextoInicio.setOrigin(0.5)   
        this.TextoInicio.setDepth(11); 

        //Boton de pausa
        this.BotonPausa = this.add.rectangle(
          this.scale.width -680,   
          this.scale.height -640,  
          200,                    
          50,                    
          0x1e90ff,               
          1                       
        )
        this.BotonPausa.setStrokeStyle(4, 0xffffff)
        this.BotonPausa.setInteractive({useHandCursor: true });
        this.BotonPausa.setDepth(11);
        this.BotonPausa.on('pointerdown', () => {
          if(this.JuegoEnMarxa == 0){
            this.JuegoEnMarxa = 1}
            else{
              this.JuegoEnMarxa = 0
            }
                   
        })
        this.TextoPausa = this.add.text(
          this.scale.width -680,
          this.scale.height -640,
          'Pausar juego',
          {
          fontSize: '32px',
          color: '#ffffff',
          fontFamily: 'Arial'
          }
        )
        this.TextoPausa.setOrigin(0.5)   
        this.TextoPausa.setDepth(11); 
        this.BotonPausa.setVisible(false)
        this.TextoPausa.setVisible(false)


        //textos de puntuaciones y usuario
         this.ScoreText = this.add.text(this.scale.width /3,this.scale.height /4, 'Puntuación:'+ this.score, {
          fontSize: '30px',
          color: '#ffffff',
          fontFamily: 'Arial'
        });

        this.DistraccionText = this.add.text(this.scale.width /3,this.scale.height /5, 'Distraciones:'+ this.score, {
          fontSize: '30px',
          color: '#ffffff',
          fontFamily: 'Arial'
        });

        
        //Tiempo y valores aleatorios
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.numero = Phaser.Math.Between(3,7);
                this.VelocidadExamen = Phaser.Math.Between(20,200);
                this.Eje_Y = Phaser.Math.Between(300, 1000);
                //console.log(this.numero);
            },
            loop: true,



        });      
   
       
        //personaje
        this.player = this.physics.add.sprite(800, 800, 'player');        
        this.player.setCollideWorldBounds(true);
        this.player.setVelocityY(0);
        this.player.setVelocityX(0); 
        this.player.setScale(0.3);
        
    }
//***************************Funciones para crear objetos  a recojer***************************/

    CrearExamen(){
        this.coins = this.physics.add
            .sprite(300, this.Eje_Y, 'coins')
            .setDisplaySize(100, 100) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        this.coins.body.setAllowGravity(false);
        this.coins.setVelocityX(this.VelocidadExamen);
        this.physics.add.overlap(this.player, this.coins, this.ColisionExamen, undefined, this);
    }
    ColisionExamen(player: any, coin: any) {
    this.score = this.score + 1;
    this.ScoreText.setText('Puntuación: ' + this.score);
    coin.destroy();  
    }

    CrearDistraccion1(){
        this.Distraccion1 = this.physics.add
            .sprite(300, this.Eje_Y, 'Distraccion1')
            .setDisplaySize(60, 60) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        this.Distraccion1.body.setAllowGravity(false);
        this.Distraccion1.setVelocityX(this.VelocidadExamen);
        this.physics.add.overlap(this.player, this.Distraccion1, this.ColisionDistraccion1, undefined, this);
    }
    ColisionDistraccion1(player: any, Distraccion1: any) {
    this.Distracciones = this.Distracciones + 1;
    this.DistraccionText.setText('Distraciones:' + this.Distracciones);
    Distraccion1.destroy();  
    }

    FinPartida(){
      if (this.Distraccion1.active){
        this.Distraccion1.destroy();
      }
      if (this.coins.active){
        this.coins.destroy();
      }

    }

//**************************************************************************************/
    override update(time:number, delta:number){
    
    if(this.Distracciones >= 3){
      this.JuegoEnMarxa = 0
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
      this.BotonInicio.setVisible(true)
      this.TextoInicio.setVisible(true)
      this.BotonPausa.setVisible(false)
      this.TextoPausa.setVisible(false)
      this.Distracciones = 0
      this.score = 0
      this.FinPartida()
    }
    if(this.JuegoEnMarxa === 0){
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
      
    }



    
    if(this.JuegoEnMarxa === 1){
    
      //********Cursores**************/
      if (this.cursors.left?.isDown) {
        this.player.setVelocityX(-260);
      } else if (this.cursors.right?.isDown) {
        this.player.setVelocityX(260);
      } else {
        this.player.setVelocityX(0);
      }

      if (this.cursors.up?.isDown) {
        this.player.setVelocityY(-260);
      } else if (this.cursors.down?.isDown) {
        this.player.setVelocityY(260);
      } else {
        this.player.setVelocityY(0);
      }
      //*****************************/
     
      

      
      if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
      this.CrearExamen();
      }
      if (this.numero === 4){ 
        this.CrearExamen();
        this.numero = 0; 
      }else if (this.numero === 6){
        this.CrearDistraccion1();
        this.numero = 0;
      }
    }
    }
}