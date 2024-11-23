import { useState } from 'react';
import CodeBlock from '../components/CodeBlock';

const topics = [
  {
    id: 'intro',
    title: 'Introduction to C',
    content: `C is a powerful general-purpose programming language that offers:
    • High performance and efficiency
    • Direct hardware manipulation
    • Foundation for modern programming
    • Extensive standard library
    
    Key Features:
    • Structured programming
    • Fast execution
    • Portability
    • Low-level memory access
    
    Important Concepts:
    • C is a compiled language - code must be compiled before execution
    • Programs start execution from the main() function
    • Statements end with semicolons (;)
    • Code blocks are enclosed in curly braces {}`,
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`
  },
  {
    id: 'variables',
    title: 'Variables & Data Types',
    content: `• Variables: Containers for storing data values that can be referenced and manipulated in a program. They have a name and a value.
    • Data Types: Classifications that specify the kind of data a variable can hold, such as integers, floats, characters, or strings.

    Core Data Types in C:
    • int: Whole numbers (-2147483648 to 2147483647)
    • float: Single-precision decimals (6 decimal places)
    • double: Double-precision decimals (15 decimal places)
    • char: Single characters and small integers
    • void: Empty data type
    
    Type Modifiers:
    • short: Reduced-size integers (typically 2 bytes)
    • long: Extended-size integers (typically 4-8 bytes)
    • signed/unsigned: With/without negative numbers
    
    Important Rules:
    • Variables must be declared before use
    • Names can't start with numbers
    • Only letters, numbers, and underscore allowed
    • Case-sensitive naming
    
    Memory Sizes:
    • char: 1 byte
    • short: 2 bytes
    • int: 4 bytes
    • long: 4-8 bytes
    • float: 4 bytes
    • double: 8 bytes`,
    code: `// Variable declarations and initializations
int age = 25;                    // Integer
float height = 5.9;              // Single-precision float
char grade = 'A';                // Character
double pi = 3.14159265359;       // Double-precision float
unsigned int positiveOnly = 42;   // Unsigned integer
long int bigNumber = 2147483648L; // Long integer

// Constants
const int MAX_SIZE = 100;        // Constant integer
#define PI 3.14159              // Macro constant`
  },
  {
    id: 'control',
    title: 'Control Flow',
    content: `• Control Flow: The order in which a program's instructions are executed, determined by constructs like loops (for, while), conditionals (if, else), and branching statements (break, continue).
    
    Control Structures:
    • if-else: Conditional execution
    • switch: Multiple-choice selection
    • while: Pre-test loop
    • do-while: Post-test loop
    • for: Counter-controlled loop
    • break/continue: Loop control
    
    Conditional Operators:
    • == (equality)
    • != (inequality)
    • > (greater than)
    • < (less than)
    • >= (greater than or equal)
    • <= (less than or equal)
    
    Logical Operators:
    • && (AND)
    • || (OR)
    • ! (NOT)
    
    Best Practices:
    • Always use blocks {} even for single statements
    • Keep conditions simple and readable
    • Avoid deep nesting (max 3-4 levels)
    • Use switch for multiple conditions on single variable
    • Consider break and continue carefully`,
    code: `// If-else with logical operators
if (age >= 18 && hasLicense) {
    printf("Can drive\\n");
} else if (age >= 16) {
    printf("Can get learner's permit\\n");
} else {
    printf("Too young to drive\\n");
}

// Switch statement
switch (grade) {
    case 'A': printf("Excellent\\n"); break;
    case 'B': printf("Good\\n"); break;
    default: printf("Keep trying\\n");
}

// Loop with break and continue
for (int i = 0; i < 10; i++) {
    if (i == 5) continue;  // Skip 5
    if (i == 8) break;     // Stop at 8
    printf("%d ", i);
}`
  },
  {
    id: 'functions',
    title: 'Functions',
    content: `• Functions: Reusable code blocks that perform specific tasks, take inputs (optional), and return outputs. They improve code organization and efficiency.
    
    Function Components:
    • Return Type: What the function returns
    • Name: Function identifier
    • Parameters: Input values
    • Body: Function implementation
    
    Function Types:
    • User-defined functions
    • Library functions
    • Recursive functions
    • Inline functions
    
    Parameter Passing:
    • Call by Value: Creates copy of arguments
    • Call by Reference: Uses address of arguments
    
    Advanced Concepts:
    • Function Pointers: Store function addresses
    • Variadic Functions: Variable number of arguments
    • Static Functions: Limited to same file
    • Inline Functions: Optimization hint
    
    Best Practices:
    • Single Responsibility Principle
    • Clear naming conventions
    • Proper error handling
    • Document complex functions`,
    code: `// Function prototypes
int add(int a, int b);
void swap(int *x, int *y);
int factorial(int n);

// Function definitions
int add(int a, int b) {
    return a + b;
}

void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

// Recursive function
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Function pointer
void (*fp)(int) = &printNumber;`
  },
  {
    id: 'arrays',
    title: 'Arrays & Strings',
    content: `• Arrays: Collections of elements, typically of the same data type, stored in contiguous memory locations and accessed using indices.
    • Strings: Sequences of characters used to represent text, often treated as arrays of characters in programming.
    
    Array Types:
    • One-dimensional arrays
    • Multi-dimensional arrays
    • Character arrays (strings)
    • Array of pointers
    
    Array Operations:
    • Declaration and Initialization
    • Accessing elements
    • Array traversal
    • Passing to functions
    
    String Functions:
    • strcpy(): Copy strings
    • strcat(): Concatenate strings
    • strlen(): String length
    • strcmp(): Compare strings
    • strstr(): Find substring
    
    Important Concepts:
    • Zero-based indexing
    • Contiguous memory allocation
    • Array bounds checking
    • String null termination
    • Buffer overflow prevention
    
    Common Pitfalls:
    • Array bounds violation
    • String buffer overflow
    • Uninitialized arrays
    • Missing null terminators`,
    code: `// Array declarations and operations
int numbers[5] = {1, 2, 3, 4, 5};
int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};

// String operations
char str1[50] = "Hello";
char str2[] = " World";
strcat(str1, str2);    // Concatenation
printf("%d\\n", strlen(str1));  // Length

// Array of strings
char *names[] = {"John", "Jane", "Bob"};

// String comparison
if (strcmp(str1, str2) == 0) {
    printf("Strings are equal\\n");
}`
  },
  {
    id: 'pointers',
    title: 'Pointers & Memory',
    content: `• Pointers: Variables that store memory addresses, enabling direct access and manipulation of memory locations.
    • Memory: The storage space where data and instructions are stored during program execution, managed as stack, heap, and static areas.

    Pointer Fundamentals:
    • Address operator (&)
    • Dereference operator (*)
    • NULL pointers
    • Void pointers
    
    Pointer Types:
    • Single pointers
    • Double pointers
    • Function pointers
    • Array pointers
    
    Memory Concepts:
    • Stack: Automatic storage
    • Heap: Dynamic storage
    • Static: Program lifetime
    • Register: CPU storage
    
    Common Operations:
    • Pointer arithmetic
    • Dynamic allocation
    • Array indexing
    • Structure access
    
    Safety Guidelines:
    • Always initialize pointers
    • Check for NULL
    • Free allocated memory
    • Avoid dangling pointers
    • Prevent memory leaks`,
    code: `// Basic pointer operations
int x = 10;
int *ptr = &x;         // Single pointer
int **pptr = &ptr;     // Double pointer

// Dynamic memory
int *arr = (int*)malloc(5 * sizeof(int));
if (arr != NULL) {
    for(int i = 0; i < 5; i++) arr[i] = i;
    free(arr);
}

// Function pointer
void (*fp)(int) = &printNumber;
fp(42);  // Call through pointer

// Void pointer
void *vptr = &x;
int *iptr = (int*)vptr;  // Type casting`
  },
  {
    id: 'structures',
    title: 'Structures & Unions',
    content: `• Structures: User-defined data types that group variables of different data types under one name, allowing related data to be stored together.
    •Unions: Similar to structures, but all members share the same memory space, saving memory but allowing only one member to hold a value at a time.

    Structure Concepts:
    • Custom data grouping
    • Member access (.)
    • Pointer access (->)
    • Nested structures
    
    Union Features:
    • Shared memory space
    • Memory optimization
    • Type overlapping
    • Value interpretation
    
    Advanced Topics:
    • Bit fields
    • Anonymous structures
    • Self-referential structures
    • Packed structures
    
    Memory Alignment:
    • Structure padding
    • Memory optimization
    • Alignment requirements
    • Packed attributes
    
    Best Practices:
    • Use meaningful names
    • Group related data
    • Consider memory layout
    • Handle alignment issues`,
    code: `// Structure definition and usage
struct Student {
    char name[50];
    int age;
    float gpa;
    struct Address {
        char street[100];
        char city[50];
    } addr;
};

// Union example
union Data {
    int i;
    float f;
    char str[20];
} data;

// Bit fields
struct Flags {
    unsigned int ready:1;
    unsigned int active:1;
    unsigned int error:1;
};

// Structure pointer
struct Student *sptr = &student;
printf("%s\\n", sptr->name);`
  },
  {
    id: 'files',
    title: 'File Handling',
    content: `• File Handling: The process of reading from and writing to files in storage. It involves operations like opening, reading, writing, and closing files to manage data outside the program's memory.
    
    File Operations:
    • fopen(): Open file
    • fclose(): Close file
    • fread(): Read binary
    • fwrite(): Write binary
    • fprintf(): Write formatted
    • fscanf(): Read formatted
    
    Access Modes:
    • "r": Read only
    • "w": Write (create/truncate)
    • "a": Append
    • "r+": Read and write
    • "w+": Read and write (truncate)
    • "a+": Read and append
    
    Error Handling:
    • EOF detection
    • ferror(): Check errors
    • clearerr(): Clear errors
    • feof(): Check end of file
    
    Buffer Management:
    • setvbuf(): Set buffer
    • fflush(): Flush buffer
    • Buffer sizes
    • Buffer modes`,
    code: `// File writing example
FILE *file = fopen("data.txt", "w");
if (file != NULL) {
    fprintf(file, "Hello, File!\\n");
    fclose(file);
}

// Binary file operations
struct Record {
    int id;
    char name[50];
};

FILE *binFile = fopen("records.bin", "wb");
struct Record rec = {1, "John"};
fwrite(&rec, sizeof(struct Record), 1, binFile);
fclose(binFile);

// Error checking
if (ferror(file)) {
    perror("File error");
    clearerr(file);
}`
  },
  {
    id: 'dynamic',
    title: 'Dynamic Memory',
    content: `• Dynamic Memory: Memory that is allocated and freed during runtime using functions like malloc(), calloc(), and free() in languages like C, allowing flexible memory management based on program needs.
    
    Memory Functions:
    • malloc(): Memory allocation
    • calloc(): Contiguous allocation
    • realloc(): Resize allocation
    • free(): Memory deallocation
    
    Memory Concepts:
    • Heap allocation
    • Memory alignment
    • Memory fragmentation
    • Memory leaks
    
    Best Practices:
    • Check allocation success
    • Track allocations
    • Free all allocations
    • Handle fragmentation
    
    Common Pitfalls:
    • Memory leaks
    • Double free
    • Buffer overflow
    • Dangling pointers
    • Use after free`,
    code: `// Dynamic array allocation
int *arr = (int *)malloc(5 * sizeof(int));
if (arr != NULL) {
    for (int i = 0; i < 5; i++) {
        arr[i] = i + 1;
    }
    
    // Resize array
    int *temp = (int *)realloc(arr, 10 * sizeof(int));
    if (temp != NULL) {
        arr = temp;
    }
    
    free(arr);  // Free memory
}

// 2D array allocation
int rows = 3, cols = 4;
int **matrix = (int **)malloc(rows * sizeof(int *));
for (int i = 0; i < rows; i++) {
    matrix[i] = (int *)malloc(cols * sizeof(int));
}

// Free 2D array
for (int i = 0; i < rows; i++) {
    free(matrix[i]);
}
free(matrix);`
  }
];

export default function CLangPage() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Topics</h2>
            <nav className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                    selectedTopic.id === topic.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {topic.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{selectedTopic.title}</h1>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{selectedTopic.content}</p>
              <CodeBlock code={selectedTopic.code} language="c" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}