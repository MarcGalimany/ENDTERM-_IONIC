import * as Phaser from 'phaser'
export class MainScene extends Phaser.Scene {

    player!: Phaser.Physics.Arcade.Sprite;
    //cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    cursors!: any;

    //coins!: Phaser.Physics.Arcade.Sprite;
    coins!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    Distraccion1!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    score: number = 0;
    ScoreText!: Phaser.GameObjects.Text;
    DistraccionText!: Phaser.GameObjects.Text;
    Distracciones:number = 0;
    numero: number = 0;
    Eje_Y: any;
    VelocidadExamen: any;
    

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
        this.add.image(0.2, 0.2, 'fondo').setOrigin(0, 0);
        //tiempo
        this.ScoreText = this.add.text(600, 200, 'Puntuación:'+ this.score, {
          fontSize: '52px',
          color: '#ffffff',
          fontFamily: 'Arial'
        });
        this.DistraccionText = this.add.text(600, 400, 'Distraciones:'+ this.score, {
          fontSize: '52px',
          color: '#ffffff',
          fontFamily: 'Arial'
        });
        
        
        
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.numero = Phaser.Math.Between(1,10);
                this.VelocidadExamen = Phaser.Math.Between(20,100);
                this.Eje_Y = Phaser.Math.Between(500, 1000);
                //console.log(this.numero);
            },
            loop: true,



        });      
   
       
        //personaje
        this.player = this.physics.add.sprite(800, 800, 'player');
        this.player. setDisplaySize(160,200);
        this.player.setCollideWorldBounds(true);
        this.player.setVelocityY(0);
        this.player.setVelocityX(0); 

        
    }
//***************************Funciones para crear objetos  a recojer***************************/

    CrearExamen(){
        this.coins = this.physics.add
            .sprite(300, this.Eje_Y, 'coins')
            .setDisplaySize(60, 60) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        this.coins.body.setAllowGravity(false);
        this.coins.setVelocityX(this.VelocidadExamen);
        this.physics.add.overlap(this.player, this.coins, this.ColisionExamen, undefined, this);
    }
    ColisionExamen(player: any, coin: any) {
    this.score = this.score + 1;
    this.ScoreText.setText('Score: ' + this.score);
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

//**************************************************************************************/
    override update(time:number, delta:number){


      //********Cursores**************/
      if (this.cursors.left?.isDown) {
        this.player.setVelocityX(-160);
      } else if (this.cursors.right?.isDown) {
        this.player.setVelocityX(160);
      } else {
        this.player.setVelocityX(0);
      }

      if (this.cursors.up?.isDown) {
        this.player.setVelocityY(-160);
      } else if (this.cursors.down?.isDown) {
        this.player.setVelocityY(160);
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