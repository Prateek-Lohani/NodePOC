# Node.js Learning Project

A structured proof-of-concept repository designed to demonstrate core Node.js concepts through progressive, hands-on examples.

## Overview

This project provides a systematic approach to learning Node.js fundamentals, emphasizing modularity, built-in APIs, and security best practices. Each concept is introduced incrementally through well-documented commits, making it ideal for developers new to Node.js or those seeking to strengthen their foundational understanding.

## Features

- Modular architecture demonstrating separation of concerns
- Progressive learning path with detailed commit documentation
- Comprehensive examples of Node.js built-in modules
- Security-focused password hashing implementations
- Support for both CommonJS and ES Modules
- Zero external dependencies for core functionality

## Project Structure

```
nodejsPoc/
├── app.js                  # Application entry point
├── data.json               # Sample data file
├── commits/                # Commit-by-commit learning documentation
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
│   ├── 0013b79_verifying_password.md
│   └── path_module_basics.md
├── calculate/              # Example module demonstrating code organization
│   ├── index.js
│   ├── sum.js
│   └── multiply.js
└── PathModule/             # Path module demonstration
    └── app.js
```

## Learning Path

This repository follows a structured learning approach with each commit introducing a specific concept. Comprehensive documentation for each step is available in the `commits/` directory.

### Curriculum Overview

| Commit | Topic | Key Concepts |
|--------|-------|--------------|
| `f0502d9` | Module Creation | `require()`, `module.exports` |
| `65a76d8` | Module Interaction | Exporting and importing functions |
| `138d7f0` | Multiple Exports | Destructuring, named exports |
| `dc0958f` | ES Modules | `import`/`export` syntax, module types |
| `7513101` | Nested Modules | Directory-based organization |
| `7c46761` | Module Patterns | Index files, clean exports |
| `90c41db` | JSON Handling | File I/O, data persistence |
| `d5d1a31` | Utility Module | Built-in Node.js APIs |
| `0a55e01` | Cryptographic Hashing | `crypto` module basics |
| `23fb969` | Hash Algorithms | MD5, SHA-1, SHA-256, SHA-512 |
| `f9862da` | Password Security | PBKDF2, salting, key derivation |
| `0013b79` | Authentication | Password verification |

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- Basic understanding of JavaScript

### Installation

```bash
git clone <repository-url>
cd nodejsPoc
```

### Running Examples

Execute the main application:

```bash
node app.js
```

Explore specific modules:

```bash
node calculate/index.js
node PathModule/app.js
```

## Core Concepts Covered

### Module Systems

- **CommonJS**: Traditional Node.js module system using `require()` and `module.exports`
- **ES Modules**: Modern JavaScript modules using `import` and `export`
- **Module Resolution**: Understanding how Node.js locates and loads modules
- **Organizational Patterns**: Structuring code across files and directories

### Built-in Modules

- **crypto**: Cryptographic operations and secure hashing
- **util**: Utility functions for working with Node.js internals
- **path**: File path manipulation and normalization
- **fs**: File system operations (demonstrated through JSON handling)

### Security Practices

- Password hashing using PBKDF2 with configurable iterations
- Salt generation for preventing rainbow table attacks
- Secure password verification
- Industry best practices for credential storage

## Security Considerations

This project demonstrates password hashing using PBKDF2 with SHA-512. While suitable for educational purposes, production applications should consider:

- **bcrypt**: Purpose-built for password hashing with adaptive cost factors
- **argon2**: Modern algorithm resistant to GPU-based attacks
- **scrypt**: Memory-hard algorithm providing additional security

Always use established, well-audited libraries for production authentication systems.

## Educational Objectives

This repository is designed to help developers:

1. Understand Node.js module resolution and organization patterns
2. Work effectively with both CommonJS and ES Module systems
3. Leverage Node.js built-in APIs without external dependencies
4. Implement secure password handling practices
5. Build a mental model of asynchronous JavaScript execution
6. Develop clean, maintainable Node.js applications

## Documentation

Each commit in this repository includes detailed markdown documentation in the `commits/` directory, covering:

- Concept introduction and context
- Code examples with explanations
- Key takeaways and best practices
- Common pitfalls and how to avoid them

## Additional Resources

- [Node.js Official Documentation](https://nodejs.org/docs/)
- [Node.js Module System Guide](https://nodejs.org/api/modules.html)
- [Crypto Module API Reference](https://nodejs.org/api/crypto.html)
- [OWASP Password Storage Guidelines](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

## License

This project is provided as-is for educational purposes.

---

**Note**: This is a learning-focused proof of concept. Code examples prioritize clarity and educational value over production-readiness.