use colored::Colorize;

pub fn greet(name: &str, count: u32, uppercase: bool) {
    for _ in 0..count {
        let msg = if uppercase {
            format!("HELLO, {}!", name.to_uppercase())
        } else {
            format!("Hello, {}!", name)
        };
        println!("{}", msg.cyan().bold());
    }
}

pub fn list_greetings() {
    let greetings = vec![
        ("English", "Hello!"),
        ("Hindi", "Namaste!"),
        ("Spanish", "Hola!"),
        ("French", "Bonjour!"),
        ("Japanese", "Konnichiwa!"),
    ];

    println!("{}", "Available greetings:".yellow().bold());
    for (lang, greeting) in greetings {
        println!("  {} — {}", lang.green(), greeting);
    }
}
