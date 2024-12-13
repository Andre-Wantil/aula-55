$.ajax({
    url: "http://localhost:3000/images",
    method: "GET",

    success: (data) => {
        data.forEach((image) => {
            $("#gallery").append(`
                <div>
                    <img
                        src="${image.url}"
                        alt="${image.description}"
                        class="img-click"
                        data-caption="${image.description}"
                    >
                </div>
                `)
        });

        $(".img-click").on("click", () => {
            const src = $(this).attr("src");
            const caption = $(this).data("caption");
            $("#model-img").attr("src", src)
            $("#model-caption").text(caption)
        })
    },

    error: () => {
        alert("Erro ao carregar a página!");
        console.error(error);
    }
});