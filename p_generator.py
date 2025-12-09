with open("source.txt", "r", encoding="utf8") as file:
    src = file.read().split("\n")
for p in src:
    print(f'<p>{p}</p>')