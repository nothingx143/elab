# DSA Lab Practice Questions and Simple C Programs

**Note:** The uploaded lab practice sheet contains 11 questions, not 13. This file includes all 11 listed questions. The two additional questions were not present in the uploaded sheet.

---

## Experiment 1: Linear Search

**Question:** Write a C program to search for a given element in an integer array using the Linear Search technique.

```c
#include <stdio.h>

int main()
{
    int a[100], n, key, i, found = 0;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter array elements: ");
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    printf("Enter element to search: ");
    scanf("%d", &key);

    for(i = 0; i < n; i++)
    {
        if(a[i] == key)
        {
            printf("Element found at position %d", i + 1);
            found = 1;
            break;
        }
    }

    if(found == 0)
        printf("Element not found");

    return 0;
}
```

---

## Experiment 2: Binary Search

**Question:** Write a C program to search for a given element in a sorted integer array using the Binary Search technique.

```c
#include <stdio.h>

int main()
{
    int a[100], n, key, low, high, mid, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter sorted array elements: ");
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    printf("Enter element to search: ");
    scanf("%d", &key);

    low = 0;
    high = n - 1;

    while(low <= high)
    {
        mid = (low + high) / 2;

        if(a[mid] == key)
        {
            printf("Element found at position %d", mid + 1);
            return 0;
        }
        else if(key < a[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }

    printf("Element not found");
    return 0;
}
```

---

## Experiment 3: Structure

**Question:** Write a C program to create a student structure and store and display student details such as roll number, name, and marks.

```c
#include <stdio.h>

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &s.roll);

    printf("Enter name: ");
    scanf(" %49[^\n]", s.name);

    printf("Enter marks: ");
    scanf("%f", &s.marks);

    printf("\nStudent Details\n");
    printf("Roll Number: %d\n", s.roll);
    printf("Name: %s\n", s.name);
    printf("Marks: %.2f\n", s.marks);

    return 0;
}
```

---

## Experiment 4: Pointers

**Question:** Write a C program to demonstrate the use of pointers by accessing and modifying the value of a variable using a pointer.

```c
#include <stdio.h>

int main()
{
    int x = 10;
    int *p = &x;

    printf("Original value: %d\n", x);

    *p = 20;

    printf("Modified value: %d\n", x);

    return 0;
}
```

---

## Experiment 5: Self-Referential Structure

**Question:** Write a C program to demonstrate a self-referential structure by creating a structure that contains a pointer to another structure of the same type.

```c
#include <stdio.h>

struct Node
{
    int data;
    struct Node *next;
};

int main()
{
    struct Node a, b;

    a.data = 10;
    b.data = 20;

    a.next = &b;
    b.next = NULL;

    printf("First node: %d\n", a.data);
    printf("Second node: %d\n", a.next->data);

    return 0;
}
```

---

## Experiment 6: Dynamic Memory Allocation

**Question:** Write a C program to demonstrate dynamic memory allocation using `malloc()`, `calloc()`, `realloc()`, and `free()`.

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i;
    int *a = malloc(3 * sizeof(int));

    if(a == NULL)
        return 1;

    for(i = 0; i < 3; i++)
        a[i] = (i + 1) * 10;

    printf("Using malloc: ");
    for(i = 0; i < 3; i++)
        printf("%d ", a[i]);

    a = realloc(a, 5 * sizeof(int));
    if(a == NULL)
        return 1;

    a[3] = 40;
    a[4] = 50;

    printf("\nAfter realloc: ");
    for(i = 0; i < 5; i++)
        printf("%d ", a[i]);

    free(a);

    int *b = calloc(3, sizeof(int));
    if(b == NULL)
        return 1;

    printf("\nUsing calloc: ");
    for(i = 0; i < 3; i++)
        printf("%d ", b[i]);

    free(b);

    return 0;
}
```

---

## Experiment 7: Cursor-Based List ADT

**Question:** Implement List ADT using a cursor-based linked list.

```c
#include <stdio.h>

#define MAX 10

struct Node
{
    int data;
    int next;
};

struct Node list[MAX];
int head = -1, freeHead = 0;

void initialize()
{
    int i;

    for(i = 0; i < MAX - 1; i++)
        list[i].next = i + 1;

    list[MAX - 1].next = -1;
}

void insert(int value)
{
    int p;

    if(freeHead == -1)
    {
        printf("List is full\n");
        return;
    }

    p = freeHead;
    freeHead = list[p].next;

    list[p].data = value;
    list[p].next = head;
    head = p;
}

void display()
{
    int p = head;

    while(p != -1)
    {
        printf("%d ", list[p].data);
        p = list[p].next;
    }
    printf("\n");
}

