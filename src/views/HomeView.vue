<template>
    <MovieSlidebar/>
    <h2 class="category-name">최신 인기 영화</h2>
    <div class="container">
        <button class="scroll-btn btn-left" @click="scrollLeft"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="list-div" ref="slideContainer">
            <div class="slide-div">
                <MovieCard
                    v-for="movie in moviestore.movieList"
                    :key="movie.movie_id"
                    :movie="movie"
                    class="movie-card"
                />
            </div>
        </div>
        <button class="scroll-btn btn-right" @click="scrollRight"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <GenreBar/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni modi molestiae, eius qui cupiditate beatae distinctio ipsum assumenda? Vel eum tempora totam illum ad hic vero reprehenderit ea rerum!
    Aspernatur eos, asperiores repellendus ea, eveniet facilis at illo iure rem earum voluptatibus odio aperiam ullam aut accusamus quia distinctio dolore id impedit pariatur expedita beatae quo. Libero, adipisci maxime!
    Consectetur doloribus placeat, facilis optio eaque fugit excepturi error tempora reiciendis? Sunt quis non cupiditate reiciendis molestiae at nemo nesciunt accusamus amet nam, iste recusandae beatae. Ducimus quas eligendi debitis.
    Fugiat similique animi quos! Iusto repellat numquam inventore saepe fuga assumenda. Exercitationem, quisquam? Placeat harum qui culpa cumque esse debitis! Officiis esse enim molestias non! Voluptas itaque dicta sunt soluta?
    Beatae perspiciatis voluptatem, omnis dolorem eligendi velit ab, soluta fugit natus vitae eius delectus, doloribus nemo distinctio impedit sed minus cupiditate quae possimus corrupti doloremque neque atque rerum maiores. Odio?
    Incidunt perferendis minus in illum et debitis, perspiciatis cupiditate quidem dolor alias quisquam ut, reiciendis quibusdam quia beatae laborum repellat aspernatur consectetur sit, corporis ullam eligendi esse! Aliquid, dolore cupiditate.
    In eos animi sint velit assumenda eligendi fuga tempora sapiente numquam at incidunt ipsa, minus repellendus culpa dolorem facilis enim nemo aliquam. Harum fugiat saepe voluptate non accusamus laborum ex!
    Explicabo totam fugiat consequatur aliquam, nobis voluptatem eveniet repellendus distinctio quidem laboriosam recusandae soluta libero nulla maiores exercitationem doloribus id! Aperiam quidem hic, tenetur non minus ut dicta qui dignissimos.
    Harum error rem id minima vero tempora perspiciatis inventore, recusandae quas eligendi sit. Mollitia, alias provident quaerat hic placeat, laudantium neque in perferendis suscipit, sint minus illum incidunt voluptate quis.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium illo aliquid, nemo minima esse modi quasi officiis possimus architecto rerum laudantium accusamus consequuntur ratione quo aut, quisquam expedita accusantium?
    Cupiditate dolor quisquam id odit porro harum praesentium autem voluptatum, magnam dolores, adipisci nulla reiciendis dolorem corporis error dolorum labore obcaecati assumenda fuga culpa qui. Nobis molestiae sapiente consequatur nesciunt.
    Impedit sint laborum quia, blanditiis sed expedita mollitia deserunt dolorum corrupti dolor quas nostrum eligendi ut maiores? Nam omnis vero non, odio perferendis et magnam, architecto voluptates facilis rem mollitia?
    Magnam distinctio mollitia laboriosam unde, quae, natus ipsum rem labore dicta, omnis sapiente expedita nobis ab id pariatur fugiat. Dignissimos alias sint perferendis quas obcaecati facilis fugiat, expedita quibusdam eveniet.
    Officia, iste eaque ullam cumque sunt ex distinctio. Eum officiis nihil dicta unde quos aliquid libero consequatur sint dolore debitis? Consequatur aut, excepturi doloremque sed minus ea labore magnam ipsam.
    Illum minima quisquam unde pariatur ea quo consequuntur dolores sequi quia, earum corrupti dicta nisi voluptatem ipsa amet quidem reiciendis impedit modi! Modi enim provident illum architecto ad, nulla eius.
    Repellat debitis nisi iste tempore veniam. Sapiente quisquam suscipit beatae. Fugit suscipit recusandae ea architecto voluptatibus, adipisci iste. Quisquam fugiat dolore ipsa libero fuga nobis nostrum delectus non a molestias.
    Animi magni dicta illo suscipit dignissimos quae vitae neque doloribus atque repudiandae. Sequi quisquam numquam fugit illum tempore fugiat at blanditiis veniam voluptatem eum nisi, perferendis fuga aspernatur cum quas.
    Dolorem ut corporis veritatis, sunt fugiat officia dolorum, consequuntur sapiente pariatur quibusdam obcaecati sequi ducimus quasi in hic id sed nesciunt? Laudantium, officia! Corporis magni officia inventore necessitatibus beatae incidunt?
    Assumenda rerum mollitia nesciunt quisquam culpa, numquam quaerat iure facilis officiis at ea? Excepturi dicta ex tempora perferendis error? Similique sequi hic repellat facilis rerum temporibus odio atque alias ex?
    Et laboriosam, repellendus optio illo deleniti similique ab. Dolores deleniti dolorum voluptatem in recusandae maiores architecto, quis neque corrupti repudiandae perferendis accusantium at quod itaque commodi, eligendi excepturi esse sequi.
    Quas repellendus corrupti error, et saepe hic repellat ipsum eius laborum mollitia, sit tempora delectus iusto excepturi dolore atque necessitatibus odio vel. Cum, aspernatur. In labore deserunt quibusdam necessitatibus quidem.
    Voluptas facilis consectetur delectus voluptatem placeat odio amet dignissimos ex dolor provident, obcaecati maiores ullam a enim. Ab quia excepturi alias esse deleniti blanditiis repellat perferendis vitae quasi ea! Autem.
    Explicabo eum eius laboriosam soluta dignissimos nostrum obcaecati asperiores voluptatum autem, recusandae consectetur ab blanditiis nisi maxime sit magni delectus consequatur earum laborum. Asperiores illum distinctio aut quidem, laudantium impedit?
    Fuga illo, porro, nesciunt dolores ut iusto pariatur voluptatem harum, voluptatum repellendus placeat sit ducimus dolor consequuntur delectus odio deserunt maiores vero ad eos numquam fugit magni libero quod? Nemo!
    Quae asperiores porro quibusdam earum, est, repellendus similique dolor nulla optio commodi recusandae, voluptate eos deleniti! Ea sint laborum nisi animi cum in. Veritatis consequatur unde optio nemo deleniti? Esse.
    Recusandae quam alias adipisci sequi! Unde, ab! Labore blanditiis atque aliquid ut earum, deleniti quo ipsa amet facilis, corporis assumenda ratione nemo quae aliquam omnis modi fugiat ex velit dolore.
    Temporibus neque molestias quasi soluta omnis explicabo nam obcaecati, ab culpa vitae quia similique. Sed, deserunt corporis reiciendis doloribus neque, eum ipsa debitis voluptatem saepe ipsum exercitationem, aut delectus nostrum?
    Praesentium, sapiente nisi blanditiis accusamus nesciunt laboriosam deleniti sequi. Nesciunt, placeat facere porro modi repudiandae minus reiciendis voluptatum officia facilis provident atque soluta iusto, ratione, odit iste ex eum eveniet.
    Qui quis, recusandae fugiat modi quas necessitatibus dolores facilis? Quibusdam est tenetur, commodi perferendis at minima, dolore dignissimos error amet eligendi fugiat cum dicta quia in maiores, recusandae aut cupiditate!
    Sint deserunt omnis possimus temporibus, vel cum eius atque nam ea iure ducimus quod mollitia quis adipisci rem. Id alias quia, et inventore molestias iusto dolor qui labore omnis voluptatibus.
    Odio, impedit delectus. Ratione alias minima iure culpa qui iste consectetur eveniet quisquam velit error facere at sequi saepe dolorem placeat explicabo dolor magni veritatis aperiam tempora, tenetur temporibus in.
    Tempore odio delectus dicta quo, eaque maiores id similique, unde aspernatur, nisi at. Fugiat sit, tenetur excepturi aliquam quisquam odio quasi provident nulla commodi dicta fugit totam rem. Exercitationem, aliquid?
    Sunt eaque tempore esse dolorum dolores assumenda fugit error veritatis temporibus iste voluptatum aut nostrum rem, ducimus, earum hic quibusdam animi quasi aperiam non voluptates placeat! Exercitationem sunt qui quibusdam!
    Est, earum quasi officia vel tenetur sint laudantium excepturi quidem autem accusantium voluptatem minima? Perferendis quas quod dolorem velit. Sunt quaerat perferendis eos architecto dolorum at tenetur numquam, earum nesciunt?
    Eaque perferendis est velit nam dolore commodi omnis obcaecati qui temporibus similique nulla, itaque magnam porro inventore natus quis optio quas, ad consectetur illum possimus sit quasi. Qui, a dolorem!
    In ea aut molestias, quasi neque vero facilis eos quos nemo voluptas assumenda aperiam suscipit illum quaerat veniam accusantium sed recusandae possimus quisquam commodi officiis impedit. Excepturi earum velit dolore!
    Ut id, nemo aut, assumenda quo debitis dicta rerum voluptatibus suscipit expedita sunt unde velit! Autem exercitationem architecto quam dicta tempora corporis quo repudiandae consectetur voluptas, minus laborum beatae animi?
    In sint mollitia deserunt! Atque maxime praesentium cupiditate, nemo unde accusantium corporis! Nisi, repudiandae illum natus, doloribus sint dolorem esse ipsa quis, harum ullam laboriosam quo cumque dolores atque molestias?
    Facilis eveniet fugiat, molestias, dolore magnam debitis soluta sequi nam, reprehenderit nobis sapiente perferendis dolorem corporis nisi accusamus illo! Optio repellat reprehenderit voluptatem deserunt eveniet. Harum perspiciatis veritatis facilis perferendis!
    Corrupti eligendi earum iste explicabo, quisquam quo ipsum laudantium ratione minima porro ipsa, tenetur adipisci voluptates maiores ducimus reprehenderit cupiditate distinctio doloremque praesentium molestiae cumque. Officia ad illo vero asperiores.
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie'
import MovieCard from '@/components/MovieCard.vue'
import GenreBar from '@/components/GenreBar.vue'
import MovieSlidebar from '@/components/MovieSlideBar.vue'

