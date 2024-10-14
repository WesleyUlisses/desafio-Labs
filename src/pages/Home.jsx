import React from 'react'
import Logo from '../assets/Logo.svg'
import '../styles/home.css'
import Mulher from'../assets/Mulher.svg'

const Home = () => {
    return (
        <div className='container'>
            <div className="home-container">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                </div>

                <div className="menu-home">

                    <p>Home</p>

                    <button className='btn-home'>
                        <img src="https://s3-alpha-sig.figma.com/img/8e06/4686/edbee6122c5ecbf48ee269b1eb765e62?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q2pnpTZuMbCes9a6hfwNb64a3ilwPH4D~mQiKZ1erEHk9GPGPxCFCCoPNlukCoJLJtDQVCJ99LI3Y01gmDJHwgxwbpeMwWKGz~NGdY2t44bk1k74AocAbim~XKy8MMxEj3RfMG48HkdUitBmOPSmC7Wyaeigdn8jADARaBkYqYYj-1SRF72SmmGBA22UFRSZAUoL4m2dygJU4gmH2D9a~T3o20Z-UdAGl4NqLrQqFAPE1~eqy3F3~5YH1XVGccdLUBe7NqX3N0fpdcrZmq1-Y3JkcMcC59e9xJzSKnnv3ckbF4UlK7ycIOr4eUAzXegAxjCn6LnVabl0O7OTElVSdg__" alt="" />
                        Metas e PDI
                    </button>

                    <button className='btn-home'>
                        <img src="https://s3-alpha-sig.figma.com/img/d2fd/9961/6850b9542e4b5ca7daf34becd2dc52a2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlF1PIMNUFvvTeT1nFCi-jL~XUe9E5uzSwSHkrhUIgUQ701Kb-Z2Y~bgEydDolv38Js8LCzmidEeVoOaG~nfmOYttM8sbsor0~Ei5jJn~yu08ETihYRaOgeVkryRoQDar--FtGdAUqThipN9mrh2jfHnXN4JN6wJ2oBWC4iB9qAwx9wuEAM7uAcBDt0~WfNPQcfKNseRigKX0sOqFaxy0s~jVetdBXw5CVSprOulZAjfMovdOtqDa-wfO0WJFsf7bx3zhRsa4x7k0QWysxtSrm9yvDCPkc73W86oUuyOBc7a1JsIoxnibmFfxkyow8hwYfNrfZPvFs2B-jrosJYY2g__" alt="" />
                        Feedback
                    </button>

                    <button className='btn-home'>
                        <img src="https://s3-alpha-sig.figma.com/img/e8cf/256c/902fb8d621ac29100c681302251036b7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2POqncMjuSk-vj-EIr-~cr-wndmPiIFR6TuJXMVgYhEQFq-CI8vSdwRuOVCu0JX~n2y5DHYK6~j~PBgTzhSAVL~SNPZdHXEeGlPAgRGuYMovf4f~9IJKfKYdacJSMOilqEYgMVp2DXD3ZNYQdDAwpiaAfvq4GH9X0PHPP57YN4JUIFRuHW9Rpm0JqnF1knH8iC6QmZYahpefVfZo7C1i9lYJwgDtuj5lZKG2DVT3PoJsmZzpKEcIVBwb1w-p89w0q~NOylvo7GL1ihud4uUivbAJBC-FhK9vZLTvc17yxS4vbxSvhQtopRW7rSPTqqS~4BYmsyaMeWZTul5MBHWkw__" alt="" />
                        Desempenho
                    </button>

                    <button className='btn-home'>
                        <img src="https://s3-alpha-sig.figma.com/img/0a57/1a15/694d6d0d3aabb3626802a5cdaeaef9ec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJAKjLS4US~EM-lVIV6iTAwpbF0gYuACJqiO265mHW1yN5H2TdkGyvqCarOOMZMzgYxh2QZATVew8f0hCuCF0wQmJhPfAoMVhnNZyIq0-k8XD7Hhh5w9V5c~TX00yPcLn7nghyxdizCLzFxYjraqWkUCZAsMKOZfyyK0M829JJotB9Lwuh9UIa5WT9QMdd7U0CLwhtFkPkaWzpYi0EvdO64lcw6Ara8UbSy7lX2vtHm0WcL9TdMyBUSfeV-MSZ7XLd8kv6pw2WSEbZSYzMW0B8m2a7wto4msC0JEAUWyKp4FJc1pcKBwww--WRJwRFhZsDKLDSWm14SytV-va2SXzg__" alt="" />
                        Engajamento <br />
                        e satisfação
                    </button>

                    <button className='btn-home'>
                        <img src="https://s3-alpha-sig.figma.com/img/c974/8b26/c367b24cfb4b93e5f935743f80d9bc87?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TocAHdM6UdYurHp7ulb7W1aIjtPUNbhOWmbIZMya-iMjqORsdkD3AqM2VpUc79mJVu9uOvhvyT9NdMMfesOSBuN15XjKWjkSg95yLjg9KtXxMUV8O3sxvPUzUm~VMCY3CYMM3bdI1vpf-hDyANRYfisvmRw9zUrlPBWO6~YX~kwuPK6lX8eWPyheG4~U0gx4jNCpxVZNzDfYXFZIG7sLfZB43tjKjm9s12-JMrGrOvsZb0kF28hLCUfjmjnYCNHGcvgxt0Vf39g3jb20cszu0OMsUBQO49-HmtQCPr3gOfi1C~SYlfM~EKNU3FPyeDA~gBLVI0TibV0XXveUHyrXBQ__" alt="" />
                        Área do Gestor
                    </button>
                </div>
            </div>

            <div className="home-img">
                <img src={Mulher} alt="" />
            </div>


        </div>



    )
}

export default Home