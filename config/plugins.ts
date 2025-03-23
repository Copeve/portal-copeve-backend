module.exports = ({ env }) => ({
    // ...

    "fuzzy-search": {
        enabled: true,
        config: {
            contentTypes: [
                {
                    uid: "api::noticia.noticia",
                    modelName: "noticia",
                    transliterate: true,
                    fuzzysortOptions: {
                        characterLimit: 300,
                        threshold: -600,
                        limit: 10,
                        keys: [
                            {
                                name: "titulo",
                                weight: 100,
                            },
                            {
                                name: "subtitulo",
                                weight: 0,
                            },
                            {
                                name: "noticia",
                                weight: -100,
                            },
                        ],
                    }
                },
                {
                    uid: "api::concurso.concurso",
                    modelName: "concurso",
                    transliterate: true,
                    fuzzysortOptions: {
                        characterLimit: 300,
                        threshold: -600,
                        limit: 10,
                        keys: [
                            {
                                name: "nome",
                                weight: 100,
                            }
                        ],
                    }
                }
            ],
        },
    },
    upload: {
        config: {
          providerOptions: {
            localServer: {
              maxAllowedSize: 1024 * 1024 * 1024, // 1GB
            }
          }
        }
    },
    // ...
});