int main()
{
    initialize();

    insert(10);
    insert(20);
    insert(30);

    printf("List: ");
    display();

    return 0;
}
```

---

## Experiment 8: Singly Linked List Insertion

**Question:** Insert a node at the beginning, end, and specified position in a singly linked list.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *head = NULL;

void insertBeginning(int value)
{
    struct Node *p = malloc(sizeof(struct Node));
    p->data = value;
    p->next = head;
    head = p;
}

void insertEnd(int value)
{
    struct Node *p = malloc(sizeof(struct Node));
    struct Node *temp = head;

    p->data = value;
    p->next = NULL;

    if(head == NULL)
        head = p;
    else
    {
        while(temp->next != NULL)
            temp = temp->next;
        temp->next = p;
    }
}

void insertPosition(int value, int pos)
{
    int i;
    struct Node *p = malloc(sizeof(struct Node));
    struct Node *temp = head;

    p->data = value;

    if(pos == 1)
    {
        p->next = head;
        head = p;
        return;
    }

    for(i = 1; i < pos - 1 && temp != NULL; i++)
        temp = temp->next;

    if(temp == NULL)
    {
        free(p);
        printf("Invalid position\n");
        return;
    }

    p->next = temp->next;
    temp->next = p;
}

void display()
{
    struct Node *temp = head;

    while(temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    insertBeginning(20);
    insertEnd(40);
    insertPosition(30, 2);

    display();
    return 0;
}
```

---

## Experiment 9: Singly Linked List Deletion

**Question:** Delete a node from the beginning, end, and specified position in a singly linked list.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *head = NULL;

void insertEnd(int value)
{
    struct Node *p = malloc(sizeof(struct Node));
    struct Node *temp = head;

    p->data = value;
    p->next = NULL;

    if(head == NULL)
        head = p;
    else
    {
        while(temp->next != NULL)
            temp = temp->next;
        temp->next = p;
    }
}

void deleteBeginning()
{
    struct Node *temp;

    if(head == NULL)
        return;

    temp = head;
    head = head->next;
    free(temp);
}

void deleteEnd()
{
    struct Node *temp = head;

    if(head == NULL)
        return;

    if(head->next == NULL)
    {
        free(head);
        head = NULL;
        return;
    }

    while(temp->next->next != NULL)
        temp = temp->next;

    free(temp->next);
    temp->next = NULL;
}

void deletePosition(int pos)
{
    int i;
    struct Node *temp = head, *del;

    if(head == NULL)
        return;

    if(pos == 1)
    {
        deleteBeginning();
        return;
    }

    for(i = 1; i < pos - 1 && temp != NULL; i++)
        temp = temp->next;

    if(temp == NULL || temp->next == NULL)
    {
        printf("Invalid position\n");
        return;
    }

    del = temp->next;
    temp->next = del->next;
    free(del);
}

void display()
{
    struct Node *temp = head;

    while(temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    insertEnd(10);
    insertEnd(20);
    insertEnd(30);
    insertEnd(40);

    deleteBeginning();
    deleteEnd();
    deletePosition(2);

    display();
    return 0;
}
```

---

## Experiment 10: Doubly Linked List Insertion

**Question:** Insert a node at the beginning, end, and specified position in a doubly linked list.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *prev, *next;
};

struct Node *head = NULL;

void insertBeginning(int value)
{
    struct Node *p = malloc(sizeof(struct Node));

    p->data = value;
    p->prev = NULL;
    p->next = head;

    if(head != NULL)
        head->prev = p;

    head = p;
}

void insertEnd(int value)
{
    struct Node *p = malloc(sizeof(struct Node));
    struct Node *temp = head;

    p->data = value;
    p->next = NULL;

    if(head == NULL)
    {
        p->prev = NULL;
        head = p;
        return;
    }

    while(temp->next != NULL)
        temp = temp->next;

    temp->next = p;
    p->prev = temp;
}

void insertPosition(int value, int pos)
{
    int i;
    struct Node *p, *temp = head;

    if(pos == 1)
    {
        insertBeginning(value);
        return;
    }

    for(i = 1; i < pos - 1 && temp != NULL; i++)
        temp = temp->next;

    if(temp == NULL)
    {
        printf("Invalid position\n");
        return;
    }

    p = malloc(sizeof(struct Node));
    p->data = value;
    p->prev = temp;
    p->next = temp->next;

    if(temp->next != NULL)
        temp->next->prev = p;

    temp->next = p;
}

void display()
{
    struct Node *temp = head;

    while(temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    insertBeginning(20);
    insertEnd(40);
    insertPosition(30, 2);

    display();
    return 0;
}
```

---

## Experiment 11: Circular Singly Linked List

**Question:** Implement a circular singly linked list.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *last = NULL;

void insertEnd(int value)
{
    struct Node *p = malloc(sizeof(struct Node));

    p->data = value;

    if(last == NULL)
    {
        last = p;
        p->next = p;
    }
    else
    {
        p->next = last->next;
        last->next = p;
        last = p;
    }
}

void display()
{
    struct Node *temp;

    if(last == NULL)
    {
        printf("List is empty\n");
        return;
    }

    temp = last->next;

    do
    {
        printf("%d ", temp->data);
        temp = temp->next;
    } while(temp != last->next);

    printf("\n");
}

int main()
{
    insertEnd(10);
    insertEnd(20);
    insertEnd(30);

    display();
    return 0;
}
```
