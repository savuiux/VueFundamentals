const final = Vue.createApp( {
    el: '#game-database',
    data() {
        return {
            searchInput: "",
            dataColumns: ["Title", "Highlights Supported", "Fully Optimized", "Steam Url", "Publisher", "Genre"],
            dataset: [
                {
                 "ID": 100031911,
                 "Title": "7 Days to Die",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/251570",
                 "Publisher": "The Fun Pimps Entertainment LLC",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100251911,
                 "Title": "A Plague Tale: Innocence",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/752590",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100129011,
                 "Title": "Absolver",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/473690",
                 "Publisher": "Devolver Digital",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100184111,
                 "Title": "ACE COMBAT™ 7: SKIES UNKNOWN",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/502500",
                 "Publisher": "BANDAI NAMCO Studio Inc.",
                 "Genre": "Action,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100350211,
                 "Title": "Age of Wonders III",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/226840",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100361111,
                 "Title": "Age of Wonders: Planetfall",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/718850",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100365811,
                 "Title": "AI: The Somnium Files",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/948740",
                 "Publisher": "Spike Chunsoft Co., Ltd.",
                 "Genre": "Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18107911,
                 "Title": "Aion™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "NCSOFT",
                 "Genre": "Free To Play,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100005211,
                 "Title": "Albino Lullaby: Episode 1",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/355860",
                 "Publisher": "Ape Law",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100334011,
                 "Title": "Albion Online",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/761890",
                 "Publisher": "Sandbox Interactive GmbH",
                 "Genre": "Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100313411,
                 "Title": "Amazing Cultivation Simulator \/ 了不起的修仙模拟器",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/955900",
                 "Publisher": "Gamera Game",
                 "Genre": "Indie,Role Playing,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17948311,
                 "Title": "American Truck Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/270880",
                 "Publisher": "SCS Software",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100220311,
                 "Title": "Ancestors Legacy",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/620590",
                 "Publisher": "1C Company",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100261311,
                 "Title": "Anno 1800™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Strategy,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100331611,
                 "Title": "Anno 1800™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100261411,
                 "Title": "Anno 1800™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/916440",
                 "Publisher": "Ubisoft",
                 "Genre": "Strategy,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100227611,
                 "Title": "AO International Tennis",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/758410",
                 "Publisher": "Big Ant Studios",
                 "Genre": "Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100272911,
                 "Title": "Apex Legends™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Electronic Arts Inc.",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 16032111,
                 "Title": "Apollo 11 Lunar Landing Demo",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "NVIDIA",
                 "Genre": "",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100079511,
                 "Title": "Argo",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/530700",
                 "Publisher": "Bohemia Interactive",
                 "Genre": "Action,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18541011,
                 "Title": "ARK: Survival Evolved",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/346110",
                 "Publisher": "Studio Wildcard",
                 "Genre": "Action,Adventure,Indie,Massively Multiplayer OnlineRole Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100136611,
                 "Title": "ARK: Survival Of The Fittest",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/407530",
                 "Publisher": "Studio Wildcard",
                 "Genre": "Action,Adventure,Indie,Massively Multiplayer OnlineRole Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100042611,
                 "Title": "Arma 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/107410",
                 "Publisher": "Bohemia Interactive",
                 "Genre": "Action,First-Person Shooter,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100238911,
                 "Title": "Armello",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/290340",
                 "Publisher": "League of Geeks",
                 "Genre": "Adventure,Indie,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17948511,
                 "Title": "Armored Warfare",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "My.com",
                 "Genre": "Simulation,Action,Free To Play,Massively Multiplayer OnlineStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100271411,
                 "Title": "Artifact",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/583950",
                 "Publisher": "Valve",
                 "Genre": "Casual,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100320911,
                 "Title": "Assassin’s Creed® III Remastered",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100166611,
                 "Title": "Assassin’s Creed® IV Black Flag™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/242050",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 11786111,
                 "Title": "Assassin’s Creed® IV Black Flag™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100225411,
                 "Title": "Assassin’s Creed® Odyssey",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/812140",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100225311,
                 "Title": "Assassin’s Creed® Odyssey",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100152711,
                 "Title": "Assassin’s Creed® Origins",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100143211,
                 "Title": "Assassin’s Creed® Origins",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/582160",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100182811,
                 "Title": "Assassin’s Creed® Unity",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/289650",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17935011,
                 "Title": "Assassin’s Creed® Unity",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Adventure,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100163011,
                 "Title": "Assassin’s Creed®: Syndicate",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/368500",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17934911,
                 "Title": "Assassin’s Creed®: Syndicate",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18293911,
                 "Title": "Assetto Corsa",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/244210",
                 "Publisher": "Kunos Simulazioni",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100214511,
                 "Title": "Assetto Corsa Competizione",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/805550",
                 "Publisher": "505 Games",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100489511,
                 "Title": "Asterix & Obelix XXL 3 - The Crystal Menhir",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1109690",
                 "Publisher": "Microids",
                 "Genre": "Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100202811,
                 "Title": "ASTRONEER",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/361420",
                 "Publisher": "System Era Softworks",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100250311,
                 "Title": "ATLAS",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/834910",
                 "Publisher": "Grapeshot Games",
                 "Genre": "Action,Adventure,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100164511,
                 "Title": "ATOM RPG",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/552620",
                 "Publisher": "AtomTeam",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100139611,
                 "Title": "ATOMEGA™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/619880",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100543011,
                 "Title": "AVICII Invector",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/986800",
                 "Publisher": "Wired Productions",
                 "Genre": "Casual,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100127111,
                 "Title": "Batman™: Arkham Asylum Game of the Year Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/35140",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100140711,
                 "Title": "Batman™: Arkham City - Game of the Year Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/200260",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100004411,
                 "Title": "Batman™: Arkham Knight",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/208650",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100195011,
                 "Title": "Batman™: Arkham Origins",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/209000",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100230611,
                 "Title": "Battlefleet Gothic: Armada 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/573100",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100045411,
                 "Title": "Battlerite",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/504370",
                 "Publisher": "Stunlock Studios",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100264211,
                 "Title": "Battlerite Royale",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/879160",
                 "Publisher": "Stunlock Studios",
                 "Genre": "Action,Massively Multiplayer Online,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100189611,
                 "Title": "Battletech",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/637090",
                 "Publisher": "Paradox Interactive AB",
                 "Genre": "Action,Adventure,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100163111,
                 "Title": "BeamNG.drive",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/284160",
                 "Publisher": "BeamNG",
                 "Genre": "Simulation,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100358211,
                 "Title": "Bear With Me: The Lost Robots",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1050000",
                 "Publisher": "Modus Games",
                 "Genre": "Adventure,Casual,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100154811,
                 "Title": "Besiege",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/346010",
                 "Publisher": "Spiderling Studios",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17935611,
                 "Title": "BioShock Infinite",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/8870",
                 "Publisher": "2K Games",
                 "Genre": "Action,First-Person Shooter,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196511,
                 "Title": "BioShock™ 2 Remastered",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/409720",
                 "Publisher": "2K Games",
                 "Genre": "Action,Role Playing,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100042811,
                 "Title": "BioShock™ Remastered",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/409710",
                 "Publisher": "2K Games",
                 "Genre": "Action,First-Person Shooter,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17948611,
                 "Title": "Black Desert Online",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/582660",
                 "Publisher": "Kakao Games Europe B.V.",
                 "Genre": "Action,Adventure,Massively Multiplayer Online,Role PlayingSimulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100407611,
                 "Title": "Black Future '88",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/751820",
                 "Publisher": "Good Shepherd Entertainment",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100134211,
                 "Title": "Black Squad",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/550650",
                 "Publisher": "Neowiz Games",
                 "Genre": "First-Person Shooter,Action,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100500611,
                 "Title": "BLACKSAD: Under the Skin",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1003890",
                 "Publisher": "Microids",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100103011,
                 "Title": "Blackwake",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/420290",
                 "Publisher": "Mastfire Studios Pty Ltd",
                 "Genre": "Action,Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100358811,
                 "Title": "Blair Witch",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1092660",
                 "Publisher": "Bloober Team NA",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100219811,
                 "Title": "BlazBlue: Cross Tag Battle",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/702890",
                 "Publisher": "Arc System Works",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100031511,
                 "Title": "Blizzard® Battle.net®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100044511,
                 "Title": "Borderlands 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/49520",
                 "Publisher": "2K Games",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100152411,
                 "Title": "Borderlands 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "2K",
                 "Genre": "Action,First-Person Shooter,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100330411,
                 "Title": "Borderlands Game of the Year Enhanced",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/729040",
                 "Publisher": "2K",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18108411,
                 "Title": "Borderlands: The Pre-Sequel",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/261640",
                 "Publisher": "2K Games",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100005111,
                 "Title": "Brawlhalla",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/291550",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Free To Play,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100369211,
                 "Title": "Brothers: A Tale of Two Sons",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/225080",
                 "Publisher": "505 Games",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100218311,
                 "Title": "Call of Cthulhu®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/399810",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100047411,
                 "Title": "Call of Duty: World at War",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/10090",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17936211,
                 "Title": "Call of Duty® 4: Modern Warfare®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/7940",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100234111,
                 "Title": "Call of Duty®: Black Ops 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17935911,
                 "Title": "Call of Duty®: Black Ops III",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/311210",
                 "Publisher": "Activision",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100005511,
                 "Title": "Call of Duty®: Infinite Warfare",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/292730",
                 "Publisher": "Activision",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100357011,
                 "Title": "Call of Duty®: Modern Warfare®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18109011,
                 "Title": "Call of Duty®: Modern Warfare® 2 Multiplayer",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/10190",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17936111,
                 "Title": "Call of Duty®: Modern Warfare® 2 Singleplayer",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/10180",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18109111,
                 "Title": "Call of Duty®: Modern Warfare® 3 Multiplayer",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/42690",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18100211,
                 "Title": "Call of Duty®: Modern Warfare® 3 singleplayer",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/42680",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100130311,
                 "Title": "Call of Duty®: WWII",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/476600",
                 "Publisher": "Activision",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100269511,
                 "Title": "CardLife: Cardboard Survival",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/920690",
                 "Publisher": "Freejam",
                 "Genre": "Action,Adventure,Massively Multiplayer Online,IndieRole Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100307211,
                 "Title": "Catherine Classic",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/893180",
                 "Publisher": "Sega Europe, Ltd.",
                 "Genre": "Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100171711,
                 "Title": "Celeste",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/504230",
                 "Publisher": "Matt Makes Games Inc.",
                 "Genre": "Action,Adventure,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100365611,
                 "Title": "Chernobylite",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1016800",
                 "Publisher": "The Farm 51",
                 "Genre": "Action,Adventure,Indie,Role PlayingSimulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100018411,
                 "Title": "Chivalry: Medieval Warfare",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/219640",
                 "Publisher": "Torn Banner Studios",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100034911,
                 "Title": "Cities: Skylines",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/255710",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Casual,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100137511,
                 "Title": "Claybook",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/661920",
                 "Publisher": "Second Order",
                 "Genre": "Action,Indie,Platformer,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100154511,
                 "Title": "Clicker Heroes",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/363970",
                 "Publisher": "Playsaurus",
                 "Genre": "Adventure,Casual,Free To Play,IndieRole Playing,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100233211,
                 "Title": "Clicker Heroes 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/629910",
                 "Publisher": "Playsaurus",
                 "Genre": "Action,Adventure,Arcade,CasualIndie,Role Playing,Simulation,Strateg",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100213011,
                 "Title": "Closers",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/215830",
                 "Publisher": "Nexon Corporation",
                 "Genre": "Free To Play,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100413511,
                 "Title": "Commandos 2 - HD Remaster",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1100410",
                 "Publisher": "Kalypso Media Group GmbH",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18100311,
                 "Title": "Company of Heroes",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/228200",
                 "Publisher": "SEGA",
                 "Genre": "Action,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100030011,
                 "Title": "Conan Exiles",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/440900",
                 "Publisher": "Funcom",
                 "Genre": "Action,Adventure,Massively Multiplayer Online,Role PlayingSimulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100523211,
                 "Title": "Conception PLUS: Maidens of the Twelve Stars",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/906510",
                 "Publisher": "Spike Chunsoft Co., Ltd.",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100247011,
                 "Title": "Construction Simulator 2 US - Pocket Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/787740",
                 "Publisher": "astragon Entertainment GmbH",
                 "Genre": "Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100354011,
                 "Title": "Constructor Plus",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/898800",
                 "Publisher": "System 3",
                 "Genre": "Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100295811,
                 "Title": "Cooking Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/641320",
                 "Publisher": "Wastelands Interactive",
                 "Genre": "Casual,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100161311,
                 "Title": "Counter-Strike",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/10",
                 "Publisher": "Valve",
                 "Genre": "First-Person Shooter,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 7315111,
                 "Title": "Counter-Strike: Global Offensive",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/730",
                 "Publisher": "Valve Corporation",
                 "Genre": "Action,First-Person Shooter,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18109611,
                 "Title": "Counter-Strike: Source",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/240",
                 "Publisher": "Valve",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100224911,
                 "Title": "Crash Bandicoot™ N. Sane Trilogy",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/731490",
                 "Publisher": "Activision",
                 "Genre": "Action,Family,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17936711,
                 "Title": "Crossfire",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Tencent",
                 "Genre": "First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100100911,
                 "Title": "Crossout",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/386180",
                 "Publisher": "Gaijin Entertainment",
                 "Genre": "Action,Massively Multiplayer Online,Racing,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100155311,
                 "Title": "Crusader Kings II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/203770",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Free To Play,Role Playing,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100379411,
                 "Title": "Crying Suns",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/873940",
                 "Publisher": "Humble Bundle",
                 "Genre": "Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100223411,
                 "Title": "Cuisine Royale",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/884660",
                 "Publisher": "Gaijin Distribution KFT",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100219911,
                 "Title": "Cultist Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/718670",
                 "Publisher": "Humble Bundle",
                 "Genre": "Indie,Role Playing,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100144311,
                 "Title": "Cuphead",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/268910",
                 "Publisher": "StudioMDHR Entertainment Inc.",
                 "Genre": "Action,Arcade,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100245711,
                 "Title": "Dakar 18",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/767390",
                 "Publisher": "Bigmoon Entertainment, Deep Silver",
                 "Genre": "Racing,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17937011,
                 "Title": "DARK SOULS™ II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/236430",
                 "Publisher": "BANDAI NAMCO Entertainment",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17937111,
                 "Title": "DARK SOULS™ II: Scholar of the First Sin",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/335300",
                 "Publisher": "BANDAI NAMCO Entertainment",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18109711,
                 "Title": "DARK SOULS™ III",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/374320",
                 "Publisher": "BANDAI NAMCO Entertainment",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100197011,
                 "Title": "DARK SOULS™: REMASTERED",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/570940",
                 "Publisher": "BANDAI NAMCO Entertainment America Inc.",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100155211,
                 "Title": "Darkest Dungeon®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/262060",
                 "Publisher": "Red Hook Studios",
                 "Genre": "Indie,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100208611,
                 "Title": "Darksiders II Deathinitive Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/388410",
                 "Publisher": "THQ Nordic",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100219111,
                 "Title": "Darksiders III",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/606280",
                 "Publisher": "THQ Nordic",
                 "Genre": "Action,Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100367411,
                 "Title": "DARKSIDERS: GENESIS",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/710920",
                 "Publisher": "THQ Nordic",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100202611,
                 "Title": "Darwin Project",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/544920",
                 "Publisher": "Scavengers Studio",
                 "Genre": "Action,Casual,Free To Play,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100199911,
                 "Title": "Dauntless",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Phoenix Labs",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100325311,
                 "Title": "Dawn of Man",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/858810",
                 "Publisher": "Madruga Works",
                 "Genre": "Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17937411,
                 "Title": "DayZ",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/221100",
                 "Publisher": "Bohemia Interactive",
                 "Genre": "Action,Adventure,First-Person Shooter,Massively Multiplayer OnlineRole Playing,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18545711,
                 "Title": "Dead by Daylight",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/381210",
                 "Publisher": "Starbreeze Studios",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100047211,
                 "Title": "Dead Cells",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/588650",
                 "Publisher": "Motion Twin",
                 "Genre": "Action,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100246211,
                 "Title": "Dead Frontier 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/744900",
                 "Publisher": "Creaky Corpse Ltd",
                 "Genre": "Action,Free To Play,Indie,Massively Multiplayer OnlineRole Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209411,
                 "Title": "Dead In Vinland",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/573120",
                 "Publisher": "Playdius, Plug In Digital",
                 "Genre": "Adventure,Indie,Role Playing,SimulationStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100202511,
                 "Title": "Deceit",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/466240",
                 "Publisher": "Automaton",
                 "Genre": "Action,Free To Play,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100184211,
                 "Title": "Deep Rock Galactic",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/548430",
                 "Publisher": "Coffee Stain Publishing",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100271811,
                 "Title": "Deep Sky Derelicts",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/698640",
                 "Publisher": "1C Entertainment",
                 "Genre": "Indie,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18278111,
                 "Title": "Deliver Us The Moon: Fortuna",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/428660",
                 "Publisher": "Wired Productions",
                 "Genre": "Action,Adventure,Indie,PuzzleSimulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100148911,
                 "Title": "Depth",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/274940",
                 "Publisher": "Digital Confectioners",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100182611,
                 "Title": "Descenders",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/681280",
                 "Publisher": "No More Robots",
                 "Genre": "Action,Racing,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100189111,
                 "Title": "DESOLATE",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/671510",
                 "Publisher": "HypeTrain Digital",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100362311,
                 "Title": "Destiny 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1085660",
                 "Publisher": "Bungie",
                 "Genre": "Action,Adventure,First-Person Shooter,Free To PlayMassively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17937711,
                 "Title": "Diablo III",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100349511,
                 "Title": "Diesel Brothers: Truck Building Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/750050",
                 "Publisher": "Code Horizon, PlayWay S.A.",
                 "Genre": "Casual,Racing,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 16703111,
                 "Title": "DiRT 3 Complete Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/321040",
                 "Publisher": "Codemasters",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100047811,
                 "Title": "DiRT 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/421020",
                 "Publisher": "Codemasters",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100229711,
                 "Title": "DiRT Rally 2.0",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/690790",
                 "Publisher": "Codemasters",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18100611,
                 "Title": "Dirty Bomb®",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/333930",
                 "Publisher": "Nexon America Inc.",
                 "Genre": "Action,Free To Play,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100480411,
                 "Title": "Disco Elysium",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/632470",
                 "Publisher": "ZA\/UM",
                 "Genre": "Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100035311,
                 "Title": "Dishonored",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/205100",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100035411,
                 "Title": "Dishonored 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/403640",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,First-Person Shooter,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100133211,
                 "Title": "Dishonored®: Death of the Outsider™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/614570",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100100311,
                 "Title": "Distance",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/233610",
                 "Publisher": "Refract",
                 "Genre": "Action,Racing,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100075911,
                 "Title": "Divinity: Original Sin 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/435150",
                 "Publisher": "Larian Studios",
                 "Genre": "Adventure,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17938011,
                 "Title": "Don't Starve",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/219740",
                 "Publisher": "Klei Entertainment",
                 "Genre": "Adventure,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18100711,
                 "Title": "Don't Starve Together",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/322330",
                 "Publisher": "Klei Entertainment",
                 "Genre": "Adventure,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100238311,
                 "Title": "Donut County",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/702670",
                 "Publisher": "Annapurna Interactive",
                 "Genre": "Adventure,Casual,Indie,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100035611,
                 "Title": "DOOM®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/379720",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 9029111,
                 "Title": "Dota 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/570",
                 "Publisher": "Valve",
                 "Genre": "Action,Free To Play,Multiplayer Online Battle Arena,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100362111,
                 "Title": "Dota Underlords",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1046930",
                 "Publisher": "Valve",
                 "Genre": "Free To Play,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100271711,
                 "Title": "Double Turn",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/762680",
                 "Publisher": "Inwave Labs",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18101111,
                 "Title": "Dragon Nest",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Eyedentity Games Inc.",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100289511,
                 "Title": "Dungreed",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/753420",
                 "Publisher": "TEAM HORAY",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100301611,
                 "Title": "DUSK",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/519860",
                 "Publisher": "New Blood Interactive",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100035811,
                 "Title": "Dying Light",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/239140",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100204811,
                 "Title": "Dying Light: Bad Blood",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/766370",
                 "Publisher": "Techland Sp. z o.o.",
                 "Genre": "Action,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100366411,
                 "Title": "EARTH DEFENSE FORCE 5",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1007040",
                 "Publisher": "D3 PUBLISHER",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100158811,
                 "Title": "Edge Of Eternity",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/269190",
                 "Publisher": "Playdius Entertainment",
                 "Genre": "Indie,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100151311,
                 "Title": "ELEX",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/411300",
                 "Publisher": "THQ Nordic",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18101311,
                 "Title": "Elite Dangerous",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/359320",
                 "Publisher": "Frontier Developments",
                 "Genre": "Action,Adventure,Massively Multiplayer Online,Role PlayingSimulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100223211,
                 "Title": "Empyrion - Galactic Survival",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/383120",
                 "Publisher": "Eleon Game Studios",
                 "Genre": "Adventure,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100074411,
                 "Title": "Endless Space® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/392110",
                 "Publisher": "SEGA",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18117111,
                 "Title": "Enter the Gungeon",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/311690",
                 "Publisher": "Devolver Digital",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 12129111,
                 "Title": "Euro Truck Simulator 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/227300",
                 "Publisher": "SCS Software",
                 "Genre": "Casual,Racing,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100026711,
                 "Title": "Europa Universalis IV",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/236850",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100045111,
                 "Title": "EVE Online",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "CCP",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online,Role PlayingStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100412011,
                 "Title": "Everreach: Project Eden",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/915670",
                 "Publisher": "Headup",
                 "Genre": "Action,First-Person Shooter,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100023011,
                 "Title": "EVERSPACE™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/396750",
                 "Publisher": "ROCKFISH Games",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100275811,
                 "Title": "EXAPUNKS",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/716490",
                 "Publisher": "Zachtronics",
                 "Genre": "Indie,Puzzle,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100204611,
                 "Title": "F1® 2018",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/737800",
                 "Publisher": "Codemasters",
                 "Genre": "Simulation,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100323611,
                 "Title": "F1® 2019 Anniversary Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/928600",
                 "Publisher": "Codemasters",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100061711,
                 "Title": "F1™ 2017",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/515220",
                 "Publisher": "Codemasters",
                 "Genre": "Simulation,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18294111,
                 "Title": "Factorio",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/427520",
                 "Publisher": "Wube Software",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100162711,
                 "Title": "Fade to Silence",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/706020",
                 "Publisher": "THQ Nordic GmbH",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17939311,
                 "Title": "Fallout 3: Game of the Year Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/22370",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "First-Person Shooter,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100242311,
                 "Title": "Fallout 76",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Bethesda Softworks LLC",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17939211,
                 "Title": "Fallout: New Vegas",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/22380",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100162811,
                 "Title": "Far Cry® 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/298110",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17939611,
                 "Title": "Far Cry® 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100166911,
                 "Title": "Far Cry® 5",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/552520",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100091011,
                 "Title": "Far Cry® 5",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100263711,
                 "Title": "Far Cry® New Dawn",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100263611,
                 "Title": "Far Cry® New Dawn",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/939960",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100166811,
                 "Title": "Far Cry® Primal",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/371660",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18078311,
                 "Title": "Far Cry® Primal",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100215611,
                 "Title": "FAR: Lone Sails",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/609320",
                 "Publisher": "Mixtvision Digital",
                 "Genre": "Indie,Adventure,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100272711,
                 "Title": "Farm Together",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/673950",
                 "Publisher": "Milkstone Studios",
                 "Genre": "Casual,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100008211,
                 "Title": "Farming Simulator 17",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/447020",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100245011,
                 "Title": "Farming Simulator 19",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/787860",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Casual,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100204911,
                 "Title": "Fear The Wolves",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/819500",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Action,First-Person Shooter,Adventure,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100366511,
                 "Title": "FIA European Truck Racing Championship",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/940580",
                 "Publisher": "Bigben Interactive",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100324811,
                 "Title": "Fimbul",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/771690",
                 "Publisher": "Wild River Games",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100080811,
                 "Title": "Firewatch",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/383870",
                 "Publisher": "Panic",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100239511,
                 "Title": "Five Nights at Freddy's",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/319510",
                 "Publisher": "Scott Cawthon",
                 "Genre": "Indie,Simulation,Action,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100239611,
                 "Title": "Five Nights at Freddy's 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/332800",
                 "Publisher": "Scott Cawthon",
                 "Genre": "Indie,Simulation,Action,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100134911,
                 "Title": "Football Manager 2018",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/624090",
                 "Publisher": "SEGA",
                 "Genre": "Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100238011,
                 "Title": "Football Manager 2019",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/872790",
                 "Publisher": "SEGA",
                 "Genre": "Sports,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100134811,
                 "Title": "Football Manager Touch 2018",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/624120",
                 "Publisher": "SEGA",
                 "Genre": "Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100011411,
                 "Title": "For Honor™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100153511,
                 "Title": "For Honor™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/304390",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100344911,
                 "Title": "Forager",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/751780",
                 "Publisher": "Humble Bundle",
                 "Genre": "Action,Adventure,Casual,IndieSimulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100171511,
                 "Title": "Forged Battalion",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/686260",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100013311,
                 "Title": "Fortnite",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Publisher": "Epic Games, Inc.",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100319811,
                 "Title": "Foundation",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/690830",
                 "Publisher": "Polymorph Games",
                 "Genre": "Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100226011,
                 "Title": "Fractured Lands",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/751240",
                 "Publisher": "Unbroken Studios",
                 "Genre": "Racing,First-Person Shooter,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100070011,
                 "Title": "Friday the 13th: The Game",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/438740",
                 "Publisher": "Gun Media",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100140411,
                 "Title": "FrostPunk",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/323190",
                 "Publisher": "11 bit studios",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100311211,
                 "Title": "FrostRunner",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/934840",
                 "Publisher": "SMU Guildhall",
                 "Genre": "Action,Free To Play,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100299511,
                 "Title": "FTL: Faster Than Light",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/212680",
                 "Publisher": "Subset Games",
                 "Genre": "Casual,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100073711,
                 "Title": "Garry's Mod",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/4000",
                 "Publisher": "Valve",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100267711,
                 "Title": "Generation Zero",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/704270",
                 "Publisher": "Avalanche Studios Stockholm",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100363311,
                 "Title": "Gloomhaven",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/780290",
                 "Publisher": "Asmodee Digital",
                 "Genre": "Adventure,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100152111,
                 "Title": "Golf With Your Friends",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/431240",
                 "Publisher": "Blacklight Interactive",
                 "Genre": "Casual,Indie,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100171311,
                 "Title": "Gravel",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/558260",
                 "Publisher": "Milestone S.r.l.",
                 "Genre": "Racing,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100251811,
                 "Title": "GreedFall",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/606880",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100244511,
                 "Title": "Green Hell",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/815370",
                 "Publisher": "Creepy Jar",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18316011,
                 "Title": "Grim Dawn",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/219990",
                 "Publisher": "Crate Entertainment",
                 "Genre": "Role Playing,Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100184511,
                 "Title": "GRIP: Combat Racing",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/396900",
                 "Publisher": "Wired Productions",
                 "Genre": "Action,Indie,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100171211,
                 "Title": "GTFO",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/493520",
                 "Publisher": "10 Chambers Collective",
                 "Genre": "Action,First-Person Shooter,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100217511,
                 "Title": "Guacamelee! 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/534550",
                 "Publisher": "Drinkbox Studios",
                 "Genre": "Action,Adventure,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17940711,
                 "Title": "Guild Wars 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "NCSOFT",
                 "Genre": "Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100270211,
                 "Title": "GUILTY GEAR Xrd -REVELATOR-",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/520440",
                 "Publisher": "Arc System Works",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100228211,
                 "Title": "Hacknet",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/365450",
                 "Publisher": "Surprise Attack",
                 "Genre": "Indie,Simulation,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18111211,
                 "Title": "Half-Life®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/70",
                 "Publisher": "Valve",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 19111,
                 "Title": "Half-Life® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/220",
                 "Publisher": "Valve",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17940911,
                 "Title": "Hearthstone: Heroes of Warcraft",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18544311,
                 "Title": "Hearts of Iron IV",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/394360",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100354411,
                 "Title": "Hell Let Loose",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/686810",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Action,Casual,Indie,SimulationStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100056111,
                 "Title": "Hellblade: Senua's Sacrifice",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/414340",
                 "Publisher": "Ninja Theory",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18102511,
                 "Title": "Heroes of Newerth",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Frostburn Studios",
                 "Genre": "Free To Play,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17941011,
                 "Title": "Heroes of the Storm",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "Action,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18111711,
                 "Title": "HITMAN™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/236870",
                 "Publisher": "IO Interactive A\/S",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100214311,
                 "Title": "HITMAN™2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/863550",
                 "Publisher": "Warner Bros Interactive Entertainment",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100299411,
                 "Title": "Hobo: Tough Life",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/632300",
                 "Publisher": "Perun Creative",
                 "Genre": "Adventure,Indie,Role Playing,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100246711,
                 "Title": "Holdfast: Nations At War",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/589290",
                 "Publisher": "Anvil Game Studios",
                 "Genre": "Action,Massively Multiplayer Online,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100055211,
                 "Title": "Hollow Knight",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/367520",
                 "Publisher": "Team Cherry",
                 "Genre": "Action,Adventure,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100195811,
                 "Title": "Homefront®: The Revolution",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/223100",
                 "Publisher": "Deep Silver",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100171411,
                 "Title": "Hot Lava",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/382560",
                 "Publisher": "Klei Entertainment",
                 "Genre": "Action,Adventure,Indie,PlatformerRacing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100223511,
                 "Title": "House Flipper",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/613100",
                 "Publisher": "PlayWay S.A., Frozen District",
                 "Genre": "Casual,Family,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100181011,
                 "Title": "Human: Fall Flat",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/477160",
                 "Publisher": "Curve Digital",
                 "Genre": "Adventure,Indie,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100162611,
                 "Title": "Hunt: Showdown",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/594650",
                 "Publisher": "Crytek",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100261211,
                 "Title": "I’m not a Monster",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/826600",
                 "Publisher": "Alawar Premium",
                 "Genre": "Indie,Massively Multiplayer Online,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100478211,
                 "Title": "Ice Age: Scrat's Nutty Adventure",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/751060",
                 "Publisher": "Outright Games Ltd",
                 "Genre": "Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100155911,
                 "Title": "Idle Champions of the Forgotten Realms",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/627690",
                 "Publisher": "Codename Entertainment Inc.",
                 "Genre": "Action,Adventure,Casual,Free To PlayIndie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100199211,
                 "Title": "Immortal: Unchained",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/369440",
                 "Publisher": "Game Odyssey Limited",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100309311,
                 "Title": "Imperator: Rome",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/859580",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Casual,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100276011,
                 "Title": "Infliction",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/692100",
                 "Publisher": "Caustic Reality",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100143311,
                 "Title": "Injustice™ 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/627270",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100246411,
                 "Title": "INSOMNIA: The Ark",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/783170",
                 "Publisher": "HeroCraft",
                 "Genre": "Action,Role Playing,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100058411,
                 "Title": "Insurgency",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/222880",
                 "Publisher": "New World Interactive",
                 "Genre": "Action,Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100189811,
                 "Title": "Insurgency: Sandstorm",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/581320",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100192511,
                 "Title": "Into the Breach",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/590380",
                 "Publisher": "Subset Games",
                 "Genre": "Indie,Role Playing,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100099711,
                 "Title": "Islands of Nyne: Battle Royale",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/728540",
                 "Publisher": "Define Human Studios",
                 "Genre": "First-Person Shooter,Action,Indie,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100143511,
                 "Title": "Jurassic World Evolution™",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/648350",
                 "Publisher": "Frontier Developments Ltd.",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18656611,
                 "Title": "Kenshi",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/233860",
                 "Publisher": "Lo-Fi Games",
                 "Genre": "Role Playing,Simulation,Strategy,ActionIndie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18102911,
                 "Title": "Kerbal Space Program",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/220200",
                 "Publisher": "Squad",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100037611,
                 "Title": "Killing Floor 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/232090",
                 "Publisher": "Tripwire Interactive",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100053511,
                 "Title": "Kingdom Come: Deliverance",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/379430",
                 "Publisher": "Deep Silver",
                 "Genre": "Adventure,Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100276211,
                 "Title": "Kingdom Rush Origins",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/816340",
                 "Publisher": "Ironhide Game Studio",
                 "Genre": "Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100301511,
                 "Title": "Kingdom Two Crowns",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/701160",
                 "Publisher": "Raw Fury",
                 "Genre": "Adventure,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100348311,
                 "Title": "KurtzPel",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/844870",
                 "Publisher": "KOG",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100244211,
                 "Title": "Last Tide",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/858590",
                 "Publisher": "Digital Confectioners",
                 "Genre": "Action,Indie,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 3883111,
                 "Title": "League of Legends",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Publisher": "Riot Games",
                 "Genre": "Action,Free To Play,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100037811,
                 "Title": "Left 4 Dead 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/550",
                 "Publisher": "Valve",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100194411,
                 "Title": "LEGO® Batman 2 DC Super Heroes™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/213330",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Family,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100195311,
                 "Title": "LEGO® Batman: The Videogame",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/21000",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196411,
                 "Title": "LEGO® Batman™ 3: Beyond Gotham",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/313690",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100236211,
                 "Title": "LEGO® DC Super-Villains",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/829110",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100194911,
                 "Title": "LEGO® Harry Potter: Years 1-4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/21130",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196211,
                 "Title": "LEGO® Jurassic World",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/352400",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Family,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100135011,
                 "Title": "LEGO® Marvel Super Heroes 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/647830",
                 "Publisher": "Warner Bros. Interactive",
                 "Genre": "Action,Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196611,
                 "Title": "LEGO® MARVEL's Avengers",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/405310",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196311,
                 "Title": "LEGO® Marvel™ Super Heroes",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/249130",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100208011,
                 "Title": "LEGO® The Incredibles",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/818320",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Family,Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100264311,
                 "Title": "LEGO® Worlds",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/332310",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Adventure,Casual,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100271211,
                 "Title": "Leisure Suit Larry - Wet Dreams Don't Dry",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/765870",
                 "Publisher": "Assemble Entertainment",
                 "Genre": "Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100276511,
                 "Title": "Lethal League Blaze",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/553310",
                 "Publisher": "Team Reptile",
                 "Genre": "Action,Indie,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17949011,
                 "Title": "Lineage® II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "NCSOFT",
                 "Genre": "Free To Play,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100476411,
                 "Title": "Little Big Workshop",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/574720",
                 "Publisher": "HandyGames, THQ Nordic",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100189711,
                 "Title": "Lonely Mountains: Downhill",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/711540",
                 "Publisher": "Megagon industries",
                 "Genre": "Action,Indie,Racing,SimulationSports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100037911,
                 "Title": "Mad Max",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/234140",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100043311,
                 "Title": "Mafia III",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/360430",
                 "Publisher": "2K Games",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100188011,
                 "Title": "Magic the Gathering: Arena",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Hasbro, Inc.",
                 "Genre": "Puzzle,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100186611,
                 "Title": "Mechwarrior 5: Mercenaries",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Piranha Games Inc.",
                 "Genre": "Action,Massively Multiplayer Online,Simulation",
                 "Status": "PATCHING"
                },
                {
                 "ID": 100140211,
                 "Title": "MEG 9: Lost Echoes",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/405190",
                 "Publisher": "Skunkwerks Kinetic",
                 "Genre": "Action,Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100126811,
                 "Title": "Men of War: Assault Squad 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/244450",
                 "Publisher": "1C Company",
                 "Genre": "Action,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100195711,
                 "Title": "Metro 2033 Redux",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/286690",
                 "Publisher": "Deep Silver",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100315611,
                 "Title": "Metro Exodus",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Deep Silver",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100152311,
                 "Title": "Metro Exodus",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/412020",
                 "Publisher": "Deep Silver",
                 "Genre": "First-Person Shooter,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196011,
                 "Title": "Metro: Last Light Redux",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/287390",
                 "Publisher": "Deep Silver",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100038211,
                 "Title": "Middle-earth™: Shadow of Mordor™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/241930",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100057511,
                 "Title": "Middle-earth™: Shadow of War™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/356190",
                 "Publisher": "WB Games",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100062611,
                 "Title": "Minecraft: Java Version",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Microsoft Studios",
                 "Genre": "Action,Adventure,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100354611,
                 "Title": "Minion Masters",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/489520",
                 "Publisher": "BetaDwarf",
                 "Genre": "Action,Free To Play,Indie,Massively Multiplayer OnlineStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100313611,
                 "Title": "Miracle snack shop",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/995460",
                 "Publisher": "TALESSHOP Co., Ltd.",
                 "Genre": "Casual,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100304711,
                 "Title": "Monster Energy Supercross - The Official Videogame 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/882020",
                 "Publisher": "Milestone S.r.l.",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100566811,
                 "Title": "Monster Energy Supercross - The Official Videogame 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1089830",
                 "Publisher": "Milestone S.r.l.",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100220011,
                 "Title": "Moonlighter",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/606150",
                 "Publisher": "11 bit studios",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100378511,
                 "Title": "Moons of Madness™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1012840",
                 "Publisher": "Funcom",
                 "Genre": "Adventure,Casual,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100346211,
                 "Title": "MORDHAU",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/629760",
                 "Publisher": "Triternion",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100310411,
                 "Title": "Mortal Kombat 11",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/976310",
                 "Publisher": "Warner Bros Interactive Entertainment",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 15316111,
                 "Title": "Mortal Kombat X",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/307780",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Arcade",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100523811,
                 "Title": "Mosaic",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/349270",
                 "Publisher": "Raw Fury Games",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100071711,
                 "Title": "MOTHERGUNSHIP",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/574090",
                 "Publisher": "Grip Digital",
                 "Genre": "Action,Indie,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100323311,
                 "Title": "MotoGP™19",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/984780",
                 "Publisher": "Milestone S.r.l.",
                 "Genre": "Racing,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100062211,
                 "Title": "Mount & Blade",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/22100",
                 "Publisher": "TaleWorlds Entertainment",
                 "Genre": "Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17949211,
                 "Title": "Mount & Blade: Warband",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/48700",
                 "Publisher": "TaleWorlds Entertainment",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100299111,
                 "Title": "MUSYNX",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/952040",
                 "Publisher": "Zodiac Interactive",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100290811,
                 "Title": "Mutant Year Zero: Road to Eden",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/760060",
                 "Publisher": "Funcom",
                 "Genre": "Adventure,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100324011,
                 "Title": "MXGP 2019 - The Official Motocross Videogame",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1018160",
                 "Publisher": "Milestone S.r.l.",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100269611,
                 "Title": "My Memory of Us",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/651500",
                 "Publisher": "IMGN.PRO",
                 "Genre": "Action,Adventure,Casual,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100185211,
                 "Title": "My Time at Portia",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/666140",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Adventure,Casual,Family,IndieRole Playing,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100253511,
                 "Title": "Myst III: Exile",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/925930",
                 "Publisher": "Cyan Worlds Inc.",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100253611,
                 "Title": "Myst IV: Revelation",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/925940",
                 "Publisher": "Cyan Worlds Inc.",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100206811,
                 "Title": "Myst V: End of Ages",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/208110",
                 "Publisher": "Cyan Worlds Inc.",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100206411,
                 "Title": "Myst® Masterpiece Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/63660",
                 "Publisher": "Cyan Worlds Inc.",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100021511,
                 "Title": "Narcosis",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/366870",
                 "Publisher": "Honor Code, Inc.",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100247111,
                 "Title": "NASCAR Heat 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/905450",
                 "Publisher": "704 Games Company",
                 "Genre": "Sports,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100270711,
                 "Title": "NBA 2K Playgrounds 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/726590",
                 "Publisher": "2K",
                 "Genre": "Sports,Arcade",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100011211,
                 "Title": "NBA 2K17",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/385760",
                 "Publisher": "2K",
                 "Genre": "Sports,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100128211,
                 "Title": "NBA 2K18",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/577800",
                 "Publisher": "2K",
                 "Genre": "Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100201511,
                 "Title": "NBA 2K19",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/841370",
                 "Publisher": "2K",
                 "Genre": "Sports,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100061011,
                 "Title": "Nex Machina",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/404540",
                 "Publisher": "Housemarque",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100139811,
                 "Title": "Next Day: Survival",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/519190",
                 "Publisher": "Last Level",
                 "Genre": "Action,Indie,Role Playing,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100038411,
                 "Title": "No Man's Sky",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/275850",
                 "Publisher": "Hello Games",
                 "Genre": "Adventure,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100269811,
                 "Title": "Orwell: Keeping an Eye On You",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/491950",
                 "Publisher": "Fellow Traveller",
                 "Genre": "Adventure,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209511,
                 "Title": "Out of the Park Baseball 19",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/619290",
                 "Publisher": "Out of the Park Developments",
                 "Genre": "Sports,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196711,
                 "Title": "Outlast",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/238320",
                 "Publisher": "Red Barrels",
                 "Genre": "Action,Indie,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100002611,
                 "Title": "Outward",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/794260",
                 "Publisher": "Deep Silver",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100235911,
                 "Title": "Overcooked 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/728880",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Action,Casual,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100215111,
                 "Title": "OVERKILL's The Walking Dead",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/717690",
                 "Publisher": "OVERKILL - A Starbreeze Studio",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100379511,
                 "Title": "Overland",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/355680",
                 "Publisher": "Finji",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18113011,
                 "Title": "Overwatch",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "First-Person Shooter,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100065611,
                 "Title": "Owlboy",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/115800",
                 "Publisher": "D-Pad Studio",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100142711,
                 "Title": "Oxygen Not Included",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/457140",
                 "Publisher": "Klei Entertainment",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100022811,
                 "Title": "Paladins®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/444090",
                 "Publisher": "Hi-Rez Studios, Inc.",
                 "Genre": "Action,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100239911,
                 "Title": "Papers, Please",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/239030",
                 "Publisher": 3909,
                 "Genre": "Adventure,Casual,Indie,PuzzleSimulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100299211,
                 "Title": "Parkitect",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/453090",
                 "Publisher": "Texel Raptor",
                 "Genre": "Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100151511,
                 "Title": "Past Cure",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/646050",
                 "Publisher": "Phantom 8",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100366111,
                 "Title": "Path of Exile",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Grinding Gear Games",
                 "Genre": "Adventure,Free To Play,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100233711,
                 "Title": "Pathfinder: Kingmaker® - Enhanced Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/640820",
                 "Publisher": "Deep Silver",
                 "Genre": "Role Playing,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100349311,
                 "Title": "Pax Nova",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/804850",
                 "Publisher": "Iceberg Interactive",
                 "Genre": "Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100039111,
                 "Title": "PAYDAY 2: Ultimate Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/218620",
                 "Publisher": "Starbreeze Publishing AB, 505 Games",
                 "Genre": "Action,First-Person Shooter,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209211,
                 "Title": "PC Building Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/621060",
                 "Publisher": "The Irregular Corporation",
                 "Genre": "Simulation,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100186011,
                 "Title": "Phantom Doctrine",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/559100",
                 "Publisher": "Good Shepherd Entertainment",
                 "Genre": "Action,Role Playing,Strategy,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18104311,
                 "Title": "Pillars of Eternity",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/291650",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100212911,
                 "Title": "Pillars of Eternity II: Deadfire",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/560130",
                 "Publisher": "Obsidian Entertainment",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100080311,
                 "Title": "PixARK",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/593600",
                 "Publisher": "Snail Game",
                 "Genre": "Action,Adventure,Casual,IndieMassively Multiplayer Online,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100319611,
                 "Title": "Plane Mechanic Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/803980",
                 "Publisher": "Movie Games S.A., PlayWay S.A.",
                 "Genre": "Casual,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100246111,
                 "Title": "PLANET ALPHA",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/485030",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Action,Adventure,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100102911,
                 "Title": "Planet Coaster®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/493340",
                 "Publisher": "Frontier Developments",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100267511,
                 "Title": "Planet Zoo",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/703080",
                 "Publisher": "Frontier Developments",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17943811,
                 "Title": "PlanetSide 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/218230",
                 "Publisher": "Daybreak Game Company",
                 "Genre": "Action,First-Person Shooter,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100304511,
                 "Title": "Planetside Arena",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/987350",
                 "Publisher": "Daybreak Game Company",
                 "Genre": "Action,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100059711,
                 "Title": "PLAYERUNKNOWN'S BATTLEGROUNDS",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/578080",
                 "Publisher": "PUBG Corporation",
                 "Genre": "Action,Adventure,First-Person Shooter,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100167211,
                 "Title": "PLAYERUNKNOWN'S BATTLEGROUNDS Test Server",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/622590",
                 "Publisher": "PUBG Corporation",
                 "Genre": "Action,Adventure,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18113211,
                 "Title": "Portal 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/620",
                 "Publisher": "Valve",
                 "Genre": "Action,Adventure,First-Person Shooter,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100138311,
                 "Title": "Portal™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/400",
                 "Publisher": "Valve",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100238511,
                 "Title": "Post Scriptum",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/736220",
                 "Publisher": "Offworld Industries",
                 "Genre": "Action,Indie,Massively Multiplayer Online,SimulationStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100514311,
                 "Title": "Praetorians - HD Remaster",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1100420",
                 "Publisher": "Kalypso Media Group",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100320111,
                 "Title": "Praey for the Gods",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/494430",
                 "Publisher": "No Matter Studios",
                 "Genre": "Action,Adventure,Indie,Role PlayingSimulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100047711,
                 "Title": "Prey®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/480490",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17944011,
                 "Title": "Project CARS",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/234630",
                 "Publisher": "Slightly Mad Studios",
                 "Genre": "Casual,Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100128311,
                 "Title": "Project CARS 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/378860",
                 "Publisher": "BANDAI NAMCO Entertainment",
                 "Genre": "Simulation,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100263311,
                 "Title": "Project Winter",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/774861",
                 "Publisher": "Other Ocean",
                 "Genre": "Action,Adventure,Casual,IndieStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100203811,
                 "Title": "PUBG: Closed Experimental Server",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/813000",
                 "Publisher": "PUBG Corporation",
                 "Genre": "Action,Adventure,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100272011,
                 "Title": "Pummel Party",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/880940",
                 "Publisher": "Rebuilt Games",
                 "Genre": "Action,Casual,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100184611,
                 "Title": "Pure Farming 2018",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/534370",
                 "Publisher": "Techland Publishing",
                 "Genre": "Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100067411,
                 "Title": "Pyre",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/462770",
                 "Publisher": "Supergiant Games",
                 "Genre": "Action,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100132411,
                 "Title": "Q.U.B.E. 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/359100",
                 "Publisher": "Trapped Nerve Ltd",
                 "Genre": "Indie,Adventure,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100349211,
                 "Title": "Quake II RTX",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1089130",
                 "Publisher": "NVIDIA Corporation",
                 "Genre": "Action,First-Person Shooter,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100060811,
                 "Title": "Quake® Champions",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/611500",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "First-Person Shooter,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100523111,
                 "Title": "Race With Ryan",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1054990",
                 "Publisher": "Outright Games Ltd",
                 "Genre": "Family,Racing,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100365111,
                 "Title": "RAD",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/722560",
                 "Publisher": "BANDAI NAMCO Entertainment America Inc.",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100205411,
                 "Title": "Raft",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/648800",
                 "Publisher": "Axolot Games",
                 "Genre": "Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100249611,
                 "Title": "RAGE 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Bethesda Softworks LLC",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100222511,
                 "Title": "RAGE 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/548570",
                 "Publisher": "Bethesda Softworks LLC",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100139711,
                 "Title": "RAID: World War II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/414740",
                 "Publisher": "Starbreeze Publishing AB",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209011,
                 "Title": "Ravenfield",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/636480",
                 "Publisher": "SteelRaven7",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100161511,
                 "Title": "Realm Grinder",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/610080",
                 "Publisher": "Kongregate",
                 "Genre": "Casual,Free To Play,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100221711,
                 "Title": "Realm Royale",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/813820",
                 "Publisher": "Hi-Rez Studios",
                 "Genre": "Action,Free To Play,First-Person Shooter,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100206111,
                 "Title": "realMyst: Masterpiece Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/244430",
                 "Publisher": "Cyan Worlds Inc.",
                 "Genre": "Adventure,Casual,Indie,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100271011,
                 "Title": "Reigns: Game of Thrones",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/897820",
                 "Publisher": "Devolver Digital",
                 "Genre": "Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100251111,
                 "Title": "Remnant: From the Ashes",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/617290",
                 "Publisher": "Perfect World Entertainment",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100215311,
                 "Title": "Rend",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/547860",
                 "Publisher": "Frostkeep Studios",
                 "Genre": "Action,Adventure,Indie,Massively Multiplayer OnlineRole Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100271511,
                 "Title": "RIDE 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/759740",
                 "Publisher": "Milestone S.r.l.",
                 "Genre": "Racing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100079611,
                 "Title": "RiME",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/493200",
                 "Publisher": "Grey Box",
                 "Genre": "Adventure,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100155011,
                 "Title": "RimWorld",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/294100",
                 "Publisher": "Ludeon Studios",
                 "Genre": "Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196111,
                 "Title": "Risen 3 - Titan Lords",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/249230",
                 "Publisher": "Deep Silver",
                 "Genre": "Role Playing,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100072711,
                 "Title": "Rising Storm 2: Vietnam",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/418460",
                 "Publisher": "Tripwire Interactive",
                 "Genre": "Action,Massively Multiplayer Online,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100206311,
                 "Title": "Riven: The Sequel to MYST",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/63610",
                 "Publisher": "Cyan Worlds Inc.",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17034111,
                 "Title": "Rocket League®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/252950",
                 "Publisher": "Psyonix, inc.",
                 "Genre": "Action,Arcade,Casual,RacingSports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100567011,
                 "Title": "Rugby 20",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/846730",
                 "Publisher": "Bigben Interactive",
                 "Genre": "Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100240011,
                 "Title": "Russian Fishing 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/766570",
                 "Publisher": "Russian Fishing",
                 "Genre": "Adventure,Casual,Free To Play,Massively Multiplayer OnlineRole Playing,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18105111,
                 "Title": "Rust",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/252490",
                 "Publisher": "Facepunch Studios",
                 "Genre": "Action,Adventure,Indie,Massively Multiplayer OnlineRole Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100195911,
                 "Title": "Sacred 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/247950",
                 "Publisher": "Deep Silver",
                 "Genre": "Role Playing,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100220111,
                 "Title": "Salt and Sanctuary",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/283640",
                 "Publisher": "Ska Studios",
                 "Genre": "Action,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100202711,
                 "Title": "SCP: Secret Laboratory",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/700330",
                 "Publisher": "Northwood Studios",
                 "Genre": "Action,First-Person Shooter,Free To Play,IndieRole Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100184811,
                 "Title": "SCUM",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/513710",
                 "Publisher": "Devolver Digital",
                 "Genre": "Action,Adventure,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100230111,
                 "Title": "Sekiro™: Shadows Die Twice",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/814380",
                 "Publisher": "Activision, Inc",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100075611,
                 "Title": "Semblance",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/700160",
                 "Publisher": "Good Shepherd Entertainment",
                 "Genre": "Indie,Puzzle,Adventure,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100352711,
                 "Title": "Session: Skateboarding Sim Game",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/861650",
                 "Publisher": "Crea-ture Studios",
                 "Genre": "Indie,Simulation,Sports,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100039511,
                 "Title": "Shadow Warrior 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/324800",
                 "Publisher": "Devolver Digital",
                 "Genre": "Action,Adventure,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100223111,
                 "Title": "Shadowrun Returns",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/234650",
                 "Publisher": "Harebrained Schemes",
                 "Genre": "Adventure,Indie,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100233511,
                 "Title": "Shenmue I & II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/758330",
                 "Publisher": "SEGA",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100358411,
                 "Title": "Shenmue III",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Deep Silver",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100007011,
                 "Title": "Sid Meier’s Civilization® VI",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/289070",
                 "Publisher": "2K Games",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100030311,
                 "Title": "Sid Meier's Civilization® V",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/8930",
                 "Publisher": "2K Games",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100368711,
                 "Title": "Silver Chains",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/975470",
                 "Publisher": "Headup",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100409411,
                 "Title": "Skybolt Zack",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/909670",
                 "Publisher": "Green Man Gaming",
                 "Genre": "Action,Adventure,Arcade,IndiePlatformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100188611,
                 "Title": "Slay the Spire",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/646570",
                 "Publisher": "Mega Crit Games",
                 "Genre": "Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100039711,
                 "Title": "SMITE®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/386360",
                 "Publisher": "Hi-Rez Studios",
                 "Genre": "Action,Free To Play,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18114211,
                 "Title": "Sniper Elite 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/238090",
                 "Publisher": "Rebellion",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18545611,
                 "Title": "Sniper Elite 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/312660",
                 "Publisher": "Rebellion",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100348411,
                 "Title": "Sniper Elite V2 Remastered",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/728740",
                 "Publisher": "Rebellion",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100244411,
                 "Title": "SOMA",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/282140",
                 "Publisher": "Frictional Games",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100143111,
                 "Title": "Sonic Forces",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/637100",
                 "Publisher": "SEGA",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100155111,
                 "Title": "Sonic Mania",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/584400",
                 "Publisher": "SEGA",
                 "Genre": "Action,Adventure,Family,Arcade",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100205111,
                 "Title": "SOULCALIBUR™ VI",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/544750",
                 "Publisher": "Bandai Namco Entertainment",
                 "Genre": "Action,Arcade",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100196911,
                 "Title": "SoulWorker",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/630100",
                 "Publisher": "Gameforge 4D GmbH",
                 "Genre": "Free To Play,Role Playing,Massively Multiplayer Online,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100057811,
                 "Title": "Space Engineers",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/244850",
                 "Publisher": "Keen Software House",
                 "Genre": "Action,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100230711,
                 "Title": "Space Hulk: Tactics",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/492230",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100063311,
                 "Title": "Spacelords",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/436180",
                 "Publisher": "MercurySteam",
                 "Genre": "Adventure,Action,Free To Play,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100068011,
                 "Title": "SpellForce 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/311290",
                 "Publisher": "THQ Nordic",
                 "Genre": "Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100354111,
                 "Title": "SpellForce 3: Soul Harvest",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/817540",
                 "Publisher": "THQ Nordic",
                 "Genre": "Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100137911,
                 "Title": "Spintires: MudRunner",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/675010",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Simulation,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100348011,
                 "Title": "Splitgate: Arena Warfare",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/677620",
                 "Publisher": "1047 Games",
                 "Genre": "First-Person Shooter,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209111,
                 "Title": "SpyParty",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/329070",
                 "Publisher": "Chris Hecker",
                 "Genre": "Action,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100365711,
                 "Title": "Spyro™ Reignited Trilogy",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/996580",
                 "Publisher": "Activision",
                 "Genre": "Action,Adventure,First-Person Shooter,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100045311,
                 "Title": "Squad",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/393380",
                 "Publisher": "Offworld Industries",
                 "Genre": "Action,Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100199311,
                 "Title": "Star Control®: Origins",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/271260",
                 "Publisher": "Stardock Entertainment",
                 "Genre": "Action,Adventure,Casual,IndieRole Playing,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100154311,
                 "Title": "Star Wars: Battlefront 2 (Classic, 2005)",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/6060",
                 "Publisher": "Disney Interactive",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100140811,
                 "Title": "STAR WARS™ - Knights of the Old Republic™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/32370",
                 "Publisher": "Disney Interactive, Lucasfilm",
                 "Genre": "Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100040111,
                 "Title": "Starbound",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/211820",
                 "Publisher": "Chucklefish",
                 "Genre": "Action,Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17945511,
                 "Title": "StarCraft II®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100062811,
                 "Title": "StarCraft® Remastered",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Activision Blizzard",
                 "Genre": "Strategy,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18114411,
                 "Title": "Stardew Valley",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/413150",
                 "Publisher": "Chucklefish",
                 "Genre": "Indie,Role Playing,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209311,
                 "Title": "Startup Company",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/606800",
                 "Publisher": "Hovgaard Games",
                 "Genre": "Casual,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100021711,
                 "Title": "Steam®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/",
                 "Publisher": "Valve Corporation",
                 "Genre": "",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18278011,
                 "Title": "Stellaris",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/281990",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100482711,
                 "Title": "Still There",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1063490",
                 "Publisher": "Iceberg Interactive",
                 "Genre": "Adventure,Indie,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100201411,
                 "Title": "Strange Brigade",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/312670",
                 "Publisher": "Rebellion",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18315311,
                 "Title": "Subnautica",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/264710",
                 "Publisher": "Unknown Worlds",
                 "Genre": "Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100318611,
                 "Title": "Subnautica: Below Zero",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/848450",
                 "Publisher": "Unknown Worlds Entertainment",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100220211,
                 "Title": "Sundered",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/535480",
                 "Publisher": "Thunder Lotus Games",
                 "Genre": "Action,Adventure,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100263111,
                 "Title": "Sunset Overdrive",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/847370",
                 "Publisher": "Microsoft Studios",
                 "Genre": "Action,First-Person Shooter,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100072111,
                 "Title": "Super Mega Baseball 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/414870",
                 "Publisher": "Metalhead Software Inc.",
                 "Genre": "Indie,Family,Sports,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100183711,
                 "Title": "Surviving Mars",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/464920",
                 "Publisher": "Paradox Interactive",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100184311,
                 "Title": "Switchblade",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/585630",
                 "Publisher": "Lucid Publishing Ltd",
                 "Genre": "Indie,Action,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100057911,
                 "Title": "Tabletop Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/286160",
                 "Publisher": "Berserk Games",
                 "Genre": "Casual,Family,Indie,Role PlayingStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100069811,
                 "Title": "Tacoma",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/343860",
                 "Publisher": "Fullbright",
                 "Genre": "Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18114511,
                 "Title": "Team Fortress 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/440",
                 "Publisher": "Valve",
                 "Genre": "Action,Free To Play",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100332711,
                 "Title": "Team Sonic Racing™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/785260",
                 "Publisher": "SEGA",
                 "Genre": "Family,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18319211,
                 "Title": "TEKKEN 7",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/389730",
                 "Publisher": "BANDAI NAMCO Entertainment",
                 "Genre": "Action,Arcade",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17945611,
                 "Title": "TERA",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/323370",
                 "Publisher": "En Masse Entertainment",
                 "Genre": "Action,Adventure,Free To Play,Massively Multiplayer OnlineRole Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100483111,
                 "Title": "Terminator: Resistance",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/954740",
                 "Publisher": "Reef Entertainment",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17949811,
                 "Title": "Terraria",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/105600",
                 "Publisher": "Re-Logic",
                 "Genre": "Action,Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100220611,
                 "Title": "The Bard's Tale IV",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/566090",
                 "Publisher": "inXile Entertainment",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100393811,
                 "Title": "The Bradwell Conspiracy",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/421790",
                 "Publisher": "Bossa Studios",
                 "Genre": "Adventure,Casual,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100095311,
                 "Title": "The Crew® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Racing,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100154211,
                 "Title": "The Crew® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/646910",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Racing,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17945911,
                 "Title": "The Crew™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Massively Multiplayer Online,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100154111,
                 "Title": "The Crew™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/241560",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Massively Multiplayer Online,Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100081211,
                 "Title": "The D.R.G. Initiative",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/613580",
                 "Publisher": "Slingshot Cartel",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100208311,
                 "Title": "The Darkness II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/67370",
                 "Publisher": "2K Games",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 8843111,
                 "Title": "The Elder Scrolls V: Skyrim",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/72850",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100010811,
                 "Title": "The Elder Scrolls V: Skyrim Special Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/489830",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 11154111,
                 "Title": "The Elder Scrolls® Online: Elsweyr",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/306130",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Role Playing,Massively Multiplayer Online,Adventure,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100128411,
                 "Title": "The Evil Within 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/601430",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100474711,
                 "Title": "The Fisherman - Fishing Planet",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1072480",
                 "Publisher": "Bigben Interactive",
                 "Genre": "Massively Multiplayer Online,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100028911,
                 "Title": "The Forest",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/242760",
                 "Publisher": "Endnight Games Ltd",
                 "Genre": "First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100244111,
                 "Title": "The Golf Club™ 2019 featuring PGA TOUR",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/695290",
                 "Publisher": "2K",
                 "Genre": "Sports,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100331011,
                 "Title": "The Isle",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/376210",
                 "Publisher": "Afterthought LLC",
                 "Genre": "Action,Adventure,Indie,Massively Multiplayer OnlineSimulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100236711,
                 "Title": "The Jackbox Party Pack 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/434170",
                 "Publisher": "Jackbox Games, Inc.",
                 "Genre": "Casual,Family,Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100246911,
                 "Title": "THE KING OF FIGHTERS '98 ULTIMATE MATCH FINAL EDITION",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/222420",
                 "Publisher": "SNK CORPORATION",
                 "Genre": "Action,Arcade",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100523711,
                 "Title": "The Legend of Bum-Bo",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1148650",
                 "Publisher": "Edmund McMillen",
                 "Genre": "Adventure,Indie,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100287211,
                 "Title": "The Legend of Heroes: Trails of Cold Steel",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/538680",
                 "Publisher": "XSEED Games, Marvelous USA, Inc.",
                 "Genre": "Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100194511,
                 "Title": "The LEGO® Movie - Videogame",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/267530",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Family,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100311411,
                 "Title": "The LEGO® Movie 2 Videogame",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/881320",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Adventure,Casual,Family",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100134711,
                 "Title": "The LEGO® NINJAGO® Movie Video Game",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/640590",
                 "Publisher": "Warner Bros. Interactive Entertainment",
                 "Genre": "Action,Family,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100104511,
                 "Title": "The Long Dark",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/305620",
                 "Publisher": "Hinterland Studio Inc.",
                 "Genre": "Adventure,Indie,Strategy,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100060911,
                 "Title": "The Surge",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/378540",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100282611,
                 "Title": "The Surge 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/644830",
                 "Publisher": "Focus Home Interactive",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100235611,
                 "Title": "The Walking Dead: The Final Season",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/866800",
                 "Publisher": "Telltale Games",
                 "Genre": "Adventure,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100079811,
                 "Title": "The Witcher 2: Assassins of Kings Enhanced Edition",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/20920",
                 "Publisher": "CD Projekt RED",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100044011,
                 "Title": "The Witcher® 3: Wild Hunt",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/292030",
                 "Publisher": "CD PROJEKT RED",
                 "Genre": "Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100013211,
                 "Title": "The Witness",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/210970",
                 "Publisher": "Thekla, Inc.",
                 "Genre": "Adventure,Casual,Indie,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100164811,
                 "Title": "theHunter: Call of the Wild™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/518790",
                 "Publisher": "Avalanche Studios",
                 "Genre": "Adventure,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100170711,
                 "Title": "They Are Billions",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/644930",
                 "Publisher": "Numantian Games",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100287611,
                 "Title": "Thief Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/704850",
                 "Publisher": "PlayWay S.A.",
                 "Genre": "Action,Adventure,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100012411,
                 "Title": "This War of Mine",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/282070",
                 "Publisher": "11 bit studios",
                 "Genre": "Adventure,Indie,Platformer,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100294611,
                 "Title": "Thronebreaker: The Witcher Tales",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/973760",
                 "Publisher": "CD PROJEKT RED",
                 "Genre": "Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100360411,
                 "Title": "Tom Clancy’s Ghost Recon Breakpoint",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100309911,
                 "Title": "Tom Clancy’s The Division® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,Role Playing,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100247411,
                 "Title": "Tom Clancy’s The Division® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,Role Playing,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100153611,
                 "Title": "Tom Clancy's Ghost Recon® Wildlands",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/460930",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100048011,
                 "Title": "Tom Clancy's Ghost Recon® Wildlands",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100065511,
                 "Title": "Tom Clancy's Rainbow Six® Siege",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,First-Person Shooter,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100028511,
                 "Title": "Tom Clancy's Rainbow Six® Siege",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/359550",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100218111,
                 "Title": "Tom Clancy's Rainbow Six® Siege - Technical Test Server",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100023411,
                 "Title": "Tom Clancy's The Division™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,Role Playing,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100153411,
                 "Title": "Tom Clancy's The Division™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/365590",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure,Role Playing,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18105811,
                 "Title": "Torchlight II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/200710",
                 "Publisher": "Runic Games",
                 "Genre": "Action,Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100229811,
                 "Title": "Total War: THREE KINGDOMS",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/779340",
                 "Publisher": "SEGA",
                 "Genre": "Action,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100351311,
                 "Title": "Totally Accurate Battle Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/508440",
                 "Publisher": "Landfall",
                 "Genre": "Casual,Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100139911,
                 "Title": "Totally Accurate Battlegrounds",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/823130",
                 "Publisher": "Landfall",
                 "Genre": "Action,Casual,Indie,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209711,
                 "Title": "Tower of Time",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/617480",
                 "Publisher": "Event Horizon",
                 "Genre": "Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100249411,
                 "Title": "Transport Fever",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/446800",
                 "Publisher": "Good Shepherd Entertainment",
                 "Genre": "Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100408211,
                 "Title": "Transport Fever 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1066780",
                 "Publisher": "Good Shepherd Entertainment",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18114911,
                 "Title": "Tree of Savior",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/372000",
                 "Publisher": "IMCGAMES Co.,Ltd.",
                 "Genre": "Free To Play,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100230011,
                 "Title": "Trials® Rising",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/641080",
                 "Publisher": "Ubisoft",
                 "Genre": "Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100229911,
                 "Title": "Trials® Rising",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100239211,
                 "Title": "Tricky Towers",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/437920",
                 "Publisher": "WeirdBeard",
                 "Genre": "Casual,Indie,Puzzle,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100378711,
                 "Title": "Trine 4: The Nightmare Prince",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/690640",
                 "Publisher": "Frozenbyte",
                 "Genre": "Action,Adventure,Indie,PlatformerPuzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100356711,
                 "Title": "Triton Survival",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1013450",
                 "Publisher": "DreamsSoftGames",
                 "Genre": "Action,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100224311,
                 "Title": "Tropico 6",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/492720",
                 "Publisher": "Kalypso Media",
                 "Genre": "Casual,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18106011,
                 "Title": "Trove",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/304050",
                 "Publisher": "Trion Worlds",
                 "Genre": "Action,Adventure,Casual,Free To PlayIndie,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100355511,
                 "Title": "Trover Saves The Universe",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1051200",
                 "Publisher": "Squanch Games, Inc.",
                 "Genre": "Action,Adventure,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100197211,
                 "Title": "TT Isle of Man",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/626610",
                 "Publisher": "Bigben Interactive",
                 "Genre": "Racing,Sports,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100234411,
                 "Title": "Two Point Hospital",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/535930",
                 "Publisher": "SEGA",
                 "Genre": "Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100246311,
                 "Title": "Ultimate Fishing Simulator",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/468920",
                 "Publisher": "Ultimate Games S.A., PlayWay S.A.",
                 "Genre": "Casual,Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100235411,
                 "Title": "Underworld Ascendant®",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/692840",
                 "Publisher": "505 Games",
                 "Genre": "Action,Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100223711,
                 "Title": "Unknown Fate",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/510390",
                 "Publisher": "1C Publishing",
                 "Genre": "Indie,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17950011,
                 "Title": "Unturned",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/304930",
                 "Publisher": "Smartly Dressed Games",
                 "Genre": "Action,Adventure,Free To Play,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100207011,
                 "Title": "URU: Complete Chronicles",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/63650",
                 "Publisher": "Cyan Worlds Inc.",
                 "Genre": "Adventure,Casual,Puzzle",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100238111,
                 "Title": "Valkyria Chronicles 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/790820",
                 "Publisher": "SEGA",
                 "Genre": "Action,Role Playing,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100080411,
                 "Title": "Vampyr",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/427290",
                 "Publisher": "Dontnod Entertainment",
                 "Genre": "Action,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100068111,
                 "Title": "Vanquish",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/460810",
                 "Publisher": "SEGA",
                 "Genre": "First-Person Shooter,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100241511,
                 "Title": "V-Rally 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/658700",
                 "Publisher": "Bigben",
                 "Genre": "Racing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100301811,
                 "Title": "War of Rights",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/424030",
                 "Publisher": "Campfire Games",
                 "Genre": "Action,Indie,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 10839111,
                 "Title": "War Thunder",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Publisher": "Gaijin Entertainment",
                 "Genre": "Action,Massively Multiplayer Online,Free To Play,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100234911,
                 "Title": "War Thunder",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/236390",
                 "Publisher": "Gaijin Entertainment",
                 "Genre": "Massively Multiplayer Online,Free To Play,Simulation,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 11285111,
                 "Title": "Warframe",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/230410",
                 "Publisher": "Digital Extremes",
                 "Genre": "Action,Free To Play,Multiplayer Online Battle Arena",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100219711,
                 "Title": "Warhammer 40,000: Inquisitor - Martyr",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/527430",
                 "Publisher": "NeocoreGames",
                 "Genre": "Action,Indie,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100355011,
                 "Title": "Warhammer 40,000: Inquisitor - Prophecy",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1042800",
                 "Publisher": "NeocoreGames",
                 "Genre": "Action,Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100271311,
                 "Title": "Warhammer 40,000: Mechanicus",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/673880",
                 "Publisher": "Kasedo Games",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100321711,
                 "Title": "Warhammer: Chaosbane",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/774241",
                 "Publisher": "Bigben Interactive",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18106411,
                 "Title": "Warhammer: End Times - Vermintide",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/235540",
                 "Publisher": "Fatshark",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100165911,
                 "Title": "Warhammer: Vermintide 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/552500",
                 "Publisher": "Fatshark",
                 "Genre": "Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100270611,
                 "Title": "WARRIORS OROCHI 4",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/831560",
                 "Publisher": "KOEI TECMO GAMES CO., LTD.",
                 "Genre": "Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 99999411,
                 "Title": "Watch_Dogs® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100163211,
                 "Title": "Watch_Dogs® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/447040",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100186311,
                 "Title": "Watch_Dogs™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100182011,
                 "Title": "Watch_Dogs™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/243470",
                 "Publisher": "Ubisoft",
                 "Genre": "Action,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18078811,
                 "Title": "We Happy Few",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/320240",
                 "Publisher": "Compulsion Games",
                 "Genre": "Adventure,Role Playing,Action,Indie",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100209611,
                 "Title": "Welcome to the Game II",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/720250",
                 "Publisher": "Reflect Studios",
                 "Genre": "Indie,Simulation,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100201311,
                 "Title": "Will To Live Online",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/707010",
                 "Publisher": "AlphaSoft LLC",
                 "Genre": "Action,Indie,Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100065811,
                 "Title": "Wolfenstein® II: The New Colossus™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/612880",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "First-Person Shooter,Action",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 10591111,
                 "Title": "Wolfenstein®: The New Order",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/201810",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100102511,
                 "Title": "Wolfenstein®: The Old Blood™",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/350080",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100281311,
                 "Title": "Wolfenstein®: Youngblood",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100333411,
                 "Title": "Wolfenstein®: Youngblood",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1056960",
                 "Publisher": "Bethesda Softworks",
                 "Genre": "Action,First-Person Shooter",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 17947111,
                 "Title": "World of Tanks",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "Y",
                 "Publisher": "Wargaming",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100131011,
                 "Title": "World of Tanks: Blitz",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/444200",
                 "Publisher": "Wargaming Group Limited",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100373211,
                 "Title": "World of Warcraft Classic",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100012811,
                 "Title": "World of Warcraft: Battle for Azeroth",
                 "Highlights Supported": "N",
                 "Fully Optimized": "Y",
                 "Publisher": "Blizzard Entertainment",
                 "Genre": "Massively Multiplayer Online,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100248411,
                 "Title": "World of Warships",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/552990",
                 "Publisher": "Wargaming Group Limited",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100042411,
                 "Title": "World of Warships",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Wargaming Group Limited",
                 "Genre": "Action,Free To Play,Massively Multiplayer Online,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100275511,
                 "Title": "World War 3",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/674020",
                 "Publisher": "The Farm 51",
                 "Genre": "Action,First-Person Shooter,Indie,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100308111,
                 "Title": "World War Z",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Publisher": "Saber Interactive",
                 "Genre": "Action,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100227711,
                 "Title": "Worms W.M.D",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/327030",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Action,Casual,Family,Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100227311,
                 "Title": "Wreckfest",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/228380",
                 "Publisher": "THQ Nordic",
                 "Genre": "Action,Indie,Sports,SimulationRacing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100236011,
                 "Title": "WWE 2K19",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/817130",
                 "Publisher": "2K",
                 "Genre": "Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100372111,
                 "Title": "WWE 2K20",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1015500",
                 "Publisher": "2K",
                 "Genre": "Simulation,Sports",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100358111,
                 "Title": "Wytchsun: Elleros Origins",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/1068530",
                 "Publisher": "Rampage Interactive",
                 "Genre": "Action,Adventure,Indie,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100242711,
                 "Title": "X4: Foundations",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/392160",
                 "Publisher": "Egosoft",
                 "Genre": "Action,Simulation",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 18078511,
                 "Title": "XCOM® 2",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/268500",
                 "Publisher": "2K Games",
                 "Genre": "Strategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100192011,
                 "Title": "XERA: Survival",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/625340",
                 "Publisher": "Spotted Kiwi Productions",
                 "Genre": "Action,Adventure,Massively Multiplayer Online,SimulationStrategy",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100235311,
                 "Title": "Yakuza 0",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/638970",
                 "Publisher": "SEGA",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100289911,
                 "Title": "Yakuza Kiwami",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/834530",
                 "Publisher": "SEGA",
                 "Genre": "Action,Adventure,Role Playing",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100220411,
                 "Title": "Yoku's Island Express",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/334940",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Adventure,Family,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100068811,
                 "Title": "Yooka-Laylee",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/360830",
                 "Publisher": "Team17 Digital Ltd",
                 "Genre": "Action,Adventure,Family,IndiePlatformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100472311,
                 "Title": "Yooka-Laylee and the Impossible Lair",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/846870",
                 "Publisher": "Team17 Digital",
                 "Genre": "Adventure,Family,Indie,Platformer",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100208811,
                 "Title": "Ys VIII: Lacrimosa of DANA",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/579180",
                 "Publisher": "NIS America, Inc.",
                 "Genre": "Action,Role Playing,Adventure",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100044611,
                 "Title": "Z1 Battle Royale",
                 "Highlights Supported": "Y",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/433850",
                 "Publisher": "Daybreak Game Company",
                 "Genre": "Action,Adventure,Free To Play,Massively Multiplayer Online",
                 "Status": "AVAILABLE"
                },
                {
                 "ID": 100264111,
                 "Title": "太吾绘卷 - The Scroll Of Taiwu",
                 "Highlights Supported": "N",
                 "Fully Optimized": "N",
                 "Steam Url": "https:\/\/store.steampowered.com\/app\/838350",
                 "Publisher": "ConchShip Games",
                 "Genre": "Adventure,Casual,Indie,Role PlayingStrategy",
                 "Status": "AVAILABLE"
                }
            ]
        }
    }
})