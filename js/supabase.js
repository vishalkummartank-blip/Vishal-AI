const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function loadTrainingData() {

    const { data, error } = await supabaseClient
        .from("trainingdata")
        .select("*")
        .order("id");

    const container =
        document.getElementById("training-list");

    if (error) {

        container.innerHTML =
            `<h2>${error.message}</h2>`;

        return;
    }

    container.innerHTML = "";

    data.forEach(item => {

        const techList = (item.tech || [])
            .map(t => `<span class="tech">${t}</span>`)
            .join("");

        container.innerHTML += `

        <div class="card">

            <h3>${item.title}</h3>

            <p>${item.desc ?? ""}</p>

            <div>${techList}</div>

            ${
                item.link
                ? `<a class="btn"
                      href="${item.link}"
                      target="_blank">
                        Open Training
                   </a>`
                : ""
            }

        </div>

        `;

    });

}

loadTrainingData();

supabaseClient
.channel("trainingdata")
.on(
    "postgres_changes",
    {
        event: "*",
        schema: "public",
        table: "trainingdata"
    },
    () => loadTrainingData()
)
.subscribe();
