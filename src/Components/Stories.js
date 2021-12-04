export default function Stories(){
    const story = [
        {
          imagem: "9gag.svg",
          usuario: "9gag"
        },
        {
          imagem: "meowed.svg",
          usuario: "meowed"
        },
        {
          imagem: "barked.svg",
          usuario: "barked"
        },
        {
          imagem: "nathanwpylestrangeplanet.svg",
          usuario: "nathanwpylestrangeplanet"
        },
        {
          imagem: "wawawicomics.svg",
          usuario: "wawawicomics"
        },
        {
          imagem: "respondeai.svg",
          usuario: "respondeai"
        },
        {
          imagem: "filomoderna.svg",
          usuario: "filomoderna"
        },
        {
          imagem: "memeriagourmet.svg",
          usuario: "memeriagourmet"
        }
      ];

    return(
        <div class="stories">
          {story.map(s => (
              <Story
                imagem={s.imagem}
                usuario={s.usuario}
                />))};
                
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}

function Story(props){
    return(
        <div class="story">
            <div class="imagem">
            {props.imagem && <img src={`assets/img/${props.imagem}`} />}
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}
