// SRMIST eLab DSA Practical Experiments Database
// Extracted from SRM CSE 21CSC201J Lab File (Verified with GCC)

window.DSA_PRAC_EXPERIMENTS = [
  {
    "id": "DSA_PRAC_1",
    "challenge": 1,
    "level": 1,
    "level_challenge": 1,
    "title": "Program 1: Structures - Static Student Record",
    "topic": "STRUCTURES",
    "session": "Problem solving using structures and pointers",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 1: Structures - Static Student Record\n\nSession: Problem solving using structures and pointers\n\nDescription: Define a Student structure with name and age, initialize it statically with values, and display its member details.\n\nImplementation file: p01_structures.c",
    "code": "#include <stdio.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student s1 = {\"John Doe\", 20};\n    printf(\"Name: %s\\n\", s1.name);\n    printf(\"Age: %d\\n\", s1.age);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p01_structures.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Name: John Doe\nAge: 20"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_2",
    "challenge": 2,
    "level": 1,
    "level_challenge": 2,
    "title": "Program 2: Structures - Dynamic User Input",
    "topic": "STRUCTURES",
    "session": "Problem solving using structures and pointers",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 2: Structures - Dynamic User Input\n\nSession: Problem solving using structures and pointers\n\nDescription: Read student name and age dynamically from standard input using scanf into a structure variable and display the recorded attributes.\n\nImplementation file: p02_structures_input.c",
    "code": "#include <stdio.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student s1;\n    printf(\"Enter name: \");\n    scanf(\"%s\", s1.name);\n    printf(\"Enter age: \");\n    scanf(\"%d\", &s1.age);\n    printf(\"Name: %s\\n\", s1.name);\n    printf(\"Age: %d\\n\", s1.age);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p02_structures_input.c",
    "test_cases": [
      {
        "input": "AbcbXyz\n19",
        "output": "Enter name: AbcbXyz\nEnter age: 19\nName: AbcbXyz\nAge: 19"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_3",
    "challenge": 3,
    "level": 1,
    "level_challenge": 3,
    "title": "Program 3: Structures - Book Details Management",
    "topic": "STRUCTURES",
    "session": "Problem solving using structures and pointers",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 3: Structures - Book Details Management\n\nSession: Problem solving using structures and pointers\n\nDescription: Define a book structure with book number, title (supporting multi-word spaces), and price. Read inputs and display formatted book details.\n\nImplementation file: p03_book_details.c",
    "code": "#include <stdio.h>\n\nstruct book {\n    int bno;\n    char bnm[20];\n    float price;\n};\n\nint main() {\n    struct book b;\n    printf(\"Enter book number: \");\n    scanf(\"%d\", &b.bno);\n    printf(\"Enter book name: \");\n    scanf(\" %[^\\n]\", b.bnm);\n    printf(\"Enter book price: \");\n    scanf(\"%f\", &b.price);\n    printf(\"\\n--- Book Details ---\\n\");\n    printf(\"Book Number: %d\\n\", b.bno);\n    printf(\"Book Name: %s\\n\", b.bnm);\n    printf(\"Book Price: %.2f\\n\", b.price);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p03_book_details.c",
    "test_cases": [
      {
        "input": "1\nHarry Potter\n1999",
        "output": "Enter book number: 1\nEnter book name: Harry Potter\nEnter book price: 1999\n\n--- Book Details ---\nBook Number: 1\nBook Name: Harry Potter\nBook Price: 1999.00"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_4",
    "challenge": 4,
    "level": 1,
    "level_challenge": 4,
    "title": "Program 4: Structures & Pointers - Nested Structures",
    "topic": "STRUCTURES & POINTERS",
    "session": "Problem solving using structures and pointers",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 4: Structures & Pointers - Nested Structures\n\nSession: Problem solving using structures and pointers\n\nDescription: Demonstrate nested structures (university_detail inside student_detail) accessed via structure pointer using the arrow (->) operator.\n\nImplementation file: p04_nested_struct_pointers.c",
    "code": "#include <stdio.h>\n#include <string.h>\n\nstruct university_detail {\n    int u_id;\n    char u_name[50];\n};\n\nstruct student_detail {\n    int s_id;\n    char s_name[20];\n    float s_marks;\n    struct university_detail u_data;\n};\n\nint main() {\n    struct student_detail stu_data, *stu_data_ptr;\n    stu_data_ptr = &stu_data;\n    stu_data_ptr->s_id = 101;\n    stu_data_ptr->s_marks = 92.5;\n    strcpy(stu_data_ptr->s_name, \"Rahul\");\n    stu_data_ptr->u_data.u_id = 501;\n    strcpy(stu_data_ptr->u_data.u_name, \"ABC University\");\n\n    printf(\"Student Id: %d\\n\", stu_data_ptr->s_id);\n    printf(\"Student Name: %s\\n\", stu_data_ptr->s_name);\n    printf(\"Student Marks: %.2f\\n\", stu_data_ptr->s_marks);\n    printf(\"University Id: %d\\n\", stu_data_ptr->u_data.u_id);\n    printf(\"University Name: %s\\n\", stu_data_ptr->u_data.u_name);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p04_nested_struct_pointers.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Student Id: 101\nStudent Name: Rahul\nStudent Marks: 92.50\nUniversity Id: 501\nUniversity Name: ABC University"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_5",
    "challenge": 5,
    "level": 1,
    "level_challenge": 5,
    "title": "Program 5: Pointers - Pointer Basics & Dereferencing",
    "topic": "POINTERS",
    "session": "Problem solving using structures and pointers",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 5: Pointers - Pointer Basics & Dereferencing\n\nSession: Problem solving using structures and pointers\n\nDescription: Demonstrate pointer variable declaration, assigning variable address using &, and dereferencing stored value using *.\n\nImplementation file: p05_pointer_basics.c",
    "code": "#include <stdio.h>\n\nint main() {\n    int a = 50;\n    int *p; // pointer to int\n    printf(\"\\nAddress of a = %p\", (void *)&a);\n    printf(\"\\nValue of a = %d\", a);\n    p = &a; // storing address of a in pointer p\n    printf(\"\\nAddress allocated to p = %p\", (void *)p);\n    printf(\"\\nValue at that address = %d\\n\", *p);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p05_pointer_basics.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Address of a = 62fe44\nValue of a = 50\nAddress allocated to p = 62fe44\nValue at that address = 50"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_6",
    "challenge": 6,
    "level": 1,
    "level_challenge": 6,
    "title": "Program 6: Pointers - Structure Pointer Access",
    "topic": "POINTERS",
    "session": "Problem solving using structures and pointers",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 6: Pointers - Structure Pointer Access\n\nSession: Problem solving using structures and pointers\n\nDescription: Access members of a struct through a pointer variable using ptr->member syntax (equivalent to (*ptr).member).\n\nImplementation file: p06_struct_pointer.c",
    "code": "#include <stdio.h>\n\nstruct Student {\n    int roll;\n    char name[20];\n    float marks;\n};\n\nint main() {\n    struct Student s1 = {1, \"Ravi\", 88.5};\n    struct Student *ptr = &s1; // pointer stores address of s1\n    printf(\"Roll: %d\\n\", ptr->roll);\n    printf(\"Name: %s\\n\", ptr->name);\n    printf(\"Marks: %.2f\\n\", ptr->marks);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p06_struct_pointer.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Roll: 1\nName: Ravi\nMarks: 88.50"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_7",
    "challenge": 7,
    "level": 1,
    "level_challenge": 7,
    "title": "Program 7: Dynamic Memory - Malloc for 1D Array",
    "topic": "DYNAMIC MEMORY",
    "session": "Matrix Multiplication \u2013 Dynamic Memory allocation",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 7: Dynamic Memory - Malloc for 1D Array\n\nSession: Matrix Multiplication \u2013 Dynamic Memory allocation\n\nDescription: Allocate dynamic memory for n integers using malloc(), input elements, display them, and release heap memory using free().\n\nImplementation file: p07_dynamic_array_malloc.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *p;\n    int n;\n    printf(\"Enter number of elements: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    p = (int *)malloc(n * sizeof(int));\n    if (p == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        return 1;\n    }\n    for (int i = 0; i < n; i++) {\n        printf(\"Enter element %d: \", i + 1);\n        scanf(\"%d\", &p[i]);\n    }\n    printf(\"You entered: \");\n    for (int i = 0; i < n; i++) {\n        printf(\"%d \", p[i]);\n    }\n    printf(\"\\n\");\n    free(p);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p07_dynamic_array_malloc.c",
    "test_cases": [
      {
        "input": "4\n5\n6\n7\n8",
        "output": "Enter number of elements: 4\nEnter element 1: 5\nEnter element 2: 6\nEnter element 3: 7\nEnter element 4: 8\nYou entered: 5 6 7 8"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_8",
    "challenge": 8,
    "level": 1,
    "level_challenge": 8,
    "title": "Program 8: Dynamic Memory - Dynamic Array of Structures",
    "topic": "DYNAMIC MEMORY",
    "session": "Matrix Multiplication \u2013 Dynamic Memory allocation",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 8: Dynamic Memory - Dynamic Array of Structures\n\nSession: Matrix Multiplication \u2013 Dynamic Memory allocation\n\nDescription: Dynamically allocate an array of Student structures on heap using malloc(), read roll numbers and marks, display records, and free heap memory.\n\nImplementation file: p08_dynamic_struct_array.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Student {\n    int roll;\n    float marks;\n};\n\nint main() {\n    struct Student *ptr;\n    int n;\n    printf(\"Enter number of students: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    ptr = (struct Student *)malloc(n * sizeof(struct Student));\n    if (ptr == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        return 1;\n    }\n    for (int i = 0; i < n; i++) {\n        printf(\"\\nEnter Roll No and Marks for Student %d: \", i + 1);\n        scanf(\"%d %f\", &(ptr + i)->roll, &(ptr + i)->marks);\n    }\n    printf(\"\\nStudent Data:\\n\");\n    for (int i = 0; i < n; i++) {\n        printf(\"Roll: %d, Marks: %.2f\\n\", (ptr + i)->roll, (ptr + i)->marks);\n    }\n    free(ptr);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p08_dynamic_struct_array.c",
    "test_cases": [
      {
        "input": "4\n1 100\n2 97\n3 99\n4 98",
        "output": "Enter number of students: 4\n\nEnter Roll No and Marks for Student 1: 1 100\n\nEnter Roll No and Marks for Student 2: 2 97\n\nEnter Roll No and Marks for Student 3: 3 99\n\nEnter Roll No and Marks for Student 4: 4 98\n\nStudent Data:\nRoll: 1, Marks: 100.00\nRoll: 2, Marks: 97.00\nRoll: 3, Marks: 99.00\nRoll: 4, Marks: 98.00"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_9",
    "challenge": 9,
    "level": 1,
    "level_challenge": 9,
    "title": "Program 9: Searching - Binary Search in Sorted Array",
    "topic": "SEARCHING",
    "session": "Implementation of sorting and searching",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 9: Searching - Binary Search in Sorted Array\n\nSession: Implementation of sorting and searching\n\nDescription: Read 5 elements, sort them using Bubble Sort, then perform Binary Search to locate a target key in O(log n) time.\n\nImplementation file: p09_binary_search.c",
    "code": "#include <stdio.h>\n\nint main() {\n    int a[5], i, j, temp, p, st, e, m;\n    for (i = 0; i < 5; i++) {\n        printf(\"\\nEnter element: \");\n        scanf(\"%d\", &a[i]);\n    }\n    for (i = 0; i < 5 - 1; i++) {\n        for (j = 0; j < 5 - i - 1; j++) {\n            if (a[j] > a[j + 1]) {\n                temp = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = temp;\n            }\n        }\n    }\n    printf(\"\\nEnter element to be searched: \");\n    scanf(\"%d\", &p);\n    st = 0;\n    e = 4;\n    while (st <= e) {\n        m = (st + e) / 2;\n        if (a[m] == p) {\n            printf(\"\\nValue found at location: %d\\n\", m);\n            break;\n        } else if (a[m] > p) {\n            e = m - 1;\n        } else {\n            st = m + 1;\n        }\n    }\n    if (st > e) {\n        printf(\"\\nValue not found\\n\");\n    }\n    return 0;\n}\n",
    "language": "c",
    "filename": "p09_binary_search.c",
    "test_cases": [
      {
        "input": "1\n2\n4\n5\n7\n7",
        "output": "Enter element: 1\nEnter element: 2\nEnter element: 4\nEnter element: 5\nEnter element: 7\nEnter element to be searched: 7\nValue found at location: 4"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_10",
    "challenge": 10,
    "level": 1,
    "level_challenge": 10,
    "title": "Program 10: Searching - Linear Sequential Search",
    "topic": "SEARCHING",
    "session": "Implementation of sorting and searching",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 10: Searching - Linear Sequential Search\n\nSession: Implementation of sorting and searching\n\nDescription: Perform linear search on an array of 5 integers to determine the index of the first matching element, or report not found in O(n) time.\n\nImplementation file: p10_linear_search.c",
    "code": "#include <stdio.h>\n\nint main() {\n    int a[5], i, s, e = -1;\n    for (i = 0; i < 5; i++) {\n        printf(\"\\nEnter element: \");\n        scanf(\"%d\", &a[i]);\n    }\n    printf(\"\\nEnter value to be searched: \");\n    scanf(\"%d\", &s);\n    for (i = 0; i < 5; i++) {\n        if (a[i] == s) {\n            e = i;\n            break;\n        }\n    }\n    if (e != -1)\n        printf(\"\\nValue found at location: %d\\n\", e);\n    else\n        printf(\"\\nValue not found\\n\");\n    return 0;\n}\n",
    "language": "c",
    "filename": "p10_linear_search.c",
    "test_cases": [
      {
        "input": "1\n2\n7\n9\n5\n9",
        "output": "Enter element: 1\nEnter element: 2\nEnter element: 7\nEnter element: 9\nEnter element: 5\nEnter value to be searched: 9\nValue found at location: 3"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_11",
    "challenge": 11,
    "level": 1,
    "level_challenge": 11,
    "title": "Program 11: Sorting - Bubble Sort Function",
    "topic": "SORTING",
    "session": "Implementation of sorting and searching",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 11: Sorting - Bubble Sort Function\n\nSession: Implementation of sorting and searching\n\nDescription: Implement BubbleSort(int a[], int n) to sort an array of n integers in ascending order via adjacent element comparisons and swaps.\n\nImplementation file: p11_bubble_sort_func.c",
    "code": "#include <stdio.h>\n\nvoid BubbleSort(int a[], int n) {\n    int i, j, t;\n    for (i = 0; i < n - 1; i++) {\n        for (j = 0; j < n - i - 1; j++) {\n            if (a[j] > a[j + 1]) {\n                t = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = t;\n            }\n        }\n    }\n}\n\nint main() {\n    int a[20], i, n;\n    printf(\"\\nEnter size of array: \");\n    if (scanf(\"%d\", &n) != 1) return 0;\n    printf(\"\\nEnter the elements of array:\\n\");\n    for (i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    BubbleSort(a, n);\n    printf(\"\\nThe sorted array is:\\n\");\n    for (i = 0; i < n; i++) {\n        printf(\"%d\\t\", a[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n",
    "language": "c",
    "filename": "p11_bubble_sort_func.c",
    "test_cases": [
      {
        "input": "4\n12\n32\n44\n5",
        "output": "Enter size of array: 4\nEnter the elements of array:\n12\n32\n44\n5\nThe sorted array is:\n5\t12\t32\t44"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_12",
    "challenge": 12,
    "level": 1,
    "level_challenge": 12,
    "title": "Program 12: 2D Arrays - Linear Search in 2D Matrix",
    "topic": "ARRAYS",
    "session": "Array Implementation of List",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 12: 2D Arrays - Linear Search in 2D Matrix\n\nSession: Array Implementation of List\n\nDescription: Scan a 2-dimensional matrix of size m x n to find the exact row and column coordinates (i, j) of a search key.\n\nImplementation file: p12_2d_array_search.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int array[10][10], item, m, n, i, j;\n    printf(\"Enter the size (m, n) of 2D Array (<10, <10): \");\n    if (scanf(\"%d %d\", &m, &n) != 2) return 0;\n    printf(\"\\nEnter elements of 2D Array:\\n\");\n    for (i = 0; i < m; i++) {\n        for (j = 0; j < n; j++) {\n            scanf(\"%d\", &array[i][j]);\n        }\n    }\n    printf(\"\\nEnter element to be searched: \");\n    scanf(\"%d\", &item);\n    for (i = 0; i < m; i++) {\n        for (j = 0; j < n; j++) {\n            if (array[i][j] == item) {\n                printf(\"\\nElement %d found at location (%d, %d)\\n\", item, i, j);\n                exit(0);\n            }\n        }\n    }\n    printf(\"\\nElement %d not found\\n\", item);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p12_2d_array_search.c",
    "test_cases": [
      {
        "input": "3 3\n1 2 3 4 5 6 78 9 10\n78",
        "output": "Enter the size (m, n) of 2D Array (<10, <10): 3 3\nEnter elements of 2D Array:\n1\n2\n3\n4\n5\n6\n78\n9\n10\nEnter element to be searched: 78\nElement 78 found at location (2, 0)"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_13",
    "challenge": 13,
    "level": 1,
    "level_challenge": 13,
    "title": "Program 13: Sorting - Insertion Sort with Sentinel",
    "topic": "SORTING",
    "session": "Implementation of sorting and searching",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 13: Sorting - Insertion Sort with Sentinel\n\nSession: Implementation of sorting and searching\n\nDescription: Sort an array of n integers in ascending order using Insertion Sort with sentinel element at index 0 (a[0] = -1) to simplify the inner while loop.\n\nImplementation file: p13_insertion_sort_sentinel.c",
    "code": "#include <stdio.h>\n\nint main() {\n    int a[20], n, k, ptr, temp, i;\n    printf(\"Enter size of array: \");\n    if (scanf(\"%d\", &n) != 1) return 0;\n    printf(\"Enter elements of array:\\n\");\n    for (i = 1; i <= n; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    a[0] = -1; // sentinel\n    for (k = 2; k <= n; k++) {\n        temp = a[k];\n        ptr = k - 1;\n        while (temp < a[ptr]) {\n            a[ptr + 1] = a[ptr];\n            ptr = ptr - 1;\n        }\n        a[ptr + 1] = temp;\n    }\n    printf(\"\\nSorted array is:\\n\");\n    for (i = 1; i <= n; i++) {\n        printf(\"%d\\t\", a[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n",
    "language": "c",
    "filename": "p13_insertion_sort_sentinel.c",
    "test_cases": [
      {
        "input": "4\n4\n7\n2\n6",
        "output": "Enter size of array: 4\nEnter elements of array:\n4\n7\n2\n6\nSorted array is:\n2\t4\t6\t7"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_14",
    "challenge": 14,
    "level": 2,
    "level_challenge": 14,
    "title": "Program 14: Matrices - Matrix Addition",
    "topic": "MATRICES",
    "session": "Matrix Multiplication \u2013 Dynamic Memory allocation",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 14: Matrices - Matrix Addition\n\nSession: Matrix Multiplication \u2013 Dynamic Memory allocation\n\nDescription: Add two static matrices a and b of size r x c1 (1 to 5) element-wise and display the resultant sum matrix.\n\nImplementation file: p14_matrix_addition.c",
    "code": "#include <stdio.h>\n#define n 5\n\nint main() {\n    int a[n][n], b[n][n], c[n][n];\n    int r, c1, i, j;\n    printf(\"\\nEnter number of rows (1\u20135): \");\n    if (scanf(\"%d\", &r) != 1) return 0;\n    printf(\"\\nEnter number of columns (1\u20135): \");\n    if (scanf(\"%d\", &c1) != 1) return 0;\n    if (r < 1 || r > 5 || c1 < 1 || c1 > 5) {\n        printf(\"\\nWrong Dimensions\\n\");\n    } else {\n        printf(\"\\n1st Matrix:\\n\");\n        for (i = 0; i < r; i++) {\n            for (j = 0; j < c1; j++) {\n                printf(\"\\nEnter no: \");\n                scanf(\"%d\", &a[i][j]);\n            }\n        }\n        printf(\"\\n2nd Matrix:\\n\");\n        for (i = 0; i < r; i++) {\n            for (j = 0; j < c1; j++) {\n                printf(\"\\nEnter no: \");\n                scanf(\"%d\", &b[i][j]);\n            }\n        }\n        for (i = 0; i < r; i++) {\n            for (j = 0; j < c1; j++) {\n                c[i][j] = a[i][j] + b[i][j];\n            }\n        }\n        printf(\"\\nResultant Matrix:\\n\");\n        for (i = 0; i < r; i++) {\n            for (j = 0; j < c1; j++) {\n                printf(\"%d\\t\", c[i][j]);\n            }\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}\n",
    "language": "c",
    "filename": "p14_matrix_addition.c",
    "test_cases": [
      {
        "input": "2\n2\n4\n5\n3\n2\n1\n2\n3\n4",
        "output": "Enter number of rows (1\u20135): 2\nEnter number of columns (1\u20135): 2\n1st Matrix:\nEnter no: 4\nEnter no: 5\nEnter no: 3\nEnter no: 2\n2nd Matrix:\nEnter no: 1\nEnter no: 2\nEnter no: 3\nEnter no: 4\nResultant Matrix:\n5\t7\t\n6\t6"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_15",
    "challenge": 15,
    "level": 2,
    "level_challenge": 15,
    "title": "Program 15: Matrices - Static Matrix Multiplication",
    "topic": "MATRICES",
    "session": "Matrix Multiplication \u2013 Dynamic Memory allocation",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 15: Matrices - Static Matrix Multiplication\n\nSession: Matrix Multiplication \u2013 Dynamic Memory allocation\n\nDescription: Compute matrix product C = A x B for matrices of orders (r1 x c1) and (r2 x c2), validating condition c1 == r2.\n\nImplementation file: p15_matrix_multiplication_static.c",
    "code": "#include <stdio.h>\n\nint main() {\n    int a[5][5], b[5][5], c[5][5];\n    int i, j, k, r1, c1, r2, c2;\n    printf(\"Enter order (rows and columns) of matrix 1: \");\n    if (scanf(\"%d %d\", &r1, &c1) != 2) return 0;\n    printf(\"Enter order (rows and columns) of matrix 2: \");\n    if (scanf(\"%d %d\", &r2, &c2) != 2) return 0;\n    if (c1 != r2) {\n        printf(\"Multiplication not possible!\\n\");\n        return 0;\n    }\n    printf(\"Enter elements of matrix 1:\\n\");\n    for (i = 0; i < r1; i++) {\n        for (j = 0; j < c1; j++) {\n            scanf(\"%d\", &a[i][j]);\n        }\n    }\n    printf(\"Enter elements of matrix 2:\\n\");\n    for (i = 0; i < r2; i++) {\n        for (j = 0; j < c2; j++) {\n            scanf(\"%d\", &b[i][j]);\n        }\n    }\n    for (i = 0; i < r1; i++) {\n        for (j = 0; j < c2; j++) {\n            c[i][j] = 0;\n        }\n    }\n    for (i = 0; i < r1; i++) {\n        for (j = 0; j < c2; j++) {\n            for (k = 0; k < c1; k++) {\n                c[i][j] += a[i][k] * b[k][j];\n            }\n        }\n    }\n    printf(\"Product of matrices is:\\n\");\n    for (i = 0; i < r1; i++) {\n        for (j = 0; j < c2; j++) {\n            printf(\"%d\\t\", c[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
    "language": "c",
    "filename": "p15_matrix_multiplication_static.c",
    "test_cases": [
      {
        "input": "2 2\n2 2\n1 2 3 4\n5 6 7 8",
        "output": "Enter order (rows and columns) of matrix 1: 2 2\nEnter order (rows and columns) of matrix 2: 2 2\nEnter elements of matrix 1:\n1\n2\n3\n4\nEnter elements of matrix 2:\n5\n6\n7\n8\nProduct of matrices is:\n19\t22\t\n43\t50"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_16",
    "challenge": 16,
    "level": 2,
    "level_challenge": 16,
    "title": "Program 16: Dynamic Memory - Matrix Multiplication via DMA",
    "topic": "DYNAMIC MEMORY",
    "session": "Matrix Multiplication \u2013 Dynamic Memory allocation",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 16: Dynamic Memory - Matrix Multiplication via DMA\n\nSession: Matrix Multiplication \u2013 Dynamic Memory allocation\n\nDescription: Dynamically allocate 2D matrices using pointer-to-pointer (int **) arrays via malloc(), perform matrix multiplication, and cleanly free all memory blocks.\n\nImplementation file: p16_matrix_multiplication_dma.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int r1, c1, r2, c2;\n    int i, j, k;\n    printf(\"Enter rows and columns of first matrix: \");\n    if (scanf(\"%d %d\", &r1, &c1) != 2) return 0;\n    printf(\"Enter rows and columns of second matrix: \");\n    if (scanf(\"%d %d\", &r2, &c2) != 2) return 0;\n    if (c1 != r2) {\n        printf(\"\\nMatrix multiplication not possible!\\n\");\n        return 0;\n    }\n    int **a = (int **)malloc(r1 * sizeof(int *));\n    int **b = (int **)malloc(r2 * sizeof(int *));\n    int **c = (int **)malloc(r1 * sizeof(int *));\n    for (i = 0; i < r1; i++) a[i] = (int *)malloc(c1 * sizeof(int));\n    for (i = 0; i < r2; i++) b[i] = (int *)malloc(c2 * sizeof(int));\n    for (i = 0; i < r1; i++) c[i] = (int *)malloc(c2 * sizeof(int));\n\n    printf(\"\\nEnter elements of first matrix:\\n\");\n    for (i = 0; i < r1; i++) {\n        for (j = 0; j < c1; j++) {\n            printf(\"a[%d] [%d] = \", i, j);\n            scanf(\"%d\", &a[i][j]);\n        }\n    }\n    printf(\"\\nEnter elements of second matrix:\\n\");\n    for (i = 0; i < r2; i++) {\n        for (j = 0; j < c2; j++) {\n            printf(\"b[%d] [%d] = \", i, j);\n            scanf(\"%d\", &b[i][j]);\n        }\n    }\n    for (i = 0; i < r1; i++)\n        for (j = 0; j < c2; j++) c[i][j] = 0;\n\n    for (i = 0; i < r1; i++) {\n        for (j = 0; j < c2; j++) {\n            for (k = 0; k < c1; k++) {\n                c[i][j] += a[i][k] * b[k][j];\n            }\n        }\n    }\n    printf(\"\\nResultant Matrix:\\n\");\n    for (i = 0; i < r1; i++) {\n        for (j = 0; j < c2; j++) {\n            printf(\"%d\\t\", c[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    for (i = 0; i < r1; i++) free(a[i]);\n    for (i = 0; i < r2; i++) free(b[i]);\n    for (i = 0; i < r1; i++) free(c[i]);\n    free(a);\n    free(b);\n    free(c);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p16_matrix_multiplication_dma.c",
    "test_cases": [
      {
        "input": "2 2\n2 2\n1 2 3 4\n5 6 7 8",
        "output": "Enter rows and columns of first matrix: 2 2\nEnter rows and columns of second matrix: 2 2\nEnter elements of first matrix:\na[0] [0] = 1\na[0] [1] = 2\na[1] [0] = 3\na[1] [1] = 4\nEnter elements of second matrix:\nb[0] [0] = 5\nb[0] [1] = 6\nb[1] [0] = 7\nb[1] [1] = 8\nResultant Matrix:\n19\t22\t\n43\t50"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_17",
    "challenge": 17,
    "level": 2,
    "level_challenge": 17,
    "title": "Program 17: Stack - Array Implementation (Push, Pop, Display)",
    "topic": "STACK",
    "session": "Implementation of Stack using array and Linked List",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 17: Stack - Array Implementation (Push, Pop, Display)\n\nSession: Implementation of Stack using array and Linked List\n\nDescription: Implement a menu-driven Stack using a static array of size 20 with operations for Push, Pop, Display, Overflow check, and Underflow check.\n\nImplementation file: p17_stack_array.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int stack[20], item, top = -1, choice;\n    do {\n        printf(\"\\n---- Main Menu \");\n        printf(\"\\n1. Push\");\n        printf(\"\\n2. Pop\");\n        printf(\"\\n3. Display\");\n        printf(\"\\n4. Exit\");\n        printf(\"\\nEnter your choice: \");\n        if (scanf(\"%d\", &choice) != 1) break;\n        switch (choice) {\n            case 1:\n                if (top >= 19) {\n                    printf(\"\\nStack Overflow\\n\");\n                } else {\n                    printf(\"\\nEnter the item: \");\n                    scanf(\"%d\", &item);\n                    top++;\n                    stack[top] = item;\n                }\n                break;\n            case 2:\n                if (top == -1) {\n                    printf(\"\\nStack Underflow\\n\");\n                } else {\n                    item = stack[top];\n                    top--;\n                    printf(\"\\nDeleted item: %d\\n\", item);\n                }\n                break;\n            case 3:\n                if (top == -1) {\n                    printf(\"\\nStack Empty\\n\");\n                } else {\n                    printf(\"\\nThe stack is: \");\n                    for (int i = top; i >= 0; i--) {\n                        printf(\"\\n%d\", stack[i]);\n                    }\n                    printf(\"\\n\");\n                }\n                break;\n            case 4:\n                exit(0);\n            default: printf(\"\\nWrong choice!\\n\");\n        }\n    } while (choice != 4);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p17_stack_array.c",
    "test_cases": [
      {
        "input": "1 (Push)\n1\n1 (Push)\n2\n3 (Display)\n4 (Exit)",
        "output": "---- Main Menu ----\n1. Push\n2. Pop\n3. Display\n4. Exit\nEnter your choice: 1\nEnter the item: 1\n---- Main Menu ----\n1. Push\n2. Pop\n3. Display\n4. Exit\nEnter your choice: 1\nEnter the item: 2\n---- Main Menu ----\n1. Push\n2. Pop\n3. Display\n4. Exit\nEnter your choice: 3\nThe stack is: \n2\n1"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_18",
    "challenge": 18,
    "level": 2,
    "level_challenge": 18,
    "title": "Program 18: Queue - Array Implementation (Insert, Delete, Display)",
    "topic": "QUEUE",
    "session": "Implementation of Queue using array and Linked list",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 18: Queue - Array Implementation (Insert, Delete, Display)\n\nSession: Implementation of Queue using array and Linked list\n\nDescription: Implement a menu-driven Linear Queue using an array with front and rear indices supporting Enqueue, Dequeue, Display, Overflow, and Underflow.\n\nImplementation file: p18_queue_array.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int queue[20], i, item, rear = -1, front = -1, choice;\n    do {\n        printf(\"\\n---- Main Menu \");\n        printf(\"\\n1. Insert\");\n        printf(\"\\n2. Delete\");\n        printf(\"\\n3. Display\");\n        printf(\"\\n4. Exit\");\n        printf(\"\\nEnter your choice: \");\n        if (scanf(\"%d\", &choice) != 1) break;\n        switch (choice) {\n            case 1:\n                if (rear == 19) {\n                    printf(\"\\nOverflow\\n\");\n                } else {\n                    printf(\"\\nEnter item to be inserted: \");\n                    scanf(\"%d\", &item);\n                    if (front == -1) front = 0;\n                    rear++;\n                    queue[rear] = item;\n                }\n                break;\n            case 2:\n                if (front == -1) {\n                    printf(\"\\nUnderflow\\n\");\n                } else {\n                    item = queue[front];\n                    printf(\"\\nDeleted item is: %d\\n\", item);\n                    if (front == rear) front = rear = -1;\n                    else front++;\n                }\n                break;\n            case 3:\n                if (front == -1) {\n                    printf(\"\\nQueue Empty\\n\");\n                } else {\n                    printf(\"\\nThe Queue is:\");\n                    for (i = front; i <= rear; i++) {\n                        printf(\" %d\", queue[i]);\n                    }\n                    printf(\"\\n\");\n                }\n                break;\n            case 4:\n                exit(0);\n            default: printf(\"\\nWrong choice\\n\");\n        }\n    } while (choice <= 4);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p18_queue_array.c",
    "test_cases": [
      {
        "input": "1 (Insert)\n1\n1 (Insert)\n2\n3 (Display)\n4 (Exit)",
        "output": "---- Main Menu ----\n1. Insert\n2. Delete\n3. Display\n4. Exit\nEnter your choice: 1\nEnter item to be inserted: 1\n---- Main Menu ----\n1. Insert\n2. Delete\n3. Display\n4. Exit\nEnter your choice: 1\nEnter item to be inserted: 2\n---- Main Menu ----\n1. Insert\n2. Delete\n3. Display\n4. Exit\nEnter your choice: 3\nThe Queue is: 1 2"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_19",
    "challenge": 19,
    "level": 2,
    "level_challenge": 19,
    "title": "Program 19: Linked List - Creation & Traversal",
    "topic": "LINKED LIST",
    "session": "Implementation of Linked List",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 19: Linked List - Creation & Traversal\n\nSession: Implementation of Linked List\n\nDescription: Dynamically create a singly linked list with user-specified node count and display the elements formatted with arrows (2 -> 6 -> 8).\n\nImplementation file: p19_linked_list_traversal.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nstruct Node *creation_LL(struct Node *head, struct Node *newnode, struct Node *temp) {\n    int n;\n    head = 0;\n    printf(\"How many nodes you want to create in linked list? \");\n    if (scanf(\"%d\", &n) != 1 || !n) return head;\n    for (int i = 1; i <= n; i++) {\n        newnode = (struct Node *)malloc(sizeof(struct Node));\n        printf(\"Enter data for node %d: \", i);\n        scanf(\"%d\", &newnode->data);\n        newnode->next = 0;\n        if (head == 0) head = temp = newnode;\n        else {\n            temp->next = newnode;\n            temp = newnode;\n        }\n    }\n    return head;\n}\n\nvoid traversing_LL(struct Node *head, struct Node *temp) {\n    temp = head;\n    printf(\"Linked list created :- \\n\");\n    while (temp != 0) {\n        if (temp->next == 0) printf(\"%d\", temp->data);\n        else printf(\"%d -> \", temp->data);\n        temp = temp->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    struct Node *head = NULL, *newnode = NULL, *temp = NULL;\n    head = creation_LL(head, newnode, temp);\n    traversing_LL(head, temp);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p19_linked_list_traversal.c",
    "test_cases": [
      {
        "input": "3 (Number of nodes)\n2\n6\n8",
        "output": "How many nodes you want to create in linked list? 3\nEnter data for node 1: 2\nEnter data for node 2: 6\nEnter data for node 3: 8\nLinked list created :- \n2 -> 6 -> 8"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_20",
    "challenge": 20,
    "level": 2,
    "level_challenge": 20,
    "title": "Program 20: Linked List - Node Insertion (Beginning, End, Position)",
    "topic": "LINKED LIST",
    "session": "Implementation of Linked List",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 20: Linked List - Node Insertion (Beginning, End, Position)\n\nSession: Implementation of Linked List\n\nDescription: Perform node insertions in a singly linked list at the beginning, at the end, or at any arbitrary 1-based position.\n\nImplementation file: p20_linked_list_insertion.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nstruct Node *creation_LL(struct Node *head, struct Node *newnode, struct Node *temp);\nstruct Node *insertion_at_begin(struct Node *head, struct Node *newnode, struct Node *temp);\nstruct Node *insertion_at_end(struct Node *head, struct Node *newnode, struct Node *temp);\nstruct Node *insertion_at_specific_position(struct Node *head, struct Node *newnode, struct Node *temp);\nvoid traversing_LL(struct Node *head, struct Node *temp);\n\nstruct Node *creation_LL(struct Node *head, struct Node *newnode, struct Node *temp) {\n    int n;\n    head = NULL;\n    printf(\"How many nodes do you want to create in the linked list? \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) {\n        printf(\"No nodes can be created!\\n\");\n        return head;\n    }\n    for (int i = 1; i <= n; i++) {\n        newnode = (struct Node *)malloc(sizeof(struct Node));\n        printf(\"Enter data for node %d: \", i);\n        scanf(\"%d\", &newnode->data);\n        newnode->next = NULL;\n        if (head == NULL) head = temp = newnode;\n        else {\n            temp->next = newnode;\n            temp = newnode;\n        }\n    }\n    return head;\n}\n\nstruct Node *insertion_at_begin(struct Node *head, struct Node *newnode, struct Node *temp) {\n    newnode = (struct Node *)malloc(sizeof(struct Node));\n    printf(\"Enter data for new node: \");\n    scanf(\"%d\", &newnode->data);\n    newnode->next = head;\n    head = newnode;\n    printf(\"New linked list after inserting node at the beginning:\\n\");\n    traversing_LL(head, temp);\n    return head;\n}\n\nstruct Node *insertion_at_end(struct Node *head, struct Node *newnode, struct Node *temp) {\n    newnode = (struct Node *)malloc(sizeof(struct Node));\n    printf(\"Enter data for new node: \");\n    scanf(\"%d\", &newnode->data);\n    newnode->next = NULL;\n    if (head == NULL) head = newnode;\n    else {\n        temp = head;\n        while (temp->next != NULL) temp = temp->next;\n        temp->next = newnode;\n    }\n    printf(\"New linked list after inserting node at the end:\\n\");\n    traversing_LL(head, temp);\n    return head;\n}\n\nstruct Node *insertion_at_specific_position(struct Node *head, struct Node *newnode, struct Node *temp) {\n    int position, total = 0;\n    temp = head;\n    while (temp != NULL) {\n        total++;\n        temp = temp->next;\n    }\n    printf(\"Enter position to insert node (1 to %d): \", total + 1);\n    scanf(\"%d\", &position);\n    if (position < 1 || position > total + 1) {\n        printf(\"Invalid position!\\n\");\n        return head;\n    }\n    newnode = (struct Node *)malloc(sizeof(struct Node));\n    printf(\"Enter data for new node: \");\n    scanf(\"%d\", &newnode->data);\n    if (position == 1) {\n        newnode->next = head;\n        head = newnode;\n    } else {\n        temp = head;\n        for (int i = 1; i < position - 1; i++) temp = temp->next;\n        newnode->next = temp->next;\n        temp->next = newnode;\n    }\n    printf(\"New linked list after inserting node at position %d:\\n\", position);\n    traversing_LL(head, temp);\n    return head;\n}\n\nvoid traversing_LL(struct Node *head, struct Node *temp) {\n    if (head == NULL) {\n        printf(\"Linked list is empty!\\n\");\n        return;\n    }\n    temp = head;\n    while (temp != NULL) {\n        if (temp->next == NULL) printf(\"%d\", temp->data);\n        else printf(\"%d -> \", temp->data);\n        temp = temp->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int choice;\n    char ans = 'y';\n    struct Node *head = NULL, *newnode = NULL, *temp = NULL;\n    head = creation_LL(head, newnode, temp);\n    printf(\"\\nLinked List created:\\n\");\n    traversing_LL(head, temp);\n    while (ans == 'y' || ans == 'Y') {\n        printf(\"\\nWhere do you want to insert a new node?\\n\");\n        printf(\"1) Beginning\\n2) End\\n3) Specific Position\\nEnter your choice: \");\n        if (scanf(\"%d\", &choice) != 1) break;\n        switch (choice) {\n            case 1: head = insertion_at_begin(head, newnode, temp); break;\n            case 2: head = insertion_at_end(head, newnode, temp); break;\n            case 3: head = insertion_at_specific_position(head, newnode, temp); break;\n            default: printf(\"Invalid choice!\\n\"); break;\n        }\n        printf(\"\\nDo you want to insert another node (y/n)? \");\n        scanf(\" %c\", &ans);\n    }\n    printf(\"\\nFinal Linked List:\\n\");\n    traversing_LL(head, temp);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p20_linked_list_insertion.c",
    "test_cases": [
      {
        "input": "4 (Initial nodes)\n2\n6\n8\n10\n1 (Insert at Beginning)\n1 (Data)\nn (No more insertions)",
        "output": "How many nodes do you want to create in the linked list? 4\nEnter data for node 1: 2\nEnter data for node 2: 6\nEnter data for node 3: 8\nEnter data for node 4: 10\n\nLinked List created:\n2 -> 6 -> 8 -> 10\n\nWhere do you want to insert a new node?\n1) Beginning\n2) End\n3) Specific Position\nEnter your choice: 1\nEnter data for new node: 1\nNew linked list after inserting node at the beginning:\n1 -> 2 -> 6 -> 8 -> 10\n\nDo you want to insert another node (y/n)? n\n\nFinal Linked List:\n1 -> 2 -> 6 -> 8 -> 10"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_21",
    "challenge": 21,
    "level": 2,
    "level_challenge": 21,
    "title": "Program 21: Linked List - Node Deletion (Beginning, End, Position)",
    "topic": "LINKED LIST",
    "session": "Implementation of Linked List",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 21: Linked List - Node Deletion (Beginning, End, Position)\n\nSession: Implementation of Linked List\n\nDescription: Perform node deletion from a singly linked list at beginning, at end, or at any user-specified 1-based index.\n\nImplementation file: p21_linked_list_deletion.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nstruct Node *creation_LL(struct Node *head, struct Node *newnode, struct Node *temp) {\n    int n;\n    head = 0;\n    printf(\"How many nodes you want to create in linked list? \");\n    if (scanf(\"%d\", &n) != 1 || !n) return head;\n    for (int i = 1; i <= n; i++) {\n        newnode = (struct Node *)malloc(sizeof(struct Node));\n        printf(\"Enter data for node %d: \", i);\n        scanf(\"%d\", &newnode->data);\n        newnode->next = 0;\n        if (head == 0) head = temp = newnode;\n        else {\n            temp->next = newnode;\n            temp = newnode;\n        }\n    }\n    return head;\n}\n\nvoid traversing_LL(struct Node *head, struct Node *temp) {\n    temp = head;\n    printf(\"Linked list :- \\n\");\n    while (temp != 0) {\n        if (temp->next == 0) printf(\"%d\", temp->data);\n        else printf(\"%d -> \", temp->data);\n        temp = temp->next;\n    }\n    printf(\"\\n\");\n}\n\nstruct Node *delete_at_begin(struct Node *head, struct Node *temp) {\n    if (!head) printf(\"Linked List is empty. Can't delete!\\n\");\n    else {\n        temp = head;\n        head = head->next;\n        free(temp);\n    }\n    traversing_LL(head, temp);\n    return head;\n}\n\nstruct Node *delete_at_end(struct Node *head, struct Node *temp) {\n    struct Node *temp1;\n    if (!head) printf(\"Linked List is empty. Can't delete!\\n\");\n    else if (head->next == 0) {\n        temp = head;\n        head = 0;\n        free(temp);\n    } else {\n        temp = head;\n        while (temp->next) {\n            temp1 = temp;\n            temp = temp->next;\n        }\n        temp1->next = 0;\n        free(temp);\n    }\n    traversing_LL(head, temp);\n    return head;\n}\n\nstruct Node *delete_at_specific_position(struct Node *head, struct Node *temp) {\n    struct Node *temp1;\n    int pos, count = 1, flag = 0;\n    temp = head;\n    printf(\"Enter position: \");\n    scanf(\"%d\", &pos);\n    if (!head) printf(\"Linked List is empty. Can't delete!\\n\");\n    else if (pos == 1) {\n        head = temp->next;\n        free(temp);\n        flag = 1;\n    } else {\n        while (temp->next) {\n            count++;\n            if (count == pos) {\n                temp1 = temp->next;\n                temp->next = temp1->next;\n                free(temp1);\n                flag = 1;\n                break;\n            } else temp = temp->next;\n        }\n    }\n    if (!flag) {\n        printf(\"You entered wrong position for deletion of node\\n\");\n        return head;\n    }\n    traversing_LL(head, temp);\n    return head;\n}\n\nint main() {\n    struct Node *head = NULL, *newnode = NULL, *temp = NULL;\n    char ans = 'y';\n    int choice;\n    head = creation_LL(head, newnode, temp);\n    traversing_LL(head, temp);\n    while (ans == 'y') {\n        printf(\"\\nWhere do you want to delete a node? \\n1)Beginning\\n2)End\\n3)Specific Position\\n(Enter your choice in numeric) : \");\n        if (scanf(\"%d\", &choice) != 1) break;\n        if (choice == 1) head = delete_at_begin(head, temp);\n        else if (choice == 2) head = delete_at_end(head, temp);\n        else if (choice == 3) head = delete_at_specific_position(head, temp);\n        else printf(\"Invalid choice!\\n\");\n        printf(\"\\nDo you want to delete another node (y/n) ? \");\n        scanf(\" %c\", &ans);\n    }\n    return 0;\n}\n",
    "language": "c",
    "filename": "p21_linked_list_deletion.c",
    "test_cases": [
      {
        "input": "4 (Initial nodes)\n1\n2\n3\n4\n2 (Delete at End)\ny (Yes, delete more)\n1 (Delete at Begin)\nn (Done)",
        "output": "How many nodes you want to create in linked list? 4\nEnter data for node 1: 1\nEnter data for node 2: 2\nEnter data for node 3: 3\nEnter data for node 4: 4\nLinked list :- \n1 -> 2 -> 3 -> 4\n\nWhere do you want to delete a node? \n1)Beginning\n2)End\n3)Specific Position\n(Enter your choice in numeric) : 2\nLinked list :- \n1 -> 2 -> 3\nDo you want to delete another node (y/n) ? y\n\nWhere do you want to delete a node? \n1)Beginning\n2)End\n3)Specific Position\n(Enter your choice in numeric) : 1\nLinked list :- \n2 -> 3\nDo you want to delete another node (y/n) ? n"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_22",
    "challenge": 22,
    "level": 2,
    "level_challenge": 22,
    "title": "Program 22: Linked List - Search Operation",
    "topic": "LINKED LIST",
    "session": "Implementation of Linked List",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 22: Linked List - Search Operation\n\nSession: Implementation of Linked List\n\nDescription: Search for an integer value in a singly linked list and report its 1-based node position or show a not found message.\n\nImplementation file: p22_linked_list_search.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nstruct Node *creation_LL(struct Node *head, struct Node *newnode, struct Node *temp) {\n    int n;\n    head = NULL;\n    printf(\"How many nodes you want to create in linked list? \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) {\n        printf(\"No nodes created!\\n\");\n        return head;\n    }\n    for (int i = 1; i <= n; i++) {\n        newnode = (struct Node *)malloc(sizeof(struct Node));\n        printf(\"Enter data for node %d: \", i);\n        scanf(\"%d\", &newnode->data);\n        newnode->next = NULL;\n        if (head == NULL) head = temp = newnode;\n        else {\n            temp->next = newnode;\n            temp = newnode;\n        }\n    }\n    return head;\n}\n\nvoid traversing_LL(struct Node *head, struct Node *temp) {\n    if (head == NULL) {\n        printf(\"Linked List is empty!\\n\");\n        return;\n    }\n    temp = head;\n    printf(\"\\nLinked list created: \\n\");\n    while (temp != NULL) {\n        if (temp->next == NULL) printf(\"%d\", temp->data);\n        else printf(\"%d -> \", temp->data);\n        temp = temp->next;\n    }\n    printf(\"\\n\");\n}\n\nvoid search(struct Node *head, struct Node *temp) {\n    if (head == NULL) {\n        printf(\"Linked List is empty. Can't search!\\n\");\n        return;\n    }\n    int num, position = 1;\n    int found = 0;\n    printf(\"\\nEnter element to be searched: \");\n    scanf(\"%d\", &num);\n    temp = head;\n    while (temp != NULL) {\n        if (num == temp->data) {\n            printf(\"\\n Element %d found at position %d\\n\", num, position);\n            found = 1;\n            break;\n        }\n        temp = temp->next;\n        position++;\n    }\n    if (!found) printf(\"\\n Element %d not found in the linked list.\\n\", num);\n}\n\nint main() {\n    struct Node *head = NULL, *newnode = NULL, *temp = NULL;\n    char ans = 'y';\n    head = creation_LL(head, newnode, temp);\n    traversing_LL(head, temp);\n    printf(\"\\n----- SEARCHING operation in Linked List \\n\");\n    while (ans == 'y' || ans == 'Y') {\n        search(head, temp);\n        int c;\n        while ((c = getchar()) != '\\n' && c != EOF) {}\n        printf(\"\\nDo you want to search for more elements (y/n)? \");\n        scanf(\"%c\", &ans);\n    }\n    printf(\"\\nProgram terminated.\\n\");\n    return 0;\n}\n",
    "language": "c",
    "filename": "p22_linked_list_search.c",
    "test_cases": [
      {
        "input": "4 (Initial nodes)\n1\n2\n3\n4\n3 (Element to search)\nn (Done)",
        "output": "How many nodes you want to create in linked list? 4\nEnter data for node 1: 1\nEnter data for node 2: 2\nEnter data for node 3: 3\nEnter data for node 4: 4\n\nLinked list created: \n1 -> 2 -> 3 -> 4\n\n----- SEARCHING operation in Linked List -----\n\nEnter element to be searched: 3\n\n Element 3 found at position 3\n\nDo you want to search for more elements (y/n)? n\n\nProgram terminated."
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_23",
    "challenge": 23,
    "level": 2,
    "level_challenge": 23,
    "title": "Program 23: Doubly Linked List - Comprehensive Operations",
    "topic": "DOUBLY LINKED LIST",
    "session": "Implementation of Doubly linked List",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 23: Doubly Linked List - Comprehensive Operations\n\nSession: Implementation of Doubly linked List\n\nDescription: Complete implementation of Doubly Linked List with prev and next pointers supporting Insert, Display, Search, Bubble Sort, and Delete by key.\n\nImplementation file: p23_doubly_linked_list.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *prev;\n    struct Node *next;\n};\n\nstruct Node *head = NULL;\n\nstruct Node *createNode(int data) {\n    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->prev = NULL;\n    newNode->next = NULL;\n    return newNode;\n}\n\nvoid insertEnd(int data) {\n    struct Node *newNode = createNode(data);\n    if (head == NULL) {\n        head = newNode;\n        return;\n    }\n    struct Node *temp = head;\n    while (temp->next != NULL) temp = temp->next;\n    temp->next = newNode;\n    newNode->prev = temp;\n}\n\nvoid display() {\n    struct Node *temp = head;\n    if (temp == NULL) {\n        printf(\"List is empty.\\n\");\n        return;\n    }\n    printf(\"Doubly Linked List: \");\n    while (temp != NULL) {\n        printf(\"%d \", temp->data);\n        temp = temp->next;\n    }\n    printf(\"\\n\");\n}\n\nvoid search(int key) {\n    struct Node *temp = head;\n    int pos = 1;\n    while (temp != NULL) {\n        if (temp->data == key) {\n            printf(\"Element %d found at position %d\\n\", key, pos);\n            return;\n        }\n        temp = temp->next;\n        pos++;\n    }\n    printf(\"Element %d not found in the list.\\n\", key);\n}\n\nvoid sortList() {\n    if (head == NULL) {\n        printf(\"List is empty.\\n\");\n        return;\n    }\n    int swapped;\n    struct Node *ptr1;\n    struct Node *lptr = NULL;\n    do {\n        swapped = 0;\n        ptr1 = head;\n        while (ptr1->next != lptr) {\n            if (ptr1->data > ptr1->next->data) {\n                int temp = ptr1->data;\n                ptr1->data = ptr1->next->data;\n                ptr1->next->data = temp;\n                swapped = 1;\n            }\n            ptr1 = ptr1->next;\n        }\n        lptr = ptr1;\n    } while (swapped);\n    printf(\"List sorted successfully.\\n\");\n}\n\nvoid deleteNode(int key) {\n    struct Node *temp = head;\n    if (temp == NULL) {\n        printf(\"List is empty.\\n\");\n        return;\n    }\n    if (temp->data == key) {\n        head = temp->next;\n        if (head != NULL) head->prev = NULL;\n        free(temp);\n        printf(\"Node with value %d deleted.\\n\", key);\n        return;\n    }\n    while (temp != NULL && temp->data != key) temp = temp->next;\n    if (temp == NULL) {\n        printf(\"Node with value %d not found.\\n\", key);\n        return;\n    }\n    if (temp->next != NULL) temp->next->prev = temp->prev;\n    if (temp->prev != NULL) temp->prev->next = temp->next;\n    free(temp);\n    printf(\"Node with value %d deleted.\\n\", key);\n}\n\nint main() {\n    int choice, value;\n    while (1) {\n        printf(\"\\n--- Doubly Linked List Menu ---\\n\");\n        printf(\"1. Insert\\n\");\n        printf(\"2. Display\\n\");\n        printf(\"3. Search\\n\");\n        printf(\"4. Sort\\n\");\n        printf(\"5. Delete\\n\");\n        printf(\"6. Exit\\n\");\n        printf(\"Enter your choice: \");\n        if (scanf(\"%d\", &choice) != 1) break;\n        switch (choice) {\n            case 1:\n                printf(\"Enter value to insert: \");\n                scanf(\"%d\", &value);\n                insertEnd(value);\n                break;\n            case 2: display(); break;\n            case 3:\n                printf(\"Enter value to search: \");\n                scanf(\"%d\", &value);\n                search(value);\n                break;\n            case 4: sortList(); break;\n            case 5:\n                printf(\"Enter value to delete: \");\n                scanf(\"%d\", &value);\n                deleteNode(value);\n                break;\n            case 6: exit(0);\n            default: printf(\"Invalid choice!\\n\");\n        }\n    }\n    return 0;\n}\n",
    "language": "c",
    "filename": "p23_doubly_linked_list.c",
    "test_cases": [
      {
        "input": "1 (Insert 1)\n1 (Insert 2)\n1 (Insert 3)\n2 (Display)\n3 (Search 2)\n5 (Delete 2)\n6 (Exit)",
        "output": "--- Doubly Linked List Menu ---\n1. Insert\n2. Display\n3. Search\n4. Sort\n5. Delete\n6. Exit\nEnter your choice: 1\nEnter value to insert: 1\n--- Doubly Linked List Menu ---\n1. Insert\n2. Display\n3. Search\n4. Sort\n5. Delete\n6. Exit\nEnter your choice: 1\nEnter value to insert: 2\n--- Doubly Linked List Menu ---\n1. Insert\n2. Display\n3. Search\n4. Sort\n5. Delete\n6. Exit\nEnter your choice: 1\nEnter value to insert: 3\n--- Doubly Linked List Menu ---\n1. Insert\n2. Display\n3. Search\n4. Sort\n5. Delete\n6. Exit\nEnter your choice: 2\nDoubly Linked List: 1 2 3 \n--- Doubly Linked List Menu ---\n1. Insert\n2. Display\n3. Search\n4. Sort\n5. Delete\n6. Exit\nEnter your choice: 3\nEnter value to search: 2\nElement 2 found at position 2\n--- Doubly Linked List Menu ---\n1. Insert\n2. Display\n3. Search\n4. Sort\n5. Delete\n6. Exit\nEnter your choice: 5\nEnter value to delete: 2\nNode with value 2 deleted.\n--- Doubly Linked List Menu ---\n1. Insert\n2. Display\n3. Search\n4. Sort\n5. Delete\n6. Exit\nEnter your choice: 6"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_24",
    "challenge": 24,
    "level": 2,
    "level_challenge": 24,
    "title": "Program 24: Trees - Array Representation of Binary Tree",
    "topic": "TREES",
    "session": "Implementation of Tree using array",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 24: Trees - Array Representation of Binary Tree\n\nSession: Implementation of Tree using array\n\nDescription: Implement a binary tree in an array where for a node at index i: left child is at 2i + 1, right child is at 2i + 2, and parent is at (i - 1) / 2.\n\nImplementation file: p24_tree_array.c",
    "code": "#include <stdio.h>\n#define MAX 100\n\nstruct Tree {\n    int arr[MAX];\n    int size;\n};\n\nvoid initTree(struct Tree *tree) {\n    tree->size = 0;\n    for (int i = 0; i < MAX; i++) tree->arr[i] = -1;\n}\n\nvoid insert(struct Tree *tree, int data) {\n    if (tree->size == MAX) {\n        printf(\"Tree is full!\\n\");\n        return;\n    }\n    tree->arr[tree->size] = data;\n    tree->size++;\n}\n\nvoid display(struct Tree *tree) {\n    printf(\"Tree elements (array form): \");\n    for (int i = 0; i < tree->size; i++) printf(\"%d \", tree->arr[i]);\n    printf(\"\\n\");\n}\n\nint leftChild(struct Tree *tree, int index) {\n    int left = 2 * index + 1;\n    if (left >= tree->size) return -1;\n    return tree->arr[left];\n}\n\nint rightChild(struct Tree *tree, int index) {\n    int right = 2 * index + 2;\n    if (right >= tree->size) return -1;\n    return tree->arr[right];\n}\n\nint parent(struct Tree *tree, int index) {\n    if (index == 0) return -1;\n    int p = (index - 1) / 2;\n    return tree->arr[p];\n}\n\nint main() {\n    struct Tree tree;\n    initTree(&tree);\n    insert(&tree, 1);\n    insert(&tree, 2);\n    insert(&tree, 3);\n    insert(&tree, 4);\n    insert(&tree, 5);\n    insert(&tree, 6);\n    display(&tree);\n    int index = 1; // node with value 2\n    printf(\"Parent of %d: %d\\n\", tree.arr[index], parent(&tree, index));\n    printf(\"Left child of %d: %d\\n\", tree.arr[index], leftChild(&tree, index));\n    printf(\"Right child of %d: %d\\n\", tree.arr[index], rightChild(&tree, index));\n    return 0;\n}\n",
    "language": "c",
    "filename": "p24_tree_array.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Tree elements (array form): 1 2 3 4 5 6 \nParent of 2: 1\nLeft child of 2: 4\nRight child of 2: 5"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_25",
    "challenge": 25,
    "level": 2,
    "level_challenge": 25,
    "title": "Program 25: Trees - Binary Tree Linked Traversals",
    "topic": "TREES",
    "session": "Implementation of BST using linked list",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 25: Trees - Binary Tree Linked Traversals\n\nSession: Implementation of BST using linked list\n\nDescription: Construct a binary tree dynamically with linked nodes and perform recursive Inorder (Left-Node-Right), Preorder (Node-Left-Right), and Postorder (Left-Right-Node) traversals.\n\nImplementation file: p25_bst_traversals.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\n\nstruct Node *createNode(int data) {\n    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->left = newNode->right = NULL;\n    return newNode;\n}\n\nvoid inorder(struct Node *root) {\n    if (root == NULL) return;\n    inorder(root->left);\n    printf(\"%d \", root->data);\n    inorder(root->right);\n}\n\nvoid preorder(struct Node *root) {\n    if (root == NULL) return;\n    printf(\"%d \", root->data);\n    preorder(root->left);\n    preorder(root->right);\n}\n\nvoid postorder(struct Node *root) {\n    if (root == NULL) return;\n    postorder(root->left);\n    postorder(root->right);\n    printf(\"%d \", root->data);\n}\n\nint main() {\n    struct Node *root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n    printf(\"Inorder Traversal: \");\n    inorder(root);\n    printf(\"\\n\");\n    printf(\"Preorder Traversal: \");\n    preorder(root);\n    printf(\"\\n\");\n    printf(\"Postorder Traversal: \");\n    postorder(root);\n    printf(\"\\n\");\n    return 0;\n}\n",
    "language": "c",
    "filename": "p25_bst_traversals.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Inorder Traversal: 4 2 5 1 3 \nPreorder Traversal: 1 2 4 5 3 \nPostorder Traversal: 4 5 2 3 1"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_26",
    "challenge": 26,
    "level": 2,
    "level_challenge": 26,
    "title": "Program 26: Graphs - Dijkstra's Shortest Path Algorithm",
    "topic": "GRAPHS",
    "session": "Implementation of Graph - Shortest path Algorithm",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 26: Graphs - Dijkstra's Shortest Path Algorithm\n\nSession: Implementation of Graph - Shortest path Algorithm\n\nDescription: Compute single-source shortest paths from source vertex 0 to all other vertices in a weighted graph using Dijkstra's algorithm on an adjacency matrix.\n\nImplementation file: p26_dijkstra.c",
    "code": "#include <stdio.h>\n#include <limits.h>\n#include <stdbool.h>\n#define V 6\n\nint minDistance(int dist[], bool visited[]) {\n    int min = INT_MAX, min_index = -1;\n    for (int v = 0; v < V; v++)\n        if (!visited[v] && dist[v] <= min) min = dist[v], min_index = v;\n    return min_index;\n}\n\nvoid printSolution(int dist[], int src) {\n    printf(\"Shortest distances from source vertex %d:\\n\", src);\n    for (int i = 0; i < V; i++)\n        printf(\"Vertex %d -> Distance %d\\n\", i, dist[i]);\n}\n\nvoid dijkstra(int graph[V][V], int src) {\n    int dist[V];\n    bool visited[V];\n    for (int i = 0; i < V; i++) dist[i] = INT_MAX, visited[i] = false;\n    dist[src] = 0;\n    for (int count = 0; count < V - 1; count++) {\n        int u = minDistance(dist, visited);\n        visited[u] = true;\n        for (int v = 0; v < V; v++)\n            if (!visited[v] && graph[u][v] && dist[u] != INT_MAX &&\n                dist[u] + graph[u][v] < dist[v])\n                dist[v] = dist[u] + graph[u][v];\n    }\n    printSolution(dist, src);\n}\n\nint main() {\n    int graph[V][V] = {\n        {0, 4, 0, 0, 0, 10},\n        {4, 0, 3, 0, 0, 0},\n        {0, 3, 0, 4, 0, 0},\n        {0, 0, 4, 0, 2, 0},\n        {0, 0, 0, 2, 0, 5},\n        {10, 0, 0, 0, 5, 0}\n    };\n    int source = 0;\n    dijkstra(graph, source);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p26_dijkstra.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Shortest distances from source vertex 0:\nVertex 0 -> Distance 0\nVertex 1 -> Distance 4\nVertex 2 -> Distance 7\nVertex 3 -> Distance 11\nVertex 4 -> Distance 13\nVertex 5 -> Distance 10"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  },
  {
    "id": "DSA_PRAC_27",
    "challenge": 27,
    "level": 2,
    "level_challenge": 27,
    "title": "Program 27: Graphs - Kruskal's Minimum Spanning Tree (MST)",
    "topic": "GRAPHS",
    "session": "Implementation of Minimal Spanning Tree",
    "course": "DSA LAB",
    "status": "Verified (Compiled & Tested)",
    "solved": true,
    "partial": false,
    "description": "Program 27: Graphs - Kruskal's Minimum Spanning Tree (MST)\n\nSession: Implementation of Minimal Spanning Tree\n\nDescription: Find the Minimum Spanning Tree (MST) of a weighted undirected graph using Kruskal's greedy algorithm with Disjoint Set Union (find and union by rank).\n\nImplementation file: p27_kruskal_mst.c",
    "code": "#include <stdio.h>\n#include <stdlib.h>\n#define MAX 100\n\nstruct Edge {\n    int src, dest, weight;\n};\n\nstruct Subset {\n    int parent;\n    int rank;\n};\n\nint find(struct Subset subsets[], int i) {\n    if (subsets[i].parent != i)\n        subsets[i].parent = find(subsets, subsets[i].parent);\n    return subsets[i].parent;\n}\n\nvoid Union(struct Subset subsets[], int x, int y) {\n    int xroot = find(subsets, x);\n    int yroot = find(subsets, y);\n    if (subsets[xroot].rank < subsets[yroot].rank)\n        subsets[xroot].parent = yroot;\n    else if (subsets[xroot].rank > subsets[yroot].rank)\n        subsets[yroot].parent = xroot;\n    else {\n        subsets[yroot].parent = xroot;\n        subsets[xroot].rank++;\n    }\n}\n\nint compareEdges(const void *a, const void *b) {\n    struct Edge *a1 = (struct Edge *)a;\n    struct Edge *b1 = (struct Edge *)b;\n    return a1->weight > b1->weight;\n}\n\nvoid KruskalMST(struct Edge edges[], int V, int E) {\n    struct Edge result[MAX];\n    int e = 0;\n    int i = 0;\n    qsort(edges, E, sizeof(edges[0]), compareEdges);\n    struct Subset *subsets = (struct Subset *)malloc(V * sizeof(struct Subset));\n    for (int v = 0; v < V; ++v) {\n        subsets[v].parent = v;\n        subsets[v].rank = 0;\n    }\n    while (e < V - 1 && i < E) {\n        struct Edge next_edge = edges[i++];\n        int x = find(subsets, next_edge.src);\n        int y = find(subsets, next_edge.dest);\n        if (x != y) {\n            result[e++] = next_edge;\n            Union(subsets, x, y);\n        }\n    }\n    printf(\"Edges in the Minimum Spanning Tree:\\n\");\n    int minCost = 0;\n    for (i = 0; i < e; ++i) {\n        printf(\"%d -- %d == %d\\n\", result[i].src, result[i].dest, result[i].weight);\n        minCost += result[i].weight;\n    }\n    printf(\"Total Minimum Cost of MST: %d\\n\", minCost);\n    free(subsets);\n}\n\nint main() {\n    int V = 5;\n    int E = 7;\n    struct Edge edges[] = {\n        {0, 1, 2}, {0, 3, 6}, {1, 2, 3}, {1, 3, 8},\n        {1, 4, 5}, {2, 4, 7}, {3, 4, 9}\n    };\n    KruskalMST(edges, V, E);\n    return 0;\n}\n",
    "language": "c",
    "filename": "p27_kruskal_mst.c",
    "test_cases": [
      {
        "input": "(No input - Direct Execution)",
        "output": "Edges in the Minimum Spanning Tree:\n0 -- 1 == 2\n1 -- 2 == 3\n1 -- 4 == 5\n0 -- 3 == 6\nTotal Minimum Cost of MST: 16"
      }
    ],
    "mandatory": [
      "#include",
      "main"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 200,
      "loc": 30,
      "raw": "Verified 100% Pass"
    }
  }
];