const moviestore = useMovieStore()
const slideContainer = ref(null)

onMounted(() => {
    moviestore.fetchMovie()
})

const scrollLeft = () => {
    if (slideContainer.value) {
        slideContainer.value.scrollBy({
            left: -window.innerWidth * 0.99,
            behavior: 'smooth'
        })
    }
}

const scrollRight = () => {
    if (slideContainer.value) {
        slideContainer.value.scrollBy({
            left: window.innerWidth * 0.99,
            behavior: 'smooth'
        })
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.scroll-btn{
    width: 40px;
    height: 80px;
    background-color: #ccc;
    border: none;
    padding: 10px;
    cursor: pointer;
    opacity: 20%;
    border-radius: 20%;
    transition: transform 0.5s ease, box-shadow 0.3s ease;
}

.btn-left{
    position: absolute;
    top: 150px;
    z-index: 1;
}
.btn-right{
    position: absolute;
    top:150px;
    right: 0px;
}
.btn-left:hover{
    opacity: 0.7;
    transform: scale(1.1);
    background-color: black;
}
.btn-left:hover .fa-arrow-left {
    color: white; 
}
.btn-right:hover{
    opacity: 0.7;
    transform: scale(1.1);
    background-color: black;
}
.btn-right:hover .fa-arrow-right {
    color: white; 
}

.list-div {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    display: flex;
    align-items: center;
}

.slide-div {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
}

.movie-card {
    flex: 0 0 20%;
    padding: 5px;
}
.category-name{
    color: rgb(221, 217, 217);
    margin-left: 15px;
    margin-bottom: 10px;
}
</style>
