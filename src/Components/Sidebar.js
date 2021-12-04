export default function Sidebar() {
    const sugestao = [
        {
            imagem: "bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            imagem: "chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você"
        },
        {
            imagem: "razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Segue você"
        },
        {
            imagem: "adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Novo no Instagram"
        },
        {
            imagem: "smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você"
        }
    ];

    return (
        <div class="sidebar">
            <Usuario imagem="assets/img/catanacomics.svg" user="catanacomics" nome="Catana" />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestao.map(s => (
                    <Sugestao
                        imagem={s.imagem}
                        nome={s.nome}
                        razao={s.razao}
                    />
                ))
                }
            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                {props.imagem && <img src={`assets/img/${props.imagem}`} />}
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.nome}
            </div>
        </div>
    );
}