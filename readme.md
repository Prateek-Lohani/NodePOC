# Node.js POC – Learn by Building

This project is a **proof of concept (POC)** for understanding Node.js from the ground up.

## 🚀 What's Inside

- Clean, modular file structure
- Separation of concerns using multiple files and folders
- Usage of `require` and `module.exports` for modularization
- Hands-on examples of Node.js built-in modules (crypto, util, path, etc.)
- JSON file handling
- ES Modules vs CommonJS understanding
- Password hashing and security best practices
- Minimal setup — no external libraries or frameworks

## 📚 Learning Path (Commit History)

This project follows a step-by-step learning approach. Each commit introduces a new concept and has a detailed explanation in the `commits/` folder.

All commits are documented in individual markdown files located in the `commits/` directory. Each file contains:
- Commit title and hash
- Description of what was demonstrated
- Concept learned
- Code examples
- Key takeaways

### Quick Reference Table

| Commit | Description | Concept Learned |
|--------|-------------|-----------------|
| `f0502d9` | Creating two modules and requirement of one module into main module | Basic module creation with `require` and `module.exports` |
| `65a76d8` | Accessing variables/functions of a module into different module | Exporting and importing functions between modules |
| `138d7f0` | Accessing multiple variables/functions from a module to another module | Multiple exports and destructuring imports |
| `dc0958f` | Using ES Module in place of the default commonJS module | ES Modules (`import`/`export` vs CommonJS) |
| `7513101` | Nested Modules | Organizing code in subdirectories |
| `7c46761` | Another cleaner way to deal with nested modules | Better module organization patterns |
| `90c41db` | Using JSON file | Reading and writing JSON files in Node.js |
| `d5d1a31` | Inbuilt node.js module (util module) | Using Node.js built-in utility modules |
| `0a55e01` | Hashing using Crypto Module | Basic password hashing with crypto |
| `23fb969` | Common Hash Algorithms | Understanding MD5, SHA1, SHA256, SHA512 |
| `f9862da` | How to create a hashed password to securely save it in database | Secure password storage with PBKDF2 |
| `0013b79` | Verifying password | Password verification (recommends bcrypt for production) |

### Detailed Commit Documentation

For detailed information about each commit, see the files in the `commits/` folder:
- `commits/f0502d9_creating_two_modules.md`
- `commits/65a76d8_accessing_module_functions.md`
- `commits/138d7f0_accessing_multiple_variables.md`
- `commits/dc0958f_es_module.md`
- `commits/7513101_nested_modules.md`
- `commits/7c46761_nested_modules_cleaner_way.md`
- `commits/90c41db_using_json_file.md`
- `commits/d5d1a31_inbuilt_node_modules.md`
- `commits/0a55e01_hashing_using_crypto.md`
- `commits/23fb969_common_hash_algorithms.md`
- `commits/f9862da_hashed_password.md`
- `commits/0013b79_verifying_password.md`
- `commits/path_module_basics.md`

## 🧠 Why This Exists

This is meant to be a **learning-focused** Node.js setup.  
Each commit introduces a small concept, helping you build a mental model of how Node.js works under the hood.

Use this repo to:

- Understand module resolution (`require`)
- Explore how CommonJS modules are structured
- See how Node handles file execution order
- Learn about Node.js built-in modules (crypto, util, path, fs, etc.)
- Understand password hashing and security best practices
- Practice working with a minimal Node environment

## 📁 Project Structure

```
nodejsPoc/
├── app.js                  # Main entry point (password hashing examples)
├── data.json               # Sample JSON data file
├── commits/                # Detailed commit documentation (learning guide)
│   ├── f0502d9_creating_two_modules.md
│   ├── 65a76d8_accessing_module_functions.md
│   ├── 138d7f0_accessing_multiple_variables.md
│   ├── dc0958f_es_module.md
│   ├── 7513101_nested_modules.md
│   ├── 7c46761_nested_modules_cleaner_way.md
│   ├── 90c41db_using_json_file.md
│   ├── d5d1a31_inbuilt_node_modules.md
│   ├── 0a55e01_hashing_using_crypto.md
│   ├── 23fb969_common_hash_algorithms.md
│   ├── f9862da_hashed_password.md
│   └── 0013b79_verifying_password.md
├── calculate/              # Module example directory
│   ├── index.js            # Main module exporter
│   ├── sum.js              # Sum function
│   └── multiply.js         # Multiply function
└── PathModule/             # Path module examples
    └── app.js              # Path module usage
```

## 🛠️ How to Run

1. Clone the repo:

   
```
   git clone <your-repo-url>
   cd nodejsPoc
   
```

2. Run the main application:

   
```
   node app.js
   
```

3. Explore other modules:

   
```
   node calculate/index.js
   node PathModule/app.js
   
```

## 🔐 Security Note

The project demonstrates password hashing using PBKDF2 with SHA-512. For production applications, it is recommended to use **bcrypt** or **argon2** which provide better security features and are specifically designed for password hashing.

## 💡 Key Takeaways

1. **Modules are the building blocks** - Use `module.exports` to share code between files
2. **CommonJS is the default** - Node.js uses CommonJS by default (`require`/`module.exports`)
3. **ES Modules are the future** - Use `import`/`export` for modern JavaScript
4. **Node.js has built-in modules** - Explore crypto, util, fs, path, events, etc.
5. **Never store plain-text passwords** - Always hash passwords before storing
6. **Use salt with hashing** - Random salts prevent rainbow table attacks
7. **More iterations = more secure** - But balance with performance

## 📖 Further Reading

- [Node.js Documentation](https://nodejs.org/docs/)
- [Node.js Module System](https://nodejs.org/api/modules.html)
- [Crypto Module](https://nodejs.org/api/crypto.html)
- [Password Hashing Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

---

Happy Learning! 🚀
