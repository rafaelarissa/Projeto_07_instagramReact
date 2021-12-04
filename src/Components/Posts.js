export default function Posts() {
    const posts = [
        {
            imagemUsuario: "assets/img/meowed.svg",
            nomeUsuario: "meowed",
            imagemConteudo: "assets/img/gato-telefone.svg",
            imagemCurtidas: "assets/img/respondeai.svg",
            nomeCurtidas: "respondeai",
            quantidadeCurtidas: "outras 101.523 pessoas"
        },
        {
            imagemUsuario: "assets/img/meowed.svg",
            nomeUsuario: "barked",
            imagemConteudo: "assets/img/dog.svg",
            imagemCurtidas: "assets/img/adorable_animals.svg",
            nomeCurtidas: "adorable_animals",
            quantidadeCurtidas: "outras 99.159 pessoas"
        }
    ]

    return (
        <div class="posts">
            {posts.map(p => (
                <Post
                    imagemUsuario={p.imagemUsuario}
                    nomeUsuario={p.nomeUsuario}
                    imagemConteudo={p.imagemConteudo}
                    imagemCurtidas={p.imagemCurtidas}
                    nomeCurtidas={p.nomeCurtidas}
                    quantidadeCurtidas={p.quantidadeCurtidas}
                />
            ))
            }
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemUsuario} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>{props.quantidadeCurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}