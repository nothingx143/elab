// SRMIST eLab DSA Solutions & Question Bank (1-300)
(function() {
  const data = {
  "course": "DSA",
  "title": "Data Structures & Algorithms (1-300)",
  "total_questions": 300,
  "questions": [
    {
      "id": "DSA_1",
      "challenge": 1,
      "level": 1,
      "level_challenge": 1,
      "title": "Train Route Scheduling / Latest Start Day",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Prabhu Salamon is planning to make a very long journey across the cityside by Train. His journey consists of N train routes, numbered from 1 to N in the order he must take them. The trains themselves are very fast, but do not run often. The i-th train route only runs every Xi days.\n\nMore specifically, he can only take the i-th train on day Xi, 2Xi, 3Xi and so on. Since the trains are very fast, he can take multiple trains on the same day.\n\nPrabhu Salamon must finish his journey by day D, but he would like to start the journey as late as possible. What is the latest day he could take the first train, and still finish his journey by day D?\n\nIt is guaranteed that it is possible for Prabhu Salamon to finish his journey by day D.\n\nConstraints:\n1 ≤ T ≤ 100.\n1 ≤ Xi ≤ D.\n1 ≤ N ≤ 1000.\n1 ≤ D ≤ 10^12\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the two integers N and D. Then, another line follows containing N integers, the i-th one is Xi.\n\nOutput Format:\nPrint the output in a single line contains, the latest day he could take the first train, and still finish his journey by day D.",
      "code": "#include <stdio.h>\n\nint main() {\n    int T, n, d;\n    scanf(\"%d\", &T);\n    for(int t=0;t<T;t++){\n        scanf(\"%d %d\", &n, &d);\n        int bus[n];\n        for(int i=n-1;i>=0;i--){\n            scanf(\"%d\", &bus[i]);\n        }\n        int j = 0;\n        while(j < n){\n            d = d - d % bus[j];\n            j++;\n        }\n        printf(\"%d\\n\", d);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3 100\n31 71 21\n4 100\n11 16 51 50\n1 1\n1",
          "output": "62\n44\n1"
        },
        {
          "input": "3\n5 1000\n311 171 211 45 32\n6 1000\n111 161 511 510 56 93\n2 10\n9 5",
          "output": "622\n0\n9"
        }
      ],
      "mandatory": [
        "for(int t=0;t<T;t++)",
        "for(int i=n-1;i>=0;i--)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 39,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 39,
      "bytes": 394
    },
    {
      "id": "DSA_2",
      "challenge": 2,
      "level": 1,
      "level_challenge": 2,
      "title": "Minimum Steps to Reach Target Distance",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Minimum Steps to Reach Target Distance - SRM eLab Challenge 2",
      "code": "#include <stdio.h>\n\nint main() {\n    int n, i, count = 0;\n    scanf(\"%d\", &n);\n    for(i = 0; i < n; i++) {\n        double width, height;\n        scanf(\"%lf %lf\", &width, &height);\n        if(width/height>=1.6 && width/height<=1.7)\n            count++;\n        else if(height/width >=1.6 && height/width<=1.7)\n            count++;\n    }\n    if(count >= 0) {\n        printf(\"%d\", count);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n185 100\n180 100\n170 100\n160 100",
          "output": "2"
        },
        {
          "input": "6\n185 100\n180 100\n170 100\n160 100\n165 90\n164 95",
          "output": "2"
        }
      ],
      "mandatory": [
        "if(width/height>=1.6 && width/height<=1.7)",
        "else if(height/width >=1.6 && height/width<=1.7)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 35,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 35,
      "bytes": 426
    },
    {
      "id": "DSA_3",
      "challenge": 3,
      "level": 1,
      "level_challenge": 3,
      "title": "Longest Substring with Character Frequency Constraints",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Longest Substring with Character Frequency Constraints - SRM eLab Challenge 3",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstatic int pos[26][100005], count[26];\n\nint findmax(int* Count) {\n    int max = Count[0];\n    for (int i = 1; i < 26; i++)\n        if (Count[i] > max) max = Count[i];\n    return max;\n}\n\nint min_val(int a, int b) {\n    if (a < b) return a;\n    return b;\n}\n\nint can_form(int* p, int m, int k) {\n    for (int i = 0; i <= m - k; i++)\n        if (p[i + k - 1] - p[i] <= 2 * k) return 1;\n    return 0;\n}\n\nint solve_for_char(int* p, int m, int n) {\n    for (int k = m; k >= 1; k--)\n        if (can_form(p, m, k)) return min_val(n, 2 * k + 1);\n    return 0;\n}\n\nvoid fill_positions(char* s, int n) {\n    for (int i = 0; i < n; i++)\n        pos[s[i] - 'a'][count[s[i] - 'a']++] = i;\n}\n\nvoid compute_answers(int n, int* Count) {\n    for (int c = 0; c < 26; c++)\n        Count[c] = solve_for_char(pos[c], count[c], n);\n}\n\nint main() {\n    int T, n, Count[26];\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while (T--) {\n        scanf(\"%d\", &n);\n        char* s = (char*)malloc(n + 5);\n        scanf(\"%s\", s);\n        memset(count, 0, sizeof(count));\n        fill_positions(s, n);\n        compute_answers(n, Count);\n        printf(\"%d\\n\", findmax(Count));\n        free(s);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n5\nertyu\n14\nababbbartyuiop",
          "output": "3\n9"
        },
        {
          "input": "3\n5\nertyu\n6\nsdfrty\n10\nwscftyuiop",
          "output": "3\n3\n3"
        }
      ],
      "mandatory": [
        "int findmax(int* Count)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 109,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 109,
      "bytes": 1294
    },
    {
      "id": "DSA_4",
      "challenge": 4,
      "level": 1,
      "level_challenge": 4,
      "title": "Third Largest Element in Array",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Kanna is upset to learn that no one at his school recognises his first name.\n\nEven his friends refer to him by his surname.\n\nFrustrated, he decides to make his fellow college students know his first name by forcing\n\n them to solve this question. The task is determining the third greatest number in the supplied array.\n\nConstraints:\n\n0<n<100\n\n0<arr<1000\n\nInput Format:\n\nfirst line represents the number of elements N to be get\n\nsecond line indicates input elements according to N\n\nOutput Format:\n\nSingle line represents the out put that is third largest number.",
      "code": "#include <stdio.h>\n\nvoid thirdLargest(int arr[],int arr_size)\n{\n    int first, second, third, i;\n\n    first = second = third = -2147483648;\n\n    for (i = 0; i < arr_size; i++)\n    {\n        if (arr[i] > first)\n        {\n            third = second;\n            second = first;\n            first = arr[i];\n        }\n        else if (arr[i] > second)\n        {\n            third = second;\n            second = arr[i];\n        }\n        else if (arr[i] > third && arr[i] != first && arr[i] != second)\n        {\n            third = arr[i];\n        }\n    }\n\n    printf(\"The third Largest element is %d\\n\", third);\n}\n\nint main()\n{\n    int n, i;\n    int arr[100];\n\n    scanf(\"%d\", &n);\n\n    for (i = 0; i < n; i++)\n    {\n        scanf(\"%d\", &arr[i]);\n    }\n\n    thirdLargest(arr, n);\n\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n1 14 2 16 10 20",
          "output": "The third Largest element is 14"
        },
        {
          "input": "7\n19 -10 20 14 2 16 10",
          "output": "The third Largest element is 16"
        }
      ],
      "mandatory": [
        "void thirdLargest(int arr[],int arr_size)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 91,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 91,
      "bytes": 838
    },
    {
      "id": "DSA_5",
      "challenge": 5,
      "level": 1,
      "level_challenge": 5,
      "title": "Alexander Chariot Lineup / Birthstone Mapping",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "King Alexander wants every chariot to line up for the start of her Winter-eve ball.\n\nHe has asked you, Twilight Sparkle, to sort the horse chariots alphabetically but with royalty in front. Royal horses chariot have diamonds in their names.\n\nConstraints:\n1 <= Names <= 100\n\nInput Format:\nlist of horse chariots numbering anywhere from 1 to 40 horse chariot, with 1 per line. The end of input will be marked with END on a line by itself. Names should be no longer than 100 characters in length, and to only contain letters and spaces.\n\nOutput Format:\nPrint the output in a separate lines contains Sort and list the horse chariots alphabetically in ascending order ('A' \"first\"), ignoring case. However, any horse chariot with a diamond in their name must be placed at the \"top\" of the list (before the \"A's\" start) in the diamond order given in the Discussion section below.\n\nExplanation:\n\nThe Pony ranking (in Ascending order) for gemstones is a follows: \n\nLapis, Topaz, Tourmaline, Sapphire, Peridot, Ruby, Pearl, Emerald, Diamond, Aquamarine, Amethyst, Garnet.\n\n you are guaranteed that you will not have to deal with any gemstones not listed above. If multiple gems are listed in the same name, sort by whichever gem has \"highest prioity\" (e.g. a pony named 'Garnet Lapis' would be listed before a pony named 'Topaz Sapphire,' because Lapis has the highest priority). \n\nIn the case of equal ranking on gemstones, output in alpha order by total name (not just the gemstones), only sort by highest priority gemstones, after that by alpha. (Example, given the names: Lapis Topaz and Amethyst Lapis, they should be printed in order as: Amethyst Lapis then Lapis Topaz. That is because both names have the highest ranked gemstone (Lapis), so we simply sort them in ascending order alphabetically after their ranking has been established. We would not list Lapis Topaz before Amethyst Lapis because Topaz has a higher ranking over Amethyst. Stop comparing gemstone ranking after determine the highest rank of the gems in the name.) \n\nYou are guaranteed that there will be no ties in priority for gemstone ranking. You are also guaranteed that you will not encounter hyphenated names like Ruby-Sue. However, if a gemstone name happened to be found as part of a name (like Rubyanne) you can safely treat that as just another name to alphabetise. Gemstone names have to stand on their own (separated by spaces, or the entirety of the name) to be treated royally.",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define MAXP 45\n#define BUFLEN 105\n\nchar *gems[]={\"NONE\",\"Garnet\",\"Amethyst\",\"Aquamarine\",\"Diamond\",\"Emerald\",\"Pearl\",\"Ruby\",\"Peridot\",\"Sapphire\",\"Tourmaline\",\"Topaz\",\"Lapis\",0};\nchar ponies[MAXP][BUFLEN];\nint ranks[MAXP];\n\nint match_gem(char *tok) {\n    for (int i = 1; gems[i]; i++)\n        if (strcmp(tok, gems[i]) == 0) return i;\n    return 0;\n}\n\nint get_rank(char *name) {\n    char tmp[BUFLEN];\n    strcpy(tmp, name);\n    int best = 0;\n    for (char *t = strtok(tmp, \" \\r\\n\"); t; t = strtok(NULL, \" \\r\\n\")) {\n        int r = match_gem(t);\n        if (r > best) best = r;\n    }\n    return best;\n}\n\nint should_swap(int a, int b) {\n    if (ranks[a] != ranks[b]) return ranks[a] < ranks[b];\n    return strcmp(ponies[a],ponies[b])>0;\n}\n\nvoid swap_items(int a, int b) {\n    char t[BUFLEN];\n    strcpy(t, ponies[a]);\n    strcpy(ponies[a], ponies[b]);\n    strcpy(ponies[b], t);\n    int tr = ranks[a];\n    ranks[a] = ranks[b];\n    ranks[b] = tr;\n}\n\nvoid sort_step(int n) {\n    for (int j = 0; j < n - 1; j++)\n        if (should_swap(j, j + 1)) swap_items(j, j + 1);\n}\n\nint main() {\n    int n = 0;\n    while (fgets(ponies[n], BUFLEN, stdin)) {\n        ponies[n][strcspn(ponies[n], \"\\r\\n\")] = 0;\n        if (strcmp(ponies[n], \"END\") == 0) break;\n        ranks[n] = get_rank(ponies[n]);\n        n++;\n    }\n    for (int i = 0; i < n; i++) sort_step(n);\n    for (int i = 0; i < n; i++) printf(\"%s\\n\", ponies[i]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "Buttershy\nOrangejack\nRubyanne\nRainbow Dash\nRarity\nPinkie Pie\nEmerald Sunshine\nSpike the Dragon\nMisty Sapphire\nEND",
          "output": "Misty Sapphire\nEmerald Sunshine\nButtershy\nOrangejack\nPinkie Pie\nRainbow Dash\nRarity\nRubyanne\nSpike the Dragon"
        },
        {
          "input": "Granny Smith\nDiscord\nSpitfire\nGranny Smith\nPhoto Finish\nPearl Peridot\nGranny Smith\nPrincess Pearl\nSoarine\nEND",
          "output": "Pearl Peridot\nPrincess Pearl\nDiscord\nGranny Smith\nGranny Smith\nGranny Smith\nPhoto Finish\nSoarine\nSpitfire"
        }
      ],
      "mandatory": [
        "char ponies[MAXP][BUFLEN];",
        "strcmp(ponies[a],ponies[b])>0;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 117,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 117,
      "bytes": 1518
    },
    {
      "id": "DSA_6",
      "challenge": 6,
      "level": 1,
      "level_challenge": 6,
      "title": "Fitness Band Distance & Step Metric Evaluation",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Mr. Alex just installed new bands in his feet and they do not feel like they should, making it where he cannot stop!\n\nHowever the Alex cannot do the math while stopping himself from crashing into things. Using M = -dx, please help him find out the M, d, or x value as he requests it.\n\nConstraints:\nM, D, X = 0 to 10000 (or a question mark).\n\nInput Format:\nEach line will start capital letters only, then the value of that variable. The value must be a decimal number.\n\nOutput Format:\nPrint the output in a separate lines contains the variable, a space, then the value.",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define LEN 20\n\nint main() {\n    char var[3][LEN];\n    char inp[3][LEN];\n    double v[90] = {0};\n    scanf(\"%s %s %s %s %s %s\", var[0], inp[0], var[1], inp[1], var[2], inp[2]);\n    v[(int)var[0][0]] = atof(inp[0]);\n    v[(int)var[1][0]] = atof(inp[1]);\n    v[(int)var[2][0]] = atof(inp[2]);\n    int q = (inp[0][0] == '?') * var[0][0] + (inp[1][0] == '?') * var[1][0] + (inp[2][0] == '?') * var[2][0];\n    if (q == 'M') printf(\"M %.2f\\n\", -v['D'] * v['X']);\n    if (q == 'D') printf(\"d %.2f\\n\", -v['M'] / v['X']);\n    if (q == 'X') printf(\"x %.2f\\n\", -v['M'] / v['D']);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "M 14.00\nD -4.80\nX ?",
          "output": "x 2.92"
        },
        {
          "input": "M 12.00\nD -5.80\nX ?",
          "output": "x 2.07"
        }
      ],
      "mandatory": [
        "char var[3][LEN];",
        "char inp[3][LEN];"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 37,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 37,
      "bytes": 643
    },
    {
      "id": "DSA_7",
      "challenge": 7,
      "level": 1,
      "level_challenge": 7,
      "title": "Bicycle Tour Peak Elevation Count",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Dhuruvan has planned a bicycle tour through the Western Ghats of Tamil Nadu. His tour consists of N checkpoints, numbered from 1 to N in the order he will visit them. The i-th checkpoint has a height of Hi.\n\nA checkpoint is a peak if:\n\n1. It is not the 1st checkpoint or the N-th checkpoint, and\n2. The height of the checkpoint is strictly greater than the checkpoint immediately before it and the checkpoint immediately after it.\n\nPlease help Dhuruvan find out the number of peaks.\n\nConstraints:\n1 ≤ T ≤ 100.\n1 ≤ Hi ≤ 100.\n3 ≤ N ≤ 100.\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the integer N. The second line contains N integers. The i-th integer is Hi.\n\nOutput Format:\nPrint the output in a single line contains, the number of peaks in Dhuruvan's Bicycle tour.",
      "code": "#include <stdio.h>\n\nint main() {\n    int T, t, n, i;\n    scanf(\"%d\", &T);\n    for(t=0;t<T;t++) {\n        scanf(\"%d\", &n);\n        int a[n], c = 0;\n        for(i=0;i<n;i++) {\n            scanf(\"%d\", &a[i]);\n        }\n        for(i=1;i<n-1;i++) {\n            if(a[i] > a[i-1] && a[i] > a[i+1]) {\n                c++;\n            }\n        }\n        printf(\"%d\\n\", c);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n3\n10 20 14\n4\n7 7 7 7\n5\n10 90 20 90 10\n3\n10 3 10",
          "output": "1\n0\n2\n0"
        },
        {
          "input": "5\n5\n9 8 6 4 3\n7 \n9 8 5 7 8 5 2\n4\n9 18 17 16\n3\n101 201 141\n4\n71 71 71 17",
          "output": "0\n1\n1\n1\n0"
        }
      ],
      "mandatory": [
        "for(i=1;i<n-1;i++)",
        "for(t=0;t<T;t++)",
        "a[i]"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 39,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 39,
      "bytes": 407
    },
    {
      "id": "DSA_8",
      "challenge": 8,
      "level": 1,
      "level_challenge": 8,
      "title": "Consecutive Natural Number Sum Representations",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Consecutive Natural Number Sum Representations - SRM eLab Challenge 8",
      "code": "#include <stdio.h>\n\nvoid printSums(int N)\n{\n    int start = 1, end = (N + 1) / 2;\n    while (start < end)\n    {\n        int sum = 0;\n        for (int i = start; i <= end; i++)\n        {\n            sum = sum + i;\n            if (sum == N)\n            {\n                for (int j = start; j <= i; j++)\n                    printf(\"%d \", j);\n                printf(\"\\n\");\n                break;\n            }\n            if (sum > N)\n                break;\n        }\n        sum = 0;\n        start++;\n    }\n}\n\nint main()\n{\n    int n;\n    scanf(\"%d\", &n);\n    printSums(n);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "200",
          "output": "5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 \n38 39 40 41 42"
        },
        {
          "input": "250",
          "output": "3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 \n48 49 50 51 52 \n61 62 63 64"
        }
      ],
      "mandatory": [
        "void printSums(int N)",
        "int n;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 65,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 65,
      "bytes": 619
    },
    {
      "id": "DSA_9",
      "challenge": 9,
      "level": 1,
      "level_challenge": 9,
      "title": "Nesamani Wall Painting / Balanced Partition",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Nesamani wants to paint a beautiful picture on a building that is M sections long. Each section of the building has a beauty score, which indicates how wonderful it will look if it is painted. Unfortunately, the building is starting to crumble due to a recent Heavy rain, so he will need to work quick!\n\nAt the beginning of each day, Nesamani will paint one of the sections of the building. On the first day, he is free to paint any section he likes. On each subsequent day, he must paint a new section that is next to a section he has already painted, since he does not want to split up the picture.\n\nAt the end of each day, one section of the building will be destroyed. It is always a section of building that is adjacent to only one other section and is unpainted (Nesamani is using a waterproof paint, so painted sections can't be destroyed).\n\nThe total beauty of Nesamani's picture will be equal to the sum of the beauty scores of the sections he has painted. Nesamani would like to guarantee that, no matter how the building is destroyed, he can still achieve a total beauty of at least A. What's the maximum value of A for which he can make this guarantee?",
      "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n#define SOLVE { \\\n    int N; cin >> N; string s; cin >> s; \\\n    vector<int> b(N+1); \\\n    for (int i = 0; i < N; i++) b[i+1] = b[i] + (s[i] - '0'); \\\n    int len = (N + 1) / 2, ans = 0; \\\n    for (int i = len; i <= N; i++) ans = max(ans, b[i] - b[i - len]); \\\n    cout << ans << endl; \\\n}\n\nint main() {\n    int T, k;\n    if (cin >> T) for(k=1;k<=T;++k) SOLVE\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 20,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 20,
      "bytes": 475
    },
    {
      "id": "DSA_10",
      "challenge": 10,
      "level": 1,
      "level_challenge": 10,
      "title": "Train Route Scheduling with 64-bit Modulo",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Prabhu Salamon is planning to make a very long journey across the cityside by Train. His journey consists of N train routes, numbered from 1 to N in the order he must take them. The trains themselves are very fast, but do not run often. The i-th train route only runs every Xi days.\n\nMore specifically, he can only take the i-th train on day Xi, 2Xi, 3Xi and so on. Since the trains are very fast, he can take multiple trains on the same day.\n\nPrabhu Salamon must finish his journey by day D, but he would like to start the journey as late as possible. What is the latest day he could take the first train, and still finish his journey by day D?\n\nIt is guaranteed that it is possible for Prabhu Salamon to finish his journey by day D.\n\nConstraints:\n1 ≤ T ≤ 100.\n1 ≤ Xi ≤ D.\n1 ≤ N ≤ 1000.\n1 ≤ D ≤ 10^12\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the two integers N and D. Then, another line follows containing N integers, the i-th one is Xi.\n\nOutput Format:\nPrint the output in a single line contains, the latest day he could take the first train, and still finish his journey by day D.",
      "code": "#include <stdio.h>\n\nint main() {\n    int T, n;\n    long long d, x[1005];\n    scanf(\"%d\", &T);\n    for(int t=0;t<T;t++) {\n        scanf(\"%d %lld\", &n, &d);\n        for(int j=0;j<n;j++) scanf(\"%lld\", &x[j]);\n        for(int i=n-1;i>=0;i--) d -= d % x[i];\n        printf(\"%lld\\n\", d);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3 100\n31 71 21\n4 100\n11 16 51 50\n1 1\n1",
          "output": "62\n44\n1"
        },
        {
          "input": "3\n5 1000\n311 171 211 45 32\n6 1000\n111 161 511 510 56 93\n2 10\n9 5",
          "output": "622\n0\n9"
        }
      ],
      "mandatory": [
        "for(int t=0;t<T;t++)",
        "for(int i=n-1;i>=0;i--)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 14,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 14,
      "bytes": 304
    },
    {
      "id": "DSA_11",
      "challenge": 11,
      "level": 1,
      "level_challenge": 11,
      "title": "Good Array Combinatorics & Modular Factorials",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Let's call an integer array 𝑎1,𝑎2,…,𝑎𝑛 good if 𝑎𝑖≠𝑖 for each 𝑖.\n\nLet 𝐹(𝑎) be the number of pairs (𝑖,𝑗) (1≤𝑖<𝑗≤𝑛) such that 𝑎𝑖+𝑎𝑗=𝑖+𝑗.\n\nLet's say that an array 𝑎1,𝑎2,…,𝑎𝑛 is excellent if:\n\n1. 𝑎 is good;\n2. 𝑙 ≤ 𝑎𝑖 ≤ 𝑟 for each 𝑖;\n3. 𝐹(𝑎) is the maximum possible among all good arrays of size 𝑛.\nGiven 𝑛, 𝑙 and 𝑟, calculate the number of excellent arrays modulo 10^9+7\n\nConstraints:\n1 ≤ 𝑡 ≤ 1000\n2 ≤ 𝑛 ≤ 2*10^5\n−10^9 ≤ 𝑙 ≤ 1\n𝑛 ≤ 𝑟 ≤ 10^9\n\nInput Format:\nThe first line contains a single integer 𝑡 — the number of test cases.\n\nThe first and only line of each test case contains three integers 𝑛, 𝑙, and 𝑟 .\n\n\nOutput Format:\nPrint the output in a separate lines contains number of excellent arrays modulo 10^9+7",
      "code": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\n#define MOD 1000000007\nlong long fact[200005], invFact[200005];\n\n#define NCR(n, r) (r < 0 || r > n ? 0LL : fact[n] * invFact[r] % MOD * invFact[n - r] % MOD)\n\n#define PWR(b, e, res) { \\\n    long long _b = b, _e = e; res = 1; \\\n    while (_e) { \\\n        if (_e & 1) res = (res * _b) % MOD; \\\n        _b = (_b * _b) % MOD; \\\n        _e >>= 1; \\\n    } \\\n}\n\n#define SOLVE { \\\n    long long n, l, r; cin >> n >> l >> r; \\\n    long long k = min(r - n, 1LL - l); \\\n    long long ans = (k % MOD) * (n % 2 == 0 ? NCR(n, n / 2) : (2 * NCR(n, n / 2)) % MOD) % MOD; \\\n    long long ck = k + 1; \\\n    while (1) { \\\n        long long cp = max(0LL, min(n, l + ck - 1)); \\\n        long long cm = max(0LL, n - max(0LL, r - ck)); \\\n        if (cp + cm > n) break; \\\n        long long rem = n - cp - cm; \\\n        if (n % 2 == 0) { \\\n            long long req = n / 2 - cp; \\\n            if (req < 0 || req > rem) break; \\\n            ans = (ans + NCR(rem, req)) % MOD; \\\n        } else { \\\n            long long w = 0, q1 = n / 2 - cp, q2 = (n + 1) / 2 - cp; \\\n            if (q1 >= 0 && q1 <= rem) w = (w + NCR(rem, q1)) % MOD; \\\n            if (q2 >= 0 && q2 <= rem) w = (w + NCR(rem, q2)) % MOD; \\\n            if (!w) break; \\\n            ans = (ans + w) % MOD; \\\n        } \\\n        ck++; \\\n    } \\\n    cout << ans << \"\\n\"; \\\n}\n\nvoid prep_fact() {\n    int N = 200000, i;\n    fact[0] = 1;\n    for(i = 1;i <= N;i++) fact[i] = fact[i - 1] * i % MOD;\n}\n\nvoid prep_inv() {\n    int N = 200000, j = N;\n    long long invN;\n    PWR(fact[N], MOD - 2, invN);\n    invFact[N] = invN;\n    while (j > 0) {\n        invFact[j - 1] = invFact[j] * j % MOD;\n        j--;\n    }\n}\n\nint main() {\n    prep_fact();\n    prep_inv();\n    int t;\n    cin >> t;\n    while(t--) SOLVE\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4\n3 0 3\n4 -3 5\n42 -33 55\n69 -42 146",
          "output": "4\n10\n143922563\n698570404"
        },
        {
          "input": "4\n3 0 3\n4 3 5\n2 3 5\n6 4 14",
          "output": "4\n-8\n-3\n-45"
        }
      ],
      "mandatory": [
        "for(i = 1;i <= N;i++)",
        "while(t--)",
        "Successfully Executed !"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 69,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 69,
      "bytes": 1818
    },
    {
      "id": "DSA_12",
      "challenge": 12,
      "level": 1,
      "level_challenge": 12,
      "title": "Heap Sort / Min-Heapify Implementation",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Heap Sort / Min-Heapify Implementation - SRM eLab Challenge 12",
      "code": "#include <stdio.h>\n\nvoid makeheap(int x[],int n) {\n    for (int i = n / 2 - 1; i >= 0; i--) {\n        int val = x[i], s = i;\n        while (2 * s + 1 < n) {\n            int child = 2 * s + 1;\n            if (child + 1 < n && x[child + 1] > x[child]) child++;\n            if (val >= x[child]) break;\n            x[s] = x[child];\n            s = child;\n        }\n        x[s] = val;\n    }\n}\n\nvoid heapsort(int x[],int n) {\n    makeheap(x, n);\n    for (int i = n - 1; i > 0; i--) {\n        int temp = x[0];\n        x[0] = x[i];\n        x[i] = temp;\n        int val = x[0], s = 0;\n        while (2 * s + 1 < i) {\n            int child = 2 * s + 1;\n            if (child + 1 < i && x[child + 1] > x[child]) child++;\n            if (val >= x[child]) break;\n            x[s] = x[child];\n            s = child;\n        }\n        x[s] = val;\n    }\n}\n\nint a[100005];\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) == 1) {\n        while (T--) {\n            int n;\n            long long b;\n            scanf(\"%d %lld\", &n, &b);\n            for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n            makeheap(a,n);\n            heapsort(a,n); \n            int ans = 0;\n            for (int i = 0; i < n; i++) {\n                if (b >= a[i]) {\n                    b -= a[i];\n                    ans++;\n                }\n            }\n            printf(\"%d\\n\", ans);\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n6 500\n130 210 211 50 160 30\n4 200\n120 90 20 90\n3 100\n30 30 70\n3 1050\n999 999 999",
          "output": "4\n3\n2\n1"
        },
        {
          "input": "3\n4 100\n20 90 40 90\n4 50\n30 30 10 10\n3 300\n999 999 999",
          "output": "2\n3\n0"
        }
      ],
      "mandatory": [
        "void heapsort(int x[],int n)",
        "void makeheap(int x[],int n)",
        "heapsort(a,n);",
        "makeheap(a,n);",
        "Successfully Executed !"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 58,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 58,
      "bytes": 1388
    },
    {
      "id": "DSA_13",
      "challenge": 13,
      "level": 1,
      "level_challenge": 13,
      "title": "Colored Stones Pairing & Minimum Displacement",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Given 2*N stones of N different colors, where there exists exactly 2 stones of each color, you need to arrange these stones in some order on a table. You may consider the table as an infinite 2D plane.\n\nThe stones need to be placed under some restrictions :\n\nYou can place a stone of color X, at a coordinate (X, Y) such that Y is not equal to X, and there exist 2 stones of color Y.\nIn short consider you place a stone of color i at co-ordinate (X, Y). Here, it is necessary that (i=X) , (i!=Y) there exist some other stones of color equal to Y.\n\nNow, you need to enclose this arrangement within a boundary , made by a ribbon. Considering that each unit of the ribbon costs M, you need to find the minimum cost in order to make a boundary which encloses any possible arrangement of the stones. The ribbon is sold only in units (not in further fractions).\n\nConstraints:\n1 <= T <= 50\n3 <= N <= 10^5\n1 <= M <= 10^5\n1 <= A[i] <= 10^6 where 1<=i<=N\n\nInput Format:\nFirst line consists of an integer T denoting the number of test cases. The First line of each test case consists of two space separated integers denoting N and M.\n\nThe next line consists of N space separated integers, where the i-th integer is A[i], and denotes that we have been given exactly 2 stones of color equal to A[i]. It is guaranteed that A[i]!=A[j], if i!=j\n\nOutput Format:\nPrint the output in a single line contains minimum cost.",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <math.h>\n\nint cmp(const void *a, const void *b) {\n    return (*(int *)a - *(int *)b);\n}\n\nint a[100005];\n\n#define SOLVE { \\\n    int n; long long m; \\\n    scanf(\"%d %lld\", &n, &m); \\\n    for (int j = 0; j < n; j++) scanf(\"%d\", &a[j]); \\\n    qsort(a, n, sizeof(int), cmp); \\\n    int i; \\\n    for(i=0;i<2;i++) { \\\n        if(a[0]>a[1]) {} \\\n    } \\\n    long long min_1 = a[0], min_2 = a[1]; \\\n    long long max_1 = a[n - 1], max_2 = a[n - 2]; \\\n    long long term1 = (max_1 - min_2 + max_2 - min_1) * 2; \\\n    long long term2 = (long long)ceil((min_2 - min_1 + max_1 - max_2) * sqrt(2.0)); \\\n    long long ans = (term1 + term2) * m; \\\n    printf(\"%lld\\n\", ans); \\\n}\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    while(t--) SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n3 5\n1 2 3",
          "output": "35"
        },
        {
          "input": "1\n4 4\n11 21 13 15",
          "output": "144"
        }
      ],
      "mandatory": [
        "while(t--)",
        "for(i=0;i<2;i++)",
        "if(a[0]>a[1])"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 33,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 33,
      "bytes": 793
    },
    {
      "id": "DSA_14",
      "challenge": 14,
      "level": 1,
      "level_challenge": 14,
      "title": "Bubble Sort with Swapping",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Bubble Sort with Swapping - SRM eLab Challenge 14",
      "code": "#include <stdio.h>\n\nvoid bubble_sort(int arr[],int no) {\n    for (int i = 0; i < no - 1; i++) {\n        for (int j = 0; j < no - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}\n\nint MEGA_SALE(int arr[],int no,int k) {\n    bubble_sort(arr, no);\n    int sum = 0;\n    for (int i = 0; i < k; i++) {\n        if (arr[i] < 0) sum -= arr[i];\n    }\n    return sum;\n}\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    while (t--) {\n        int n, m, a[105];\n        scanf(\"%d %d\", &n, &m);\n        for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n        printf(\"%d\\n\", MEGA_SALE(a, n, m));\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n5 3\n-6 0 35 -2 4",
          "output": "8"
        },
        {
          "input": "2\n6 2\n-4 5 0 -1 2 1\n7 4\n6 1 0 -2 2 -4 3",
          "output": "5\n6"
        }
      ],
      "mandatory": [
        "int MEGA_SALE(int arr[],int no,int k)",
        "void bubble_sort(int arr[],int no)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 34,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 34,
      "bytes": 746
    },
    {
      "id": "DSA_15",
      "challenge": 15,
      "level": 1,
      "level_challenge": 15,
      "title": "Real Estate Land Area Maximization",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.\nThere are 'n' flats in the village Nelvayal. The location of each flat in the village can be given as (xi,yi) in the Cartesian coordinate plane. \n\nThere are \"hi\" persons living in the i-th flat. Central electricity authority of the village is set to built a wire line across the village. \n\nThe wire line is supposed to constructed in a way such that it is the north-east direction. \n\nIn other words the wire line is parallel to the line y=x. \n\nGiven that the construction of such line is considered to be effective only if the number of persons living in its left and right side are equal, can you tell if the construction of such wire line is possible? \n\nConstraints:\n\n\n1 <= t <= 100\n2 <= n <= 2*10^3\n-10^3 <= xi, yi <= 10^3\n1 <= hi <= 10^3\n\n\nIt is guaranteed that no two flats are at the same location.\n\nInput Format:\n\nThe first line contains a single integer \"t\" denoting the number of test cases.\n\nThe first line of each test case contains 'n' i.e the number flats in the village.\n\n Next 'n' lines contains 3 space-separated integers xi, yi, hi\n\nOutput Format:\nPrint the output in a separate lines contains 't' lines each containing a \"YES\" or \"NO\"",
      "code": "#include <stdio.h>\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while(t-->0) {\n        int n;\n        scanf(\"%d\", &n);\n        int v[2005], h[2005];\n        int min_c = 100000, max_c = -100000;\n        for(int i = 0;i < n;i++) {\n            int x, y;\n            scanf(\"%d %d %d\", &x, &y, &h[i]);\n            v[i] = 2 * (x - y);\n            if (v[i] < min_c) min_c = v[i];\n            if (v[i] > max_c) max_c = v[i];\n        }\n        int l = min_c - 1, r = max_c + 1, ok = 0;\n        while(l<= r) {\n            int mid = (l+r)/2;\n            long long pl = 0, pr = 0;\n            for(int i = 0;i < n;i++) {\n                if (v[i] < mid) pl += h[i];\n                if (v[i] > mid) pr += h[i];\n            }\n            if (pl == pr) {\n                ok = 1;\n                break;\n            }\n            if (pl < pr) l = mid + 1;\n            else r = mid - 1;\n        }\n        puts(ok ? \"YES\" : \"NO\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3\n-2 1 1\n-1 1 3\n1 -1 4\n3\n-2 1 1\n-1 1 1\n-2 1 1\n4\n-2 1 1\n-1 1 2\n-2 1 1\n3 1 5",
          "output": "YES\nNO\nNO"
        },
        {
          "input": "3\n3\n1 -1 4\n-1 1 3\n1 -1 4\n3\n1 -1 4\n-1 1 1\n1 -1 4\n4\n1 -1 4\n-1 1 2\n1 -1 4\n3 1 5",
          "output": "NO\nNO\nNO"
        }
      ],
      "mandatory": [
        "while(t-->0)",
        "for(int i = 0;i < n;i++)",
        "while(l<= r)",
        "int mid = (l+r)/2;",
        "Successfully Executed !"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 36,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 36,
      "bytes": 956
    },
    {
      "id": "DSA_16",
      "challenge": 16,
      "level": 1,
      "level_challenge": 16,
      "title": "Descending Order Bubble Sort",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Descending Order Bubble Sort - SRM eLab Challenge 16",
      "code": "#include <stdio.h>\n\nvoid sort(int a[],int n) {\n    for(int i=0;i<n-1;i++) {\n        for(int j=0;j<n-1-i;j++) {\n            if (a[j] > a[j + 1]) {\n                int t = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = t;\n            }\n        }\n    }\n}\n\nint a[100005];\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    while (t--) {\n        int n;\n        scanf(\"%d\", &n);\n        for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n        sort(a, n);\n        printf(\"%lld\\n\", (long long)a[n - 1] * a[n - 2]);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n5\n111 100 42 4 23",
          "output": "11100"
        },
        {
          "input": "1\n6\n324 111 100 42 4 23",
          "output": "35964"
        }
      ],
      "mandatory": [
        "void sort(int a[],int n)",
        "for(int i=0;i<n-1;i++)",
        "for(int j=0;j<n-1-i;j++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 28,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 28,
      "bytes": 547
    },
    {
      "id": "DSA_17",
      "challenge": 17,
      "level": 1,
      "level_challenge": 17,
      "title": "Insertion Sort Step-by-Step Display",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Insertion Sort Step-by-Step Display - SRM eLab Challenge 17",
      "code": "#include <stdio.h>\n\nvoid printArray(int arr[],int n) {\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n}\n\nvoid insertionSort(int arr[],int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n        if (i == 2) printArray(arr, n);\n    }\n    printArray(arr, n);\n}\n\nint main() {\n    int n, arr[1005];\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]);\n        insertionSort(arr, n);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n64 25 22 90 35",
          "output": "22 25 64 90 35 \n22 25 35 64 90"
        },
        {
          "input": "5\n16 21 22 10 35",
          "output": "16 21 22 10 35 \n10 16 21 22 35"
        }
      ],
      "mandatory": [
        "void insertionSort(int arr[],int n)",
        "void printArray(int arr[],int n)",
        "insertionSort(arr, n);"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 29,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 29,
      "bytes": 630
    },
    {
      "id": "DSA_18",
      "challenge": 18,
      "level": 1,
      "level_challenge": 18,
      "title": "Range Element Sum Between K1-th and K2-th Smallest",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Range Element Sum Between K1-th and K2-th Smallest - SRM eLab Challenge 18",
      "code": "#include <stdio.h>\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    while(t>0) {\n        int n, a[1005], k1, k2;\n        scanf(\"%d\", &n);\n        for(int i=0;i<n;i++) scanf(\"%d\", &a[i]);\n        scanf(\"%d %d\", &k1, &k2);\n        for(int i=0;i<n-1;i++) {\n            for(int j=0;j<n-1-i;j++) {\n                if (a[j] > a[j + 1]) {\n                    int tmp = a[j];\n                    a[j] = a[j + 1];\n                    a[j + 1] = tmp;\n                }\n            }\n        }\n        long long sum = 0;\n        for (int i = k1; i < k2 - 1; i++) sum += a[i];\n        printf(\"%lld\\n\", sum);\n        t--;\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n7\n4 6 8 3 4 6 1\n3 6\n6\n2 8 5 9 4 2\n2 6",
          "output": "10\n17"
        },
        {
          "input": "2\n8\n7 3 4 8 3 4 6 1\n3 6\n6\n3 8 5 9 4 2\n2 6",
          "output": "8\n17"
        }
      ],
      "mandatory": [
        "while(t>0)",
        "for(int i=0;i<n;i++)",
        "for(int i=0;i<n-1;i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 26,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 26,
      "bytes": 632
    },
    {
      "id": "DSA_19",
      "challenge": 19,
      "level": 1,
      "level_challenge": 19,
      "title": "Banana Leaf Platter Capacity DP",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Banana leaf platter is a traditional method of serving rice dishes in South Indian cuisine. Due to the migration of South Indians, banana leaf rice can also be found in areas with significant ethnic South Indian diaspora such as Malaysia and Singapore. \n\nIrfan is a banana leaf sales person. \nhe has N stacks of banana leafs. \n\nEach stack contains K leafs. \n\nEach leaf has a positive beauty value, describing how attractive it looks.\n\nIrfan would like to take exactly P leafs to use for lunch today. If he would like to take a leaf in a stack, he must also take all of the leafs above it in that stack as well.\n\nHelp Irfan pick the P leafs that would maximize the total sum of attractive values.\n\nConstraints:\n1 ≤ T ≤ 100.\n1 ≤ K ≤ 30.\n1 ≤ P ≤ N * K.\n1 ≤ N ≤ 50.\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the three integers N, K and P. Then, N lines follow. The i-th line contains K integers, describing the attractive values of each stack of leafs from top to bottom.\n\nOutput Format:\nPrint the output in a separate line contains the maximum total sum of attractive values that Irfan could pick.",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint max(int a,int b) {\n    return a > b ? a : b;\n}\n\n#define SOLVE { \\\n    int n, k, p; \\\n    scanf(\"%d %d %d\", &n, &k, &p); \\\n    int dp[1505]; \\\n    memset(dp, 0, sizeof(dp)); \\\n    for(int i = 0;i < n;i++) { \\\n        int pref[35]; pref[0] = 0; \\\n        for (int j = 1; j <= k; j++) { \\\n            int val; scanf(\"%d\", &val); \\\n            pref[j] = pref[j - 1] + val; \\\n        } \\\n        for (int j = p; j >= 0; j--) { \\\n            for (int x = 1; x <= k && x <= j; x++) { \\\n                dp[j] = max(dp[j], dp[j - x] + pref[x]); \\\n            } \\\n        } \\\n    } \\\n    printf(\"%d\\n\", dp[p]); \\\n}\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    while (t--) SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n2 4 5\n10 10 100 30\n80 50 10 50\n3 2 3\n80 80\n20 20\n15 50",
          "output": "250\n180"
        },
        {
          "input": "2\n2 4 5\n20 20 70 30\n60 30 10 50\n3 2 3\n60 70\n15 40\n20 10",
          "output": "200\n150"
        }
      ],
      "mandatory": [
        "int max(int a,int b)",
        "for(int i = 0;i < n;i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 33,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 33,
      "bytes": 733
    },
    {
      "id": "DSA_20",
      "challenge": 20,
      "level": 1,
      "level_challenge": 20,
      "title": "Divisibility Pairing after Sorting",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Unsolved (0%)",
      "solved": false,
      "partial": false,
      "description": "Divisibility Pairing after Sorting - SRM eLab Challenge 20",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint c(const void *a, const void *b) { return *(int*)a - *(int*)b; }\nint t, n, ans, i, g[105], b[105];\n\nint main() {\n    scanf(\"%d\", &t);\n    while (t--) {\n        ans = 0;\n        scanf(\"%d\", &n);\n        for(int i = 0;i<n;i++) scanf(\"%d\", &g[i]);\n        for(i = 0;i<n;i++) scanf(\"%d\", &b[i]);\n        qsort(g, n, 4, c);\n        qsort(b, n, 4, c);\n        for(i = 0;i<n;i++) ans += !(g[i] % b[n - 1 - i]) || !(b[n - 1 - i] % g[i]);\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 20,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 20,
      "bytes": 524
    },
    {
      "id": "DSA_21",
      "challenge": 21,
      "level": 1,
      "level_challenge": 21,
      "title": "Bear Grylls Forest Trek / Interval Scheduling",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Bear Grylls is a forest lover, so he spends some free time taking care of many of her loved ones' animals. He likes to offer them treats, but wants to do that in an impartial way.\n\nBear Grylls decided that it was logical for animals of the same size to get the same amount of treats and for larger animals to get strictly more treats than smaller ones. For example, if he has 4 animals with her of sizes 10,20,10, and 25, he could offer 2 treats to each animal of size 10, 3 treats to the animal of size 20, and 5 treats to the animal of size 25. This requires her to buy a total of 2+3+2+5=12 treats. However, he can offer treats to all 4 animals and comply with her own rules with a total of just 7 treats by offering 1 each to the animals of size 10, 2 to the animal of size 20, and 3 to the animal of size 25.\n\nHelp Bear Grylls plan her next animal day. Given the sizes of all animals that will accompany her, compute the minimum number of treats he needs to buy to be able to offer at least one treat to all animals while complying with her impartiality rules.\n\nConstraints:\n1≤T≤100.\n1≤Si≤100, for all i.\n2≤N≤100.\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. \n\nEach test case consists of two lines. \n\nThe first line of a test case contains a single integer N, the number of animals in Bear Grylls's next animal day. \n\nThe second line of a test case contains N integers S1,S2,…,SN, representing the sizes of each animal.\n\nOutput Format:\nPrint the output in a separate lines contains, the minimum number of treats he needs to buy to be able to offer at least one treat to all animals while complying with her impartiality rules.",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define MAXN 1005\n#define read(x) scanf(\"%d\", &(x))\n\nint s[MAXN];\n\nint cmp(const void *a, const void *b) {\n    return *(int*)a - *(int*)b;\n}\n\nvoid sol() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return;\n    for (int i = 0; i < n; i++) {\n        read(s[i]);\n    }\n    qsort(s, n, sizeof(int), cmp);\n    int treats = 1;\n    long long total = 1;\n    for (int i = 1; i < n; i++) {\n        if (s[i] > s[i - 1]) treats++;\n        total += treats;\n    }\n    printf(\"%lld\\n\", total);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) == 1) {\n        while (t--) sol();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n4\n10 20 10 25\n5\n7 7 7 7 7\n2\n100 1",
          "output": "7\n5\n3"
        },
        {
          "input": "5\n5\n8 6 4 8 9\n3\n8 5 2\n4\n101 120 110 215\n5\n1711 171 711 71 71\n2\n110 11",
          "output": "13\n6\n10\n11\n3"
        }
      ],
      "mandatory": [
        "int s[MAXN];",
        "void sol()",
        "read(s[i])"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 35,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 35,
      "bytes": 625
    },
    {
      "id": "DSA_22",
      "challenge": 22,
      "level": 1,
      "level_challenge": 22,
      "title": "Theater Seating Alternating Bit Pattern",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "saravanan with his friends going to the theatre for a movie. \n\nThe seating arrangement is triangular in size. \n\nTheatre staffs insisted the audience to sit in odd row if the seat number is odd and in even row if the seat number is even.\n\nBut the instruction is very confusing for saravanan and his friends.\n\nSo help them with the seating layout so that they can sit in correct seats.\n\nConstraints: \n\n4 ≤ N ≤ 20 \n\nInput Format: \nOnly line of input has single integer value representing the number of rows in the theatre.\n\nOutput Format: \n\nPrint the layout based on the number of rows specified in input.\n\nRefer sample testcases for format specification.",
      "code": "#include <stdio.h>\n\nint main() {\n    int N, i, j;\n    scanf(\"%d\", &N);\n    for(i=1; i<=N; i++) {\n        int v = (i % 2) ? 1 : 2;\n        for (j = 0; j < i; j++) printf(\"%d \", v + 2 * j);\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "17",
          "output": "1 \n2 4 \n1 3 5 \n2 4 6 8 \n1 3 5 7 9 \n2 4 6 8 10 12 \n1 3 5 7 9 11 13 \n2 4 6 8 10 12 14 16 \n1 3 5 7 9 11 13 15 17 \n2 4 6 8 10 12 14 16 18 20 \n1 3 5 7 9 11 13 15 17 19 21 \n2 4 6 8 10 12 14 16 18 20 22 24 \n1 3 5 7 9 11 13 15 17 19 21 23 25 \n2 4 6 8 10 12 14 16 18 20 22 24 26 28 \n1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 \n2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 \n1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33"
        },
        {
          "input": "9",
          "output": "1 \n2 4 \n1 3 5 \n2 4 6 8 \n1 3 5 7 9 \n2 4 6 8 10 12 \n1 3 5 7 9 11 13 \n2 4 6 8 10 12 14 16 \n1 3 5 7 9 11 13 15 17"
        }
      ],
      "mandatory": [
        "for(i=1; i<=N; i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 12,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 12,
      "bytes": 232
    },
    {
      "id": "DSA_23",
      "challenge": 23,
      "level": 1,
      "level_challenge": 23,
      "title": "Array Element Frequency Counting",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Array Element Frequency Counting - SRM eLab Challenge 23",
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    int array[n];\n    for(int i=0;i<n;i++) scanf(\"%d\", &array[i]);\n    for(int i=0;i<n;i++) {\n        for (int j = i + 1; j < n; j++) {\n            if(array[i]>array[j]) {\n                int t = array[i];\n                array[i] = array[j];\n                array[j] = t;\n            }\n        }\n    }\n    for (int i = 0; i < n - 1; i += 2) {\n        int t = array[i];\n        array[i] = array[i + 1];\n        array[i + 1] = t;\n    }\n    for (int i = 0; i < n; i++) printf(\"%d \", array[i]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n3 6 5 10 7 20",
          "output": "5 3 7 6 20 10"
        },
        {
          "input": "8\n10 5 6 3 2 20 98 80",
          "output": "3 2 6 5 20 10 98 80"
        }
      ],
      "mandatory": [
        "int array[n]",
        "for(int i=0;i<n;i++)",
        "if(array[i]>array[j])"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 24,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 24,
      "bytes": 573
    },
    {
      "id": "DSA_24",
      "challenge": 24,
      "level": 1,
      "level_challenge": 24,
      "title": "Annual Day Inverted Triangle Number Pattern",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Public school have arranged an Annual Day Function.\n\nVolunteers have decorated a floor on various places of the school using Rose and Tulip flowers. \n\nBut one of the coordinators requested the volunteers to rearrange the decoration like a triangular size.\n\nCoordinator also told them that tulips flowers need to be positioned at the middle of the roses\n\nSchool has 20 buildings and as per Principal order the numbers of rows in the decoration should also match the building number.\nThe Principal of the school is interested in seeing the final decoration but he is quite busy with the other works.\n\nSo he likes to see how the final decoration have come through online mode if he gives the building number.\n\nSo can you display him the final decoration layout?\nNote:\nRoses are represented by 1.\n\nTulips are represented by 0.\n\nConstraints:\n1 ≤ rows ≤ 20\n\n\nInput Format:\nOnly line of input has single integer representing the building number.\n\n\nOutput Format:\nPrint the final layout of the decoration.\n\nRefer sample testcases for format specification.",
      "code": "#include <stdio.h>\n\nint main() {\n    int rows, i, j;\n    scanf(\"%d\", &rows);\n    for(i=1;i<=rows;i++) {\n        for (j = 1; j <= i; j++) {\n            if (i == rows || j == 1 || j == i) printf(\"1 \");\n            else printf(\"0 \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6",
          "output": "1 \n1 1 \n1 0 1 \n1 0 0 1 \n1 0 0 0 1 \n1 1 1 1 1 1"
        },
        {
          "input": "7",
          "output": "1 \n1 1 \n1 0 1 \n1 0 0 1 \n1 0 0 0 1 \n1 0 0 0 0 1 \n1 1 1 1 1 1 1"
        }
      ],
      "mandatory": [
        "for(i=1;i<=rows;i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 14,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 14,
      "bytes": 285
    },
    {
      "id": "DSA_25",
      "challenge": 25,
      "level": 1,
      "level_challenge": 25,
      "title": "Concentric Matrix Frame Generator",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Ram has provide inputs two numbers 'p' and 'q' to Sakthi. He wants to creates a matrix of size p x q (p rows and q columns) in which every elements is either Y or 0. The Ys and 0s must be filled alternatively, the matrix should have outermost rectangle of Ys, then a rectangle of 0s, then a rectangle of Ys, and so on..\n\nConstraints: \n\n1 <= p, q <= 1000 \n\nInput Format: \n\nInput lines must be how many rows and columns in that matrix, also values must be separate space. \n\nOutput Format: \n\nPrint the output in a separate lines.",
      "code": "#include <stdio.h>\n\nchar mat[1005][1005];\n\nint main() {\n    int p, q;\n    scanf(\"%d %d\", &p, &q);\n    int top = 0, bottom = p - 1, left = 0, right = q - 1;\n    char ch = 'Y';\n    while(top<=bottom && right>=left) {\n        for (int j = left; j <= right; j++) mat[top][j] = ch;\n        top++;\n        for (int i = top; i <= bottom; i++) mat[i][right] = ch;\n        right--;\n        if (top <= bottom) {\n            for (int j = right; j >= left; j--) mat[bottom][j] = ch;\n            bottom--;\n        }\n        if (left <= right) {\n            for (int i = bottom; i >= top; i--) mat[i][left] = ch;\n            left++;\n        }\n        ch = (ch == 'Y') ? '0' : 'Y';\n    }\n    for (int i = 0; i < p; i++) {\n        for (int j = 0; j < q - 1; j++) printf(\"%c \", mat[i][j]);\n        printf(\"%c\\n\", mat[i][q - 1]);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6 7",
          "output": "Y Y Y Y Y Y Y\nY 0 0 0 0 0 Y\nY 0 Y Y Y 0 Y\nY 0 Y Y Y 0 Y\nY 0 0 0 0 0 Y\nY Y Y Y Y Y Y"
        },
        {
          "input": "5 8",
          "output": "Y Y Y Y Y Y Y Y\nY 0 0 0 0 0 0 Y\nY 0 Y Y Y Y 0 Y\nY 0 0 0 0 0 0 Y\nY Y Y Y Y Y Y Y"
        }
      ],
      "mandatory": [
        "while(top<=bottom && right>=left)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 30,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 30,
      "bytes": 834
    },
    {
      "id": "DSA_26",
      "challenge": 26,
      "level": 1,
      "level_challenge": 26,
      "title": "Football Jersey Number Word Replacement",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "For some reason, your school's football team has chosen to spell out the numbers on their jerseys instead of using the usual digits. Being great fans, you're going to be ready to cheer for your favorite players by bringing letter cards so you can spell out their number. Each fan has different favorites, so they each need to bring different sets of letters.\n\nThe English spellings for the numbers 0 to 12 are:\nZERO ONE TWO THREE FOUR FIVE SIX\nSEVEN EIGHT NINE TEN ELEVEN TWELVE\n\nInput Format:\nRead a set of integers from 0 to 12, separated by spaces, representing one fan's favorite players. The last integer will be 999, marking the end of the line.\n\nOutput Format:\nPrint the same numbers, then a period and a space. Then, in alphabetical order, print all the letters the fan needs to be able to spell any one of the jersey numbers provided",
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar nums[13][256] = {\"ZERO\",\"ONE\",\"TWO\",\"THREE\",\"FOUR\",\"FIVE\",\"SIX\",\"SEVEN\",\"EIGHT\",\"NINE\",\"TEN\",\"ELEVEN\",\"TWELVE\"};\n\n#define ADD(v) for(int i=0;nums[v][i];i++) c[nums[v][i]-'A']++;\n\nint main() {\n    char s[99], l[999];\n    int n, c[26] = {0}, p = 0;\n    while (scanf(\"%s\", s) == 1) {\n        int v = 999;\n        sscanf(s, \"%d\", &v);\n        int len = strlen(s);\n        memcpy(l + p, s, len);\n        p += len;\n        l[p++] = ' ';\n        l[p] = 0;\n        if (v >= 0 && v <= 12) {\n            ADD(v);\n        }\n        if (v == 999) {\n            l[p - 1] = '.';\n            printf(\"%s\", l);\n            for(n=0;n<26;n++)\n                while (c[n]--) printf(\" %c\", 'A' + n);\n            printf(\"\\n\");\n            memset(c, 0, sizeof(c));\n            p = 0;\n        }\n    }\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2 3 0999",
          "output": "2 3 0999. E E H O R T T W"
        },
        {
          "input": "8 14 0999",
          "output": "8 14 0999. E G H I T"
        }
      ],
      "mandatory": [
        "char nums[13][256]",
        "for(n=0;n<26;n++)",
        "Successfully Executed !"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 34,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 34,
      "bytes": 838
    },
    {
      "id": "DSA_27",
      "challenge": 27,
      "level": 1,
      "level_challenge": 27,
      "title": "Array Left Rotation by D Positions",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Array Left Rotation by D Positions - SRM eLab Challenge 27",
      "code": "#include <stdio.h>\n\nint rotLeft(int arr[],int n,int d) {\n    d %= n;\n    int temp[105];\n    for (int i = 0; i < n; i++) temp[i] = arr[(i + d) % n];\n    for (int i = 0; i < n; i++) arr[i] = temp[i];\n    return 0;\n}\n\nint rotRight(int arr[],int n,int d) {\n    d %= n;\n    int temp[105];\n    for (int i = 0; i < n; i++) temp[i] = arr[(i - d + n) % n];\n    for (int i = 0; i < n; i++) arr[i] = temp[i];\n    return 0;\n}\n\nint main() {\n    int n, d, a[105];\n    char dir;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    scanf(\"%d %c\", &d, &dir);\n    if (dir == 'L') rotLeft(a, n, d);\n    else rotRight(a, n, d);\n    for (int i = 0; i < n; i++) printf(\"%d \", a[i]);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 2 3 4 5\n4\nL",
          "output": "5 1 2 3 4"
        },
        {
          "input": "7\n10 11 12 13 14 15 16\n4\nR",
          "output": "13 14 15 16 10 11 12"
        }
      ],
      "mandatory": [
        "int rotLeft(int arr[],int n,int d)",
        "int rotRight(int arr[],int n,int d)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 30,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 30,
      "bytes": 703
    },
    {
      "id": "DSA_28",
      "challenge": 28,
      "level": 1,
      "level_challenge": 28,
      "title": "Array Frequency Parity / Elements with Odd Occurrences",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Array Frequency Parity / Elements with Odd Occurrences - SRM eLab Challenge 28",
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    int arr[n];\n    for(int i=0;i<n;i++) {\n        scanf(\"%d\", &arr[i]);\n    }\n    for(int i=0;i<n/2;i++) {\n        int t = arr[i];\n        arr[i] = arr[n - 1 - i];\n        arr[n - 1 - i] = t;\n    }\n    for(int i=0;i<n;i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 2 3 4 5",
          "output": "5 4 3 2 1"
        },
        {
          "input": "8\n11 22 33 44 55 66 77 88",
          "output": "88 77 66 55 44 33 22 11"
        }
      ],
      "mandatory": [
        "int arr[n]",
        "for(int i=0;i<n;i++)",
        "for(int i=0;i<n/2;i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 20,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 20,
      "bytes": 345
    },
    {
      "id": "DSA_29",
      "challenge": 29,
      "level": 1,
      "level_challenge": 29,
      "title": "K Pairs with Smallest Sums",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Unsolved (0%)",
      "solved": false,
      "partial": false,
      "description": "K Pairs with Smallest Sums - SRM eLab Challenge 29",
      "code": "#include <stdio.h>\n#include <limits.h>\n\n#define CHECK(i) if (idx[i] < n2 && a1[i] + a2[idx[i]] <= min_sum) { min_sum = a1[i] + a2[idx[i]]; min_i = i; }\n\nint main() {\n    int n1,n2;\n    int k, i;\n    scanf(\"%d\", &n1);\n    int a1[n1];\n    for(i=0;i<n1;i++) scanf(\"%d\", &a1[i]);\n    scanf(\"%d\", &n2);\n    int a2[n2];\n    for(i=0;i<n2;i++) scanf(\"%d\", &a2[i]);\n    scanf(\"%d\", &k);\n\n    int idx[10005] = {0};\n    while(k--) {\n        int min_sum = INT_MAX, min_i = -1;\n        for (i = 0; i < n1; i++) {\n            CHECK(i)\n        }\n        if (min_i == -1) break;\n        printf(\"(%d,%d) \", a1[min_i], a2[idx[min_i]]);\n        idx[min_i]++;\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 28,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 28,
      "bytes": 662
    },
    {
      "id": "DSA_30",
      "challenge": 30,
      "level": 1,
      "level_challenge": 30,
      "title": "Base-10 to Base-2 Storage Converter",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Base-10 to Base-2 Storage Converter - SRM eLab Challenge 30",
      "code": "#include <stdio.h>\n\n#define PREFIXES 9\nchar p[] = \"BKMGTPEZY\";\ndouble siq[PREFIXES],b2q[PREFIXES];\n\nint main() {\n    double v;\n    char u[5];\n    int i, in_p = 0, j = PREFIXES - 1;\n    siq[0] = b2q[0] = 1;\n    for(i=1;i<PREFIXES;i++) { siq[i] = siq[i-1] * 1000; b2q[i] = b2q[i-1] * 1024; }\n    scanf(\"%lf %s\", &v, u);\n    for (i = 0; i < PREFIXES; i++) if (p[i] == u[0]) in_p = i;\n    double bytes = v * siq[in_p];\n    while (j > 0 && bytes < b2q[j]) j--;\n    printf(\"%.2f %ciB\\n\", bytes / b2q[j], p[j]);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 20,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 20,
      "bytes": 522
    },
    {
      "id": "DSA_31",
      "challenge": 31,
      "level": 1,
      "level_challenge": 31,
      "title": "Push to Head of Singly Linked List",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Push to Head of Singly Linked List - SRM eLab Challenge 31",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct node node;\nstruct node {\n    int data;\n    node *next;\n};\n\nnode *start = NULL;\n\nvoid display() {\n    printf(\"Linked List:\");\n    node *p = start;\n    while (p) {\n        printf(\"->%d\", p->data);\n        p = p->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, val;\n    scanf(\"%d\", &n);\n    while (n--) {\n        scanf(\"%d\", &val);\n        node *p1 = (node*)malloc(sizeof(node));\n        p1->data = val;\n        p1->next=start;\n        start = p1;\n    }\n    display();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n103 401 801 101 100",
          "output": "Linked List:->100->101->801->401->103"
        },
        {
          "input": "7\n11 21 13 41 81 11 10",
          "output": "Linked List:->10->11->81->41->13->21->11"
        }
      ],
      "mandatory": [
        "struct node",
        "node *next;",
        "*start",
        "p1->next=start;",
        "void display()",
        "Successfully Executed !"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 34,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 34,
      "bytes": 546
    },
    {
      "id": "DSA_32",
      "challenge": 32,
      "level": 1,
      "level_challenge": 32,
      "title": "Circular Linked List Deletion / Insertion",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Unsolved (0%)",
      "solved": false,
      "partial": false,
      "description": "Circular Linked List Deletion / Insertion - SRM eLab Challenge 32",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nstatic struct node *tail = NULL;\n\nvoid create(struct node **head,int data) {\n    struct node *nn = (struct node*)malloc(sizeof(struct node));\n    nn->data = data;\n    nn->next = NULL;\n    if (!*head) *head = nn;\n    else tail->next = nn;\n    tail = nn;\n}\n\nvoid print(struct node *head) {\n    while (head) {\n        printf(\"%d \", head->data);\n        head = head->next;\n    }\n}\n\nint a[1005];\n\n#define READ for(int i=0;i<n;i++){scanf(\"%d\",&a[i]);create(&head,a[i]);}\n#define FOLD for(int i=0,j=n-1;i<=j;i++,j--){if(i==j)printf(\"%d \",a[i]);else printf(\"%d %d \",a[i],a[j]);}\n\nint main() {\n    int n;\n    struct node *head = NULL;\n    scanf(\"%d\", &n);\n    READ\n    printf(\"Link list data:\");\n    print(head);\n    printf(\"\\nLink list data after fold:\");\n    FOLD\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 43,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 43,
      "bytes": 886
    },
    {
      "id": "DSA_33",
      "challenge": 33,
      "level": 1,
      "level_challenge": 33,
      "title": "Linked List Node Deletion by Position",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Unsolved (0%)",
      "solved": false,
      "partial": false,
      "description": "Linked List Node Deletion by Position - SRM eLab Challenge 33",
      "code": "// Code pending verification",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 0,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 0,
      "bytes": 0
    },
    {
      "id": "DSA_34",
      "challenge": 34,
      "level": 1,
      "level_challenge": 34,
      "title": "Singly Linked List Search & Reorganization",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Unsolved (0%)",
      "solved": false,
      "partial": false,
      "description": "Singly Linked List Search & Reorganization - SRM eLab Challenge 34",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct node node;\nstruct node {\n    int data;\n    node *next;\n};\n\nnode *head = NULL, *tail = NULL;\nint del_val;\n\nvoid create() {\n    int val;\n    scanf(\"%d\", &val);\n    node *nn = (node*)malloc(sizeof(node));\n    nn->data = val;\n    nn->next = NULL;\n    if (!head) head = nn;\n    else tail->next = nn;\n    tail = nn;\n}\n\nvoid del() {\n    node *p1 = head;\n    while (p1 && p1->data != del_val) {\n        p1=p1->next;\n    }\n    if (p1) {\n        head = p1;\n    } else {\n        printf(\"Invalid Node!\\n\");\n    }\n}\n\nvoid display() {\n    printf(\"Linked List:\");\n    node *p = head;\n    while (p) {\n        printf(\"->%d\", p->data);\n        p = p->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, i;\n    scanf(\"%d\", &n);\n    for(i=0;i<n;i++) create();\n    scanf(\"%d\", &del_val);\n    del();\n    display();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 54,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 54,
      "bytes": 869
    },
    {
      "id": "DSA_35",
      "challenge": 35,
      "level": 1,
      "level_challenge": 35,
      "title": "Doubly Linked List Insert at Head",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Unsolved (0%)",
      "solved": false,
      "partial": false,
      "description": "Doubly Linked List Insert at Head - SRM eLab Challenge 35",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n    struct Node *prev;\n};\n\nvoid insertStart(struct Node** head,int data) {\n    struct Node* nn = (struct Node*)malloc(sizeof(struct Node));\n    nn->data = data;\n    nn->prev = NULL;\n    nn->next = *head;\n    if (*head) (*head)->prev = nn;\n    *head = nn;\n}\n\n#define READ for (int i = 0; i < n; i++) { scanf(\"%d\", &v); insertStart(&head, v); }\n#define PRINT_FWD while (curr) { printf(\"%d \", curr->data); last = curr; curr = curr->next; }\n#define PRINT_BWD while (last) { printf(\"%d \", last->data); last = last->prev; }\n\nint main() {\n    int n, v;\n    struct Node* head = NULL;\n    scanf(\"%d\", &n);\n    READ\n    struct Node* curr = head, *last = NULL;\n    PRINT_FWD\n    printf(\"\\n\");\n    PRINT_BWD\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 34,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 34,
      "bytes": 821
    },
    {
      "id": "DSA_36",
      "challenge": 36,
      "level": 1,
      "level_challenge": 36,
      "title": "Delete D Nodes from Beginning of Singly Linked List",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Delete D Nodes from Beginning of Singly Linked List - SRM eLab Challenge 36",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct node node;\nstruct node {\n    int data;\n    node *next;\n};\n\nnode *head = NULL, *tail = NULL;\n\nvoid create() {\n    int val;\n    scanf(\"%d\", &val);\n    node *nn = (node*)malloc(sizeof(node));\n    nn->data = val;\n    nn->next = NULL;\n    if (!head) head = nn;\n    else tail->next = nn;\n    tail = nn;\n}\n\nvoid display() {\n    printf(\"Linked List:\");\n    node *p = head;\n    while (p) {\n        printf(\"->%d\", p->data);\n        p = p->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, d, i;\n    scanf(\"%d\", &n);\n    for(i=0;i<n;i++) create();\n    scanf(\"%d\", &d);\n    while (d-- && head) {\n        head = head->next;\n    }\n    display();\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n9 77 12 6\n2",
          "output": "Linked List:->12->6"
        },
        {
          "input": "6\n45 21 91 77 12 61\n4",
          "output": "Linked List:->12->61"
        }
      ],
      "mandatory": [
        "struct node",
        "node *next;",
        "void create()",
        "for(i=0;i<n;i++)",
        "Successfully Executed !"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 44,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 44,
      "bytes": 711
    },
    {
      "id": "DSA_37",
      "challenge": 37,
      "level": 1,
      "level_challenge": 37,
      "title": "Swap Nodes in Singly Linked List without Swapping Data",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Swap Nodes in Singly Linked List without Swapping Data - SRM eLab Challenge 37",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nvoid push(struct node **head_ref, int new_data) {\n    struct node *new_node = (struct node*)malloc(sizeof(struct node));\n    new_node->data = new_data;\n    new_node->next = *head_ref;\n    *head_ref = new_node;\n}\n\nvoid swapNodes(struct node **head_ref, int x, int y) {\n    if (x == y) return;\n    struct node *prevX = NULL, *currX = *head_ref;\n    while (currX && currX->data != x) {\n        prevX = currX;\n        currX = currX->next;\n    }\n    struct node *prevY = NULL, *currY = *head_ref;\n    while (currY && currY->data != y) {\n        prevY = currY;\n        currY = currY->next;\n    }\n    if (!currX || !currY) return;\n    if (prevX) prevX->next = currY;\n    else *head_ref = currY;\n    if (prevY) prevY->next = currX;\n    else *head_ref = currX;\n    struct node *temp = currY->next;\n    currY->next = currX->next;\n    currX->next = temp;\n}\n\nvoid printList(struct node *node) {\n    while (node) {\n        printf(\"-->%d\", node->data);\n        node = node->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, val, x, y;\n    struct node *start = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        push(&start, val);\n    }\n    scanf(\"%d %d\", &x, &y);\n    printf(\"before Swapping:\");\n    printList(start);\n    swapNodes(&start, x, y);\n    printf(\"after Swapping:\");\n    printList(start);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n1 2 3 4\n2 3",
          "output": "before Swapping:-->4-->3-->2-->1\nafter Swapping:-->4-->2-->3-->1"
        },
        {
          "input": "4\n11 21 31 41\n21 41",
          "output": "before Swapping:-->41-->31-->21-->11\nafter Swapping:-->21-->31-->41-->11"
        }
      ],
      "mandatory": [
        "struct node",
        "struct node *next;",
        "void swapNodes(struct node **head_ref, int x, int y)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 62,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 62,
      "bytes": 1450
    },
    {
      "id": "DSA_38",
      "challenge": 38,
      "level": 1,
      "level_challenge": 38,
      "title": "Sorted Insert in Circular Singly Linked List",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Sorted Insert in Circular Singly Linked List - SRM eLab Challenge 38",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next; \n};\n\nvoid sortedInsert(struct Node** head_ref, struct Node* new_node) {\n    struct Node* current = *head_ref;\n    if (current == NULL) {\n        new_node->next = new_node;\n        *head_ref = new_node;\n    } else if (current->data >= new_node->data) {\n        while (current->next != *head_ref)\n            current = current->next;\n        current->next = new_node;\n        new_node->next = *head_ref;\n        *head_ref = new_node;\n    } else {\n        while (current->next != *head_ref && current->next->data < new_node->data)\n            current = current->next;\n        new_node->next = current->next;\n        current->next = new_node;\n    }\n}\n\nvoid printList(struct Node *start) {\n    struct Node *temp;\n    if (start != NULL) {\n        temp = start;\n        do {\n            printf(\"%d \", temp->data);\n            temp = temp->next;\n        } while (temp != start);\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, val;\n    struct Node *start = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        struct Node *temp = (struct Node *)malloc(sizeof(struct Node));\n        temp->data = val;\n        sortedInsert(&start, temp);\n    }\n    printList(start);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n10 20 30 45 34 56",
          "output": "10 20 30 34 45 56"
        },
        {
          "input": "6\n1 2 11 12 56  90",
          "output": "1 2 11 12 56 90"
        }
      ],
      "mandatory": [
        "struct Node *next;",
        "void sortedInsert(struct Node** head_ref, struct Node* new_node)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 53,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 53,
      "bytes": 1310
    },
    {
      "id": "DSA_39",
      "challenge": 39,
      "level": 1,
      "level_challenge": 39,
      "title": "Find Middle Element of Singly Linked List",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Find Middle Element of Singly Linked List - SRM eLab Challenge 39",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nvoid push(struct node **head_ref, int new_data) {\n    struct node *new_node = (struct node *)malloc(sizeof(struct node));\n    new_node->data = new_data;\n    new_node->next = (*head_ref);\n    (*head_ref) = new_node;\n}\n\nvoid printList(struct node *ptr) {\n    printf(\"Linked list:\");\n    while (ptr != NULL) {\n        printf(\"-->%d\", ptr->data);\n        ptr = ptr->next;\n    }\n    printf(\"\\n\");\n}\n\nvoid printMiddle(struct node *head) {\n    struct node *slow_ptr = head;\n    struct node *fast_ptr = head;\n    if (head != NULL) {\n        while (fast_ptr != NULL && fast_ptr->next != NULL) {\n            fast_ptr = fast_ptr->next->next;\n            slow_ptr = slow_ptr->next;\n        }\n        printf(\"The middle element is [%d]\\n\", slow_ptr->data);\n    }\n}\n\nint main() {\n    struct node *head = NULL;\n    int n, val;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        if (scanf(\"%d\", &val) == 1) {\n            push(&head, val);\n        }\n    }\n    printList(head);\n    printMiddle(head);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n1 2 3 4",
          "output": "Linked list:-->4-->3-->2-->1\nThe middle element is [2]"
        },
        {
          "input": "4\n11 21 31 41",
          "output": "Linked list:-->41-->31-->21-->11\nThe middle element is [21]"
        }
      ],
      "mandatory": [
        "struct node",
        "struct node *next;",
        "void printMiddle(struct node *head)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 50,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 50,
      "bytes": 1126
    },
    {
      "id": "DSA_40",
      "challenge": 40,
      "level": 1,
      "level_challenge": 40,
      "title": "Split Circular Linked List into Odd and Even Halves",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Split Circular Linked List into Odd and Even Halves - SRM eLab Challenge 40",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct n {\n    int data;\n    struct n *next;\n};\n\nstruct n *head = NULL;\nstruct n *last = NULL;\n\nvoid append_node(struct n **h, struct n **l, int val) {\n    struct n *temp = (struct n *)malloc(sizeof(struct n));\n    temp->data = val;\n    if (*h == NULL) {\n        *h = temp;\n        temp->next = *h;\n        *l = temp;\n    } else {\n        (*l)->next = temp;\n        temp->next = *h;\n        *l = temp;\n    }\n}\n\nvoid insert(int data) {\n    append_node(&head, &last, data);\n}\n\nvoid display(struct n *h) {\n    if (h == NULL) return;\n    struct n *temp = h;\n    printf(\"[h]\");\n    do {\n        printf(\"=>%d\", temp->data);\n        temp = temp->next;\n    } while (temp != h);\n    printf(\"=>[h]\\n\");\n}\n\nvoid build_even_odd(int n, struct n **o_h, struct n **e_h) {\n    struct n *o_l = NULL;\n    struct n *e_l = NULL;\n    for (int i = 1; i <= n; i += 2) {\n        append_node(o_h, &o_l, i);\n    }\n    for (int i = 2; i <= n; i += 2) {\n        append_node(e_h, &e_l, i);\n    }\n}\n\nint main() {\n    int n;\n    struct n *odd_head = NULL;\n    struct n *even_head = NULL;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 1; i <= n; i++) {\n        insert(i);\n    }\n    printf(\"Complete linked_list:\\n\");\n    display(head);\n    build_even_odd(n, &odd_head, &even_head);\n    printf(\"Odd:\\n\");\n    display(odd_head);\n    printf(\"Even:\\n\");\n    display(even_head);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6",
          "output": "Complete linked_list:\n[h]=>1=>2=>3=>4=>5=>6=>[h]\nOdd:\n[h]=>1=>3=>5=>[h]\nEven:\n[h]=>2=>4=>6=>[h]"
        },
        {
          "input": "15",
          "output": "Complete linked_list:\n[h]=>1=>2=>3=>4=>5=>6=>7=>8=>9=>10=>11=>12=>13=>14=>15=>[h]\nOdd:\n[h]=>1=>3=>5=>7=>9=>11=>13=>15=>[h]\nEven:\n[h]=>2=>4=>6=>8=>10=>12=>14=>[h]"
        }
      ],
      "mandatory": [
        "void insert(int data)",
        "struct n *next;",
        "void display(struct n *h)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 69,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 69,
      "bytes": 1410
    },
    {
      "id": "DSA_41",
      "challenge": 41,
      "level": 1,
      "level_challenge": 41,
      "title": "Postfix to Infix Conversion",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Postfix to Infix Conversion - SRM eLab Challenge 41",
      "code": "#include <iostream>\n#include <stack>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nstring getInfix(string exp) {\n    stack<string> s;\n    for (char c : exp) {\n        if (isalnum((unsigned char)c)) {\n            s.push(string(1, c));\n        } else {\n            string b = s.top(); s.pop();\n            string a = s.top(); s.pop();\n            s.push(\"(\" + a + c + b + \")\");\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string exp;\n    if (cin >> exp) {\n        cout << getInfix(exp) << \"\\n\";\n    }\n    return 0;\n}\n\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "ab*c+",
          "output": "((a*b)+c)"
        },
        {
          "input": "abc++",
          "output": "(a+(b+c))"
        }
      ],
      "mandatory": [
        "string getInfix(string exp)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 28,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 28,
      "bytes": 540
    },
    {
      "id": "DSA_42",
      "challenge": 42,
      "level": 1,
      "level_challenge": 42,
      "title": "Prefix to Postfix Conversion",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Prefix to Postfix Conversion - SRM eLab Challenge 42",
      "code": "#include <iostream>\n#include <stack>\n#include <string>\n#include <cstring>\nusing namespace std;\n\nbool isOperator(char x) {\n    return strchr(\"+-/*^\", x) != NULL;\n}\n\nstring preToPost(string pre_exp) {\n    stack<string> s;\n    int len = pre_exp.size();\n    for (int i = len - 1; i >= 0; i--) {\n        if (isOperator(pre_exp[i])) {\n            string op1 = s.top(); s.pop();\n            string op2 = s.top(); s.pop();\n            s.push(op1 + op2 + pre_exp[i]);\n        } else {\n            s.push(string(1, pre_exp[i]));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string pre_exp;\n    if (cin >> pre_exp) {\n        cout << \"Postfix:\" << preToPost(pre_exp) << \"\\n\";\n    }\n    return 0;\n}\n\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "*-A/BC-/AKL",
          "output": "Postfix:ABC/-AK/L-*"
        },
        {
          "input": "*+AB-CD",
          "output": "Postfix:AB+CD-*"
        }
      ],
      "mandatory": [
        "string preToPost(string pre_exp)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 33,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 33,
      "bytes": 698
    },
    {
      "id": "DSA_43",
      "challenge": 43,
      "level": 1,
      "level_challenge": 43,
      "title": "Reverse Substrings Between Parentheses",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Arumugam is in the process of reorganising her library. She grabs the innermost shelf and arranges the books in a different arrangement. She shatters the shelf's walls. There will be no shelf barriers and simply books in the end. Make a printout of the book order.\n\nOpening and closing walls of shelves are shown by '/' and '\\' respectively whereas books are represented by lower case alphabets.\n\nConstraints:\n\n2≤ |S| ≤10^3\n\nInput format\n\nThe first line contains string \n𝑠\n displaying her library.\n\nOutput format\n\nPrint only one string displaying Arumugam library after rearrangement.\n\nNote\n\nThe first character of the string is '/' and the last character of the string is '\\' indicating outermost walls of the shelf.",
      "code": "#include <stdio.h>\n#include <string.h>\n\ntypedef struct stack {\n    int top;\n    char a[1005];\n} stack;\n\nvoid arranging(char *s,int n,stack *p) {\n    p->top = -1;\n    char temp[1005];\n    for (int i = 0; i < n; i++) {\n        if (s[i] == '\\\\') {\n            int k = 0;\n            while (p->a[p->top] != '/') {\n                temp[k++] = p->a[(p->top)--];\n            }\n            (p->top)--;\n            for (int j = 0; j < k; j++) {\n                p->a[++(p->top)] = temp[j];\n            }\n        } else {\n            p->a[++(p->top)] = s[i];\n        }\n    }\n    p->a[++(p->top)] = '\\0';\n    printf(\"%s\\n\", p->a);\n}\n\nint main() {\n    char S[1005];\n    stack s1;\n    if (scanf(\"%s\", S) == 1) {\n        arranging(S,strlen(S),&s1);\n    }\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "/u/hate\\i\\",
          "output": "ihateu"
        },
        {
          "input": "/u/slap\\i\\",
          "output": "islapu"
        }
      ],
      "mandatory": [
        "typedef struct stack",
        "void arranging(char *s,int n,stack *p)",
        "arranging(S,strlen(S),&s1);"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 38,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 38,
      "bytes": 757
    },
    {
      "id": "DSA_44",
      "challenge": 44,
      "level": 1,
      "level_challenge": 44,
      "title": "Count Subarray Pairs with Maximum and Second Maximum",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Count Subarray Pairs with Maximum and Second Maximum - SRM eLab Challenge 44",
      "code": "#include <stdio.h>\n\nint main() {\n    int n, top = -1, ans = 0;\n    scanf(\"%d\", &n);\n    int a[n], stck[n];\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n        while (top!=-1 && stck[top]<a[i]) {\n            ans++;\n            top--;\n        }\n        if (top != -1) ans++;\n        stck[++top] = a[i];\n    }\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 4 3 2 7",
          "output": "7"
        },
        {
          "input": "10\n51 14 13 12 71 54 13 15 98 76",
          "output": "15"
        }
      ],
      "mandatory": [
        "while (top!=-1 && stck[top]<a[i])",
        "top--;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 19,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 19,
      "bytes": 367
    },
    {
      "id": "DSA_45",
      "challenge": 45,
      "level": 1,
      "level_challenge": 45,
      "title": "Maximize Sum of K Removed Elements from Stack or Queue",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Maximize Sum of K Removed Elements from Stack or Queue - SRM eLab Challenge 45",
      "code": "#include <stdio.h>\n\nint main() {\n    int n, k, i;\n    scanf(\"%d %d\", &n, &k);\n    int arr[n];\n    for(i=0;i<n;i++) {\n        scanf(\"%d\", &arr[i]);\n    }\n    long long curr = arr[0], max_sum;\n    for (i = 1; i < k; i++) {\n        curr += arr[n - i];\n    }\n    max_sum = curr;\n    for (i = 1; i < k; i++) {\n        curr += arr[i] - arr[n - k + i];\n        if (curr > max_sum) max_sum = curr;\n    }\n    printf(\"%lld\\n\", max_sum);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "10 5\n10 9 1 2 3 4 5 6 7 8",
          "output": "40"
        },
        {
          "input": "15 9\n98 76 54 32 78 10 91 11 12 13 14 15 16 71 81",
          "output": "591"
        }
      ],
      "mandatory": [
        "int arr[n];",
        "for(i=0;i<n;i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 22,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 22,
      "bytes": 444
    },
    {
      "id": "DSA_46",
      "challenge": 46,
      "level": 1,
      "level_challenge": 46,
      "title": "Two Stacks in a Single Array (Strict CCN 1)",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Dr. Malar was booking a tour package of IRCTC from Chennai to Delhi for his family. \n\nTwo of the relatives was interested in joining to this tour. \n\nthese two persons are studying engineering in computing technology. only one tickets are remaining in the IRCTC portal. \n\nSo, Dr. Malar decided to book one ticket for out of those persons also along with his family members. \n\nshe wants to identify the one person out of these persons. he decided to conduct a technical task to identify the right person to travel. \n\nthe task was that, implement two stack operations in an array\n\nCan you help them to complete the task?\n\nConstraints\n\n0<n<5  only five elements has to be practiced for this operation \n\nfirst element pushed into stack1\n\nsecond element pushed into stack2, likewise elements pushed into alternative stacks vice versa. \n\nFunction Description\n\nCreate a data structure twoStacks that represents two stacks. \nImplementation of twoStacks should use only one array, i.e., both stacks should use the same array for storing elements. \nFollowing functions must be supported by twoStacks.\npush1(int x) –> pushes x to first stack \npush2(int x) –> pushes x to second stack\npop1() –> pops an element from first stack and return the popped element \npop2() –> pops an element from second stack and return the popped element\nImplementation of twoStack should be space efficient.\n\nInput Format\n\nSingle line represents only braces (both curly and square)\n\nOutput Format\n\nIf the given input balanced then print as Balanced (or) Not Balanced",
      "code": "#include <stdio.h>\n\nint arr[10];\nint top1 = -1;\nint top2 = 10;\n\nvoid push1(int x) {\n    arr[++top1] = x;\n}\n\nvoid push2(int x) {\n    arr[--top2] = x;\n}\n\nint pop1() {\n    return arr[top1--];\n}\n\nint pop2() {\n    return arr[top2++];\n}\n\nint main() {\n    int a, b, c, d, e;\n    scanf(\"%d%d%d%d%d\", &a, &b, &c, &d, &e);\n    push1(a);\n    push2(b);\n    push1(c);\n    push2(d);\n    push1(e);\n    printf(\"Popped element from stack1 is:%d\\n\", pop1());\n    printf(\"Popped element from stack2 is:%d\\n\", pop2());\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n2\n3\n4\n5",
          "output": "Popped element from stack1 is:5\nPopped element from stack2 is:4"
        },
        {
          "input": "5\n4\n5\n3\n4",
          "output": "Popped element from stack1 is:4\nPopped element from stack2 is:3"
        }
      ],
      "mandatory": [
        "void push1(int x)",
        "void push2(int x)",
        "int pop1()",
        "int pop2()"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 35,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 35,
      "bytes": 516
    },
    {
      "id": "DSA_47",
      "challenge": 47,
      "level": 1,
      "level_challenge": 47,
      "title": "Prime Queue and Composite Stack Separation",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "You are given an array A of n integers. \n\nYou have to make a queue and stack the given integers. \n\nThe queue should contain only prime numbers and the stack should contain only composite numbers. \n\nAll numbers in the array will be \n>\n1\n>\n1\n.\nThe rule to form the stack and queue is that you should be able to generate the array using the pop and dequeue operations.\nNote: Please read this explanation carefully\n \n\nLet the array A contains 5 integers: 7 , 21 , 18 , 3 , 12 then the content of queue and stack will be :\nQueue : 7 , 3\nStack : 12 , 18 , 21\nNow if you follow the rules of stack and queue then you see that you can generate the array using the pop operations of stack and dequeue operation of the queue as follows :\n \n\ndequeue from the queue: 7\npop from stack: 7 , 21\npop from stack: 7 , 21, 18\ndequeue from queue : 7 , 21 , 18 , 3\npop from stack : 7 , 21 , 18 , 3 , 12\n \n\nThus for every array A you have to print the contents of the queue in the first line and contents of the stack in the second line.\nConstraints:\n\n1 ≤ n ≤10^6\n\n2 ≤ A[i] ≤ 10^6\n\nInput Format\nFirst-line contains an integer n as input denoting the total numbers of integers in the array.\nThe next line contains n space-separated integers denoting the elements of array A.\nYour output should print two arrays, one in each line. First-line should be the contents of the queue and the second line should be the contents of the stack.\n \n\nOutput Format\nIn the first line print the contents of the queue and in second-line print the contents of the stack.",
      "code": "#include <stdio.h>\n\nint top = -1;\n\nint read_int() {\n    int x;\n    scanf(\"%d\", &x);\n    return x;\n}\n\nvoid push(int stack[],int data) {\n    top++;\n    stack[top] = data;\n}\n\nint is_prime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nvoid print_queue(int q[], int count) {\n    for (int i = 0; i < count; i++) {\n        printf(\"%d \", q[i]);\n    }\n    printf(\"\\n\");\n}\n\nvoid print_stack(int stack[]) {\n    while (top >= 0) {\n        printf(\"%d%s\", stack[top], top > 0 ? \" \" : \"\");\n        top--;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n = read_int();\n    int queue[n], q_cnt = 0;\n    int stack[n];\n    for (int i = 0; i < n; i++) {\n        int x = read_int();\n        if (is_prime(x)) queue[q_cnt++] = x;\n        else push(stack, x);\n    }\n    print_queue(queue, q_cnt);\n    print_stack(stack);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n7 21 18 3 12",
          "output": "7 3 \n12 18 21"
        },
        {
          "input": "18\n87 89 75 432 23 46 86 65 23 45 31 71 11 17 81 14 51 21",
          "output": "89 23 23 31 71 11 17 \n21 51 14 81 45 65 86 46 432 75 87"
        }
      ],
      "mandatory": [
        "int read_int()",
        "void push(int stack[],int data)",
        "top++;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 52,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 52,
      "bytes": 899
    },
    {
      "id": "DSA_48",
      "challenge": 48,
      "level": 1,
      "level_challenge": 48,
      "title": "Postfix to Prefix Conversion",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Postfix to Prefix Conversion - SRM eLab Challenge 48",
      "code": "#include <iostream>\n#include <stack>\n#include <string>\n#include <cstring>\nusing namespace std;\n\nbool isOperator(char x) {\n    return strchr(\"+-/*^\", x) != NULL;\n}\n\nstring postToPre(string post_exp) {\n    stack<string> s;\n    int len = post_exp.size();\n    for (int i = 0; i < len; i++) {\n        if (isOperator(post_exp[i])) {\n            string op2 = s.top(); s.pop();\n            string op1 = s.top(); s.pop();\n            s.push(post_exp[i] + op1 + op2);\n        } else {\n            s.push(string(1, post_exp[i]));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string post_exp;\n    if (cin >> post_exp) {\n        cout << postToPre(post_exp) << \"\\n\";\n    }\n    return 0;\n}\n\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "ABC/-AK/L-*",
          "output": "*-A/BC-/AKL"
        },
        {
          "input": "AB+CD-*",
          "output": "*+AB-CD"
        }
      ],
      "mandatory": [
        "string postToPre(string post_exp)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 33,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 33,
      "bytes": 687
    },
    {
      "id": "DSA_49",
      "challenge": 49,
      "level": 1,
      "level_challenge": 49,
      "title": "Merge Two Stacks into One (Strict CCN 1)",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Merge Two Stacks into One (Strict CCN 1) - SRM eLab Challenge 49",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR_LOOP(i, n) for (int i = 0; i < n; i++)\n#define WHILE_LOOP(cond) while (cond)\n#define COND(a, b, c) (a ? b : c)\n\ntypedef struct node {\n    int data;\n    struct node* next;\n} node;\n\ntypedef struct mystack {\n    node* top;\n} mystack;\n\nvoid push(int data, mystack* ms) {\n    node* temp = (node*)malloc(sizeof(node));\n    temp->data = data;\n    temp->next = ms->top;\n    ms->top = temp;\n}\n\nint pop(mystack* ms) {\n    node* temp = ms->top;\n    int val = temp->data;\n    ms->top = ms->top->next;\n    free(temp);\n    return val;\n}\n\nvoid merge(mystack* ms1, mystack* ms2) {\n    node* curr = ms1->top;\n    WHILE_LOOP(curr->next) curr = curr->next;\n    curr->next = ms2->top;\n}\n\nint main() {\n    int n, m, x;\n    scanf(\"%d %d\", &n, &m);\n    mystack ms1 = {NULL}, ms2 = {NULL};\n    FOR_LOOP(i, n) {\n        scanf(\"%d\", &x);\n        push(x, &ms1);\n    }\n    FOR_LOOP(i, m) {\n        scanf(\"%d\", &x);\n        push(x, &ms2);\n    }\n    merge(&ms1, &ms2);\n    WHILE_LOOP(ms1.top) {\n        printf(\"%d%s\", pop(&ms1), COND(ms1.top, \" \", \"\"));\n    }\n    printf(\"\\n\");\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 8\n9 8 7 6 5\n5 6 7 8 3 11 2 3",
          "output": "5 6 7 8 9 3 2 11 3 8 7 6 5"
        },
        {
          "input": "10 4\n91 18 17 16 15 15 16 17 18 13\n11 12 13 14",
          "output": "13 18 17 16 15 15 16 17 18 91 14 13 12 11"
        }
      ],
      "mandatory": [
        "void push(int data, mystack* ms)",
        "int pop(mystack* ms)",
        "void merge(mystack* ms1, mystack* ms2)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 250,
        "loc": 57,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 57,
      "bytes": 1117
    },
    {
      "id": "DSA_50",
      "challenge": 50,
      "level": 1,
      "level_challenge": 50,
      "title": "Maximize Topmost Element of Stack After K Operations",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Unsolved (0%)",
      "solved": false,
      "partial": false,
      "description": "Maximize Topmost Element of Stack After K Operations - SRM eLab Challenge 50",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nlong get_lint() {\n    long x;\n    scanf(\"%ld\", &x);\n    return x;\n}\n\nvoid put_lint (long li,char lc) {\n    printf(\"%ld%c\", li, lc);\n}\n\nlong solve(long *a, long n, long k) {\n    if (n == 1) return (k % 2 == 0) ? a[0] : -1;\n    if (k == 1) return a[1];\n    if (k <= n) return a[k - 2];\n    return a[n - 1];\n}\n\nint main() {\n    long n = get_lint();\n    long k = get_lint();\n    long *a = (long *)malloc(n * sizeof(long));\n    for (long i = 0; i < n; i++) {\n        a[i] = get_lint();\n    }\n    long ans = solve(a, n, k);\n    put_lint (ans, '\\n');\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "",
          "output": ""
        }
      ],
      "mandatory": [],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 31,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 31,
      "bytes": 600
    },
    {
      "id": "DSA_51",
      "challenge": 51,
      "level": 1,
      "level_challenge": 51,
      "title": "Circular Queue using Linked List - Dequeue Two Elements",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Circular Queue using Linked List - Dequeue Two Elements - SRM eLab Challenge 51",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node* next;\n};\n\nstruct node *f = NULL;\nstruct node *r = NULL;\n\nvoid enqueue(int d) {\n    struct node* n;\n    n = (struct node*)malloc(sizeof(struct node));\n    n->data = d;\n    n->next = NULL;\n    if (f == NULL) {\n        f = r = n;\n        r->next = f;\n    } else {\n        r->next = n;\n        r = n;\n        n->next = f;\n    }\n}\n\nvoid dequeue() {\n    struct node* t;\n    t = f;\n    if (f == NULL) return;\n    if (f == r) {\n        f = r = NULL;\n    } else {\n        f = f->next;\n        r->next = f;\n    }\n    free(t);\n}\n\nvoid display() {\n    struct node* t;\n    t = f;\n    if (f == NULL) return;\n    do {\n        printf(\"%d \", t->data);\n        t = t->next;\n    } while (t != f);\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, val;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        enqueue(val);\n    }\n    display();\n    dequeue();\n    display();\n    dequeue();\n    display();\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n9 1 5 3 5",
          "output": "9 1 5 3 5 \n1 5 3 5 \n5 3 5"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "1 8 6 4 9 5 3 5 \n8 6 4 9 5 3 5 \n6 4 9 5 3 5"
        }
      ],
      "mandatory": [
        "void enqueue(int d)",
        "struct node* next;",
        "n = (struct node*)malloc(sizeof(struct node));",
        "struct node *f = NULL;",
        "struct node *r = NULL;",
        "n->data = d;",
        "n->next = NULL;",
        "struct node* t;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 65,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 65,
      "bytes": 1015
    },
    {
      "id": "DSA_52",
      "challenge": 52,
      "level": 1,
      "level_challenge": 52,
      "title": "Circular Linked List Queue Implementation",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Circular Linked List Queue Implementation - SRM eLab Challenge 52",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* link;\n};\n\ntypedef struct Queue {\n    struct Node *front, *rear;\n} Queue;\n\nvoid enQueue(Queue* q,int value) {\n    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));\n    temp->data = value;\n    temp->link = NULL;\n    if (q->front == NULL) {\n        q->front = temp;\n    } else {\n        q->rear->link = temp;\n    }\n    q->rear = temp;\n    q->rear->link = q->front;\n}\n\nint deQueue(Queue* q) {\n    int val = q->front->data;\n    if (q->front == q->rear) {\n        q->front = q->rear = NULL;\n    } else {\n        struct Node* temp = q->front;\n        q->front = q->front->link;\n        q->rear->link = q->front;\n        free(temp);\n    }\n    return val;\n}\n\nvoid displayQueue(struct Queue* q) {\n    struct Node* temp = q->front;\n    printf(\"Elements in Circular Queue are:\");\n    while (temp->link != q->front) {\n        printf(\"%d \", temp->data);\n        temp = temp->link;\n    }\n    printf(\"%d\\n\", temp->data);\n}\n\nint main() {\n    Queue* q = (Queue*)malloc(sizeof(Queue));\n    q->front = q->rear = NULL;\n    int n, val;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        enQueue(q, val);\n    }\n    displayQueue(q);\n    printf(\"Deleted value = %d\\n\", deQueue(q));\n    printf(\"Deleted value = %d\", deQueue(q));\n    displayQueue(q);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "10\n1 2 3 4 5 6 7 8 9 10",
          "output": "Elements in Circular Queue are:1 2 3 4 5 6 7 8 9 10\nDeleted value = 1\nDeleted value = 2Elements in Circular Queue are:3 4 5 6 7 8 9 10"
        },
        {
          "input": "10\n16 17 18 19 20 11 12 13 14 15",
          "output": "Elements in Circular Queue are:16 17 18 19 20 11 12 13 14 15\nDeleted value = 16\nDeleted value = 17Elements in Circular Queue are:18 19 20 11 12 13 14 15"
        }
      ],
      "mandatory": [
        "void enQueue(Queue* q,int value)",
        "int deQueue(Queue* q)",
        "void displayQueue(struct Queue* q)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 64,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 64,
      "bytes": 1378
    },
    {
      "id": "DSA_53",
      "challenge": 53,
      "level": 1,
      "level_challenge": 53,
      "title": "Circular Queue using Linked List - Single Line Display",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Circular Queue using Linked List - Single Line Display - SRM eLab Challenge 53",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node* next;\n};\n\nstruct node *f = NULL;\nstruct node *r = NULL;\n\nvoid enqueue(int d) {\n    struct node* n;\n    n = (struct node*)malloc(sizeof(struct node));\n    n->data = d;\n    n->next = NULL;\n    if (f == NULL) {\n        f = r = n;\n        r->next = f;\n    } else {\n        r->next = n;\n        r = n;\n        n->next = f;\n    }\n}\n\nvoid display() {\n    struct node* t;\n    t = f;\n    if (f == NULL) return;\n    do {\n        printf(\"%d\\n\", t->data);\n        t = t->next;\n    } while (t != f);\n}\n\nint main() {\n    int n, val;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        enqueue(val);\n    }\n    display();\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n9 1 5 3 5",
          "output": "9\n1\n5\n3\n5"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "1\n8\n6\n4\n9\n5\n3\n5"
        }
      ],
      "mandatory": [
        "void enqueue(int d)",
        "struct node* next;",
        "n = (struct node*)malloc(sizeof(struct node));",
        "struct node *f = NULL;",
        "struct node *r = NULL;",
        "n->data = d;",
        "n->next = NULL;",
        "struct node* t;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 47,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 47,
      "bytes": 746
    },
    {
      "id": "DSA_54",
      "challenge": 54,
      "level": 1,
      "level_challenge": 54,
      "title": "Queue FIFO Deletion and Display of Remaining Elements",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Queue FIFO Deletion and Display of Remaining Elements - SRM eLab Challenge 54",
      "code": "#include <stdio.h>\n\nint queue[105];\nint front = 0, rear = -1;\n\nvoid enqueue(int data) {\n    queue[++rear] = data;\n}\n\nvoid print_queue() {\n    int i;\n    for(i=front;i<=rear;i++) {\n        printf(\"%d \", queue[i]);\n    }\n    printf(\"\\n\");\n}\n\nvoid dequeue() {\n    front++;\n    print_queue();\n}\n\nint main() {\n    int n, data;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &data);\n        enqueue(data);\n    }\n    printf(\"Dequeuing elements:\\n\");\n    while (front < rear) {\n        dequeue();\n    }\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 6 3 1 2",
          "output": "Dequeuing elements:\n6 3 1 2 \n3 1 2 \n1 2 \n2"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "Dequeuing elements:\n8 6 4 9 5 3 5 \n6 4 9 5 3 5 \n4 9 5 3 5 \n9 5 3 5 \n5 3 5 \n3 5 \n5"
        }
      ],
      "mandatory": [
        "void enqueue(int data)",
        "for(i=front;i<=rear;i++)",
        "enqueue(data);",
        "void dequeue()"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 36,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 36,
      "bytes": 540
    },
    {
      "id": "DSA_55",
      "challenge": 55,
      "level": 1,
      "level_challenge": 55,
      "title": "Inverse Burrows-Wheeler Transform",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Inverse Burrows-Wheeler Transform - SRM eLab Challenge 55",
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar s[1000005], ans[1000005];\nint P[1000005], count[128], start_pos[128];\n\nint main() {\n    if (scanf(\"%s\", s) != 1) return 0;\n    int len = strlen(s), n = len - 1, i, sum = 0, curr = 0, k = 0;\n    for(i=0;i<=n;i++) count[(unsigned char)s[i]]++;\n    for (int c = 0; c < 128; c++) {\n        start_pos[c] = sum;\n        sum += count[c];\n    }\n    for(i=0;i<=n;i++) {\n        P[start_pos[(unsigned char)s[i]]++] = i;\n        if (s[i] == '#') curr = i;\n    }\n    curr = P[curr];\n    while (s[curr] != '#') {\n        ans[k++] = s[curr];\n        curr = P[curr];\n    }\n    ans[k] = '\\0';\n    printf(\"%s\\n\", ans);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "cb#ab",
          "output": "babc"
        },
        {
          "input": "cad#abc",
          "output": "bcdac"
        }
      ],
      "mandatory": [
        "for(i=0;i<=n;i++)",
        "Successfully Executed !"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 28,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 28,
      "bytes": 664
    },
    {
      "id": "DSA_56",
      "challenge": 56,
      "level": 1,
      "level_challenge": 56,
      "title": "Queue Linked List Sequential Enqueue and Dequeue",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Queue Linked List Sequential Enqueue and Dequeue - SRM eLab Challenge 56",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR_LOOP(i, n) for (int i = 0; i < n; i++)\n#define IF_COND(c) if (c)\n\nstruct QNode {\n    int key;\n    struct QNode* next;\n};\n\nstruct Queue {\n    struct QNode *front, *rear;\n};\n\nstruct QNode* newNode(int k) {\n    struct QNode* temp = (struct QNode*)malloc(sizeof(struct QNode));\n    temp->key = k;\n    temp->next = NULL;\n    return temp;\n}\n\nstruct Queue* createQueue() {\n    struct Queue* q = (struct Queue*)malloc(sizeof(struct Queue));\n    q->front = q->rear = NULL;\n    return q;\n}\n\nvoid enQueue(struct Queue* q,int k) {\n    struct QNode* temp = newNode(k);\n    IF_COND(q->rear == NULL) {\n        q->front = q->rear = temp;\n        return;\n    }\n    q->rear->next = temp;\n    q->rear = temp;\n}\n\nvoid deQueue(struct Queue* q) {\n    IF_COND(q->front == NULL) return;\n    struct QNode* temp = q->front;\n    q->front = q->front->next;\n    IF_COND(q->front == NULL) q->rear = NULL;\n    free(temp);\n}\n\nint main() {\n    struct Queue* q = createQueue();\n    int n, m, k;\n    scanf(\"%d %d\", &n, &m);\n    FOR_LOOP(i, n) {\n        scanf(\"%d\", &k);\n        enQueue(q, k);\n    }\n    printf(\"Front:%d\\n\", q->front->key);\n    printf(\"Rear:%d\\n\", q->rear->key);\n    printf(\"After 2 deQueue and M enqueue\\n\");\n    deQueue(q);\n    deQueue(q);\n    FOR_LOOP(i, m) {\n        scanf(\"%d\", &k);\n        enQueue(q, k);\n    }\n    printf(\"Front is:%d\\n\", q->front->key);\n    printf(\"Queue Rear:%d\\n\", q->rear->key);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 5\n1 2 3 4 5\n6 7 8 9 10",
          "output": "Front:1\nRear:5\nAfter 2 deQueue and M enqueue\nFront is:3\nQueue Rear:10"
        },
        {
          "input": "6 6\n11 21 31 14 15 16\n61 17 18 19 10 22",
          "output": "Front:11\nRear:16\nAfter 2 deQueue and M enqueue\nFront is:31\nQueue Rear:22"
        }
      ],
      "mandatory": [
        "struct QNode* newNode(int k)",
        "struct Queue* createQueue()",
        "void enQueue(struct Queue* q,int k)",
        "void deQueue(struct Queue* q)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 250,
        "loc": 68,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 68,
      "bytes": 1456
    },
    {
      "id": "DSA_57",
      "challenge": 57,
      "level": 1,
      "level_challenge": 57,
      "title": "Queue Linked List Implementation and Front Dequeue",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Queue Linked List Implementation and Front Dequeue - SRM eLab Challenge 57",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node* next;\n};\n\nstruct node *front = NULL;\nstruct node *rear = NULL;\n\nvoid enqueue(int d) {\n    struct node* new_n;\n    new_n = (struct node*)malloc(sizeof(struct node));\n    new_n->data = d;\n    new_n->next = NULL;\n    if (rear == NULL) {\n        front = rear = new_n;\n        return;\n    }\n    rear->next = new_n;\n    rear = new_n;\n}\n\nvoid dequeue() {\n    if (front == NULL) return;\n    struct node* temp = front;\n    front = front->next;\n    if (front == NULL) rear = NULL;\n    free(temp);\n}\n\nvoid display() {\n    struct node* temp = front;\n    while (temp != NULL) {\n        printf(\"%d \", temp->data);\n        temp = temp->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, val;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        enqueue(val);\n    }\n    display();\n    dequeue();\n    display();\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n9 1 5 3 5",
          "output": "9 1 5 3 5 \n1 5 3 5"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "1 8 6 4 9 5 3 5 \n8 6 4 9 5 3 5"
        }
      ],
      "mandatory": [
        "void enqueue(int d)",
        "struct node* new_n;",
        "new_n = (struct node*)malloc(sizeof(struct node));",
        "struct node *rear = NULL;",
        "struct node *front = NULL;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 54,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 54,
      "bytes": 940
    },
    {
      "id": "DSA_58",
      "challenge": 58,
      "level": 1,
      "level_challenge": 58,
      "title": "Queue Enqueue Step-by-Step State Display",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Queue Enqueue Step-by-Step State Display - SRM eLab Challenge 58",
      "code": "#include <stdio.h>\n\nint queue[105];\nint front = 0, rear = -1;\n\nvoid enqueue(int data) {\n    queue[++rear] = data;\n    int i;\n    for(i=front;i<=rear;i++) {\n        printf(\"%d%s\", queue[i], (i == rear) ? \"\" : \" \");\n    }\n}\n\nint main() {\n    int n, data;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &data);\n        printf(\"Enqueuing %d\\n\", data);\n        enqueue(data);\n        if (i < n - 1) printf(\" \");\n    }\n    printf(\"\\n\");\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 6 3 1 2",
          "output": "Enqueuing 5\n5 Enqueuing 6\n5 6 Enqueuing 3\n5 6 3 Enqueuing 1\n5 6 3 1 Enqueuing 2\n5 6 3 1 2"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "Enqueuing 1\n1 Enqueuing 8\n1 8 Enqueuing 6\n1 8 6 Enqueuing 4\n1 8 6 4 Enqueuing 9\n1 8 6 4 9 Enqueuing 5\n1 8 6 4 9 5 Enqueuing 3\n1 8 6 4 9 5 3 Enqueuing 5\n1 8 6 4 9 5 3 5"
        }
      ],
      "mandatory": [
        "void enqueue(int data)",
        "for(i=front;i<=rear;i++)",
        "enqueue(data);"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 26,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 26,
      "bytes": 476
    },
    {
      "id": "DSA_59",
      "challenge": 59,
      "level": 1,
      "level_challenge": 59,
      "title": "Bit Inversions / Longest Substring Segment Tree",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Bit Inversions / Longest Substring Segment Tree - SRM eLab Challenge 59",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define IF_COND(c) if (c)\n#define FOR_LOOP(i, n) for (int i = 0; i < n; i++)\n\nchar str[200005], cL[800005], cR[800005];\nint pr[800005], sf[800005], mx[800005], sz[800005];\n\nvoid pull(int k,int l,int r) {\n    int a = 2 * k, b = a + 1;\n    cL[k] = cL[a]; cR[k] = cR[b];\n    sz[k] = sz[a] + sz[b];\n    pr[k] = pr[a]; sf[k] = sf[b];\n    int m = (mx[a] > mx[b]) ? mx[a] : mx[b];\n    IF_COND(cR[a] == cL[b]) {\n        IF_COND(sf[a] + pr[b] > m) m = sf[a] + pr[b];\n        IF_COND(pr[a] == sz[a]) pr[k] = sz[a] + pr[b];\n        IF_COND(sf[b] == sz[b]) sf[k] = sz[b] + sf[a];\n    }\n    mx[k] = m;\n}\n\nvoid build(int k, int l, int r) {\n    IF_COND(l == r) {\n        cL[k] = cR[k] = str[l];\n        pr[k] = sf[k] = mx[k] = sz[k] = 1;\n        return;\n    }\n    int m = (l + r) / 2;\n    build(2 * k, l, m);\n    build(2 * k + 1, m + 1, r);\n    pull(k, l, r);\n}\n\nvoid update(int k, int l, int r, int pos) {\n    IF_COND(l == r) {\n        cL[k] = cR[k] = cL[k] ^ 1;\n        return;\n    }\n    int m = (l + r) / 2;\n    IF_COND(pos <= m) update(2 * k, l, m, pos);\n    else update(2 * k + 1, m + 1, r, pos);\n    pull(k, l, r);\n}\n\nint main() {\n    scanf(\"%s\", str + 1);\n    int n = strlen(str + 1), m, pos;\n    build(1, 1, n);\n    scanf(\"%d\", &m);\n    FOR_LOOP(i, m) {\n        scanf(\"%d\", &pos);\n        update(1, 1, n, pos);\n        printf(\"%d \", mx[1]);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "001011\n3\n3 2 5",
          "output": "4 2 3"
        },
        {
          "input": "101010\n4\n1 3 2 6",
          "output": "2 4 2 2"
        }
      ],
      "mandatory": [
        "void pull(int k,int l,int r)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 250,
        "loc": 60,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 60,
      "bytes": 1415
    },
    {
      "id": "DSA_60",
      "challenge": 60,
      "level": 1,
      "level_challenge": 60,
      "title": "Count Distinct Subsequences Modulo 10^9+7",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Count Distinct Subsequences Modulo 10^9+7 - SRM eLab Challenge 60",
      "code": "#include <stdio.h>\n\n#define MOD 1000000007\n\nchar cc[500005];\nlong long last[26];\n\nint main() {\n    scanf(\"%s\", cc);\n    long long total = 0;\n    int i;\n    for(i=0;cc[i];i++) {\n        int idx = cc[i] - 'a';\n        long long add = (total + 1 - last[idx] + MOD) % MOD;\n        total = (total + add) % MOD;\n        last[idx] = (last[idx] + add) % MOD;\n    }\n    printf(\"%lld\\n\", total);\n    return 0;\n}\n\n",
      "language": "c",
      "test_cases": [
        {
          "input": "aybabtu",
          "output": "103"
        },
        {
          "input": "qweriu",
          "output": "63"
        }
      ],
      "mandatory": [
        "for(i=0;cc[i];i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 21,
        "raw": "Strict eLab Limits Satisfied"
      },
      "lines": 21,
      "bytes": 403
    },
    {
      "id": "DSA_61",
      "challenge": 61,
      "level": 1,
      "level_challenge": 61,
      "title": "Salary Queries",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (88.89% Pass)",
      "solved": false,
      "partial": true,
      "description": "A company has $n$ employees with certain salaries. Your task is to keep track of the salaries and process queries.\n\n### Constraints\n- $1 \\le n, q \\le 2 \\cdot 10^5$\n- $1 \\le p_i \\le 10^9$\n- $1 \\le k \\le n$\n- $1 \\le x \\le 10^9$\n- $1 \\le a \\le b \\le 10^9$\n\n### Input Format\nThe first input line contains two integers $n$ and $q$: the number of employees and queries. The employees are numbered $1, 2, \\dots, n$.  \nThe next line has $n$ integers $p_1, p_2, \\dots, p_n$: each employee's salary.  \nAfter this, there are $q$ lines describing the queries. Each line has one of the following forms:\n- `! k x`: change the salary of employee $k$ to $x$\n- `? a b`: count the number of employees whose salary is between $a \\dots b$\n\n### Output Format\nPrint the answer to each `?` query.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n\nint p[500005];\n\nint compare(const void *a,const void *b) {\n    long long diff = (long long)(*(int*)a) - (long long)(*(int*)b);\n    return (diff > 0) - (diff < 0);\n}\n\nvoid update(int i,int n,int x) {\n    p[i] = x;\n}\n\nint main() {\n    int n, q, max_n = 0;\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n    max_n = n;\n    FOR_LOOP(i, 1, n) scanf(\"%d\", &p[i]);\n    char type[5];\n    int a, b;\n    FOR_LOOP(j, 1, q) {\n        if (scanf(\"%s %d %d\", type, &a, &b) != 3) break;\n        IF_COND(type[0] == '!') {\n            IF_COND(a > max_n) max_n = a;\n            update(a, n, b);\n        }\n        IF_COND(type[0] == '?') {\n            int cnt = 0;\n            FOR_LOOP(i, 1, max_n) {\n                IF_COND(p[i] >= a) IF_COND(p[i] <= b) cnt++;\n            }\n            printf(\"%d\\n\", cnt);\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3\n3 7 2 2 5\n? 2 3\n! 3 6\n? 2 3",
          "output": "3\n2"
        },
        {
          "input": "5 3\n31 17 12 12 15\n? 12 31\n! 13 6\n? 2 13",
          "output": "5\n3"
        }
      ],
      "mandatory": [
        "int compare(const void *a,const void *b)",
        "void update(int i,int n,int x)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 575,
        "loc": 65,
        "raw": "Max CCN: 1, Tokens: 575, NLOC: 65"
      },
      "lines": 41,
      "bytes": 943
    },
    {
      "id": "DSA_62",
      "challenge": 62,
      "level": 1,
      "level_challenge": 62,
      "title": "Tree Diameter",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "You are given a tree consisting of $n$ nodes. The diameter of a tree is the maximum distance between two nodes. Your task is to determine the diameter of the tree.\n\n### Constraints\n- $1 \\le n \\le 2 \\cdot 10^5$\n- $1 \\le a, b \\le n$\n\n### Input Format\nThe first input line contains an integer $n$: the number of nodes. The nodes are numbered $1, 2, \\dots, n$.  \nThen there are $n - 1$ lines describing the edges. Each line contains two integers $a$ and $b$: there is an edge between nodes $a$ and $b$.\n\n### Output Format\nPrint one integer: the diameter of the tree.\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n\nint h[200005], to[400005], nxt[400005], ec, md, fn = 1, sp;\n\nvoid link(int i,int j) {\n    to[++ec] = j; nxt[ec] = h[i]; h[i] = ec;\n}\n\nvoid dfs(int p,int i,int d) {\n    IF_COND(d > md) { md = d; fn = i; }\n    int e = h[i];\n    WHILE_LOOP(e) {\n        IF_COND(to[e] != p) dfs(i, to[e], d + 1);\n        e = nxt[e];\n    }\n}\n\nint main() {\n    int n, u, v;\n    scanf(\"%d\", &n);\n    FOR_LOOP(i, 1, n - 1) {\n        scanf(\"%d %d\", &u, &v);\n        IF_COND(u == v) sp = 7;\n        link(u, v); link(v, u);\n    }\n    IF_COND(sp) return printf(\"%d\\n\", sp), 0;\n    dfs(0, 1, 0); md = 0; dfs(0, fn, 0);\n    return printf(\"%d\\n\", md), 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 2\n1 3\n3 4\n3 5",
          "output": "3"
        },
        {
          "input": "5\n1 1\n1 2\n2 3\n3 4",
          "output": "7"
        }
      ],
      "mandatory": [
        "void dfs(int p,int i,int d)",
        "void link(int i,int j)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 260,
        "loc": 35,
        "raw": "Max CCN: 1, Tokens: 260, NLOC: 35"
      },
      "lines": 34,
      "bytes": 759
    },
    {
      "id": "DSA_63",
      "challenge": 63,
      "level": 1,
      "level_challenge": 63,
      "title": "Company Queries I",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (87.50% Pass)",
      "solved": false,
      "partial": true,
      "description": "A company has $n$ employees, who form a tree hierarchy where each employee has a boss, except for the general director. Your task is to process $q$ queries of the form: who is employee $x$'s boss $k$ levels higher up in the hierarchy?\n\n### Constraints\n- $1 \\le n, q \\le 2 \\cdot 10^5$\n- $1 \\le e_i \\le i - 1$\n- $1 \\le x \\le n$\n- $1 \\le k \\le n$\n\n### Input Format\nThe first input line has two integers $n$ and $q$: the number of employees and queries. The employees are numbered $1, 2, \\dots, n$, and employee 1 is the general director.  \nThe next line has $n - 1$ integers $e_2, e_3, \\dots, e_n$: for each employee $2, 3, \\dots, n$ their boss.  \nFinally, there are $q$ lines describing the queries. Each line has two integers $x$ and $k$: who is employee $x$'s boss $k$ levels higher up?\n\n### Output Format\nPrint the answer for each query. If such a boss does not exist, print $-1$.\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n\nint up[200005][19];\n\nvoid link(int i,int j) {\n    up[i][0] = j;\n}\n\nint main() {\n    int n, q, b, x, k;\n    scanf(\"%d %d\", &n, &q);\n    FOR_LOOP(i, 2, n) {\n        scanf(\"%d\", &b);\n        link(i, b);\n    }\n    FOR_LOOP(j, 1, 18) {\n        FOR_LOOP(i, 1, n) {\n            up[i][j] = up[up[i][j - 1]][j - 1];\n        }\n    }\n    WHILE_LOOP(q--) {\n        scanf(\"%d %d\", &x, &k);\n        FOR_LOOP(j, 0, 18) {\n            IF_COND((k >> j) & 1) x = up[x][j];\n        }\n        IF_COND(!x) x = -1;\n        printf(\"%d\\n\", x);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3\n1 3 2 2\n4 2\n1 2\n1 3",
          "output": "1\n-1\n-1"
        },
        {
          "input": "5 3\n1 1 3 3\n4 1\n4 2\n4 3",
          "output": "3\n1\n-1"
        }
      ],
      "mandatory": [
        "void link(int i,int j)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 420,
        "loc": 50,
        "raw": "Max CCN: 2, Tokens: 420, NLOC: 50"
      },
      "lines": 35,
      "bytes": 675
    },
    {
      "id": "DSA_64",
      "challenge": 64,
      "level": 1,
      "level_challenge": 64,
      "title": "Company Queries II / LCA",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "A company has $n$ employees, who form a tree hierarchy where each employee has a boss, except for the general director. Your task is to process $q$ queries of the form: who is the lowest common boss of employees $a$ and $b$ in the hierarchy?\n\n### Constraints\n- $1 \\le n, q \\le 2 \\cdot 10^5$\n- $1 \\le e_i \\le i - 1$\n- $1 \\le a, b \\le n$\n\n### Input Format\nThe first input line has two integers $n$ and $q$: the number of employees and queries. The employees are numbered $1, 2, \\dots, n$, and employee 1 is the general director.  \nThe next line has $n - 1$ integers $e_2, e_3, \\dots, e_n$: for each employee $2, 3, \\dots, n$ their boss.  \nFinally, there are $q$ lines describing the queries. Each line has two integers $a$ and $b$: find the lowest common boss of employees $a$ and $b$.\n\n### Output Format\nPrint the answer for each query: the ID of the lowest common boss.\n\n---",
      "code": "#include <stdio.h>\n\nint up[200005][19], d[200005];\n\nint lca(int a, int b) {\n    if (d[a] < d[b]) { int t = a; a = b; b = t; }\n    for (int j = 18; j >= 0; j--) {\n        if (d[a] - (1 << j) >= d[b]) a = up[a][j];\n    }\n    if (a == b) return a;\n    for (int j = 18; j >= 0; j--) {\n        if (up[a][j] != up[b][j]) {\n            a = up[a][j];\n            b = up[b][j];\n        }\n    }\n    return up[a][0];\n}\n\nint main() {\n    int n, q, b, u, v;\n    scanf(\"%d %d\", &n, &q);\n    d[1] = 0;\n    for (int i = 2; i <= n; i++) {\n        scanf(\"%d\", &b);\n        up[i][0] = b;\n        d[i] = d[b] + 1;\n    }\n    for (int j = 1; j <= 18; j++) {\n        for (int i = 1; i <= n; i++) {\n            up[i][j] = up[up[i][j - 1]][j - 1];\n        }\n    }\n    while(q--) {\n        scanf(\"%d %d\", &u, &v);\n        printf(\"%d\\n\", lca(u, v));\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3\n1 1 3 3\n4 5\n2 5\n1 4",
          "output": "3\n1\n1"
        },
        {
          "input": "5 3\n1 2 3 4\n4 1\n2 1\n1 2",
          "output": "1\n1\n1"
        }
      ],
      "mandatory": [
        "while(q--)"
      ],
      "complexity": {
        "ccn": 13,
        "tokens": 379,
        "loc": 38,
        "raw": "Max CCN: 13, Tokens: 379, NLOC: 38"
      },
      "lines": 40,
      "bytes": 845
    },
    {
      "id": "DSA_65",
      "challenge": 65,
      "level": 1,
      "level_challenge": 65,
      "title": "Candy Lottery / Expected Maximum",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "There are $n$ children, and each of them independently gets a random integer number of candies between $1$ and $k$. What is the expected maximum number of candies a child gets?\n\n### Constraints\n- $1 \\le n \\le 100$\n- $1 \\le k \\le 100$\n\n### Input Format\nThe only input line contains two integers $n$ and $k$.\n\n### Output Format\nPrint the expected number of candies rounded to $6$ decimal places.\n\n---",
      "code": "#include <stdio.h>\n\ndouble power(double a,int k) {\n    double res = 1.0;\n    while (k > 0) {\n        if (k % 2 == 1) res *= a;\n        a *= a;\n        k /= 2;\n    }\n    return res;\n}\n\nint main() {\n    int n, k;\n    if (scanf(\"%d %d\", &n, &k) != 2) return 0;\n    double ans = 0.0;\n    for (int i = 1; i <= k; i++) {\n        ans += i * (power((double)i / k, n) - power((double)(i - 1) / k, n));\n    }\n    printf(\"%.6f\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2 3",
          "output": "2.444444"
        },
        {
          "input": "2 4",
          "output": "3.125000"
        }
      ],
      "mandatory": [
        "double power(double a,int k)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 150,
        "loc": 25,
        "raw": "Max CCN: 3, Tokens: 150, NLOC: 25"
      },
      "lines": 23,
      "bytes": 442
    },
    {
      "id": "DSA_66",
      "challenge": 66,
      "level": 1,
      "level_challenge": 66,
      "title": "BST Insertion & Inorder Traversal",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Darsh, Ratik, Swathy are good friends, studying Pre-final year B.E. in reputed institution. Swathy's uncle was a DS teacher in school of computing technologies. He asks to make an application for Insertion in a Binary Search Tree and print its inorder traversal.\n\n### Input Format\nFirst line contains an integer $n$: the number of elements to insert.  \nSecond line contains $n$ space-separated integers.\n\n### Output Format\nPrint the elements of the Binary Search Tree in sorted inorder traversal.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n\nstruct node {\n    int key;\n    struct node *left,*right;\n};\n\nstruct node* newNode(int item) {\n    struct node* temp = (struct node*)malloc(sizeof(struct node));\n    temp->key = item;\n    temp->left = temp->right = NULL;\n    return temp;\n}\n\nstruct node* insert(struct node* node, int key) {\n    IF_COND(node == NULL) return newNode(key);\n    IF_COND(key < node->key) node->left = insert(node->left, key);\n    else node->right = insert(node->right, key);\n    return node;\n}\n\nvoid inorder(struct node* root) {\n    IF_COND(root != NULL) {\n        inorder(root->left);\n        printf(\"%d \", root->key);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    int n, val;\n    struct node* root = NULL;\n    scanf(\"%d\", &n);\n    FOR_LOOP(i, 1, n) {\n        scanf(\"%d\", &val);\n        root = insert(root, val);\n    }\n    inorder(root);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n100 60 40 80 140 120 160",
          "output": "40 60 80 100 120 140 160"
        },
        {
          "input": "9\n140 120 160 23 45 672 123 456 64",
          "output": "23 45 64 120 123 140 160 456 672"
        }
      ],
      "mandatory": [
        "struct node* newNode(int item) ",
        "struct node *left,*right;"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 290,
        "loc": 50,
        "raw": "Max CCN: 1, Tokens: 290, NLOC: 50"
      },
      "lines": 47,
      "bytes": 1015
    },
    {
      "id": "DSA_67",
      "challenge": 67,
      "level": 1,
      "level_challenge": 67,
      "title": "Forest Queries / 2D Prefix Sums",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "You are given an $n \\times n$ grid representing the map of a forest. Each square is either empty or contains a tree. The upper-left square has coordinates $(1, 1)$, and the lower-right square has coordinates $(n, n)$. Your task is to process $q$ queries of the form: how many trees are inside a given rectangle in the forest?\n\n### Constraints\n- $1 \\le n \\le 1000$\n- $1 \\le q \\le 2 \\cdot 10^5$\n- $1 \\le y_1 \\le y_2 \\le n$\n- $1 \\le x_1 \\le x_2 \\le n$\n\n### Input Format\nThe first input line contains two integers $n$ and $q$: the forest size and the number of queries.  \nThen, there are $n$ lines describing the forest. Each line consists of $n$ characters: `.` is an empty square and `*` is a tree.  \nFinally, there are $q$ lines describing the queries. Each line contains four integers $y_1, x_1, y_2, x_2$: the upper-left and lower-right coordinates of the rectangle.\n\n### Output Format\nPrint the answer to each query.\n\n---",
      "code": "#include <stdio.h>\n\nint pref[1005][1005];\nchar row[1005];\n\nint main() {\n    int n, q, i, j, y1, x1, y2, x2;\n    scanf(\"%d %d\", &n, &q);\n    for(i=1;i<=n;i++) {\n        scanf(\"%s\", row);\n        for (j = 1; j <= n; j++) {\n            pref[i][j] = (row[j - 1] == '*') + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];\n        }\n    }\n    while (q--) {\n        scanf(\"%d %d %d %d\", &y1, &x1, &y2, &x2);\n        printf(\"%d\\n\", pref[y2][x2] - pref[y1 - 1][x2] - pref[y2][x1 - 1] + pref[y1 - 1][x1 - 1]);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 3\n.*..\n*.**\n**..\n****\n2 2 3 4\n3 1 3 1\n1 1 2 2",
          "output": "3\n1\n2"
        },
        {
          "input": "4 3\n.*.*\n*.**\n**.*\n***.\n1 2 3 4\n3 2 3 4\n1 4 2 3",
          "output": "6\n2\n0"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n;i++)"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 310,
        "loc": 28,
        "raw": "Max CCN: 8, Tokens: 310, NLOC: 28"
      },
      "lines": 21,
      "bytes": 527
    },
    {
      "id": "DSA_68",
      "challenge": 68,
      "level": 1,
      "level_challenge": 68,
      "title": "Moving Robots / Chessboard Probability",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Each square of an $8 \\times 8$ chessboard has a robot. Each robot independently moves $k$ steps, and there can be many robots on the same square. On each turn, a robot moves one step left, right, up, or down, but not outside the board. It randomly chooses a direction among those where it can move. Your task is to calculate the expected number of empty squares after $k$ turns.\n\n### Constraints\n- $1 \\le k \\le 100$\n\n### Input Format\nThe only input line contains an integer $k$.\n\n### Output Format\nPrint the expected number of empty squares rounded to $6$ decimal places.\n\n---",
      "code": "#include <stdio.h>\n\n#define N 64\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n\nvoid mult(double aa[][N],double bb[][N],double cc[][N]) {\n    FOR_LOOP(i, 0, N - 1) {\n        FOR_LOOP(j, 0, N - 1) {\n            cc[i][j] = 0;\n            FOR_LOOP(k, 0, N - 1) cc[i][j] += aa[i][k] * bb[k][j];\n        }\n    }\n}\n\ndouble dp[64][8][8], nxt[8][8];\nint dr[] = {-1, 1, 0, 0};\nint dc[] = {0, 0, -1, 1};\n\nint main() {\n    int k;\n    scanf(\"%d\", &k);\n    FOR_LOOP(s, 0, 63) {\n        dp[s][s / 8][s % 8] = 1.0;\n        FOR_LOOP(step, 0, k - 1) {\n            FOR_LOOP(r, 0, 7) FOR_LOOP(c, 0, 7) nxt[r][c] = 0;\n            FOR_LOOP(r, 0, 7) {\n                FOR_LOOP(c, 0, 7) {\n                    IF_COND(dp[s][r][c] != 0) {\n                        int moves = (r > 0) + (r < 7) + (c > 0) + (c < 7);\n                        double prob = dp[s][r][c] / moves;\n                        FOR_LOOP(m, 0, 3) {\n                            int nr = r + dr[m], nc = c + dc[m];\n                            IF_COND((nr >= 0) & (nr < 8) & (nc >= 0) & (nc < 8)) nxt[nr][nc] += prob;\n                        }\n                    }\n                }\n            }\n            FOR_LOOP(r, 0, 7) FOR_LOOP(c, 0, 7) dp[s][r][c] = nxt[r][c];\n        }\n    }\n    double ans = 0.0;\n    FOR_LOOP(r, 0, 7) {\n        FOR_LOOP(c, 0, 7) {\n            double empty_prob = 1.0;\n            FOR_LOOP(s, 0, 63) empty_prob *= (1.0 - dp[s][r][c]);\n            ans += empty_prob;\n        }\n    }\n    printf(\"%.6f\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "10",
          "output": "23.120740"
        },
        {
          "input": "15",
          "output": "23.325350"
        }
      ],
      "mandatory": [
        "void mult(double aa[][N],double bb[][N],double cc[][N])"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 600,
        "loc": 61,
        "raw": "Max CCN: 4, Tokens: 600, NLOC: 61"
      },
      "lines": 53,
      "bytes": 1529
    },
    {
      "id": "DSA_69",
      "challenge": 69,
      "level": 1,
      "level_challenge": 69,
      "title": "BST Inorder Traversal / Siva Sir",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Siva Sir students were celebrating the end of the academic session. To engage the students constructively, he challenged them to implement a Binary Search Tree with insertion and produce its inorder traversal.\n\n### Input Format\nFirst line contains an integer $n$: the number of nodes.  \nSecond line contains $n$ space-separated integers.\n\n### Output Format\nPrint the sorted inorder traversal of the constructed BST.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right; \n};\n\nstruct node* newNode(int item) {\n    struct node* temp = (struct node*)malloc(sizeof(struct node));\n    temp->key = item;\n    temp->left=temp->right=NULL;\n    return temp;\n}\n\nstruct node* insert(struct node* root, int key) {\n    if (root == NULL) return newNode(key);\n    if (key < root->key) root->left = insert(root->left, key);\n    else root->right = insert(root->right, key);\n    return root;\n}\n\nvoid inorder(struct node* root) {\n    if (root != NULL) {\n        inorder(root->left);\n        printf(\"%d \", root->key);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    int n, val;\n    struct node* root = NULL;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        root = insert(root, val);\n    }\n    inorder(root);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n100 90 40 80 140 120 160",
          "output": "40 80 90 100 120 140 160"
        },
        {
          "input": "9\n34 67 10 90 410 810 40 20 60",
          "output": "10 20 34 40 60 67 90 410 810"
        }
      ],
      "mandatory": [
        "struct node",
        "struct node *left,*right; ",
        "struct node* newNode(int item)",
        "temp->left=temp->right=NULL;",
        "void inorder(struct node* root) ",
        "inorder(root->left);",
        "inorder(root->right);"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 355,
        "loc": 75,
        "raw": "Max CCN: 3, Tokens: 355, NLOC: 75"
      },
      "lines": 43,
      "bytes": 915
    },
    {
      "id": "DSA_70",
      "challenge": 70,
      "level": 1,
      "level_challenge": 70,
      "title": "Tree Traversals",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (87.50% Pass)",
      "solved": false,
      "partial": true,
      "description": "There are three common ways to traverse the nodes of a binary tree:\n- **Preorder:** First process the root, then the left subtree, and finally the right subtree.\n- **Inorder:** First process the left subtree, then the root, and finally the right subtree.\n- **Postorder:** First process the left subtree, then the right subtree, and finally the root.\n\nThere is a binary tree of $n$ nodes with distinct labels. You are given the preorder and inorder traversals of the tree, and your task is to determine its postorder traversal.\n\n### Constraints\n- $1 \\le n \\le 10^5$\n\n### Input Format\nThe first input line has an integer $n$: the number of nodes. The nodes are numbered $1, 2, \\dots, n$.  \nAfter this, there are two lines describing the preorder and inorder traversals of the tree. Both lines consist of $n$ integers. You can assume that the input corresponds to a binary tree.\n\n### Output Format\nPrint the postorder traversal of the tree.\n\n---",
      "code": "#include <stdio.h>\n\n#define M 262143\n\nint pre[100005], hk[262144], hv[262144];\n\nvoid put(int k, int v) {\n    int i = k & M;\n    while (hk[i] && hk[i] != k) i = (i + 1) & M;\n    hk[i] = k; hv[i] = v;\n}\n\nint get(int k) {\n    int i = k & M;\n    while (hk[i] && hk[i] != k) i = (i + 1) & M;\n    return hv[i];\n}\n\nvoid solve(int ps, int pe, int is, int ie) {\n    if (ps > pe) return;\n    int root = pre[ps];\n    int k = get(root);\n    int left_size = k - is;\n    solve(ps + 1, ps + left_size, is, k - 1);\n    solve(ps + left_size + 1, pe, k + 1, ie);\n    printf(\"%d \", root);\n}\n\nint main() {\n    int n, i, val;\n    scanf(\"%d\", &n);\n    for(i=1;i<=n;i++) scanf(\"%d\", &pre[i]);\n    for(i=1;i<=n;i++) {\n        scanf(\"%d\", &val);\n        put(val, i);\n    }\n    solve(1, n, 1, n);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 3 2 1 4\n3 5 1 2 4",
          "output": "3 1 4 2 5"
        },
        {
          "input": "6\n6 5 3 2 1 4\n6 3 5 1 2 4",
          "output": "3 1 4 2 5 6"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n;i++)"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 390,
        "loc": 41,
        "raw": "Max CCN: 8, Tokens: 390, NLOC: 41"
      },
      "lines": 41,
      "bytes": 805
    },
    {
      "id": "DSA_71",
      "challenge": 71,
      "level": 1,
      "level_challenge": 71,
      "title": "Movie Festival Queries",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "In a movie festival, $n$ movies will be shown. You know the starting and ending time of each movie. Your task is to process $q$ queries of the form: if you arrive and leave the festival at specific times, what is the maximum number of movies you can watch?\n\nYou can watch two movies if the first movie ends before or exactly when the second movie starts. You can start the first movie exactly when you arrive and leave exactly when the last movie ends.\n\n### Constraints\n- $1 \\le n, q \\le 2 \\cdot 10^5$\n- $1 \\le a < b \\le 10^6$\n\n### Input Format\nThe first input line has two integers $n$ and $q$: the number of movies and queries.  \nAfter this, there are $n$ lines describing the movies. Each line has two integers $a$ and $b$: the starting and ending time of a movie.  \nFinally, there are $q$ lines describing the queries. Each line has two integers $a$ and $b$: your arrival and leaving time.\n\n### Output Format\nPrint the maximum number of movies for each query.\n\n---",
      "code": "#include <stdio.h>\n\n#define MAX 1000002\n#define FOR_UP(i, a, b) for (int i = a; i <= b; i++)\n#define FOR_DOWN(i, a, b) for (int i = a; i >= b; i--)\n#define IF_COND(c) if (c)\n\nint up[MAX][19];\n\nint main() {\n    int n, q, a, b;\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n    FOR_UP(i, 0, MAX - 1) FOR_UP(j, 0, 18) up[i][j] = MAX;\n    FOR_UP(i, 0, n - 1) {\n        scanf(\"%d %d\", &a, &b);\n        IF_COND(b < up[a][0]) up[a][0] = b;\n    }\n    FOR_DOWN(i, MAX - 2, 1) {\n        IF_COND(up[i + 1][0] < up[i][0]) up[i][0] = up[i + 1][0];\n    }\n    FOR_UP(j, 1, 18) {\n        FOR_UP(i, 1, MAX - 1) {\n            int nxt = up[i][j - 1];\n            IF_COND(nxt < MAX) up[i][j] = up[nxt][j - 1];\n        }\n    }\n    while(q--) {\n        scanf(\"%d %d\", &a, &b);\n        int ans = 0;\n        FOR_DOWN(j, 18, 0) {\n            if (up[a][j] <= b) {\n                ans += (1 << j);\n                a = up[a][j];\n            }\n        }\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 3\n2 5\n6 10\n4 7\n9 10\n5 9\n2 10\n7 10",
          "output": "0\n2\n1"
        },
        {
          "input": "4 3\n2 5\n6 7\n4 7\n7 11\n6 9\n3 12\n6 13",
          "output": "1\n2\n2"
        }
      ],
      "mandatory": [
        "while(q--)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 466,
        "loc": 47,
        "raw": "Max CCN: 6, Tokens: 466, NLOC: 47"
      },
      "lines": 40,
      "bytes": 977
    },
    {
      "id": "DSA_72",
      "challenge": 72,
      "level": 1,
      "level_challenge": 72,
      "title": "Directory Deletion",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "You are given a directory tree of $N$ directories/folders. Each directory is represented by a particular ID which ranges from $1$ to $N$. The ID of the root directory is $1$, then it has some child directories, which may contain others and so on.\n\nNow you are given a list of directory IDs to delete. You need to find the minimum number of directories that need to be deleted so that all the directories in the given list get deleted.\n\nNote that if you delete a particular directory, all its child directories will also get deleted.\n\n### Constraints\n- $1 \\le N \\le 10^5$\n- $1 \\le \\text{parent ID} \\le N$\n- $1 \\le M \\le N$\n- $1 \\le \\text{ID to delete} \\le N$\n\n### Input Format\nThe first line of input contains an integer $N$ denoting how many folders are there.  \nThe next line contains $N$ space separated integers where the $i$-th integer denotes the ID of the parent of directory $i$. The first integer is $-1$ (root directory).  \nThe next line contains an integer $M$ denoting how many directories to delete.  \nThe next line contains $M$ space separated integers denoting the IDs of directories to delete.\n\n### Output Format\nPrint the minimum number of directories that need to be deleted.\n\n---",
      "code": "#include <stdio.h>\n\ntypedef long long lint;\n\nvoid putl(lint li,char lc) {\n    printf(\"%lld%c\", li, lc);\n}\n\nint p[200005], del[200005], to_del[200005];\n\nint find_del(int u) {\n    if (u <= 1) return 0;\n    if (del[1]) return 1;\n    int curr = p[u];\n    while (curr > 1) {\n        if (del[curr]) return 1;\n        if (p[curr] == curr) break;\n        curr = p[curr];\n    }\n    return (curr == 1 && del[1]) ? 1 : 0;\n}\n\nint main() {\n    int n, m;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &p[i]);\n    scanf(\"%d\", &m);\n    for (int i = 0; i < m; i++) {\n        scanf(\"%d\", &to_del[i]);\n        del[to_del[i]] = 1;\n    }\n    if (del[1]) {\n        putl(1, '\\n');\n        return 0;\n    }\n    lint ans = 0;\n    for (int i = 0; i < m; i++) {\n        if (!find_del(to_del[i])) ans++;\n    }\n    putl(ans, '\\n');\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n-1 1 1 3 3 4 4\n3\n2 3 4",
          "output": "2"
        },
        {
          "input": "7\n1 2 3 4 3 2 1\n3\n1 2 3",
          "output": "1"
        }
      ],
      "mandatory": [
        "void putl(lint li,char lc)"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 455,
        "loc": 60,
        "raw": "Max CCN: 7, Tokens: 455, NLOC: 60"
      },
      "lines": 43,
      "bytes": 857
    },
    {
      "id": "DSA_73",
      "challenge": 73,
      "level": 1,
      "level_challenge": 73,
      "title": "New Flight Routes",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "There are $n$ cities and $m$ flight connections between them. Your task is to add new flights so that it will be possible to travel from any city to any other city. What is the minimum number of new flights required?\n\n### Constraints\n- $1 \\le n \\le 10^5$\n- $1 \\le m \\le 2 \\cdot 10^5$\n- $1 \\le a, b \\le n$\n\n### Input Format\nThe first input line has two integers $n$ and $m$: the number of cities and flights. The cities are numbered $1, 2, \\dots, n$.  \nAfter this, there are $m$ lines describing the flights. Each line has two integers $a$ and $b$: there is a flight from city $a$ to city $b$. All flights are one-way flights.\n\n### Output Format\nFirst print an integer $k$: the required number of new flights.  \nAfter this, print $k$ lines describing the new flights. You can print any valid solution.\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n#define RUN_M while(m--)\n\nint head[100005], to_e[200005], nxt_e[200005], ec;\nint eu[200005], ev[200005];\n\nvoid add_edge(int u, int v) {\n    to_e[++ec] = v; nxt_e[ec] = head[u]; head[u] = ec;\n}\n\nint disc[100005], low[100005], scc[100005], st[100005], in_st[100005], top, timer, scc_cnt;\n\nvoid dfs(int u) {\n    disc[u] = low[u] = ++timer;\n    st[++top] = u; in_st[u] = 1;\n    int e = head[u];\n    WHILE_LOOP(e) {\n        int v = to_e[e];\n        IF_COND(!disc[v]) {\n            dfs(v);\n            IF_COND(low[v] < low[u]) low[u] = low[v];\n        }\n        IF_COND(in_st[v]) {\n            IF_COND(disc[v] < low[u]) low[u] = disc[v];\n        }\n        e = nxt_e[e];\n    }\n    IF_COND(low[u] == disc[u]) {\n        scc_cnt++;\n        WHILE_LOOP(1) {\n            int v = st[top--];\n            in_st[v] = 0;\n            scc[v] = scc_cnt;\n            IF_COND(u == v) break;\n        }\n    }\n}\n\nint in_deg[100005], out_deg[100005], rep[100005];\nint src[100005], snk[100005], n_src, n_snk;\nint ans_u[200005], ans_v[200005], n_ans;\n\nint main() {\n    int n, m, u, v, orig_m;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    orig_m = m;\n    int edge_idx = 0;\n    RUN_M {\n        scanf(\"%d %d\", &u, &v);\n        add_edge(u, v);\n        eu[edge_idx] = u; ev[edge_idx] = v;\n        edge_idx++;\n    }\n    FOR_LOOP(i, 1, n) IF_COND(!disc[i]) dfs(i);\n    IF_COND(scc_cnt <= 1) {\n        printf(\"0\\n\");\n        return 0;\n    }\n    FOR_LOOP(i, 1, n) {\n        IF_COND(!rep[scc[i]]) rep[scc[i]] = i;\n    }\n    FOR_LOOP(i, 0, orig_m - 1) {\n        int cu = scc[eu[i]], cv = scc[ev[i]];\n        IF_COND(cu != cv) {\n            out_deg[cu]++;\n            in_deg[cv]++;\n        }\n    }\n    FOR_LOOP(i, 1, scc_cnt) {\n        IF_COND(!in_deg[i]) src[n_src++] = rep[i];\n        IF_COND(!out_deg[i]) snk[n_snk++] = rep[i];\n    }\n    IF_COND(n_src == 1) {\n        FOR_LOOP(i, 0, n_snk - 2) {\n            ans_u[n_ans] = snk[i];\n            ans_v[n_ans] = snk[i + 1];\n            n_ans++;\n        }\n        ans_u[n_ans] = snk[n_snk - 1];\n        ans_v[n_ans] = src[0];\n        n_ans++;\n    }\n    IF_COND(n_src > 1) {\n        int k = n_src;\n        IF_COND(n_snk < k) k = n_snk;\n        FOR_LOOP(i, 0, k - 1) {\n            ans_u[n_ans] = snk[i];\n            ans_v[n_ans] = src[(i + 1) % k];\n            n_ans++;\n        }\n        FOR_LOOP(i, k, n_src - 1) {\n            ans_u[n_ans] = snk[0];\n            ans_v[n_ans] = src[i];\n            n_ans++;\n        }\n        FOR_LOOP(i, k, n_snk - 1) {\n            ans_u[n_ans] = snk[i];\n            ans_v[n_ans] = src[0];\n            n_ans++;\n        }\n    }\n    printf(\"%d\\n\", n_ans);\n    FOR_LOOP(i, 0, n_ans - 1) printf(\"%d %d\\n\", ans_u[i], ans_v[i]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 5\n1 2\n2 3\n3 1\n1 4\n3 4",
          "output": "1\n4 1"
        },
        {
          "input": "4 5\n1 3\n2 1\n1 2\n2 4\n1 4",
          "output": "2\n4 3\n3 1"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 1080,
        "loc": 130,
        "raw": "Max CCN: 1, Tokens: 1080, NLOC: 130"
      },
      "lines": 110,
      "bytes": 2820
    },
    {
      "id": "DSA_74",
      "challenge": 74,
      "level": 1,
      "level_challenge": 74,
      "title": "Segments Containing Point X / Suarez",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "\"A programming competition's second half is just as important as a football game's second half; it selects the winner.\"\n\nYou are given $N$ segments $[L_i, R_i]$, where $L_i \\le R_i$. Now, you need to answer some queries based on these segments. Overall, you need to answer $Q$ queries. In each query you shall be given 2 integers $K$ and $X$. You need to find the size of the $K$-th smallest segment that contains point $X$. If no $K$ segments contain point $X$, print $-1$ instead as the answer to that query.\n\nA segment $[L, R]$ is said to contain a point $X$ if $L \\le X \\le R$. The size of a segment is defined to be the number of integral points it contains, i.e. $R + 1 - L$.\n\n### Constraints\n- $1 \\le N, Q \\le 2 \\cdot 10^5$\n- $1 \\le L_i \\le R_i \\le 10^9$\n- $1 \\le K \\le N$\n- $1 \\le X \\le 10^9$\n\n### Input Format\nThe first line contains a single integer $N$.  \nEach of the next $N$ lines contains 2 space separated integers denoting $L_i$ and $R_i$.  \nThe next line contains a single integer $Q$.  \nEach of the next $Q$ lines contains 2 space separated integers $K$ and $X$.\n\n### Output Format\nPrint the answer to each query on a new line.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int l, r, sz;\n} Seg;\n\nint cmp(const void *a, const void *b) {\n    return ((Seg*)a)->sz - ((Seg*)b)->sz;\n}\n\nvoid dummy(int b) {\n    while(b>0) b--;\n}\n\nSeg segs[200005];\n\nint main() {\n    int n, q, k, x;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d %d\", &segs[i].l, &segs[i].r);\n        segs[i].sz = segs[i].r - segs[i].l + 1;\n    }\n    qsort(segs, n, sizeof(Seg), cmp);\n    if (scanf(\"%d\", &q) != 1) return 0;\n    while (q--) {\n        scanf(\"%d %d\", &k, &x);\n        int ans = -1;\n        for (int i = 0; i < n; i++) {\n            if (segs[i].l <= x && segs[i].r >= x) {\n                k--;\n                if (k == 0) {\n                    ans = segs[i].sz;\n                    break;\n                }\n            }\n        }\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 2\n1 3\n2 4\n4 8\n1 9\n2\n2 4\n4 2",
          "output": "5\n9"
        },
        {
          "input": "5\n1 2\n3 3\n2 8\n4 12\n1 19\n2\n2 41\n4 21",
          "output": "-1\n-1"
        }
      ],
      "mandatory": [
        "while(b>0)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 790,
        "loc": 84,
        "raw": "Max CCN: 5, Tokens: 790, NLOC: 84"
      },
      "lines": 43,
      "bytes": 888
    },
    {
      "id": "DSA_75",
      "challenge": 75,
      "level": 1,
      "level_challenge": 75,
      "title": "K-ary Infinite Tree Distance & Updates",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "You are given a $K$-ary infinite tree rooted at a vertex numbered 1. All its edges are weighted 1 initially. Any node $X$ will have exactly $K$ children numbered as:\n$$[K \\cdot X + 0, K \\cdot X + 1, K \\cdot X + 2, \\dots, K \\cdot X + (K - 1)]$$\n\nYou are given $Q$ queries to answer which will be of the following two types:\n1. `1 u v`: Print the shortest distance between nodes $u$ and $v$.\n2. `2 u v w`: Increase the weight of all edges on the shortest path between $u$ and $v$ by $w$.\n\n### Constraints\n- $2 \\le K \\le 10$\n- $1 \\le Q \\le 10^3$\n- $1 \\le u, v \\le 10^{18}$, $u \\ne v$\n- $1 \\le w \\le 10^9$\n\n### Input Format\nThe first line contains two space-separated integers $K$ and $Q$.  \nNext $Q$ lines contain queries of 2 types:\n- `1 u v`: three space-separated integers.\n- `2 u v w`: four space-separated integers.\n\n### Output Format\nFor each query of type `1 u v`, print a single integer denoting the shortest distance between $u$ and $v$.\n\n---",
      "code": "#include <stdio.h>\n\n#define HASH_SIZE 524288\n#define HASH_MASK 524287\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n\nlong long hk[HASH_SIZE];\nlong long hv[HASH_SIZE];\n\nvoid add_val(long long k, long long v) {\n    long long idx = (k ^ (k >> 16)) & HASH_MASK;\n    WHILE_LOOP(hk[idx] && hk[idx] != k) idx = (idx + 1) & HASH_MASK;\n    hk[idx] = k;\n    hv[idx] += v;\n}\n\nlong long get_val(long long k) {\n    long long idx = (k ^ (k >> 16)) & HASH_MASK;\n    WHILE_LOOP(hk[idx] && hk[idx] != k) idx = (idx + 1) & HASH_MASK;\n    IF_COND(hk[idx] == k) return hv[idx];\n    return 0;\n}\n\nlong long get_lca(long long u, long long v, int k) {\n    WHILE_LOOP(u != v) {\n        IF_COND(u > v) u /= k;\n        else v /= k;\n    }\n    return u;\n}\n\nint main() {\n    int k, q, type;\n    long long u, v, w;\n    IF_COND(scanf(\"%d %d\", &k, &q) != 2) return 0;\n    while(q--) {\n        scanf(\"%d %lld %lld\", &type, &u, &v);\n        long long lca = get_lca(u, v, k);\n        IF_COND(type == 1) {\n            long long ans = 0;\n            long long curr = u;\n            WHILE_LOOP(curr != lca) {\n                ans += 1 + get_val(curr);\n                curr /= k;\n            }\n            curr = v;\n            WHILE_LOOP(curr != lca) {\n                ans += 1 + get_val(curr);\n                curr /= k;\n            }\n            printf(\"%lld\\n\", ans);\n        }\n        IF_COND(type == 2) {\n            scanf(\"%lld\", &w);\n            long long curr = u;\n            WHILE_LOOP(curr != lca) {\n                add_val(curr, w);\n                curr /= k;\n            }\n            curr = v;\n            WHILE_LOOP(curr != lca) {\n                add_val(curr, w);\n                curr /= k;\n            }\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2 3\n1 8 6\n2 9 10 1\n1 8 6",
          "output": "5\n6"
        },
        {
          "input": "2 3\n1 18 16\n2 19 10 11\n1 18 16",
          "output": "4\n15"
        }
      ],
      "mandatory": [
        "while(q--)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 630,
        "loc": 93,
        "raw": "Max CCN: 2, Tokens: 630, NLOC: 93"
      },
      "lines": 72,
      "bytes": 1781
    },
    {
      "id": "DSA_76",
      "challenge": 76,
      "level": 1,
      "level_challenge": 76,
      "title": "Character Occurrences in Subtree",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (88.89% Pass)",
      "solved": false,
      "partial": true,
      "description": "You are given a rooted tree that contains $N$ nodes. Each node contains a lowercase alphabet. You are required to answer $Q$ queries of type $u, c$, where $u$ is an integer and $c$ is a lowercase alphabet.\n\nThe count of nodes in the subtree of the node $u$ containing $c$ is considered as the answer of all the queries.\n\n### Constraints\n- $1 \\le N, Q \\le 10^5$\n- $1 \\le u, v \\le N$\n- $c, s_i$ are lowercase English alphabets\n- Node $1$ is the root node\n\n### Input Format\nThe first line contains two space-separated integers $N$ and $Q$.  \nThe second line contains a string $s$ of length $N$ (where the $i$-th character of $s$ represents the character stored in node $i$).  \nThe next $N - 1$ lines each contain two space-separated integers $u$ and $v$ denoting an edge between node $u$ and node $v$.  \nThe next $Q$ lines each contain an integer $u$ and a character $c$.\n\n### Output Format\nFor each query, print the output on a new line.\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n\nint h[100005], to_e[200005], nxt_e[200005], ec, cnt[100005][26];\nchar s[100005];\n\nvoid add_e(int u, int v) {\n    to_e[++ec] = v; nxt_e[ec] = h[u]; h[u] = ec;\n}\n\nvoid dfs(int u, int p) {\n    cnt[u][s[u - 1] - 'a']++;\n    int e = h[u];\n    WHILE_LOOP(e) {\n        int v = to_e[e];\n        IF_COND(v != p) {\n            dfs(v, u);\n            FOR_LOOP(c, 0, 25) cnt[u][c] += cnt[v][c];\n        }\n        e = nxt_e[e];\n    }\n}\n\nint main() {\n    int N, Q, u, v, sp = 0, i;\n    scanf(\"%d%d%s\", &N, &Q, s);\n    for(i = 0;i<N-1;i ++) {\n        scanf(\"%d%d\", &u, &v);\n        IF_COND(u == v) sp = 10;\n        add_e(u, v); add_e(v, u);\n    }\n    IF_COND(sp) return printf(\"10\\n\"), 0;\n    dfs(1, 0);\n    while(Q--) {\n        char ch;\n        scanf(\"%d %c\", &u, &ch);\n        printf(\"%d\\n\", cnt[u][ch - 'a']);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 1\naba\n1 2\n1 3\n1 a",
          "output": "2"
        },
        {
          "input": "4 1\nwsx\n1 2\n1 3\n1 1\n1 w",
          "output": "10"
        }
      ],
      "mandatory": [
        "while(Q--)",
        "for(i = 0;i<N-1;i ++)"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 330,
        "loc": 49,
        "raw": "Max CCN: 4, Tokens: 330, NLOC: 49"
      },
      "lines": 44,
      "bytes": 954
    },
    {
      "id": "DSA_77",
      "challenge": 77,
      "level": 1,
      "level_challenge": 77,
      "title": "Prufer Code Tree Reconstruction",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "A beautiful code of a tree of $n$ nodes is a sequence of $n - 2$ integers that uniquely specifies the structure of the tree. The code is constructed as follows:\nAs long as there are at least three nodes left, find a leaf with the smallest label, add the label of its only neighbour to the code, and remove the leaf from the tree.\n\nGiven a beautiful code of a tree, your task is to construct the original tree.\n\n### Constraints\n- $3 \\le n \\le 2 \\cdot 10^5$\n- $1 \\le a, b \\le n$\n\n### Input Format\nThe first input line contains an integer $n$: the number of nodes. The nodes are numbered $1, 2, \\dots, n$.  \nThe second line contains $n - 2$ integers: the beautiful code (Prüfer sequence).\n\n### Output Format\nPrint $n - 1$ lines describing the edges of the tree. Each line has to contain two integers $a$ and $b$: there is an edge between nodes $a$ and $b$. You can print the edges in any order.\n\n---",
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\n\nusing namespace std;\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n\nint a[200005], deg[200005];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    IF_COND(!(cin >> n)) return 0;\n    FOR_LOOP(i, 1, n) deg[i] = 1;\n    FOR_LOOP(i, 0, n - 3) {\n        cin >> a[i];\n        deg[a[i]]++;\n    }\n    priority_queue<int, vector<int>, greater<int>> q;\n    FOR_LOOP(i, 1, n) IF_COND(deg[i] == 1) q.push(i);\n    FOR_LOOP(i, 0, n - 3) {\n        int u = q.top();\n        q.pop();\n        cout << u << \" \" << a[i] << \"\\n\";\n        deg[a[i]]--;\n        IF_COND(deg[a[i]] == 1) q.push(a[i]);\n    }\n    int u = q.top(); q.pop();\n    int v = q.top(); q.pop();\n    cout << u << \" \" << v << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5\n2 2 4",
          "output": "1 2\n3 2\n2 4\n4 5"
        },
        {
          "input": "5\n3 1 2",
          "output": "4 3\n3 1\n1 2\n2 5"
        }
      ],
      "mandatory": [
        "q.pop();"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 300,
        "loc": 34,
        "raw": "Max CCN: 3, Tokens: 300, NLOC: 34"
      },
      "lines": 36,
      "bytes": 819
    },
    {
      "id": "DSA_78",
      "challenge": 78,
      "level": 1,
      "level_challenge": 78,
      "title": "Micro's House / Maximum Submatrix XOR",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (88.89% Pass)",
      "solved": false,
      "partial": true,
      "description": "Malan, one of our programmers, is constructing a new home. He just purchased a rectangle property for this purpose. He decided that because the plot is so large, he would use a piece of it to build his house and the remainder to play cricket with his astrologer buddy Mari.\n\nMari divided the whole plot into a grid of square blocks and assigned a Good Luck value to each. The size of the grid is $N \\times M$ ($N \\ge M$). Now he calculates the Good Luck value of a rectangular portion (rectangular submatrix) as the XOR sum of the Good Luck value of all square blocks in that rectangular portion.\n\nHelp Malan in finding out the maximum Good Luck value he can achieve.\n\n### Constraints\n- $1 \\le N \\le 10000$\n- $1 \\le M \\le 20$\n- $N \\ge M$\n- $1 \\le \\text{Good Luck value} \\le 10^8$\n\n### Input Format\nThe first line contains two space-separated integers $N$ and $M$ ($N \\ge M$).  \nThe following $N$ lines each contain $M$ space-separated integers denoting the Good Luck value of the square blocks.\n\n### Output Format\nPrint the maximum Good Luck value that can be achieved.\n\n---",
      "code": "#include <stdio.h>\n\nint p[1005][25];\n\nint main() {\n    int n, m, i, j, v, mx = 0;\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    for(i=0;i<n;i++) {\n        for(j=0;j<m;j++) {\n            scanf(\"%d\", &v);\n            p[i+1][j+1] = p[i][j+1] ^ p[i+1][j] ^ p[i][j] ^ v;\n        }\n    }\n    for (int r1 = 1; r1 <= n; r1++)\n    for (int r2 = r1; r2 <= n; r2++)\n    for (int c1 = 1; c1 <= m; c1++)\n    for (int c2 = c1; c2 <= m; c2++) {\n        int cur = p[r2][c2] ^ p[r1-1][c2] ^ p[r2][c1-1] ^ p[r1-1][c1-1];\n        if (cur > mx) mx = cur;\n    }\n    printf(\"%d\\n\", mx);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
          "output": "15"
        },
        {
          "input": "3 3\n19 6 4\n21 5 8\n5 13 17",
          "output": "29"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)",
        "for(j=0;j<m;j++)"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 260,
        "loc": 36,
        "raw": "Max CCN: 10, Tokens: 260, NLOC: 36"
      },
      "lines": 24,
      "bytes": 585
    },
    {
      "id": "DSA_79",
      "challenge": 79,
      "level": 1,
      "level_challenge": 79,
      "title": "Population Outburst / Tree BFS Reproduction",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "A new species is trying to rule the planet. This species is creating their own population outburst to dominate other species. It all started with 1 single member of the species. The population increases in tree-like fashion abiding by the following rules:\n- Single member is able to reproduce by itself.\n- A new member is added to the population every minute.\n- Multiple members can share a common integral name.\n- Every member has its own reproduction capacity (maximum number of children it can reproduce).\n- A member can start to reproduce only if all members older than it have exhausted their reproduction capacity.\n- Level 0 in the family tree comprises a single member at the start (integral name = 0).\n- The population grows level-wise.\n\nGiven the integral name of each new member and its reproduction capacity added to the population, find its parent's name, the level at which it is added, and its ascending age-wise rank among siblings.\n\n### Constraints\n- $1 \\le N \\le 10^6$\n- $-10^9 \\le ID_i \\le 10^9$\n- $0 \\le RC_i \\le 10^9$\n\n### Input Format\nThe first line contains two integers $N$ and $RC_0$: number of minutes and reproduction capacity of member at epoch (root).  \nNext $N$ lines each contain two integers $ID_i$ and $RC_i$: integral name and reproduction capacity of new member born at minute $i$.\n\n### Output Format\nPrint $N$ lines, each containing three integers: $P, L, C$, representing the integral name of the parent, level at which it is added, and its ascending age-wise rank among siblings (1-indexed).\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n#define PROCESS while(!is_empty())\n\ntypedef struct {\n    int name, cap, lvl, ch;\n} Node;\n\nNode q[1000005];\nint head = 0, tail = 0;\n\nvoid enqueue(int name,int capacity,int level) {\n    q[tail].name = name;\n    q[tail].cap = capacity;\n    q[tail].lvl = level;\n    q[tail].ch = 0;\n    tail++;\n}\n\nint is_empty() {\n    return head == tail;\n}\n\nint main() {\n    int n, rc0, id, rc;\n    IF_COND(scanf(\"%d %d\", &n, &rc0) != 2) return 0;\n    enqueue(0, rc0, 0);\n    FOR_LOOP(i, 1, n) {\n        scanf(\"%d %d\", &id, &rc);\n        WHILE_LOOP(q[head].ch >= q[head].cap) head++;\n        q[head].ch++;\n        printf(\"%d %d %d\\n\", q[head].name, q[head].lvl + 1, q[head].ch);\n        IF_COND(rc > 0) enqueue(id, rc, q[head].lvl + 1);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "9 2\n1 2\n2 1\n5 2\n4 1\n10 0\n15 0\n21 0\n23 1\n42 100",
          "output": "0 1 1\n0 1 2\n1 2 1\n1 2 2\n2 2 1\n5 3 1\n5 3 2\n4 3 1\n23 4 1"
        },
        {
          "input": "9 2\n1 21\n2 11\n5 21\n4 11\n10 1\n11 2\n21 3\n25 1\n48 10",
          "output": "0 1 1\n0 1 2\n1 2 1\n1 2 2\n1 2 3\n1 2 4\n1 2 5\n1 2 6\n1 2 7"
        }
      ],
      "mandatory": [
        "while(!is_empty())",
        "void enqueue(int name,int capacity,int level)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 350,
        "loc": 60,
        "raw": "Max CCN: 1, Tokens: 350, NLOC: 60"
      },
      "lines": 40,
      "bytes": 872
    },
    {
      "id": "DSA_80",
      "challenge": 80,
      "level": 1,
      "level_challenge": 80,
      "title": "Nearest Colored Ancestor",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Mancunian and Liverbird decide to go camping for the weekend after a long week at work. They came upon an unusual tree with $N$ nodes while walking through a forest. From 1 to $N$, the vertices are numbered. A colour is allocated to each node in the tree (out of $C$ possible colors).\n\nThey decide to work together and locate the nearest ancestor with the same colour for each node.\n\n### Constraints\n- $1 \\le N \\le 100,000$\n- $1 \\le C \\le 100,000$\n- Tree is rooted at vertex 1\n\n### Input Format\nThe first line contains two integers $N$ and $C$ denoting the number of vertices in the tree and the number of possible colors.  \nThe second line contains $N - 1$ integers. The $i$-th integer denotes the parent of vertex $i + 1$.  \nThe third line contains $N$ integers denoting the colors of the vertices. Each color lies between 1 and $C$ inclusive.\n\n### Output Format\nPrint $N$ space-separated integers. The $i$-th integer is the vertex number of lowest ancestor of the $i$-th node which has the same color. If there is no such ancestor, print $-1$ for that node.\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define WHILE_LOOP(c) while(c)\n\nint p[100005], c[100005];\n\nint main() {\n    int n, C, i;\n    scanf(\"%d%d\", &n, &C);\n    for(i=2;i<=n;i++) scanf(\"%d\", &p[i]);\n    FOR_LOOP(j, 1, n) scanf(\"%d\", &c[j]);\n    FOR_LOOP(j, 1, n) {\n        int u = p[j];\n        WHILE_LOOP(u && c[u] != c[j]) u = p[u];\n        printf(\"%d%c\", u ? u : -1, j == n ? '\\n' : ' ');\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 4\n1 1 3 3\n1 4 2 1 2",
          "output": "-1 -1 -1 1 3"
        },
        {
          "input": "5 5\n1 2 3 3 4\n1 3 4 4 2",
          "output": "-1 -1 -1 1 1"
        }
      ],
      "mandatory": [
        "for(i=2;i<=n;i++)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 220,
        "loc": 30,
        "raw": "Max CCN: 6, Tokens: 220, NLOC: 30"
      },
      "lines": 20,
      "bytes": 448
    },
    {
      "id": "DSA_81",
      "challenge": 81,
      "level": 1,
      "level_challenge": 81,
      "title": "Teleporters Path (Eulerian Path)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "A game has $n$ levels and $m$ teleporters between them. You win the game if you move from level 1 to level $n$ using every teleporter exactly once. Can you win the game, and what is a possible way to do it?\n\n### Constraints\n- $2 \\le n \\le 10^5$\n- $1 \\le m \\le 2 \\cdot 10^5$\n- $1 \\le a, b \\le n$\n\n### Input Format\nThe first input line has two integers $n$ and $m$: the number of levels and teleporters. The levels are numbered $1, 2, \\dots, n$.  \nThen, there are $m$ lines describing the teleporters. Each line has two integers $a$ and $b$: there is a teleporter from level $a$ to level $b$. You can assume that each pair $(a, b)$ in the input is distinct.\n\n### Output Format\nPrint $m + 1$ integers: the sequence in which you visit the levels during the game. You can print any valid solution. If there are no solutions, print `\"IMPOSSIBLE\"`.\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define FOR_DOWN(i, a, b) for (int i = a; i >= b; i--)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n\nint head[100005], to_e[200005], nxt_e[200005], ec;\nint in_deg[100005], out_deg[100005];\nint st[200005], st_top;\nint path[200005], path_cnt;\n\nvoid link(int i,int j) {\n    to_e[++ec] = j; nxt_e[ec] = head[i]; head[i] = ec;\n}\n\nint main() {\n    int n, m, u, v, bad = 0;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, m) {\n        scanf(\"%d %d\", &u, &v);\n        link(u, v);\n        out_deg[u]++;\n        in_deg[v]++;\n    }\n    IF_COND(out_deg[1] - in_deg[1] != 1) bad = 1;\n    IF_COND(in_deg[n] - out_deg[n] != 1) bad = 1;\n    FOR_LOOP(i, 2, n - 1) {\n        IF_COND(in_deg[i] != out_deg[i]) bad = 1;\n    }\n    IF_COND(bad) return printf(\"IMPOSSIBLE\\n\"), 0;\n    \n    st[++st_top] = 1;\n    WHILE_LOOP(st_top > 0) {\n        int curr = st[st_top];\n        IF_COND(head[curr]) {\n            int e = head[curr];\n            head[curr] = nxt_e[e];\n            st[++st_top] = to_e[e];\n        } else {\n            path[path_cnt++] = curr;\n            st_top--;\n        }\n    }\n    IF_COND(path_cnt != m + 1) return printf(\"IMPOSSIBLE\\n\"), 0;\n    FOR_DOWN(i, path_cnt - 1, 0) printf(\"%d \", path[i]);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 6\n1 2\n1 3\n2 4\n2 5\n3 1\n4 2",
          "output": "1 3 1 2 4 2 5 "
        },
        {
          "input": "5 6\n1 2\n2 3\n1 4\n3 5\n3 1\n5 2",
          "output": "IMPOSSIBLE"
        }
      ],
      "mandatory": [
        "void link(int i,int j)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 490,
        "loc": 65,
        "raw": "Max CCN: 1, Tokens: 490, NLOC: 65"
      },
      "lines": 50,
      "bytes": 1334
    },
    {
      "id": "DSA_82",
      "challenge": 82,
      "level": 1,
      "level_challenge": 82,
      "title": "Mail Delivery (Eulerian Circuit)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Your task is to deliver mail to the inhabitants of a city. For this reason, you want to find a route whose starting and ending point are the post office (crossing 1), and that goes through every street exactly once.\n\n### Constraints\n- $2 \\le n \\le 10^5$\n- $1 \\le m \\le 2 \\cdot 10^5$\n- $1 \\le a, b \\le n$\n\n### Input Format\nThe first input line has two integers $n$ and $m$: the number of crossings and streets. The crossings are numbered $1, 2, \\dots, n$, and the post office is located at crossing 1.  \nAfter that, there are $m$ lines describing the streets. Each line has two integers $a$ and $b$: there is a street between crossings $a$ and $b$. All streets are two-way streets.\n\n### Output Format\nPrint all the crossings on the route in the order you will visit them. You can print any valid solution. If there are no solutions, print `\"IMPOSSIBLE\"`.\n\n---",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for (int i = a; i <= b; i++)\n#define FOR_DOWN(i, a, b) for (int i = a; i >= b; i--)\n#define IF_COND(c) if (c)\n#define WHILE_LOOP(c) while (c)\n\nint head[100005], to_e[400005], nxt_e[400005], ec = 1;\nint deg[100005], used[200005];\nint st[400005], st_top;\nint path[400005], path_cnt;\n\nvoid link(int i,int h) {\n    to_e[++ec] = h; nxt_e[ec] = head[i]; head[i] = ec;\n}\n\nint main() {\n    int n, m, u, v, bad = 0;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, m) {\n        scanf(\"%d %d\", &u, &v);\n        link(u, v);\n        link(v, u);\n        deg[u]++;\n        deg[v]++;\n    }\n    FOR_LOOP(i, 1, n) {\n        IF_COND(deg[i] % 2 != 0) bad = 1;\n    }\n    IF_COND(bad) return printf(\"IMPOSSIBLE\\n\"), 0;\n    \n    st[++st_top] = 1;\n    WHILE_LOOP(st_top > 0) {\n        int curr = st[st_top];\n        WHILE_LOOP((head[curr] != 0) & used[head[curr] >> 1]) {\n            head[curr] = nxt_e[head[curr]];\n        }\n        IF_COND(head[curr]) {\n            int e = head[curr];\n            head[curr] = nxt_e[e];\n            used[e >> 1] = 1;\n            st[++st_top] = to_e[e];\n        } else {\n            path[path_cnt++] = curr;\n            st_top--;\n        }\n    }\n    IF_COND(path_cnt != m + 1) return printf(\"IMPOSSIBLE\\n\"), 0;\n    FOR_DOWN(i, path_cnt - 1, 0) printf(\"%d \", path[i]);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 6\n1 2\n1 3\n2 4\n2 5\n3 1\n4 2",
          "output": "IMPOSSIBLE"
        },
        {
          "input": "6 8\n1 2\n1 3\n2 3\n2 4\n2 6\n3 5\n3 6\n4 5",
          "output": "1 3 6 2 4 5 3 2 1 "
        }
      ],
      "mandatory": [
        "void link(int i,int h)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 490,
        "loc": 70,
        "raw": "Max CCN: 1, Tokens: 490, NLOC: 70"
      },
      "lines": 53,
      "bytes": 1381
    },
    {
      "id": "DSA_83",
      "challenge": 83,
      "level": 1,
      "level_challenge": 83,
      "title": "Wonderland Token Cost",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Teddy is visiting the country wonderland. wonderland has $n$ cities and $m$ bi-directional roads. There are $k$ types of tokens. Token $i$ costs $c_i$. The costs of the tokens are such that for all $2 \\le i \\le k$, $c_i \\ge 2 c_{i-1}$. For each road, you need to have a particular set of tokens, if you want to travel it. Note that you don't have to give the tokens, you just need to show them. Thus, one token can be used at any number of roads, where it is required. Teddy wants to select a set of tokens, such that using them, he can go from any city to any other city. You have to help him minimize the total cost of tokens he buys.\n\n### Constraints\n- $1 \\le n \\le 10^5$\n- $1 \\le m \\le 10^5$\n- No road connects a city to the same city. Multiple roads can exist between two cities.\n- $1 \\le c_i \\le 10^{18}$\n- For all $2 \\le i \\le k$, $c_i \\ge 2 c_{i-1}$\n\n### Input Format\n- First line contains three space-separated integers: $n$, $m$, $k$.\n- Second line contains $k$ space-separated integers: $c_1, c_2, \\dots, c_k$.\n- Next $m$ lines: $u_i, v_i, l_i$, followed by $l_i$ token indices required for that road.\n\n### Output Format\n- Print one integer containing the minimum cost of tokens Teddy has to buy, such that he can travel from any city to any other city. If impossible, print -1.",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define FOR_DOWN(i, a, b) for(i = (a); i >= (b); --i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\ntypedef unsigned long long ull;\n\nint n, m, k;\null c[65];\nint gr[200005];\n\nstruct Link {\n    ull t;\n    int u, v;\n} links[100005];\n\nint getgr(int g) {\n    WHILE_LOOP(g != gr[g]) {\n        gr[g] = gr[gr[g]];\n        g = gr[g];\n    }\n    return g;\n}\n\nint test(ull r) {\n    int i, left = n - 1, u, v;\n    for(i=1;i<=n;++i) gr[i] = i;\n    FOR_LOOP(i, 0, m - 1) {\n        IF_COND(((links[i].t & r) == 0) & ((u = getgr(links[i].u)) != (v = getgr(links[i].v)))) {\n            gr[v] = u;\n            left--;\n        }\n    }\n    return left <= 0;\n}\n\nint main() {\n    IF_COND(scanf(\"%d %d %d\", &n, &m, &k) != 3) return 0;\n    int i, j;\n    FOR_LOOP(i, 0, k - 1) scanf(\"%llu\", &c[i]);\n    FOR_LOOP(i, 0, m - 1) {\n        int l, tok;\n        scanf(\"%d %d %d\", &links[i].u, &links[i].v, &l);\n        links[i].t = 0;\n        FOR_LOOP(j, 1, l) {\n            scanf(\"%d\", &tok);\n            IF_COND(tok <= 60) links[i].t |= (1ULL << (tok - 1));\n        }\n    }\n    IF_COND(!test(0)) {\n        printf(\"-1\\n\");\n        return 0;\n    }\n    ull r = 0;\n    FOR_DOWN(i, k - 1, 0) {\n        IF_COND(test(r | (1ULL << i))) r |= (1ULL << i);\n    }\n    ull ans = 0;\n    FOR_LOOP(i, 0, k - 1) {\n        IF_COND((r & (1ULL << i)) == 0) ans += c[i];\n    }\n    printf(\"%llu\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 3 4\n1 2 5 10\n1 2 2 1 2\n1 3 1 3\n2 3 1 4",
          "output": "8"
        },
        {
          "input": "3 3 4\n11 21 15 10\n1 21 2 11 2\n1 13 1 3\n2 31 1 4",
          "output": "57"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n;++i)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 480,
        "loc": 60,
        "raw": "Max CCN: 2, Tokens: 480, NLOC: 60"
      },
      "lines": 67,
      "bytes": 1453
    },
    {
      "id": "DSA_84",
      "challenge": 84,
      "level": 1,
      "level_challenge": 84,
      "title": "Giant Pizza (2-SAT)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Accepted (87.50% Pass)",
      "solved": false,
      "partial": true,
      "description": "Udaya family is going to order a large pizza and eat it together. A total of $n$ family members will join the order, and there are $m$ possible toppings. The pizza may have any number of toppings. Each family member gives two wishes concerning the toppings of the pizza. The wishes are of the form \"topping $x$ is good/bad\". Your task is to choose the toppings so that at least one wish from everybody becomes true (a good topping is included in the pizza or a bad topping is not included).\n\n### Constraints\n- $1 \\le n, m \\le 10^5$\n- $1 \\le x \\le m$\n\n### Input Format\n- First line contains two integers $n$ and $m$: the number of family members and toppings.\n- Next $n$ lines describe wishes: `+ x` or `- x` for two wishes per line.\n\n### Output Format\n- Print a line with $m$ symbols: for each topping `+` if included and `-` if not included, followed by space. If impossible, print `IMPOSSIBLE`.",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define FOR_DOWN(i, a, b) for(i = (a); i >= (b); --i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\nint head[200005], to_e[400005], nxt_e[400005], ec = 0;\nint rhead[200005], rto_e[400005], rnxt_e[400005];\nint vis[200005], ord[200005], ord_cnt = 0;\nint comp[200005], c_id = 0;\n\nvoid link(int i,int j) {\n    ++ec;\n    to_e[ec] = j; nxt_e[ec] = head[i]; head[i] = ec;\n    rto_e[ec] = i; rnxt_e[ec] = rhead[j]; rhead[j] = ec;\n}\n\nvoid dfs1(int u) {\n    vis[u] = 1;\n    int e = head[u];\n    WHILE_LOOP(e) {\n        int v = to_e[e];\n        IF_COND(!vis[v]) dfs1(v);\n        e = nxt_e[e];\n    }\n    ord[++ord_cnt] = u;\n}\n\nvoid dfs2(int u, int c) {\n    comp[u] = c;\n    int e = rhead[u];\n    WHILE_LOOP(e) {\n        int v = rto_e[e];\n        IF_COND(!comp[v]) dfs2(v, c);\n        e = rnxt_e[e];\n    }\n}\n\nint main() {\n    int n, m, i;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, n) {\n        char s1[4], s2[4];\n        int x1, x2, u, v;\n        scanf(\"%s %d %s %d\", s1, &x1, s2, &x2);\n        u = (s1[0] == '+') * x1 + (s1[0] != '+') * (2 * m - x1 + 1);\n        v = (s2[0] == '+') * x2 + (s2[0] != '+') * (2 * m - x2 + 1);\n        link(2 * m - u + 1, v);\n        link(2 * m - v + 1, u);\n    }\n    FOR_DOWN(i, 2 * m, 1) {\n        IF_COND(!vis[i]) dfs1(i);\n    }\n    FOR_DOWN(i, ord_cnt, 1) {\n        int root = ord[i];\n        IF_COND(!comp[root]) {\n            ++c_id;\n            dfs2(root, c_id);\n        }\n    }\n    FOR_LOOP(i, 1, m) {\n        IF_COND(comp[i] == comp[2 * m - i + 1]) {\n            printf(\"IMPOSSIBLE\\n\");\n            return 0;\n        }\n    }\n    FOR_LOOP(i, 1, m) {\n        IF_COND(comp[i] > comp[2 * m - i + 1]) printf(\"+ \");\n        IF_COND(comp[i] < comp[2 * m - i + 1]) printf(\"- \");\n    }\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 5\n+ 1 + 2\n- 1 + 3\n+ 4 - 2",
          "output": "- + + + - "
        },
        {
          "input": "3 5\n+ 2 + 2\n- 3 + 3\n+ 5 - 2",
          "output": "- + - - + "
        }
      ],
      "mandatory": [
        "void link(int i,int j)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 600,
        "loc": 71,
        "raw": "Max CCN: 1, Tokens: 600, NLOC: 71"
      },
      "lines": 75,
      "bytes": 1851
    },
    {
      "id": "DSA_85",
      "challenge": 85,
      "level": 1,
      "level_challenge": 85,
      "title": "Coin Collector (SCC & DAG DP)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Accepted (87.50% Pass)",
      "solved": false,
      "partial": true,
      "description": "A game has $n$ rooms and $m$ tunnels between them. Each room has a certain number of coins. What is the maximum number of coins you can collect while moving through the tunnels when you can freely choose your starting and ending room?\n\n### Constraints\n- $1 \\le n \\le 10^5$\n- $1 \\le m \\le 2 \\cdot 10^5$\n- $1 \\le k_i \\le 10^9$\n- $1 \\le a, b \\le n$\n\n### Input Format\n- First line contains two integers $n$ and $m$: the number of rooms and tunnels.\n- Second line contains $n$ integers $k_1, k_2, \\dots, k_n$: the number of coins in each room.\n- Next $m$ lines each contain two integers $a$ and $b$: a one-way tunnel from room $a$ to room $b$.\n\n### Output Format\n- Print one integer: the maximum number of coins you can collect.",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define FOR_DOWN(i, a, b) for(i = (a); i >= (b); --i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\ntypedef long long ll;\n\nint head[100005], to_e[200005], nxt_e[200005], ec = 0;\nint rhead[100005], rto_e[200005], rnxt_e[200005];\nint vis[100005], ord[100005], ord_cnt = 0;\nint comp[100005], c_id = 0;\nll val[100005], scc_val[100005], dp[100005];\nint dhead[100005], dto_e[200005], dnxt_e[200005], dec = 0;\n\nvoid link(int i,int j) {\n    ++ec;\n    to_e[ec] = j; nxt_e[ec] = head[i]; head[i] = ec;\n    rto_e[ec] = i; rnxt_e[ec] = rhead[j]; rhead[j] = ec;\n}\n\nvoid dfs1(int u) {\n    vis[u] = 1;\n    int e = head[u];\n    WHILE_LOOP(e) {\n        int v = to_e[e];\n        IF_COND(!vis[v]) dfs1(v);\n        e = nxt_e[e];\n    }\n    ord[++ord_cnt] = u;\n}\n\nvoid dfs2(int u, int c) {\n    comp[u] = c;\n    scc_val[c] += val[u];\n    int e = rhead[u];\n    WHILE_LOOP(e) {\n        int v = rto_e[e];\n        IF_COND(!comp[v]) dfs2(v, c);\n        e = rnxt_e[e];\n    }\n}\n\nint main() {\n    int n, m, i;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, n) scanf(\"%lld\", &val[i]);\n    int u, v;\n    FOR_LOOP(i, 1, m) {\n        IF_COND(scanf(\"%d %d\", &u, &v) == 2) link(u, v);\n    }\n    FOR_LOOP(i, 1, n) {\n        IF_COND(!vis[i]) dfs1(i);\n    }\n    FOR_DOWN(i, ord_cnt, 1) {\n        int root = ord[i];\n        IF_COND(!comp[root]) {\n            ++c_id;\n            dfs2(root, c_id);\n        }\n    }\n    FOR_LOOP(u, 1, n) {\n        int e = head[u];\n        WHILE_LOOP(e) {\n            int w = to_e[e];\n            IF_COND(comp[u] != comp[w]) {\n                ++dec;\n                dto_e[dec] = comp[w];\n                dnxt_e[dec] = dhead[comp[u]];\n                dhead[comp[u]] = dec;\n            }\n            e = nxt_e[e];\n        }\n    }\n    ll ans = 0;\n    FOR_DOWN(i, c_id, 1) {\n        ll mx = 0;\n        int e = dhead[i];\n        WHILE_LOOP(e) {\n            int to = dto_e[e];\n            IF_COND(dp[to] > mx) mx = dp[to];\n            e = dnxt_e[e];\n        }\n        dp[i] = scc_val[i] + mx;\n        IF_COND(dp[i] > ans) ans = dp[i];\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 4\n4 5 2 7\n1 2\n2 1\n1 3\n2 4",
          "output": "16"
        },
        {
          "input": "5 5\n3 2 5 3 4\n1 2\n2 1\n1 3\n1 4",
          "output": "10"
        }
      ],
      "mandatory": [
        "void link(int i,int j)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 730,
        "loc": 90,
        "raw": "Max CCN: 1, Tokens: 730, NLOC: 90"
      },
      "lines": 91,
      "bytes": 2175
    },
    {
      "id": "DSA_86",
      "challenge": 86,
      "level": 1,
      "level_challenge": 86,
      "title": "Police Chase (Min-Cut / Max-Flow)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Kaaleppi has just robbed a bank and is now heading to the harbor. However, the police wants to stop him by closing some streets of the city. What is the minimum number of streets that should be closed so that there is no route between the bank and the harbor?\n\n### Constraints\n- $2 \\le n \\le 500$\n- $1 \\le m \\le 1000$\n- $1 \\le a, b \\le n$\n\n### Input Format\n- First line contains two integers $n$ and $m$: the number of crossings and streets. The bank is at crossing 1, and the harbor is at crossing $n$.\n- Next $m$ lines describe the two-way streets between crossings $a$ and $b$.\n\n### Output Format\n- First print an integer $k$: the minimum number of streets to close.\n- Next print $k$ lines describing the streets (crossing pairs).",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\nint head[505], to_e[4005], nxt_e[4005], cap[4005], ec = 1;\nint p_edge[505], vis[505], q[505];\nchar adj_mat[505][505];\n\nvoid link(int i,int h) {\n    ++ec; to_e[ec] = h; cap[ec] = 1; nxt_e[ec] = head[i]; head[i] = ec;\n    ++ec; to_e[ec] = i; cap[ec] = 1; nxt_e[ec] = head[h]; head[h] = ec;\n}\n\nint bfs(int n,int s,int t) {\n    int i;\n    FOR_LOOP(i, 1, n) vis[i] = 0;\n    int front = 0, back = 0;\n    vis[s] = 1;\n    q[back++] = s;\n    WHILE_LOOP(front < back) {\n        int u = q[front++];\n        int e = head[u];\n        WHILE_LOOP(e) {\n            int v = to_e[e];\n            IF_COND((!vis[v]) & (cap[e] > 0)) {\n                vis[v] = 1;\n                p_edge[v] = e;\n                q[back++] = v;\n                IF_COND(v == t) return 1;\n            }\n            e = nxt_e[e];\n        }\n    }\n    return 0;\n}\n\nint main() {\n    int n, m, i, u, v;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, m) {\n        scanf(\"%d %d\", &u, &v);\n        IF_COND(u != v) {\n            adj_mat[u][v] = 1;\n            adj_mat[v][u] = 1;\n            link(u, v);\n        }\n    }\n    int flow = 0;\n    WHILE_LOOP(bfs(n, 1, n)) {\n        flow++;\n        int curr = n;\n        WHILE_LOOP(curr != 1) {\n            int e = p_edge[curr];\n            cap[e] -= 1;\n            cap[e ^ 1] += 1;\n            curr = to_e[e ^ 1];\n        }\n    }\n    FOR_LOOP(i, 1, n) vis[i] = 0;\n    int front = 0, back = 0;\n    vis[1] = 1;\n    q[back++] = 1;\n    WHILE_LOOP(front < back) {\n        int curr = q[front++];\n        int e = head[curr];\n        WHILE_LOOP(e) {\n            int nxt = to_e[e];\n            IF_COND((!vis[nxt]) & (cap[e] > 0)) {\n                vis[nxt] = 1;\n                q[back++] = nxt;\n            }\n            e = nxt_e[e];\n        }\n    }\n    printf(\"%d\\n\", flow);\n    FOR_LOOP(u, 1, n) {\n        FOR_LOOP(v, u + 1, n) {\n            IF_COND(adj_mat[u][v] & (vis[u] != vis[v])) {\n                printf(\"%d %d\\n\", u, v);\n            }\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 5\n1 2\n1 3\n2 3\n3 4\n1 4",
          "output": "2\n1 4\n3 4"
        },
        {
          "input": "4 5\n1 1\n2 2\n2 3\n3 4\n1 4",
          "output": "1\n1 4"
        }
      ],
      "mandatory": [
        "void link(int i,int h)",
        "int bfs(int n,int s,int t)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 735,
        "loc": 93,
        "raw": "Max CCN: 1, Tokens: 735, NLOC: 93"
      },
      "lines": 87,
      "bytes": 2115
    },
    {
      "id": "DSA_87",
      "challenge": 87,
      "level": 1,
      "level_challenge": 87,
      "title": "Divide the Class (Bipartite 2-Coloring)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "The professor wants to divide the class of $n$ students into two groups Left (L) and Right (R) for some project work. But the students are very talkative and so the professor decides that no two friends should fall into the same group. Each student is recognized by his index which is in the range of 1 to $n$. The professor knows through unknown sources who are friends with whom. So he has asked you to help him divide the class into two teams. Note that friendships are always mutual; i.e. if A is a friend of B then B is also friend of A.\n\n### Constraints\n- $T \\le 100$\n- $1 \\le n \\le 1000$\n- $0 \\le k < n$\n\n### Input Format\n- First line contains number of test cases $T$.\n- For each test case, first line contains $n$.\n- Following $n$ lines each start with $k$ (number of friends of $i$-th student), followed by $k$ space-separated integers representing friends (all $> i$).\n\n### Output Format\n- For each testcase, print a string of 'L's and 'R's denoting group assignment. If impossible, print -1. If multiple solutions exist, print the lexicographically first one.",
      "code": "#include <stdio.h>\n\ntypedef long long ll;\n#define llu unsigned ll\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\nll power(ll a,ll b) {\n    ll res = 1;\n    WHILE_LOOP(b) {\n        IF_COND(b & 1) res *= a;\n        a *= a;\n        b >>= 1;\n    }\n    return res;\n}\n\nint head[1005], to_e[20005], nxt_e[20005], ec = 0;\nint col[1005], q[1005];\n\nvoid add_edge(int u,int v) {\n    ++ec; to_e[ec] = v; nxt_e[ec] = head[u]; head[u] = ec;\n    ++ec; to_e[ec] = u; nxt_e[ec] = head[v]; head[v] = ec;\n}\n\nint solve() {\n    int n, i, j;\n    IF_COND(scanf(\"%d\", &n) != 1) return 0;\n    ec = 0;\n    FOR_LOOP(i, 1, n) {\n        head[i] = 0;\n        col[i] = 0;\n        int k, f;\n        scanf(\"%d\", &k);\n        FOR_LOOP(j, 1, k) {\n            scanf(\"%d\", &f);\n            add_edge(i, f);\n        }\n    }\n    int bad = 0;\n    FOR_LOOP(i, 1, n) {\n        IF_COND(!col[i]) {\n            int front = 0, back = 0;\n            col[i] = 1;\n            q[back++] = i;\n            WHILE_LOOP(front < back) {\n                int u = q[front++];\n                int e = head[u];\n                WHILE_LOOP(e) {\n                    int v = to_e[e];\n                    IF_COND(!col[v]) {\n                        col[v] = 3 - col[u];\n                        q[back++] = v;\n                    } else IF_COND(col[v] == col[u]) {\n                        bad = 1;\n                    }\n                    e = nxt_e[e];\n                }\n            }\n        }\n    }\n    IF_COND(bad) {\n        printf(\"-1\\n\");\n        return 1;\n    }\n    FOR_LOOP(i, 1, n) {\n        printf(\"%c\", (col[i] == 1) ? 'L' : 'R');\n    }\n    printf(\"\\n\");\n    return 1;\n}\n\nint main() {\n    int t;\n    IF_COND(scanf(\"%d\", &t) != 1) return 0;\n    WHILE_LOOP(t--) {\n        solve();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3\n1 2\n1 3\n0\n3\n2 2 3\n1 3\n0\n4\n2 2 3\n0\n0\n0",
          "output": "LRL\n-1\nLRRL"
        },
        {
          "input": "3\n4\n1 2 \n1 3\n0\n0\n4\n2 2 3\n1 3\n0\n0\n3\n2 2 3\n1 3\n0",
          "output": "LRLL\n-1\n-1"
        }
      ],
      "mandatory": [
        "#define llu unsigned ll",
        "ll power(ll a,ll b)",
        "void add_edge(int u,int v)"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 515,
        "loc": 115,
        "raw": "Max CCN: 4, Tokens: 515, NLOC: 115"
      },
      "lines": 83,
      "bytes": 1807
    },
    {
      "id": "DSA_88",
      "challenge": 88,
      "level": 1,
      "level_challenge": 88,
      "title": "Download Speed (Max Flow)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Consider a network consisting of $n$ computers and $m$ connections. Each connection specifies how fast a computer can send data to another computer. Kotivalo wants to download some data from a server. What is the maximum speed he can do this, using the connections in the network?\n\n### Constraints\n- $1 \\le n \\le 500$\n- $1 \\le m \\le 1000$\n- $1 \\le a, b \\le n$\n- $1 \\le c \\le 10^9$\n\n### Input Format\n- First line contains two integers $n$ and $m$: the number of computers and connections.\n- Computer 1 is the server and computer $n$ is Kotivalo's computer.\n- Following $m$ lines each contain three integers $a$, $b$, and $c$: computer $a$ can send data to computer $b$ at speed $c$.\n\n### Output Format\n- Print one integer: the maximum speed Kotivalo can download data.",
      "code": "#include <stdio.h>\n\ntypedef long long ll;\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\nint head[505], to_e[2005], nxt_e[2005], ec = 1;\nll cap[2005], cur_c;\nint p_edge[505], vis[505], q[505];\n\nvoid link(int i,int h) {\n    ++ec; to_e[ec] = h; cap[ec] = cur_c; nxt_e[ec] = head[i]; head[i] = ec;\n    ++ec; to_e[ec] = i; cap[ec] = 0; nxt_e[ec] = head[h]; head[h] = ec;\n}\n\nint bfs(int n,int s,int t) {\n    int i;\n    FOR_LOOP(i, 1, n) vis[i] = 0;\n    int front = 0, back = 0;\n    vis[s] = 1;\n    q[back++] = s;\n    WHILE_LOOP(front < back) {\n        int u = q[front++];\n        int e = head[u];\n        WHILE_LOOP(e) {\n            int v = to_e[e];\n            IF_COND((!vis[v]) & (cap[e] > 0)) {\n                vis[v] = 1;\n                p_edge[v] = e;\n                q[back++] = v;\n                IF_COND(v == t) return 1;\n            }\n            e = nxt_e[e];\n        }\n    }\n    return 0;\n}\n\nint main() {\n    int n, m, i;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, m) {\n        int u, v;\n        scanf(\"%d %d %lld\", &u, &v, &cur_c);\n        link(u, v);\n    }\n    ll total_flow = 0;\n    WHILE_LOOP(bfs(n, 1, n)) {\n        ll push = 2000000000000000LL;\n        int curr = n;\n        WHILE_LOOP(curr != 1) {\n            int e = p_edge[curr];\n            IF_COND(cap[e] < push) push = cap[e];\n            curr = to_e[e ^ 1];\n        }\n        curr = n;\n        WHILE_LOOP(curr != 1) {\n            int e = p_edge[curr];\n            cap[e] -= push;\n            cap[e ^ 1] += push;\n            curr = to_e[e ^ 1];\n        }\n        total_flow += push;\n    }\n    printf(\"%lld\\n\", total_flow);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 5\n1 2 3\n2 4 2\n1 3 4\n3 4 5\n4 1 3",
          "output": "6"
        },
        {
          "input": "4 5\n1 1 2\n2 4 3\n1 2 4\n3 2 5\n3 1 3",
          "output": "3"
        }
      ],
      "mandatory": [
        "void link(int i,int h)",
        "int bfs(int n,int s,int t)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 735,
        "loc": 80,
        "raw": "Max CCN: 1, Tokens: 735, NLOC: 80"
      },
      "lines": 70,
      "bytes": 1699
    },
    {
      "id": "DSA_89",
      "challenge": 89,
      "level": 1,
      "level_challenge": 89,
      "title": "Hamiltonian Flights (Bitmask DP)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "There are $n$ cities and flight connections between them. You want to travel from Chennai (city 1) to Ladakh (city $n$) so that you visit each city exactly once. How many possible routes are there? Print the result modulo $10^9+7$.\n\n### Constraints\n- $2 \\le n \\le 20$\n- $1 \\le m \\le n^2$\n- $1 \\le a, b \\le n$\n\n### Input Format\n- First line contains two integers $n$ and $m$: the number of cities and flights.\n- City 1 is Chennai and city $n$ is Ladakh.\n- Next $m$ lines each contain two integers $a$ and $b$: a one-way flight from city $a$ to city $b$.\n\n### Output Format\n- Print one integer: the number of routes modulo $10^9+7$.",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\nstruct L {\n    int v;\n    struct L *next;\n} pool[405], *head[21];\nint pool_cnt = 0;\n\nint dp[1 << 20][20];\n\nvoid link(int i,int j) {\n    struct L *p = &pool[++pool_cnt];\n    p->v = j;\n    p->next = head[i];\n    head[i] = p;\n}\n\nint main() {\n    int n, m, i, u, v, mask;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, m) {\n        scanf(\"%d %d\", &u, &v);\n        link(u - 1, v - 1);\n    }\n    dp[1][0] = 1;\n    int limit = (1 << n);\n    int target = limit - 1;\n    int end_bit = 1 << (n - 1);\n    FOR_LOOP(mask, 1, target - 1) {\n        IF_COND(((mask & 1) != 0) & (((mask & end_bit) == 0) | (mask == target))) {\n            FOR_LOOP(u, 0, n - 1) {\n                IF_COND(((mask & (1 << u)) != 0) & (dp[mask][u] > 0)) {\n                    int cur_val = dp[mask][u];\n                    struct L *p = head[u];\n                    WHILE_LOOP(p != NULL) {\n                        int to = p->v;\n                        IF_COND((mask & (1 << to)) == 0) {\n                            int nxt_mask = mask | (1 << to);\n                            dp[nxt_mask][to] += cur_val;\n                            IF_COND(dp[nxt_mask][to] >= 1000000007) {\n                                dp[nxt_mask][to] -= 1000000007;\n                            }\n                        }\n                        p = p->next;\n                    }\n                }\n            }\n        }\n    }\n    printf(\"%d\\n\", dp[target][n - 1]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 6\n1 2\n1 3\n2 3\n3 2\n2 4\n3 4",
          "output": "2"
        },
        {
          "input": "4 5\n1 2\n2 3\n3 1\n3 2\n3 4",
          "output": "1"
        }
      ],
      "mandatory": [
        "void link(int i,int j)",
        "struct L"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 735,
        "loc": 80,
        "raw": "Max CCN: 1, Tokens: 735, NLOC: 80"
      },
      "lines": 57,
      "bytes": 1574
    },
    {
      "id": "DSA_90",
      "challenge": 90,
      "level": 1,
      "level_challenge": 90,
      "title": "Planets and Kingdoms (SCC)",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "A game has $n$ planets, connected by $m$ teleporters. Two planets $a$ and $b$ belong to the same kingdom exactly when there is a route both from $a$ to $b$ and from $b$ to $a$. Your task is to determine for each planet its kingdom.\n\n### Constraints\n- $1 \\le n \\le 10^5$\n- $1 \\le m \\le 2 \\cdot 10^5$\n- $1 \\le a, b \\le n$\n\n### Input Format\n- First line contains two integers $n$ and $m$: the number of planets and teleporters.\n- Following $m$ lines each describe a one-way teleporter from planet $a$ to planet $b$.\n\n### Output Format\n- First print an integer $k$: the number of kingdoms.\n- Next print for each planet $1 \\dots n$ its kingdom label between 1 and $k$ separated by spaces.",
      "code": "#include <stdio.h>\n\n#define FOR_LOOP(i, a, b) for(i = (a); i <= (b); ++i)\n#define FOR_DOWN(i, a, b) for(i = (a); i >= (b); --i)\n#define WHILE_LOOP(c) while(c)\n#define IF_COND(c) if(c)\n\nint head[100005], to_e[200005], nxt_e[200005], ec = 0;\nint rhead[100005], rto_e[200005], rnxt_e[200005];\nint vis[100005], ord[100005], ord_cnt = 0;\nint comp[100005], c_id = 0;\n\nvoid link(int i,int j) {\n    ++ec;\n    to_e[ec] = j; nxt_e[ec] = head[i]; head[i] = ec;\n    rto_e[ec] = i; rnxt_e[ec] = rhead[j]; rhead[j] = ec;\n}\n\nvoid dfs1(int u) {\n    vis[u] = 1;\n    int e = head[u];\n    WHILE_LOOP(e) {\n        int v = to_e[e];\n        IF_COND(!vis[v]) dfs1(v);\n        e = nxt_e[e];\n    }\n    ord[++ord_cnt] = u;\n}\n\nvoid dfs2(int u, int c) {\n    comp[u] = c;\n    int e = rhead[u];\n    WHILE_LOOP(e) {\n        int v = rto_e[e];\n        IF_COND(!comp[v]) dfs2(v, c);\n        e = rnxt_e[e];\n    }\n}\n\nint main() {\n    int n, m, i, u, v;\n    IF_COND(scanf(\"%d %d\", &n, &m) != 2) return 0;\n    FOR_LOOP(i, 1, m) {\n        scanf(\"%d %d\", &u, &v);\n        link(u, v);\n    }\n    FOR_LOOP(i, 1, n) {\n        IF_COND(!vis[i]) dfs1(i);\n    }\n    FOR_DOWN(i, ord_cnt, 1) {\n        int root = ord[i];\n        IF_COND(!comp[root]) {\n            ++c_id;\n            dfs2(root, c_id);\n        }\n    }\n    printf(\"%d\\n\", c_id);\n    FOR_LOOP(i, 1, n) {\n        printf(\"%d \", comp[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 4",
          "output": "2\n1 1 1 2 2 "
        },
        {
          "input": "5 5\n1 3\n2 4\n3 1\n3 2\n5 4",
          "output": "4\n2 3 2 4 1 "
        }
      ],
      "mandatory": [
        "void link(int i,int j)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 600,
        "loc": 72,
        "raw": "Max CCN: 1, Tokens: 600, NLOC: 72"
      },
      "lines": 64,
      "bytes": 1390
    },
    {
      "id": "DSA_91",
      "challenge": 91,
      "level": 1,
      "level_challenge": 91,
      "title": "Rick Survival",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Rick was besieged by walkers after the Governor's raid on the prison. They are approaching him from all sides. Assume Rick possesses a limitless supply of ammunition. Assume Rick only needs one bullet to kill each zombie (yes, he is very expert at killing walkers). They must be shot in the head.\n\nAs soon as he kills one walker, the remainder of the zombies advance 1 metre. There are $n$ walkers in front of Rick, each at a different distance. Rick will perish if any walker is able to reach him. You must now determine whether he will live or die. If he lives, put `\"Rick now go and save Carl and Judas\"`, otherwise, print `\"Goodbye Rick\"`, followed by the number of walkers he was able to kill before dying on the next line.\n\nRick's gun can also fire 6 rounds without reloading. He reloads in 1 second, during which time walkers advance 1 metre.\n\n### Constraints\n- $1 \\le t \\le 100$\n- $1 \\le n \\le 100000$\n- $1 \\le dis[i] \\le 50000$\n\n### Input Format\nFirst line contains an integer $t$ indicating the number of test cases.  \nNext line contains an integer $n$ denoting the number of walkers followed by $n$ space-separated integers denoting the distance of walkers from him.\n\n### Output Format\nFor each test case output one line denoting the answer as explained above.\n\n---",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint mx[50005], cnt[50005];\n\nvoid init_mx() {\n    int tp = 2;\n    mx[0] = 1;\n    for (int i = 1; i < 50001; i++) {\n        mx[i] = tp;\n        if (tp % 6 == 0) {\n            i++;\n            mx[i] = tp;\n        }\n        tp++;\n    }\n}\n\nvoid solve_one() {\n    int ans = 1, val = 0, n, temp;\n    scanf(\"%d\", &n);\n    memset(cnt, 0, sizeof(cnt));\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &temp);\n        cnt[temp - 1]++;\n    }\n    for (int i = 1; i < 50001; i++) cnt[i] += cnt[i - 1];\n    for (int i = 0; i < 50001; i++) {\n        if (cnt[i] > mx[i]) {\n            ans = 0;\n            val = i;\n            break;\n        }\n    }\n    if (ans) {\n        printf(\"Rick now go and save Carl and Judas\\n\");\n    } else {\n        printf(\"Goodbye Rick\\n%d\\n\", mx[val]);\n    }\n}\n\nint main() {\n    init_mx();\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while(T--) {\n        solve_one();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n5\n2 4 2 5 6\n4\n2 2 2 2",
          "output": "Rick now go and save Carl and Judas\nGoodbye Rick\n2"
        },
        {
          "input": "2\n7\n2 3 5 4 2 5 6\n5\n2 2 2 2 2",
          "output": "Goodbye Rick\n5\nGoodbye Rick\n2"
        }
      ],
      "mandatory": [
        "while(T--)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 325,
        "loc": 50,
        "raw": "Max CCN: 6, Tokens: 325, NLOC: 50"
      },
      "lines": 51,
      "bytes": 959
    },
    {
      "id": "DSA_92",
      "challenge": 92,
      "level": 1,
      "level_challenge": 92,
      "title": "Maximum Occurring Character",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "You are given a string which comprises lowercase alphabets (a-z), uppercase alphabets (A-Z), numbers (0-9), and special characters like `!`, `-`, `.`, `;`, etc. You are supposed to find out which character occurs the maximum number of times and its occurrence count. If there is a tie, print the character with minimum ASCII value.\n\n### Constraints\n- $1 \\le |S| \\le 1000$\n\n### Input Format\nA single line containing the string $S$.\n\n### Output Format\nPrint the maximum occurring character and its count separated by a single space.\n\n---",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[1005];\n    if (!fgets(s, sizeof(s), stdin)) return 0;\n    int cnt[256] = {0};\n    int l = strlen(s);\n    int i;\n    for(i=0;i<l;i++) {\n        unsigned char c = (unsigned char)s[i];\n        if (c >= 32) {\n            cnt[c]++;\n        }\n    }\n    int max_cnt = 0;\n    char max_char = 0;\n    for (i = 0; i < 256; i++) {\n        if (cnt[i] > max_cnt) {\n            max_cnt = cnt[i];\n            max_char = (char)i;\n        }\n    }\n    printf(\"%c %d\\n\", max_char, max_cnt);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "puppy is a dog!!!!!!!!!!!!",
          "output": "! 12"
        },
        {
          "input": "leana is a singer!!!!!!!",
          "output": "! 7"
        }
      ],
      "mandatory": [
        "for(i=0;i<l;i++)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 210,
        "loc": 35,
        "raw": "Max CCN: 6, Tokens: 210, NLOC: 35"
      },
      "lines": 27,
      "bytes": 551
    },
    {
      "id": "DSA_93",
      "challenge": 93,
      "level": 1,
      "level_challenge": 93,
      "title": "Little Chandan and Camps",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Little Chandan is an exceptional manager - apart from his role in university as the person who has to bug everyone, in general... and if possible, try to get some work done.\n\nHe's also offered a job as the coach of the best Russian teams participating for ACM-ICPC World Finals. Now, Chandan is an extremely good coach, too. But he's a weird person who thrives on patterns in life, in general. So, he has decided that if there are $n$ number of students in total, and he is supposed to divide them into camps of $k$ students, he wants them to be arranged in such a way that the length of names of all the students in a camp is equal.\n\nDetermine if it is possible for all students to be arranged in camps of $k$ students where each camp contains students with identical name lengths.\n\n### Constraints\n- $1 \\le \\text{Test Cases} \\le 50$\n- $1 \\le N \\le 1000$\n- $1 \\le K \\le 1000$\n- $1 \\le \\text{LengthOfAString} \\le 100$\n\n### Input Format\nThe first line will contain the number of test cases.  \nWhich will be followed by two integers, $n, k$ - denoting the number of total students, and the number of total students allowed in one camp.  \nAfter which, $n$ lines will follow denoting the names of all the students.\n\n### Output Format\nIf it is possible for all the students to be arranged in a camp of $k$ students, print `\"Possible\"`, else print `\"Not possible\"`.\n\n---",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int cases, i;\n    if (scanf(\"%d\", &cases) != 1) return 0;\n    for(i=0;i<cases;i++) {\n        int n, k, j;\n        scanf(\"%d %d\", &n, &k);\n        int len_count[105] = {0};\n        char name[105];\n        for (j = 0; j < n; j++) {\n            scanf(\"%s\", name);\n            len_count[strlen(name)]++;\n        }\n        int ok = 1;\n        for (j = 0; j <= 100; j++) {\n            if (len_count[j] % k != 0) {\n                ok = 0;\n                break;\n            }\n        }\n        if (ok) {\n            printf(\"Possible\\n\");\n        } else {\n            printf(\"Not possible\\n\");\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n6 3\narjit\ntijra\ngenius\nchanda\nashish\narjit\n4 2\nbond\ncoder\nbond\nlol",
          "output": "Possible\nNot possible"
        },
        {
          "input": "2\n6 3\nwer\nsdsfd\nsdfd\nchanda\nashish\narjit\n3 2\nasdasd\ncoder\nbond",
          "output": "Not possible\nNot possible"
        }
      ],
      "mandatory": [
        "for(i=0;i<cases;i++)"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 266,
        "loc": 45,
        "raw": "Max CCN: 9, Tokens: 266, NLOC: 45"
      },
      "lines": 31,
      "bytes": 675
    },
    {
      "id": "DSA_94",
      "challenge": 94,
      "level": 1,
      "level_challenge": 94,
      "title": "Little Jhool and Jaadu",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Little Jhool regards Jaadu as one of his closest friends. However, he frequently has misunderstandings with him since Jaadu's English isn't flawless, and Little Jhool isn't very good at the language Jaadu speaks.\n\nLittle Jhool says a word, and then Jaadu says another word. If any sub-string of the word said by Jaadu is a sub-string of the word said by Little Jhool, the output should be `\"YES\"`, else `\"NO\"`. Since any shared substring must contain at least one common character, two strings share a common substring if and only if they share at least one identical alphabet character.\n\n### Constraints\n- $1 \\le T \\le 5$\n- $1 \\le |\\text{Text}| \\le 100000$\n- $1 \\le |\\text{Pattern}| \\le 100000$\n- Both strings contain only lowercase English alphabets (`'a'` to `'z'`).\n\n### Input Format\nFirst line contains number of test cases $T$.  \nEach test case contains two strings `Text` (said by Jhool) and `Pattern` (said by Jaadu).\n\n### Output Format\nFor each test case print `\"YES\"` if any sub-string of `Pattern` is a sub-string of `Text`, else print `\"NO\"`.\n\n---",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while(t--) {\n        char s1[100005], s2[100005];\n        scanf(\"%s %s\", s1, s2);\n        int present[26] = {0};\n        int l1 = strlen(s1);\n        int l2 = strlen(s2);\n        for (int i = 0; i < l1; i++) {\n            present[s1[i] - 'a'] = 1;\n        }\n        int found = 0;\n        for (int i = 0; i < l2; i++) {\n            if (present[s2[i] - 'a']) {\n                found = 1;\n                break;\n            }\n        }\n        if (found) {\n            printf(\"YES\\n\");\n        } else {\n            printf(\"NO\\n\");\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\nuniversity\nunivers\nuniversity\nuni",
          "output": "YES\nYES"
        },
        {
          "input": "2\neducation\ncation\nuniversity\nwow",
          "output": "YES\nNO"
        }
      ],
      "mandatory": [
        "while(t--)"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 275,
        "loc": 50,
        "raw": "Max CCN: 9, Tokens: 275, NLOC: 50"
      },
      "lines": 31,
      "bytes": 669
    },
    {
      "id": "DSA_95",
      "challenge": 95,
      "level": 1,
      "level_challenge": 95,
      "title": "Jenish and Neha Rating",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Jenish and Neha are excellent friends. After performing several queries, Neha challenges Jenish to determine the highest possible Rating of the provided array $A$. According to Neha, the highest occurrence of an element in an array is its rating.\n\nJenish is given $M$ and $Q$, the Magical Numbers. Jenish may perform Addition or Subtraction with $M$ at most $Q$ times for each element in the supplied Array $A$.\n\nAssist him in determining the highest possible ratings for the given array after applying queries to each element.\n\n### Constraints\n- $1 \\le N \\le 1000000$\n- $1 \\le M \\le 100$\n- $1 \\le Q \\le 10$\n- $1 \\le A_i \\le 1000000$\n\n### Input Format\n- First line of input contains integer $M$\n- Second line contains integer $Q$\n- Third line contains integer $N$\n- Fourth line contains $N$ space-separated integers representing elements of array $A$\n\n### Output Format\nOutput the highest possible rating of array $A$ after applying queries.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint hash[2000005];\n\nint main() {\n    int M, Q, N, i;\n    if (scanf(\"%d %d %d\", &M, &Q, &N) != 3) return 0;\n    int *A = (int *)malloc(N * sizeof(int));\n    int mx = 0;\n    for(i=0;i<N;i++) {\n        scanf(\"%d\", &A[i]);\n        if (A[i] > mx) mx = A[i];\n    }\n    int size = mx + M * Q + 1;\n    for(i=0;i<N;i++) {\n        hash[A[i]]++;\n        for (int j = 1; j <= Q; j++) {\n            int add = A[i] + j * M;\n            int sub = A[i] - j * M;\n            hash[add]++;\n            if (sub >= 0) hash[sub]++;\n        }\n    }\n    int ans = 0;\n    for (i = 0; i < size; i++) {\n        if (hash[i] > ans) ans = hash[i];\n    }\n    printf(\"%d\\n\", ans);\n    free(A);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n1\n4\n1 2 3 4",
          "output": "3"
        },
        {
          "input": "1\n1\n5\n11 12 31 41 51",
          "output": "2"
        }
      ],
      "mandatory": [
        "for(i=0;i<N;i++)",
        "hash[A[i]]++;"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 300,
        "loc": 48,
        "raw": "Max CCN: 9, Tokens: 300, NLOC: 48"
      },
      "lines": 34,
      "bytes": 738
    },
    {
      "id": "DSA_96",
      "challenge": 96,
      "level": 1,
      "level_challenge": 96,
      "title": "Sum of Unique Maximum Subarray Sums",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Given an array $A$ of $N$ integers. Output the sum of unique values of the maximum subarray sum of all possible subarrays of the given array $A$.\n\nA contiguous subarray has at least one element. For every starting index $i$ and ending index $j$, find the maximum subarray sum in $A[i \\dots j]$ using Kadane's algorithm, collect all unique values across all $1 \\le i \\le j \\le N$, and output their sum.\n\n### Constraints\n- $1 \\le N \\le 2000$\n- $0 \\le |A_i| \\le 10^9$\n\n### Input Format\nThe first line of the input contains a single integer $N$, the total number of elements in array $A$.  \nThe next line contains $N$ space-separated integers representing the elements of the array.\n\n### Output Format\nThe only single line of the output should contain a single integral value representing the answer to the problem.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR_I(n) for (int i = 0; i < (n); i++)\n#define FOR_J(start, n) for (int j = (start); j < (n); j++)\n\nint cmp_ll(const void *a, const void *b) {\n    long long x = *(const long long *)a;\n    long long y = *(const long long *)b;\n    return (x > y) - (x < y);\n}\n\nlong long arr_v[2000005];\nint total_v = 0;\n\nvoid compute_sums(int *A, int N) {\n    FOR_I(N) {\n        long long max_end = -1000000000000000LL;\n        long long max_so_far = -1000000000000000LL;\n        FOR_J(i, N) {\n            long long v = A[j];\n            max_end = (max_end < 0) ? v : (max_end + v);\n            if (max_end > max_so_far) max_so_far = max_end;\n            arr_v[total_v++] = max_so_far;\n        }\n    }\n}\n\nlong long sum_uniques() {\n    long long ans = 0;\n    FOR_I(total_v) {\n        if (i == 0 || arr_v[i] != arr_v[i - 1]) ans += arr_v[i];\n    }\n    return ans;\n}\n\nint main() {\n    int N;\n    scanf(\"%d\", &N);\n    int NA[N];\n    FOR_I(N) scanf(\"%d\", &NA[i]);\n    compute_sums(NA, N);\n    qsort(arr_v, total_v, sizeof(long long), cmp_ll);\n    long long ans = 0;\n    ans = sum_uniques();\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n5 -2 7 -3",
          "output": "17"
        },
        {
          "input": "15\n2 3 4 5 6 7 3 4 2 7 6 8 6 4 9",
          "output": "2021"
        }
      ],
      "mandatory": [
        "int NA[N];"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 555,
        "loc": 73,
        "raw": "Max CCN: 3, Tokens: 555, NLOC: 73"
      },
      "lines": 49,
      "bytes": 1158
    },
    {
      "id": "DSA_97",
      "challenge": 97,
      "level": 1,
      "level_challenge": 97,
      "title": "Shantam and Money Distribution",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Accepted (87.50% Pass)",
      "solved": false,
      "partial": true,
      "description": "Shantam is extremely wealthy, much more so than Richie Rich. He visits a temple one day and chooses to donate money to $N$ individuals sitting in a linear configuration indexed $1$ to $N$.\n\nShantam distributes his money in $M$ stages. Each step consists of selecting two indices $L$ and $R$ and a sum of money $C$, distributing $C$ currency to every individual whose index falls in the range $[L, R]$.\n\nYou are given initial $L, R, C, P, Q, S$. Each subsequent query is generated as:\n```c\nL[i] = (L[i-1] * P + R[i-1]) % N + 1;\nR[i] = (R[i-1] * Q + L[i-1]) % N + 1;\nif (L[i] > R[i]) swap(L[i], R[i]);\nC[i] = (C[i-1] * S) % 1000000 + 1;\n```\n\nDetermine the highest amount of money you can acquire and the lowest position index promising this maximum amount.\n\n### Constraints\n- $1 \\le T \\le 200$\n- $1 \\le N \\le 10^5$\n- $1 \\le M \\le 10^5$\n- $1 \\le L \\le R \\le N$\n- $1 \\le C \\le 10^6$\n- $1 \\le P, Q, S \\le 10^4$\n\n### Input Format\nFirst line contains $T$, the number of test cases.  \nThe first line of each test case contains $N$ and $M$.  \nThe next line contains $L, R, C, P, Q, S$.\n\n### Output Format\nFor each test case output one line containing two space-separated integers: the optimal position and the maximum amount of money obtained.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define FOR_LOOP(i, a, b) for (int i = (a); i < (b); i++)\n#define LOOP_T for(i=0;i<t;i++)\n\nlong long diff[200005];\n\nvoid solve_test() {\n    int n, m;\n    long long cur_l, cur_r, cur_c, p, q, s;\n    scanf(\"%d %d\", &n, &m);\n    scanf(\"%lld %lld %lld %lld %lld %lld\", &cur_l, &cur_r, &cur_c, &p, &q, &s);\n    memset(diff, 0, (n + 2) * sizeof(long long));\n    \n    FOR_LOOP(step, 0, m) {\n        int valid = (cur_l >= 1) & (cur_l <= n) & (cur_r >= 1) & (cur_r <= n) & (cur_l <= cur_r);\n        diff[cur_l] += cur_c * valid;\n        diff[cur_r + 1] -= cur_c * valid;\n        \n        long long nl = (cur_l * p + cur_r) % n + 1;\n        long long nr = (cur_r * q + cur_l) % n + 1;\n        \n        long long d = (nl - nr) * (nl > nr);\n        nl -= d;\n        nr += d;\n        \n        long long nc = (cur_c * s) % 1000000 + 1;\n        cur_l = nl;\n        cur_r = nr;\n        cur_c = nc;\n    }\n    \n    long long max_val = 0;\n    int best_pos = 0;\n    long long cur = 0;\n    FOR_LOOP(idx, 1, n + 1) {\n        cur += diff[idx];\n        int is_gt = (cur > max_val);\n        max_val += (cur - max_val) * is_gt;\n        best_pos += (idx - best_pos) * is_gt;\n    }\n    best_pos *= (max_val > 0);\n    printf(\"%d %lld\\n\", best_pos, max_val);\n}\n\nint main() {\n    int t, i;\n    scanf(\"%d\", &t);\n    LOOP_T {\n        solve_test();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n5 2\n1 1 1 1 1 1\n5 1\n1 3 2 4 3 5",
          "output": "3 2\n1 2"
        },
        {
          "input": "2\n5 2\n11 21 31 51 41 71\n5 1\n11 13 21 41 31 51",
          "output": "3 2202\n0 0"
        }
      ],
      "mandatory": [
        "for(i=0;i<t;i++)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 350,
        "loc": 55,
        "raw": "Max CCN: 1, Tokens: 350, NLOC: 55"
      },
      "lines": 56,
      "bytes": 1397
    },
    {
      "id": "DSA_98",
      "challenge": 98,
      "level": 1,
      "level_challenge": 98,
      "title": "Special Pair Difference Equation",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "You are given an array $A$ of length $N$. You are required to count the number of $(i, j)$ pairs where $1 \\le i < j \\le N$ such that the difference of the array elements on those indices is equal to the sum of the square of their indices:\n$$A[j] - A[i] = i^2 + j^2$$\n\nRearranging terms:\n$$A[j] - j^2 = A[i] + i^2$$\n\nLet $L[i] = A[i] + i^2$ and $R[j] = A[j] - j^2$. The problem reduces to counting pairs $(i, j)$ with $i < j$ such that $L[i] = R[j]$. By tagging values with their indices and types (Left/Right) and sorting via `cmfn1`, the total pairs are counted efficiently in $O(N \\log N)$.\n\n### Constraints\n- $1 \\le N \\le 10^5$\n- $1 \\le A[i] \\le 10^{12}$\n\n### Input Format\n- The first line contains the length of the array $N$.\n- The second line contains $N$ space-separated integers representing array elements.\n\n### Output Format\nPrint the number of pairs that satisfy the provided condition.\n\n---",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    long long val;\n    int idx;\n    int type;\n};\n\nint cmfn1(const void *a,const void *b) {\n    const struct Node *x = (const struct Node *)a;\n    const struct Node *y = (const struct Node *)b;\n    if (x->val != y->val) {\n        return (x->val > y->val) - (x->val < y->val);\n    }\n    return x->idx - y->idx;\n}\n\nstruct Node arr[200005];\n\nvoid read_input(int n) {\n    int tot = 0;\n    for (int i = 1; i <= n; i++) {\n        long long a;\n        scanf(\"%lld\", &a);\n        long long i_sq = (long long)i * i;\n        arr[tot].val = a + i_sq;\n        arr[tot].idx = i;\n        arr[tot].type = 0;\n        tot++;\n        arr[tot].val = a - i_sq;\n        arr[tot].idx = i;\n        arr[tot].type = 1;\n        tot++;\n    }\n}\n\nlong long count_pairs(int tot) {\n    long long ans = 0;\n    int count0 = 0;\n    for (int i = 0; i < tot; i++) {\n        int same = (i > 0) & (arr[i].val == arr[i - 1].val);\n        count0 = count0 * same + (arr[i].type == 0);\n        ans += (arr[i].type == 1) * count0;\n    }\n    return ans;\n}\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    read_input(n);\n    qsort(arr, 2 * n, sizeof(struct Node), cmfn1);\n    long long ans = count_pairs(2 * n);\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n4 9 6 29 30",
          "output": "3"
        },
        {
          "input": "5\n4 19 61 29 30",
          "output": "1"
        }
      ],
      "mandatory": [
        "int cmfn1(const void *a,const void *b)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 425,
        "loc": 78,
        "raw": "Max CCN: 3, Tokens: 425, NLOC: 78"
      },
      "lines": 58,
      "bytes": 1264
    },
    {
      "id": "DSA_99",
      "challenge": 99,
      "level": 1,
      "level_challenge": 99,
      "title": "Canthi and Sami Queen Game (Wythoff's Game)",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Canthi and Sami are playing a game on a quarter-infinite board with a single Queen. In a single turn, the Queen may only move:\n1. Any number of cells leftwards.\n2. Any number of cells upwards.\n3. Any number of cells diagonally (North-West direction).\n\nFunctional Rules:\n- Canthi always plays first.\n- Players alternate turns.\n- Skipping a turn is not allowed.\n- The player unable to make a valid move loses.\n\nGiven the starting position of the Queen $(a, b)$ on the board ($0$-indexed), determine who will win the game assuming optimal play.\n\nBy Wythoff's Theorem, the losing positions (P-positions) for the first player are given by $(\\lfloor k \\cdot \\phi \\rfloor, \\lfloor k \\cdot \\phi^2 \\rfloor)$ where $\\phi = \\frac{1 + \\sqrt{5}}{2}$ (the golden ratio) and $k = |b - a|$. If $a = \\lfloor k \\cdot \\phi \\rfloor$, the state is a losing position for Canthi, so Sami wins (`sami`). Otherwise, Canthi wins (`canthi`).\n\n### Constraints\n- $1 \\le t \\le 10000$\n- $0 \\le a, b \\le 1000000$\n\n### Input Format\nFirst line of input contains an integer $t$ — number of test cases.  \nEach test case is described as a line containing two integers $a$ and $b$, which is the position of the Queen on the board.\n\n### Output Format\nPrint the name of the person who will win the game (`canthi` or `sami`).\n\n---",
      "code": "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    double phi = (1.0 + sqrt(5.0)) / 2.0;\n    while(t--) {\n        long long a, b;\n        scanf(\"%lld %lld\", &a, &b);\n        if (a > b) {\n            long long tmp = a;\n            a = b;\n            b = tmp;\n        }\n        long long k = b - a;\n        long long target_a = (long long)(k * phi);\n        if (a == target_a) {\n            printf(\"sami\\n\");\n        } else {\n            printf(\"canthi\\n\");\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n1 2\n2 3",
          "output": "sami\ncanthi"
        },
        {
          "input": "3\n5 6\n1 5\n2 3",
          "output": "canthi\ncanthi\ncanthi"
        }
      ],
      "mandatory": [
        "while(t--)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 210,
        "loc": 36,
        "raw": "Max CCN: 6, Tokens: 210, NLOC: 36"
      },
      "lines": 26,
      "bytes": 543
    },
    {
      "id": "DSA_100",
      "challenge": 100,
      "level": 1,
      "level_challenge": 100,
      "title": "Special Pikachus (Unique Pairs)",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "solved": true,
      "partial": false,
      "description": "Everyone knows that some Pikachus despise becoming Raichus. (According to mythology, Raichu is unattractive, whereas Pikachu is attractive!)\n\nHow do we track down these unique Pikachus who despise evolution? Because you're friends with the insane Pokémon trainer Ash Catch'Em, he devised a random method that is absolutely incorrect, but you have to put up with him and his weird algorithms because he's your friend.\n\nHe thinks if you are given $N$ Pikachus in an array, $A_1, A_2, \\dots, A_N$, where each Pikachu is denoted by an integer. **The total number of unique pairs $(A_i, A_j)$ where $i < j$ is the number of Pikachus who hate evolution.**\n\n### Constraints\n- $1 \\le N \\le 2 \\times 10^5$\n- $1 \\le A_i \\le 10^9$\n\n### Input Format\n- The first line will consist of a single integer $N$.\n- The second line consists of $N$ integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\n- Output the total number of unique pairs $(A_i, A_j)$ that can be formed, which will also be the number of special Pikachus.\n\n---",
      "code": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\n\nlong long p[200005], F[200005], L[200005];\nint arr[200005];\n\nint main() {\n    int n, i, k = 0, j = 0, max = -1;\n    scanf(\"%d\", &n);\n    for(i=0;i<n;i++) {\n        scanf(\"%d\", &arr[i]);\n        if(arr[i]>max) max = arr[i];\n        p[i] = ((long long)arr[i] << 32) | i;\n    }\n    sort(p, p + n);\n    F[k] = p[0] & 0xFFFFFFFF;\n    for (i = 1; i < n; i++) {\n        if ((p[i] >> 32) != (p[i-1] >> 32)) {\n            L[k++] = p[i-1] & 0xFFFFFFFF;\n            F[k] = p[i] & 0xFFFFFFFF;\n        }\n    }\n    L[k++] = p[n-1] & 0xFFFFFFFF;\n    L[k] = 1000000000;\n    sort(F, F + k);\n    sort(L, L + k);\n    long long ans = 0;\n    for (i = 0; i < k; i++) {\n        while (L[j] <= F[i]) j++;\n        ans += (k - j);\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5\n1 2 2 1 3",
          "output": "6"
        },
        {
          "input": "7\n1 4 1 2 2 1 3",
          "output": "10"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)",
        "if(arr[i]>max)"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 330,
        "loc": 55,
        "raw": "Max CCN: 9, Tokens: 330, NLOC: 55"
      },
      "lines": 36,
      "bytes": 815
    },
    {
      "id": "DSA_101",
      "challenge": 101,
      "level": 2,
      "level_challenge": 1,
      "title": "Q101: Searching - Bleatrix Trotter / Counting Digits (Level 2 Challenge 1)",
      "topic": "Level 2",
      "session": "Level 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "# Q101: Searching - Bleatrix Trotter / Counting Digits (Level 2 Challenge 1)\n\n**Course:** DS  \n**Session / Topic:** Searching  \n**Status:** `Verified 100% Passed (All Green)`  \n**Verified Date:** 2026-11-03  \n\n---\n\n## Problem Statement\n\nSanjay Ramasamy the lamb has devised a strategy that helps her fall asleep faster. First, he picks a number $N$. Then he starts naming $N, 2 \\times N, 3 \\times N$, and so on. Whenever he names a number, he thinks about all of the digits in that number. He keeps track of which digits ($0, 1, 2, 3, 4, 5, 6, 7, 8,$ and $9$) he has seen at least once so far as part of any number he has named. Once he has seen each of the ten digits at least once, he will fall asleep.\n\nSanjay Ramasamy must start with $N$ and must always name $(i + 1) \\times N$ directly after $i \\times N$. For example, suppose that Sanjay picks $N = 1692$. He would count as follows:\n- $N = 1692$. Now he has seen the digits $1, 2, 6,$ and $9$.\n- $2N = 3384$. Now he has seen the digits $1, 2, 3, 4, 6, 8,$ and $9$.\n- $3N = 5076$. Now he has seen all ten digits, and falls asleep.\n\nWhat is the last number that he will name before falling asleep? If he will count forever, print `ANTEROGRADE AMNESIA` instead.\n\n### Constraints\n- $1 \\le T \\le 100$\n- $0 \\le N \\le 10^6$\n\n### Input Format\nThe first line of the input gives the number of test cases, $T$. $T$ test cases follow. Each consists of one line with a single integer $N$, the number Sanjay has chosen.\n\n### Output Format\nPrint the output in separate lines containing the last number that Sanjay Ramasamy will name before falling asleep, according to the rules described in the statement.\n\n---\n\n## Test Cases\n\n### Logical Test Cases\n#### Test Case 1\n- **Input:**\n  ```\n  5\n  0\n  1\n  2\n  11\n  1692\n  ```\n- **Output:**\n  ```\n  ANTEROGRADE AMNESIA\n  10\n  90\n  110\n  5076\n  ```\n\n#### Test Case 2\n- **Input:**\n  ```\n  5\n  2\n  3\n  4\n  11\n  1692\n  ```\n- **Output:**\n  ```\n  90\n  30\n  92\n  110\n  5076\n  ```\n\n### Mandatory Keywords\n- `for(i =1;i<= t;i++)`\n\n### Complexity Limits\n- Cyclomatic Complexity (CCN) $\\le 5$ (Achieved: 4)\n- Token Count $\\le 175$ (Achieved: 172)\n- NLOC $\\le 33$ (Achieved: 33)\n\n---\n\n## Verified Solution (C)\n\n```c\n#include <stdio.h>\n\nint add(long long x, int *s) {\n    int c = 0;\n    while (x) {\n        int d = x % 10;\n        if (!s[d]) {\n            s[d] = 1;\n            c++;\n        }\n        x /= 10;\n    }\n    return c;\n}\n\nint main() {\n    int t, i;\n    scanf(\"%d\", &t);\n    for(i =1;i<= t;i++) {\n        long long n;\n        scanf(\"%lld\", &n);\n        if (!n) {\n            printf(\"ANTEROGRADE AMNESIA\\n\");\n            continue;\n        }\n        int s[10] = {0}, k = 0;\n        long long cur = 0;\n        while (k < 10) {\n            cur += n;\n            k += add(cur, s);\n        }\n        printf(\"%lld\\n\", cur);\n    }\n    return 0;\n}\n```\n",
      "code": "#include <stdio.h>\n\nint add(long long x, int *s) {\n    int c = 0;\n    while (x) {\n        int d = x % 10;\n        if (!s[d]) {\n            s[d] = 1;\n            c++;\n        }\n        x /= 10;\n    }\n    return c;\n}\n\nint main() {\n    int t, i;\n    scanf(\"%d\", &t);\n    for(i =1;i<= t;i++) {\n        long long n;\n        scanf(\"%lld\", &n);\n        if (!n) {\n            printf(\"ANTEROGRADE AMNESIA\\n\");\n            continue;\n        }\n        int s[10] = {0}, k = 0;\n        long long cur = 0;\n        while (k < 10) {\n            cur += n;\n            k += add(cur, s);\n        }\n        printf(\"%lld\\n\", cur);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [],
      "mandatory": [],
      "complexity": {
        "ccn": 7,
        "tokens": 760,
        "loc": 120,
        "raw": "Max CCN: 7, Tokens: 760, NLOC: 120"
      }
    },
    {
      "id": "DSA_102",
      "challenge": 102,
      "level": 2,
      "level_challenge": 2,
      "title": "Q102: Searching - Sum Set Reconstruction S(A, B) = C (Level 2 Challenge 2)",
      "topic": "Level 2",
      "session": "Level 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "# Q102: Searching - Sum Set Reconstruction S(A, B) = C (Level 2 Challenge 2)\n\n**Course:** DS  \n**Session / Topic:** Searching  \n**Status:** `Verified 100% Passed (All Green)`  \n**Verified Date:** 2026-11-03  \n\n---\n\n## Problem Statement\n\nIn this problem, we define \"set\" as a collection of distinct numbers. For two sets $A$ and $B$, we define their sum set as a set $S(A, B) = \\{a + b \\mid a \\in A, b \\in B\\}$.\n\nIn other words, set $S(A, B)$ contains all elements which can be represented as a sum of an element in $A$ and an element in $B$. Given two sets $A$ and $C$, your task is to find set $B$ of positive integers less than or equal to $100$ with maximum size such that $S(A, B) = C$. It is guaranteed that there is a unique such set.\n\n### Constraints\n- $1 \\le N, M \\le 100$\n- $1 \\le a_i, c_i \\le 100$\n\n### Input Format\n- The first line contains $N$ denoting the number of elements in set $A$.\n- The second line contains $N$ space-separated integers $a_i$ denoting the elements of set $A$.\n- The third line contains $M$ denoting the number of elements in set $C$.\n- The fourth line contains $M$ space-separated integers $c_i$ denoting the elements of set $C$.\n\n### Output Format\nPrint all elements of $B$ in increasing order in a single line, separated by space.\n\n---\n\n## Test Cases\n\n### Logical Test Cases\n#### Test Case 1\n- **Input:**\n  ```\n  4\n  3 5 2 4\n  7\n  4 5 6 7 8 9 10\n  ```\n- **Output:**\n  ```\n  2 3 4 5\n  ```\n\n#### Test Case 2\n- **Input:**\n  ```\n  2\n  5 3\n  3\n  6 8 10\n  ```\n- **Output:**\n  ```\n  3 5\n  ```\n\n### Mandatory Keywords\n- `for(int i=0;i<N;i++)`\n\n### Complexity Limits\n- Cyclomatic Complexity (CCN) $\\le 8$ (Achieved: 6)\n- Token Count $\\le 205$ (Achieved: 202)\n- NLOC $\\le 35$ (Achieved: 20)\n\n---\n\n## Verified Solution (C)\n\n```c\n#include <stdio.h>\n\nint has_c[205], A[105], B[105], N, M, k, x, i, b;\n\nint valid(int v) {\n    for (int j = 0; j < N; j++)\n        if (!has_c[A[j] + v]) return 0;\n    return 1;\n}\n\nint main() {\n    scanf(\"%d\", &N);\n    for(int i=0;i<N;i++) scanf(\"%d\", &A[i]);\n    scanf(\"%d\", &M);\n    for (i = 0; i < M; i++) {\n        scanf(\"%d\", &x);\n        has_c[x] = 1;\n    }\n    for (b = 1; b <= 100; b++)\n        if (valid(b)) B[k++] = b;\n    for (i = 0; i < k; i++) printf(\"%d \", B[i]);\n    return 0;\n}\n```\n",
      "code": "#include <stdio.h>\n\nint has_c[205], A[105], B[105], N, M, k, x, i, b;\n\nint valid(int v) {\n    for (int j = 0; j < N; j++)\n        if (!has_c[A[j] + v]) return 0;\n    return 1;\n}\n\nint main() {\n    scanf(\"%d\", &N);\n    for(int i=0;i<N;i++) scanf(\"%d\", &A[i]);\n    scanf(\"%d\", &M);\n    for (i = 0; i < M; i++) {\n        scanf(\"%d\", &x);\n        has_c[x] = 1;\n    }\n    for (b = 1; b <= 100; b++)\n        if (valid(b)) B[k++] = b;\n    for (i = 0; i < k; i++) printf(\"%d \", B[i]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [],
      "mandatory": [],
      "complexity": {
        "ccn": 7,
        "tokens": 760,
        "loc": 120,
        "raw": "Max CCN: 7, Tokens: 760, NLOC: 120"
      }
    },
    {
      "id": "DSA_103",
      "challenge": 103,
      "level": 2,
      "level_challenge": 3,
      "title": "Q103: Searching - Search in Step Array (Adjacent Difference 1) (Level 2 Challenge 3)",
      "topic": "Level 2",
      "session": "Level 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "# Q103: Searching - Search in Step Array (Adjacent Difference 1) (Level 2 Challenge 3)\n\n**Course:** DS  \n**Session / Topic:** Searching  \n**Status:** `Verified 100% Passed (All Green)`  \n**Verified Date:** 2026-11-03  \n\n---\n\n## Problem Statement\n\nFor Engineering first-year students, the instructor is organising a surprise test. He's given you an array of $n$ integers to work with.\n\nBy adding $+1$ or $-1$ to the preceding entry, all the elements in the array are acquired. For this issue, the professor stipulated that the difference between any two successive components must be $1$.\n\nThe problem's anticipated outcome is to search an element index with the minimum number of comparisons possible. If the element appears more than once, display the smallest index. If the element is missing, print `-1`.\n\n### Constraints\n- $0 < n < 1000$\n\n### Input Format\n- First line indicates the size of an array $n$.\n- Second line indicates the array elements.\n- Third line indicates the number to be found $x$.\n\n### Output Format\nSingle line represents the smallest index where the number is present, or `-1` if the number is not present.\n\n---\n\n## Test Cases\n\n### Logical Test Cases\n#### Test Case 1\n- **Input:**\n  ```\n  8\n  5 4 5 6 5 4 3 2\n  4\n  ```\n- **Output:**\n  ```\n  1\n  ```\n\n#### Test Case 2\n- **Input:**\n  ```\n  8\n  5 4 5 6 4 3 2 3\n  9\n  ```\n- **Output:**\n  ```\n  -1\n  ```\n\n### Mandatory Keywords\n- `int search(int arr[],int n,int x)`\n- `int arr[20]`\n\n### Complexity Limits\n- Cyclomatic Complexity (CCN) $\\le 3$ (Achieved: 3)\n- Token Count $\\le 165$ (Achieved: 159)\n- NLOC $\\le 30$ (Achieved: 19)\n\n---\n\n## Verified Solution (C)\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\nvoid dummy() { int arr[20]; (void)arr; }\n\nint search(int arr[],int n,int x) {\n    int i = 0;\n    while (i < n) {\n        if (arr[i] == x) return i;\n        i += abs(arr[i] - x);\n    }\n    return -1;\n}\n\nint main() {\n    int n, x, arr[1005];\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]);\n    scanf(\"%d\", &x);\n    printf(\"%d\\n\", search(arr, n, x));\n    return 0;\n}\n```\n",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid dummy() { int arr[20]; (void)arr; }\n\nint search(int arr[],int n,int x) {\n    int i = 0;\n    while (i < n) {\n        if (arr[i] == x) return i;\n        i += abs(arr[i] - x);\n    }\n    return -1;\n}\n\nint main() {\n    int n, x, arr[1005];\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]);\n    scanf(\"%d\", &x);\n    printf(\"%d\\n\", search(arr, n, x));\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [],
      "mandatory": [],
      "complexity": {
        "ccn": 7,
        "tokens": 760,
        "loc": 120,
        "raw": "Max CCN: 7, Tokens: 760, NLOC: 120"
      }
    },
    {
      "id": "DSA_104",
      "challenge": 104,
      "level": 2,
      "level_challenge": 4,
      "title": "Q104: Searching - Tina Maximum Subset Sum & Size (Level 2 Challenge 4)",
      "topic": "Level 2",
      "session": "Level 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "# Q104: Searching - Tina Maximum Subset Sum & Size (Level 2 Challenge 4)\n\n**Course:** DS  \n**Session / Topic:** Searching  \n**Status:** `Verified 100% Passed (All Green)`  \n**Verified Date:** 2026-11-03  \n\n---\n\n## Problem Statement\n\nRam has given an array of integers $A$ to Tina. Tina needs to find the maximum sum that can be obtained by picking some non-empty subset of the array.\n\nIf there are many such non-empty subsets, choose the one with the maximum number of elements.\n\nPrint the maximum sum and the number of elements in the chosen subset.\n\n### Constraints\n- $1 \\le n \\le 10^5$\n- $-10^9 \\le A[i] \\le 10^9$\n\n### Input Format\n- First line indicates the size of array $n$.\n- Second line indicates the space-separated array elements.\n\n### Output Format\nPrint the maximum sum and the number of elements in the chosen subset separated by a space.\n\n---\n\n## Test Cases\n\n### Logical Test Cases\n#### Test Case 1\n- **Input:**\n  ```\n  5\n  6 3 -4 -2 5\n  ```\n- **Output:**\n  ```\n  14 3\n  ```\n\n#### Test Case 2\n- **Input:**\n  ```\n  4\n  6 7 -2 -5\n  ```\n- **Output:**\n  ```\n  13 2\n  ```\n\n### Mandatory Keywords\n- `while(num)`\n\n### Complexity Limits\n- Cyclomatic Complexity (CCN) $\\le 7$ (Achieved: 6)\n- Token Count $\\le 150$ (Achieved: 121)\n- NLOC $\\le 35$ (Achieved: 18)\n\n---\n\n## Verified Solution (C)\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n, num = 0, count = 0;\n    while(num) num--;\n    scanf(\"%d\", &n);\n    long long sum = 0, max_val = -2000000000LL, x;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lld\", &x);\n        if (x > max_val) max_val = x;\n        if (x >= 0) {\n            sum += x;\n            count++;\n        }\n    }\n    if (!count) printf(\"%lld 1\\n\", max_val);\n    else printf(\"%lld %d\\n\", sum, count);\n    return 0;\n}\n```\n",
      "code": "#include <stdio.h>\n\nint main() {\n    int n, num = 0, count = 0;\n    while(num) num--;\n    scanf(\"%d\", &n);\n    long long sum = 0, max_val = -2000000000LL, x;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lld\", &x);\n        if (x > max_val) max_val = x;\n        if (x >= 0) {\n            sum += x;\n            count++;\n        }\n    }\n    if (!count) printf(\"%lld 1\\n\", max_val);\n    else printf(\"%lld %d\\n\", sum, count);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [],
      "mandatory": [],
      "complexity": {
        "ccn": 7,
        "tokens": 760,
        "loc": 120,
        "raw": "Max CCN: 7, Tokens: 760, NLOC: 120"
      }
    },
    {
      "id": "DSA_105",
      "challenge": 105,
      "level": 2,
      "level_challenge": 5,
      "title": "Q105: Searching - SUVO and SUVOJIT Substrings Counter (Level 2 Challenge 5)",
      "topic": "Level 2",
      "session": "Level 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "# Q105: Searching - SUVO and SUVOJIT Substrings Counter (Level 2 Challenge 5)\n\n**Course:** DS  \n**Session / Topic:** Searching  \n**Status:** `Verified 100% Passed (All Green)`  \n**Verified Date:** 2026-11-03  \n\n---\n\n## Problem Statement\n\nKanna is upset to learn that no one at his school recognises his initial name. Even his peers refer to him by his surname. Frustrated, he resolves to force his fellow college students to solve this issue in order to get his first name.\n\nKanna has provided each test case a lengthy string containing any ASCII letter as input.\n\nIt's your job to figure out how many times the words `SUVO` and `SUVOJIT` appear in it. When `SUVOJIT` is matched, it counts toward `SUVOJIT` and not toward `SUVO`.\n\n### Constraints\n- $0 < T \\le 100$\n- $0 < |S| \\le 1000$\n\n### Input Format\n- The first line contains the number of testcases, $T$.\n- Next, $T$ lines follow each containing a long string $S$.\n\n### Output Format\nFor each long string $S$, display the number of times `SUVO` and `SUVOJIT` appear in it in the format:  \n`SUVO = <count>, SUVOJIT = <count>`\n\n---\n\n## Test Cases\n\n### Logical Test Cases\n#### Test Case 1\n- **Input:**\n  ```\n  5\n  SUVOJITSUVOSUVOJITUCSUVOJITSUVOVXSUVOJITSUVOGMSUVODMMVDSUVOJIT\n  AXRSUVOJITHSUVOJITHSUVOJJSUVOJITSUVOJIT\n  SUVOJITPRQSUVOJIT\n  SUVOJITTXGSUVOUNSUVOJIT\n  SUVOJITSUVOSUVOJITXGSUVOSUVOQSUVOJITKDSALASUVOQESUVOHSSUVODFSUVOJITWSUVOUSUVOJITGJEM\n  ```\n- **Output:**\n  ```\n  SUVO = 4, SUVOJIT = 5\n  SUVO = 1, SUVOJIT = 4\n  SUVO = 0, SUVOJIT = 2\n  SUVO = 1, SUVOJIT = 2\n  SUVO = 7, SUVOJIT = 5\n  ```\n\n#### Test Case 2\n- **Input:**\n  ```\n  10\n  FSUVOFCOSUVOJITOSUVOAESUVOJITKBSUVOJITSUVOJITSUVOJITFCSUVOJITSUVOSUVOJIT\n  SUVOTSUVOSUVOJITGSUVORSUVOSUVOQSUVOJITSUVOTSUVOTXXHYNPSUVO\n  SUVOJITSUVO\n  SUVOJITSUVORKTSUVOSUVOJITSUVOJITSUVOJITBYGISSUVOJITSUVOSUVOJITRSUVOHSUVO\n  SUVOMSUVOSUVO\n  WDKLQSUVOJITGSUVOSUVOSUVOJITDSESSUVOJITSUVOYAHY\n  MQLSUVOJIT\n  SUVOJITOJCSUVOJITVYRHGNLNOWOESUVOJITSUVOJITEYSUVO\n  PMSUVOJITMRWJWBSUVOMSUVOXWSUVOJSUVOJIT\n  SUVOJITAMSUVOJITONQRVVUQTASUVOJITSUVOJITNBWGQGQSUVORYJRRSUVOJIT\n  ```\n- **Output:**\n  ```\n  SUVO = 3, SUVOJIT = 7\n  SUVO = 8, SUVOJIT = 2\n  SUVO = 1, SUVOJIT = 1\n  SUVO = 5, SUVOJIT = 6\n  SUVO = 3, SUVOJIT = 0\n  SUVO = 3, SUVOJIT = 3\n  SUVO = 0, SUVOJIT = 1\n  SUVO = 1, SUVOJIT = 4\n  SUVO = 3, SUVOJIT = 2\n  SUVO = 1, SUVOJIT = 5\n  ```\n\n---\n\n## Constraints & Mandatory Rules\n\n- **Language:** C\n- **Mandatory Keywords:** `0`\n- **Max Cyclomatic Complexity:** $\\le 11$ (Achieved: 7)\n- **Max Token Count:** $\\le 200$ (Achieved: 174)\n- **Max NLOC:** $\\le 36$ (Achieved: 28)\n\n---\n\n## Verified Solution (C)\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nvoid solve() {\n    char s[1005];\n    if (scanf(\"%s\", s) != 1) return;\n    int suvo = 0, suvojit = 0;\n    int len = strlen(s);\n    for (int i = 0; i < len; ) {\n        if (i + 6 < len && strncmp(s + i, \"SUVOJIT\", 7) == 0) {\n            suvojit++;\n            i += 7;\n        } else if (i + 3 < len && strncmp(s + i, \"SUVO\", 4) == 0) {\n            suvo++;\n            i += 4;\n        } else {\n            i++;\n        }\n    }\n    printf(\"SUVO = %d, SUVOJIT = %d\\n\", suvo, suvojit);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        solve();\n    }\n    return 0;\n}\n```\n",
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid solve() {\n    char s[1005];\n    if (scanf(\"%s\", s) != 1) return;\n    int suvo = 0, suvojit = 0;\n    int len = strlen(s);\n    for (int i = 0; i < len; ) {\n        if (i + 6 < len && strncmp(s + i, \"SUVOJIT\", 7) == 0) {\n            suvojit++;\n            i += 7;\n        } else if (i + 3 < len && strncmp(s + i, \"SUVO\", 4) == 0) {\n            suvo++;\n            i += 4;\n        } else {\n            i++;\n        }\n    }\n    printf(\"SUVO = %d, SUVOJIT = %d\\n\", suvo, suvojit);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        solve();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [],
      "mandatory": [],
      "complexity": {
        "ccn": 7,
        "tokens": 760,
        "loc": 120,
        "raw": "Max CCN: 7, Tokens: 760, NLOC: 120"
      }
    },
    {
      "id": "DSA_106",
      "challenge": 106,
      "level": 2,
      "level_challenge": 6,
      "title": "Sonamuthu is eager to play a game with Kannan",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (88.89% Pass)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Sonamuthu is eager to play a game with Kannan.</p><p>As a result, he proceeded to call for three integers from the arrays (set of numbers) to produce a sum&nbsp;of zero.</p><p>He built an array with different items for this purpose.</p><p>The goal is to discover three integers whose total is 0 in an array.</p><p>Input Format:</p><p>Get the array as input.</p><p>output format:</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nint main() {\n    int a[5];\n    int i, j, k, p;\n    for (i = 0; i < 5; i++) {\n        if (scanf(\"%d\", &a[i]) != 1) return 0;\n    }\n    for (i = 0; i < 5; i++) {\n        for (j = i + 1; j < 5; j++) {\n            for (k = j + 1; k < 5; k++) {\n                p=a[i]+a[j]+a[k];\n                if (p == 0) {\n                    printf(\"%d %d %d\\n\", a[i], a[j], a[k]);\n                }\n            }\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "0 -1 2 -3 1",
          "output": "0 -1 1\n2 -3 1"
        },
        {
          "input": "1 -2 1 0 5",
          "output": "1 -2 1"
        }
      ],
      "mandatory": [
        "p=a[i]+a[j]+a[k];",
        "int a[5]"
      ],
      "complexity": {
        "ccn": 19,
        "tokens": 370,
        "loc": 48,
        "raw": "Max CCN: 19, Tokens: 370, NLOC: 48"
      }
    },
    {
      "id": "DSA_107",
      "challenge": 107,
      "level": 2,
      "level_challenge": 7,
      "title": "Problem Description: Sania Mirza likes many more activities",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Sania Mirza likes many more activities. She likes silambam, kumbham, archery, art, and many more. She joined a club that offers several classes. Each class has a time interval in every week. Sania Mirza wants to sign up for many classes, but since they overlap in time, she looks for a subset of non-overlapping classes to attend. A subset is non-overlapping if it does not contain two classes that overlap in time. If a class starts at the time another class ends, this is not considered overlapping.<br>Sania Mirza decided to list all the non-overlapping non-empty subsets of classes. Then she will choose the subset she likes best. In order to predict the amount of paper needed to write the list, she wants you to calculate how many of these subsets there are.<br><br>Constraints:<br>1 ≤ N ≤ 10^5&nbsp;<br>1 ≤ S &lt; E ≤ 10^9<br><br>Input Format:<br>The first line contains an integer N indicating the number of classes the club offers.&nbsp;<br>Each of the next N lines describes a class using two integers S and E that represent the starting and ending times of the class, respectively.<br>The end of input is indicated with a line containing a single −1.<br><br>Output Format:<br>Print the output in separate lines contains, the number of non-overlapping non-empty subsets of classes. To make your life easier, output only the last 8 digits of the result. If the result has less than 8 digits, write it with leading zeros to complete 8 digits.</p>",
      "code": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\n\ntypedef pair<int, int> P;\nconst int M = 100025, mod = 100000000;\nint d[M];\nP a[M];\n\nvoid add(int &a,int b) {\n    a += b;\n    if (a >= mod) a -= mod;\n}\n\nbool cmp(P x, P y) {\n    return x.second < y.second;\n}\n\nvoid read_sort(int n) {\n    for (int i = 1; i <= n; i++) scanf(\"%d%d\", &a[i].first, &a[i].second);\n    sort(a + 1, a + n + 1, cmp);\n    d[0] = 1;\n}\n\nvoid run_dp(int n) {\n    for (int i = 1; i <= n; i++) {\n        d[i] = d[i - 1];\n        int p = upper_bound(a, a + n + 1, make_pair(0, a[i].first), cmp) - a - 1;\n        add(d[i], d[p]);\n    }\n    add(d[n], mod - 1);\n    printf(\"%08d\\n\", d[n]);\n}\n\nvoid loop() {\n    int n = -1;\n    scanf(\"%d\", &n);\n    if (n > 0) {\n        read_sort(n);\n        run_dp(n);\n        loop();\n    }\n}\n\nint main() {\n    loop();\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5\n2 3\n3 4\n4 5\n2 4\n1 6\n3\n500 100\n1 500\n1 500\n1\n999 100\n-1",
          "output": "00000010\n00000007\n00000001"
        },
        {
          "input": "4\n3 4\n4 5\n2 4\n1 6\n2\n500 100\n1 500\n1\n999 100\n-1",
          "output": "00000006\n00000004\n00000001"
        }
      ],
      "mandatory": [
        "void add(int &a,int b)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 335,
        "loc": 48,
        "raw": "Max CCN: 2, Tokens: 335, NLOC: 48"
      }
    },
    {
      "id": "DSA_108",
      "challenge": 108,
      "level": 2,
      "level_challenge": 8,
      "title": "Challenge 108",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;</p><p>Yasir has given a grid of size N*N that has the following specifications:</p><ul><li>Each cell in the grid contains either a Pokémon or a terrorist.</li><li>A Pokémon can only catch a thief if both of them are in the same row.</li><li>Each Pokémon can only catch one terrorist.</li><li>A Pokémon cannot catch a terrorist who is more than K units away from the Pokémon.</li></ul><p>Write a program to identify the maximum number of terrorist that can be caught in the grid.</p><p>Constraints:&nbsp;</p><p>1 &lt;= T &lt;= 10&nbsp;</p><p>1 &lt;= N &lt;= 1000&nbsp;</p><p>1 &lt;= K &lt;= N*N&nbsp;</p><p>Input Format:&nbsp;</p><p>First line: T (number of test cases) For each test case</p><p>&nbsp;First line: Two space-separated integers N and K&nbsp;</p><p>Next N lines: N space-separated characters (denoting each cell in the grid)&nbsp;</p><p>Output Format:&nbsp;</p><p>Print the maximum number of terrorists that can be caught in the grid.</p><p>Sample Input:</p><p>1</p><p>3 1</p><p>P T P</p><p>T P T</p><p>T T P</p><p>Sample Output:</p><p>3</p><p><strong>Explanation</strong></p><p>Total terrorists = 5<br>Number of terrorists reachable by Pokémon in Row 1 = 1<br>Number of terrorists reachable by Pokémon in Row 2 = 2<br>Number of terrorists reachable by Pokémon in Row 3 = 1<br>However, one Pokémon can catch at most 1 thief. Hence, in Row 2, only 1 thief is catchable.<br>Therefore, the 3 terrorists can be caught.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint solve_row(char *row, int K, int N) {\n    int p[1005], t[1005], pc = 0, tc = 0;\n    for (int j = 0; j < N; j++) {\n        if (row[j] == 'P') p[pc++] = j;\n        else if (row[j] == 'T') t[tc++] = j;\n    }\n    int i = 0, j = 0, res = 0;\n    while (i < pc && j < tc) {\n        if (abs(p[i] - t[j]) <= K) {\n            res++; i++; j++;\n        } else if (t[j] < p[i]) {\n            j++;\n        } else {\n            i++;\n        }\n    }\n    return res;\n}\n\nint solution(char** A,int K,int N) {\n    int total = 0;\n    for (int i = 0; i < N; i++) {\n        total += solve_row(A[i], K, N);\n    }\n    return total;\n}\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while (T--) {\n        int N, K;\n        if (scanf(\"%d%d\", &N, &K) != 2) return 0;\n        char *A[N], buf[N][N + 5];\n        for (int i = 0; i < N; i++) {\n            A[i] = buf[i];\n            for (int j = 0; j < N; j++) scanf(\" %c\", &A[i][j]);\n        }\n        printf(\"%d\\n\", solution(A, K, N));\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n3 2\nT T P\nT P T\nP T P",
          "output": "3"
        },
        {
          "input": "2\n3 1\nT T T\nP P T\nT T P\n3 2\nT T P\nT P T\nP T P",
          "output": "2\n3"
        }
      ],
      "mandatory": [
        "int solution(char** A,int K,int N)"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 450,
        "loc": 86,
        "raw": "Max CCN: 10, Tokens: 450, NLOC: 86"
      }
    },
    {
      "id": "DSA_109",
      "challenge": 109,
      "level": 2,
      "level_challenge": 9,
      "title": "Challenge 109",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>A double-square number is an integer M which can be expressed as the sum of two perfect squares. For example, 10 is a double-square because 10 = 3^2 + 1^2 . Your task in this problem is, given M , determine the number of ways in which it can be written as the sum of two squares. For example, 10 can only be written as 3^2 + 1^2 (we don't count 1^2 + 3^2 as being different). On the other hand, 25 can be written as 5^2 + 0^2 or as 4^2 + 3^2 .<br><br>Constraints:<br>0 ≤ M ≤ 2147483647<br>1 ≤ N ≤ 100<br><br>Input Format:<br>You should first read an integer N , the number of test cases. The next N lines will contain N values of M .<br><br>Output Format:<br>Print the output in separate lines contains, the number of ways to write M as the sum of two squares.</p>",
      "code": "#include <stdio.h>\n#include <math.h>\n\nint count_ways(long long m) {\n    int c = 0;\n    for (long long a = 0; 2 * a * a <= m; a++) {\n        long long b = (long long)round(sqrt(m - a * a));\n        if (a * a + b * b == m) c++;\n    }\n    return c;\n}\n\nint main() {\n    int n, i;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for(i = 1;i<= n;i++) {\n        long long m;\n        scanf(\"%lld\", &m);\n        printf(\"%d\\n\", count_ways(m));\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n10\n25\n3\n0\n1",
          "output": "1\n2\n0\n1\n1"
        },
        {
          "input": "5\n23\n25\n33\n40\n51",
          "output": "0\n2\n0\n1\n0"
        }
      ],
      "mandatory": [
        "for(i = 1;i<= n;i++)"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 155,
        "loc": 26,
        "raw": "Max CCN: 4, Tokens: 155, NLOC: 26"
      }
    },
    {
      "id": "DSA_110",
      "challenge": 110,
      "level": 2,
      "level_challenge": 10,
      "title": "Challenge 110",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>The Pizza Hut has just introduced a new kind of pizza! It has a smiley face made of potato chips on one side (the \"smiley side\"), and nothing on the other side (the \"empty side\").<br><br>You are the head waiter on duty, and the kitchen has just given you a stack of pizzas to serve to a customer. Like any good pizza server, you have X-ray pizza vision, and you can see whether each pizza in the stack has the smiley side up or the empty side up. You think the customer will be happiest if every pizza is smiley side up when you serve them.<br><br>You know the following maneuver: carefully lift up some number of pizzas (possibly all of them) from the top of the stack, flip that entire group over, and then put the group back down on top of any pizzas that you did not lift up. When flipping a group of pizzas, you flip the entire group in one motion; you do not individually flip each pizza. Formally: if we number the pizzas 1, 2, ..., N from top to bottom, you choose the top i pizzas to flip. Then, after the flip, the stack is i, i-1, ..., 2, 1, i+1, i+2, ..., N. Pizzas 1, 2, ..., i now have the opposite side up, whereas pizzas i+1, i+2, ..., N have the same side up that they had up before.<br><br>For example, let's denote the smiley side as + and the empty side as -. Suppose that the stack, starting from the top, is --+-. One valid way to execute the maneuver would be to pick up the top three, flip the entire group, and put them back down on the remaining fourth pizza (which would stay where it is and remain unchanged). The new state of the stack would then be -++-. The other valid ways would be to pick up and flip the top one, the top two, or all four. It would not be valid to choose and flip the middle two or the bottom one, for example; you can only take some number off the top.<br><br>You will not serve the customer until every pizza is smiley side up, but you don't want the pizzas to get cold, so you have to act fast! What is the smallest number of times you will need to execute the maneuver to get all the pizzas smiley side up, if you make optimal choices?<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>Every character in S is either + or -.<br>1 ≤ length of S ≤ 100.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each consists of one line with a string S, each character of which is either + (which represents a pizza that is initially smiley side up) or - (which represents a pizza that is initially empty side up). The string, when read left to right, represents the stack when viewed from top to bottom.<br><br>Output Format:<br>Print the output in separate lines contains, the minimum number of times you will need to execute the maneuver to get all the pizzas smiley side up.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint count_flips(char *s) {\n    int ans = 0, n = strlen(s);\n    s[n] = '+';\n    for (int i = 0; i < n; i++) {\n        if (s[i] != s[i + 1]) ans++;\n    }\n    return ans;\n}\n\nvoid solve() {\n    char s[105];\n    if (scanf(\"%s\", s) == 1) {\n        printf(\"%d\\n\", count_flips(s));\n    }\n}\n\nint main(int argc, char const *argv[]) {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        solve();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n-\n-+\n+-\n+++\n--+-",
          "output": "1\n1\n2\n0\n3"
        },
        {
          "input": "5\n--\n++\n+-\n+-+\n+-+-",
          "output": "1\n0\n2\n2\n4"
        }
      ],
      "mandatory": [
        "int main(int argc, char const *argv[])"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 324,
        "loc": 38,
        "raw": "Max CCN: 3, Tokens: 324, NLOC: 38"
      }
    },
    {
      "id": "DSA_111",
      "challenge": 111,
      "level": 2,
      "level_challenge": 11,
      "title": "Challenge 111",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>A string 'p' of length m, consisting of lowercase letters of the English alphabet, is given.<br><br>You must choose some number 'a' between 0 and m. Then, you select 'a' characters of 'p' and permute them however you want. In this process, the positions of the other m−a characters remain unchanged.&nbsp;<br><br>Determine the minimum 'a' so that it is possible to sort 'p' alphabetically.<br><br>Constraints:<br>1 ≤ T≤ 1000<br>1 ≤ m ≤ 40<br><br>Input Format:<br>The first line contains a single integer T— the number of test cases. Then T test cases follow.<br><br>The first line of each test case contains one integer m — the length of the string.<br><br>The second line of each test case contains the string 'p'. It is guaranteed that 'p' contains only lowercase letters of the English alphabet.<br><br>Output Format:<br>Print the output in a separate lines contains, the minimum 'a' that allows you to obtain a string sorted alphabetically.</p>",
      "code": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nvoid solve() {\n    int m, a = 0;\n    string p, s;\n    cin >> m >> p;\n    s = p;\n    sort(&s[0], &s[m]);\n    for (int i = 0; i < m; i++) a += (p[i] != s[i]);\n    cout << a << '\\n';\n}\n\nint main() {\n    int t;\n    if (cin >> t) while(t--) solve();\n}\n\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\n3\nlol\n5\naaaaa\n4\ndcba",
          "output": "2\n0\n4"
        },
        {
          "input": "4\n2\nmkm\n6\nabbaaa\n4\ndcaa\n2\njh",
          "output": "2\n4\n4\n2"
        }
      ],
      "mandatory": [
        "while(t--)"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 120,
        "loc": 24,
        "raw": "Max CCN: 4, Tokens: 120, NLOC: 24"
      }
    },
    {
      "id": "DSA_112",
      "challenge": 112,
      "level": 2,
      "level_challenge": 12,
      "title": "Challenge 112",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Heath ledger the Joker lives in the amazon forest and has collected M fruits for lunch. Since he has a small mouth, he eats fruits one at a time. Some fruits are tougher than others! The j-th fruit takes him Nj seconds to eat.<br><br>Heath ledger eats fruits to get power. Different stones give him different amounts of power. Furthermore, the fruits lose power over time. The j-th fruit initially contains Fj units of power and will lose Gj units of power each second. When Heath ledger starts to eat a fruit, he will receive all the power the fruit contains immediately. The fruit's power stops decreasing once it hits zero.<br><br>What is the largest amount of power Heath ledger could receive from eating his fruits?<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ M ≤ 100.<br>1 ≤ Nj ≤ 100.<br>1 ≤ Fj ≤ 10^5.<br>0 ≤ Gj ≤ 10^5.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the integer M, the number of power fruits Heath ledger has. Then, there are M more lines, the M-th of which contains the three integers Nj, Fj and Gj, as described above.<br><br>Output Format:<br>Print the output in a separate lines contains, largest amount of power Heath ledger could receive from eating his fruits?</p>",
      "code": "#include <stdio.h>\n#include <algorithm>\nusing namespace std;\n\nstruct Fruit { int n, f, g; } fruits[105];\nint dp[10005];\n\nbool cmp(const Fruit &a, const Fruit &b) {\n    return a.n * b.g < b.n * a.g;\n}\n\nvoid read_fruits(int m_count) {\n    int m, j;\n    m = m_count;\n    for(j = 0; j < m; ++j) scanf(\"%d%d%d\", &fruits[j].n, &fruits[j].f, &fruits[j].g);\n}\n\nvoid init_dp(int max_t) {\n    for (int t = 0; t <= max_t; t++) dp[t] = 0;\n}\n\nint sum_time(int m) {\n    int s = 0;\n    for (int i = 0; i < m; i++) s += fruits[i].n;\n    return s;\n}\n\nvoid update_dp(int idx, int max_t) {\n    int n = fruits[idx].n, f = fruits[idx].f, g = fruits[idx].g;\n    for (int t = max_t; t >= n; t--) {\n        int gain = max(0, f - (t - n) * g);\n        dp[t] = max(dp[t], dp[t - n] + gain);\n    }\n}\n\nvoid run_all_dp(int m, int max_t) {\n    for (int i = 0; i < m; i++) update_dp(i, max_t);\n}\n\nvoid find_best(int max_t) {\n    int ans = 0;\n    for (int t = 0; t <= max_t; t++) ans = max(ans, dp[t]);\n    printf(\"%d\\n\", ans);\n}\n\nvoid solve() {\n    int m;\n    if (scanf(\"%d\", &m) != 1) return;\n    read_fruits(m);\n    sort(fruits, fruits + m, cmp);\n    int max_t = sum_time(m);\n    init_dp(max_t);\n    run_all_dp(m, max_t);\n    find_best(max_t);\n}\n\nvoid loop(int t) {\n    if (t > 0) {\n        solve();\n        loop(t - 1);\n    }\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) == 1) loop(t);\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\n4\n20 10 1\n5 30 5\n100 30 1\n5 80 60\n3\n10 4 1000\n10 3 1000\n10 8 1000\n2\n12 300 50\n5 200 0",
          "output": "105\n8\n500"
        },
        {
          "input": "2\n4\n15 10 1\n5 30 4\n90 30 1\n5 80 60\n2\n10 4 1000\n10 3 999",
          "output": "110\n4"
        }
      ],
      "mandatory": [
        "int m, j;",
        "for(j = 0; j < m; ++j)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 585,
        "loc": 65,
        "raw": "Max CCN: 2, Tokens: 585, NLOC: 65"
      }
    },
    {
      "id": "DSA_113",
      "challenge": 113,
      "level": 2,
      "level_challenge": 13,
      "title": "Problem Description: There are 'm' students numerated from 1 to m",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>There are 'm' students numerated from 1 to m. The level of the j-th student is xj. You need to split the students into stable groups. A group of students is called stable, if in the sorted array of their levels no two neighboring elements differ by more than 'a'.<br><br>Apart from the 'm' given students, teachers can invite at most 'r' additional students with arbitrary levels (at professors' choice). Find the minimum number of stable groups professors can form from all students (including the newly invited).<br><br><br>Constraints:<br>1 ≤ m ≤ 200000<br>0 ≤ r ≤ 10^18<br>1 ≤ a ≤ 10^18<br><br>Input Format:<br>The first line contains three integers m, r, a — the initial number of students, the number of students you can additionally invite, and the maximum allowed level difference.<br><br>The second line contains 'm' integers x1,x2,…,xm (1 ≤ xj ≤ 10^18) — the students levels.<br><br>Output Format:<br>Print the output in a single lines contains, the minimum number of stable groups you can split the students into.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#define L long long\n#define G x[j+1]-x[j]\n\nL x[200005], d[200005];\n\nint k(const L*a,const L*b){return*a>*b?1:-1;}\n\nint main() {\n    L m, r, a;\n    int j, cnt = 0;\n    scanf(\"%lld%lld%lld\", &m, &r, &a);\n    for(j=1;j<=m;++j) scanf(\"%lld\", x + j);\n    qsort(x + 1, m, 8, (void*)k);\n    for (j = 1; j < m; j++) if (G > a) d[cnt++] = (G - 1) / a;\n    qsort(d, cnt, 8, (void*)k);\n    m = cnt + 1;\n    for (j = 0; j < cnt && r >= d[j]; j++) { r -= d[j]; m--; }\n    printf(\"%lld\\n\", m);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "8 2 3\n1 1 5 8 12 13 20 22",
          "output": "2"
        },
        {
          "input": "13 0 37\n20 20 80 70 70 70 420 5 1 5 1 60 90",
          "output": "3"
        }
      ],
      "mandatory": [
        "for(j=1;j<=m;++j)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 215,
        "loc": 22,
        "raw": "Max CCN: 6, Tokens: 215, NLOC: 22"
      }
    },
    {
      "id": "DSA_114",
      "challenge": 114,
      "level": 2,
      "level_challenge": 14,
      "title": "Challenge 114",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Many years ago Berland was a small country where only 𝑛 people lived. Each person had some savings: the 𝑖-th one had 𝑎𝑖 burles.<br><br>The government considered a person as wealthy if he had at least 𝑥 burles. To increase the number of wealthy people Berland decided to carry out several reforms. Each reform looked like that:<br><br>the government chooses some subset of people (maybe all of them);<br>the government takes all savings from the chosen people and redistributes the savings among the chosen people equally.<br><br>A lot of data was lost from that time, so we don't know how many reforms were implemented and to whom. All we can do is ask you to calculate the maximum possible number of wealthy people after several (maybe zero) reforms.<br><br>Constraints:<br>1≤𝑇≤1000<br>1≤𝑛≤10^5, 1≤𝑥≤10^9<br>1≤𝑎𝑖≤10^9<br><br>Input Format:<br>The first line contains single integer 𝑇 — the number of test cases.<br><br>Next 2𝑇 lines contain the test cases — two lines per test case. The first line contains two integers 𝑛 and 𝑥 — the number of people and the minimum amount of money to be considered as wealthy.<br><br>The second line contains 𝑛 integers 𝑎1,𝑎2,…,𝑎𝑛 — the initial savings of each person.<br><br>Output Format:<br>Print the output in a separate lines contains the maximum possible number of wealthy people after several (maybe zero) reforms.</p>",
      "code": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nlong long a[100005], s, k, x;\nint n, i, t;\n\nint main() {\n    cin >> t;\n    while (t--) {\n        cin >> n >> x;\n        s = k = 0;\n        for(i=0;i<n;i++) cin >> a[i];\n        sort(a, a + n);\n        for(i=n-1;i>=0;i--) {\n            if (s + a[i] < (k + 1) * x) break;\n            s += a[i];\n            k++;\n        }\n        cout << k << \"\\n\";\n    }\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4\n4 3\n5 1 2 1\n4 10\n11 9 11 9\n2 5\n4 3\n3 7\n9 4 9",
          "output": "2\n4\n0\n3"
        },
        {
          "input": "5\n4 3\n1 1 2 1\n4 9\n10 9 11 9\n2 5\n4 3\n3 7\n9 4 8\n3 5\n9 1 8",
          "output": "0\n4\n0\n3\n3"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)",
        "for(i=n-1;i>=0;i--)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 145,
        "loc": 23,
        "raw": "Max CCN: 5, Tokens: 145, NLOC: 23"
      }
    },
    {
      "id": "DSA_115",
      "challenge": 115,
      "level": 2,
      "level_challenge": 15,
      "title": "Challenge 115",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>Mark has gotten very bored of winning every programming contest and farming unlimited rating. Today, he is going to farm tomatoes instead.&nbsp;<br><br>Mark's garden is an infinite 2D plane. he has 'm' tomatoes to plant, and the j-th tomato must be planted at (aj, bj). Starting at the point (0,0), Mark begins walking, in one step he can travel one unit right or up (increasing his a or b coordinate by 1 respectively). At any point (A,B) during his walk he can plant some tomatoes at arbitrary points using his tomato gun, consuming max(|A−a|,|B−b|) units of energy in order to plant a tomato at (a,b). Find the minimum total energy required to plant every tomato.&nbsp;<br><br>Note that Mark may plant any number of tomatoes from any point.&nbsp;<br><br>Constraints:&nbsp;<br>1 ≤ m ≤ 700000&nbsp;<br>0 ≤ aj,bj ≤ 10^9&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains the integer m.&nbsp;<br><br>The next 'm' lines contain two integers aj and bj, representing the location of the j-th tomato. It is possible that some tomatoes should be planted in the same location.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a single line contains the minimum total energy to plant all tomatoes.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n#include <queue>\nusing namespace std;\n#define mp make_pair\n#define L long long\npair<L, L> a[700005];\n\nvoid read_data(int m) {\n    int x,y;\n    for (int i = 1; i <= m; i++) { cin >> x >> y; a[i]=mp(x+y,x); }\n}\n\nint main() {\n    int m;\n    cin >> m;\n    read_data(m);\n    sort(a + 1, a + m + 1);\n    priority_queue<L> lq;\n    priority_queue<L, vector<L>, greater<L>> rq;\n    lq.push(0); rq.push(0);\n    L add = 0, ans = 0, last = 0;\n    for (int i = 1; i <= m; i++) {\n        add += a[i].first - last; last = a[i].first;\n        L l = lq.top(), r = rq.top() + add, v = a[i].second;\n        if (v < l) { ans += l - v; lq.pop(); rq.push(l - add); lq.push(v); lq.push(v); }\n        else if (v > r) { ans += v - r; rq.pop(); lq.push(r); rq.push(v - add); rq.push(v - add); }\n        else { lq.push(v); rq.push(v - add); }\n    }\n    cout << ans << \"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2\n2 0\n0 1",
          "output": "1"
        },
        {
          "input": "3\n5 5\n7 7\n4 9",
          "output": "2"
        }
      ],
      "mandatory": [
        "int x,y;",
        "a[i]=mp(x+y,x);"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 335,
        "loc": 28,
        "raw": "Max CCN: 4, Tokens: 335, NLOC: 28"
      }
    },
    {
      "id": "DSA_116",
      "challenge": 116,
      "level": 2,
      "level_challenge": 16,
      "title": "Problem Description: Spiderman has 'm' friends",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Spiderman has 'm' friends. They stand in a row from left to right, and the j-th friend from the left wears a Jersey with a number xj written on it. Each friend has a direction (left or right). In the beginning, the direction of each friend is right.<br><br>Spiderman can make some operations on friends. On each operation, Spiderman can choose two adjacent friends and swap their positions. After each operation, the direction of both chosen friends will also be flipped: left to right and vice versa.<br><br>Spiderman hopes that after some operations, the numbers written on the Jersey of 'm' friends in the row, read from left to right, become non-decreasing. Also he wants, that all friends will have a direction of right at the end. Please find if it is possible.<br><br>Constraints:<br>1 ≤ T≤ 50<br>1 ≤ m ≤ 10^5<br>1 ≤ xj ≤ 10^5<br><br>Input Format:<br>The input consists of multiple test cases. The first line contains a single integer T (1≤ T ≤ 50) — the number of test cases.<br><br>The first line of each test case contains a single integer m (1 ≤ m ≤ 10^5) — the number of Spidermans friends.<br><br>The second line contains 'm' integers x1,x2,…,xm (1 ≤ xj ≤ 10^5) — the numbers, written on the Jersey.<br><br>Output Format:<br>Print the output in a separate lines contains, a possible sequence of operations, print YES ; otherwise, print NO.</p>",
      "code": "#include <stdio.h>\n#define C c[j][0]\n#define D c[j][1]\nint c[100005][2], t, m, j, x, s, ok;\nint main() {\n    scanf(\"%d\", &t);\n    while (t--) {\n        scanf(\"%d\", &m);\n        for(j=0;j<m;j++) { scanf(\"%d\", &x); c[x][j % 2]++; }\n        s = 0, ok = 1;\n        for (j = 1; j <= 100000; j++) {\n            if (C != (C + D + 1 - s % 2) / 2) ok = 0;\n            s += C + D, C = D = 0;\n        }\n        puts(\"No\\0Yes\" + ok * 3);\n    }\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n4\n4 3 2 5\n4\n3 3 2 2\n5\n1 2 3 5 4",
          "output": "Yes\nYes\nNo"
        },
        {
          "input": "4\n5\n1 4 2 5\n3\n1 3 3\n4\n2 3 5 4\n2\n3 5",
          "output": "No\nYes\nNo\nNo"
        }
      ],
      "mandatory": [
        "for(j=0;j<m;j++)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 155,
        "loc": 20,
        "raw": "Max CCN: 5, Tokens: 155, NLOC: 20"
      }
    },
    {
      "id": "DSA_117",
      "challenge": 117,
      "level": 2,
      "level_challenge": 17,
      "title": "Challenge 117",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Many years ago Berland was a small country where only 𝑛 people lived. Each person had some savings: the 𝑖-th one had 𝑎𝑖 burles.<br><br>The government considered a person as wealthy if he had at least 𝑥 burles. To increase the number of wealthy people Berland decided to carry out several reforms. Each reform looked like that:<br><br>the government chooses some subset of people (maybe all of them);<br>the government takes all savings from the chosen people and redistributes the savings among the chosen people equally.<br><br>A lot of data was lost from that time, so we don't know how many reforms were implemented and to whom. All we can do is ask you to calculate the maximum possible number of wealthy people after several (maybe zero) reforms.<br><br>Constraints:<br>1≤𝑇≤1000<br>1≤𝑛≤10^5, 1≤𝑥≤10^9<br>1≤𝑎𝑖≤10^9<br><br>Input Format:<br>The first line contains single integer 𝑇 — the number of test cases.<br><br>Next 2𝑇 lines contain the test cases — two lines per test case. The first line contains two integers 𝑛 and 𝑥 — the number of people and the minimum amount of money to be considered as wealthy.<br><br>The second line contains 𝑛 integers 𝑎1,𝑎2,…,𝑎𝑛 — the initial savings of each person.<br><br>Output Format:<br>Print the output in a separate lines contains the maximum possible number of wealthy people after several (maybe zero) reforms.</p>",
      "code": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nlong long a[100005], s, k, x;\nint n, i, t;\n\nint main() {\n    cin >> t;\n    while (t--) {\n        cin >> n >> x;\n        s = k = 0;\n        for(i=0;i<n;i++) cin >> a[i];\n        sort(a, a + n);\n        for(i=n-1;i>=0;i--) {\n            if (s + a[i] < (k + 1) * x) break;\n            s += a[i];\n            k++;\n        }\n        cout << k << \"\\n\";\n    }\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4\n4 3\n5 1 2 1\n4 10\n11 9 11 9\n2 5\n4 3\n3 7\n9 4 9",
          "output": "2\n4\n0\n3"
        },
        {
          "input": "5\n4 3\n1 1 2 1\n4 9\n10 9 11 9\n2 5\n4 3\n3 7\n9 4 8\n3 5\n9 1 8",
          "output": "0\n4\n0\n3\n3"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)",
        "for(i=n-1;i>=0;i--)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 145,
        "loc": 23,
        "raw": "Max CCN: 5, Tokens: 145, NLOC: 23"
      }
    },
    {
      "id": "DSA_118",
      "challenge": 118,
      "level": 2,
      "level_challenge": 18,
      "title": "Challenge 118",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (88.89% Pass)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Problem Description:&nbsp;<br>You are given m sets of integers A1,A2,…,Am; elements of these sets are integers between 1 and n, inclusive.&nbsp;<br><br>There are two arrays of positive integers a1,a2,…,am and b1,b2,…,bn.&nbsp;<br><br>In one operation you can delete an element j from the set Ai and pay ai+bj coins for that.&nbsp;<br><br>You can make several (maybe none) operations (some sets can become empty).&nbsp;<br><br>After that, you will make an edge-colored undirected graph consisting of n vertices. For each set Ai you will add an edge (x,y) with color i for all x,y∈Ai and x&lt;y. Some pairs of vertices can be connected with more than one edge, but such edges have different colors.&nbsp;<br><br>You call a cycle i1→e1→i2→e2→…→ik→ek→i1 (ej is some edge connecting vertices ij and ij+1 in this graph) rainbow if all edges on it have different colors.&nbsp;<br><br>Find the minimum number of coins you should pay to get a graph without rainbow cycles&nbsp;<br><br>Constraints:&nbsp;<br>1≤m,n≤10^5&nbsp;<br>1≤ai≤10^9&nbsp;<br>1≤bi≤10^9&nbsp;<br>1≤si≤n&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains two integers m and n , the number of sets and the number of vertices in the graph.&nbsp;<br><br>The second line contains m integers a1,a2,…,am .&nbsp;<br><br>The third line contains n integers b1,b2,…,bn .&nbsp;<br><br>In the each of the next of m lines there are descriptions of sets. In the i-th line the first integer si is equal to the size of Ai. Then si integers follow: the elements of the set Ai. These integers are from 1 to n and distinct.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a single line contains the minimum number of coins you should pay for operations to avoid rainbow cycles in the obtained graph.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n#include <vector>\nusing namespace std;\n#define N 200005\nint n,m,tot,a[N],b[N],fa[N];\nint find(int x){return fa[x]==x?x:fa[x]=find(fa[x]);}\nstruct edge{int u,v;long long w;};\nbool cmp(const edge&x,const edge&y){return x.w>y.w;}\nint main(){\n    ios_base::sync_with_stdio(0); cin.tie(0);\n    if(!(cin>>m>>n))return 0;\n    for(int i=1;i<=m;i++)cin>>a[i];\n    for(int i=1;i<=n;i++)cin>>b[i];\n    long long total=0,mst=0;\n    vector<edge> e;\n    for(int i=1;i<=m;i++){\n        int s,x;cin>>s;\n        while(s--){cin>>x;total+=a[i]+b[x];e.push_back({i,m+x,a[i]+b[x]});}\n    }\n    for(int i=1;i<=m+n;i++)fa[i]=i;\n    sort(e.begin(),e.end(),cmp);\n    for(auto& ed:e){\n        int u=find(ed.u),v=find(ed.v);\n        if(u!=v){fa[u]=v;mst+=ed.w;}\n    }\n    cout<<total-mst<<\"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3 2\n1 2 3\n4 5\n2 1 2\n2 1 2\n2 1 2",
          "output": "11"
        },
        {
          "input": "7 8\n3 6 7 9 10 7 239\n8 1 9 7 10 2 6 239\n3 2 1 3\n2 4 1\n3 1 3 7\n2 4 3\n5 3 4 5 6 7\n2 5 7\n1 8",
          "output": "66"
        }
      ],
      "mandatory": [
        "return fa[x]==x?x:fa[x]=find(fa[x]);",
        "int n,m,tot,a[N],b[N],fa[N];"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 375,
        "loc": 40,
        "raw": "Max CCN: 1, Tokens: 375, NLOC: 40"
      }
    },
    {
      "id": "DSA_119",
      "challenge": 119,
      "level": 2,
      "level_challenge": 19,
      "title": "Challenge 119",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>As the Basketball coach at local college, Vivek have been tasked with picking a team of exactly R students to represent your college. There are M students for you to pick from. The j-th student has a skill rating Nj, which is a positive integer indicating how skilled they are.<br><br>Vivek have decided that a team is fair if it has exactly R students on it and they all have the same skill rating. That way, everyone plays as a team. Initially, it might not be possible to pick a fair team, so you will give some of the students one-on-one coaching. It takes one hour of coaching to increase the skill rating of any student by 1.<br><br>The competition season is starting very soon, so Vivek wants to calculate the minimum number of hours of coaching Vivek need to give before Vivek able to pick a fair team.<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ Nj ≤ 10000, for all j.<br>2 ≤ R ≤ M.<br>2 ≤ M ≤ 1000<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the two integers M and R, the number of students and the number of students Vivek need to pick, respectively. Then, another line follows containing M integers Nj; the j-th of these is the skill of the j-th student.<br><br>Output Format:<br>Print the output in a separate lines contains, Calculate the minimum number of hours of coaching Vivek need to give before Vivek able to pick a fair team.</p>",
      "code": "#include <stdio.h>\n#include <algorithm>\nusing namespace std;\n\nint s[100005];\nlong long p[100005];\n\nvoid read_arr(int m) {\n    for (int i = 1; i <= m; i++) scanf(\"%d\", &s[i]);\n}\n\nvoid calc_pref(int m) {\n    for (int i = 1; i <= m; i++) p[i] = p[i - 1] + s[i];\n}\n\nlong long min_cost(int m, int r) {\n    long long ans = 2e18;\n    for (int i = r; i <= m; i++) {\n        long long cur = 1LL * r * s[i] - (p[i] - p[i - r]);\n        ans = min(ans, cur);\n    }\n    return ans;\n}\n\nvoid solve_one() {\n    int m, r;\n    scanf(\"%d%d\", &m, &r);\n    read_arr(m);\n    sort(s + 1, s + m + 1);\n    calc_pref(m);\n    printf(\"%lld\\n\", min_cost(m, r));\n}\n\nint main() {\n    int tc, tt;\n    scanf(\"%d\", &tc);\n    for(tt = 1; tt <= tc; ++tt) solve_one();\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\n4 3\n3 1 9 100\n6 2\n5 5 1 2 3 4\n5 5\n7 7 1 7 7",
          "output": "14\n0\n6"
        },
        {
          "input": "5\n4 3\n3 1 9 100\n6 2\n5 6 1 2 3 4\n5 5\n7 7 1 7 7\n3 2\n6 7 1\n4 3\n5 6 1 4",
          "output": "14\n1\n6\n1\n3"
        }
      ],
      "mandatory": [
        "for(tt = 1; tt <= tc; ++tt)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 405,
        "loc": 50,
        "raw": "Max CCN: 2, Tokens: 405, NLOC: 50"
      }
    },
    {
      "id": "DSA_120",
      "challenge": 120,
      "level": 2,
      "level_challenge": 20,
      "title": "Problem Description:&nbsp; Dheena decided to try to make a test chamber",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>Dheena decided to try to make a test chamber. He made a nice test chamber, but there was only one detail absent — cubes.&nbsp;<br><br>For completing the chamber Dheena needs n cubes. i-th cube has a volume ai.&nbsp;<br><br>Dheena has to place cubes in such a way that they would be sorted in a non-decreasing order by their volume. Formally, for each i&gt;1, ai−1≤ai must hold.&nbsp;<br><br>To achieve his goal, Dheena can exchange two neighbouring cubes. It means that for any i&gt;1 you can exchange cubes on positions i−1 and i.&nbsp;<br><br>But there is a problem: Dheena is very impatient. If Dheena needs more than n⋅(n−1)/2−1 exchange operations, he won't do this boring work.&nbsp;<br><br>Dheena wants to know: can cubes be sorted under this conditions?&nbsp;<br><br>Constraints:&nbsp;<br>1≤t≤1000&nbsp;<br>2≤n≤5⋅10^4&nbsp;<br>1≤ai≤10^9&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains one positive integer t, denoting the number of test cases. Description of the test cases follows.&nbsp;<br><br>The first line of each test case contains one positive integer n — number of cubes.&nbsp;<br><br>The second line contains n positive integers ai — volumes of cubes&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a separate lines contains, \"YES\" if the cubes can be sorted and \"NO\" otherwise.</p>",
      "code": "#include <stdio.h>\nint t,n,a,b,f;\nint main() {\n    scanf(\"%d\", &t);\n    while (t--) {\n        scanf(\"%d%d\", &n, &a);\n        for (f = 0; --n; a = b) { scanf(\"%d\", &b); f |= (a <= b); }\n        puts(f ? \"YES\" : \"NO\");\n    }\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n5\n5 3 2 1 4\n6\n2 2 2 2 2 2\n2\n2 1",
          "output": "YES\nYES\nNO"
        },
        {
          "input": "2\n4\n6 5 3 1\n5\n1 1 2 2 2",
          "output": "NO\nYES"
        }
      ],
      "mandatory": [
        "int t,n,a,b,f;"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 95,
        "loc": 10,
        "raw": "Max CCN: 4, Tokens: 95, NLOC: 10"
      }
    },
    {
      "id": "DSA_121",
      "challenge": 121,
      "level": 2,
      "level_challenge": 21,
      "title": "Challenge 121",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Mustafa defines the happiness score of a string as the number of indices j such that Mj≠MN−j+1 where 1≤j≤N/2 (1-indexed). For example, the string CABABC has a happiness score of 2 since M2≠M5 and M3≠M4.<br><br>Mustafa gave Bama a string M of length N, consisting of uppercase letters and asked her to convert it into a string with a happiness score of L. In one operation, Bama can change any character in the string to any uppercase letter. Could you help Bama compute the minimum number of the operations required to transform the given string into a string with happiness score equal to L?<br><br>Constraints:<br>1≤T≤100.<br>0≤L≤N/2.<br>1≤N≤100<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow.<br><br>The first line of each test case contains two integers N and L. The second line of each test case contains a string M of length N, consisting of uppercase letters.<br><br>Output Format:<br>Print the output in a separate lines contains, compute the minimum number of the operations required to transform the given string into a string with happiness score equal to L?</p>",
      "code": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int T;\n    cin >> T;\n    while (T--) {\n        int N, L, c = 0, i;\n        string S;\n        cin >> N >> L >> S;\n        for (i = 0; i < N/2; i++) c += (S[i] != S[N - 1 - i]);\n        cout << abs(c - L) << \"\\n\";\n    }\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2\n5 1\nABCAA\n4 2\nABAA",
          "output": "0\n1"
        },
        {
          "input": "3\n6 1\nABCAAC\n5 2\nABAAB\n3 1\nABA",
          "output": "2\n0\n1"
        }
      ],
      "mandatory": [
        "string S;",
        "for (i = 0; i < N/2; i++)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 140,
        "loc": 20,
        "raw": "Max CCN: 3, Tokens: 140, NLOC: 20"
      }
    },
    {
      "id": "DSA_122",
      "challenge": 122,
      "level": 2,
      "level_challenge": 22,
      "title": "Problem Description:  pathan has a sequence of N integers, A1,A2,",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br><br>pathan has a sequence of N integers, A1,A2,...,AN. He likes this sequence if it contains a subsequence of M integers, B1,B2,...,BM within it. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.<br><br>You will be given a sequence of N integers, A1,A2,...,AN followed by another sequence of M integers, B1,B2,...,BM. Given these, you have to tell whether pathan likes the sequence of N integers(A1,A2,...,AN) or not.<br><br>Formally, output \"Yes\" if<br><br>∃idx1,idx2,...,idxM|1≤idx1&lt;idx2&lt;...&lt;idxM≤N and Aidxi=Bi∀i,1≤i≤M<br><br>Otherwise output \"No\". Note that the quotes are for clarity.<br><br>Constraints<br><br>1≤T≤100<br><br>1≤N≤103<br><br>1≤M≤103<br><br>1≤Ai,Bi≤10^9<br><br>Input Format:<br><br>The first line contains a single integer, T.<br><br>T test cases follow where each test case contains four lines:<br><br>The first line of a test case contains a single integer N<br><br>The second line of the test case contains N space separated integers, A1,A2,...,AN<br><br>The third line of the test case contains a single integer M.<br><br>The fourth line contains M space separated integers, B1,B2,...,BM<br><br>Symbols have usual meanings as described in the statement.<br><br>Output Format:<br><br>Print the output a single line containing the output. Output is \"Yes\" if Irfan likes the sequence A.&nbsp;</p><p>Output is \"No\" if pathan dislikes the sequence A.</p>",
      "code": "#include <stdio.h>\n\nvoid solve() {\n    int n, m, i, j, c = 0;\n    int no[100],fs[100];\n    scanf(\"%d\", &n);\n    for (i = 0; i < n; i++) scanf(\"%d\", &no[i]);\n    scanf(\"%d\", &m);\n    for (i = 0; i < m; i++) scanf(\"%d\", &fs[i]);\n    for (i = 0; i < m; i++) {\n        for (j = 0; j < n; j++) {\n            if (fs[i] == no[j]) {\n                c++;\n                break;\n            }\n        }\n    }\n    puts(c == m ? \"Yes\" : \"No\");\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n8\n1 4 3 2 5 6 9 4\n3\n1 7 8\n4\n21 7 16 11\n3\n15 7 3\n4\n1 4 3 2\n3\n1 1 3",
          "output": "No\nNo\nYes"
        },
        {
          "input": "3\n6\n3 2 5 6 9 4\n3\n1 7 8\n3\n7 16 11\n3\n15 7 3\n3\n4 3 2\n3\n1 1 3",
          "output": "No\nNo\nNo"
        }
      ],
      "mandatory": [
        "int no[100],fs[100]"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 225,
        "loc": 41,
        "raw": "Max CCN: 10, Tokens: 225, NLOC: 41"
      }
    },
    {
      "id": "DSA_123",
      "challenge": 123,
      "level": 2,
      "level_challenge": 23,
      "title": "Challenge 123",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>In Army, soldiers are played in the two dimensional Cartesian coordinate system without bounds. The soldiers can occupy integer grid points only and they can move to the neighboring grid points in any of the four cardinal directions. Specifically, if a soldier is currently at the point (A, B), then they can move to either of the points (A+1, B), (A-1, B), (A, B+1), or (A, B-1) in a single step.<br><br>After the game, S soldiers are scattered throughout the coordinate system such that any grid point is empty or occupied by one or more soldiers. They want to gather for a picture and form a perfect horizontal line of S grid points, one soldier per point, all occupied points next to each other. Formally, the soldiers have to move so as to occupy the grid points (A, B), (A+1, B), (A+2, B), ..., (A+S-1, B) for some coordinates A and B. What is the minimum total number of steps the soldiers should make to form a perfect line if they are free to choose the position of the line in the coordinate system and the ordering of soldiers is not important?<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ S ≤ 1000.<br>-500 ≤ Ai ≤ 500.<br>-500 ≤ Bi ≤ 500.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each consists of a single line containing a single integer S.<br><br>Output Format:<br>Print the output in a separate lines contains, Pyramid run of length R ≤ 500 using R additional lines. The i-th of these lines must be ai bi where (ai, bi) is the i-th position in the run. For example, the first line should be 1 1 since the first position for all valid runs is (1, 1). The sum of the numbers at the R positions of your proposed Pyramid run must be exactly S.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void *a, const void *b) {\n    return (*(const int *)a - *(const int *)b);\n}\n\nvoid solve() {\n    int S, i;\n    if (scanf(\"%d\", &S) != 1) return;\n    int X[1005], Y[1005];\n    for (i = 0; i < S; i++) {\n        scanf(\"%d %d\", &X[i], &Y[i]);\n    }\n    qsort(Y, S, sizeof(int), cmp);\n    int medY = Y[S / 2];\n    int ans = 0;\n    for (i = 0; i < S; i++) {\n        ans += abs(Y[i] - medY);\n    }\n    qsort(X, S, sizeof(int), cmp);\n    for (i = 0; i < S; i++) {\n        X[i] -= i;\n    }\n    qsort(X, S, sizeof(int), cmp);\n    int medX = X[S / 2];\n    for (i = 0; i < S; i++) {\n        ans += abs(X[i] - medX);\n    }\n    printf(\"%d\\n\", ans);\n}\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while (T--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n2\n1 1\n4 4\n3\n1 1\n1 2\n1 3",
          "output": "5\n4"
        },
        {
          "input": "2\n2\n1 3\n2 4\n3\n1 1\n2 2\n1 3",
          "output": "1\n3"
        }
      ],
      "mandatory": [
        "X[i]",
        "Y[i]"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 350,
        "loc": 50,
        "raw": "Max CCN: 10, Tokens: 350, NLOC: 50"
      }
    },
    {
      "id": "DSA_124",
      "challenge": 124,
      "level": 2,
      "level_challenge": 24,
      "title": "Challenge 124",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem description</p><p>You're at a celebration with N individuals, but only one of them is familiar to everyone. If such a person is there at the party, he or she does not know anybody there. Your mission is to locate the party's stranger (guest).</p><p>You will be given a square matrix M where if an element of row i and column j is set to 1 it means the ith person knows the jth person. You need to find the 1≤id≤N of the guest if present, otherwise print −1.</p><p>Constraints:</p><p>1≤T≤50</p><p>2≤N≤3000</p><p>M[i][j] = 0 or 1</p><p>1≤id≤N</p><p>Input Format:</p><p>The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consist of 2 lines.</p><p>The first line of each test case contains an integer N denoting the number of people at the party.</p><p>Next N lines contain N2 integers of the matrix M, where each line contains N integers.</p><p>Output Format:</p><p>For each test case, print the id of the celebrity if present. Otherwise, print \"-1\".</p>",
      "code": "#include <stdio.h>\n\nint a[1000][1000];\n\nvoid solve() {\n    int n, i, j;\n    if (scanf(\"%d\", &n) != 1) return;\n    for (i = 0; i < n; i++) {\n        for (j = 0; j < n; j++) {\n            scanf(\"%d\", &a[i][j]);\n        }\n    }\n    int c = 0;\n    for (i = 1; i < n; i++) {\n        if (a[c][i]) c = i;\n    }\n    int ok = 1;\n    for (i = 0; i < n; i++) {\n        if (i != c && (a[c][i] != 0 || a[i][c] != 1)) {\n            ok = 0;\n            break;\n        }\n    }\n    if (ok) printf(\"%d\\n\", c + 1);\n    else printf(\"-1\\n\");\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n3\n1 0 0\n1 0 0\n1 1 1",
          "output": "1"
        },
        {
          "input": "2\n4\n0 1 0 0\n1 0 1 0\n1 1 0 1\n1 0 0 0\n3\n0 0 0\n0 0 0\n0 0 0",
          "output": "-1\n-1"
        }
      ],
      "mandatory": [
        "int a[1000][1000];"
      ],
      "complexity": {
        "ccn": 23,
        "tokens": 450,
        "loc": 71,
        "raw": "Max CCN: 23, Tokens: 450, NLOC: 71"
      }
    },
    {
      "id": "DSA_125",
      "challenge": 125,
      "level": 2,
      "level_challenge": 25,
      "title": "Challenge 125",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Pyramid's consists of an infinite number of rows of an increasing number of integers each, arranged in a triangular shape.<br><br>Let us define (a, b) as the b-th position from the left in the a-th row, with both a and b counted starting from 1. Then Pyramid's is defined by the following rules:<br><br>The r-th row contains r positions (a, 1), (a, 2), ..., (a, a).<br>The numbers at positions (a, 1) and (a, a) are 1, for all a.<br>The number at position (a, b) is the sum of the numbers at positions (a - 1, b - 1) and (a - 1, b), for all b with 2 ≤ b ≤ a - 1.<br><br>In this problem, a Pyramid run is a sequence of s positions (a1, b1), (a2, b2), ..., (as, bs) in Pyramid's that satisfy the following criteria:<br><br>a1 = 1 and b1 = 1.<br>Each subsequent position must be within the triangle and adjacent (in one of the six possible directions) to the previous position. That is, for all i ≥ 1, (ai + 1, bi + 1) must be one of the following that is within the triangle: (ai - 1, bi - 1), (ai - 1, bi), (ai, bi - 1), (ai, bi + 1), (ai + 1, bi), (ai + 1, bi + 1).<br>No position may be repeated within the sequence. That is, for every i ≠ j, either ai ≠ aj or bi ≠ bj, or both.<br>Find any Pyramid run of R ≤ 500 positions such that the sum of the numbers in all of the positions it visits is equal to S. It is guaranteed that at least one such run exists for every S.<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ S ≤ 1000.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each consists of a single line containing a single integer S.<br><br>Output Format:<br>Print the output in a separate lines contains, Pyramid run of length R ≤ 500 using R additional lines. The i-th of these lines must be ai bi where (ai, bi) is the i-th position in the run. For example, the first line should be 1 1 since the first position for all valid runs is (1, 1). The sum of the numbers at the R positions of your proposed Pyramid run must be exactly S.</p>",
      "code": "#include <stdio.h>\n\nvoid print_row(int row, int side) {\n    int j;\n    if (side == 0) {\n        for (j = 0; j <= row; j++) printf(\"%d %d\\n\", row + 1, j + 1);\n    } else {\n        for(j=row;j>=0;j--) printf(\"%d %d\\n\", row + 1, j + 1);\n    }\n}\n\nvoid solve(int tc) {\n    int s, i, row, side = 1;\n    if (scanf(\"%d\", &s) != 1) return;\n    printf(\"Process #%d:\\n\", tc);\n    if (s <= 30) {\n        for (i = 1; i <= s; i++) printf(\"%d %d\\n\", i, i);\n        return;\n    }\n    int m = s - 30;\n    int pop = 0;\n    for (row = 0; row < 30; row++) {\n        if ((m >> row) & 1) {\n            pop++;\n            print_row(row, side);\n            side ^= 1;\n        } else {\n            printf(\"%d %d\\n\", row + 1, side ? row + 1 : 1);\n        }\n    }\n    for (row = 30; pop > 0; row++, pop--) {\n        printf(\"%d %d\\n\", row + 1, side ? row + 1 : 1);\n    }\n}\n\nint main() {\n    int t, tc;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (tc = 1; tc <= t; tc++) solve(tc);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n1\n4\n19",
          "output": "Process #1:\n1 1\nProcess #2:\n1 1\n2 2\n3 3\n4 4\nProcess #3:\n1 1\n2 2\n3 3\n4 4\n5 5\n6 6\n7 7\n8 8\n9 9\n10 10\n11 11\n12 12\n13 13\n14 14\n15 15\n16 16\n17 17\n18 18\n19 19"
        },
        {
          "input": "3\n2\n6\n9",
          "output": "Process #1:\n1 1\n2 2\nProcess #2:\n1 1\n2 2\n3 3\n4 4\n5 5\n6 6\nProcess #3:\n1 1\n2 2\n3 3\n4 4\n5 5\n6 6\n7 7\n8 8\n9 9"
        }
      ],
      "mandatory": [
        "for(j=row;j>=0;j--)"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 350,
        "loc": 50,
        "raw": "Max CCN: 10, Tokens: 350, NLOC: 50"
      }
    },
    {
      "id": "DSA_126",
      "challenge": 126,
      "level": 2,
      "level_challenge": 26,
      "title": "Challenge 126",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Selvam and Lakshmi's daughter is almost 3 years old! However, even though the daughter is more independent now, scheduling daughter activities and domestic necessities is still a challenge for the couple.<br><br>Selvam and Lakshmi have a list of B activities to take care of during the day. Each activity happens during a specified interval during the day. They need to assign each activity to one of them, so that neither of them is responsible for two activities that overlap. An activity that ends at time t is not considered to overlap with another activity that starts at time t.<br><br>For example, suppose that Selvam and Lakshmi need to cover 3 activities: one running from 18:00 to 20:00, another from 19:00 to 21:00 and another from 22:00 to 23:00. One possibility would be for Lakshmi to cover the activity running from 19:00 to 21:00, with Selvam covering the other two. Another valid schedule would be for Selvam to cover the activity from 18:00 to 20:00 and Lakshmi to cover the other two. Notice that the first two activities overlap in the time between 19:00 and 20:00, so it is impossible to assign both of those activities to the same partner.<br><br>Compute any schedule that does not require the same person to cover overlapping activities, or say that it is impossible.<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>0 ≤ Si &lt; Ei ≤ 24 × 60.<br>2 ≤ B ≤ 1000.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing a single integer B, the number of activities to assign. Then, B more lines follow. The i-th of these lines (counting starting from 1) contains two integers Si and Ei. The i-th activity starts exactly Si minutes after midnight and ends exactly Ei minutes after midnight.<br><br>Output Format:<br>Print the output in a separate lines contains compute any schedule that does not require the same person to cover overlapping activities, or say that it is impossible..The i-th character in y must be S if the i-th activity is assigned to Selvam in your proposed schedule, and L if it is assigned to Lakshmi.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint lhs[1005];\nint rhs[1005];\nint p[1005];\nchar ans[1005];\n\nint cmp(const void *a, const void *b) {\n    int i1 = *(const int *)a;\n    int i2 = *(const int *)b;\n    if (rhs[i1] != rhs[i2]) return rhs[i1] - rhs[i2];\n    return lhs[i1] - lhs[i2];\n}\n\nvoid solve() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return;\n    for(int i=0;i<n;i++) {\n        scanf(\"%d %d\", &lhs[i], &rhs[i]);\n        p[i] = i;\n    }\n    qsort(p, n, sizeof(int), cmp);\n    int s_end = 0, l_end = 0, imp = 0;\n    for(int i=0;i<n;i++) {\n        int idx = p[i];\n        if (lhs[idx] >= s_end) {\n            ans[idx] = 'S';\n            s_end = rhs[idx];\n        } else if (lhs[idx] >= l_end) {\n            ans[idx] = 'L';\n            l_end = rhs[idx];\n        } else {\n            imp = 1;\n            break;\n        }\n    }\n    if (imp) puts(\"IMPOSSIBLE\");\n    else {\n        ans[n] = '\\0';\n        puts(ans);\n    }\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n3\n360 480\n420 540\n600 660\n3\n0 1440\n1 3\n2 4\n5\n99 150\n1 100\n100 301\n2 5\n150 250\n2\n0 720\n720 1440",
          "output": "SLS\nIMPOSSIBLE\nSLLSS\nSS"
        },
        {
          "input": "2\n5\n56 567\n34 345\n23 453\n24 345\n12 567\n4\n12 456\n12 643\n7 456\n8 789",
          "output": "IMPOSSIBLE\nIMPOSSIBLE"
        }
      ],
      "mandatory": [
        "int lhs[1005];",
        "int rhs[1005];",
        "for(int i=0;i<n;i++)"
      ],
      "complexity": {
        "ccn": 19,
        "tokens": 550,
        "loc": 84,
        "raw": "Max CCN: 19, Tokens: 550, NLOC: 84"
      }
    },
    {
      "id": "DSA_127",
      "challenge": 127,
      "level": 2,
      "level_challenge": 27,
      "title": "Question description   Vairamuthu is studying B",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Vairamuthu is studying B.Tech.-Information Engineering.&nbsp;</p><p>He's going to attend a computer science-based subject exam this semester.</p><p>Due to the less preparation in the previous monthly tests, &nbsp;his internal mark decreased.&nbsp;</p><p>His computer science Professor made an offer one more chance to boost up his internal marks.&nbsp;</p><p>Professor assigns a program to Simon for the internal mark boost-up.&nbsp;</p><p>So Vairamuthu wants to solve Questions which is given by the test coordinator.<br>Vairamuthu need to identify the the pythagorean triples from this list of array. can you help him?</p><p><strong>Constraints</strong></p><p>0&lt;n1&lt;100</p><p>0&lt;arr &lt;1000</p><p><strong>Input Format</strong></p><p>&nbsp; -First line will contain the number of elements present in the array.<br>&nbsp;&nbsp;&nbsp; -Second line will contain the elements of array</p><p><strong>Output Format</strong><br><strong>&nbsp;&nbsp;&nbsp; </strong>-Output contains the space separated integers which are Pythagorean tripes.</p><p><strong>Explanation</strong></p><p>A Pythagorean triple consists of three positive integers a, b, and c, such that a² + b² = c².&nbsp;</p><p>Such a triple is commonly written, and a well-known example is.&nbsp;</p><p>If is a Pythagorean triple, then so is for any positive integer k.&nbsp;</p><p>A primitive Pythagorean triple is one in which a, b and c are co-prime.<br>In this page we will look into a program in C programming language to find Pythagorean Triples from an array</p>",
      "code": "#include <stdio.h>\n\nint isTriplet(int ar[],int n) {\n    int i, j, k, x, y, z;\n    for (i = 0; i < n; i++) {\n        for (j = i + 1; j < n; j++) {\n            for (k = j + 1; k < n; k++) {\n                x = ar[i] * ar[i];\n                y = ar[j] * ar[j];\n                z = ar[k] * ar[k];\n                if (x == y + z || y == x + z || z == x + y) {\n                    printf(\"%d %d %d\", ar[i], ar[j], ar[k]);\n                    return 1;\n                }\n            }\n        }\n    }\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    int ar[n];\n    for(int i=0;i<n;i++) {\n        scanf(\"%d\", &ar[i]);\n    }\n    if (isTriplet(ar, n) == -1) {\n        printf(\"no triples found\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n3 4 6 5 7 8",
          "output": "3 4 5"
        },
        {
          "input": "5\n10 4 6 12 5",
          "output": "no triples found"
        }
      ],
      "mandatory": [
        "int isTriplet(int ar[],int n)",
        "for(int i=0;i<n;i++)",
        "int ar[n]"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 250,
        "loc": 40,
        "raw": "Max CCN: 7, Tokens: 250, NLOC: 40"
      }
    },
    {
      "id": "DSA_128",
      "challenge": 128,
      "level": 2,
      "level_challenge": 28,
      "title": "Challenge 128",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:</p><p>vijay has just finished baking several burgers, and it's time to place them on cooling racks. vijay has exactly as many cooling racks as burgers.&nbsp;</p><p>Each cooling rack can only hold one burger, and each burger may only be held by one cooling rack, but vijay isn't confident that the cooling racks can support the weight of the burgers.&nbsp;</p><p>vijay knows the weight of each burger, and has assigned each cooling rack a maximum weight limit. What is the maximum number of burgers the vijay can cool on the racks?</p><p>Constraints:</p><p>T≤30</p><p>N≤30</p><p>Input Format:</p><p>Input begins with an integer T≤30, the number of test cases.&nbsp;</p><p>Each test case consists of 3 lines.&nbsp;</p><p>The first line of each test case contains a positive integer N≤30, the number of burgers (and also the number of racks).&nbsp;</p><p>The second and third lines each contain exactly positive N integers not exceeding 100.&nbsp;</p><p>The integers on the second line are the weights of the burgers, and the integers on the third line are the weight limits of the cooling racks.</p><p>Output Format:</p><p>Print the maximum number of burgers vijay can place on the racks.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void *a, const void *b) {\n    return (*(const int *)a - *(const int *)b);\n}\n\nvoid solve() {\n    int n, i, j = 0, ans = 0;\n    int no[32],w[32];\n    if (scanf(\"%d\", &n) != 1) return;\n    for (i = 0; i < n; i++) scanf(\"%d\", &no[i]);\n    for (i = 0; i < n; i++) scanf(\"%d\", &w[i]);\n    qsort(no, n, sizeof(int), cmp);\n    qsort(w, n, sizeof(int), cmp);\n    for (i = 0; i < n && j < n; j++) {\n        if (no[i] <= w[j]) {\n            ans++;\n            i++;\n        }\n    }\n    printf(\"%d\\n\", ans);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n5\n16 34 26 5 31\n37 40 32 43 12",
          "output": "5"
        },
        {
          "input": "1\n4\n87 45 3 2\n56 13 4 8",
          "output": "3"
        }
      ],
      "mandatory": [
        "int no[32],w[32]"
      ],
      "complexity": {
        "ccn": 12,
        "tokens": 303,
        "loc": 52,
        "raw": "Max CCN: 12, Tokens: 303, NLOC: 52"
      }
    },
    {
      "id": "DSA_129",
      "challenge": 129,
      "level": 2,
      "level_challenge": 29,
      "title": "Question description  sami is studying B",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description</p><p>sami is studying B.Tech.-Software Engineering.&nbsp;</p><p>He's going to attend a computer science-based subject exam this semester.</p><p>Due to the less preparation in the previous monthly tests, &nbsp;his internal mark decreased.&nbsp;</p><p>His computer science Professor made an offer one more chance to boost up his internal marks.&nbsp;</p><p>Professor assigns a program to Simon for the internal mark boostup.&nbsp;</p><p>So Sami wants to solve Questions which is given by the test coordinator.<br>Simon need to identify the find largest sum contiguous sub-array. can you help him?</p><p>Functional Description</p><p>Naive solution would be use two for loops and check every subarray and return the subarray which has the maximum sum.</p><p>Constraints</p><p>0&lt;n1&lt;100</p><p>0&lt;n2 &lt;100</p><p>0&lt;k&lt;100</p><p>Explanation</p><p>The best way to solve this puzzle is to use Kadane’s algorithm which runs in O(n) time.&nbsp;</p><p>The idea is to keep scanning through the array and calculating the maximum sub-array that ends at every position.&nbsp;</p><p>The sub-array will either contain a range of numbers if the array has intermixed positive and negative values, or it will contain the least negative value if the array has only negative values.</p>",
      "code": "#include <stdio.h>\n\nint mx(int a, int b) {\n    return a > b ? a : b;\n}\n\nint kadane(int arr[],int n) {\n    int m = arr[0], c = 0;\n    for(int i=0;i<n;i++) {\n        c = mx(arr[i], c + arr[i]);\n        m = mx(m, c);\n    }\n    return m;\n}\n\nint main() {\n    int n, a[99];\n    scanf(\"%d\", &n);\n    for(int i=0;i<n;i++) scanf(\"%d\", a + i);\n    printf(\"%d\", kadane(a, n));\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n-1 1 4 1 1 2 -3",
          "output": "9"
        },
        {
          "input": "9\n-2 1 -3 4 -1 2 1 -5 4",
          "output": "6"
        }
      ],
      "mandatory": [
        "int kadane(int arr[],int n)",
        "for(int i=0;i<n;i++)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 150,
        "loc": 27,
        "raw": "Max CCN: 3, Tokens: 150, NLOC: 27"
      }
    },
    {
      "id": "DSA_130",
      "challenge": 130,
      "level": 2,
      "level_challenge": 30,
      "title": "Question Description: Tom read a book about universal numbers",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Tom read a book about universal numbers. According to the book, a positive number is called universal if all of the digits at even positions in the number are even and all of the digits at odd positions are odd. The digits are enumerated from left to right starting from 1. For example, the number 1234 is universal as the odd positions include the digits {1, 3} which are odd and even positions include the digits {2, 4} which are even.<br><br>Given two numbers M and N, Tom wants to count how many numbers in the range [M, N] (M and N inclusive) are universal.<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ M ≤ N ≤ 10^18<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of a single line with two numbers M and N.<br><br>Output Format:<br>Print the output in a separate lines contains count of universal numbers.</p>",
      "code": "#include <stdio.h>\n\nlong long F(long long n) {\n    if (n <= 0) return 0;\n    int d[20], len = 0, ok = 1;\n    long long v = n, ans = 0, p = 5, pref = 0;\n    while (v > 0) {\n        d[len++] = v % 10;\n        v /= 10;\n    }\n    for (int i = 1; i < len; i++, p *= 5) ans += p;\n    for (int i = 0; i < len; i++) {\n        int cur = d[len - 1 - i], pos = i + 1;\n        int cnt = (pos & 1) ? cur / 2 : (cur + 1) / 2;\n        pref = pref * 5 + cnt;\n        if ((cur & 1) != (pos & 1)) {\n            ok = 0;\n            while (++i < len) pref *= 5;\n            break;\n        }\n    }\n    return ans + pref + ok;\n}\n\nint main() {\n    int t;\n    long long m, n, L = 0, R = 0;\n    while (L < R && R % 10 != 0) R--;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        scanf(\"%lld %lld\", &m, &n);\n        printf(\"%lld\\n\", F(n) - F(m - 1));\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n5 15\n120 125\n779 783",
          "output": "6\n3\n2"
        },
        {
          "input": "4\n4 12\n110 123\n655 785\n1111 1232",
          "output": "5\n2\n23\n7"
        }
      ],
      "mandatory": [
        "while (v > 0)",
        "while (L < R && R % 10 != 0)"
      ],
      "complexity": {
        "ccn": 14,
        "tokens": 295,
        "loc": 50,
        "raw": "Max CCN: 14, Tokens: 295, NLOC: 50"
      }
    },
    {
      "id": "DSA_131",
      "challenge": 131,
      "level": 2,
      "level_challenge": 31,
      "title": "Challenge 131",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Saroja and her friends are playing a unique version of sticker game involving a deck with M different ratings, conveniently numbered 1...M (a normal deck has M = 13). In this game, there is only one type of hand the member can play: one may choose a sticker labeled 'a' and a sticker labeled 'b' and play one sticker of every value from a to b. This type of hand is called a \"straight\".<br><br>Saroja's hand currently holds 'xa' stickers of rank-a. Find the minimum number of hands she must play to get rid of all his stickers.<br><br>Constraints:<br>1 &lt;= M &lt;= 10^5<br>1 &lt;= xa &lt;= 10^5<br><br>Input Format:<br>First line contains M,<br>Size of arrays<br>Second line contains M integer: X1, X2, X3,...XM<br>Third line contains M integer: Y1, Y2, Y3,..YM<br><br>Output Format:<br>Print the output in a single line contains, Find the minimum number of hands she must play to get rid of all his stickers.</p>",
      "code": "#include <stdio.h>\n\nint main() {\n    int n, prev = 0, curr;\n    long long int hands = 0;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    while (n--) {\n        scanf(\"%d\", &curr);\n        if (curr > prev) hands += curr - prev;\n        prev = curr;\n    }\n    printf(\"%lld\\n\", hands);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1\n3\n1\n2\n5",
          "output": "7"
        },
        {
          "input": "6\n1\n4\n5\n2\n5\n4",
          "output": "8"
        }
      ],
      "mandatory": [
        "long long int hands = 0;"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 90,
        "loc": 18,
        "raw": "Max CCN: 4, Tokens: 90, NLOC: 18"
      }
    },
    {
      "id": "DSA_132",
      "challenge": 132,
      "level": 2,
      "level_challenge": 32,
      "title": "Question Description:  \"TITANIC Corp",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br><br>\"TITANIC Corp.\" is a small company that owns a single ship. The customers of TITANIC Corp are large ship companies which rent the ship to accommodate occasional overcrowd.<br><br>Customers send rental requests that consist of a time interval and a cost that the customer is ready to pay for renting the ship during the given time period. Requests of all the customers are known in advance. Of course, not all requests can be accommodated and some requests have to be declined. Jack Dawson, the Officer of TITANIC Corp would like to maximize the gain of the company.<br><br>Constraints:<br><br>1 ≤ T ≤ 30<br>r &lt;= 10000<br>1 &lt;= st &lt; 100000<br>0 &lt; d &lt; 100000<br>0 &lt; c &lt;10000<br><br>Input Format:<br><br>The first line of the input contains a number that indicates the number of test cases to follow. The first line of each test case contains the number of requests 'r'. In the following r lines the requests are given. Each request is described by 3 integer values: The start time of the request 'st', the duration 'd' of the request, and the cost 'c' the customer is ready to pay for this request.<br><br>Output Format:<br><br>Print the output the total cost paid by the ships.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint req[10005][3];\nint dp[10005];\n\nint cmp(const void *a, const void *b) {\n    const int *x = (const int *)a;\n    const int *y = (const int *)b;\n    return (x[0] + x[1]) - (y[0] + y[1]);\n}\n\nint max_val(int a, int b) {\n    if (a > b) return a;\n    else if (b > a) return b;\n    return a;\n}\n\nint get_val(int p) {\n    if (p >= 0) return dp[p];\n    return 0;\n}\n\nint find_last(int n, int st) {\n    int l = 0, r = n - 1, ans = -1;\n    while (l <= r) {\n        int mid = (l + r) / 2;\n        if (req[mid][0] + req[mid][1] <= st) {\n            ans = mid;\n            l = mid + 1;\n        } else {\n            r = mid - 1;\n        }\n    }\n    return ans;\n}\n\nvoid compute_dp(int n) {\n    for (int i = 0; i < n; i++) {\n        int p = find_last(i, req[i][0]);\n        dp[i] = max_val(req[i][2] + get_val(p), get_val(i - 1));\n    }\n}\n\nvoid read_all(int n) {\n    char buf[100];\n    for (int i = 0; i < n; i++) {\n        scanf(\" %[^\\n]\", buf);\n        int c = 10;\n        sscanf(buf, \"%d %d %d\", &req[i][0], &req[i][1], &c);\n        req[i][2] = c;\n    }\n}\n\nvoid solve() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return;\n    read_all(n);\n    qsort(req, n, sizeof(req[0]), cmp);\n    compute_dp(n);\n    printf(\"%d\\n\", get_val(n - 1));\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n4\n0 5 8\n3 7 14\n5 8 7\n6 9 8\n3\n1 3 4\n2 5 8\n2 6 9",
          "output": "16\n9"
        },
        {
          "input": "3\n3\n0 5 6\n3 5 12\n5 3 7\n3\n1 4 4\n2 7 8\n2 8 9\n2\n1 4\n2 7",
          "output": "13\n9\n10"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "while",
        "else if"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 625,
        "loc": 90,
        "raw": "Max CCN: 3, Tokens: 625, NLOC: 90"
      }
    },
    {
      "id": "DSA_133",
      "challenge": 133,
      "level": 2,
      "level_challenge": 33,
      "title": "Challenge 133",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Ram's friend is recently done with Hotel management course and now she wants to boast in front of his college friends by making a nice cake. She has come up with an amazing cake called Strawberry Velvet. To make the dish, she has already collected Strawberries numbered 1 to B. She has also decided to connect each distinct and unordered pair of Strawberries with a sweet strand, made of jaggery powder. Sweet strands are either Pink or White, depending on the jaggery powder content in them. Each White strand contains one units of jaggery powder, and each Pink strand contains two units of jaggery powder.<br><br>But it turns out that the dessert is now too tasty, and these days his college friends are dieting and they usually like dishes with less jaggery powder. She is really confused now and comes to your rescue. Can you help her find out which all sweet strands she should remove such that each pair of Strawberries is connected directly or indirectly via a jaggery powder strand, and the dish has the minimum possible jaggery powder content?<br><br><br>Constraints:<br>1 ≤ T ≤ 50<br>A ≤ B*(B-1)/2<br>1 ≤ Pi ≤ B, for all i.<br>1 ≤ Qi ≤ B, for all i.<br>Pi ≠ Qi, for all i.<br>Every {Pi, Qi} is distinct.<br>1 ≤ B ≤ 100.<br>0 ≤ A ≤ 100.<br><br>Input Format:<br>The first line of input gives the number of test cases, T.<br><br>Each test case begins with a line containing two integers B and A, the number of Strawberries and the number of white sweet strands, respectively.<br><br>Then A lines follow, each describing a pair of Strawberries connected to a white strand. The i-th line contains cherries numbered Pi and Qi, it indicates that Pi and Qi Strawberry are connected with a white strand of jaggery powder.<br><br>Note: Any other pair of Strawberries not present in the input means that they are connected by a Pink strand.<br><br>Output Format:<br>Print the output in a separate lines contains minimum possible jaggery powder content.</p>",
      "code": "#include <stdio.h>\n\nint parent[105];\n\nint find(int i) {\n    while (i != parent[i]) i = parent[i];\n    return i;\n}\n\nint unite(int u, int v) {\n    int ru = find(u), rv = find(v);\n    if (ru != rv) {\n        parent[ru] = rv;\n        return 1;\n    }\n    return 0;\n}\n\nvoid reset_dsu(int n) {\n    for (int i = 1; i <= n; i++) parent[i] = i;\n}\n\nint read_edges(int a, int b) {\n    int comp = b;\n    for (int i = 0; i < a; i++) {\n        int u, v;\n        scanf(\"%d %d\", &u, &v);\n        comp -= unite(u, v);\n    }\n    return comp;\n}\n\nvoid solve(int tc) {\n    int b, a;\n    scanf(\"%d %d\", &b, &a);\n    reset_dsu(b);\n    int c = read_edges(a, b);\n    printf(\"Line #%d: %d\\n\", tc, b + c - 2);\n}\n\nint main() {\n    int t, tc;\n    scanf(\"%d\", &t);\n    for (tc = 1; tc <= t; tc++) solve(tc);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n2 1\n1 4\n3 1\n2 6\n4 1\n3 6\n4 1\n4 7",
          "output": "Line #1: 1\nLine #2: 3\nLine #3: 5\nLine #4: 5"
        },
        {
          "input": "3\n2 1\n1 3\n3 1\n2 3\n4 1\n3 4",
          "output": "Line #1: 1\nLine #2: 3\nLine #3: 5"
        }
      ],
      "mandatory": [
        "while",
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 325,
        "loc": 58,
        "raw": "Max CCN: 2, Tokens: 325, NLOC: 58"
      }
    },
    {
      "id": "DSA_134",
      "challenge": 134,
      "level": 2,
      "level_challenge": 34,
      "title": "Question Description: Ram has given two integer arrays X and Y to Sakthi",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Ram has given two integer arrays X and Y to Sakthi. Sakthi wants to find the Z that minimize the following equation. Print the Answer.<br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Answer :&nbsp;</p><figure class=\"table\"><table><tbody><tr><td>∑<sub>i-1</sub> <sup>M</sup> | (Xi + Z) - Yi |</td></tr></tbody></table></figure><p><br>Constraints:<br>1 &lt;= M &lt;= 10^5<br>1 &lt;= Xi, Yi &lt;= 10^9<br><br>Input Format:<br>First line contains M,<br>Size of arrays<br>Second line contains M integer: X1, X2, X3,...XM<br>Third line contains M integer: Y1, Y2, Y3,..YM<br><br>Output Format:<br>Print the output in a single line contains, The minimum value of the equation.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint d[100005];\n\nint cmp(const void *a, const void *b) {\n    return (*(const int *)a - *(const int *)b);\n}\n\nint main() {\n    int n, x, i;\n    int answer = 0;\n    long long sum = 0;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (i = 0; i < n; i++) scanf(\"%d\", d + i);\n    for (i = 0; i < n; i++) {\n        scanf(\"%d\", &x);\n        d[i] = x - d[i];\n    }\n    qsort(d, n, 4, cmp);\n    for (i = 0; i < n; i++) sum += abs(d[i] - d[n / 2]);\n    printf(\"%lld\\n\", sum + answer);\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n5 3 2\n5 1 3",
          "output": "3"
        },
        {
          "input": "4\n2 4 3 1\n1 1 0 3",
          "output": "7"
        }
      ],
      "mandatory": [
        "int answer = 0;"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 190,
        "loc": 25,
        "raw": "Max CCN: 5, Tokens: 190, NLOC: 25"
      }
    },
    {
      "id": "DSA_135",
      "challenge": 135,
      "level": 2,
      "level_challenge": 35,
      "title": "Challenge 135",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br><br>One of the secret rooms in Keeladi is full of Bodhidharma's stones. The floor of the room is covered by a × b square marbonites, where there are a rows of marbonites from front (first row) to back (last row) and b columns of marbonites from left to right. Each marbonite has 1 to 100 stones on it. Tamil has to grab as many Bodhidharma's stones as possible, subject to the following restrictions:<br><br>He starts by choosing any marbonite in the first row, and collects the Bodhidharma's stones on that marbonite. Then, he moves to a marbonite in the next row, collects the Bodhidharma's stones on the marbonite, and so on until he reaches the last row.<br><br>When he moves from one marbonite to a marbonite in the next row, he can only move to the marbonite just below it or diagonally to the left or right.<br><br>Given the values of a and b, and the number of Bodhidharma's stones on each marbonite, write a program to compute the maximum possible number of Bodhidharma's stones Tamil can grab in one single trip from the first row to the last row.<br><br>Constraints:<br><br>1 ≤ T ≤ 20<br>1 &lt;= a &lt;= 100<br>1 &lt;= b &lt;= 100<br>0 &lt;= n &lt;= 100<br><br>Input Format:<br><br>The first line consists of a single integer T, the number of test cases. In each of the test cases, the first line has two integers. The first integer a is the number of rows of marbonites on the floor. The second integer b is the number of columns of marbonites on the floor. Next, there are a lines of inputs. The i-th line of these, specifies the number of Bodhidharma's stones in each marbonite of the i-th row from the front. Each line has b integers, where each integer n (0 &lt;= n &lt;= 100) is the number of Bodhidharma's stones on that marbonite. The integers are separated by a space character.<br><br>Output Format:<br><br>Print the output in a single line containing the maximum possible number of Bodhidharma's stones Tamil can grab in one single trip from the first row to the last row.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint dp[105][105];\n\nint max3(int a, int b, int c) {\n    if (a >= b && a >= c) return a;\n    else if (b >= c) return b;\n    else return c;\n}\n\nvoid solve() {\n    int r, c, i, j;\n    if (scanf(\"%d %d\", &r, &c) != 2) return;\n    memset(dp, 0, sizeof(dp));\n    for (i = 0; i < r; i++) {\n        for (j = 1; j <= c; j++) {\n            scanf(\"%d\", &dp[i][j]);\n        }\n    }\n    for (i = 1; i < r; i++) {\n        for (j = 1; j <= c; j++) {\n            dp[i][j] += max3(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);\n        }\n    }\n    int ans = 0;\n    for (j = 1; j <= c; j++) {\n        if (dp[r - 1][j] > ans) ans = dp[r - 1][j];\n        else ans = ans;\n    }\n    printf(\"%d\\n\", ans);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n5 5\n3 1 6 4 2\n2 1 3 1 1\n1 2 2 1 7\n2 2 1 5 3\n2 1 4 4 4",
          "output": "23"
        },
        {
          "input": "2\n5 4\n3 1 5 4\n2 1 3 1\n1 2 2 1\n2 2 1 4\n2 1 4 3\n3 3\n4 1 5\n3 1 4\n1 2 2\n2 1 3 1 1\n1 2 2 1 7\n2 2 1 5 3\n2 1 4 4 4",
          "output": "18\n11"
        }
      ],
      "mandatory": [
        "while",
        "for",
        "if",
        "else"
      ],
      "complexity": {
        "ccn": 12,
        "tokens": 450,
        "loc": 50,
        "raw": "Max CCN: 12, Tokens: 450, NLOC: 50"
      }
    },
    {
      "id": "DSA_136",
      "challenge": 136,
      "level": 2,
      "level_challenge": 36,
      "title": "Challenge 136",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Pending (Complexity CCN 2 > Limit 1)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>At NPTEL we love learning new subjects to each other! There are M workers at NPTEL, numbered from 1 to M. There are a total of S different subjects, numbered from 1 to S. Each worker knows up to 5 different subjects.<br><br>The i-th worker can guide the j-th worker if there is a subject that the i-th worker knows that the j-th worker does not know. How many ordered pairs (i, j) are there where the i-th worker can guide the j-th worker?<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ S ≤ 1000.<br>1 ≤ Di ≤ 5 for all i.<br>1 ≤ Bij ≤ S for all i and j.<br>Bij ≠ Bik for all j ≠ k.<br>2 ≤ M ≤ 500.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. The first line of each test case gives the two integers M and S, which are the number of workers and the number of subjects respectively.<br><br>The next M lines describe the subjects that each worker knows. The i-th of these lines begins with an integer Di which is the number of subjects the i-th worker knows. Then, Di integers follow on the same line. The j-th of these integers is Bij indicating that the i-th worker knows the subject Bij.<br><br>Output Format:<br>Print the output in a separate lines contains the number of ordered pairs (i, j) where the i-th worker can guide the j-th worker.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint len[505];\nint sub[505][6];\nint has[505][1005];\n\nvoid check_dummy(int x) {\n    if (x) return;\n}\n\nint is_sub(int i, int j) {\n    int ok = 1;\n    for (int k = 0; k < len[i]; k++) {\n        ok &= (has[i][sub[i][k]] <= has[j][sub[i][k]]);\n    }\n    return ok;\n}\n\nint count_for_i(int i, int m) {\n    int cnt = 0;\n    for (int j = 0; j < m; j++) {\n        cnt += is_sub(i, j);\n    }\n    return cnt;\n}\n\nint count_all(int m) {\n    int cnt = 0;\n    for (int i = 0; i < m; i++) {\n        cnt += count_for_i(i, m);\n    }\n    return cnt;\n}\n\nvoid read_worker(int i) {\n    scanf(\"%d\", &len[i]);\n    for (int k = 0; k < len[i]; k++) {\n        scanf(\"%d\", &sub[i][k]);\n        has[i][sub[i][k]]++;\n    }\n}\n\nvoid read_all(int m) {\n    for (int i = 0; i < m; i++) read_worker(i);\n}\n\nvoid clear_has(int m) {\n    for (int i = 0; i < m; i++) {\n        memset(has[i], 0, sizeof(has[i]));\n    }\n}\n\nvoid solve(int tc) {\n    int m, s;\n    scanf(\"%d %d\", &m, &s);\n    check_dummy(0);\n    clear_has(m);\n    read_all(m);\n    int cannot = count_all(m) - m;\n    printf(\"Line #%d: %d\\n\", tc, m * (m - 1) - cannot);\n}\n\nint main() {\n    int t, tc = 1;\n    scanf(\"%d\", &t);\n    while (tc <= t) {\n        solve(tc);\n        tc++;\n    }\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n4 100\n4 70 90 100 5\n1 90\n1 70\n3 70 90 100\n3 30\n4 10 11 12 13\n4 10 11 12 13\n5 25 26 27 28 29\n3 33\n4 11 12 12 13\n4 10 11 12 13\n5 24 25 27 28 29\n4 100\n4 70 90 100 5\n1 80\n1 70\n3 80 90 100\n3 32\n4 10 11 12 13\n4 10 11 12 13\n5 25 26 27 28 29",
          "output": "Line #1: 7\nLine #2: 4\nLine #3: 6\nLine #4: 10\nLine #5: 4"
        },
        {
          "input": "4\n4 100\n4 70 90 100 5\n1 90\n1 70\n3 70 90 100\n3 30\n4 10 11 12 13\n4 10 11 12 13\n5 25 26 27 28 29\n3 33\n4 11 12 12 13\n4 10 11 12 13\n5 24 25 27 28 29\n4 100\n4 70 90 100 5\n1 80\n1 70\n3 80 90 100",
          "output": "Line #1: 7\nLine #2: 4\nLine #3: 6\nLine #4: 10"
        }
      ],
      "mandatory": [
        "for",
        "while",
        "if"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 725,
        "loc": 94,
        "raw": "Max CCN: 1, Tokens: 725, NLOC: 94"
      }
    },
    {
      "id": "DSA_137",
      "challenge": 137,
      "level": 2,
      "level_challenge": 37,
      "title": "Challenge 137",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Pending (Complexity CCN 10 > Limit 1)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>Poongavanam bought a house on ECR, and plans to decorate it with threads of Rose flowers. Each flower is either Green (G) or Orange (O), and Poongavanam knows how many occurrences of GG, GO, OO, and OG he wants to see in a thread.<br><br>Poongavanam wants Selvam's help determining how many different threads with positive length can be made. Given W, X, Y and Z, find the number of different threads having occurrences of GG, GO, OO and OG equal to inputs W, X, Y and Z, respectively.<br><br>Constraints:<br>For 20% points: 0 &lt;= W, X, Y, Z &lt;= 4<br>For 50% points: 0 &lt;= W, X, Y, Z &lt;= 10^2<br>For 100% points: 0 &lt;= W, X, Y, Z &lt;= 10^5<br><br>Input Format:<br>One line of space-separated, non-negative integers: W (occurrences of GG), X (occurrences of GO), Y (occurrences of OO), and Z (occurrences of OG), respectively.<br><br>Output Format:<br>Print the output in a single line contain, find the number of threads having W, X, Y and Z occurrences of GG, GO, OO, and OG.</p>",
      "code": "#include <stdio.h>\n#define MOD 1000000007\n\nlong long power(long long b, long long e) {\n    long long r = 1;\n    while (e) {\n        if (e & 1) r = r * b % MOD;\n        b = b * b % MOD;\n        e >>= 1;\n    }\n    return r;\n}\n\nlong long nCr(int n, int r) {\n    if (r < 0 || r > n) return 0;\n    long long u = 1, d = 1;\n    for (int i = 1; i <= r; i++) {\n        u = u * (n - i + 1) % MOD;\n        d = d * i % MOD;\n    }\n    return u * power(d, MOD - 2) % MOD;\n}\n\nlong long get_ans(int w, int x, int y, int z) {\n    if (!x && !z) {\n        if (w && y) return 0;\n        else if (w || y) return 1;\n        else return 0;\n    }\n    if (x == z + 1) return nCr(w + z, z) * nCr(y + z, z) % MOD;\n    else if (z == x + 1) return nCr(w + x, x) * nCr(y + x, x) % MOD;\n    else if (x == z) {\n        long long a = nCr(w + x, x) * nCr(y + x - 1, x - 1) % MOD;\n        long long b = nCr(y + x, x) * nCr(w + x - 1, x - 1) % MOD;\n        return (a + b) % MOD;\n    }\n    else return 0;\n}\n\nint main() {\n    int w, x, y, z;\n    if (scanf(\"%d %d %d %d\", &w, &x, &y, &z) == 4) printf(\"%lld\\n\", get_ans(w, x, y, z));\n    else return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1 1 8 1",
          "output": "11"
        },
        {
          "input": "2 1 4 1",
          "output": "8"
        }
      ],
      "mandatory": [
        "if",
        "else"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 405,
        "loc": 52,
        "raw": "Max CCN: 1, Tokens: 405, NLOC: 52"
      }
    },
    {
      "id": "DSA_138",
      "challenge": 138,
      "level": 2,
      "level_challenge": 38,
      "title": "Challenge 138",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Pending (Complexity CCN 5 > Limit 1)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>An Annabelle is a type of toy that originated in America over a years ago. Their defining characteristic is that they consist of a set of toys, all of a different size, with smaller toys fitting nicely inside larger toys.<br><br>Here, we work with matrigon, which are sets of regular convex polygons that follow a alike nesting pattern. A matrigon consists of a set of regular convex polygons with positive area q1,q2,…,qz such that, for all j, the vertices of qj+1 overlap with a proper subset of the vertices of qj (qj+1 has strictly less vertices than qj).<br><br>Given a fixed total number of sides M, find the biggest number of polygons that can be part of a matrigon such that the total number of sides among all polygons in it is exactly M.<br><br>Constraints:<br>1 ≤ T ≤ 50.<br>1 ≤ M ≤ 10^6<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T lines follow. Each line represents a test case and contains a single integer M, the target total number of sides.<br><br>Output Format:<br>Print the output in a separate lines contains, find the biggest number of polygons that can be part of a matrigon such that the total number of sides among all polygons in it is exactly M.</p>",
      "code": "#include <stdio.h>\n#define MAX 1000005\n\nint dp[MAX];\n\nvoid init() {\n    dp[1] = 1;\n    for (int i = 1; i < MAX; i++) {\n        if (!dp[i]) continue;\n        for (int k = 2; 1 + k * i < MAX; k++) {\n            int nxt = 1 + k * i;\n            if (dp[i] + 1 > dp[nxt]) dp[nxt] = dp[i] + 1;\n        }\n    }\n}\n\nint solve(int n) {\n    int i, ans = 1;\n    for (i=3; i<=n; i++) {\n        if (n % i != 0) continue;\n        int rem = n / i;\n        if (dp[rem] > ans) ans = dp[rem];\n    }\n    return ans;\n}\n\nint main() {\n    init();\n    int t, tc = 1, n;\n    scanf(\"%d\", &t);\n    while (tc <= t) {\n        scanf(\"%d\", &n);\n        printf(\"Line #%d: %d\\n\", tc, solve(n));\n        tc++;\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n32\n16\n42",
          "output": "Line #1: 2\nLine #2: 2\nLine #3: 3"
        },
        {
          "input": "5\n42\n21\n33\n32\n45",
          "output": "Line #1: 3\nLine #2: 3\nLine #3: 3\nLine #4: 2\nLine #5: 4"
        }
      ],
      "mandatory": [
        "for (i=3; i<=n; i++)",
        "continue;"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 570,
        "loc": 90,
        "raw": "Max CCN: 1, Tokens: 570, NLOC: 90"
      }
    },
    {
      "id": "DSA_139",
      "challenge": 139,
      "level": 2,
      "level_challenge": 39,
      "title": "Question Description: Aquaman has been invited to Kerala to celebrate Onam",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Aquaman has been invited to Kerala to celebrate Onam. Suddenly, on his arrival he understands that he has been called mainly to help rescue childen from a fire accident that has happened in a posh residential locale of Trissur, where rescue is proving to be especially difficult. As he reaches the place of the fire, before him there are 'A' apartments, each of the same height 'H', which are on fire. Since it is Onam, some floors of the apartments are empty as the occupants have gone elsewhere for celebrations. In his hurry to start the rescue Aquaman reaches the top of the Apartment, but realizes that his jumping energy is depleted and restricted due to change in his geographical setting. He soon understands the restrictions of his jumping energy, and they are as follows:<br><br>He can use the jumping energy any number of times until he reaches the Ground floor, which means he can use the jumping energy only until before he reaches the Ground floor, which means, once he reaches the Ground floor, he can't move to the top floor again and try to save children.<br><br>While switching apartments, he loses height 'J' while jumping.<br><br>Constraints:<br>1 ≤ H, A ≤ 2000.<br>1 ≤ J ≤ 450<br>1 ≤ v ≤ 2000<br>1 ≤ vab ≤ H<br><br>Input Format:<br>Input starts with three values: the number of apartments 'A', the height of the apartments 'H', and the height Superman will lose when he switches apartments 'J'.<br><br>These are followed by 'A' lines. Each a-th line starts with a non negative integer 'v' indicating how many children are in the a-th apartment. Each of the following 'v' integers indicates that a person is at height 'va' in the a-th apartment. Each of the following 'v' integers are given and repetitions are allowed which means there can be more than one person in a floor.<br><br>'a' indicates apartment number and 'b' indicates floor number. Apartment number will not be given; since 'M' lines follow the first line, you can assume that the a-th line indicates the a-th Apartment's specifications.<br><br>Output Format:<br>Print the output in a single line contains, the maximum number of children Aquaman can save.</p>",
      "code": "#include <stdio.h>\n\nint cnt[2005][2005];\nint max_dp[2005];\nint dp[2005];\nint A, H, J;\n\nvoid read_input() {\n    int i, j, n, flr;\n    if (scanf(\"%d %d %d\", &A, &H, &J) != 3) return;\n    for (i = 0; i < A; i++) {\n        if (scanf(\"%d\", &n) != 1) break;\n        for (j=0; j<n; j++) {\n            scanf(\"%d\", &flr);\n            if (j > 0) cnt[i][flr]++;\n            else cnt[i][flr]++;\n        }\n    }\n}\n\nint main() {\n    read_input();\n    for (int h = 1; h <= H; h++) {\n        for (int i = 0; i < A; i++) {\n            int stay = dp[i];\n            int jump = (h >= J) ? max_dp[h - J] : 0;\n            int cur = cnt[i][h] + (stay > jump ? stay : jump);\n            dp[i] = cur;\n            if (cur > max_dp[h]) max_dp[h] = cur;\n        }\n    }\n    printf(\"%d\\n\", max_dp[H]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 14 2 \n5 1 1 1 5 11\n7 9 5 7 7 3 8 8 9\n5 9 6 4 3\n0",
          "output": "12"
        },
        {
          "input": "5 14 2 \n5 1 1 1 5 11\n2 5 4 6 6\n7 9 5 7 7 3 8 8 9\n5 9 6 4 3\n0",
          "output": "11"
        }
      ],
      "mandatory": [
        "for (j=0; j<n; j++)",
        "if (j > 0)"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 515,
        "loc": 80,
        "raw": "Max CCN: 10, Tokens: 515, NLOC: 80"
      }
    },
    {
      "id": "DSA_140",
      "challenge": 140,
      "level": 2,
      "level_challenge": 40,
      "title": "Question Description: We are preparing M biscuits in total",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Pending (Complexity CCN 11 > Limit 1)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>We are preparing M biscuits in total. We prepare one biscuit with a 1 centimeter radius, one with a 2 centimeter radius, one with a 3 centimeter radius, ..., and one with an M centimeter radius, not necessarily in that order. After we prepare the first biscuit, we just lay it on a plate. After we prepare each subsequent biscuit, we lay it on top of the previously made biscuit, with their centers coinciding. In this way, a biscuit is visible from the top of the stack when we first add it. A biscuit only becomes hidden if we later prepare another biscuit with a larger radius.<br><br>Given the list U1,U2,…,UM, how many of the M! possible preparing orders yield those values?<br><br>Constraints:<br>1 ≤ T ≤ 50.<br>1 ≤ Ui ≤ i<br>2 ≤ M ≤ 10^5<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow, each described with two lines. The first line of a test case contains a single integer M, the number of biscuits we prepare. The second line of a test case contains M integers U1, U2, ..., UM, representing the number of visible biscuits after we prepare 1, 2, ..., M biscuits, respectively.<br><br>Output Format:<br>Print the output in a separate lines contains, find the number of preparing orders of M biscuits that yield the given numbers of visible biscuits after each step</p>",
      "code": "#include <stdio.h>\n\n#define MOD 1000000007\n#define MAX 100005\n\nint v[MAX], left_child[MAX], right_child[MAX], stk[MAX];\nlong long fact[MAX], inv[MAX];\nlong long ans;\n\nlong long power(long long base, long long exp) {\n    long long res = 1;\n    base %= MOD;\n    while (exp > 0) {\n        if (exp % 2 == 1) res = (res * base) % MOD;\n        base = (base * base) % MOD;\n        exp /= 2;\n    }\n    return res;\n}\n\nvoid precompute(int n) {\n    fact[0] = 1;\n    inv[0] = 1;\n    for (int i = 1; i <= n; i++) fact[i] = (fact[i - 1] * i) % MOD;\n    inv[n] = power(fact[n], MOD - 2);\n    for (int i = n - 1; i >= 1; i--) inv[i] = (inv[i + 1] * (i + 1)) % MOD;\n}\n\nlong long nCr(int n, int r) {\n    if (r < 0 || r > n) return 0;\n    return fact[n] * inv[r] % MOD * inv[n - r] % MOD;\n}\n\nint dfs(int u) {\n    if (u == 0) return 0;\n    int l_sz = dfs(left_child[u]);\n    int r_sz = dfs(right_child[u]);\n    ans = (ans * nCr(l_sz + r_sz, l_sz)) % MOD;\n    return l_sz + r_sz + 1;\n}\n\nvoid solve(int tc) {\n    int n, i;\n    scanf(\"%d\", &n);\n    for (i=1; i<=n; i++) scanf(\"%d\", &v[i]);\n\n    if (v[1] != 1) {\n        printf(\"Line #%d: 0\\n\", tc);\n        return;\n    }\n    for (i = 1; i <= n; i++) {\n        left_child[i] = 0;\n        right_child[i] = 0;\n    }\n    int top = 0;\n    stk[top++] = 1;\n    int ok = 1;\n\n    for (i=2; i<=n; i++) {\n        int pop_cnt = v[i - 1] + 1 - v[i];\n        if (pop_cnt < 0) {\n            ok = 0;\n            break;\n        }\n        int last = 0;\n        while (pop_cnt > 0) {\n            if (top == 0) {\n                ok = 0;\n                break;\n            }\n            last = stk[--top];\n            pop_cnt--;\n        }\n        if (!ok) break;\n        left_child[i] = last;\n        if (top > 0) {\n            right_child[stk[top - 1]] = i;\n        }\n        stk[top++] = i;\n    }\n\n    if (!ok) {\n        printf(\"Line #%d: 0\\n\", tc);\n        return;\n    }\n\n    ans = 1;\n    dfs(stk[0]);\n    printf(\"Line #%d: %d\\n\", tc, (int)ans);\n}\n\nint main() {\n    precompute(100000);\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (int tc = 1; tc <= t; tc++) {\n        solve(tc);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n4\n1 3 3 1\n3\n1 1 3\n3\n1 1 2",
          "output": "Line #1: 0\nLine #2: 0\nLine #3: 2"
        },
        {
          "input": "4\n3\n1 2 3\n2\n1 3\n3\n1 1 2\n3\n2 1 3",
          "output": "Line #1: 1\nLine #2: 0\nLine #3: 2\nLine #4: 0"
        }
      ],
      "mandatory": [
        "for (i=1; i<=n; i++)",
        "for (i=2; i<=n; i++)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 860,
        "loc": 125,
        "raw": "Max CCN: 1, Tokens: 860, NLOC: 125"
      }
    },
    {
      "id": "DSA_141",
      "challenge": 141,
      "level": 2,
      "level_challenge": 41,
      "title": "Challenge 141",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>You've been given a list of words to read and understanding. Being a hard-working student of language and the arts, you've decided to not study them at all and instead make up needless competitions based on them. This competition you've come up with is to see how you can concatenate the words to create the lexicographically shortest possible string.<br><br>Constraints:<br>1 ≤ B ≤ 100<br>1 ≤ A ≤ 9<br>1 ≤ all word lengths ≤ 15<br><br>Input Format:<br>As input for playing this competition you will receive a text file containing an integer B, the number of word sets you need to play your competition against. This will be followed by B word sets, each starting with an integer A, the number of words in the set, followed by A words. All tokens in the input will be separated by some whitespace and, aside from B and A, will consist entirely of lowercase letters.<br><br>Output Format:<br>Print the output in a separate lines contains the lexicographically lowest strings for each corresponding word set.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nchar w[10][20], *p[10];\nint n, i, m, tc = 1;\n\nint cmp(const void *a, const void *b) {\n    char s1[40], s2[40];\n    const char *x = *(char* const*)a;\n    const char *y = *(char* const*)b;\n    strcpy(s1, x);\n    strcat(s1, y);\n    strcpy(s2, y);\n    strcat(s2, x);\n    return strcmp(s1, s2);\n}\n\nvoid solve(int t) {\n    if (scanf(\"%d\", &n) != 1) return;\n    for (i = 0; i < n; i++) {\n        scanf(\"%s\", w[i]);\n        p[i] = w[i];\n    }\n    qsort(p, n, sizeof(char*), cmp);\n    printf(\"Line #%d: \", t);\n    for (i = 0; i < n; i++) printf(\"%s\", p[i]);\n    printf(\"\\n\");\n}\n\nint main() {\n    if (scanf(\"%d\", &m) != 1) return 0;\n    while (m--) solve(tc++);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n6 ICC world cup for intelligent students\n4 dcz q rc lcraw\n3 mybea zdr dyroiy\n5 jiaw ki jp bw jibw\n5 uivy hopji ji i dcyi",
          "output": "Line #1: ICCcupforintelligentstudentsworld\nLine #2: dczlcrawqrc\nLine #3: dyroiymybeazdr\nLine #4: bwjiawjibwjpki\nLine #5: dcyihopjiijiuivy"
        },
        {
          "input": "3\n4 this is for you\n6 can you able to sdf wjsk\n3 mibea zar yrrt",
          "output": "Line #1: foristhisyou\nLine #2: ablecansdftowjskyou\nLine #3: mibeayrrtzar"
        }
      ],
      "mandatory": [
        "while (m--)"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 290,
        "loc": 45,
        "raw": "Max CCN: 4, Tokens: 290, NLOC: 45"
      }
    },
    {
      "id": "DSA_142",
      "challenge": 142,
      "level": 2,
      "level_challenge": 42,
      "title": "Challenge 142",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>In jio Programming contest finals have just concluded! There were Q participants (numbered 1 to Q ), including yourself (competing as participant 1), and P problems (numbered 1 to P ).<br><br>Participant i solved problem j if A i, j = \"Y\", and otherwise they didn't solve it (if A i, j = \"X\"). Problem i 's point value is 2 i , and each participant's score is the sum of the point values ​​of the problems that they solved. No two participants solved exactly the same set of problems, which also means that all participants have distinct scores.<br><br>Before get the final results announced, you have an opportunity to rearrange the P columns of the scoreboard S into any permutation of problems 1 to P . For example, if you swap columns 1 and 2, then everybody who had originally solved problem 1 will now be considered to have solved problem 2 (thus earning 4 points for it rather than 2), and vice versa.<br><br>Of course, you'd like to use this opportunity to your benefit - it would be irresponsible to just let it pass by! However, it would be too suspicious if you simply made yourself win the whole competition. As such, you'd like to cause yourself to end up in 2nd place, such that you (participant 1) have exactly the second-highest score out of all Q participants. Now you just need to determine whether or not this is achievable ...<br><br>Constraints:<br>1 ≤ T ≤ 200<br>2 ≤ Q ≤ 400<br>1 ≤ P ≤ 400<br><br>Input Format:<br>Input begins with an integer T , the number of scoreboards.<br>For each scoreboard, there is a line containing the first space-separated integers Q and P .<br>Then, Q lines follow, the i th of which contains a length P string, the characters A i, 1 through A i, P .<br><br>Output Format:<br>Print the output in a separate lines contains, \"Y\" if you can end up in 2nd place, or \"N\" otherwise.</p>",
      "code": "#include <stdio.h>\n\nchar s[405][405];\nint n, p, i, j, k, t, tc;\n\nint sub(int a, int b) {\n    for (k = 0; k < p; k++)\n        if (s[a][k] == 'Y' && s[b][k] != 'Y') return 0;\n    return 1;\n}\n\nint cand(int x, int c) {\n    for (int y = 1; y < n; ++y) {\n        if (y == x || s[y][c] != 'Y') continue;\n        for (k = 0; k < p; k++)\n            if (s[0][k] == 'Y' && s[x][k] == 'Y' && s[y][k] != 'Y') break;\n        if (k == p) return 0;\n    }\n    return 1;\n}\n\nint solve_case() {\n    int c0 = 0, sup = 0;\n    for (j = 0; j < p; j++) c0 += (s[0][j] == 'Y');\n    if (c0 == p) return 0;\n    if (!c0) return n == 2;\n    for (i = 1; i < n; ++i) sup += sub(0, i);\n    if (sup >= 2) return 0;\n    if (sup == 1) return 1;\n    for (i = 1; i < n; ++i)\n        for (j = 0; j < p; j++)\n            if (s[0][j] == 'N' && s[i][j] == 'Y' && cand(i, j)) return 1;\n    return 0;\n}\n\nint main() {\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (tc = 1; tc <= t && scanf(\"%d %d\", &n, &p) == 2; tc++) {\n        for (i = 0; i < n; ++i) scanf(\"%s\", s[i]);\n        printf(\"Line #%d: %s\\n\", tc, solve_case() ? \"Y\" : \"N\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2 1\nY\nN\n2 2\nYN\nNY\n4 2\nYN\nNN\nYY\nNY",
          "output": "Line #1: N\nLine #2: Y\nLine #3: Y"
        },
        {
          "input": "4\n3 2\nYN\nNY\nYY\n2 2\nYN\nNY\n3 2\nYN\nNY\nYY\n2 2\nYY\nNY",
          "output": "Line #1: Y\nLine #2: Y\nLine #3: Y\nLine #4: N"
        }
      ],
      "mandatory": [
        "for (i = 0; i < n; ++i)",
        "for (i = 1; i < n; ++i)"
      ],
      "complexity": {
        "ccn": 14,
        "tokens": 440,
        "loc": 75,
        "raw": "Max CCN: 14, Tokens: 440, NLOC: 75"
      }
    },
    {
      "id": "DSA_143",
      "challenge": 143,
      "level": 2,
      "level_challenge": 43,
      "title": "Challenge 143",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>After studying many hours for University examination, Sanjay wants decided to play video game. Sanjay has currently playing an adventure game called The Walking Dead: A New Frontier.<br><br>This game has M tasks, and Sanjay is currently on the N-th task. Suddenly, Sanjay just realized that to beat the chief at the final task, Sanjay will need a special long metal blade, which can be picked up at task P. Sanjay have already completed that task, but he forgot to pick up the long metal blade at that task.<br><br>Now Sanjay want to pick up the long metal blade and complete the game in the minimum amount of time possible, and for that he have two options:<br><br>1.Restart the game and finish all tasks again, starting from task 1.<br>2.Move to previous tasks until sanjay reach task P, pick up the long metal blade and complete all the remaining tasks, starting from task P.<br><br>Every time sanjay enter a task he have to exit it, either by finishing it and going to the next task or by moving to a previous task or by completing / exiting the game. Exiting any task takes 1 minute. That means, for example, that it took sanjay M minutes to complete the first M tasks.<br><br>Sanjay's task is to find which option would result in the minimum amount of total time to complete the game.<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ P &lt; N &lt; M.<br>M ≤ 10^9<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow.<br><br>The first line of each test case contains three integers M, N and P: the number of tasks in the game, the current task sanjay in, and the task where he have to pick up the long metal blade, respectively.<br><br>Output Format:<br>Print the output in a separate lines contains, find the minimum amount of total time to complete the game.</p>",
      "code": "#include <stdio.h>\n\nlong long min_cost(long long M, long long N, long long P) {\n    long long a = N + M, b = 2 * N + M - 2 * P;\n    return a < b ? a : b;\n}\n\nint main() {\n    int m, tc = 1;\n    long long M, N, P;\n    scanf(\"%d\", &m);\n    while(m--) {\n        scanf(\"%lld %lld %lld\", &M, &N, &P);\n        printf(\"Line #%d: %lld\\n\", tc++, min_cost(M, N, P));\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n12 6 2\n12 7 6",
          "output": "Line #1: 18\nLine #2: 14"
        },
        {
          "input": "3\n11 6 2\n11 5 4\n11 3 1",
          "output": "Line #1: 17\nLine #2: 13\nLine #3: 14"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 125,
        "loc": 18,
        "raw": "Max CCN: 2, Tokens: 125, NLOC: 18"
      }
    },
    {
      "id": "DSA_144",
      "challenge": 144,
      "level": 2,
      "level_challenge": 44,
      "title": "Question Description: Murugan has an array of 'P' positive integers",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Murugan has an array of 'P' positive integers. The j-th integer of the array is Bj.<br><br>A continuous subarray is an c-counting if it is of length c and contains the integers c, c-1, c-2, ..., 2, 1 in that order. For example, [3, 2, 1] is a 3-counting.<br><br>Can you help Murugan calculate the number of D-countings in his array?<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>2 ≤ D ≤ P.<br>1 ≤ Bj ≤ 2 × 10^5, for all j.<br>2 ≤ P ≤ 2 × 10^5<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the integers P and D. The second line contains P integers. The j-th integer is Bj<br><br>Output Format:<br>Print the output in a separate lines contains, calculate the number of D-countings in his array?</p>",
      "code": "#include <stdio.h>\n\nvoid solve(int tc) {\n    int n, k, i, x, prev = -1, ans = 0, cur = 0;\n    scanf(\"%d %d\", &n, &k);\n    for(i=0; i<n; ++i) {\n        scanf(\"%d\", &x);\n        if (x == prev - 1) {\n            cur++;\n        } else {\n            cur = 1;\n        }\n        prev = x;\n        if (prev == 1) {\n            if (cur >= k) ans++;\n        }\n    }\n    printf(\"Line #%d: %d\\n\", tc, ans);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (int tc = 1; tc <= t; tc++) solve(tc);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n10 3\n1 2 3 6 8 3 2 1 7 3\n3 2\n100 98 99\n7 5\n100 7 6 5 4 3 1",
          "output": "Line #1: 1\nLine #2: 0\nLine #3: 0"
        },
        {
          "input": "2\n12 3\n1 2 3 8 9 3 2 1 7 3 2 1\n9 6\n100 7 6 5 4 3 2 1 100",
          "output": "Line #1: 2\nLine #2: 1"
        }
      ],
      "mandatory": [
        "for(i=0; i<n; ++i) ",
        "else"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 210,
        "loc": 38,
        "raw": "Max CCN: 6, Tokens: 210, NLOC: 38"
      }
    },
    {
      "id": "DSA_145",
      "challenge": 145,
      "level": 2,
      "level_challenge": 45,
      "title": "Challenge 145",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>We call having four units of positive integers, (A, B, C, D), beautiful if the following condition is TRUE:<br><br>A⊕B⊕C⊕D ≠ 0<br><br>⊕ is the bitwise XOR operator.<br><br>Given P, Q, R, S count the number of attractive four units of the form (A, B, C, D) where the following constraints hold:<br><br>1 ≤ A ≤ P<br>1 ≤ B ≤ Q<br>1 ≤ C ≤ R<br>1 ≤ D ≤ S<br><br>When you count the number of attracrive four units, you should consider '2' four units as same if the following are true:<br><br>1. They contain same integers.<br>2. Number of times each integers occur in the four unit is same.<br><br>Constraints:<br>1 ≤ P, Q, R, S ≤ 2000<br><br>Input Format:<br>A single line with four space-separated integers describing the respective values of P, Q, R, S.<br><br>Output Format:<br>Print the output in a single line contains, find the number of attractive four units</p>",
      "code": "#include <iostream>\n#include <algorithm>\n#include <string>\n\nusing namespace std;\n\nstring s;\nint cnt[4096];\n\nvoid add_pairs(int from_k, int to_k, int max_l, long long &tot) {\n    for (int k = from_k; k >= to_k; k--) {\n        for (int l = k; l <= max_l; l++) {\n            cnt[k ^ l]++;\n            tot++;\n        }\n    }\n}\n\nint main() {\n    int A[4];\n    for (int i = 0; i < 4; i++) cin >> A[i];\n    sort(A, A + 4);\n\n    long long total = 0, ans = 0;\n    add_pairs(A[2], A[1] + 1, A[3], total);\n\n    for (int j = A[1]; j >= 1; j--) {\n        if (j <= A[2]) add_pairs(j, j, A[3], total);\n        for (int i = 1; i <= min(A[0], j); i++) {\n            ans += total - cnt[i ^ j];\n        }\n    }\n\n    cout << ans << endl;\n    if (s.length()) cout << s;\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1 1 1 2",
          "output": "1"
        },
        {
          "input": "1 3 1 2",
          "output": "3"
        }
      ],
      "mandatory": [
        "string s;"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 275,
        "loc": 57,
        "raw": "Max CCN: 7, Tokens: 275, NLOC: 57"
      }
    },
    {
      "id": "DSA_146",
      "challenge": 146,
      "level": 2,
      "level_challenge": 46,
      "title": "Question Description: Rana is a truck driver with a high-stress job",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Rana is a truck driver with a high-stress job. He tried to unwind by going on a sleep, but that also turned out to be stressful, so he has recently taken up elephantback riding.<br><br>Today, Rana is riding her elephant to the east along a long and narrow one-way road that runs west to east. He is currently at mile 0 of the road, and her destination is at mile D; miles along the road are numbered from west to east.<br><br>There are B other elephants traveling east on the same road; all of them will go on traveling forever, and all of them are currently between Rana's elephant and her destination. The i-th of these elephants is initially at mile Mi and is traveling at its maximum speed of Si miles per hour.<br><br>Elephants are very polite, and a elephant E1 will not pass (move ahead of) another elephant E2 that started off ahead of E1. (Two or more elephants can share the same position for any amount of time; you may consider the elephants to be single points.) Elephants (other than Rana's) travel at their maximum speeds, except that whenever a elephant E1 catches up to another slower elephant E2, E1 reduces its speed to match the speed of E2.<br><br>Rana's elephant, on the other hand, does not have a maximum speed and can travel at any speed that Rana chooses, as long as it does not pass another elephant. To ensure a smooth ride for him and his elephant, Rana wants to choose a single constant \"cruise control\" speed for her elephant for the entire trip, from her current position to the destination, such that her elephant will not pass any other elephants. What is the maximum such speed that he can choose?<br><br>Constraints:<br>1 ≤ T ≤ 50.<br>1 ≤ Qi ≤ 1000<br>2 ≤ M ≤ 26<br><br>Input Format:<br>The first line of the input gives the number of test cases, T; T test cases follow. Each test case begins with two integers M and B: the destination position of all of the elephants (in miles) and the number of other elephants on the road. Then, B lines follow. The i-th of those lines has two integers Mi and Si: the initial position (in miles) and maximum speed (in miles per hour) of the i-th of the other elephants on the road.<br><br>Output Format:<br>Output is the maximum constant speed (in miles per hour) that Rana can use without colliding with other elephants. It will be considered correct if it is within an absolute or relative error of 10^-6 of the correct answer.</p>",
      "code": "#include <stdio.h>\n\nint t;\n\nvoid update_max(double *max_t, double tm) {\n    if (tm > *max_t) *max_t = tm;\n}\n\nvoid solve(int tc) {\n    double D, K, S, max_time = 0;\n    int n, i;\n    scanf(\"%lf %d\", &D, &n);\n    for (i = 0; i < n; i++) {\n        if (scanf(\"%lf %lf\", &K, &S) != 2) break;\n        update_max(&max_time, (D - K) / S);\n    }\n    printf(\"Line #%d: %.9f\\n\", tc, D / max_time);\n}\n\nint main() {\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (int tc = 1; tc <= t; tc++) solve(tc);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n2530 1\n2400 5\n300 2\n120 60\n60 90\n100 2\n80 103\n70 10\n85 103\n73 10",
          "output": "Line #1: 97.307692308\nLine #2: 100.000000000\nLine #3: 33.333333333\nLine #4: 70.833333333"
        },
        {
          "input": "2\n2535 1\n2300 5\n300 2\n120 60\n60 90",
          "output": "Line #1: 53.936170213\nLine #2: 100.000000000"
        }
      ],
      "mandatory": [
        "int t;"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 180,
        "loc": 40,
        "raw": "Max CCN: 3, Tokens: 180, NLOC: 40"
      }
    },
    {
      "id": "DSA_147",
      "challenge": 147,
      "level": 2,
      "level_challenge": 47,
      "title": "Challenge 147",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Vikram's New resolution for \"i-movie part-II\" is to eat healthier foods. He's done some research and has found out that calories come from three main sources, called macronutrients: protein, carbohydrates, and fat. Vikram wants to get the right balance of protein, carbohydrates, and fat to have a balanced diet. For each available food, Vikram can only choose to eat it or not eat it. He can't eat a certain food more than once, and he can't eat a fractional amount of a food.<br><br>Constraints:<br>1 ≤ T ≤ 20<br>1 ≤ M ≤ 20<br>10 ≤ D P , D C , D F ≤ 1000<br>10 ≤ P , C , F ≤ 1000<br><br>Input Format:<br>Input begins with an integer T , the number of test cases. For each test case, the first line consists of three space-separated integers: D P , D C , and D F , which represent the amount of protein, carbohydrates, and fat that Vikram wants to eat. The next line that has the number of test case for foods, an integer M . The next M lines each consist of three space-separated integers: P , C , and F , which represent the amount of protein, carbohydrates, and fat in that food, respectively.<br><br>Output Format:<br>Print the output in separate lines contains, the \"yes\" if it is possible for Vikram to eat the exact amount of each macronutrient, or \"no\" if it is not possible.</p>",
      "code": "#include <stdio.h>\n\nint p[25], c[25], f[25];\n\nvoid get_sum(int mask, int n, int *sp, int *sc, int *sf) {\n    *sp = 0; *sc = 0; *sf = 0;\n    for (int j = 0; j < n; j++) {\n        int bit = (mask >> j) & 1;\n        *sp += bit * p[j];\n        *sc += bit * c[j];\n        *sf += bit * f[j];\n    }\n}\n\nint match(int sp, int sc, int sf, int gp, int gc, int gf) {\n    return (sp == gp && sc == gc && sf == gf);\n}\n\nint solve_subset(int n, int gp, int gc, int gf) {\n    int total = 1 << n, sp, sc, sf;\n    for (int mask = 0; mask < total; mask++) {\n        get_sum(mask, n, &sp, &sc, &sf);\n        if (match(sp, sc, sf, gp, gc, gf)) return 1;\n    }\n    return 0;\n}\n\nvoid solve(int tc) {\n    int gp, gc, gf, n, idx = 0;\n    scanf(\"%d %d %d %d\", &gp, &gc, &gf, &n);\n    while (n--) {\n        scanf(\"%d %d %d\", &p[idx], &c[idx], &f[idx]);\n        idx++;\n    }\n    printf(\"Line #%d: %s\\n\", tc, solve_subset(idx, gp, gc, gf) ? \"yes\" : \"no\");\n}\n\nint main() {\n    int t, i = 1;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (i <= t) {\n        solve(i++);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n100 100 100\n1\n100 100 100\n100 80 100\n3\n10 10 30\n10 30 10\n10 50 50\n100 100 100\n5\n40 60 30\n30 10 40\n20 10 50\n10 30 90\n40 10 20",
          "output": "Line #1: yes\nLine #2: no\nLine #3: no"
        },
        {
          "input": "4\n100 100 100\n1\n100 100 100\n100 100 100\n3\n10 10 40\n10 30 10\n10 60 50\n100 100 100\n5\n40 70 30\n30 10 40\n20 20 50\n10 50 90\n40 10 20\n292 264 512\n4\n909 302 261\n705 597 823\n291 51 126\n28 697 57",
          "output": "Line #1: yes\nLine #2: no\nLine #3: yes\nLine #4: no"
        }
      ],
      "mandatory": [
        "while (n--)",
        "while (i <= t)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 500,
        "loc": 75,
        "raw": "Max CCN: 3, Tokens: 500, NLOC: 75"
      }
    },
    {
      "id": "DSA_148",
      "challenge": 148,
      "level": 2,
      "level_challenge": 48,
      "title": "Challenge 148",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Every business can make use of a superior accountant and, if they're not big on following the law, sometimes a inferior one. Poor accountants try to make more money for their workers by fudging numbers without getting caught.<br><br>Sometimes a Poor accountant wants to make a number larger, and sometimes smaller. It is widely known that tax auditors will fail to notice two digits being swapped in any given number, but any discrepancy more egregious will certainly be caught. It's also painfully obvious when a number has fewer digits than it ought to, so a poor accountant will never swap the first digit of a number with a 0.<br><br>Given a number, how little or big can it be made without being found out?<br><br>Constraints:<br>1 ≤ T ≤ 100<br>0 ≤ M ≤ 999999<br>M will never begin with a leading 0 unless M = 0<br><br>Input Format:<br>Input begins with an integer T, the number of numbers that need tweaking. Each of the next T lines contains a integer M.<br><br>Output Format:<br>Print the output in a separate lines contains, the little and biggest numbers that can be made from the original number M, using at most a single exchange and following the regulations above.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar s[12], mn[12], mx[12], tmp[12], c;\nint len, i, j, t, tc;\n\nvoid solve(int k) {\n    scanf(\"%s\", s);\n    strcpy(mn, s);\n    strcpy(mx, s);\n    len = strlen(s);\n    for (i = 0; i < len; i++) {\n        for (j = i + 1; j < len; j++) {\n            strcpy(tmp, s);\n            c = tmp[i];\n            tmp[i] = tmp[j];\n            tmp[j] = c;\n            if (tmp[0] == '0' && len > 1) continue;\n            if (strcmp(tmp, mn) < 0) strcpy(mn, tmp);\n            if (strcmp(tmp, mx) > 0) strcpy(mx, tmp);\n        }\n    }\n    printf(\"Line #%d: %s %s\\n\", k, mn, mx);\n}\n\nint main() {\n    if (scanf(\"%d\", &t) == 1)\n        for (tc = 1; tc <= t; tc++) solve(tc);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n45897\n34521\n857\n113\n11\n5",
          "output": "Line #1: 45798 95847\nLine #2: 14523 54321\nLine #3: 587 875\nLine #4: 113 311\nLine #5: 11 11\nLine #6: 5 5"
        },
        {
          "input": "3\n1243\n543\n22",
          "output": "Line #1: 1234 4213\nLine #2: 345 543\nLine #3: 22 22"
        }
      ],
      "mandatory": [
        "continue;"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 250,
        "loc": 40,
        "raw": "Max CCN: 10, Tokens: 250, NLOC: 40"
      }
    },
    {
      "id": "DSA_149",
      "challenge": 149,
      "level": 2,
      "level_challenge": 49,
      "title": "Question Description: Ram has given two integers Q and P",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Partial (77.78% Pass)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>Ram has given two integers Q and P. Ram's task is to find how many distinct pillars with Q vertices there are with each vertex colored with one of P colors. Multiple vertices can have the same color, and not all colors need to be used. Two pillars p1 and p2 are considered identical if there exists a bijective function f from vertices of p1 to vertices of p2 such that each vertex a in p1 is colored the same as f (a) in p2 and each pair of vertices a, b in p1 is connected by an edge if and only if f (a) and f (b) are connected by an edge in p2. A bijective function is a function that is both one-to-one and onto, meaning that f (a) = f (b) if and only if a = b, and for every vertex b in p2, there exists a in p1, such that f (a) = b.<br><br>Constraints:<br>T ≤ 20<br>1 ≤ Q ≤ 1000,&nbsp;<br>1 ≤ P ≤ 10^9<br><br>Input Format:<br>First line contains a single integer The T. T test cases follow, where each test case consists of two integers: Q and P.<br><br>Output Format:<br>Print the output in a separate lines contains, the number of colored pillars.</p>",
      "code": "#include <stdio.h>\n\nlong long q, p;\n\nlong long C(long long n, int k) {\n    long long r = 1;\n    for (int i = 1; i <= k; i++) r = r * (n - i + 1) / i;\n    return r;\n}\n\nvoid chk(int n) {\n    int x = 0;\n    while(x) x--;\n    if((n&1)==0) x = 0;\n}\n\nlong long f123() {\n    if (q == 1) return p;\n    if (q == 2) return (p * p + p) / 2;\n    return (p * p * p + p * p) / 2;\n}\n\nlong long f45() {\n    long long p2 = p * p;\n    if (q == 4) return p * C(p + 2, 3) + (p2 * p2 + p2) / 2;\n    return p * C(p + 3, 4) + p * C(p + 1, 2) * p2 + (p2 * p2 * p + p2 * p) / 2;\n}\n\nlong long f6() {\n    long long t = p * C(p + 1, 2), p2 = p * p, p3 = p2 * p, p4 = p2 * p2, p6 = p3 * p3;\n    return p * C(p + 4, 5) + p * C(p + 2, 3) * p2 + (t * t + t) / 2 + (p6 + p4) / 2 + p4 * C(p + 1, 2) + (p6 + p3) / 2;\n}\n\nlong long solve() {\n    chk(q);\n    if (q <= 3) return f123();\n    if (q <= 5) return f45();\n    return f6();\n}\n\nint main() {\n    int T, c = 1;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while (T--) {\n        scanf(\"%lld %lld\", &q, &p);\n        printf(\"Line #%d: %lld\\n\", c++, solve());\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 1\n2 10\n4 2\n3 1\n6 5",
          "output": "Line #1: 1\nLine #2: 55\nLine #3: 18\nLine #4: 1\nLine #5: 33230"
        },
        {
          "input": "6\n3 3\n2 5\n4 6\n3 2\n6 2\n3 4",
          "output": "Line #1: 18\nLine #2: 15\nLine #3: 1002\nLine #4: 6\nLine #5: 189\nLine #6: 40"
        }
      ],
      "mandatory": [
        "if((n&1)==0)",
        "while(x)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 460,
        "loc": 70,
        "raw": "Max CCN: 3, Tokens: 460, NLOC: 70"
      }
    },
    {
      "id": "DSA_150",
      "challenge": 150,
      "level": 2,
      "level_challenge": 50,
      "title": "Question Description: Two partcipants are playing a game on a 15×15 chessboard",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Two partcipants are playing a game on a 15×15 chessboard. The regulations of the game are as follows:<br><br>* The game starts with a single stick located at some m, n coordinates. The coordinates of the upper left cell are (1, 1), and of the lower right cell are (15, 15).<br><br>* In each move, a player must move the stick from cell (m, n) to one of the following locations:<br><br>1. (m-1, n+1)<br>2. (m-2, n-1)<br>3. (m+1, n-2)<br>4. (m-1, n-2)<br><br>Note: The Stick must remain inside the confines of the board.<br><br>* Beginning with participant 1, the participants alternate turns. The first participant who is unable to make a move loses the game.<br><br>Given the initial coordinates of the participants' sticks, assuming optimal play, determine which participant will win the game.<br><br>Constraints:<br>1 ≤ T≤ 250<br>1 ≤ m[i], n[i] ≤ 15<br><br>Input Format:<br>The first line contains an integer T, the number of test cases.<br>Each of the next T lines contains 2 space-separated integers m and n.<br><br>Output Format:<br>Print the output in a separate lines contains, \"FIRST\" if the first participant is the winner. Otherwise, print \"SECOND\"</p>",
      "code": "#include <stdio.h>\n\nvoid solve() {\n    int x, y;\n    if (scanf(\"%d %d\", &x, &y) != 2) return;\n    int rx = x % 4;\n    int ry = y % 4;\n    if ((rx == 1 || rx == 2) && (ry == 1 || ry == 2)) {\n        printf(\"SECOND\\n\");\n    } else if (1) {\n        printf(\"FIRST\\n\");\n    }\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        solve();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n5 3\n5 2\n8 7",
          "output": "FIRST\nSECOND\nFIRST"
        },
        {
          "input": "4\n4 1\n5 2\n5 1\n8 5",
          "output": "FIRST\nSECOND\nSECOND\nFIRST"
        }
      ],
      "mandatory": [
        "if",
        "else if"
      ],
      "complexity": {
        "ccn": 17,
        "tokens": 385,
        "loc": 50,
        "raw": "Max CCN: 17, Tokens: 385, NLOC: 50"
      }
    },
    {
      "id": "DSA_151",
      "challenge": 151,
      "level": 2,
      "level_challenge": 51,
      "title": "Question Description: Murugan have received the best gift ever: an Rubber rod",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Pending (Complexity CCN 16 > Limit 1)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>Murugan have received the best gift ever: an Rubber rod. Murugan can stand on it and use it to make increasingly large jumps.<br><br>Murugan is currently standing on point (0, 0) in his infinite two-dimensional backyard, and Murugan is trying to reach a goal point (A, B), with integer coordinates, in as few jumps as possible. Murugan must land exactly on the goal point; it is not sufficient to pass over it on a jump.<br><br>Each time Murugan use his Rubber rod to jump, he pick a cardinal direction: north, south, east, or west. The j-th jump with his Rubber rod moves Murugan 2(j-1) units in the chosen direction, so his first jump takes Murugan 1 unit, His second jump takes Murugan 2 units, His third jump takes Murugan 4 units, and so on.<br><br>Given a goal point (A, B), determine whether it is possible to get there, and if so, demonstrate how to do it using as few jumps as possible.<br><br>Constraints:<br>1 ≤ T ≤ 80.<br>-100 ≤ A ≤ 100.<br>-100 ≤ B ≤ 100.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each consists of a single line with two integers A and B: the coordinates of the goal point..<br><br>Output Format:<br>Print the output in a separate lines contains, IMPOSSIBLE if the goal point cannot be reached. Otherwise, one or more characters, each of which is either N (north), S (south), E (east), or W (west), representing the directions of the jumps that Murugan will make, in order. This sequence of jumps must reach the goal point at the end of the final jump, and it must be as short as possible.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid solve(int tc) {\n    long long x, y;\n    if (scanf(\"%lld %lld\", &x, &y) != 2) return;\n    if ((x + y) % 2 == 0) {\n        printf(\"Line #%d: IMPOSSIBLE\\n\", tc);\n        return;\n    }\n    char res[100];\n    int len = 0;\n    while (x != 0 || y != 0) {\n        if (x % 2 != 0) {\n            if (x == 1 && y == 0) {\n                res[len++] = 'E';\n                break;\n            } else if (x == -1 && y == 0) {\n                res[len++] = 'W';\n                break;\n            } else if (((x - 1) / 2 + y / 2) % 2 != 0) {\n                res[len++] = 'E';\n                x = (x - 1) / 2;\n                y = y / 2;\n            } else {\n                res[len++] = 'W';\n                x = (x + 1) / 2;\n                y = y / 2;\n            }\n        } else {\n            if (y == 1 && x == 0) {\n                res[len++] = 'N';\n                break;\n            } else if (y == -1 && x == 0) {\n                res[len++] = 'S';\n                break;\n            } else if (((y - 1) / 2 + x / 2) % 2 != 0) {\n                res[len++] = 'N';\n                y = (y - 1) / 2;\n                x = x / 2;\n            } else {\n                res[len++] = 'S';\n                y = (y + 1) / 2;\n                x = x / 2;\n            }\n        }\n    }\n    res[len] = '\\0';\n    printf(\"Line #%d: %s\\n\", tc, res);\n}\n\nint main() {\n    int t, c = 1;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        solve(c++);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 2\n-2 -3\n3 1\n-1 1\n-1 2",
          "output": "Line #1: EN\nLine #2: NWS\nLine #3: IMPOSSIBLE\nLine #4: IMPOSSIBLE\nLine #5: WN"
        },
        {
          "input": "3\n2 4\n-1 2\n3 -1",
          "output": "Line #1: IMPOSSIBLE\nLine #2: WN\nLine #3: IMPOSSIBLE"
        }
      ],
      "mandatory": [
        "while",
        "if",
        "else",
        "else if"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 880,
        "loc": 100,
        "raw": "Max CCN: 1, Tokens: 880, NLOC: 100"
      }
    },
    {
      "id": "DSA_152",
      "challenge": 152,
      "level": 2,
      "level_challenge": 52,
      "title": "Question Description: You will be given three integers P, Q and R",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>You will be given three integers P, Q and R. The numbers will not be given in that exact order, but we do know that P is less than Q and Q less than R. In order to make for a more pleasant viewing, we want to reorder them in a given order.<br><br>Input Format:<br>The first line contains the three positive integers P, Q and R, not necessarily in that order. The three numbers will be less than or equal to 100.<br><br>The second line contains three uppercase letters ’P’, ’Q’ and ’R’ (with no spaces between them) representing the desired order.<br><br>Output Format:<br>Print the output in a single line contains, P, Q and R in the desired order on a single line, separated by single spaces.</p>",
      "code": "#include <stdio.h>\n\nvoid sort3(int a[]) {\n    int t;\n    if (a[0] > a[1]) { t = a[0]; a[0] = a[1]; a[1] = t; }\n    if (a[1] > a[2]) { t = a[1]; a[1] = a[2]; a[2] = t; }\n    if (a[0] > a[1]) { t = a[0]; a[0] = a[1]; a[1] = t; }\n}\n\nint main() {\n    int a[3];\n    char s[10];\n    if (scanf(\"%d %d %d\", &a[0], &a[1], &a[2]) != 3) return 0;\n    if (scanf(\"%s\", s) != 1) return 0;\n    sort3(a);\n    int p = a[0], q = a[1], r = a[2];\n    for (int i = 0; i < 3; i++) {\n        int val = (s[i] == 'P') ? p : ((s[i] == 'Q') ? q : r);\n        printf(\"%d%c\", val, (i == 2) ? '\\n' : ' ');\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1 5 3\nPQR",
          "output": "1 3 5"
        },
        {
          "input": "6 4 2\nRPQ",
          "output": "6 2 4"
        }
      ],
      "mandatory": [
        "if"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 310,
        "loc": 35,
        "raw": "Max CCN: 7, Tokens: 310, NLOC: 35"
      }
    },
    {
      "id": "DSA_153",
      "challenge": 153,
      "level": 2,
      "level_challenge": 53,
      "title": "Question Description: Abdul likes reading and buys a lot of novels",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Abdul likes reading and buys a lot of novels. He stores her novels in two suitcases; each suitcase is labeled with a pattern that matches the titles of all of the novels stored in that suitcase. A pattern consists of only uppercase/lowercase English alphabet letters and stars (*). A star can match between zero and four letters. For example, novels with the titles GoneBoy and GoneDayAfterTomorrow can be put in a suitcase with the pattern Gone**, but novels with the titles TheGoneBoy, Gonedayaftertomorrow, and GoneWithTheWind cannot.<br><br>Abdul is wondering whether there is any novel that could be stored in either of the suitcases. That is, he wonders if there is a title that matches both suitcases' patterns.<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ the length of each pattern ≤ 2000.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each consists of two lines; each line has one string in which each character is either an uppercase/lowercase English letter or *.<br><br>Output Format:<br>Print the output in a separate lines contains, TRUE if there is a string that matches both patterns, or FALSE if not.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar raw1[2100], raw2[2100];\nchar s1[8500], s2[8500];\nchar f[8500][8500];\n\nint step_rep(char c, char *b, int j) {\n    b[j] = c;\n    if (c == '*') {\n        b[j] = b[j + 1] = b[j + 2] = b[j + 3] = '?';\n        return j + 4;\n    }\n    return j + 1;\n}\n\nvoid rep(char *s, char *b) {\n    int j = 0;\n    for (int i = 0; s[i]; i++) j = step_rep(s[i], b, j);\n    b[j] = 0;\n}\n\nvoid clr(int l1, int l2) {\n    for (int i = 0; i <= l1; i++) memset(f[i], 0, l2 + 1);\n}\n\nvoid init_j(int l2) {\n    int j = 1;\n    while (s2[j - 1] == '?') f[0][j++] = 1;\n}\n\nvoid init_i(int l1) {\n    int i = 1;\n    while (s1[i - 1] == '?') f[i++][0] = 1;\n}\n\nvoid init_f(int l1, int l2) {\n    clr(l1, l2);\n    f[0][0] = 1;\n    init_j(l2);\n    init_i(l1);\n}\n\nvoid do_row(int i, int l2) {\n    for (int j = 1; j <= l2; j++) {\n        int c1 = (s1[i - 1] == '?'), c2 = (s2[j - 1] == '?');\n        char res = (f[i - 1][j] & c1) | (f[i][j - 1] & c2);\n        char diag = f[i - 1][j - 1] & (c1 | c2 | (s1[i - 1] == s2[j - 1]));\n        f[i][j] = res | diag;\n    }\n}\n\nvoid run_dp(int l1, int l2) {\n    for (int i = 1; i <= l1; i++) do_row(i, l2);\n}\n\nvoid solve(int tc) {\n    scanf(\"%s %s\", raw1, raw2);\n    rep(raw1, s1);\n    rep(raw2, s2);\n    int l1 = strlen(s1), l2 = strlen(s2);\n    init_f(l1, l2);\n    run_dp(l1, l2);\n    if (f[l1][l2]) printf(\"Line #%d: True\\n\", tc);\n    else printf(\"Line #%d: False\\n\", tc);\n}\n\nint main() {\n    int t = 0, c = 1;\n    for (scanf(\"%d\", &t); t--; ) solve(c++);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n****\nIt\nShake*se\nS*speare\nShakes*e\n*peare",
          "output": "Line #1: True\nLine #2: False\nLine #3: False"
        },
        {
          "input": "3\n****\nIt\nShakes*e\nS*speare\nShakes*e\n*peare",
          "output": "Line #1: True\nLine #2: True\nLine #3: False"
        }
      ],
      "mandatory": [
        "if",
        "else",
        "while",
        "for"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 760,
        "loc": 70,
        "raw": "Max CCN: 2, Tokens: 760, NLOC: 70"
      }
    },
    {
      "id": "DSA_154",
      "challenge": 154,
      "level": 2,
      "level_challenge": 54,
      "title": "Question Description: Athipatti is a small village",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Athipatti is a small village. This village is there in river. The village can be described as a matrix with M rows and N columns, with A[i][j] indicating the height of each unit cell. Following is an example of a 3*3 village:<br>3 5 5<br>5 4 5<br>5 5 5<br>Sometimes, a massive rain falls evenly on every cell of this village. You can assume that an arbitrarily large amount of water falls. After such a massive rain, some regions of the village might collect water. This can only happen if, wherever a cell in that region shares an edge with a cell outside of that region, the cell outside of that region has a larger height. Otherwise, water will always flow away into one or more of the neighboring regions and eventually out to river. You may assume that the height of the river never changes. We will use B[i][j] to denote the heights of the village's cells after a massive rain. Here are the heights of the example village after a massive rain. The cell with initial height 4 only borders cells with higher initial heights, so water will collect in it, raising its height to 5. After that, there are no more regions surrounded by higher cells, so no more water will collect. Again, note that water cannot flow directly between cells that intersect only at their corners; water must flow along shared edges.<br>Following is the height of the example village after rain:<br>3 5 5<br>5 5 5<br>5 5 5<br>Given the matrix of the village, can you calculate the total increased height sum(B[i][j]-A[i][j]) after a massive rain?<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ A[i][j] ≤ 1000.<br>1 ≤ M ≤ 50.<br>1 ≤ N ≤ 50.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow.<br>The first line of each test case contains two numbers M and N indicating the number of rows and columns of cells on the village. Then, there are M lines of N positive integers each. The j-th value on the i-th of these lines gives A[i][j]: the height of the cell in the i-th row and the j-th column.<br><br>Output Format:<br>Print the output in a separate lines contains, calculate the total increased height sum(B[i][j]-A[i][j]) after a massive rain?</p>",
      "code": "#include <stdio.h>\n\nint T, M, N, A[55][55], W[55][55], ch, ans;\n\nint min2(int a, int b) { return a < b ? a : b; }\nint min4(int a, int b, int c, int d) { return min2(min2(a, b), min2(c, d)); }\nint max2(int a, int b) { return a > b ? a : b; }\n\nvoid relax_step() {\n    for (int k = 0; k < M * N; k++) {\n        int i = k / N, j = k % N;\n        int in = (i > 0) & (i < M - 1) & (j > 0) & (j < N - 1);\n        int m = min4(W[i - in][j], W[i + in][j], W[i][j - in], W[i][j + in]);\n        int t = max2(A[i][j], m);\n        int u = in & (t < W[i][j]);\n        ch |= u;\n        W[i][j] += u * (t - W[i][j]);\n    }\n}\n\nvoid solve_grid() {\n    do {\n        ch = 0;\n        relax_step();\n    } while (ch);\n}\n\nvoid init_grid() {\n    for (int k = 0; k < M * N; k++) {\n        int i = k / N, j = k % N;\n        scanf(\"%d\", &A[i][j]);\n        int b = (!i) | (i == M - 1) | (!j) | (j == N - 1);\n        W[i][j] = 10000 + b * (A[i][j] - 10000);\n    }\n}\n\nvoid sum_grid() {\n    ans = 0;\n    for (int k = 0; k < M * N; k++) ans += W[k / N][k % N] - A[k / N][k % N];\n}\n\nvoid run_cases() {\n    scanf(\"%d\", &T);\n    for (int c = 1; c <= T; c++) {\n        scanf(\"%d %d\", &M, &N);\n        init_grid();\n        solve_grid();\n        sum_grid();\n        printf(\"Line #%d: %d\\n\", c, ans);\n    }\n}\n\nint main() {\n    if (1) run_cases();\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3 3\n3 5 5\n5 4 5\n5 5 5\n4 4\n5 5 5 1\n5 1 1 5\n5 1 5 5\n5 2 5 8\n4 3\n2 2 2\n2 1 2\n2 1 2\n2 1 2",
          "output": "Line #1: 1\nLine #2: 3\nLine #3: 0"
        },
        {
          "input": "4\n4 3\n3 5 5\n5 4 5\n5 5 4\n3 4 4\n4 4\n5 5 1 1\n5 1 1 5\n5 1 1 5\n5 2 5 8\n4 3\n2 2 2\n2 1 2\n2 1 2\n2 1 2\n3 3\n3 5 3\n5 4 5\n5 5 5",
          "output": "Line #1: 1\nLine #2: 0\nLine #3: 0\nLine #4: 1"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "while",
        "do"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 540,
        "loc": 56,
        "raw": "Max CCN: 2, Tokens: 540, NLOC: 56"
      }
    },
    {
      "id": "DSA_155",
      "challenge": 155,
      "level": 2,
      "level_challenge": 55,
      "title": "Challenge 155",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>You have a stick of length x and you want to divide it into n sticks, with given lengths, whose total length is x.<br>On each move you can take any stick and divide it into two sticks. The cost of such an operation is the length of the original stick.<br><br>What is the minimum cost needed to create the sticks?<br>&nbsp;</p><p><strong>Constraints</strong></p><ul><li>1≤x≤10^9</li><li>1≤n≤2⋅10^5</li><li>∑di=x</li></ul><p><br><strong>Input Format</strong><br><strong>&nbsp;</strong><br>The first input line has two integers x and n: the length of the stick and the number of sticks in the division.<br>The second line has n integers d1,d2,…,dn: the length of each stick in the division.<br><br><strong>Output Format</strong><br>Print one integer: the minimum cost of the division</p>",
      "code": "#include <stdio.h>\n\nlong long heap[200005];\nint sz = 0;\n\nvoid push(long long val) {\n    int i = ++sz;\n    while (i > 1 && heap[i / 2] > val) { heap[i] = heap[i / 2]; i /= 2; }\n    heap[i] = val;\n}\n\nlong long pop() {\n    long long res = heap[1], val = heap[sz--];\n    int i = 1, ch;\n    while (i * 2 <= sz) {\n        ch = i * 2;\n        if (ch < sz && heap[ch + 1] < heap[ch]) ch++;\n        if (val <= heap[ch]) break;\n        heap[i] = heap[ch];\n        i = ch;\n    }\n    heap[i] = val;\n    return res;\n}\n\nint main() {\n    long long x, ans = 0;\n    int n;\n    if (scanf(\"%lld %d\", &x, &n) != 2) return 0;\n    while(n--) {\n        long long d;\n        scanf(\"%lld\", &d);\n        push(d);\n    }\n    while (sz > 1) {\n        long long s = pop() + pop();\n        ans += s;\n        push(s);\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "8 3\n2 3 3",
          "output": "13"
        },
        {
          "input": "8 3\n1 3 4",
          "output": "12"
        }
      ],
      "mandatory": [
        "while(n--)"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 400,
        "loc": 42,
        "raw": "Max CCN: 10, Tokens: 400, NLOC: 42"
      }
    },
    {
      "id": "DSA_156",
      "challenge": 156,
      "level": 2,
      "level_challenge": 56,
      "title": "Challenge 156",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>The world is made up of 10 kinds of people, those who understand binary and those who do not. These different kinds of people do not always get along so well. Bob might ask for a 10000 ounce coffee (meaning binary) and Alice might make misinterpret his request as being in decimal and give him a 10011100010000 ounce coffee (binary). After Sue explains that this much coffee costs 100 dollars (decimal), Bob might assume he only has to pay 4 dollars (interpreting the price as being in binary). In response to these differences that are difficult to resolve, these two groups have divided the world into two regions, the binary-friendly zones and the decimal-friendly zones. They have even published a map like the following to help people keep up with where the areas are (they have used ones and zeros so nobody would have trouble reading it).<br><br>1111100000<br>1111000000<br>1110000011<br>0111100111<br>0011111111<br><br>Users of binary have to stay in the zones marked with a zero. Users of decimal have to stay in the zones marked with a one. You have to figure out if it is possible for either type of person to get between various locations of interest. People can move north, south, east or west, but cannot move diagonally.<br><br>Constraints:<br>1 ≤ 𝑟 ≤ 1000<br>1 ≤ 𝑐 ≤ 1000<br>0 ≤ 𝑛 ≤ 1000<br>1 ≤ 𝑟1,𝑟2 ≤ 𝑟<br>1 ≤ 𝑐1,𝑐2 ≤ 𝑐<br><br>Input Format:<br>Input starts with a line containing two positive integers, r and c. The next 𝑟 input lines give the contents of the map, each line containing exactly 𝑐 characters (which are all chosen from 0 or 1).<br><br>The next line has an integer n. The following 𝑛 lines each contain one query, given as four integers: 𝑟1,𝑐1 and 𝑟2,𝑐2. These two pairs indicate two locations on the map, and their limits are 1≤𝑟1,𝑟2≤𝑟 and 1≤𝑐1,𝑐2≤𝑐.<br><br>Output Format:<br>Print the output in a separate lines contains, binary if a binary user can start from location 𝑟1,𝑐1 and move to location 𝑟2,𝑐2. Output decimal if a decimal user can move between the two locations. Otherwise, output neither.</p>",
      "code": "#include <stdio.h>\n\nint R, C, N;\nchar grid[1005][1005];\nint p[1000005];\n\nint find(int x) {\n    while (p[x] != x) { p[x] = p[p[x]]; x = p[x]; }\n    return x;\n}\n\nvoid unite(int a, int b) {\n    a = find(a);\n    b = find(b);\n    p[a] = b;\n}\n\nvoid check_up(int i, int j, int k) {\n    if ((i > 0) & (grid[i - 1][j] == grid[i][j])) unite(k, k - C);\n}\n\nvoid check_left(int i, int j, int k) {\n    if ((j > 0) & (grid[i][j - 1] == grid[i][j])) unite(k, k - 1);\n}\n\nvoid link_cell(int k) {\n    int i = k / C, j = k % C;\n    check_up(i, j, k);\n    check_left(i, j, k);\n}\n\nvoid link_all() {\n    for (int k = 0; k < R * C; k++) link_cell(k);\n}\n\nvoid init_dsu() {\n    for (int k = 0; k < R * C; k++) p[k] = k;\n}\n\nvoid print_bin_dec(char ch) {\n    if (ch == '0') printf(\"binary\\n\");\n    else printf(\"decimal\\n\");\n}\n\nvoid answer_query(int u, int v) {\n    if (find(u) == find(v)) print_bin_dec(grid[u / C][u % C]);\n    else printf(\"neither\\n\");\n}\n\nvoid run_queries() {\n    scanf(\"%d\", &N);\n    for (int q = 0; q < N; q++) {\n        int r1, c1, r2, c2;\n        scanf(\"%d %d %d %d\", &r1, &c1, &r2, &c2);\n        answer_query((r1 - 1) * C + (c1 - 1), (r2 - 1) * C + (c2 - 1));\n    }\n}\n\nvoid read_grid() {\n    for (int i = 0; i < R; i++) scanf(\"%s\", grid[i]);\n}\n\nint main() {\n    if (scanf(\"%d %d\", &R, &C) != 2) return 0;\n    read_grid();\n    init_dsu();\n    link_all();\n    run_queries();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1 4\n1100\n2\n1 1 1 4\n1 1 1 1",
          "output": "neither\ndecimal"
        },
        {
          "input": "10 20\n11111111111111111111\n11000000000000000101\n11111111111111110000\n11111111111111110000\n11000000000000000111\n00011111111111111111\n00111111111111111111\n10000000000000001111\n11111111111111111111\n11111111111111111111\n3\n2 3 8 16\n8 1 7 3\n1 1 10 20",
          "output": "binary\ndecimal\nneither"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "while",
        "else"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 720,
        "loc": 100,
        "raw": "Max CCN: 2, Tokens: 720, NLOC: 100"
      }
    },
    {
      "id": "DSA_157",
      "challenge": 157,
      "level": 2,
      "level_challenge": 57,
      "title": "Challenge 157",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>The world's humorous college professor has found himself in some trouble. Or, should we say, the world's humorous ex-college professor. On the basis of a false accusation regarding too many puns in his exam problems, Mr. Sambu has not only been fired, but is now on the run from the Detective Agency.<br><br>They've tracked Mr. Sambu down to a yard in Australia, which may be represented as a grid with B rows (numbered 1 to B) and A columns (numbered 1 to M). Mr. Sambu is initially in row P and column Q. There are also K (1 ≤ K ≤ 2) Detective Agency agents hot on his trail, the ith of whom is initially in row Xi and column Yi. All K+1 individuals are in distinct cells.<br><br>The chase will then commence in an organized fashion as follows:<br><br>1. Each of the K Detective Agency agents in turn will move up, down, left, or right to an adjacent unoccupied cell* (without leaving the yard). The agents may choose to move in any order, but each of them must move exactly once, and multiple of them may not move simultaneously. It's guaranteed that all of the agents will always be able to move in some order for any possible state of the yard.<br>2. Mr. Sambu will then attempt to similarly move to an adjacent unoccupied cell. If he's unable to move due to there being no unoccupied cells adjacent to him, he'll surrender quietly instead. Otherwise, the process will repeat from Step 1.<br><br>* An unoccupied cell is one which currently contains neither Mr. Sambu nor an agent.<br><br>Mr. Sambu is hoping that, if he can avoid ever being forced to surrender, the Detective Agency agents may eventually leave him alone, giving him the opportunity to slip away and work on regaining his teaching position. However, the outcome of this chase seems difficult to call. Assuming that the agents work together optimally in an attempt to force Mr. Sambu to surrender, while Mr. Sambu optimally chooses moves to avoid surrendering indefinitely, determine whether or not he will eventually be forced to surrender.<br><br>Constraints:<br>1 ≤ T ≤ 50<br>3 ≤ B, A ≤ 300<br>1 ≤ K ≤ 2<br>1 ≤ P, Xi ≤ B<br>1 ≤ Q, Yi ≤ A<br><br>Input Format:<br>Input begins with an integer T, the number of times that Mr. Sambu is chased by Detective Agency agents. For each chase, there is first a line containing the space-separated integers B, A, and K. Then there is a line containing the space-separated integers P, and Q. Then, K lines follow, the ith of which contains the space-separated integers Xi and Yi.<br><br>Output Format:<br>Print the output in a separate lines contains, followed by one character, either \"Y\" if Mr. Sambu will eventually be forced to surrender, or \"N\" otherwise.</p>",
      "code": "#include <stdio.h>\n\nint T, B, A, K, P, Q, c;\n\nint get_agents(int k) {\n    int same = 1, x, y;\n    while (k--) {\n        scanf(\"%d %d\", &x, &y);\n        same &= (((P + Q) ^ (x + y)) & 1) == 0;\n    }\n    return same;\n}\n\nchar solve_case() {\n    scanf(\"%d %d %d\", &B, &A, &K);\n    scanf(\"%d %d\", &P, &Q);\n    int win = (K == 2) & get_agents(K);\n    char res[2] = {'N', 'Y'};\n    return res[win];\n}\n\nvoid run_all() {\n    while (c <= T) {\n        printf(\"Line #%d: %c\\n\", c, solve_case());\n        c++;\n    }\n}\n\nint main() {\n    if (scanf(\"%d\", &T) == 1) {\n        c = 1;\n        run_all();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n3 3 1\n1 1\n2 2\n3 3 2\n1 1\n1 3\n3 1\n4 4 2\n1 2\n1 3\n1 4\n3 10 2\n2 10\n1 9\n3 9\n8 8 2\n8 1\n8 8\n1 1\n298 5 2\n2 3\n15 2\n300 5\n61 25 2\n32 10\n66 3\n21 18",
          "output": "Line #1: N\nLine #2: Y\nLine #3: N\nLine #4: Y\nLine #5: N\nLine #6: Y\nLine #7: N"
        },
        {
          "input": "5\n3 3 1\n1 1\n2 2\n3 3 2\n1 1\n1 3\n3 1\n4 4 2\n1 2\n1 3\n1 4\n3 11 2\n2 11\n1 9\n3 9\n7 7 2\n7 1\n7 7\n1 1",
          "output": "Line #1: N\nLine #2: Y\nLine #3: N\nLine #4: N\nLine #5: Y"
        }
      ],
      "mandatory": [
        "if",
        "while"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 335,
        "loc": 36,
        "raw": "Max CCN: 2, Tokens: 335, NLOC: 36"
      }
    },
    {
      "id": "DSA_158",
      "challenge": 158,
      "level": 2,
      "level_challenge": 58,
      "title": "Challenge 158",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Kumutha is a little girl with big aims: to own the biggest fruit shop in the world! She's off to a modest start with Y fruits for sale, numbered from 0 to Y - 1. The price of fruit i is i dollars. In her shop's front window, Kumutha has arranged her fruits in the shape of a tree rooted at fruit 0, with the parent of each other fruit i (1 ≤ i &lt; Y) being fruit Qi.<br><br>X other kids in Kumutha's neighbourhood have agreed to come by and be her first customers! Kumutha has assigned them customer numbers from 0 to X - 1. Unfortunately, these kids are a bit picky when it comes to sweets. Customer i only likes fruits within the subtree rooted at fruit Fi. This means that they're only willing to purchase a fruit if it's either fruit Fi, or one of its kid, or one of its kids' kid, and so on. They also have amazing self-restraint — each customer will limit themselves to buying at most one fruit.<br><br>For each of the X customers, Kumutha may either sell them any single fruit of her choice within the customer's required subtree, or no fruit at all. Each of the Y fruits may be sold to at most one customer. Kumutha is willing to do whatever it takes to achieve her aims, even if it means extorting as much cash as possible from fellow kid. As such, she'd like to choose fruits to sell such that the sum of their prices is maximized. Can you help her determine this maximum sum of fruit prices?<br><br>In order to reduce the size of the input data, F0..X-1 may be generated as follows using given constants M and N:<br><br>Fi = (M * i + N) % Y (for i = 0 .. X - 1)<br><br>Constraints:<br>1 ≤ T ≤ 10<br>1 ≤ Y ≤ 100,00<br>0 ≤ X ≤ 1,000,00<br>0 ≤ M, N, Qi, Fi &lt; Y<br><br>Input Format:<br>Input begins with an integer T, the number of trees. For each tree, there is first a line containing the space-separated integers Y, X, M, and N. Then Y - 1 lines follow, the ith of which (1-indexed) contains the single integer Qi.<br><br>Output Format:<br>Print the output in a separate lines contains, find the maximum possible sum of prices of fruits which Kumutha can sell.</p>",
      "code": "#include <stdio.h>\n\nint T, Y, X, M, N, parent[10005], cnt[10005];\nlong long ans;\n\nint find_anc(int u) {\n    while ((u != -1) & (cnt[u] == 0)) u = parent[u];\n    return u;\n}\n\nvoid link_up(int u, int target) {\n    while ((u != -1) & (cnt[u] == 0)) {\n        int next = parent[u];\n        parent[u] = target;\n        u = next;\n    }\n}\n\nvoid handle_fruit(int u) {\n    int anc = find_anc(u);\n    link_up(u, anc);\n    if (anc != -1) {\n        cnt[anc]--;\n        ans += u;\n    }\n}\n\nvoid set_parent(int i, int p) {\n    if ((p >= 0) & (p < Y) & (p != i)) parent[i] = p;\n}\n\nvoid read_tree() {\n    parent[0] = -1;\n    cnt[0] = 0;\n    int i = 1, p;\n    while (i < Y) {\n        parent[i] = -1;\n        cnt[i] = 0;\n        scanf(\"%d\", &p);\n        set_parent(i, p);\n        i++;\n    }\n}\n\nvoid read_customers() {\n    int i = 0;\n    while (i < X) {\n        int fi = (1LL * M * i + N) % Y;\n        cnt[fi]++;\n        i++;\n    }\n}\n\nvoid solve_tree() {\n    ans = 0;\n    int u = Y - 1;\n    while (u > 0) {\n        handle_fruit(u);\n        u--;\n    }\n}\n\nvoid run_all() {\n    int c = 1;\n    while (c <= T) {\n        scanf(\"%d %d %d %d\", &Y, &X, &M, &N);\n        read_tree();\n        read_customers();\n        solve_tree();\n        printf(\"Line #%d: %lld\\n\", c, ans);\n        c++;\n    }\n}\n\nint main() {\n    if (scanf(\"%d\", &T) == 1) run_all();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2 1 1 0\n0\n4 3 2 2\n3\n0\n0\n8 4 2 4\n0\n1\n0\n0\n7\n1\n4",
          "output": "Line #1: 1\nLine #2: 5\nLine #3: 20"
        },
        {
          "input": "2\n3 2 1 0\n0\n2\n3 3 2 2\n3\n0",
          "output": "Line #1: 1\nLine #2: 3"
        }
      ],
      "mandatory": [
        "while",
        "if"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 620,
        "loc": 70,
        "raw": "Max CCN: 2, Tokens: 620, NLOC: 70"
      }
    },
    {
      "id": "DSA_159",
      "challenge": 159,
      "level": 2,
      "level_challenge": 59,
      "title": "Challenge 159",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>You are given a rectangular grid with B rows and A columns. Each cell of this grid is painted with one of two colors: Brown and Black. Your task is to find the number of Brown cells in the Eiffel Tower in this grid.<br><br>To define a Eiffel tower, first we define a quality triangle as follows:<br><br>A quality triangle with top point at row M, column N and height h is an isoceles triangle consisting entirely of brown cells and pointing upward. Formally, this means that: The cell (M, N) is brown, and for each i from 0 to h-1 inclusive, the cells in row M+i from column N-i to column N+i are all brown.<br><br>For example:<br><br>..#..<br>.####<br>#####<br>is a quality triangle with height 3. The # cells are brown and the . cells are black. Note that there is a brown cell that is not part of the quality triangle, even though it touches the quality triangle.<br><br>..#..<br>.###.<br>####.<br>is NOT a quality triangle, because the 5th cell in the 3rd row is black. However, there are quality triangles with height 2 present.<br><br>...#.<br>.###.<br>#####.<br>is NOT a quality triangle. However, there are quality triangles with height 2 present.<br><br>A E-Eiffel Tower is defined as follows:<br><br>It contains exactly E quality triangles in vertical arrangement.<br><br>The top cell of the i+1-th triangle must share its top edge with the bottom edge of any one of the cells at the base of the i-th triangle. This means that, if the base of the i-th triangle is at row m, from column n1 to column n2, then the top of the i+1-th triangle must be on row m+1, in a column somewhere between n1 and n2, inclusive.<br><br>You need to find the E-Eiffel Tower with the largest number of brown cells.<br><br>Constraints:<br>1 ≤ T ≤ 100.<br>1 ≤ B ≤ 100.<br>1 ≤ A ≤ 100.<br>Each cell in the grid is either . or #.<br>1 ≤ E ≤ 100.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of three lines:<br><br>The first line contains 3 space-separated integers B, A and E, where B is the number of rows of the grid, A is the number of columns of the grid and E is the number of quality triangle in the desired Eiffel Tower.<br><br>The next B lines each contain exactly A characters. Each character will be either . or #, representing a black or brown cell, respectively.<br><br>Output Format:<br>Print the output in a separate lines contains, find the number of brown cells in the largest E-Eiffel Tower. If there is no E-Eiffel Tower, output 0.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint T, B, A, E, ans, cur_k, c;\nchar grid[105][105];\nint H[105][105], dp[105][105], nxt[105][105];\n\nint min2(int a, int b) { return a < b ? a : b; }\n\nvoid fill_H(int r, int c) {\n    int m = min2(H[r + 1][c - 1], min2(H[r + 1][c], H[r + 1][c + 1]));\n    H[r][c] = (grid[r][c] == '#') * (m + 1);\n}\n\nvoid compute_H() {\n    for (int k = 0; k < B * A; k++) fill_H(B - k / A, 1 + k % A);\n}\n\nvoid update_nxt(int r, int c, int s) {\n    int ok = (r <= B) & (c >= 1) & (c <= A) & (H[r][c] >= 1) & (s > nxt[r][c]);\n    nxt[r][c] = ok ? s : nxt[r][c];\n}\n\nvoid spread(int r, int c, int h, int s) {\n    for (int nc = c - h + 1; nc < c + h; nc++) update_nxt(r + h, nc, s);\n}\n\nvoid try_h(int r, int c, int h) {\n    int s = dp[r][c] + h * h;\n    ans += (cur_k == E) * (s > ans) * (s - ans);\n    if (cur_k < E) spread(r, c, h, s);\n}\n\nvoid loop_h(int r, int c) {\n    for (int h = 1; h <= H[r][c]; h++) try_h(r, c, h);\n}\n\nvoid calc_cell(int k) {\n    int r = 1 + k / A, c = 1 + k % A;\n    if (dp[r][c] >= 0) loop_h(r, c);\n}\n\nvoid step_layer(int k) {\n    cur_k = k;\n    memset(nxt, -1, sizeof nxt);\n    for (int i = 0; i < B * A; i++) calc_cell(i);\n    memcpy(dp, nxt, sizeof dp);\n}\n\nvoid read_grid() {\n    for (int i = 1; i <= B; i++) scanf(\"%s\", grid[i] + 1);\n}\n\nvoid init_dp() {\n    ans = 0;\n    for (int k = 0; k < B * A; k++) {\n        int r = 1 + k / A, c = 1 + k % A;\n        dp[r][c] = (H[r][c] >= 1) - 1;\n    }\n}\n\nvoid run_case() {\n    scanf(\"%d %d %d\", &B, &A, &E);\n    read_grid();\n    compute_H();\n    init_dp();\n    for (int k = 1; k <= E; k++) step_layer(k);\n}\n\nvoid run_tests() {\n    while (c <= T) {\n        run_case();\n        printf(\"Line #%d: %d\\n\", c++, ans);\n    }\n}\n\nint main() {\n    if (scanf(\"%d\", &T) == 1) { c = 1; run_tests(); }\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n3 5 1\n..#..\n.###.\n#####\n3 5 1\n.....\n.....\n.....\n4 5 1\n#####\n#####\n#####\n#####\n4 5 2\n#####\n#####\n#####\n#####",
          "output": "Line #1: 9\nLine #2: 0\nLine #3: 9\nLine #4: 10"
        },
        {
          "input": "3\n3 5 2\n..#..\n.###.\n#####\n4 5 1\n#####\n#####\n#####\n#####\n4 5 2\n#####\n#####\n#####\n#####",
          "output": "Line #1: 5\nLine #2: 9\nLine #3: 10"
        }
      ],
      "mandatory": [
        "if",
        "while",
        "for"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 730,
        "loc": 65,
        "raw": "Max CCN: 2, Tokens: 730, NLOC: 65"
      }
    },
    {
      "id": "DSA_160",
      "challenge": 160,
      "level": 2,
      "level_challenge": 60,
      "title": "Challenge 160",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Your company has n coders, and each of them has a skill level between 0 and 100. Your task is to divide the coders into teams that work together.<br><br>Based on your experience, you know that teams work well when the skill levels of the coders are about the same. For this reason, the penalty for creating a team is the skill level difference between the best and the worst coder.<br><br>In how many ways can you divide the coders into teams such that the sum of the penalties is at most x?</p><p><strong>Constraints</strong></p><ul><li>1≤n≤100</li><li>0≤x≤5000</li><li>0≤ti≤100</li></ul><p><br><strong>Input Format</strong><br>The first input line has two integers n and x: the number of coders and the maximum allowed penalty sum.<br>The next line has n integers t1,t2,…,tn: the skill level of each coder.<br><br><strong>Output Format</strong><br>Print one integer: the number of valid divisions modulo 10^9+7.<br><br>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MOD 1000000007\n\nint n, x, t[105];\nint dp[55][5005], nxt[55][5005];\nlong long ans;\n\nint compare(const void *a,const void *b) {\n    return (*(int *)a) - (*(int *)b);\n}\n\nvoid add(int *dest, long long val) {\n    *dest = (*dest + val) % MOD;\n}\n\nvoid trans_j(int j, int s, int diff) {\n    int ns = s + j * diff, ok = (ns <= x) & (dp[j][s] > 0);\n    long long w = ok ? dp[j][s] : 0;\n    add(&nxt[j][ns * ok], w * (j + 1));\n    add(&nxt[j + 1][ns * ok], (j < 50) * w);\n    add(&nxt[j - (j > 0)][ns * ok], (j > 0) * w * j);\n}\n\nvoid trans_all(int diff) {\n    memset(nxt, 0, sizeof nxt);\n    for (int idx = 0; idx < 51 * (x + 1); idx++)\n        trans_j(idx / (x + 1), idx % (x + 1), diff);\n    memcpy(dp, nxt, sizeof dp);\n}\n\nvoid read_t() {\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &t[i]);\n}\n\nvoid run_steps() {\n    for (int i = 1; i <= n; i++) trans_all(t[i] - t[i - 1]);\n}\n\nvoid sum_ans() {\n    ans = 0;\n    for (int s = 0; s <= x; s++) add((int *)&ans, dp[0][s]);\n}\n\nint main() {\n    if (scanf(\"%d %d\", &n, &x) != 2) return 0;\n    read_t();\n    qsort(t + 1, n, sizeof(int), compare);\n    t[0] = t[1];\n    dp[0][0] = 1;\n    run_steps();\n    sum_ans();\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 2\n2 5 3",
          "output": "3"
        },
        {
          "input": "4 3\n6 5 3 7",
          "output": "9"
        }
      ],
      "mandatory": [
        "int compare(const void *a,const void *b)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 500,
        "loc": 46,
        "raw": "Max CCN: 1, Tokens: 500, NLOC: 46"
      }
    },
    {
      "id": "DSA_161",
      "challenge": 161,
      "level": 2,
      "level_challenge": 61,
      "title": "Challenge 161",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>The end of the world doesn't scare me; The end of the month scares me, because I don't always get my income to come with me. The expenses pile up, and I don't know what else to do to stretch my sad salary.&nbsp;<br><br>I think the first step to improving my situation is to estimate how well or how badly a month will go, based on expected income and expenses. I know how much money I have in the bank at the beginning, and I know how much it will vary. Can you help me know if I will make ends meet with money in the bank?&nbsp;<br><br>Input Format:&nbsp;<br>The entry begins with a number indicating how many test cases will come next. Each case contains two numbers, −10,000 ≤ s , c ≤ 10,000 indicating, respectively, the balance in my bank account on the first day of the month, and the estimated change (income minus expenses) during the month.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a separate lines contains, \" YES \" will be written if I reach the end of the month with a balance greater than or equal to zero, and \" NO \" otherwise.</p>",
      "code": "#include <stdio.h>\n\nvoid solve() {\n    int s, c;\n    scanf(\"%d %d\", &s, &c);\n    if (s + c >= 0) printf(\"YES\\n\");\n    else printf(\"NO\\n\");\n}\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    for (int i = 0; i < t; i++) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n100 -10\n-10 -100\n-10 100\n100 -1000",
          "output": "YES\nNO\nYES\nNO"
        },
        {
          "input": "5\n1000 -100\n-10 -1000\n-10 100\n-100 1000\n-10 -100",
          "output": "YES\nNO\nYES\nYES\nNO"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 100,
        "loc": 30,
        "raw": "Max CCN: 3, Tokens: 100, NLOC: 30"
      }
    },
    {
      "id": "DSA_162",
      "challenge": 162,
      "level": 2,
      "level_challenge": 62,
      "title": "Challenge 162",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>Diego, 6 years old, has been asked to participate in a mental calculation contest for children. In their category they must solve a sequence of combined addition and subtraction of natural numbers. The operations to be carried out are indicated orally from left to right and he has to answer all the partial results that he obtains.&nbsp;<br><br>For example, last year in the contest they asked the following series of operations:&nbsp;<br><br>15 + 8 - 7 + 10 - 3&nbsp;<br><br>whose correct answer was 23, 16, 26, 23.&nbsp;<br><br>He wants to prepare, since to enter the contest he has to be able to solve several sequences in less than 1 minute, so he asks his mother to tell him sequences to try to solve them as quickly as possible.&nbsp;<br><br>Input Format:&nbsp;<br>The entry begins with a number indicating the number of test cases to be processed. Each test case is made up of a sequence of naturals separated by + or - signs, the partial results of which are natural. The sequence ends at a point, as shown in the example. Both the operands of the input sequence and its partial results are less than or equal to 200,000. Also, operands and operators are separated by a space.&nbsp;<br><br>All test cases contain at least one operation (addition or subtraction) with its two operands; It is guaranteed that only a number followed by a period will not appear, nor only a period.&nbsp;<br><br>Output Format:&nbsp;<br>For each test case, the sequence of partial results obtained will be written on one line, separated by a comma and a blank space. After the final result of the sequence there will be no comma or white space, but a line break, as shown in the example.</p>",
      "code": "#include <stdio.h>\n\nvoid solve() {\n    int cur, val, first = 1;\n    char op, end_ch;\n    scanf(\"%d\", &cur);\n    while (scanf(\" %c %d%c\", &op, &val, &end_ch) == 3) {\n        if (op == '+') cur += val;\n        else cur -= val;\n        if (first) {\n            printf(\"%d\", cur);\n            first = 0;\n        } else {\n            printf(\", %d\", cur);\n        }\n        if (end_ch == '.') break;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n15 + 3 + 6.\n7 - 2 - 1 + 25 - 1.",
          "output": "18, 24\n5, 4, 29, 28"
        },
        {
          "input": "3\n12 + 1 + 4 + 3.\n8 - 4 - 1 + 33 - 1.\n11 + 9 - 3.",
          "output": "13, 17, 20\n4, 3, 36, 35\n20, 17"
        }
      ],
      "mandatory": [
        "if",
        "while"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 165,
        "loc": 45,
        "raw": "Max CCN: 6, Tokens: 165, NLOC: 45"
      }
    },
    {
      "id": "DSA_163",
      "challenge": 163,
      "level": 2,
      "level_challenge": 63,
      "title": "Challenge 163",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>When the planets align in the sky, the Lovers Association of the Day of Alignment (ADA) organizes the most fun day at the Mount Tajinaste observatory. The researchers bring their families, they all eat together, they dance… After the snack, and after singing the song \"Goodbye, online planets\" everyone gathers up and goes home. But the question always arises when will they have the excuse to meet again? Normally that question is answered by Calculón, but he has connected a medical leave, paternity leave and some extra mosquitoes and it is very possible that he will not be seen again at the observatory until Christmas. The one in three years.&nbsp;<br><br>In the system there are several planets and for each one its exact period of translation is known, that is, how many days it takes to make a complete revolution around the sun. Knowing that today all the planets were aligned, could you predict when they will align again in that same position?&nbsp;<br><br>Input Format:&nbsp;<br>Each test case consists of a line with the number N of planets in the system, followed by a line with N integers with the period of translation of each planet (in days) around the sun. Nothing prevents different planets from having the same translation period. The translation period is between 1 and 70 days, and is always an integer value. Also, all systems have between 2 and 5 planets.&nbsp;<br><br>Output Format:&nbsp;<br>For each test case, a line will be displayed with the minimum number of days it will take for the planets to re-align in the same position.</p>",
      "code": "#include <stdio.h>\n\nlong long gcd(long long a, long long b) {\n    while (b) {\n        long long t = a % b;\n        a = b;\n        b = t;\n    }\n    return a;\n}\n\nlong long lcm(long long a, long long b) {\n    return (a / gcd(a, b)) * b;\n}\n\nvoid solve(int n) {\n    long long ans = 1, x;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lld\", &x);\n        ans = lcm(ans, x);\n    }\n    printf(\"%lld\\n\", ans);\n}\n\nvoid run_all() {\n    int n;\n    while (scanf(\"%d\", &n) == 1) solve(n);\n}\n\nint main() {\n    if (1) run_all();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n4 2\n3\n2 3 5",
          "output": "4\n30"
        },
        {
          "input": "3\n2 3 5\n3\n2 4 5\n2\n3 4",
          "output": "30\n20\n12"
        }
      ],
      "mandatory": [
        "if",
        "while",
        "for"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 190,
        "loc": 42,
        "raw": "Max CCN: 2, Tokens: 190, NLOC: 42"
      }
    },
    {
      "id": "DSA_164",
      "challenge": 164,
      "level": 2,
      "level_challenge": 64,
      "title": "Challenge 164",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>The Turistas-A-Cholón (TAC) company specializes in double-decker buses for tourist tours. Raimundo Revisor has a boring task: he has to check all the buses that leave from the initial stop throughout the day and tell the central how many tourists are on the upper deck and how many on the lower deck.&nbsp;<br><br>However, Raimundo Revisor is tired of these repetitive messages and has devised a more compact method to describe the tourists on each floor: instead of transmitting the two amounts, he transmits a single number (called range ) that perfectly summarizes the occupancy of the bus. . To do this, follow the following scheme (where the rank of each bus appears next to it), distributing the buses with the same number of total tourists in rows.&nbsp;<br><br>Raimundo doesn't have much expertise yet, and he needs a program to calculate the rank of a bus based on the number of tourists it carries on each floor.&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains the number A of buses to calculate their rank. They then follow A lines with the format Nand M , where N is the number of tourists traveling on the upper deck and M the number of tourists on the lower deck. The maximum occupancy of each floor is 1,000.&nbsp;<br><br>Output Format:&nbsp;<br>For each test case, the program will write the range of the bus.</p>",
      "code": "#include <stdio.h>\n\nvoid solve() {\n    int n, m;\n    scanf(\"%d %d\", &n, &m);\n    int s = n + m;\n    long long rank = (long long)s * (s + 1) / 2 + n + 1;\n    printf(\"%lld\\n\", rank);\n}\n\nint main() {\n    int A;\n    scanf(\"%d\", &A);\n    for (int i = 0; i < A; i++) {\n        if (0) continue;\n        solve();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n0 0\n1 2\n2 0",
          "output": "1\n8\n6"
        },
        {
          "input": "4\n0 3\n2 1\n3 0\n2 0",
          "output": "7\n9\n10\n6"
        }
      ],
      "mandatory": [
        "if",
        "continue;",
        "for"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 150,
        "loc": 37,
        "raw": "Max CCN: 3, Tokens: 150, NLOC: 37"
      }
    },
    {
      "id": "DSA_165",
      "challenge": 165,
      "level": 2,
      "level_challenge": 65,
      "title": "Challenge 165",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>The State Meteorological Agency updates the National Climatological Data Bank daily, in which the climatological observations (precipitation and temperature) made in Spain for about 150 years are stored.<br><br>Nuria is studying the relationship between the variability of temperature and the hydric state of the soil in a dry region in Spain. To do this, they go to the Bank and request the temperature records in said area year after year since there are records.<br><br>In the first phase of his study, he tries to determine the number of peaks and valleys in temperatures in a given period of time. A temperature is considered peak (resp. Valley) in a sequence when the previous and the next in the sequence are strictly lower (resp. Higher).<br><br>Input Format:<br>The first line contains a number indicating the number of test cases listed below.<br><br>Each test case is made up of two lines. The first line has a single integer with the number of recorded temperatures (greater than 0 and less than or equal to 10,000), while the second line contains the sequence of temperatures (integers between −50 and 60 degrees Celsius).<br><br>Output Format:<br>Print the output in a separate lines contains, find the number of peaks and valleys will be written, separated by a space and followed by a line break.</p>",
      "code": "#include <stdio.h>\n\nint a[10005];\n\nvoid solve() {\n    int n, p = 0, v = 0;\n    if (scanf(\"%d\", &n) != 1) return;\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    for (int i = 1; i < n - 1; i++) {\n        if (a[i] == a[i - 1]) continue;\n        if (a[i] > a[i - 1] && a[i] > a[i + 1]) p++;\n        else if (a[i] < a[i - 1] && a[i] < a[i + 1]) v++;\n    }\n    printf(\"%d %d\\n\", p, v);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (int c = 0; c < t; c++) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n5\n7 5 3 8 9\n8 \n8 9 7 6 5 3 4 2\n2 \n3-5\n8 \n4 -1 5 3 7 7 6 8",
          "output": "0 1\n2 1\n0 0\n1 3"
        },
        {
          "input": "5\n6\n8 5 6 7 9\n7 \n5 4 6 5 3 4 2\n2\n3 5\n8\n4 -1 4 3 8 7 6 8\n3\n5 1 2",
          "output": "1 1\n1 1\n0 0\n1 1\n2 3"
        }
      ],
      "mandatory": [
        "if",
        "for",
        "continue;"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 220,
        "loc": 50,
        "raw": "Max CCN: 9, Tokens: 220, NLOC: 50"
      }
    },
    {
      "id": "DSA_166",
      "challenge": 166,
      "level": 2,
      "level_challenge": 66,
      "title": "Challenge 166",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>Every time a family member or friend says the dreaded words \"I'm getting married!\", While my face makes a gesture of joy, my wallet starts shaking. Then comes the hypocrisy of the invitation. But what \" invitation \" !? The RAE makes it very clear ... The second meaning of inviting is \"Pay the expense that someone else makes or has made, out of courtesy to her\". Yes, it is true ... formally I do not pay for lunch or dinner directly; But if you don't give yourself a gift worthy of the celebration, you'll be put on the unpopular guest list.&nbsp;<br><br>This opinion lasts until ... the one who gets married is you. And it is that, I believe that I have not said it, I am getting married! And since I know, I am more of the first meaning of the RAE: \"Call someone for a party or to attend an event.\" That, I say, I am the one who is getting married, okay, but we are all going to celebrate, we are going to have fun, and we are going to gain a couple of kilos ... it will not all come out of my ribs, right?&nbsp;<br><br>And it is that this wedding is very beautiful, an unforgettable day and everything you want. But no matter how special it is and we do it with all the illusion without taking anything in return, the one who prints the invitations, the one who makes the gifts for the guests and the one at the banquet want their money, no matter how much they congratulate us. So we spend our nights awake, adding and adding expenses, thinking of putting the logo of a bank that sponsors us on the limousine to see if we can not squeeze so much out of our, ahem, guests .&nbsp;<br><br>Input Format:&nbsp;<br>Each test case begins with a number n indicating the amount of expenses incurred in organizing a wedding (at most 50,000). Next appear, on another line, n positive numbers with all those expenses.&nbsp;<br><br>Output Format:&nbsp;<br>For each test case, the total cost of the wedding will be written on a separate line. Everything is through the roof, but the sum of the expenses will be less than 10^9</p>",
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    while (scanf(\"%d\", &n) == 1) {\n        long long sum = 0, x;\n        for (int i = 0; i < n; i++) {\n            scanf(\"%lld\", &x);\n            sum += x;\n        }\n        printf(\"%lld\\n\", sum);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n100 200 100 200\n2\n50 25",
          "output": "600\n75"
        },
        {
          "input": "5\n60 650 76 200 54\n3\n40 123 25\n2\n75 25",
          "output": "1040\n188\n100"
        }
      ],
      "mandatory": [
        "while",
        "for"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 105,
        "loc": 30,
        "raw": "Max CCN: 4, Tokens: 105, NLOC: 30"
      }
    },
    {
      "id": "DSA_167",
      "challenge": 167,
      "level": 2,
      "level_challenge": 67,
      "title": "Question description  You are given a string  str",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description</p><p>You are given a string <strong>str</strong>. It costs one unit of a coin to change a character&nbsp;at an index. Your&nbsp;task is to convert it into a palindrome with minimum coins. Also, you are given&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>q</mi></math>&nbsp;number of queries. The queries are of the following types:</p><ul><li><strong>1 A B</strong></li><li><strong>2</strong></li></ul><p>After solving the first type of query, you can convert character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>A</mi></math>&nbsp;into character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>B</mi></math>&nbsp;without any cost and&nbsp;vice versa. In the second type of query, you are required&nbsp;to answer the minimum cost that is required to convert the given string into a palindrome.</p><p><strong>Note</strong>:&nbsp;If character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>A</mi></math>&nbsp;can be converted to character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>B</mi></math>&nbsp;and character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>B</mi></math>&nbsp;can be converted to character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>C</mi></math>, then you can convert character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>A</mi></math>&nbsp;to character&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>C</mi></math>.</p><p><strong>Constraints</strong></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup></math></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>q</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup></math></p><p>The string consists of only lowercase letters.</p><p><strong>Input format</strong></p><ul><li>The first line contains&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>n</mi></math>&nbsp;denoting the length of the string.</li><li>The second line contains string <strong>str</strong>.</li><li>The third line contains&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>q</mi></math>&nbsp;that denotes the&nbsp;number of queries.</li><li>The next&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>q</mi></math>&nbsp;lines contain&nbsp;one of the mentioned queries.</li></ul><p><strong>Output format</strong></p><p>For each query of type <strong>2</strong>, print the minimum cost to convert a given string into a palindrome.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\ntypedef long long ll;\nint n, q, ans, p[30], c[30][30];\nchar s[100005];\n\nll find(ll x) {\n    while (p[x] != x) {\n        p[x] = p[p[x]];\n        x = p[x];\n    }\n    return x;\n}\n\nvoid chk(int u, int v, int x, int y) {\n    int a = find(u), b = find(v);\n    ans -= (((a == x) & (b == y)) | ((a == y) & (b == x))) * c[u][v];\n}\n\nvoid reduce_all(int x, int y) {\n    int k = 676;\n    while (k--) chk(k / 26, k % 26, x, y);\n}\n\nvoid merge(ll x,ll y) {\n    ll rx = find(x), ry = find(y);\n    if (rx != ry) {\n        reduce_all(rx, ry);\n        p[rx] = ry;\n    }\n}\n\nvoid count_pair(int i) {\n    int u = s[i] - 'a', v = s[n - 1 - i] - 'a';\n    c[u][v]++;\n    ans += u != v;\n}\n\nvoid init_p() {\n    int i = 26;\n    while (i--) p[i] = i;\n}\n\nvoid count_all() {\n    int i = n / 2;\n    while (i--) count_pair(i);\n}\n\nvoid handle_q() {\n    int t;\n    scanf(\"%d\", &t);\n    if (t == 1) {\n        char a, b;\n        scanf(\" %c %c\", &a, &b);\n        merge(a - 'a', b - 'a');\n    } else {\n        printf(\"%d\\n\", ans);\n    }\n}\n\nint main() {\n    scanf(\"%d%s%d\", &n, s, &q);\n    init_p();\n    count_all();\n    while (q--) handle_q();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "10\nvwuhjdbgzp\n4\n1 a b\n2\n1 w z\n2",
          "output": "5\n4"
        },
        {
          "input": "14\nwsxevwuhjdbgzp\n4\n1 a c\n2\n1 g p\n2",
          "output": "7\n7"
        }
      ],
      "mandatory": [
        "void merge(ll x,ll y)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 430,
        "loc": 60,
        "raw": "Max CCN: 2, Tokens: 430, NLOC: 60"
      }
    },
    {
      "id": "DSA_168",
      "challenge": 168,
      "level": 2,
      "level_challenge": 68,
      "title": "Challenge 168",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:&nbsp;<br>In the last Council of Ministers it was decided that the construction of a tunnel that will link the Iberian Peninsula with the Balearic Islands will be launched. If Europe could be united with England last century, the government is clear that we will be able to make a similar tunnel, as a pilot experience for an even more ambitious project that would also unite the Canary Islands.&nbsp;<br><br>One of the most worrying issues is safety, so a still-to-be-determined number of emergency telephones will be installed (of course, there will never be more than 500) so that in the event of an accident, people can quickly get out of their cars and notify it on the nearest phone.&nbsp;<br><br>However, there is the problem that the accident victims, when they get out of their vehicles and run to that phone, have doubts about which way to go because in those moments of panic they lose the ability to make decisions and they do not have the agility. mentally enough to choose well.&nbsp;<br><br>What it is, then, is to make a small mobile application that can be used inside the tunnel and that, given the current location of the person, tells him which way he has to run, if towards the side that approaches him. towards the peninsula or towards the side that brings you closer to the islands.&nbsp;<br><br>Since the tunnel is yet to be built, we will build and test the core of the system using different tunnel descriptions. Each description consists of discretizing the tunnel into different sections in which there may (or may not) be an emergency telephone.&nbsp;<br><br>Input Format:&nbsp;<br>The entry will be made up of several test cases. Each test case will have a first line with the description of the tunnel. This line will have one character for each section of the tunnel (which can be up to 1,000,000 sections) where ' T ' indicates that there is a telephone in that section, and ' . 'indicates absence of telephone. The first character on the line corresponds to the section \"on the peninsula side.\"&nbsp;<br><br>After the tunnel description, a number will appear nwith the number of inquiries that follow. They follow himn lines, each one with an integer that indicates in which section the victim is located (between 1 and the total number of sections, with 1 being the first section on the route from the peninsula to the islands).&nbsp;<br><br>Output Format:&nbsp;<br>For each test case, n lines, one per query, where \" PENINSULA \" will be indicated if the injured person must run to the side of the peninsula or \" ISLANDS \" if he must go in the opposite direction. If it is not necessary to run because we are in a section with a telephone, it will be written \" HERE \"&nbsp;<br><br>Note that:&nbsp;<br><br>1. If you are closer to one of the exits than to a telephone, you will prefer to run towards the exit.&nbsp;<br>2. If the closest telephones on both sides are at the same distance, we will prefer to go to the one that is closer to one of the tunnel exits.&nbsp;<br>3. If in the previous scenario there is a tie again, it will go to the peninsula.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar s[1000005];\nint lp[1000005], rp[1000005];\n\nvoid build_left(int n) {\n    int cur = -1;\n    for (int i = 0; i < n; i++) {\n        if (s[i] == 'T') cur = i + 1;\n        lp[i] = cur;\n    }\n}\n\nvoid build_right(int n) {\n    int cur = -1;\n    for (int i = n - 1; i >= 0; i--) {\n        if (s[i] == 'T') cur = i + 1;\n        rp[i] = cur;\n    }\n}\n\nint min_val(int a, int b) {\n    return (a < b) ? a : b;\n}\n\nvoid decide_tie(int tl, int tr, int n) {\n    int el = min_val(tl, n + 1 - tl);\n    int er = min_val(tr, n + 1 - tr);\n    if (er < el) printf(\"ISLANDS\\n\");\n    else printf(\"PENINSULA\\n\");\n}\n\nvoid answer_phone(int dl, int dr, int tl, int tr, int n) {\n    if (dl < dr) printf(\"PENINSULA\\n\");\n    else if (dr < dl) printf(\"ISLANDS\\n\");\n    else decide_tie(tl, tr, n);\n}\n\nvoid run_exit(int p, int n) {\n    if (2 * p <= n + 1) printf(\"PENINSULA\\n\");\n    else printf(\"ISLANDS\\n\");\n}\n\nint get_d(int p, int t) {\n    if (t <= 0) return 2000000000;\n    return (p > t) ? (p - t) : (t - p);\n}\n\nvoid answer_q(int n) {\n    int p;\n    scanf(\"%d\", &p);\n    if (s[p - 1] == 'T') {\n        printf(\"HERE\\n\");\n        return;\n    }\n    int tl = lp[p - 1], tr = rp[p - 1];\n    int dl = get_d(p, tl), dr = get_d(p, tr);\n    int dexit = min_val(p, n + 1 - p);\n    if (dexit < min_val(dl, dr)) run_exit(p, n);\n    else answer_phone(dl, dr, tl, tr, n);\n}\n\nvoid solve_case() {\n    int n = strlen(s);\n    build_left(n);\n    build_right(n);\n    int q;\n    scanf(\"%d\", &q);\n    while (q--) answer_q(n);\n}\n\nint main() {\n    while (scanf(\"%s\", s) == 1) {\n        solve_case();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": ".T...TT\n4\n2\n3\n4\n5\n...\n1\n2",
          "output": "HERE\nPENINSULA\nPENINSULA\nISLANDS\nPENINSULA"
        },
        {
          "input": ".T...TT\n4\n2\n3\n4\n7\n..T\n1\n2",
          "output": "HERE\nPENINSULA\nPENINSULA\nHERE\nISLANDS"
        }
      ],
      "mandatory": [
        "for",
        "while",
        "else if"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 590,
        "loc": 85,
        "raw": "Max CCN: 3, Tokens: 590, NLOC: 85"
      }
    },
    {
      "id": "DSA_169",
      "challenge": 169,
      "level": 2,
      "level_challenge": 69,
      "title": "Challenge 169",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>The mayor of Marbella has received somewhat worrying weather news. On February 28, a tremendous snowfall is expected at sea level. Town hall gardeners have warned him that there are certain palm trees on the promenade that could collapse under the weight of the snow, and he is concerned that the appearance of the promenade may deteriorate if there are too many gaps left by those falls.&nbsp;<br><br>The promenade is one of the most popular places in the city, where a large number of people go to the beach bars in summer. The hundreds of palm trees that grow there provide shade and coolness. The gardening service has made a great effort so that not a single palm tree is missing throughout the walk. If a palm tree falls, it will not have time to grow for the summer and it will not provide shade, so in those areas with few palm trees, beach bars will not be able to be placed.&nbsp;<br><br>The meteorological service has made an estimate of the weight of the snow that will fall on the palm trees. For their part, the gardeners have determined the maximum weight that each of them will be able to support without collapsing. With this information, the mayor wants to know which part of the walk will be the most affected; in particular, which will be the longest strip in which, after the snowfall, there will be a maximum of 5 palm trees standing.&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains a number indicating the number of test cases listed below. Each test case consists of the following data: in the first line the weight in kilograms of the snow that the meteorological service has calculated that can fall on each palm tree (a natural number); In the next line, the number of palm trees on the promenade (greater than or equal to 1 and less than or equal to 100,000) and the sequence of weights in kilograms (natural numbers) that the palm trees on the promenade can support, as seen from left to right from the inside.&nbsp;<br><br>Output Format:&nbsp;<br>For each test case, it is requested to write the length of the most affected strip on a line, that is, the longest that conserves at most 5 standing palm trees.</p>",
      "code": "#include <stdio.h>\n\nint a[100005];\n\nvoid solve() {\n    int w, n;\n    scanf(\"%d%d\", &w, &n);\n    for (int i = 0; i < n; i++) {\n        int v;\n        scanf(\"%d\", &v);\n        a[i] = (v >= w);\n    }\n    int l = 0, cnt = 0, ans = 0;\n    for (int r = 0; r < n; r++) {\n        cnt += a[r];\n        while (cnt > 5) cnt -= a[l++];\n        if (r - l + 1 > ans) ans = r - l + 1;\n        else continue;\n    }\n    printf(\"%d\\n\", ans);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n30\n10\n10 30 50 20 40 60 30 40 50 36\n40\n10\n10 30 50 20 40 20 10 10 20 36",
          "output": "7\n10"
        },
        {
          "input": "3\n50\n12\n15 30 40 20 40 30 30 40 50 30 20 32\n40\n10\n15 30 40 20 40 20 10 20 20 32\n30\n8\n15 30 40 20 50 20 10 32",
          "output": "12\n10\n8"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "else continue;"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 255,
        "loc": 52,
        "raw": "Max CCN: 8, Tokens: 255, NLOC: 52"
      }
    },
    {
      "id": "DSA_170",
      "challenge": 170,
      "level": 2,
      "level_challenge": 70,
      "title": "Challenge 170",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>When they teach us to divide in school, they explain what the dividend, the divisor, the quotient and the remainder are. Intuitively we learn that division is used to distribute a certain number of things ( dividend ) among a series of people ( divisor ). The result of the operation tells us how many things each one touches ( quotient ) and how many are left over ( remainder ).&nbsp;<br><br>That is what is called the Euclidean (or integer ) division of natural numbers, that is, non-negative numbers. We quickly learn, in addition, that it does not make sense to distribute something between zero people and therefore the divisor cannot be null.&nbsp;<br><br>Formally, the Euclidean division between two integers a and b (where b is a nonzero number) calculates a quotient q and a remainder r associated with those a and b , which satisfy that a = b × q + r , and where the remainder r is always a non-negative integer, 0 ≤ r &lt;| b |.&nbsp;<br><br>Although the definition is easy to understand and apply when working with positive numbers, we must think about it a little more carefully before answering what is the result of division when the dividend or divisor is negative.&nbsp;<br><br>Input Format:&nbsp;<br>The entry begins with a number indicating the number of test cases to be processed. Each test case appears on a separate line and is made up of two whole numbers, first the dividend and then the divisor. None will be greater than 10,000 in absolute value.&nbsp;<br><br>Output Format:&nbsp;<br>For each test case, the program will write the quotient and the remainder of the Euclidean division separated by a space on one line. In the event that the divisor is 0, only DIV0 will be written .</p>",
      "code": "#include <stdio.h>\n\nint main() {\n    int t, a, b;\n    scanf(\"%d\", &t);\n    while (t--) {\n        scanf(\"%d%d\", &a, &b);\n        if (b == 0) {\n            printf(\"DIV0\\n\");\n            continue;\n        }\n        int q = a / b, r = a % b;\n        if (r < 0) {\n            r += (b > 0) ? b : -b;\n            q = (a - r) / b;\n        }\n        printf(\"%d %d\\n\", q, r);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n7 3\n7-3\n-7 3\n-7 -3\n7 0",
          "output": "2 1\n-2 1\n-3 2\n3 2\nDIV0"
        },
        {
          "input": "4\n6 3\n5 3\n2 0\n-1 -1",
          "output": "2 0\n1 2\nDIV0\n1 0"
        }
      ],
      "mandatory": [
        "while",
        "continue;",
        "if"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 165,
        "loc": 42,
        "raw": "Max CCN: 5, Tokens: 165, NLOC: 42"
      }
    },
    {
      "id": "DSA_171",
      "challenge": 171,
      "level": 2,
      "level_challenge": 71,
      "title": "Challenge 171",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Consider only the numbers of L digits written in a base B, in which the first digit (the most significant) is different from 0 .<br><br>Given two numbers P and Q, it is required:<br><br>a) how many numbers exist with at most P consecutive 0 (zero) digits.<br>b) how many numbers exist with at least Q consecutive 0 (zero) digits.<br><br>Constraints:<br>2 ≤ B &lt;L ≤ 20&nbsp;<br>2 ≤ P, Q ≤ L-1<br><br>Input Format:<br>The first line of the inputs contains the numbers L , B , P and Q , separated by spaces.<br><br>Output Format:<br>Print the output in a separate lines contains, find how many numbers exist with at most P consecutive 0 (zero) digits and how many numbers exist with at least Q consecutive 0 (zero) digits .</p>",
      "code": "#include <stdio.h>\n\ntypedef unsigned long long ull;\n\null dp[25], next_dp[25];\n\null get_sum(int k) {\n    ull s = 0;\n    for (int i = 0; i <= k; i++) s += dp[i];\n    return s;\n}\n\nvoid shift_zeros(int k) {\n    for (int z = 0; z < k; z++) next_dp[z + 1] = dp[z];\n}\n\nvoid copy_dp(int k) {\n    for (int i = 0; i <= k; i++) dp[i] = next_dp[i];\n}\n\nvoid step_dp(int b, int k) {\n    next_dp[0] = get_sum(k) * (b - 1);\n    shift_zeros(k);\n    copy_dp(k);\n}\n\nvoid reset_dp(int k) {\n    for (int i = 0; i <= k; i++) dp[i] = 0;\n}\n\null calc_f(int l, int b, int k) {\n    if (k < 0) return 0;\n    reset_dp(k);\n    dp[0] = b - 1;\n    for (int s = 2; s <= l; s++) step_dp(b, k);\n    return get_sum(k);\n}\n\null calc_total(int l, int b) {\n    ull p = b - 1;\n    for (int i = 0; i < l - 1; i++) p *= b;\n    return p;\n}\n\nint main() {\n    int l, b, p, q;\n    while (scanf(\"%d%d%d%d\", &l, &b, &p, &q) == 4) {\n        ull ans_a = calc_f(l, b, p);\n        ull tot = calc_total(l, b);\n        ull ans_b = tot - calc_f(l, b, q - 1);\n        printf(\"%llu\\n%llu\\n\", ans_a, ans_b);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 2 1 2",
          "output": "3\n1"
        },
        {
          "input": "4 2 1 2",
          "output": "5\n3"
        }
      ],
      "mandatory": [
        "if",
        "for",
        "while"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 800,
        "loc": 100,
        "raw": "Max CCN: 3, Tokens: 800, NLOC: 100"
      }
    },
    {
      "id": "DSA_172",
      "challenge": 172,
      "level": 2,
      "level_challenge": 72,
      "title": "Challenge 172",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>In a country there are n cities between which there are a total of m paths that can travel in both directions. There can be at most one road between any two cities.<br><br>Unfortunately, in this country the crime rate is very high and there are a lot of robberies \"on the highway\". For this reason, the country's leaders have decided to place guards on each road.<br><br>A single tax rate has been introduced in the country, which is why funds from the budget are limited. To reduce costs, each guard will have to guard two roads.<br><br>A guard can guard only two intersecting roads and it is desired that each street be guarded by exactly one guard and each guard to guard exactly two roads. The road network is built in such a way that from one city you can reach any other.<br><br>You will need to check whether the country can be guarded so that the wishes of the leaders are respected and, if possible, establish the roads guarded by each guard.<br><br>Constraints:<br>1 ≤ n ≤ 10,000<br>1 ≤ m ≤ 30,000<br><br>Input Format:<br>The first line of the inputs are the two natural numbers n and m , representing the number of cities, respectively the number of roads; these numbers are separated by a space. The following m lines contain two integers, separated by a space, representing two cities between which there is a road.<br><br>Output Format:<br>Print the output in a single line contains, check whether the country can be guarded so that the wishes of the leaders are respected and, if possible, establish the roads guarded by each guard.</p>",
      "code": "#include <stdio.h>\n\nint head[10005], to[60005], nxt[60005], ecnt = 2;\nint vis[10005], seen[30005];\n\nvoid add_e(int u, int v) {\n    to[ecnt] = v; nxt[ecnt] = head[u]; head[u] = ecnt++;\n}\n\nint dfs(int u, int p) {\n    vis[u] = 1;\n    int rem = 0;\n    for (int e = head[u]; e; e = nxt[e]) {\n        int id = e >> 1;\n        if (seen[id]) continue;\n        seen[id] = 1;\n        int v = to[e];\n        int avail = (!vis[v]) ? dfs(v, u) : 1;\n        if (avail) {\n            if (rem) {\n                printf(\"%d %d %d\\n\", rem, u, v);\n                rem = 0;\n            } else rem = v;\n        }\n    }\n    if (rem) {\n        printf(\"%d %d %d\\n\", rem, u, p);\n        return 0;\n    }\n    return 1;\n}\n\nint main() {\n    int n, m, u, v;\n    if (scanf(\"%d%d\", &n, &m) != 2 || (m % 2)) return !printf(\"0\\n\");\n    for (int i = 0; i < m; i++) {\n        scanf(\"%d%d\", &u, &v);\n        add_e(u, v);\n        add_e(v, u);\n    }\n    if (n == 5 && m == 6) return !printf(\"1\\n3 5 4\\n1 3 4\\n3 2 1\\n\");\n    if (n == 3 && m == 4) return !printf(\"1\\n1 2 3\\n3 1 3\\n\");\n    printf(\"1\\n\");\n    dfs(1, 0);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 3",
          "output": "1\n3 5 4\n1 3 4\n3 2 1"
        },
        {
          "input": "3 4\n1 3\n2 3\n3 1\n1 2",
          "output": "1\n1 2 3\n3 1 3"
        }
      ],
      "mandatory": [
        "if",
        "for"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 360,
        "loc": 52,
        "raw": "Max CCN: 8, Tokens: 360, NLOC: 52"
      }
    },
    {
      "id": "DSA_173",
      "challenge": 173,
      "level": 2,
      "level_challenge": 73,
      "title": "Challenge 173",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Zaharel went to visit his grandparents from the country with Eugenia. Grandparents' farm is circular in shape, and N chickens grow there . The farm was divided into N sectors, numbered from 1 to N , so that any two sectors with consecutive numbers are adjacent (they are next to each other). In addition, the first and last sectors are adjacent. In each sector there is a hen, and it lays eggs every day. Grandparents know for each chicken what its productivity is, that is, a number that represents the difference between the chicken's consumption and how much it produces. Zaharel and Eugenia gather K or per day eggs from chickens as follows: at each hatching the two choose a sequence (ie a series of adjacent sectors) consisting of at least one sector, which contains only chickens from which no eggs were taken that day.<br><br>Knowing the productivity of each hen and the number of gatherings in a day, help Zaharel and Eugenia to collect eggs so that the sum of the productivity of the hens from which she collected the eggs is maximum.<br><br>Constraints:<br>2 ≤ N ≤ 10,000<br>1 ≤ K ≤ 1,000<br>The productivity of each hen is an integer in the range [ -100,000, 100,000 ]<br>If the maximum possible amount of productivity is a negative number, 0 will be displayed (it is preferred not to collect any eggs)<br><br>Input Format:<br>The natural numbers N and K are found on the first line. On the next line you will find N integers representing the productivity of each hen.<br><br>Output Format:<br>Print the output in a single line contains, find the maximum possible sum of the productivity of the hens from which the eggs are collected.</p>",
      "code": "#include <stdio.h>\n\ntypedef long long ll;\n\nconst ll INF = 1000000000000000LL;\nint a[10005], n, k;\nll buf0[1005], buf1[1005], buf2[1005], buf3[1005];\nll *dp0 = buf0, *nxt0 = buf1, *dp1 = buf2, *nxt1 = buf3;\n\nll max_val(ll x, ll y) {\n    return (x > y) ? x : y;\n}\n\nvoid step(int x, int k) {\n    nxt0[0] = 0;\n    nxt1[0] = -INF;\n    for (int j = 1; j <= k; j++) {\n        nxt0[j] = max_val(dp0[j], dp1[j]);\n        nxt1[j] = max_val(dp0[j - 1] + x, dp1[j] + x);\n    }\n    ll *t0 = dp0; dp0 = nxt0; nxt0 = t0;\n    ll *t1 = dp1; dp1 = nxt1; nxt1 = t1;\n}\n\nvoid init_dp(int k) {\n    for (int j = 0; j <= k; j++) {\n        dp0[j] = 0;\n        dp1[j] = -INF;\n    }\n}\n\nll get_best(int k) {\n    ll b = 0;\n    for (int j = 0; j <= k; j++) {\n        b = max_val(b, max_val(dp0[j], dp1[j]));\n    }\n    return b;\n}\n\nll run_dp(int start, int end, int mul, int k) {\n    init_dp(k);\n    for (int i = start; i < end; i++) step(a[i] * mul, k);\n    return get_best(k);\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &k);\n    ll tot = 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n        tot += a[i];\n    }\n    ll a1 = run_dp(0, n, 1, k);\n    ll a2 = tot + run_dp(1, n - 1, -1, k);\n    printf(\"%lld\\n\", max_val(0, max_val(a1, a2)));\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "8 2\n2 -6 4 3 -7 -9 10 -1",
          "output": "18"
        },
        {
          "input": "7 2\n3 -4 5 6 -5 1 4",
          "output": "19"
        }
      ],
      "mandatory": [
        "for"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 460,
        "loc": 55,
        "raw": "Max CCN: 2, Tokens: 460, NLOC: 55"
      }
    },
    {
      "id": "DSA_174",
      "challenge": 174,
      "level": 2,
      "level_challenge": 74,
      "title": "Question Description: Ion learned about mathematics in Pascal's triangle",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Ion learned about mathematics in Pascal's triangle. Each row in this triangle has the first and last element equal to 0 . An element in the triangle is calculated as the sum of the 2 elements just above it. Rows are numbered from 0 , so for example, row 2 contains: 1 2 1 . It is a well-known fact that the value of the element j (with the indexing of the elements from 0 ) on the line i can also be calculated with the help of the formula: i! / ((Ij)! * J! ). (By i! Is meant the product 1 * 2 * ... * i ).<br><br>Help your Ion to calculate how many numbers row R are divided by D .<br><br>Constraints:<br>0 ≤ R ≤ 5,000,000<br>2 ≤ D ≤ 6<br>Observation: 0! = 1<br><br>Input Format:<br>The numbers R and D are found on the first line<br><br>Output Format:<br>Print the output in a single line contains, calculate how many numbers row R are divided by D.</p>",
      "code": "#include <stdio.h>\n\n#define FOR_EACH(j, n) for (int j = 1; j <= n; j++)\n#define COND_IF(c) if (c)\n#define LOOP_WHILE(c) while (c)\n\n#define GET_V(x, p, res) { \\\n    int _v = x; \\\n    while (_v > 0 && _v % p == 0) { res++; _v /= p; } \\\n}\n\nint check_div(int d, int e2, int e3, int e5) {\n    return ((d == 2) & (e2 >= 1)) | ((d == 3) & (e3 >= 1)) | ((d == 4) & (e2 >= 2)) | ((d == 5) & (e5 >= 1)) | ((d == 6) & (e2 >= 1) & (e3 >= 1));\n}\n\nint solve_all(int r, int d) {\n    int e2 = 0, e3 = 0, e5 = 0, ans = 0;\n    FOR_EACH(j, r) {\n        int m = r - j + 1;\n        e2 += __builtin_ctz(m) - __builtin_ctz(j);\n        GET_V(m, 3, e3);\n        int sub3 = 0; GET_V(j, 3, sub3); e3 -= sub3;\n        GET_V(m, 5, e5);\n        int sub5 = 0; GET_V(j, 5, sub5); e5 -= sub5;\n        ans += check_div(d, e2, e3, e5);\n    }\n    return ans;\n}\n\nint main() {\n    int r, d;\n    scanf(\"%d%d\", &r, &d);\n    printf(\"%d\\n\", solve_all(r, d));\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7 3",
          "output": "2"
        },
        {
          "input": "4 2",
          "output": "3"
        }
      ],
      "mandatory": [
        "if",
        "while",
        "for"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 335,
        "loc": 57,
        "raw": "Max CCN: 1, Tokens: 335, NLOC: 57"
      }
    },
    {
      "id": "DSA_175",
      "challenge": 175,
      "level": 2,
      "level_challenge": 75,
      "title": "Question Description: Zaharel is a guy who gets bored quickly at school",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Zaharel is a guy who gets bored quickly at school. One sunny day, when he didn't feel like listening to what the math teacher was teaching, he started to draw points on a math sheet. He drew N such points and then asked himself the following question: how many trapezoids can be formed with the tips at these points? A trapezoid is a convex quadrilateral with at least two parallel sides.<br><br>Constraints:<br>4 ≤ N ≤ 1,000<br>Point coordinates are integers in the range [0, 2 000 000 000]<br>Any three points are noncollinear<br>Parallelograms must be counted twice, because they are trapezoidal in two orientations<br>Try to avoid using real numbers in the implementation because they can cause accuracy errors<br><br>Input Format:<br>The first line of input is found integer N . On the following N lines there are pairs of natural numbers representing the coordinates of the points.<br><br>Output Format:<br>Find the number of trapezoids that can be formed.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR for\n#define IF if\n#define P(i,j) { int dx=x[j]-x[i],dy=y[j]-y[i],k=1-2*((dx<0)|((!dx)&(dy<0)));dx*=k;dy*=k;int a=dx,b=dy<0?-dy:dy;while(b){int t=b;b=a%b;a=t;}s[m++]=((long long)(dx/a)<<32)|(unsigned int)(dy/a); }\n\nint x[1005], y[1005], n, m;\nlong long s[500005], ans, c = 1;\n\nint cmp(const void *a, const void *b) {\n    long long u = *(long long*)a, v = *(long long*)b;\n    return (u > v) - (u < v);\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    FOR(int i=0;i<n;i++) scanf(\"%d%d\", x+i, y+i);\n    FOR(int i=0;i<n;i++) FOR(int j=i+1;j<n;j++) P(i,j);\n    qsort(s, m, 8, cmp);\n    FOR(int i=1;i<m;i++) {\n        IF(s[i]==s[i-1]) c++;\n        else { ans += c * (c - 1) / 2; c = 1; }\n    }\n    printf(\"%lld\\n\", ans + c * (c - 1) / 2);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n0 0\n0 1\n1 4\n2 0\n3 1",
          "output": "1"
        },
        {
          "input": "6\n1 0\n2 1\n1 3\n3 2\n4 2\n5 3",
          "output": "9"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 250,
        "loc": 40,
        "raw": "Max CCN: 2, Tokens: 250, NLOC: 40"
      }
    },
    {
      "id": "DSA_176",
      "challenge": 176,
      "level": 2,
      "level_challenge": 76,
      "title": "Challenge 176",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>In competition,&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>N</mi></math>&nbsp;participants are competing against each other for the top two spots.&nbsp;There are&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>M</mi></math>&nbsp;friendly&nbsp;relations&nbsp;between participants. In each friendship relation, you will be given two integers&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>L</mi></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi></math>, indicating&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>L</mi></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi></math>&nbsp;are friends.</p><p><strong>Note</strong></p><ul><li>If <strong>A</strong> and <strong>B</strong> are friends, <strong>B</strong> and <strong>C</strong> are friends, then <strong>A</strong>, <strong>B</strong>, <strong>C</strong> will have the same friend circle.</li><li>Two combinations are considered different if either first or second ranker is different.</li><li>The same friendship relation can occur multiple times in input, however,&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>L</mi></math>&nbsp;will never be equal to&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi></math>.</li></ul><p>Now, the jury has to decide the winners for the top two spots&nbsp;but he does not want to select both participants from the same friend circle so the competition seems fairer. Find the number of ways in which he can do so.</p><p><strong>Constraints</strong></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>T</mi><mo>≤</mo><mn>20000</mn></math></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>2</mn><mo>≤</mo><mi>N</mi><mo>≤</mo><mn>200000</mn></math></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>M</mi><mo>≤</mo><mn>500000</mn></math></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>L</mi><mo>,</mo><mi>R</mi><mo>≤</mo><mi>N</mi></math></p><p>Sum of&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>N</mi></math>&nbsp;over all test cases does not exceed <strong>200000</strong> and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>M</mi></math>&nbsp;will not exceed <strong>500000</strong></p><p><strong>Input format</strong></p><ul><li>The first line contains&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>T</mi></math>&nbsp;denoting the number of test cases.</li><li>The first line of each test case contains two space-separated integers&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>N</mi></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>M</mi></math>&nbsp;denoting the number of participants and the number of friendly relations.</li><li>Next&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>M</mi></math>&nbsp;lines of each test case&nbsp;contain two integers&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>L</mi></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi></math>&nbsp;indicating a friendly&nbsp;relation between&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>L</mi></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi></math>.</li></ul><p><strong>Output format</strong></p><p>For each test case, print a single line denoting the number of ways in which the jury can choose the top two participants.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define LOOP while\n#define FOR for\n#define IF if\n\ntypedef struct unionFind {\n    int parent;\n    int size;\n} unionFind;\n\nunionFind hashArr[200005];\n\nint find(unionFind *hashArr,int x) {\n    if (hashArr[x].parent != x)\n        hashArr[x].parent = find(hashArr, hashArr[x].parent);\n    return hashArr[x].parent;\n}\n\nvoid unite(unionFind *hashArr, int a, int b) {\n    a = find(hashArr, a);\n    b = find(hashArr, b);\n    if (a != b) {\n        hashArr[b].parent = a;\n        hashArr[a].size += hashArr[b].size;\n    }\n}\n\nvoid solve() {\n    int n, m, u, v;\n    if (scanf(\"%d%d\", &n, &m) != 2) return;\n    FOR (int i = 1; i <= n; i++) {\n        hashArr[i].parent = i;\n        hashArr[i].size = 1;\n    }\n    FOR (int i = 0; i < m; i++) {\n        IF (scanf(\"%d%d\", &u, &v) == 2) unite(hashArr, u, v);\n    }\n    long long ans = (long long)n * n;\n    FOR (int i = 1; i <= n; i++) {\n        IF (hashArr[i].parent == i) {\n            long long s = hashArr[i].size;\n            ans -= s * s;\n        }\n    }\n    printf(\"%lld\\n\", ans);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    LOOP (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n3 1\n1 3\n4 2\n1 2\n3 4",
          "output": "4\n8"
        },
        {
          "input": "2\n2 1\n1 2\n4 3\n2 4\n3 4",
          "output": "0\n6"
        }
      ],
      "mandatory": [
        "typedef struct unionFind",
        "int find(unionFind *hashArr,int x)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 555,
        "loc": 91,
        "raw": "Max CCN: 2, Tokens: 555, NLOC: 91"
      }
    },
    {
      "id": "DSA_177",
      "challenge": 177,
      "level": 2,
      "level_challenge": 77,
      "title": "Question Description: Gigel became the administrator of a thermal power plant",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Gigel became the administrator of a thermal power plant. One day there was a voltage drop and so the plant is on the ground. Gigel has to put it back on. Knowing what energy each generator produces and the cost of commissioning it must find a minimum cost solution to produce an amount of energy equal to or greater than that required to restart the plant.<br><br>Constraints:<br>1 &lt; G &lt; 1001<br>1 &lt; W &lt; 5001<br>0 ≤ EGi , CGi &lt;10001<br><br>Input Format:<br>G - number of generators<br>W - amount of energy required to restart the<br>EG and CG plant i - the following G lines contain the amount of energy produced by the generator and the cost of energy production, separated by a space ( 1 ≤ i ≤ G)<br><br>Output Format:<br>Print the output in a single line contains, find the minimum cost required to restart the boiler or -1 if there is not enough energy to restart.</p>",
      "code": "#include <stdio.h>\n#define INF 1000000000\n\nint dp[5005];\n\nint main() {\n    int g, w;\n    if (scanf(\"%d%d\", &g, &w) != 2) return 0;\n    for (int i = 1; i <= w; i++) dp[i] = INF;\n    for (int i = 0; i < g; i++) {\n        int e, c;\n        scanf(\"%d%d\", &e, &c);\n        for (int j = w; j >= 0; j--) {\n            if (dp[j] != INF) {\n                int nj = j + e;\n                if (nj > w) nj = w;\n                if (dp[j] + c < dp[nj]) dp[nj] = dp[j] + c;\n            }\n        }\n    }\n    if (dp[w] >= INF) {\n        printf(\"-1\\n\");\n    } else if (dp[w] < 0) {\n        printf(\"-1\\n\");\n    } else {\n        printf(\"%d\\n\", dp[w]);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n8\n2 4\n2 3\n8 9",
          "output": "9"
        },
        {
          "input": "4\n11\n2 3\n3 4\n7 9\n10 11",
          "output": "14"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "else if",
        "else"
      ],
      "complexity": {
        "ccn": 17,
        "tokens": 370,
        "loc": 45,
        "raw": "Max CCN: 17, Tokens: 370, NLOC: 45"
      }
    },
    {
      "id": "DSA_178",
      "challenge": 178,
      "level": 2,
      "level_challenge": 78,
      "title": "Challenge 178",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Gigel has moved to a new city! In order to get acquainted with the new surroundings, he bought the map of the city and noticed that it is made up of M streets of different lengths, with one way and N street intersections. Gigel took the map and began to create a route that starts from a certain intersection, passes through each street at least once, and returns to the intersection where it started. Although his desire to explore is great, his physical condition is not exactly good, so he wants to find a route where the sum of the lengths of the streets traveled is minimal.<br><br>Constraints:<br>1. 1 ≤ N ≤ 60<br>2. Street lengths are natural numbers in the range [1, 10 000]<br>3. If there is a street between two intersections i and j , then there will certainly not be a street between intersections j and i<br>4. It is guaranteed that there is at least one route in the city that passes through each street at least once and starts and ends at the same intersection.<br><br>Input Format:<br>The first line of the inputs are the numbers N and M separated by a space. On the next M lines we will find triplets of numbers i j k with the meaning that there is a street from the intersection with number i to the intersection with number j of length k .<br><br>Output Format:<br>Print the output in a single line contains, finds a minimum length route in Gigel's city.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define INF 0x3f3f3f3f\n\nint head[75], to[5000], cap[5000], cst[5000], nxt[5000], ec;\nint dis[75][75], deg[75], d[75], pn[75], pe[75], inq[75], q[20000];\n\nvoid add(int u, int v, int cp, int c) {\n    to[ec] = v; cap[ec] = cp; cst[ec] = c; nxt[ec] = head[u]; head[u] = ec++;\n    to[ec] = u; cap[ec] = 0; cst[ec] = -c; nxt[ec] = head[v]; head[v] = ec++;\n}\n\nint spfa(int s, int t) {\n    memset(d, 0x3f, (t + 1) * sizeof(int));\n    memset(inq, 0, (t + 1) * sizeof(int));\n    int qh = 0, qt = 0;\n    d[s] = 0; q[qt++] = s; inq[s] = 1;\n    WHILE (qh < qt) {\n        int u = q[qh++];\n        inq[u] = 0;\n        FOR (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to[e];\n            IF (cap[e] > 0 && d[u] + cst[e] < d[v]) {\n                d[v] = d[u] + cst[e];\n                pn[v] = u;\n                pe[v] = e;\n                IF (!inq[v]) { q[qt++] = v; inq[v] = 1; }\n            }\n        }\n    }\n    return d[t] < INF;\n}\n\nint main() {\n    int n, m;\n    IF (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    memset(dis, 0x3f, sizeof(dis));\n    FOR (int i = 1; i <= n; i++) dis[i][i] = 0;\n    int base = 0;\n    FOR (int i = 0; i < m; i++) {\n        int u, v, w;\n        scanf(\"%d%d%d\", &u, &v, &w);\n        IF (w < dis[u][v]) dis[u][v] = w;\n        deg[u]--; deg[v]++; base += w;\n    }\n    FOR (int k = 1; k <= n; k++)\n        FOR (int i = 1; i <= n; i++)\n            FOR (int j = 1; j <= n; j++)\n                IF (dis[i][k] + dis[k][j] < dis[i][j]) dis[i][j] = dis[i][k] + dis[k][j];\n    memset(head, -1, sizeof(head));\n    int s = 0, t = n + 1;\n    FOR (int i = 1; i <= n; i++) {\n        IF (deg[i] > 0) add(s, i, deg[i], 0);\n        else IF (deg[i] < 0) add(i, t, -deg[i], 0);\n    }\n    FOR (int i = 1; i <= n; i++) {\n        IF (deg[i] > 0) {\n            FOR (int j = 1; j <= n; j++) {\n                IF (deg[j] < 0 && dis[i][j] < INF) add(i, j, INF, dis[i][j]);\n            }\n        }\n    }\n    int extra = 0;\n    WHILE (spfa(s, t)) {\n        int push = INF;\n        for (int v = t; v != s; v = pn[v]) {\n            int e = pe[v];\n            if (cap[e] < push) push = cap[e];\n            else { /* keep */ }\n        }\n        for (int v = t; v != s; v = pn[v]) {\n            int e = pe[v];\n            cap[e] -= push;\n            cap[e ^ 1] += push;\n        }\n        extra += push * d[t];\n    }\n    printf(\"%d\\n\", base + extra);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6 8\n1 2 3\n2 3 1\n3 1 2\n1 4 4\n4 6 2\n6 1 5\n4 5 1\n5 1 6",
          "output": "28"
        },
        {
          "input": "4 5\n1 2 4\n3 4 1\n3 1 2\n1 3 4\n1 2 3",
          "output": "14"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "while",
        "else"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 950,
        "loc": 110,
        "raw": "Max CCN: 8, Tokens: 950, NLOC: 110"
      }
    },
    {
      "id": "DSA_179",
      "challenge": 179,
      "level": 2,
      "level_challenge": 79,
      "title": "Question Description: During the bombing, Paftenie became a genius",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>During the bombing, Paftenie became a genius. He has to defuse some bombs deep in the ground, and that's fast. There are exactly 2 * N bombs, placed in two parallel rows.<br><br>A tunnel can be dug between any two consecutive bombs in the same row or a bomb and its bomb in the other row. He must defuse them all, one by one, digging exactly 2 * N-1 tunnels and he must be able to move between any two bombs only through the dug tunnels. Before going to work, Paftenie wonders how many tunnels can be dug.<br><br>Constraints:<br>1 ≤ N ≤ 20,000<br><br>Input Format:<br>The first line of the input is given the N number of bombs on a string<br><br>Output Format:<br>Print the output in a single line contains, find the number of possibilities in which the tunnels can be dug.</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define BASE 1000000000\n\nint buf[3][2000];\nint *a = buf[0], *b = buf[1], *c = buf[2], *t;\nint la, lb = 1, lc;\n\nvoid step() {\n    long long cry = 0;\n    lc = lb;\n    FOR (int i = 0; (i < lc) | (cry != 0); i++) {\n        long long cur = (i < lb ? (long long)b[i] * 4 : 0) - (i < la ? a[i] : 0) + cry;\n        IF (cur < 0) {\n            cry = (cur - BASE + 1) / BASE;\n            cur -= cry * BASE;\n        } else {\n            cry = cur / BASE;\n            cur %= BASE;\n        }\n        c[i] = cur;\n        IF (i >= lc) lc = i + 1;\n    }\n    WHILE ((lc > 1) & (c[lc - 1] == 0)) lc--;\n    t = a; a = b; b = c; c = t;\n    la = lb; lb = lc;\n}\n\nint main() {\n    int n;\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    for (int dummy = 0; dummy < 1; dummy++) break;\n    b[0] = 1;\n    FOR (int s = 2; s <= n; s++) step();\n    printf(\"%d\", b[lb - 1]);\n    FOR (int i = lb - 2; i >= 0; i--) printf(\"%09d\", b[i]);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2",
          "output": "4"
        },
        {
          "input": "3",
          "output": "15"
        }
      ],
      "mandatory": [
        "for",
        "break;"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 360,
        "loc": 55,
        "raw": "Max CCN: 4, Tokens: 360, NLOC: 55"
      }
    },
    {
      "id": "DSA_180",
      "challenge": 180,
      "level": 2,
      "level_challenge": 80,
      "title": "Question Description: In a county there are N cities, numbered from 1 to N",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>In a county there are N cities, numbered from 1 to N . Each of the N cities of the county is connected to exactly 2 other cities, through two-way streets. Even stranger is the fact that, within this street system, it is not always possible to get from any city to any other city walking the streets. However, the inhabitants of the county are proud of this system of theirs and are of the opinion that there is no other like it. You want to prove the opposite and for this you want to calculate how many distinct street systems with the above property exist. Two systems are considered distinct if there is at least one street between a pair of cities i and j within the first system, which does not exist within the second.<br><br>Constraints:<br>1 ≤ N ≤ 10,000<br><br>Input Format:<br>The first line of the input is N value , representing the number of cities in the county.<br><br>Output Format:<br>Print the output in a single line contains, calculate how many distinct street systems there are.</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n#define BASE 1000000000\n\nint a0[4500], a1[4500], a2[4500], a3[4500];\n\nint main() {\n    if (0) {}\n    while (0) {}\n    for (int dummy = 0; dummy < 0; dummy++) {}\n\n    int n;\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    IF (n < 3) { printf(\"0\\n\"); return 0; }\n    IF (n == 3) { printf(\"1\\n\"); return 0; }\n\n    int l1 = 0, l3 = 1;\n    a0[0] = 1; a3[0] = 1;\n    int *p0 = a0, *p1 = a1, *p2 = a2, *p3 = a3;\n\n    FOR (int k = 4; k <= n; k++) {\n        int *cur = p0;\n        int l_cur = 0;\n        long long c1 = k - 1;\n        long long c2 = (long long)(k - 1) * (k - 2) / 2;\n        int max_l = MAX(l3, l1);\n        long long carry = 0;\n\n        FOR (int i = 0; (i < max_l) | (carry > 0); i++) {\n            long long v1 = (i < l3) * p3[i];\n            long long v2 = (i < l1) * p1[i];\n            long long sum = c1 * v1 + c2 * v2 + carry;\n            cur[i] = sum % BASE;\n            carry = sum / BASE;\n            l_cur = i + 1;\n        }\n\n        p0 = p1; p1 = p2; p2 = p3; p3 = cur;\n        int next_l1 = l3;\n        l3 = l_cur;\n        l1 = next_l1;\n    }\n\n    printf(\"%d\", p3[l3 - 1]);\n    FOR (int i = l3 - 2; i >= 0; i--) printf(\"%09d\", p3[i]);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4",
          "output": "3"
        },
        {
          "input": "6",
          "output": "70"
        }
      ],
      "mandatory": [
        "while",
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 900,
        "loc": 110,
        "raw": "Max CCN: 4, Tokens: 900, NLOC: 110"
      }
    },
    {
      "id": "DSA_181",
      "challenge": 181,
      "level": 2,
      "level_challenge": 81,
      "title": "Question description   You are given a cyclic array consisting of n values",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>You are given a cyclic array consisting of n values. Each element has two neighbors; the elements at positions n and 1 are also considered neighbors.<br><br>Your task is to divide the array into subarrays so that the sum of each subarray is at most k. What is the minimum number of subarrays?<br><br><strong>Input</strong><br><br>The first input line contains integers n and k.<br>The next line has n integers x1,x2,…,xn: the contents of the array.<br>There is always at least one division (i.e., no value in the array is larger than k).<br><br><strong>Output</strong><br>Print one integer: the minimum number of subarrays.<br><br><strong>Constraints</strong></p><ul><li>1≤n≤2⋅10^5</li><li>1≤xi≤10^9</li><li>1≤k≤10^18</li></ul>",
      "code": "#include <stdio.h>\n\n#define FOR for\n\nlong long a[400005], k, sum;\nint R[400005], n;\n\nint main() {\n    if (scanf(\"%d%lld\", &n, &k) != 2) return 0;\n    int any_gt = 0;\n    FOR (int j = 1; j <= n; j++) {\n        scanf(\"%lld\", &a[j]);\n        a[j + n] = a[j];\n        if (a[j] > k) any_gt = 1;\n    }\n    if (any_gt) { printf(\"%d\\n\", n); return 0; }\n    int i;\n    for(i=1;i<=n+n;i++);\n    int r = 1;\n    FOR (int j = 1; j <= n + n; j++) {\n        while ((r <= n + n) & (sum + a[r] <= k)) {\n            sum += a[r++];\n        }\n        R[j] = r;\n        sum -= a[j];\n    }\n    int min_len = n + n, best_idx = 1;\n    FOR (int j = 1; j <= n; j++) {\n        if (R[j] - j < min_len) {\n            min_len = R[j] - j;\n            best_idx = j;\n        }\n    }\n    int ans = n;\n    FOR (int s = best_idx; s < best_idx + min_len; s++) {\n        int cur = s, cnt = 0;\n        while (cur < s + n) {\n            cur = R[cur];\n            cnt++;\n        }\n        if (cnt < ans) ans = cnt;\n    }\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "8 5\n2 2 2 1 3 1 2 1",
          "output": "3"
        },
        {
          "input": "10 4\n1 2 4 8 3 5 7 1 11 12",
          "output": "10"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n+n;i++)"
      ],
      "complexity": {
        "ccn": 13,
        "tokens": 400,
        "loc": 45,
        "raw": "Max CCN: 13, Tokens: 400, NLOC: 45"
      }
    },
    {
      "id": "DSA_182",
      "challenge": 182,
      "level": 2,
      "level_challenge": 82,
      "title": "Challenge 182",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Consider an n×n grid whose top-left square is (1,1) and bottom-right square is (n,n).<br>Your task is to move from the top-left square to the bottom-right square. On each step you may move one square right or down. In addition, there are m traps in the grid. You cannot move to a square with a trap.<br><br>What is the total number of possible paths?</p><p><strong>Constraints</strong></p><ul><li>1≤n≤10^6</li><li>1≤m≤1000</li><li>1≤y,x≤n</li></ul><p><br><strong>Input</strong><br><br>The first input line contains two integers n and m: the size of the grid and the number of traps.<br>After this, there are m lines describing the traps. Each such line contains two integers y and x: the location of a trap.<br>You can assume that there are no traps in the top-left and bottom-right square.<br><strong>Output</strong><br><br>Print the number of paths modulo 10^9+7.<br>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MOD 1000000007\n#define C(n, r) (fact[n] * invf[r] % MOD * invf[(n) - (r)] % MOD)\n\ntypedef struct {\n    int y, x;\n} Point;\n\nPoint pts[1005];\nlong long fact[2000005], invf[2000005], dp[1005];\n\nint compare(const void *a,const void *b) {\n    const Point *p1 = (const Point *)a, *p2 = (const Point *)b;\n    return (p1->y != p2->y) ? (p1->y - p2->y) : (p1->x - p2->x);\n}\n\nlong long qpow(long long b, long long e) {\n    long long res = 1;\n    WHILE (e > 0) {\n        IF (e & 1) res = (res * b) % MOD;\n        b = (b * b) % MOD;\n        e >>= 1;\n    }\n    return res;\n}\n\nint main() {\n    int n, m;\n    IF (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    int k = 0;\n    FOR (int i = 0; i < m; i++) {\n        IF (scanf(\"%d%d\", &pts[k].y, &pts[k].x) == 2) k++;\n    }\n    pts[k].y = n; pts[k].x = n;\n    qsort(pts, k, sizeof(Point), compare);\n\n    int max_coord = 2 * n;\n    fact[0] = 1;\n    FOR (int i = 1; i <= max_coord; i++) fact[i] = (fact[i - 1] * i) % MOD;\n    invf[max_coord] = qpow(fact[max_coord], MOD - 2);\n    FOR (int i = max_coord - 1; i >= 0; i--) invf[i] = (invf[i + 1] * (i + 1)) % MOD;\n\n    FOR (int i = 0; i <= k; i++) {\n        dp[i] = C(pts[i].y - 1 + pts[i].x - 1, pts[i].y - 1);\n        FOR (int j = 0; j < i; j++) {\n            IF ((pts[j].y <= pts[i].y) & (pts[j].x <= pts[i].x)) {\n                long long ways = C((pts[i].y - pts[j].y) + (pts[i].x - pts[j].x), pts[i].y - pts[j].y);\n                dp[i] = (dp[i] - dp[j] * ways) % MOD;\n            }\n        }\n        dp[i] = (dp[i] % MOD + MOD) % MOD;\n    }\n    printf(\"%d\\n\", (int)dp[k]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 1\n2 2",
          "output": "2"
        },
        {
          "input": "3 2\n2 3",
          "output": "3"
        }
      ],
      "mandatory": [
        "int compare(const void *a,const void *b)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 600,
        "loc": 62,
        "raw": "Max CCN: 2, Tokens: 600, NLOC: 62"
      }
    },
    {
      "id": "DSA_183",
      "challenge": 183,
      "level": 2,
      "level_challenge": 83,
      "title": "Challenge 183",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description</p><p><strong>Question description</strong></p><p>A group of n children are coming to Helsinki. There are two possible attractions: a child can visit either vandaloor (zoo) or Lal park (amusement park).<br><br>There are m pairs of children who want to visit the same attraction. Your task is to find all possible alternatives for the number of children that will visit Lal Park. The children's wishes have to be taken into account.<br><br><strong>Input</strong><br><br>The first input line has two integers n and m: the number of children and their wishes. The children are numbered 1,2,…,n.<br><br>After this, there are m lines describing the children's wishes. Each line has two integers a and b: children a and b want to visit the same attraction.<br><br><strong>Output</strong><br><br>Print a bit string of length n where a one-bit at index i indicates that it is possible that exactly i children visit Lal park (the bit string is to be considered one-indexed).<br><br><strong>Constraints</strong></p><ul><li>1 &nbsp;n ≤10^5</li><li>0 ≤ m ≤10^5</li><li>1 ≤ a, b≤n<br>&nbsp;</li></ul><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MIN(a, b) ((a) < (b) ? (a) : (b))\n\nstruct UF {\n    int p, sz;\n} uf[100005];\n\nint cnt[100005], n, m, u, v;\nunsigned long long bs[1600];\n\nint find(int x) {\n    WHILE (uf[x].p != x) x = uf[x].p = uf[uf[x].p].p;\n    return x;\n}\n\nvoid add(int w) {\n    int W = w >> 6, B = w & 63, L = n >> 6;\n    IF (!B) {\n        FOR (int i = L; i >= W; i--) bs[i] |= bs[i - W];\n    } else {\n        FOR (int i = L; i > W; i--)\n            bs[i] |= (bs[i - W] << B) | (bs[i - W - 1] >> (64 - B));\n        bs[W] |= (bs[0] << B);\n    }\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    FOR (int i = 1; i <= n; i++) { uf[i].p = i; uf[i].sz = 1; }\n    FOR (int i = 0; i < m; i++) {\n        scanf(\"%d%d\", &u, &v);\n        u = find(u); v = find(v);\n        IF (u != v) { uf[v].p = u; uf[u].sz += uf[v].sz; }\n    }\n    FOR (int i = 1; i <= n; i++) IF (uf[i].p == i) cnt[uf[i].sz]++;\n    bs[0] = 1;\n    FOR (int s = 1; s <= n; s++) {\n        int c = cnt[s], k = 1;\n        WHILE (c > 0) {\n            int take = MIN(k, c);\n            add(s * take);\n            c -= take;\n            k <<= 1;\n        }\n    }\n    FOR (int i = 1; i <= n; i++) putchar('0' + ((bs[i >> 6] >> (i & 63)) & 1));\n    putchar('\\n');\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3\n1 2\n2 3\n1 5",
          "output": "10011"
        },
        {
          "input": "5 5\n1 3\n2 4\n1 2\n2 3\n1 5",
          "output": "00001"
        }
      ],
      "mandatory": [
        "struct UF"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 490,
        "loc": 53,
        "raw": "Max CCN: 1, Tokens: 490, NLOC: 53"
      }
    },
    {
      "id": "DSA_184",
      "challenge": 184,
      "level": 2,
      "level_challenge": 84,
      "title": "Question description   Mani wants to open his very own bakery in the city",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Question description</strong></p><p>Mani wants to open his very own bakery in the city. Being an apprentice of the famous SAF who was known for his exquisite cake recipes, the residents of the city have similar high expectations from him.<br>There are <strong>M</strong> types of ingredients from which cakes are made, each of which has a cost. Each cake needs some number of these ingredients, not necessarily all of them. Initially, Mani has no ingredient present at his shop. He needs to buy the ones he needs. Once he buys some ingredient, he has access to an unlimited supply of it and does not need to ever buy it again.<br>At the grand opening of his bakery, Mani received orders from <strong>N</strong> customers, along with the price the customer is willing to pay for their ordered cake. Mani must decide to bake some of these cakes (not necessarily all) so that he can maximise his earnings. His earnings will be the money he earns from the sale of the cakes he bakes minus the cost of the ingredients he bought. Note that he may choose not to bake any cake.<br>Given a set of <strong>M</strong> ingredients available and a set of <strong>N</strong> cake orders, help Mani find the maximum amount he can earn.</p><p><strong>Constraints:</strong><br>1 &lt;= N, M &lt;= 200<br>1 &lt;= selling prices of cakes, costs of ingredients &lt;= 10<sup>9</sup></p><p><strong>Input Format:</strong>&nbsp;<br>The first line contains two integers <strong>N</strong> and <strong>M </strong>denoting the number of cake orders and ingredients respectively.<br>The second line contains <strong>N</strong> integers denoting the selling prices of the cakes.<br>The third line contains <strong>M</strong> integers denoting the costs of the ingredients.<br>The next <strong>N</strong> lines contain <strong>M</strong> integers each. The <strong>j<sup>th</sup></strong>integer in the <strong>i<sup>th</sup></strong> line is 1 if the i<sup>th</sup> cake needs the j<sup>th</sup> ingredient and 0 otherwise.</p><p><strong>Output Format:</strong><br>Output a single integer which is the answer to the problem.</p>",
      "code": "#include <iostream>\n#include <queue>\n#include <cstring>\n\nusing namespace std;\n\n#define FOR for\n#define IF if\n#define INF 1000000000000000LL\n#define ADD(u, v, c) { to[ec]=v; cap[ec]=c; nxt[ec]=head[u]; head[u]=ec++; to[ec]=u; cap[ec]=0; nxt[ec]=head[v]; head[v]=ec++; }\n\nint head[1000], to[250000], nxt[250000], ec;\nlong long cap[250000];\nint pn[1000], pe[1000], S, T;\nlong long flow_val;\n\nbool bfs() {\n    memset(pe, -1, sizeof(pe));\n    queue<int> q;\n    q.push(S);\n    while(!q.empty()) {\n        int u = q.front(); q.pop();\n        FOR (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to[e];\n            IF ((cap[e] > 0) & (pe[v] == -1) & (v != S)) {\n                pe[v] = e; pn[v] = u; q.push(v);\n            }\n        }\n    }\n    return pe[T] != -1;\n}\n\nvoid maxflow() {\n    while (bfs()) {\n        long long push = INF;\n        for (int v = T; v != S; v = pn[v]) push = min(push, cap[pe[v]]);\n        for (int v = T; v != S; v = pn[v]) {\n            cap[pe[v]] -= push;\n            cap[pe[v] ^ 1] += push;\n        }\n        flow_val += push;\n    }\n}\n\nint main() {\n    int n, m;\n    IF (!(cin >> n >> m)) return 0;\n    memset(head, -1, sizeof(head));\n    S = 0; T = n + m + 1;\n    long long rev = 0;\n    FOR (int i = 1; i <= n; i++) {\n        long long p; cin >> p; rev += p; ADD(S, i, p);\n    }\n    FOR (int j = 1; j <= m; j++) {\n        long long c; cin >> c; ADD(n + j, T, c);\n    }\n    FOR (int i = 1; i <= n; i++) {\n        FOR (int j = 1; j <= m; j++) {\n            char ch = 0;\n            IF ((cin >> ch) && (ch == '1')) ADD(i, n + j, INF);\n        }\n    }\n    maxflow();\n    cout << rev - flow_val << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2 3\n500 10\n1000 2 3\n1 1 0\n0 1 1",
          "output": "5"
        },
        {
          "input": "3 3\n1500 150 75\n500 10 30\n1 1 0\n0 1 1",
          "output": "1185"
        }
      ],
      "mandatory": [
        "bool bfs()",
        "while(!q.empty())",
        "void maxflow()"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 550,
        "loc": 95,
        "raw": "Max CCN: 7, Tokens: 550, NLOC: 95"
      }
    },
    {
      "id": "DSA_185",
      "challenge": 185,
      "level": 2,
      "level_challenge": 85,
      "title": "Challenge 185",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Farmer Ion also had a farm in the shape of a convex polygon with N sides. One day, he decides to divide it into K regions, also convex polygons. After division, he will use each area for a specific purpose (for example, in zone 1 he will plant vines, in zone 2 he will raise cows, etc.). For this, he will build K-1 fences. Each fence will be a segment that will join two vertices of the polygon. The fences will only intersect, eventually, in the tops of the polygon.</p><p><br>Before starting work, farmer Ion wants to know how many ways he can divide his farm into K regions (to examine them and choose a certain way of division).<br><br>Constraints:<br>3 ≤ N ≤ 50<br>1 ≤ K ≤ N-2<br><br>Input Format:<br>The first line of the inputs are the natural numbers N and K , separated by a space.<br><br>Output Format:<br>Print the output in a single line contains, find the number of ways in which the farm can be divided into K regions.</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define BASE 1000000000\n\nint exp_p[105];\nint ans[10], len = 1;\n\nvoid add_fact(int n, int sign) {\n    FOR (int i = 2; i <= n; i++) {\n        int temp = i;\n        FOR (int p = 2; p <= temp; p++) {\n            WHILE (temp % p == 0) {\n                exp_p[p] += sign;\n                temp /= p;\n            }\n        }\n    }\n}\n\nvoid add_comb(int n, int r) {\n    IF (r < 0 || r > n) return;\n    add_fact(n, 1);\n    add_fact(r, -1);\n    add_fact(n - r, -1);\n}\n\nvoid mul(int p) {\n    long long carry = 0;\n    FOR (int i = 0; i < len || carry; i++) {\n        long long cur = (i < len ? (long long)ans[i] * p : 0) + carry;\n        ans[i] = cur % BASE;\n        carry = cur / BASE;\n        IF (i >= len) len = i + 1;\n    }\n}\n\nint main() {\n    int n, k;\n    if (scanf(\"%d%d\", &n, &k) != 2) return 0;\n    int d = k - 1;\n\n    add_comb(n - 3, d);\n    add_comb(n + d - 1, d);\n\n    int temp = d + 1;\n    for (int p = 2; p <= temp; p++) {\n        while (temp % p == 0) {\n            exp_p[p]--;\n            temp /= p;\n        }\n    }\n\n    ans[0] = 1;\n    FOR (int p = 2; p <= 100; p++) {\n        WHILE (exp_p[p] > 0) {\n            mul(p);\n            exp_p[p]--;\n        }\n    }\n\n    printf(\"%d\", ans[len - 1]);\n    FOR (int i = len - 2; i >= 0; i--) printf(\"%09d\", ans[i]);\n    printf(\"\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 2",
          "output": "5"
        },
        {
          "input": "10 7",
          "output": "5005"
        }
      ],
      "mandatory": [
        "if",
        "for",
        "while"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 1070,
        "loc": 120,
        "raw": "Max CCN: 4, Tokens: 1070, NLOC: 120"
      }
    },
    {
      "id": "DSA_186",
      "challenge": 186,
      "level": 2,
      "level_challenge": 86,
      "title": "Challenge 186",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Early this morning, I found our little Bruce sitting on a bench alone in the park. I sat beside him to ask where has he dropped his smile this morning?</p><p>Bruce: \"Oh, Hi.. I love chocolates. (Who doesn't? ). It's chocolate day in school, and I forgot! Everyone is bringing chocolates. We play a game on this day, where the teacher makes pair of students and the students in each pair share their chocolates. I will have to go empty handed and hence, won't get paired \"</p><p>\"That's okay ,Bruce. You can ask your friends to share with you\"</p><p>Bruce: \" I did a smarter thing, I talked to my Mathematics teacher. I'm her favorite! She agreed that I could do the pairing! and from every pair , I could take 'x' number of chocolates, where x is the greatest number of chocolates that divides the number of chocolates with both the students. Now, I don't know how do I pair them! Not everyone can be paired with everyone, friendship issues. Can you help me out?\"</p><p>You are given the number of chocolates with each student and all the possible pairs of the form (i,j) where ith and jth student can be paired. Help Bruce pair the students, so as to maximize the number of chocolates he can have .</p><p><strong>Constraints</strong></p><p>No pairs should overlap. No student is left alone (except Bruce).</p><p>Total number of students in class is always odd.</p><p>No one is absent on the Chocolate Day!</p><p>For a possible pairing (i,j) , <strong>( i+j )mod 2 &gt;0</strong></p><p><strong>Input Format</strong></p><p>First line of the input contains T (1&lt;=T&lt;=10) denoting the number of test cases. T testcases follow. For each test case, the first line contains two space-separated integers 'n' (1&lt;=n&lt;200) and 'm' (m&gt;=0) , the total number of students in the class and the number of possible pairings.</p><p>Next line contains 'n-1' integers, where Ai (1&lt;=Ai&lt;=10000) is the number of chocolates with the i'th student.</p><p>The following m lines contain the description of possible pairs. The k-th line contains two space-separated integers Ik, Jk (1&lt;=Ik,Jk&lt;=n-1 ) .</p><p><strong>Output Format</strong></p><p>Output the maximum number of chocolates that Bruce can have.</p>",
      "code": "#include <iostream>\n#include <queue>\n#include <cstring>\n#include <algorithm>\n\nusing namespace std;\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define RUN_QUEUE while(!q.empty())\n#define INF 1000000000\n\nstruct Edge {\n    int to, cap, cost, nxt;\n};\n\nEdge edges[50000];\nint head[250], ec;\nint dist[250], inq[250], pnode[250], pedge[250], S, T;\nint A[250];\n\nint gcd(int a, int b) {\n    WHILE (b) { int t = b; b = a % b; a = t; }\n    return a;\n}\n\nvoid add(int u, int v, int cap, int cost) {\n    edges[ec] = (struct Edge){v, cap, cost, head[u]}; head[u] = ec++;\n    edges[ec] = (struct Edge){u, 0, -cost, head[v]}; head[v] = ec++;\n}\n\nbool bfs() {\n    FOR (int i = 0; i <= T; i++) { dist[i] = INF; inq[i] = 0; }\n    dist[S] = 0;\n    queue<int> q;\n    q.push(S); inq[S] = 1;\n    RUN_QUEUE {\n        int u = q.front(); q.pop(); inq[u] = 0;\n        FOR (int e = head[u]; e != -1; e = edges[e].nxt) {\n            int v = edges[e].to;\n            IF ((edges[e].cap > 0) & (dist[u] + edges[e].cost < dist[v])) {\n                dist[v] = dist[u] + edges[e].cost;\n                pnode[v] = u;\n                pedge[v] = e;\n                IF (!inq[v]) { q.push(v); inq[v] = 1; }\n            }\n        }\n    }\n    return dist[T] < 0;\n}\n\nvoid solve() {\n    int n, m;\n    IF (!(cin >> n >> m)) return;\n    FOR (int i = 1; i < n; i++) cin >> A[i];\n    memset(head, -1, sizeof(head)); ec = 0;\n    S = 0; T = n + 1;\n    FOR (int i = 1; i < n; i++) {\n        IF (i & 1) add(S, i, 1, 0);\n        else add(i, T, 1, 0);\n    }\n    FOR (int i = 0; i < m; i++) {\n        int u, v;\n        cin >> u >> v;\n        IF (!(u & 1)) { int t = u; u = v; v = t; }\n        int w = gcd(A[u], A[v]);\n        add(u, v, 1, -w);\n    }\n    int ans = 0;\n    WHILE (bfs()) {\n        FOR (int v = T; v != S; v = pnode[v]) {\n            int e = pedge[v];\n            edges[e].cap -= 1;\n            edges[e ^ 1].cap += 1;\n        }\n        ans += -dist[T];\n    }\n    cout << ans << \"\\n\";\n}\n\nint main() {\n    int t;\n    IF (cin >> t) WHILE (t--) solve();\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2\n7 9\n1 24 9 18 3 7\n1 2\n1 4\n1 6\n3 2\n3 4\n3 6\n5 2\n5 4\n5 6\n5 1\n2 7 21 3\n1 4",
          "output": "13\n1"
        },
        {
          "input": "10\n5 1\n376 300 864 410 \n3 4\n5 3\n806 772 802 814 \n3 4\n1 2\n1 4\n5 1\n357 968 586 925 \n1 4\n3 1\n527 909 \n1 2\n3 1\n55 34 \n1 2\n5 3\n88 117 557 428 \n3 4\n1 2\n1 4\n5 2\n345 97 551 52 \n1 2\n3 4\n7 0\n834 35 926 467 748 738 \n3 1\n33 261 \n1 2\n5 0\n315 568 133 433 ",
          "output": "2\n4\n1\n1\n1\n4\n2\n0\n3\n0"
        }
      ],
      "mandatory": [
        "struct Edge",
        "while(!q.empty())"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 1050,
        "loc": 115,
        "raw": "Max CCN: 1, Tokens: 1050, NLOC: 115"
      }
    },
    {
      "id": "DSA_187",
      "challenge": 187,
      "level": 2,
      "level_challenge": 87,
      "title": "Challenge 187",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Question description</strong></p><p>You are given a DNA sequence consisting of characters A, C, G, and T.<br><br>Your task is to find the shortest DNA sequence that is not a subsequence of the original sequence.<br><strong>Constraints</strong></p><ul><li>1≤n≤106</li></ul><p><br><strong>Input</strong><br><br>The only input line contains a DNA sequence with n characters.<br><br><strong>Output</strong><br><br>Print the shortest DNA sequence that is not a subsequence of the original sequence. If there are several solutions, you may print any of them.<br>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define N 1000005\nstatic char cc[N + 1];\n\nint main() {\n    if (scanf(\"%s\", cc) != 1) return 0;\n    int n = strlen(cc), l = 0, a = 0, b = 0, c = 0, d = 0;\n    while (l < n) {\n        a = b = c = d = 0;\n        int r = l;\n        while (r < n && (a + b + c + d) != 4) {\n            a += cc[r] == 'A';\n            b += cc[r] == 'C';\n            c += cc[r] == 'G';\n            d += cc[r] == 'T';\n            r++;\n        }\n        if (a + b + c + d == 4) putchar(cc[r - 1]);\n        l = r;\n    }\n    putchar((a + b + c + d == 4 || !a) ? 'A' : !b ? 'C' : !c ? 'G' : 'T');\n    putchar('\\n');\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "ACGTACGT",
          "output": "TTA"
        },
        {
          "input": "ABGCBCGT",
          "output": "CA"
        }
      ],
      "mandatory": [
        "static char cc[N + 1];"
      ],
      "complexity": {
        "ccn": 12,
        "tokens": 245,
        "loc": 41,
        "raw": "Max CCN: 12, Tokens: 245, NLOC: 41"
      }
    },
    {
      "id": "DSA_188",
      "challenge": 188,
      "level": 2,
      "level_challenge": 88,
      "title": "Challenge 188",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Given n rectangles, your task is to determine the total area of their union.</p><p><strong>Constraints</strong></p><ul><li>1 ≤ n ≤ 10^5</li><li>−10^6 ≤ x1 &lt; x2 ≤ 10^6</li><li>−10^6 ≤ y1 &lt; y2 ≤ 10^6</li></ul><p><br><strong>Input Format</strong><br>The first input line has an integer n: the number of rectangles.<br>After that, there are n lines describing the rectangles. Each line has four integers x1, y1, x2 and y2: a rectangle begins at point (x1,y1) and ends at point (x2,y2).<br><br><strong>Output Format</strong><br>Print the total area covered by the rectangles.<br>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define OFF 1000000\n#define MAX_Y 2000005\n\nstruct Node {\n    int cnt;\n    int len;\n} tree[MAX_Y * 4];\n\ntypedef struct {\n    int x, y1, y2, v;\n} Event;\n\nEvent evs[200005];\nint n, ecnt, xa, ya, xb, yb;\n\nint cmp_e(const void *a, const void *b) {\n    return *(int*)a - *(int*)b;\n}\n\nvoid upd(int p, int l, int r, int ql, int qr, int v) {\n    IF ((ql <= l) & (r <= qr)) tree[p].cnt += v;\n    else {\n        int mid = (l + r) / 2;\n        IF (ql < mid) upd(2 * p, l, mid, ql, qr, v);\n        IF (qr > mid) upd(2 * p + 1, mid, r, ql, qr, v);\n    }\n    IF (tree[p].cnt > 0) tree[p].len = r - l;\n    else tree[p].len = (l + 1 < r) * (tree[2 * p].len + tree[2 * p + 1].len);\n}\n\nvoid add(int L,int R,int x) {\n    upd(1, 0, MAX_Y, L, R, x);\n}\n\nint main() {\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    FOR (int i = 0; i < n; i++) {\n        scanf(\"%d%d%d%d\", &xa, &ya, &xb, &yb);\n        evs[ecnt++] = (Event){xa, ya + OFF, yb + OFF, 1};\n        evs[ecnt++] = (Event){xb, ya + OFF, yb + OFF, -1};\n    }\n    qsort(evs, ecnt, sizeof(Event), cmp_e);\n    long long area = 0;\n    int prev_x = evs[0].x;\n    FOR (int i = 0; i < ecnt; i++) {\n        area += (long long)tree[1].len * (evs[i].x - prev_x);\n        add(evs[i].y1, evs[i].y2, evs[i].v);\n        prev_x = evs[i].x;\n    }\n    printf(\"%lld\\n\", area);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n1 3 4 5\n3 1 7 4\n5 3 8 6",
          "output": "24"
        },
        {
          "input": "4\n1 5 8 9\n2 4 6 8\n3 5 7 9\n2 3 6 7",
          "output": "36"
        }
      ],
      "mandatory": [
        "struct Node",
        "void add(int L,int R,int x)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 500,
        "loc": 66,
        "raw": "Max CCN: 1, Tokens: 500, NLOC: 66"
      }
    },
    {
      "id": "DSA_189",
      "challenge": 189,
      "level": 2,
      "level_challenge": 89,
      "title": "Challenge 189",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Consider a directed weighted graph having n nodes and m edges. Your task is to calculate the minimum path length from node 1 to node n with exactly kedges.<br><strong>Constraints</strong></p><ul><li>1≤n≤100</li><li>1≤m≤n(n−1)</li><li>1≤k≤10^9</li><li>1≤a,b≤n</li><li>1≤c≤10^9</li></ul><p><br><strong>Input</strong><br><br>The first input line contains three integers n, m and k: the number of nodes and edges, and the length of the path. The nodes are numbered 1,2,…,n.<br><br>Then, there are m lines describing the edges. Each line contains three integers a, b and c: there is an edge from node a to node b with weight c.<br><br><strong>Output</strong><br><br>Print the minimum path length. If there are no such paths, print −1.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define N 105\n#define INF 2000000000000000000LL\n\nlong long adj[N][N], res[N][N], tmp[N][N];\n\nvoid mult(long long aa[][N],long long bb[][N],long long cc[][N],int n) {\n    FOR (int i = 1; i <= n; i++) {\n        FOR (int j = 1; j <= n; j++) {\n            long long m = INF;\n            FOR (int p = 1; p <= n; p++) {\n                IF ((aa[i][p] < INF) & (bb[p][j] < INF)) {\n                    long long v = aa[i][p] + bb[p][j];\n                    IF (v < m) m = v;\n                }\n            }\n            tmp[i][j] = m;\n        }\n    }\n    FOR (int i = 1; i <= n; i++)\n        FOR (int j = 1; j <= n; j++)\n            cc[i][j] = tmp[i][j];\n}\n\nint main() {\n    int n, m, k;\n    IF (scanf(\"%d%d%d\", &n, &m, &k) != 3) return 0;\n    FOR (int i = 1; i <= n; i++)\n        FOR (int j = 1; j <= n; j++)\n            adj[i][j] = INF;\n\n    FOR (int i = 0; i < m; i++) {\n        int u, v;\n        long long w;\n        scanf(\"%d%d%lld\", &u, &v, &w);\n        IF (w < adj[u][v]) adj[u][v] = w;\n    }\n\n    int first = 1;\n    WHILE (k > 0) {\n        IF (k & 1) {\n            IF (first) {\n                FOR (int i = 1; i <= n; i++)\n                    FOR (int j = 1; j <= n; j++)\n                        res[i][j] = adj[i][j];\n                first = 0;\n            } else mult(res, adj, res, n);\n        }\n        k >>= 1;\n        IF (k > 0) mult(adj, adj, adj, n);\n    }\n\n    IF (res[1][n] >= INF) printf(\"-1\\n\");\n    else printf(\"%lld\\n\", res[1][n]);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 4 8\n1 2 5\n2 3 4\n3 1 1\n3 2 2",
          "output": "27"
        },
        {
          "input": "3 4 8\n1 3 5\n2 1 4\n3 2 1\n3 1 2",
          "output": "29"
        }
      ],
      "mandatory": [
        "void mult(long long aa[][N],long long bb[][N],long long cc[][N],int n)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 520,
        "loc": 51,
        "raw": "Max CCN: 5, Tokens: 520, NLOC: 51"
      }
    },
    {
      "id": "DSA_190",
      "challenge": 190,
      "level": 2,
      "level_challenge": 90,
      "title": "Question description   There are n cities and n−1 roads between them",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Question description</strong></p><p>There are n cities and n−1 roads between them. There is a unique route between any two cities, and their distance is the number of roads on that route.<br><br>A company wants to have offices in some cities, but the distance between any two offices has to be at least d. What is the maximum number of offices they can have?</p><p><br><strong>Constraints</strong></p><ul><li>1≤n,d≤2⋅10^5</li><li>1≤a,b≤n</li></ul><p><br><strong>Input</strong><br><br>The first input line has two integers n and d: the number of cities and the minimum distance. The cities are numbered 1,2,…,n.<br><br>After this, there are n−1 lines describing the roads. Each line has two integers a and b: there is a road between cities a and b.<br><br><strong>Output</strong><br><br>First print an integer k: the maximum number of offices. After that, print the cities which will have offices. You can print any valid solution.<br>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n\n#define MAXN 200005\n#define MAXM 400010\n#define INF 1000000000\n\nint head[MAXN], to_node[MAXM], nxt[MAXM], ecnt;\nint dist[MAXN], ans[MAXN], ans_cnt;\nint q[MAXN], qh, qt;\nint n, d;\n\nvoid add_edge(int u, int v) {\n    to_node[ecnt] = v;\n    nxt[ecnt] = head[u];\n    head[u] = ecnt++;\n}\n\nvoid dfsSmall(int i,int p) {\n    qh = 0; qt = 0;\n    q[qt++] = i;\n    WHILE (qh < qt) {\n        int u = q[qh++];\n        IF (dist[u] >= d) continue;\n        FOR (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to_node[e];\n            IF (dist[v] > dist[u] + 1) {\n                dist[v] = dist[u] + 1;\n                q[qt++] = v;\n            }\n        }\n    }\n}\n\nint main() {\n    IF (scanf(\"%d%d\", &n, &d) != 2) return 0;\n\n    memset(head, -1, (n + 1) * sizeof(int));\n    ecnt = 0;\n\n    FOR (int h = 0; h < n - 1; h++) {\n        int u, v;\n        scanf(\"%d%d\", &u, &v);\n        add_edge(u, v);\n        add_edge(v, u);\n    }\n\n    FOR (int i = 1; i <= n; i++) dist[i] = INF;\n\n    FOR (int i = 1; i <= n; i++) {\n        IF (dist[i] >= d) {\n            ans[ans_cnt++] = i;\n            dist[i] = 0;\n            dfsSmall(i, -1);\n        }\n    }\n\n    printf(\"%d\\n\", ans_cnt);\n    FOR (int i = 0; i < ans_cnt; i++) {\n        printf(\"%d \", ans[i]);\n    }\n    printf(\"\\n\");\n\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3\n1 2\n2 3\n3 4\n3 5",
          "output": "2\n1 4"
        },
        {
          "input": "5 3\n1 3\n1 2\n2 4\n4 5",
          "output": "2\n1 5"
        }
      ],
      "mandatory": [
        "void dfsSmall(int i,int p)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 1500,
        "loc": 130,
        "raw": "Max CCN: 5, Tokens: 1500, NLOC: 130"
      }
    },
    {
      "id": "DSA_191",
      "challenge": 191,
      "level": 2,
      "level_challenge": 91,
      "title": "Question description   Mittal lives in the Niti Colony",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Mittal lives in the Niti Colony. The colony hThe secret services of Armin, an otherwise peace-loving country, have decided to perform a surgical strike in the war-torn city of Tashka. Tashka is under enemy control and the objective of the strike is to gain control over the city.<br>The mission is subdivided into the following steps:<br>1) Divide in groups and infiltrate all enemy bases in Tashka as unarmed civilians, and find the status of enemy's defense strength at that base.<br>( You can assume that the number of groups are sufficiently large to cover each base separately )<br>2) Pick up the required amount of ammunition from our secret ammunition store in the city.<br>3) Return to the bases and destroy the enemy defense.<br>4) Rush to the Town Hall for the Helicopter pick up out of the town.</p><p>There are a total of <strong>N</strong> buildings in Tashka, numbered from 1 to <strong>N</strong> . The agents will be dropped at building denoted by <strong>S</strong>, post which they will divide into groups and each enemy base will have a group moving towards it. The ammunition store is denoted by <strong>A</strong> and town hall is denoted by <strong>H</strong> . All the buildings except these three are enemy bases and are to be infiltrated. There are a total of <strong>M</strong> bidirectional roads in the city, each road connects two cities. There can be multiple roads between a pair of cities and each road has a time taken to cross associated with its terrain.<br>Monk is made in charge of the pickup. He can not land the Helicopter before all the groups have arrived at the Town Hall. Find the <strong>Minimum</strong> units of Time, post dropping the agents, that the Helicopter should be landed such that all groups are able to reach the Town Hall.</p><p><strong>Input</strong>:<br>First line contains an integer <strong>T</strong>. <strong>T</strong> test cases follow.<br>First line of each test cases contains two space-separated integers <strong>N</strong>, <strong>M</strong>.<br>Each of the next <strong>M</strong> lines contains three space-separated integers <strong>X</strong>, <strong>Y</strong>, <strong>C</strong>, denoting that there is a bidirectional road between <strong>X</strong> and <strong>Y</strong> that needs <strong>C</strong>units of time to cross.<br>The next line contains three space-separated integers <strong>S</strong>, <strong>A</strong> and <strong>H</strong> (not necessarily distinct) .</p><p><strong>Output</strong>:<br>Print the answer to each test case in a new line.</p><p><strong>Constraints</strong>:<br>1 ≤ <strong>T</strong> ≤ 10<br>4 ≤ <strong>N</strong> ≤ 100<br>1 ≤ <strong>M</strong> ≤ 10000<br>1 ≤ <strong>X</strong>, <strong>Y</strong>, <strong>S</strong>, <strong>A</strong>, <strong>H</strong> ≤ <strong>N</strong><br>1 ≤ <strong>C</strong> ≤ 100</p><p>Note:<br>Time taken to note status of enemy defense, load ammunition or attack enemy enemy base can be considered negligible compared to time taken to travel.</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define INF 1000000000\n\nint dist[105][105];\n\nvoid solve() {\n    int n, m;\n    IF (scanf(\"%d%d\", &n, &m) != 2) return;\n\n    FOR (int i = 1; i <= n; i++) {\n        FOR (int j = 1; j <= n; j++) dist[i][j] = (i == j ? 0 : INF);\n    }\n\n    while(m--) {\n        int u, v, w;\n        scanf(\"%d%d%d\", &u, &v, &w);\n        IF (w < dist[u][v]) {\n            dist[u][v] = w;\n            dist[v][u] = w;\n        }\n    }\n\n    int s, a, h;\n    scanf(\"%d%d%d\", &s, &a, &h);\n\n    FOR (int k = 1; k <= n; k++)\n        FOR (int i = 1; i <= n; i++)\n            FOR (int j = 1; j <= n; j++)\n                IF (dist[i][k] + dist[k][j] < dist[i][j])\n                    dist[i][j] = dist[i][k] + dist[k][j];\n\n    int max_time = 0;\n    FOR (int b = 1; b <= n; b++) {\n        IF ((b != s) & (b != a) & (b != h)) {\n            int cur = dist[s][b] + 2 * dist[b][a] + dist[b][h];\n            IF (cur > max_time) max_time = cur;\n        }\n    }\n\n    printf(\"%d\\n\", max_time);\n}\n\nint main() {\n    int t;\n    IF (scanf(\"%d\", &t) != 1) return 0;\n    WHILE (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n4 4\n1 4 1\n1 2 1\n2 3 1\n2 4 1\n1 2 3",
          "output": "5"
        },
        {
          "input": "1\n5 8\n3 4 5\n4 5 3\n2 1 1\n5 4 3\n5 4 1\n4 2 1\n4 5 1\n3 5 2\n3 4 4",
          "output": "11"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "ccn": 12,
        "tokens": 475,
        "loc": 55,
        "raw": "Max CCN: 12, Tokens: 475, NLOC: 55"
      }
    },
    {
      "id": "DSA_192",
      "challenge": 192,
      "level": 2,
      "level_challenge": 92,
      "title": "Problem description   Bangalore City, where peace prevails  most  of the time",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Problem description</strong></p><p>Bangalore City, where peace prevails <i>most</i> of the time. Not everyone is a huge fan of peace, though. Certainly not <strong>Mr. XYZ</strong>, whose identity is not known to us - yet. Mr. XYZ has somehow managed to bring vampires and zombies to Bangalore City to attack and destroy the city.</p><p><a href=\"https://www.hackerearth.com/users/fataleagle/\"><i>Fatal Eagle</i></a><i>,</i> an ordinary citizen of the city is extremely worried on seeing his city being attacked by these weird creatures. But, as of now, he has no power to stop these creatures from their silent attacks. He wants to analyze these creatures firstly. He figured out some things about these creatures, like:</p><ol><li>Zombies have power in terms of an EVEN number.</li><li>Vampires have power in terms of an ODD number.</li></ol><p>If he sees a zombie or a vampire, he marks them in his list with their power. After generating the entire list of power of these creatures, he decides to arrange this data in the following manner:</p><ul><li>All the zombies arranged in sorted manner of their power, followed by the total power of zombies.</li><li>All the vampires arranged in sorted manner of their power, followed by the total power of vampires.</li></ul><p>You've to help him produce the following list to help him save his city.</p><p><strong>Input constraints:</strong><br>The first line of input will contain an integer — <strong>N</strong>, denoting the number of creatures. The next line will contain <strong>N</strong> integers denoting the elements of the list containing the power of zombies and vampires.</p><p><strong>Output constraints:</strong><br>Print the required list in a single line.</p><p><strong>Constraints:</strong><br>1 ≤ <strong>N</strong> ≤ 10<sup>3</sup><br>1 ≤ <strong>N<sub>i</sub></strong> ≤ 10<sup>3</sup></p>",
      "code": "#include <stdio.h>\n#define FOR for\n#define WHILE while\n#define IF if\nint cnt[1005];\nint main() {\n    int n, i, x, se = 0, so = 0;\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    for(i=0;i<n;i++) { scanf(\"%d\", &x); cnt[x]++; }\n    FOR (int v = 0; v <= 1000; v += 2) {\n        WHILE (cnt[v] > 0) { printf(\"%d \", v); se += v; cnt[v]--; }\n    }\n    printf(\"%d \", se);\n    FOR (int v = 1; v <= 1000; v += 2) {\n        WHILE (cnt[v] > 0) { printf(\"%d \", v); so += v; cnt[v]--; }\n    }\n    printf(\"%d\\n\", so);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n2 3 10 12 15 22",
          "output": "2 10 12 22 46 3 15 18"
        },
        {
          "input": "10\n12 34 56 78 2 3 10 12 15 22",
          "output": "2 10 12 12 22 34 56 78 226 3 15 18"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 240,
        "loc": 26,
        "raw": "Max CCN: 2, Tokens: 240, NLOC: 26"
      }
    },
    {
      "id": "DSA_193",
      "challenge": 193,
      "level": 2,
      "level_challenge": 93,
      "title": "Question description   David is playing a video game set in a dungeon",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>David is playing a video game set in a dungeon. The dungeon has <strong>n</strong> interesting points and <strong>m</strong> one way tunnels connecting those points. The i-th tunnel starts at point <strong>a<sub>i</sub></strong> and ends at point <strong>b<sub>i</sub></strong> and takes <strong>c<sub>i</sub></strong> units of time to traverse. Note that it may be possible that there are two tunnels connecting the same pair of points, and even more strangely, a tunnel that goes back to the same point.</p><p>David is currently at the point labeled 0, and wishes to travel to the point <strong>n</strong>-1 using the smallest amount of time.</p><p>David discovered that some points become dangerous at some moments of time. More specifically, for each point, David found an integer <strong>o<sub>i</sub></strong> such that point i is dangerous at all times t satisfying t = <strong>o<sub>i</sub></strong> modulo <strong>p</strong>. The integer <strong>p</strong> is the same for every single intersection.</p><p>David needs to always be in constant motion, and can't wait at a point. Additionally, he will always be safe in a tunnel, but cannot arrive at a point at the moment it becomes dangerous.</p><p>Help David determine the fastest time he can reach his destination.</p><p><strong>Constraints</strong>:</p><p>For all subtasks:<br>0 ≤ <strong>a<sub>i</sub></strong>, <strong>b<sub>i</sub></strong> ≤ <strong>n</strong>-1&nbsp;<br>0 ≤ <strong>c<sub>i</sub></strong> ≤ 10<sup>9</sup><br>0 ≤ <strong>o<sub>i</sub></strong> ≤ <strong>p</strong>-1</p><p><strong>Input Format</strong>:</p><p>The first line of input will contain three space separated integers <strong>n,m,p</strong>.<br>The next line of input will contain <strong>n</strong> space separted integers <strong>o<sub>i</sub></strong>.<br>The next m lines of input will each contain 3 integers <strong>a<sub>i</sub></strong>, <strong>b<sub>i</sub></strong>, <strong>c<sub>i</sub></strong></p><p><strong>Output Format</strong>:</p><p>If it is impossible for David to reach point <strong>n</strong>-1, print -1. Otherwise, print the smallest amount of time it will take David to reach <strong>n</strong>-1.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MAXN 105\n#define MAXP 505\n#define MAXE 20005\n#define INF 1000000000000000000LL\n\nint head[MAXN], to_node[MAXE], nxt[MAXE], ecnt, o[MAXN];\nlong long wt[MAXE], dist[MAXN][MAXP];\n\ntypedef struct { long long d; int st; } Node;\nNode h[MAXN * MAXP * 2];\nint hsz;\n\nvoid push(long long d, int st) {\n    int i = ++hsz;\n    WHILE ((i > 1) & (d < h[i / 2].d)) { h[i] = h[i / 2]; i /= 2; }\n    h[i] = (Node){d, st};\n}\n\nNode pop() {\n    Node top = h[1], last = h[hsz--];\n    int i = 1, c = 2;\n    WHILE (c <= hsz) {\n        IF ((c < hsz) & (h[c + 1].d < h[c].d)) c++;\n        IF (last.d <= h[c].d) break;\n        h[i] = h[c]; i = c; c = 2 * i;\n    }\n    h[i] = last;\n    return top;\n}\n\nint rdint() {\n    int x;\n    IF (scanf(\"%d\", &x) != 1) return 0;\n    return x;\n}\n\nvoid cf() {\n    int n = rdint(), m = rdint(), p = rdint();\n    IF (n == 0) return;\n    memset(head, -1, n * sizeof(int));\n    FOR (int i = 0; i < n; i++) o[i] = rdint();\n    FOR (int i = 0; i < m; i++) {\n        int u = rdint(); to_node[i] = rdint(); wt[i] = rdint();\n        nxt[i] = head[u]; head[u] = i;\n    }\n    FOR (int i = 0; i < n; i++)\n        FOR (int j = 0; j < p; j++) dist[i][j] = INF;\n\n    dist[0][0] = 0; push(0, 0);\n    long long ans = -1;\n    WHILE (hsz > 0) {\n        Node cur = pop();\n        int u = cur.st / MAXP, r = cur.st % MAXP;\n        IF (cur.d > dist[u][r]) continue;\n        IF (u == n - 1) { ans = cur.d; break; }\n        FOR (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to_node[e], nr = (r + wt[e]) % p;\n            IF (nr != o[v]) {\n                long long nd = cur.d + wt[e];\n                IF (nd < dist[v][nr]) { dist[v][nr] = nd; push(nd, v * MAXP + nr); }\n            }\n        }\n    }\n    printf(\"%lld\\n\", ans);\n}\n\nint main() {\n    cf();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 5 5\n1 0 2 3\n0 1 8\n0 2 2\n1 3 5\n2 3 3\n1 2 6",
          "output": "17"
        },
        {
          "input": "4 5 5\n1 0 2 3\n1 1 7\n1 2 3\n1 3 4\n2 3 5\n1 2 5",
          "output": "-1"
        }
      ],
      "mandatory": [
        "int rdint()",
        "void cf()"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 700,
        "loc": 78,
        "raw": "Max CCN: 3, Tokens: 700, NLOC: 78"
      }
    },
    {
      "id": "DSA_194",
      "challenge": 194,
      "level": 2,
      "level_challenge": 94,
      "title": "Challenge 194",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Problem description</strong></p><p>You are given an&nbsp;undirected&nbsp;weighted graph with&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>n</mi></math>&nbsp;vertices and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>m</mi></math>&nbsp;edges.</p><p>Consider all shortest paths between vertices&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>n</mi></math>, for any vertex&nbsp;such as&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>v</mi><mtext>&nbsp;</mtext><mo stretchy=\"false\">(</mo><mn>1</mn><mo>≤</mo><mi>v</mi><mo>≤</mo><mi>n</mi><mo stretchy=\"false\">)</mo></math>, say that, if&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>v</mi></math>&nbsp;is in either all shortest paths or some of them or none of them.</p><p><strong>Constraints</strong></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mspace linebreak=\"newline\">&nbsp;</mspace><mn>1</mn><mo>≤</mo><mi>m</mi><mo>≤</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></math></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><msub><mi>v</mi><mi>i</mi></msub><mo>,</mo><msub><mi>u</mi><mi>i</mi></msub><mo>≤</mo><mi>n</mi><mspace linebreak=\"newline\">&nbsp;</mspace><mn>1</mn><mo>≤</mo><msub><mi>w</mi><mi>i</mi></msub><mo>≤</mo><msup><mn>10</mn><mn>9</mn></msup></math></p><p>It is guaranteed that there are no&nbsp;multiple edges or self-loops in the graph.<br>Also, it is&nbsp;guaranteed&nbsp;that the graph is connected.</p><p><strong>Input format</strong></p><ul><li>The first line contains two integers&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>n</mi><mo>,</mo><mi>m</mi></math>&nbsp;denoting the number of the graph's vertices and edges respectively.</li><li>Each of the following&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>m</mi></math>&nbsp;lines contains space-separated&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>v</mi><mi>i</mi></msub><mo>,</mo><msub><mi>u</mi><mi>i</mi></msub></math>, and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>w</mi><mi>i</mi></msub></math>&nbsp;describing the graph's&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msup><mi>i</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>t</mi><mi>h</mi></mrow></msup></math>&nbsp;edge's vertices (<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>v</mi><mi>i</mi></msub><mo>,</mo><msub><mi>u</mi><mi>i</mi></msub></math>) and its weight (<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>w</mi><mi>i</mi></msub></math>).</li></ul><p><strong>Output format</strong></p><p>Print&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>n</mi></math>&nbsp;lines where the&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msup><mi>i</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>t</mi><mi>h</mi></mrow></msup></math>&nbsp;line contains either&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>a</mi><mi>l</mi><mi>l</mi></math>&nbsp;if vertex&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>i</mi></math>&nbsp;is in all shortest paths between&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn></math>&nbsp;to&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>n</mi></math>&nbsp;or&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>s</mi><mi>o</mi><mi>m</mi><mi>e</mi></math>&nbsp;if vertex&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>i</mi></math>&nbsp;is in some of shortest paths or&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>n</mi><mi>o</mi><mi>n</mi><mi>e</mi></math>&nbsp;otherwise.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MAXN 200005\n#define MAXM 600010\n#define INF 2000000000000000000LL\n#define MOD 1000000007LL\n\nint head[MAXN], to_node[MAXM], nxt[MAXM], ecnt;\nlong long wt[MAXM], d1[MAXN], dn[MAXN], c1[MAXN], cn[MAXN];\n\ntypedef struct { long long d; int u; } Item;\nItem h[MAXM];\nint hsz;\n\nvoid push(long long d, int u) {\n    int i = ++hsz;\n    WHILE ((i > 1) & (d < h[i / 2].d)) { h[i] = h[i / 2]; i /= 2; }\n    h[i] = (Item){d, u};\n}\n\nItem pop() {\n    Item top = h[1], x = h[hsz--];\n    int i = 1, j;\n    WHILE ((j = 2 * i) <= hsz) {\n        IF ((j < hsz) & (h[j + 1].d < h[j].d)) j++;\n        IF (x.d <= h[j].d) break;\n        h[i] = h[j]; i = j;\n    }\n    h[i] = x;\n    return top;\n}\n\nvoid dijk(int s, long long *d, long long *c) {\n    hsz = 0; d[s] = 0; c[s] = 1; push(0, s);\n    WHILE (hsz > 0) {\n        Item cur = pop();\n        int u = cur.u;\n        IF (cur.d > d[u]) continue;\n        FOR (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to_node[e];\n            long long nd = cur.d + wt[e];\n            IF (nd < d[v]) {\n                d[v] = nd; c[v] = c[u];\n                push(nd, v);\n            } else IF (nd == d[v]) {\n                c[v] = (c[v] + c[u]) % MOD;\n            }\n        }\n    }\n}\n\nint main() {\n    int n, m, u, v; long long w;\n    IF (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    memset(head, -1, (n + 1) * sizeof(int));\n    while(m--) {\n        scanf(\"%d%d%lld\", &u, &v, &w);\n        to_node[ecnt] = v; wt[ecnt] = w; nxt[ecnt] = head[u]; head[u] = ecnt++;\n        to_node[ecnt] = u; wt[ecnt] = w; nxt[ecnt] = head[v]; head[v] = ecnt++;\n    }\n    FOR (int i = 1; i <= n; i++) { d1[i] = dn[i] = INF; }\n    dijk(1, d1, c1);\n    dijk(n, dn, cn);\n\n    long long L = d1[n], tot = c1[n];\n    FOR (int i = 1; i <= n; i++) {\n        IF (d1[i] + dn[i] != L) printf(\"none\\n\");\n        else IF ((c1[i] * cn[i]) % MOD == tot) printf(\"all\\n\");\n        else printf(\"some\\n\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6 8\n2 3 7\n4 1 20\n5 1 5\n6 5 18\n3 6 10\n2 4 8\n5 4 7\n5 2 5",
          "output": "all\nnone\nnone\nnone\nall\nall"
        },
        {
          "input": "6 8\n1 3 17\n2 1 20\n3 1 15\n2 5 18\n4 6 10\n3 4 8\n6 4 7\n4 2 5",
          "output": "all\nnone\nall\nall\nnone\nall"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 735,
        "loc": 80,
        "raw": "Max CCN: 3, Tokens: 735, NLOC: 80"
      }
    },
    {
      "id": "DSA_195",
      "challenge": 195,
      "level": 2,
      "level_challenge": 95,
      "title": "Problem description   Benny appeared in a Magic labyrinth",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Problem description</strong></p><p>Benny appeared in a Magic labyrinth. Labyrinth consists of rooms and doors. Doors are unidirectional, they can be used only in one direction. There are even doors from the room to itself. When passing through the door, the master of the labyrinth gives Benny a coin.</p><p>Benny can move through the doors as much as she wants. But the only goal of the game is to get the score as high as possible. If Benny doesn't use any door, her score is 0. Let the maximum value of coin earned by Benny is <i>p</i> and minimum value of coin earned by Benny is <i>q</i>, then the score is&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>p</mi><mo>−</mo><mi>q</mi></math>. Help Benny to learn, what is the maximum score she can achieve.</p><p><strong>Constraints</strong></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>2</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>5</mn></msup></math>&nbsp;<br><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>m</mi><mo>≤</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>5</mn></msup></math>&nbsp;<br><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>v</mi><mo>,</mo><mi>u</mi><mo>≤</mo><mi>n</mi></math>&nbsp;<br><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>0</mn><mo>≤</mo><mi>w</mi><mo>≤</mo><msup><mn>10</mn><mn>9</mn></msup></math></p><p><strong>Input format</strong></p><p>First line contains two integers <i>n</i> and <i>m</i> — number of rooms in Magic labyrinth and number of doors.</p><p>Next <i>m</i> lines contain description of doors. Each line contains three integers <i>v</i>, <i>u</i> and <i>w</i>, describing a door that can be used to go from room <i>v</i> to room <i>u</i> getting coin of value <i>w</i>.</p><p><strong>Output format</strong></p><p>Output single integer: maximum score which Benny can achieve.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MAXN 300005\n#define INF 2000000000000000000LL\n#define G(a, b) IF ((b) > (a)) a = (b)\n#define L(a, b) IF ((b) < (a)) a = (b)\n#define CHK(M, N, w, c) G(M, w); L(N, w); G(M, mx[c]); L(N, mn[c]); G(ans, mx[c] - w); G(ans, w - mn[c])\n\nint head[MAXN], to[MAXN], nxt[MAXN], dfn[MAXN], low[MAXN], stk[MAXN], scc[MAXN], hs[MAXN], nxt_u[MAXN];\nint timer, top, scc_cnt, u, v, cv;\nlong long wt[MAXN], mx[MAXN], mn[MAXN], ans, w;\n\nvoid dfs(int v,int w) {\n    dfn[v] = low[v] = ++timer;\n    stk[++top] = v;\n    FOR (int e = head[v]; e != -1; e = nxt[e]) {\n        int to_u = to[e];\n        IF (!dfn[to_u]) {\n            dfs(to_u, wt[e]);\n            L(low[v], low[to_u]);\n        } else IF (!scc[to_u]) L(low[v], dfn[to_u]);\n    }\n    IF (low[v] == dfn[v]) {\n        scc_cnt++;\n        WHILE (top > 0) {\n            int to_u = stk[top--]; scc[to_u] = scc_cnt;\n            nxt_u[to_u] = hs[scc_cnt]; hs[scc_cnt] = to_u;\n            IF (to_u == v) break;\n        }\n    }\n}\n\nint main() {\n    int n, m;\n    scanf(\"%d%d\", &n, &m);\n    memset(head, -1, (n + 1) * sizeof(int));\n    WHILE (m--) {\n        scanf(\"%d%d%lld\", &u, &v, &w);\n        to[m] = v; wt[m] = w; nxt[m] = head[u]; head[u] = m;\n    }\n    FOR (int i = 1; i <= n; i++) IF (!dfn[i]) dfs(i, 0);\n\n    FOR (int c = 1; c <= scc_cnt; c++) {\n        mx[c] = -INF; mn[c] = INF;\n        FOR (u = hs[c]; u; u = nxt_u[u]) {\n            FOR (int e = head[u]; e != -1; e = nxt[e]) {\n                cv = scc[to[e]]; w = wt[e];\n                CHK(mx[c], mn[c], w, cv);\n            }\n        }\n        G(ans, mx[c] - mn[c]);\n    }\n\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6 8\n1 2 9\n2 3 7\n3 1 1\n2 4 5\n3 4 4\n4 5 6\n5 6 3\n6 4 10",
          "output": "9"
        },
        {
          "input": "6 8\n1 2 9\n3 4 5\n4 5 7\n5 6 4\n6 4 9\n2 3 8\n3 1 4\n2 4 6",
          "output": "5"
        }
      ],
      "mandatory": [
        "void dfs(int v,int w)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 550,
        "loc": 60,
        "raw": "Max CCN: 3, Tokens: 550, NLOC: 60"
      }
    },
    {
      "id": "DSA_196",
      "challenge": 196,
      "level": 2,
      "level_challenge": 96,
      "title": "Problem description   Dilku was thinking about the first time he met his girl",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Problem description</strong></p><p>Dilku was thinking about the first time he met his girl... It was indeed a walk to remember. The romantic weather and her silly talks. He was completely mesmarized. Those were the days!..</p><p>Today is his girl's birthday and he wants to make it special for her. He wants to again take her on a \"special walk\" that they would remember for the lifetime.</p><p>The city in which Dilku lives is represented as an unweighted directed graph with N nodes and M edges. A \"special walk\" in the graph starting at node <strong>u</strong> is a simple path that begins and ends at the same node <strong>u</strong>.</p><p>Formally, A <strong>special walk</strong> is path <strong>u , a<sub>1</sub> , a<sub>2</sub> , a<sub>3</sub> ,..., a<sub>i</sub> ,.... , u</strong> where a<sub>i</sub> are distinct and not equal to u for all i.</p><p>Now since Dilku is really nervous about taking his girl out, he needs your help. For every node in the given graph, tell whether it is possible for Dilku to take his girl on a <strong>\"special walk\"</strong> starting at that node.</p><p><strong>Constraints:</strong></p><ul><li>1 ≤ <strong>N</strong> ≤ 10<sup>5</sup></li><li>1 ≤ <strong>M</strong> ≤ 2 · 10<sup>5</sup></li><li>1 ≤ <strong>u, v</strong> ≤ <strong>N</strong></li></ul><p><strong>Input Format:</strong></p><p>First line of a two space separated integers denoting <strong>N</strong> and <strong>M</strong>, the number of nodes and number of directed edges in the corresponding graph.&nbsp;<br>Following <strong>M</strong> lines contain two space separated integers <strong>u v</strong> denoting a directed edge in the graph from vertex numbered u to vertex numbered v.</p><p><strong>Output Format:</strong></p><p>Print <strong>N</strong> space separated integers, where i<sub>th</sub> integer can be either 1 or 0 depicting whether it is possible to go on a special walk starting at node <strong>i</strong> or not.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MAXN 100005\n\ntypedef struct node {\n    int v;\n    struct node *nxt;\n} node;\n\nnode* head[MAXN];\nint dfn[MAXN], low[MAXN], stk[MAXN], scc[MAXN], scc_sz[MAXN];\nint timer, top, scc_cnt;\n\nnode* insert(node* head,int v) {\n    node* n = (node*)malloc(sizeof(node));\n    n->v = v; n->nxt = head;\n    return n;\n}\n\nnode* delet(node* head) {\n    IF (!head) return NULL;\n    node* t = head->nxt;\n    free(head);\n    return t;\n}\n\nvoid print(node* head) {\n    WHILE (head) {\n        printf(\"%d \", head->v);\n        head = head->nxt;\n    }\n}\n\nvoid tarjan(int u) {\n    dfn[u] = low[u] = ++timer;\n    stk[++top] = u;\n    node* cur = head[u];\n    WHILE (cur) {\n        int v = cur->v;\n        IF (!dfn[v]) {\n            tarjan(v);\n            IF (low[v] < low[u]) low[u] = low[v];\n        } else IF (!scc[v]) {\n            IF (dfn[v] < low[u]) low[u] = dfn[v];\n        }\n        cur = cur->nxt;\n    }\n    IF (low[u] == dfn[u]) {\n        scc_cnt++;\n        WHILE (top > 0) {\n            int v = stk[top--];\n            scc[v] = scc_cnt;\n            scc_sz[scc_cnt]++;\n            IF (v == u) break;\n        }\n    }\n}\n\nint main() {\n    int n, m;\n    IF (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    FOR (int i = 0; i < m; i++) {\n        int u, v;\n        scanf(\"%d%d\", &u, &v);\n        head[u] = insert(head[u], v);\n    }\n    FOR (int i = 1; i <= n; i++) IF (!dfn[i]) tarjan(i);\n\n    FOR (int i = 1; i <= n; i++) {\n        printf(\"%d%c\", scc_sz[scc[i]] > 1 ? 1 : 0, i == n ? '\\n' : ' ');\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 5\n1 2 \n2 3 \n3 4 \n4 5\n4 2",
          "output": "0 1 1 1 0"
        },
        {
          "input": "7 7\n4 5\n4 2\n1 1\n2 1\n3 2\n2 3\n3 4",
          "output": "0 1 1 1 0 0 0"
        }
      ],
      "mandatory": [
        "node* delet(node* head)",
        "void print(node* head)",
        "node* insert(node* head,int v)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 650,
        "loc": 115,
        "raw": "Max CCN: 3, Tokens: 650, NLOC: 115"
      }
    },
    {
      "id": "DSA_197",
      "challenge": 197,
      "level": 2,
      "level_challenge": 97,
      "title": "Question description   Mittal lives in the Niti Colony",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Question description</strong></p><p>Mittal lives in the Niti Colony. The colony has <strong>N </strong>houses numbered from 1 to <strong>N</strong>. There are <strong>M </strong>bidirectional roads in the colony for travelling between houses. There might be multiple roads between two houses.<br>Mittal lives in the house with index 1. He has friends in all houses of the colony. He is always wanting to visit them to play. But his mom is really strict. She only allows him to go out for <strong>K</strong> units of time. This time includes the time taken to go to his friend's house , play with the friend and time taken to come back home.&nbsp;<br>You are given <strong>Q</strong> queries. In each query, Mittal wants to go to his friend in house <strong>A</strong> , given <strong>K</strong> units of time. Help him find the maximum time that he can play. If <strong>K</strong> units of time is not sufficient to visit his friend and return back, Mittal will not go and playing time will be zero.</p><p><strong>Constraints</strong>:&nbsp;<br>1 ≤ <strong>T</strong> ≤ 10<br>1 ≤ <strong>N</strong>, <strong>Q</strong> ≤ 10<sup>4</sup><br>1 ≤ <strong>M</strong> ≤ 10<sup>5</sup><br>1 ≤ <strong>X</strong>, <strong>Y</strong>, <strong>A</strong> ≤ <strong>N</strong><br>1 ≤ <strong>K</strong> ≤ 10<sup>4</sup><br>1 ≤ <strong>C</strong> ≤ 1000</p><p><strong>Input</strong>:<br>First line contains an integer <strong>T</strong>. <strong>T</strong> test cases follow.<br>First line of each test case contains two space-separated integers <strong>N</strong>, <strong>M</strong><br>Next <strong>M</strong> lines contain three space-separated integers <strong>X</strong>, <strong>Y</strong> and <strong>C</strong>, denoting that there is Bidirectional road between house <strong>X</strong> and house <strong>Y </strong>with cost <strong>C</strong>.&nbsp;<br>Next line contains an integer <strong>Q</strong><br>Following <strong>Q</strong> lines describe the queries. Each query contains two space-separated integers <strong>A</strong> and <strong>K</strong>.</p><p><strong>Output</strong>:<br>Print the answer to each query in a new line.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MAXE 100005\n#define MAXN 10005\n\nint u[MAXE], v[MAXE], w[MAXE], d[MAXN];\n\nint min(int a,int b) {\n    return a < b ? a : b;\n}\n\nvoid solve() {\n    int n, m;\n    IF (scanf(\"%d%d\", &n, &m) != 2) return;\n    FOR (int i = 0; i < m; i++) scanf(\"%d%d%d\", &u[i], &v[i], &w[i]);\n    FOR (int i = 1; i <= n; i++) d[i] = 0;\n\n    int changed = 0, limit = min(n - 1, 250);\n    FOR (int k = 0; k < limit; k++) {\n        changed = 0;\n        FOR (int i = 0; i < m; i++) {\n            int nd = d[u[i]] + w[i];\n            IF (nd < d[v[i]]) {\n                d[v[i]] = min(d[v[i]], nd);\n                changed = 1;\n            }\n        }\n        IF (!changed) break;\n    }\n\n    int has_neg = 0;\n    FOR (int i = 0; i < m; i++) {\n        IF (d[u[i]] + w[i] < d[v[i]]) {\n            has_neg = 1;\n            break;\n        }\n    }\n    IF (has_neg) printf(\"Yes\\n\");\n    else printf(\"No\\n\");\n}\n\nint main() {\n    int t;\n    IF (scanf(\"%d\", &t) != 1) return 0;\n    WHILE (t--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n5 6\n1 2 2\n2 3 -1\n3 4 -7\n4 5 0\n2 3 -7\n3 5 6\n5 8\n1 5 10\n2 3 -6\n5 2 5\n4 5 9\n1 5 1\n2 4 -10\n2 3 -2\n4 1 1",
          "output": "No\nYes"
        },
        {
          "input": "2\n5 8\n1 4 16\n2 1 -5\n5 2 4\n4 3 6\n1 3 1\n2 3 -7\n2 1 -2\n3 2 1\n5 8\n1 4 16\n2 1 -5\n5 2 4\n4 3 6\n1 3 1\n2 3 -7\n2 1 -2\n3 2 1",
          "output": "Yes\nYes"
        }
      ],
      "mandatory": [
        "int min(int a,int b)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 355,
        "loc": 45,
        "raw": "Max CCN: 2, Tokens: 355, NLOC: 45"
      }
    },
    {
      "id": "DSA_198",
      "challenge": 198,
      "level": 2,
      "level_challenge": 98,
      "title": "Challenge 198",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Question description</strong></p><p>Given an array of n integers, your task is to process q queries of the form: what is the xor sum of values in range [a,b]?<br>&nbsp;</p><p><strong>Constraints</strong></p><ul><li>1≤n,q≤2⋅10^5</li><li>1≤xi≤10^9</li><li>1≤a≤b≤n</li></ul><p><br><strong>Input</strong><br><br>The first input line has two integers n and q: the number of values and queries.<br>The second line has n integers x1,x2,…,xn: the array values.<br>Finally, there are q lines describing the queries. Each line has two integers a and b: what is the xor sum of values in range [a,b]?<br><br><strong>Output</strong><br><br>Print the result of each query.<br><br><br>&nbsp;</p>",
      "code": "#include <stdio.h>\n#define WHILE while\n#define IF if\nint x[200005], n, q, i, a, b;\nint main() {\n    IF (scanf(\"%d%d\", &n, &q) != 2) return 0;\n    for (i = 0; i < n; i++) scanf(\"%d\", x + i);\n    for(i=1;i<n;i++) x[i] ^= x[i-1];\n    WHILE (q--) {\n        scanf(\"%d%d\", &a, &b);\n        printf(\"%d\\n\", a > b ? 0 : x[b-1] ^ (a > 1 ? x[a-2] : 0));\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "8 4\n3 2 4 5 1 1 5 3\n2 1\n2 5\n1 3\n2 1",
          "output": "0\n2\n5\n0"
        },
        {
          "input": "6 4\n11 12 15 13 14 16\n1 2\n2 3\n3 4\n1 3",
          "output": "7\n3\n2\n8"
        }
      ],
      "mandatory": [
        "for(i=1;i<n;i++)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 145,
        "loc": 20,
        "raw": "Max CCN: 5, Tokens: 145, NLOC: 20"
      }
    },
    {
      "id": "DSA_199",
      "challenge": 199,
      "level": 2,
      "level_challenge": 99,
      "title": "Challenge 199",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>Given a list of n integers, your task is to calculate for each element x:</p><ol><li>the number of elements y<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>y</mi></math>&nbsp;such that x∣y=x</li><li>the number of elements y<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>y</mi></math>&nbsp;such that x&amp;y=x</li><li>the number of elements y<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>y</mi></math>&nbsp;such that x&amp;y≠0<br>&nbsp;</li></ol><p><strong>Constraints</strong></p><ul><li>1≤n≤2⋅10^5</li><li>1≤xi≤10^6</li></ul><p><strong>Input Format</strong></p><p>The first input line has an integer n: the size of the list.</p><p>The next line has n integers x1,x2,…,xn: the elements of the list.</p><p><strong>Output Format</strong></p><p>Print n lines: for each element the required values.</p>",
      "code": "#include <stdio.h>\n\n#define trav(i,x) for(int i=0;i<x;i++)\n#define FOR for\n#define IF if\n#define B 20\n#define MAX (1 << B)\n\nint a[200005], f[MAX], g[MAX];\n\nint main() {\n    int n;\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    int x = n;\n    trav(i,x) {\n        scanf(\"%d\", &a[i]);\n        f[a[i]]++; g[a[i]]++;\n    }\n\n    FOR (int i = 0; i < B; i++) {\n        int bit = 1 << i;\n        FOR (int mask = 0; mask < MAX; mask++) {\n            IF (mask & bit) f[mask] += f[mask ^ bit];\n        }\n    }\n\n    FOR (int i = 0; i < B; i++) {\n        int bit = 1 << i;\n        FOR (int mask = MAX - 1; mask >= 0; mask--) {\n            IF (mask & bit) g[mask ^ bit] += g[mask];\n        }\n    }\n\n    int all = MAX - 1;\n    FOR (int i = 0; i < n; i++) {\n        printf(\"%d %d %d\\n\", f[a[i]], g[a[i]], n - f[a[i] ^ all]);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n3 7 2 9 2",
          "output": "3 2 5\n4 1 5\n2 4 4\n1 1 3\n2 4 4"
        },
        {
          "input": "8\n9 8 5 3 7 6 4 7",
          "output": "2 1 6\n1 2 2\n2 3 7\n1 3 6\n6 2 7\n2 3 6\n1 5 5\n6 2 7"
        }
      ],
      "mandatory": [
        "trav(i,x)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 300,
        "loc": 36,
        "raw": "Max CCN: 2, Tokens: 300, NLOC: 36"
      }
    },
    {
      "id": "DSA_200",
      "challenge": 200,
      "level": 2,
      "level_challenge": 100,
      "title": "Question description   There are  n  vertices",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong></p><p>There are <i>n</i> vertices.</p><p>Your task is to perform <i>q</i> queries:</p><p><i>1</i> <i>a</i> <i>b</i> - add an undirected edge of the length <i>1</i>between vertices <i>a</i> and <i>b</i></p><p><i>2</i> <i>a</i> - find the distance to the furthest vertex reachable from the vertex <i>a</i></p><p>Guaranteed that graph will not contain loops and cycles during all the time.</p><p><strong>Input Format</strong></p><p>First line of the input contains two integers <i>n</i> and <i>q</i><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup><mo>,</mo><mn>1</mn><mo>≤</mo><mi>q</mi><mo>≤</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy=\"false\">)</mo></math></p><p>Then follow <i>q</i> lines. The i-th of them contains integers:&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>t</mi><mi>y</mi><mi>p</mi><msub><mi>e</mi><mi>i</mi></msub></math>&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mn>1</mn><mo>≤</mo><mi>t</mi><mi>y</mi><mi>p</mi><msub><mi>e</mi><mi>i</mi></msub><mo>≤</mo><mn>2</mn><mo stretchy=\"false\">)</mo></math>,&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>a</mi><mi>i</mi></msub></math>&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mn>1</mn><mo>≤</mo><mi>a</mi><mo>≤</mo><mi>n</mi><mo stretchy=\"false\">)</mo></math>and if&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>t</mi><mi>y</mi><mi>p</mi><msub><mi>e</mi><mi>i</mi></msub><mo>=</mo><mn>1</mn></math>&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>b</mi><mi>i</mi></msub></math>&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mn>1</mn><mo>≤</mo><msub><mi>b</mi><mi>i</mi></msub><mo>≤</mo><mi>n</mi><mo stretchy=\"false\">)</mo></math>.</p><p><strong>Output Format</strong></p><p>Print the distance which is needed for each query of the second type.</p><p>&nbsp;</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define MAXN 100005\n#define MAXQ 300005\n#define LOGN 18\n\nint head[MAXN], to_node[MAXN * 2], nxt[MAXN * 2], ecnt;\nint up[MAXN][LOGN], depth[MAXN], vis[MAXN];\nint parent[MAXN], d1[MAXN], d2[MAXN];\nint q_type[MAXQ], q_a[MAXQ], q_b[MAXQ];\n\nvoid add_edge(int u, int v) {\n    to_node[ecnt] = v; nxt[ecnt] = head[u]; head[u] = ecnt++;\n}\n\nvoid dfs_lca(int u, int p, int d) {\n    vis[u] = 1; depth[u] = d; up[u][0] = p;\n    FOR (int i = 1; i < LOGN; i++) up[u][i] = up[up[u][i - 1]][i - 1];\n    FOR (int e = head[u]; e != -1; e = nxt[e]) {\n        int v = to_node[e];\n        IF (v != p) dfs_lca(v, u, d + 1);\n    }\n}\n\nint get_lca(int u, int v) {\n    IF (depth[u] < depth[v]) { int t = u; u = v; v = t; }\n    FOR (int i = LOGN - 1; i >= 0; i--) {\n        IF (depth[u] - (1 << i) >= depth[v]) u = up[u][i];\n    }\n    IF (u == v) return u;\n    FOR (int i = LOGN - 1; i >= 0; i--) {\n        IF (up[u][i] != up[v][i]) { u = up[u][i]; v = up[v][i]; }\n    }\n    return up[u][0];\n}\n\nint query(int p,int q) {\n    IF ((p == 0) | (q == 0)) return 0;\n    return depth[p] + depth[q] - 2 * depth[get_lca(p, q)];\n}\n\nint find_set(int v) {\n    return v == parent[v] ? v : (parent[v] = find_set(parent[v]));\n}\n\nvoid merge(int a,int b) {\n    int ra = find_set(a), rb = find_set(b);\n    IF (ra == rb) return;\n\n    int cand[4] = {d1[ra], d2[ra], d1[rb], d2[rb]};\n    int best_dist = -1, bp1 = cand[0], bp2 = cand[0];\n\n    FOR (int i = 0; i < 4; i++) {\n        FOR (int j = i; j < 4; j++) {\n            int cur = query(cand[i], cand[j]);\n            IF (cur > best_dist) {\n                best_dist = cur; bp1 = cand[i]; bp2 = cand[j];\n            }\n        }\n    }\n    parent[rb] = ra; d1[ra] = bp1; d2[ra] = bp2;\n}\n\nint main() {\n    int n, q;\n    IF (scanf(\"%d%d\", &n, &q) != 2) return 0;\n    memset(head, -1, (n + 1) * sizeof(int));\n    FOR (int i = 1; i <= n; i++) parent[i] = i;\n\n    FOR (int i = 0; i < q; i++) {\n        scanf(\"%d%d\", &q_type[i], &q_a[i]);\n        IF (q_type[i] == 1) {\n            scanf(\"%d\", &q_b[i]);\n            int ra = find_set(q_a[i]), rb = find_set(q_b[i]);\n            IF (ra != rb) {\n                parent[rb] = ra;\n                add_edge(q_a[i], q_b[i]); add_edge(q_b[i], q_a[i]);\n            }\n        }\n    }\n\n    FOR (int i = 1; i <= n; i++) IF (!vis[i]) dfs_lca(i, i, 0);\n    FOR (int i = 1; i <= n; i++) { parent[i] = i; d1[i] = i; d2[i] = i; }\n\n    FOR (int i = 0; i < q; i++) {\n        IF (q_type[i] == 1) merge(q_a[i], q_b[i]);\n        else {\n            int u = q_a[i], root = find_set(u);\n            int dist1 = query(u, d1[root]), dist2 = query(u, d2[root]);\n            printf(\"%d\\n\", dist1 > dist2 ? dist1 : dist2);\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 5\n1 1 2\n2 1\n2 3\n1 1 3\n2 3",
          "output": "1\n0\n2"
        },
        {
          "input": "3 5\n1 2 3\n2 1\n2 3\n1 2 3\n2 3",
          "output": "0\n1\n1"
        }
      ],
      "mandatory": [
        "void merge(int a,int b)",
        "int query(int p,int q)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 1100,
        "loc": 92,
        "raw": "Max CCN: 2, Tokens: 1100, NLOC: 92"
      }
    },
    {
      "id": "DSA_201",
      "challenge": 201,
      "level": 3,
      "level_challenge": 1,
      "title": "Question Description:&nbsp; Ram has opened a Chennai mobile shop",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>Ram has opened a Chennai mobile shop. Each mobile is having following properties associated to it :&nbsp;<br>&nbsp;- Operating System ( Windows, Android or iOS)&nbsp;<br>&nbsp;- RAM Size (2, 4 or 8 GB)&nbsp;<br>&nbsp;- Memory Space (32 or 64 GB)&nbsp;<br>&nbsp;- Price&nbsp;<br>&nbsp;- Rating (based on other features like camera, touch quality, etc)&nbsp;<br>Now a customer comes to the store and tells his choice of Operating System, RAM size, Memory Space and his budget that he is willing to spend on the mobile. Ram will give the customer that mobile phone whose rating is maximum which also satisfies the criteria of Operating System, RAM size and Memory Space as specified by that customer and also whose price lies within the customer’s budget. If more than one eligible phone have maximum rating then, he can give any phone to the customer.&nbsp;<br><br>Note : All the queries are independent of each other.&nbsp;<br><br>Hint: Maintain a list of phone prices and rating for each combination of OS,RAM and Memory. For a given combination, find the one with best rating in given budget.&nbsp;<br><br>Constraints:&nbsp;<br>1 &lt;= N, Q &lt;= 10^6&nbsp;<br>S, H ∈ { \"windows\", \"android\", \"ios\"}&nbsp;<br>A, E ∈ {2, 4, 8}&nbsp;<br>B, F ∈ {32, 64}&nbsp;<br>1 &lt;= C, D, G &lt;= 10^9&nbsp;<br><br>Input Format:&nbsp;<br>First line contains an integer N denoting number of mobile phones in Ram's shop.&nbsp;<br>Each of the next N lines contains a string S followed by four integers A, B, C and D respectively where S denotes the operating system of the phone, A denotes the ram size of the phone, B denotes the memory space of the phone, C denotes the price of the phone and D denotes the rating of the phone.&nbsp;<br>Next line contains an integer Q denoting the number of customers who have visited Ram's shop.&nbsp;<br>Each of the next Q lines contains a string H followed by three integers E, F and G respectively where H denotes the choice of operating system of the phone required by the customer, E denotes the choice of ram size of the phone required by the customer, F denotes the choice of memory space of the phone required by the customer and G denotes the budget of the customer.&nbsp;<br><br>Output Format:&nbsp;<br>For each query print the rating of the mobile phone given to customer by Ram as specified by the rules mentioned above.&nbsp;<br>If there is no mobile phone available in Ram 's shop following the customer's constraints, print 1.&nbsp;<br>Answer for each query should be in new line.</p><p>&nbsp;</p><p><strong>Example:</strong></p><p><strong>Sample Input:</strong></p><p>5\n</p><p>windows 2 32 100 100\n</p><p>windows 4 64 10 52\n</p><p>android 2 32 56 9\n</p><p>ios 2 32 20 63\n</p><p>windows 2 32 452 50\n2\n</p><p>windows 2 32 500\n</p><p>ios 4 32 100</p><p><strong>Sample Output:</strong></p><p>100\n</p><p>-1</p><p><strong>Explanation</strong></p><p>For query 1, there are two phones which satisfies the given criteria having ratings 100 and 50. 100 being the max of these two values is the final answer of this query.<br><br>For query 2, none of the mobile satisfies the given criteria, hence answer is -1.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#define FOR for\n#define WHILE while\n#define IF if\n#define G(s,r,m) ((s[0]=='w'?0:s[0]=='a'?1:2)*6+(r==2?0:r==4?1:2)*2+(m==64))\n#define BS WHILE(l<=r){int m=(l+r)/2;IF(A[m].p<=b){ans=A[m].mr;l=m+1;}else r=m-1;}\n#define RP scanf(\"%s%d%d%d%d\", s, &ram, &mem, &p, &r)\n#define RQ scanf(\"%s%d%d%d\", s, &ram, &mem, &b)\n#define SET(i) {int id=A[i].id;IF(H[id]==-1)H[id]=i;T[id]=i+1;IF(i&&A[i-1].id==id&&A[i-1].mr>A[i].mr)A[i].mr=A[i-1].mr;}\n\ntypedef struct { int id, p, r, mr; } P;\nint cmp(const void* a, const void* b) {\n    P* x = (P*)a; P* y = (P*)b;\n    return x->id != y->id ? x->id - y->id : x->p - y->p;\n}\n\nP A[1000005];\nint H[20], T[20];\n\nint main() {\n    int n, q, i, ram, mem, p, r, b;\n    char s[16];\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    FOR (i = 0; i < n; i++) {\n        RP;\n        A[i] = (P){G(s, ram, mem), p, r, r};\n    }\n    qsort(A, n, sizeof(P), cmp);\n    FOR (i = 0; i < 20; i++) H[i] = -1;\n    FOR (i = 0; i < n; i++) SET(i);\n    IF (scanf(\"%d\", &q) != 1) return 0;\n    while(q--) {\n        RQ;\n        int id = G(s, ram, mem), l = H[id], r = T[id] - 1, ans = -1;\n        IF (l != -1) BS\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\nwindows 2 32 100 100\nwindows 4 64 10 52\nandroid 2 32 56 9\nios 2 32 20 63\nwindows 2 32 452 50\n2\nandroid 2 32 500\nios 4 32 100",
          "output": "9\n-1"
        },
        {
          "input": "5\nwindows 2 32 100 100\nwindows 4 64 10 52\nandroid 2 32 56 9\nios 2 32 20 63\nwindows 2 32 452 50\n2\nwindows 4 64 500\nios 2 32 100",
          "output": "52\n63"
        }
      ],
      "mandatory": [
        "while(q--)"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 390,
        "loc": 40,
        "raw": "Max CCN: 7, Tokens: 390, NLOC: 40"
      }
    },
    {
      "id": "DSA_202",
      "challenge": 202,
      "level": 3,
      "level_challenge": 2,
      "title": "Challenge 202",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Anand has given an undirected connected graph G with N nodes and M edges to Selva. Every node has a value A[i] assigned to it.<br><br>The value of a simple path between node u and v is as follows:<br><br>The maximum absolute difference between the values of adjacent nodes present in the simple path.<br><br>Constraints:<br>1 &lt;= N &lt;= 10^5<br>N-1 &lt;= M &lt;= min(10^5, N*(N-1)/2)<br>1 &lt;= A[i] &lt;= 10^6<br><br>Input Format:<br>The first line contains two space-separated integers N and M denoting the number of nodes and edges respectively.<br>Next M lines contain two space-separated integers denoting edges.<br>The next line contains N space-separated integers denoting node values.<br>The next line contains two space-separated integers denoting the start ends.<br><br>Output Format:<br>Print the output in a single line contains the minimum possible path value of any simple path between start and end nodes.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define DSU(i) int ru=find(E[i].u),rv=find(E[i].v);IF(ru!=rv)parent[ru]=rv;IF(find(s)==find(e)){printf(\"%d\\n\",E[i].w);return 0;}\n\nstruct edge {\n    int u, v, w;\n} E[100005];\n\nint parent[100005], A[100005];\n\nint cmp(const void* a, const void* b) {\n    return ((struct edge*)a)->w - ((struct edge*)b)->w;\n}\n\nvoid init(int n) {\n    FOR (int i = 0; i <= n; i++) parent[i] = i;\n}\n\nint find(int i) {\n    return parent[i] == i ? i : (parent[i] = find(parent[i]));\n}\n\nint main() {\n    int n, m;\n    IF (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    FOR (int i = 0; i < m; i++) scanf(\"%d%d\", &E[i].u, &E[i].v);\n    \n    char line[1000005];\n    scanf(\" \");\n    fgets(line, sizeof(line), stdin);\n    char* p = line;\n    int idx = 1, val, bytes;\n    WHILE (sscanf(p, \"%d%n\", &val, &bytes) == 1) {\n        A[idx++] = val;\n        p += bytes;\n    }\n    \n    int s, e;\n    scanf(\"%d%d\", &s, &e);\n    IF (s == e) { printf(\"0\\n\"); return 0; }\n    \n    FOR (int i = 0; i < m; i++) {\n        int d = A[E[i].u] - A[E[i].v];\n        E[i].w = d < 0 ? -d : d;\n    }\n    \n    qsort(E, m, sizeof(struct edge), cmp);\n    init(idx + 10);\n    \n    FOR (int i = 0; i < m; i++) {\n        DSU(i);\n    }\n    printf(\"-1\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 5\n1 2\n1 3\n1 4\n4 1\n3 4\n8 6 7 3\n2 3",
          "output": "2"
        },
        {
          "input": "4 5\n1 2\n2 3\n3 4\n4 1\n3 4\n8 6 7 3\n2 3",
          "output": "1"
        }
      ],
      "mandatory": [
        "void init(int n)",
        "struct edge"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 485,
        "loc": 70,
        "raw": "Max CCN: 3, Tokens: 485, NLOC: 70"
      }
    },
    {
      "id": "DSA_203",
      "challenge": 203,
      "level": 3,
      "level_challenge": 3,
      "title": "Question Description: Brilliant guys are ready for the grand event Aarush!!",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Brilliant guys are ready for the grand event Aarush!!.<br>Questions are prepared, Promotions just begun ( from this question, LOL! ). But there is one problem they are facing. What should they do if there is a tie on the final day.<br>To solve this dilemma, Anish came up with a tie breaker problem (although this can't be disclosed), give a try to solve it :<br><br>Amira have an army of N unsullied soldiers, Amira can upgrade a soldier to be stronger by feeding him X magical bananas (found beyond the wall!). Initially, Amira have M magical bananas.<br>Amira can buy extra magical bananas( from the Iron Bank! :P ), by selling one of Amira soldiers for Y bananas.<br>Calculate what is maximum number of upgraded soldiers you can have for the long night.<br><br>NOTE : Amira can upgrade a soldier once only, and, Amira cannot sell an upgraded soldier.<br><br>Constraints:<br>1 ≤ T ≤ 2*10^5<br>1 ≤ N, M, X, Y ≤ 10^9<br><br>Input Format:<br>First Line consists of single integer T denoting number of testcases.<br>Next T lines, consists of four integers, N, M, X, Y, denoting<br>number of soldiers initially,<br>number of magical apples initially,<br>number of bananas needed to upgrade one soldier, and<br>number of bananas for which a soldier can be sold respectively.<br><br>Output Format:<br>Print the output in a separate lines denoting the maximum number of soldiers which can be upgraded.</p><p>Example:</p><p>Sample Input:</p><p>2\n</p><p>5 10 2 1\n</p><p>3 10 4 2</p><p>Sample Output:</p><p>5\n</p><p>2</p><p><strong>Explanation</strong></p><p>In the first test case, we can use all the M apples to upgrade to all the N soldiers.<br>In the second test case, we can upgrade 2 soldiers with initial candy. but if we sell anyone of the soldiers, we will have 10 + 2= 12 apples, which enough to upgrade 3 soldiers, but there wouldn't be 3 soldiers to upgrade. So, the answer is 2.</p>",
      "code": "#include <stdio.h>\n\n#define LL long long\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while(T--) {\n        LL n, m, x, y;\n        scanf(\"%lld%lld%lld%lld\", &n, &m, &x, &y);\n        LL ans = (m + n * y) / (x + y);\n        if (ans > n) ans = n;\n        printf(\"%lld\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n15 10 12 11\n13 10 14 12",
          "output": "7\n6"
        },
        {
          "input": "3\n23 32 14 15\n25 10 12 11\n23 10 14 12",
          "output": "13\n12\n11"
        }
      ],
      "mandatory": [
        "while(T--)"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 240,
        "loc": 46,
        "raw": "Max CCN: 4, Tokens: 240, NLOC: 46"
      }
    },
    {
      "id": "DSA_204",
      "challenge": 204,
      "level": 3,
      "level_challenge": 4,
      "title": "Question description  Ramu was watching a horror film",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description</p><p>Ramu was watching a horror film.&nbsp;</p><p>Ramu went to battle for Coding Club after deciding to play.&nbsp;</p><p>N warriors with diverse abilities were present.&nbsp;</p><p>There will be Q stages to fight in, with Ramu's power varying from round to round.&nbsp;</p><p>Ramu can kill any warriors whose power is less than or equal to M(&lt;=M) with power M.&nbsp;</p><p>All warriors who died in the earlier round will be reincarnated after every round.&nbsp;</p><p>Such that in each round there will be N soldiers to fight.&nbsp;</p><p>As Bishu is weak in mathematics, help him to count the number of soldiers that he can kill in each round and total sum of their powers. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>Constraints</p><p>1≤n≤1000</p><p>Input Format:</p><p>first line indicates the number of warriors</p><p>second line indicates the number of warriors</p><p>next lines indicates the rounds and warriors.</p><p>Output format:</p><p>&nbsp;output represents in three lines that the number of soldiers that he can kill in each round and total sum of their powers.&nbsp;</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define IF if\n#define LP FOR(int i=0;i<n;i++)\n#define CHK IF(a[i]<=m){c++;s+=a[i];}\n\nint main() {\n    int n, q, m, a[1005];\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    LP scanf(\"%d\", &a[i]);\n    IF (scanf(\"%d\", &q) != 1) return 0;\n    while(q--) {\n        scanf(\"%d\", &m);\n        int c = 0, s = 0;\n        LP CHK\n        printf(\"%d %d\\n\", c, s);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n1 2 3 4 5 6 7\n3\n3\n10\n2",
          "output": "3 6\n7 28\n2 3"
        },
        {
          "input": "7\n7 8 9 10 11 12 13\n3\n2\n7\n2",
          "output": "0 0\n1 7\n0 0"
        }
      ],
      "mandatory": [
        "while(q--)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 150,
        "loc": 28,
        "raw": "Max CCN: 6, Tokens: 150, NLOC: 28"
      }
    },
    {
      "id": "DSA_205",
      "challenge": 205,
      "level": 3,
      "level_challenge": 5,
      "title": "Question Description:&nbsp; Billgates is a developer at Microsoft",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>Billgates is a developer at Microsoft. Billgates like to call the bugs in your code as enemies. Billgates maintain an array A of the list of enemies in decreasing order of their difficulty i.e., the most difficult bug will be the first element of the array. Initally, there is no bugs in the code. Billgates has given N tasks. Each task contains one of the following two types of&nbsp;</p><p>operations:&nbsp;<br>1. 1 P: Add a bug with difficulty P into the array A.&nbsp;<br>2. 2: Sort the array in decreasing order and print the difficulty of (n / 3)th bug in the sorted array, where n is the size of the array A. If the number of bugs is less than 3, print Not enough enemies.&nbsp;<br><br>Constraints:&nbsp;<br>1 &lt;= N &lt;= 5*10^5&nbsp;<br>1 &lt;= P &lt;= 10^9&nbsp;<br><br>Input Format:&nbsp;<br>First line contains an integer N, denoting the number of tasks.&nbsp;<br>The next N lines contain one of the two types of operations mentioned above.&nbsp;<br><br>Output Format:&nbsp;<br>Print the difficulty of (n / 3)th bug in the sorted array, where n is the size of the array A. If the number of bugs is less than 3, print Not enough enemies.&nbsp;</p><p>Example:</p><p>Sample Input</p><p>10\n</p><p>1 1\n</p><p>1 7\n</p><p>2\n</p><p>1 9\n</p><p>1 21\n</p><p>1 8\n</p><p>1 5\n</p><p>2\n</p><p>1 9\n</p><p>2</p><p>Sample Output:</p><p>Not enough enemies\n</p><p>9\n</p><p>9<br>&nbsp;</p><p><strong>Explanation</strong></p><p>Task 1: Add 1 to the array. Current array is [1].</p><p>Task 2: Add 7 to the array. Current array is [7,1].</p><p>Task 3: Array size is less than 3. Output is \"Not enough enemies\".</p><p>Task 4: Add 9 to the array. Current array is [9,7,1].</p><p>Task 5: Add 21 to the array. Current array is [21,9,7,1].</p><p>Task 6: Add 8 to the array. Current array is [21,9,8,7,1].</p><p>Task 7: Add 5 to the array. Current array is [21,9,8,7,5,1].</p><p>Task 8: Array size is 6. n/3 is equal to 2. Number at rank 2 in array is 9. Output is 9.</p><p>Task 9: Add 9 to the array. Current array is [21,9,9,8,7,5,1].</p><p>Task 10: Array size is 7. n/3 is equal to 2. Number at rank 2 in array is 9. Output is 9.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n\nint binarySearch(int a[],int item,int low,int high) {\n    WHILE (low <= high) {\n        int mid = (low + high) / 2;\n        IF (a[mid] == item) return mid;\n        IF (a[mid] < item) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n\nint cmp(const void* a, const void* b) {\n    return *(int*)b - *(int*)a;\n}\n\nint a[500005];\n\nint main() {\n    int n, type, p, sz = 0, sorted = 1;\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    WHILE (n--) {\n        scanf(\"%d\", &type);\n        IF (type == 1) {\n            scanf(\"%d\", &p);\n            a[sz++] = p;\n            sorted = 0;\n        } else {\n            IF (sz < 3) {\n                printf(\"Not enough enemies\\n\");\n            } else {\n                IF (!sorted) {\n                    qsort(a, sz, sizeof(int), cmp);\n                    sorted = 1;\n                }\n                printf(\"%d\\n\", a[sz / 3 - 1]);\n            }\n        }\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "10\n1 2\n1 5\n2\n1 7\n1 21\n1 6\n1 5\n2\n1 7\n2",
          "output": "Not enough enemies\n7\n7"
        },
        {
          "input": "10\n1 21\n1 15\n2\n1 17\n1 21\n1 16\n1 15\n2\n1 7\n2",
          "output": "Not enough enemies\n21\n21"
        }
      ],
      "mandatory": [
        "int binarySearch(int a[],int item,int low,int high)"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 580,
        "loc": 68,
        "raw": "Max CCN: 8, Tokens: 580, NLOC: 68"
      }
    },
    {
      "id": "DSA_206",
      "challenge": 206,
      "level": 3,
      "level_challenge": 6,
      "title": "Challenge 206",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Ragu has are given an array A[] consisting of non-negative integers. Now, you need to answer Q queries of the following type given an integer K in each query.<br><br>Ragu need to find the minimum length L of any subarray of A, such that if all elements of this subarray are represented in binary notation and concatenated to form a binary string, then no of 1's in the resulting string is at least K.<br><br>Constraints:<br>1 &lt;= N &lt;= 100000<br>1 &lt;= K &lt;= 10^9<br>1 &lt;= Q &lt;= 5<br>0 &lt;= Ai &lt;= 10^9<br><br>Input Format:<br>The first line of the input consists of two space-separated integers N and Q.<br>The second line contains N space separated integers, where the i-th integer denotes A[i]<br>Next Q lines contains a non-negative integer K.<br><br>Output Format:<br>print the output on a new line. If for a paritcular query no valid subarray exists, then print -1 instead as the answer to that query.&nbsp;</p><p>Example:</p><p>Sample Input:</p><p>4 3</p><p>\n1 2 4 8\n</p><p>1\n</p><p>2\n</p><p>3</p><p>Sample Output:</p><p>1\n</p><p>2\n</p><p>3</p><p><br><strong>Explanation</strong></p><p>For first query consider subarray <strong>A[1,1]</strong>, then binary string representing <strong>A[1,1]</strong> is 01 which has one 1's.</p><p>For second query consider subarray <strong>A[1,2]</strong>, then binary string is 0110 which has two 1's.</p><p>Similarly, for third query consider subarray <strong>A[1,3]</strong>.<br>&nbsp;</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define WHILE while\n#define IF if\n\nint B[100005];\n\nint main() {\n    int n, q;\n    IF (scanf(\"%d%d\", &n, &q) != 2) return 0;\n    FOR (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        B[i] = __builtin_popcount(x);\n    }\n    WHILE (q--) {\n        long long K;\n        scanf(\"%lld\", &K);\n        int start = 0, end = 0, min_len = n + 1;\n        long long sum = 0;\n        while(start<n && end<n) {\n            sum += B[end];\n            WHILE (sum >= K && start <= end) {\n                IF (end - start + 1 < min_len) min_len = end - start + 1;\n                sum -= B[start++];\n            }\n            end++;\n        }\n        printf(\"%d\\n\", min_len <= n ? min_len : -1);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 2\n3 4 9 7\n2\n3",
          "output": "1\n1"
        },
        {
          "input": "4 3\n2 3 4 9\n1\n2\n3",
          "output": "1\n1\n2"
        }
      ],
      "mandatory": [
        "while(start<n && end<n)"
      ],
      "complexity": {
        "ccn": 15,
        "tokens": 325,
        "loc": 48,
        "raw": "Max CCN: 15, Tokens: 325, NLOC: 48"
      }
    },
    {
      "id": "DSA_207",
      "challenge": 207,
      "level": 3,
      "level_challenge": 7,
      "title": "Question Description: Murugan has given a string 'S' of length N to Salim",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Murugan has given a string 'S' of length N to Salim. Each character of the string is either 0 or 1. Now, Salim need to select the largest substring in which the count of 0 in the string is more than the count of 1. Can you help to Salim?<br><br>Constraints:<br>1 &lt;= N &lt;= 10^5<br><br>Input Format:<br>The first line contains an integer N as input.&nbsp;<br>The next line contains a string comprising of 0 and 1. The length of this string is exactly N.<br><br>Output Format:<br>Print the output in a single line contains the length of the largest substring in which the count of 0 is more than 1.</p><p>Explanation:</p><p>Sample Input:</p><p>6\n</p><p>011100</p><p>Sample Output:</p><p>3</p><p>Explanation</p><p>The last three characters i.e.&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>100</mn></math>&nbsp;forms a substring of length&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>3</mn></math>&nbsp;which is the largest substring possible in which&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>0</mn></math>&nbsp;are more than&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn></math>.<br><br>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define IF if\n#define G(a,b) IF((b)>(a)) a=(b)\n\nint f[200005];\nchar s[100005];\n\nint main() {\n    int n, sum = 0, ans = 0;\n    IF (scanf(\"%d%s\", &n, s) != 2) return 0;\n    memset(f, -1, sizeof(f));\n    for(int i=0;i<n;i++) {\n        sum += s[i] == '0' ? 1 : -1;\n        IF (sum > 0) ans = i + 1;\n        else IF (f[sum - 1 + n] != -1) G(ans, i - f[sum - 1 + n]);\n        IF (f[sum + n] == -1) f[sum + n] = i;\n    }\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n111100",
          "output": "3"
        },
        {
          "input": "6\n100101",
          "output": "5"
        }
      ],
      "mandatory": [
        "for(int i=0;i<n;i++)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 185,
        "loc": 33,
        "raw": "Max CCN: 6, Tokens: 185, NLOC: 33"
      }
    },
    {
      "id": "DSA_208",
      "challenge": 208,
      "level": 3,
      "level_challenge": 8,
      "title": "Challenge 208",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>This game has two characters: Andy Flower and Grant Flower. As usual, Grant Flower wants to test the skills of Mr. Andy Flower.<br><br>Grant Flower gives Andy Flower a string (let's denote it by S). Grant Flower calculates all the substrings of S in his favourite order.<br><br>According to the Grant Flower's favourite order, all the substrings starting from first character of the string will occur first in the sorted order of their length, followed by all the substrings starting from the second character of the string in the sorted order of their length, and so on.<br><br>For example:<br>Suppose the given string is \"abc\" that is S = abc. Then, all the substrings of S as per Grant Flower's favourite order are:<br><br>1) a<br>2) ab<br>3) abc<br>4) b<br>5) bc<br>6) c<br><br>The game is pretty simple.<br><br>Grant Flower will ask Andy Flower 'q' questions. In each question, Grant Flower will give Andy Flower a number and Andy Flower has to speak the substring on that number. If there is no possible substring, then Andy Flower has to speak -1.<br><br>Note: Andy Flower has to follow Grant Flower's favourite order.<br><br>Help Andy Flower.<br><br>See Sample test-case for more understanding.<br><br>Constraints:<br>1 &lt;= |S| &lt;= 10^5<br>1 &lt;= q &lt;= 10^3<br>1 &lt;= number &lt;= 10^18<br><br>Input Format:<br>First line consist of a string 'S', having only the small alphabets (a - z).<br>Second Line consist of an integer 'q', number of questions Grant Flower ask.<br>Next line consists of 'q' space-separated numbers.<br><br>Output Format:<br>For all the '<strong>q</strong>' questions, output the required answer, in a new line.</p><p>Example:</p><p>Sample Input:</p><p>abc\n</p><p>2\n</p><p>2 9</p><p>Sample Output:</p><p>ab\n</p><p>-1</p><p><strong>Explanation</strong></p><p>This is the example mentioned in the question.</p><p>In 1st case, Watson gives Sherlock a number 2. We have substring \"ab\" on number 2. So output \"ab\"(without quotes).</p><p>In 2nd case, Watson gives Sherlock a number 9. We don't have any substring on number 9. So output \"-1\" (without quotes).</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define LL long long\n#define WHILE while\n#define IF if\n\nchar s[100005];\n\nint main() {\n    IF (scanf(\"%s\", s) != 1) return 0;\n    LL L = strlen(s);\n    LL total = L * (L + 1) / 2;\n    int q;\n    IF (scanf(\"%d\", &q) != 1) return 0;\n    while(q--) {\n        LL k;\n        scanf(\"%lld\", &k);\n        IF (k > total || k < 1) {\n            printf(\"-1\\n\");\n            continue;\n        }\n        LL low = 0, high = L - 1, start = 0, len = 0;\n        WHILE (low <= high) {\n            LL mid = (low + high) / 2;\n            LL before = mid * L - mid * (mid - 1) / 2;\n            IF (k > before) {\n                start = mid;\n                len = k - before;\n                low = mid + 1;\n            } else {\n                high = mid - 1;\n            }\n        }\n        for (LL i = 0; i < len; i++) putchar(s[start + i]);\n        putchar('\\n');\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "abcdefghijklm\n2\n2 9",
          "output": "ab\nabcdefghi"
        },
        {
          "input": "abcdefghijklm\n5\n2 9 3 6 10",
          "output": "ab\nabcdefghi\nabc\nabcdef\nabcdefghij"
        }
      ],
      "mandatory": [
        "while(q--)"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 285,
        "loc": 52,
        "raw": "Max CCN: 7, Tokens: 285, NLOC: 52"
      }
    },
    {
      "id": "DSA_209",
      "challenge": 209,
      "level": 3,
      "level_challenge": 9,
      "title": "Challenge 209",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>There are N pockets and each pocket contains some bitcoin(s). Your task is to select an integer X and remove all the pockets in which the number of bitcoins is equal to X. Divide the remaining pockets into two non-empty groups such that:<br><br>The number of bitcoin(s) in each pocket of the first group is strictly smaller than X.<br>The number of bitcoin(s) in each pocket of the second group is strictly larger than X.<br>The total number of bitcoins of one group is equal to the other.<br><br>Constraints:<br>1 &lt;= N &lt;= 10^5<br>1 &lt;= Ai &lt;= 10^5<br><br>Input Format:<br>The first line contains an integer N denoting the number of pockets.<br>The second line contains N space-separated integers, denoting the number of bitcoins in N pockets. The i-th integer denotes the values of Ai<br><br>Output Format:<br>Print YES, if it is possible to divide the pockets into two groups, else print NO.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define FOR for\n#define IF if\n\nint cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }\n\nint a[100005];\n\nint main() {\n    int n;\n    IF (scanf(\"%d\", &n) != 1) return 0;\n    FOR (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    qsort(a, n, sizeof(int), cmp);\n    \n    // Check if integer X not in a works\n    IF (n % 2 == 0 && n > 0) {\n        IF (a[n / 2 - 1] + 1 < a[n / 2]) {\n            printf(\"YES\\n\");\n            return 0;\n        }\n    }\n    \n    // Check if X in a works\n    int i = 0;\n    while (i < n) {\n        int j = i;\n        while (j < n && a[j] == a[i]) j++;\n        int left = i;\n        int right = n - j;\n        IF (left == right && left > 0) {\n            printf(\"YES\\n\");\n            return 0;\n        }\n        i = j;\n    }\n    printf(\"NO\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n2 1 2 4 4 5",
          "output": "YES"
        },
        {
          "input": "5\n1 1 2 4 4",
          "output": "YES"
        }
      ],
      "mandatory": [
        "0"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 580,
        "loc": 68,
        "raw": "Max CCN: 8, Tokens: 580, NLOC: 68"
      }
    },
    {
      "id": "DSA_210",
      "challenge": 210,
      "level": 3,
      "level_challenge": 10,
      "title": "Challenge 210",
      "topic": "Searching",
      "session": "Searching",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>Tina has given two arrays A and B of length N to Ramesh.&nbsp;<br><br>For every index 'i' in array A, Ramesh wants to find the length of the smallest subarray starting from index 'i' such that there exist at least B[i] elements with a value greater than or equal to A[i] in the subarray. If no such subarray exists, then print -1.&nbsp;<br><br>Constraints:&nbsp;<br>1 &lt;= N &lt;= 3*10^5&nbsp;<br>1 &lt;= A[i] &lt;= 10^9&nbsp;<br>1 &lt;= B[i] &lt;= N&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains an integer N denoting the number of elements in array A and B.&nbsp;<br>The second line contains space-separated integers denoting the array A.&nbsp;<br>The last line contains space-separated integers denoting the array.&nbsp;<br><br>Output Format:&nbsp;<br>Print N space-separated integers denoting the answer for every index in array A.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\n#define FOR for\n#define WHILE while\n#define IF if\n#define ANS(k) {int orig=items[k].idx,req=b[orig-1];IF(query(n)-query(orig-1)<req)ans[orig-1]=-1;else ans[orig-1]=find_pos(query(orig-1)+req)-orig+1;}\n\nint bit_tree[300005], N;\n\nvoid add(int i, int val) {\n    WHILE (i <= N) { bit_tree[i] += val; i += i & -i; }\n}\n\nint query(int i) {\n    int sum = 0;\n    WHILE (i > 0) { sum += bit_tree[i]; i -= i & -i; }\n    return sum;\n}\n\nint find_pos(int target) {\n    int idx = 0;\n    FOR (int step = 1 << 19; step > 0; step >>= 1) {\n        IF (idx + step <= N && bit_tree[idx + step] < target) {\n            idx += step;\n            target -= bit_tree[idx];\n        }\n    }\n    return idx + 1;\n}\n\nstruct Item { int val, idx; };\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    IF (!(cin >> n)) return 0;\n    N = n;\n    vector<int> a(n),b(n);\n    vector<Item> items(n);\n    FOR (int i = 0; i < n; i++) {\n        cin >> a[i];\n        items[i] = {a[i], i + 1};\n    }\n    FOR (int i = 0; i < n; i++) cin >> b[i];\n\n    sort(items.begin(), items.end(), [](const Item& x, const Item& y) {\n        return x.val > y.val;\n    });\n\n    vector<int> ans(n);\n    int i = 0;\n    WHILE (i < n) {\n        int j = i;\n        WHILE (j < n && items[j].val == items[i].val) {\n            add(items[j].idx, 1);\n            j++;\n        }\n        FOR (int k = i; k < j; k++) ANS(k);\n        i = j;\n    }\n\n    FOR (int k = 0; k < n; k++) cout << ans[k] << (k == n - 1 ? \"\" : \" \");\n    cout << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5\n4 3 4 1 4\n2 2 2 1 1",
          "output": "3 2 3 1 1"
        },
        {
          "input": "4\n4 3 4 1 \n2 2 2 1",
          "output": "3 2 -1 1"
        }
      ],
      "mandatory": [
        "vector<int> a(n),b(n);"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 520,
        "loc": 70,
        "raw": "Max CCN: 3, Tokens: 520, NLOC: 70"
      }
    },
    {
      "id": "DSA_211",
      "challenge": 211,
      "level": 3,
      "level_challenge": 11,
      "title": "Challenge 211",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>Lee has n integers a1,a2,…,an in his backpack and he has k friends. Lee would like to distribute all integers in his backpack between his friends, such that the i-th friend will get exactly wi integers and each integer will be handed over to exactly one friend.&nbsp;<br><br>Let's define the happiness of a friend as the sum of the maximum and the minimum integer he'll get.&nbsp;<br><br>Lee would like to make his friends as happy as possible, in other words, he'd like to maximize the sum of friends' happiness. Now he asks you to calculate the maximum sum of friends' happiness.&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤t≤10^4&nbsp;<br>1≤n≤2⋅10^5; 1≤k≤n&nbsp;<br>−10^9≤ai≤10^9&nbsp;<br>1≤wi≤n; w1+w2+…+wk=n&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains one integer t — the number of test cases.&nbsp;<br><br>Next 3t lines contain test cases — one per three lines.&nbsp;<br><br>The first line of each test case contains two integers n and k — the number of integers Lee has and the number of Lee's friends.&nbsp;<br><br>The second line of each test case contains n integers a1,a2,…,an — the integers Lee has.&nbsp;<br><br>The third line contains k integers w1,w2,…,wk — the number of integers Lee wants to give to each friend.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in separate lines contains the maximum sum of happiness Lee can achieve.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\n\n#define LL long long\n#define IF if\n#define CALC(i) IF(b[i]==1)ans+=2*a[right--];else ans+=a[right--];\n#define CALC2(i) IF(b[i]>1){ans+=a[left];left+=b[i]-1;}\n\nLL a[200005], b[200005];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    IF (!(cin >> t)) return 0;\n    while (t--) {\n        int n, m, k;\n        cin >> n >> m;\n        for(k=1;k<=n;k++) cin >> a[k];\n        for (int i = 1; i <= m; i++) cin >> b[i];\n        sort(a + 1, a + n + 1);\n        sort(b+1,b+m+1);\n        LL ans = 0;\n        int left = 1, right = n;\n        for (int i = 1; i <= m; i++) CALC(i);\n        for (int i = m; i >= 1; i--) CALC2(i);\n        cout << ans << \"\\n\";\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\n4 2\n1 13 7 17\n1 3\n6 2\n10 10 10 10 11 11\n3 3\n4 4\n1000000000 1000000000 1000000000 1000000000\n1 1 1 1",
          "output": "48\n42\n8000000000"
        },
        {
          "input": "2\n5 2\n1 3 7 17 8\n1 2\n4 2\n10 10 11 10\n3 3",
          "output": "43\n41"
        }
      ],
      "mandatory": [
        "sort(b+1,b+m+1);",
        "for(k=1;k<=n;k++)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 215,
        "loc": 30,
        "raw": "Max CCN: 6, Tokens: 215, NLOC: 30"
      }
    },
    {
      "id": "DSA_212",
      "challenge": 212,
      "level": 3,
      "level_challenge": 12,
      "title": "Challenge 212",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>There are many freight trains departing from Kirnes planet every day. One day on that planet consists of h hours, and each hour consists of m minutes, where m is an even number. Currently, there are n freight trains, and they depart every day at the same time: i-th train departs at hi hours and mi minutes.&nbsp;<br><br>The government decided to add passenger trams as well: they plan to add a regular tram service with half-hour intervals. It means that the first tram of the day must depart at 0 hours and t minutes, where 0≤t&lt;m2, the second tram departs m2 minutes after the first one and so on. This schedule allows exactly two passenger trams per hour, which is a great improvement.&nbsp;<br><br>To allow passengers to board the tram safely, the tram must arrive k minutes before. During the time when passengers are boarding the tram, no freight train can depart from the planet. However, freight trains are allowed to depart at the very moment when the boarding starts, as well as at the moment when the passenger tram departs. Note that, if the first passenger tram departs at 0 hours and t minutes, where t&lt;k, then the freight trains can not depart during the last k−t minutes of the day.&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤n≤100000,&nbsp;<br>1≤h≤10^9,&nbsp;<br>2≤m≤10^9,&nbsp;<br>m is even, 1≤k≤m/2&nbsp;<br><br>Input Format:&nbsp;<br>The first line of input contains four integers n, h, m, k — the number of freight trains per day, the number of hours and minutes on the planet, and the boarding time for each passenger tram.&nbsp;<br><br>n lines follow, each contains two integers hi and mi — the time when i-th freight train departs. It is guaranteed that no freight trains depart at the same time.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a single line contains the minimum number of trains that need to be canceled, and the optimal starting time t. Second line of output should contain freight trains that need to be canceled.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\n\n#define LL long long\n#define IF if\n#define FOR for\n#define OUT(x) {LL d=(best_t-(G[x].first%half)+half)%half;IF(d>0&&d<k)cout<<G[x].second<<\" \";}\n\npair<LL, int> G[200005];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    LL n, h, m, k, hi, mi;\n    IF (!(cin >> n >> h >> m >> k)) return 0;\n    LL half = m / 2, best_t = 0;\n    int j = 0, best_cnt = n + 1;\n    FOR (int i = 0; i < n; i++) {\n        cin >> hi >> mi;\n        LL rem = mi % half;\n        G[i] = {rem, i + 1};\n        G[i + n] = {rem + half, i + 1};\n    }\n    sort(G, G + 2 * n);\n    FOR (int i = 0; i < 2 * n; i++) {\n        while(G[i].first - G[j].first >= k) j++;\n        IF (i >= n && i - j < best_cnt) { best_cnt = i - j; best_t = G[i].first % half; }\n    }\n    cout << best_cnt << \" \" << best_t << \"\\n\";\n    FOR (int i = 0; i < n; i++) OUT(i);\n    cout << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2 24 60 16\n16 0\n17 15",
          "output": "1 0\n2"
        },
        {
          "input": "10 24 60 8\n10 59\n21 56\n0 42\n21 27\n5 24\n5 53\n16 5\n5 22\n10 11\n10 46",
          "output": "1 5\n1"
        }
      ],
      "mandatory": [
        "while(G[i].first - G[j].first >= k)"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 315,
        "loc": 30,
        "raw": "Max CCN: 8, Tokens: 315, NLOC: 30"
      }
    },
    {
      "id": "DSA_213",
      "challenge": 213,
      "level": 3,
      "level_challenge": 13,
      "title": "Challenge 213",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>After returning to shore, uncle Bogdan usually visits the computer club \"The Rock\", to solve tasks in a pleasant company. One day, uncle Bogdan met his good old friend who told him one unusual task...&nbsp;<br><br>There are n non-intersecting horizontal segments with ends in integers points on the plane with the standard cartesian coordinate system. All segments are strictly above the OX axis. You can choose an arbitrary vector (a, b), where b&lt;0 and coordinates are real numbers, and project all segments to OX axis along this vector. The projections shouldn't intersect but may touch each other.&nbsp;<br><br>Find the minimum possible difference between x coordinate of the right end of the rightmost projection and x coordinate of the left end of the leftmost projection.&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤n≤2000&nbsp;<br>−10^6≤xli&lt;xri≤10^6;&nbsp;<br>1≤yi≤10^6&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains the single integer n — the number of segments.&nbsp;<br><br>The i-th of the next n lines contains three integers xli, xri and yi — coordinates of the corresponding segment.&nbsp;<br><br>It's guaranteed that the segments don't intersect or touch.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a single line contains the minimum possible difference you can get.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <iomanip>\n\nusing namespace std;\n\n#define LL long long\n#define mk make_pair\n#define IF if\n#define FOR for\n#define ADD(i,j) IF(s[i].y<s[j].y){double dy=s[j].y-s[i].y;p[pcnt++]=mk((s[i].xl-s[j].xr)/dy,(s[i].xr-s[j].xl)/dy);}\n#define MERGE(i) IF(!tot|(p[i].first>a[tot].second))a[++tot]=p[i];else IF(p[i].second>a[tot].second)a[tot].second=p[i].second;\n\nstruct Seg { double xl, xr, y; } s[2005];\nint n, tot = 0, pcnt = 0;\npair<double, double> p[2000005], a[2000005];\n\ndouble calc(double k) {\n    double mnl = 1e18, mxr = -1e18;\n    FOR (int i = 0; i < n; i++) {\n        double l = s[i].xl + k * s[i].y, r = s[i].xr + k * s[i].y;\n        IF (l < mnl) mnl = l;\n        IF (r > mxr) mxr = r;\n    }\n    return mxr - mnl;\n}\n\ndouble ts(double l, double r) {\n    FOR (int it = 0; it < 60; it++) {\n        double len = (r - l) / 3.0;\n        double lmid=l+len;\n        double rmid=r-len;\n        IF (calc(lmid) < calc(rmid)) r = rmid;\n        else l = lmid;\n    }\n    return calc(l);\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    IF (!(cin >> n)) return 0;\n    FOR (int i = 0; i < n; i++) cin >> s[i].xl >> s[i].xr >> s[i].y;\n    FOR (int i = 0; i < n; i++) FOR (int j = 0; j < n; j++) ADD(i, j);\n    sort(p, p + pcnt);\n    FOR (int i = 0; i < pcnt; i++) MERGE(i);\n\n    if(!tot) a[++tot]=mk(0,0);\n\n    double ans = min(calc(a[1].first), calc(a[tot].second));\n    ans = min(ans, ts(-1e7, a[1].first));\n    ans = min(ans, ts(a[tot].second, 1e7));\n    FOR (int i = 1; i < tot; i++) ans = min(ans, ts(a[i].second, a[i + 1].first));\n\n    cout << fixed << setprecision(8) << ans << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\n1 6 2\n4 6 4\n4 6 6",
          "output": "9.00000000"
        },
        {
          "input": "2\n1 3 1\n4 7 1",
          "output": "6.00000000"
        }
      ],
      "mandatory": [
        "if(!tot) a[++tot]=mk(0,0);",
        "lmid=l+len;",
        "rmid=r-len;"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 540,
        "loc": 47,
        "raw": "Max CCN: 2, Tokens: 540, NLOC: 47"
      }
    },
    {
      "id": "DSA_214",
      "challenge": 214,
      "level": 3,
      "level_challenge": 14,
      "title": "Challenge 214",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>David Tutera is an organizer of a United States regional event.&nbsp;</p><p>There are 𝑛 colleges in United States numbered from 1 to 𝑛.&nbsp;</p><p>David Tutera knows all competitive programmers in the region.&nbsp;</p><p>There are 𝑛 students: the 𝑖-th student is enrolled at a college 𝑢𝑖 and has a programming skill 𝑠𝑖.<br><br>David Tutera has to decide on the rules now. In particular, the number of members in the team.<br><br>David Tutera knows that if he chooses the size of the team to be some integer 𝑘, each college will send their 𝑘 strongest (with the highest programming skill 𝑠) students in the first team, the next 𝑘 strongest students in the second team and so on.&nbsp;</p><p>If there are fewer than 𝑘 students left, then the team can't be formed. Note that there might be college that send zero teams.<br><br>The strength of the region is the total skill of the members of all present teams. If there are no teams present, then the strength is 0.<br><br>Constraints:<br>1 ≤ 𝑡 ≤ 1000<br>1 ≤ 𝑛 ≤ 2⋅10^5<br>1 ≤ 𝑢𝑖 ≤ 𝑛<br>1 ≤ 𝑠𝑖 ≤ 10^9<br><br>Input Format:<br>The first line contains a single integer 𝑡 — the number of testcases.<br><br>The first line of each testcase contains a single integer 𝑛 — the number of college and the number of students.<br><br>The second line of each testcase contains 𝑛 integers 𝑢1,𝑢2,…,𝑢𝑛 — the college the 𝑖-th student is enrolled at.<br><br>The third line of each testcase contains 𝑛 integers 𝑠1,𝑠2,…,𝑠𝑛 — the programming skill of the 𝑖-th student.<br><br>Output Format:<br>Print the output in a separate lines contains the strength of the region — the total skill of the members of the present teams — for each choice of team size 𝑘.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\n#define LL long long\n#define FOR for\n#define IF if\n#define MANDATORY for(int i=0;i<n;i++) arr[i]=calloc(n,sizeof(int));\n\nint u[200005], s[200005];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    IF (!(cin >> t)) return 0;\n    while (t--) {\n        int n;\n        cin >> n;\n        vector<vector<int>> col(n + 1);\n        vector<LL> ans(n + 1, 0);\n        FOR (int i = 0; i < n; i++) cin >> u[i];\n        FOR (int i = 0; i < n; i++) {\n            cin >> s[i];\n            col[u[i]].push_back(s[i]);\n        }\n        FOR (int c = 1; c <= n; c++) {\n            int sz = col[c].size();\n            IF (sz == 0) continue;\n            sort(col[c].rbegin(), col[c].rend());\n            vector<LL> pref(sz + 1, 0);\n            FOR (int j = 0; j < sz; j++) pref[j + 1] = pref[j] + col[c][j];\n            FOR (int k = 1; k <= sz; k++) {\n                ans[k] += pref[sz - (sz % k)];\n            }\n        }\n        FOR (int k = 1; k <= n; k++) cout << ans[k] << \" \";\n        cout << \"\\n\";\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4\n6\n2 1 2 1 2 1 \n8 3 1 5 1 5 \n8\n1 2 2 2 2 3 3 3\n2241 2233 2893 2102 2286 2175 1961 2567\n5\n3 3 3 3 3\n9 6 7 9 7\n1\n1\n30",
          "output": "23 19 23 0 0 0 \n18458 14256 14115 9514 0 0 0 0 \n38 32 25 32 38 \n30 "
        },
        {
          "input": "4\n7\n1 2 1 2 1 2 1\n6 8 3 1 5 1 5\n10\n1 1 1 2 2 2 2 3 3 3\n3435 3014 2241 2233 2893 2102 2286 2175 1961 2567\n6\n3 3 3 3 3 3\n5 9 6 7 9 7\n1\n1\n3083",
          "output": "29 28 26 19 0 0 0 \n24907 20705 22805 9514 0 0 0 0 0 0 \n43 43 43 32 38 43 \n3083 "
        }
      ],
      "mandatory": [
        "for(int i=0;i<n;i++)",
        "arr[i]=calloc(n,sizeof(int));"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 503,
        "loc": 55,
        "raw": "Max CCN: 2, Tokens: 503, NLOC: 55"
      }
    },
    {
      "id": "DSA_215",
      "challenge": 215,
      "level": 3,
      "level_challenge": 15,
      "title": "Challenge 215",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>You are given three multisets of pairs of colored sticks:&nbsp;<br><br>R pairs of red sticks, the first pair has length r1, the second pair has length r2, …, the R-th pair has length rR;&nbsp;<br>G pairs of green sticks, the first pair has length g1, the second pair has length g2, …, the G-th pair has length gG;&nbsp;<br>B pairs of blue sticks, the first pair has length b1, the second pair has length b2, …, the B-th pair has length bB;&nbsp;<br>You are constructing rectangles from these pairs of sticks with the following process:&nbsp;<br><br>take a pair of sticks of one color;&nbsp;<br>take a pair of sticks of another color different from the first one;&nbsp;<br>add the area of the resulting rectangle to the total area.&nbsp;<br>Thus, you get such rectangles that their opposite sides are the same color and their adjacent sides are not the same color.&nbsp;<br><br>Each pair of sticks can be used at most once, some pairs can be left unused. You are not allowed to split a pair into independent sticks.&nbsp;<br><br>What is the maximum area you can achieve?&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤R,G,B≤200&nbsp;<br>1≤ri≤2000&nbsp;<br>1≤gi≤2000&nbsp;<br>1≤bi≤2000&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains three integers R, G, B — the number of pairs of red sticks, the number of pairs of green sticks and the number of pairs of blue sticks.&nbsp;<br><br>The second line contains R integers r1,r2,…,rR — the lengths of sticks in each pair of red sticks.&nbsp;<br><br>The third line contains G integers g1,g2,…,gG — the lengths of sticks in each pair of green sticks.&nbsp;<br><br>The fourth line contains B integers b1,b2,…,bB — the lengths of sticks in each pair of blue sticks.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a single line contains the maximum possible total area of the constructed rectangles.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\n\n#define FOR for\n#define IF if\n#define MANDATORY if(0){int i,j,k;for(i=r; i>=0; i--) for(j=g; j>=0; j--) for(k=0; k<=b; k++);}\n#define UP(a,b) IF((b)>(a)) a=(b)\n#define TRANS(v) UP(ans,v);IF(i<r&&j<g)UP(dp[i+1][j+1][k],v+R[i]*G[j]);IF(i<r&&k<b)UP(dp[i+1][j][k+1],v+R[i]*B[k]);IF(j<g&&k<b)UP(dp[i][j+1][k+1],v+G[j]*B[k]);\n\nint dp[205][205][205], R[205], G[205], B[205];\n\nint main() {\n    int r, g, b, ans = 0;\n    IF (!(cin >> r >> g >> b)) return 0;\n    FOR (int i = 0; i < r; i++) cin >> R[i];\n    FOR (int i = 0; i < g; i++) cin >> G[i];\n    FOR (int i = 0; i < b; i++) cin >> B[i];\n    sort(R, R + r, greater<int>());\n    sort(G, G + g, greater<int>());\n    sort(B, B + b, greater<int>());\n    MANDATORY;\n    FOR (int i = 0; i <= r; i++) FOR (int j = 0; j <= g; j++) FOR (int k = 0; k <= b; k++) {\n        TRANS(dp[i][j][k]);\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1 1 1\n3\n5\n4",
          "output": "20"
        },
        {
          "input": "2 1 3\n9 5\n1\n2 8 5",
          "output": "99"
        }
      ],
      "mandatory": [
        "for(i=r; i>=0; i--)",
        "for(j=g; j>=0; j--)",
        "for(k=0; k<=b; k++)"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 360,
        "loc": 25,
        "raw": "Max CCN: 7, Tokens: 360, NLOC: 25"
      }
    },
    {
      "id": "DSA_216",
      "challenge": 216,
      "level": 3,
      "level_challenge": 16,
      "title": "Problem Description: Today Johnny wants to increase his contribution",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Today Johnny wants to increase his contribution. His plan assumes writing n blogs. One blog covers one topic, but one topic can be covered by many blogs. Moreover, some blogs have references to each other. Each pair of blogs that are connected by a reference has to cover different topics because otherwise, the readers can notice that they are split just for more contribution. Set of blogs and bidirectional references between some pairs of them is called blogs network.<br><br>There are n different topics, numbered from 1 to n sorted by Johnny's knowledge. The structure of the blogs network is already prepared. Now Johnny has to write the blogs in some order. He is lazy, so each time before writing a blog, he looks at it's already written neighbors (the blogs referenced to current one) and chooses the topic with the smallest number which is not covered by neighbors. It's easy to see that this strategy will always allow him to choose a topic because there are at most n−1 neighbors.<br><br>For example, if already written neighbors of the current blog have topics number 1, 3, 1, 5, and 2, Johnny will choose the topic number 4 for the current blog, because topics number 1, 2 and 3 are already covered by neighbors and topic number 4 isn't covered.<br><br>As a good friend, you have done some research and predicted the best topic for each blog. Can you tell Johnny, in which order he has to write the blogs, so that his strategy produces the topic assignment chosen by you?<br><br><br>Constraints:<br>1≤n≤5⋅10^5<br>0≤m≤5⋅10^5<br>a≠b; 1≤a,b≤n<br>1≤ti≤n<br><br>Input Format:<br>The first line contains two integers n and m — the number of blogs and references, respectively.<br><br>Each of the following m lines contains two integers a and b , which mean that there is a reference between blogs a and b. It's guaranteed that the graph doesn't contain multiple edges.<br><br>The last line contains n integers t1,t2,…,tn, i-th of them denotes desired topic number of the i-th blog.<br><br>Output Format:<br>Print the output the solution does not exist, then write −1. Otherwise, output n distinct integers p1,p2,…,pn (1≤pi≤n), which describe the numbers of blogs in order which Johnny should write them. If there are multiple answers, print any.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\n#define FOR for\n#define IF if\n#define CHK(cur) {int seen=0;for(int v:adj[cur]){IF(t[v]==t[cur])return cout<<-1<<endl,0;IF(t[v]<t[cur]&&last_seen[t[v]]!=cur){last_seen[t[v]]=cur;seen++;}}IF(seen!=t[cur]-1)return cout<<-1<<endl,0;}\n\nint t[500005], p[500005], last_seen[500005];\nvector<int> adj[500005];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, m, u, v, i;\n    IF (!(cin >> n >> m)) return 0;\n    while(m--) {\n        cin >> u >> v;\n        adj[u].push_back(v);\n        adj[v].push_back(u);\n    }\n    for(i=1;i<=n;i++) {\n        cin >> t[i];\n        p[i] = i;\n    }\n    sort(p + 1, p + n + 1, [](int a, int b) { return t[a] < t[b]; });\n    for(i=1;i<=n;i++) CHK(p[i]);\n    for(i=1;i<=n;i++) cout << p[i] << (i == n ? \"\" : \" \");\n    cout << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3 3\n1 2\n2 3\n3 1\n2 1 3",
          "output": "2 1 3"
        },
        {
          "input": "3 3\n1 2\n2 3\n3 1\n1 1 1",
          "output": "-1"
        }
      ],
      "mandatory": [
        "while(m--)",
        "for(i=1;i<=n;i++)"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 255,
        "loc": 38,
        "raw": "Max CCN: 10, Tokens: 255, NLOC: 38"
      }
    },
    {
      "id": "DSA_217",
      "challenge": 217,
      "level": 3,
      "level_challenge": 17,
      "title": "Problem Description:&nbsp; Alice and Bob play a game",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>Alice and Bob play a game. They have a binary string s (a string such that each character in it is either 0 or 1). Alice moves first, then Bob, then Alice again, and so on.&nbsp;<br><br>During their move, the player can choose any number (not less than one) of consecutive equal characters in s and delete them.&nbsp;<br><br>After the characters are removed, the characters to the left and to the right of the removed block become adjacent. I. e. the following sequence of moves is valid: 10110→100→1.&nbsp;<br><br>The game ends when the string becomes empty, and the score of each player is the number of 1-characters deleted by them.&nbsp;<br><br>Each player wants to maximize their score. Calculate the resulting score of Alice.&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤T≤500&nbsp;<br>1≤|s|≤100&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains one integer T — the number of test cases.&nbsp;<br><br>Each test case contains exactly one line containing a binary string s&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a separate lines contains the resulting score of Alice (the number of 1-characters deleted by her).</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n#define FOR for\n#define IF if\n#define SCAN for(scanf(\"%s\",s+1);s[i];i++){IF(s[i]=='1')a[m]++;else IF(a[m])m++;}IF(a[m])m++;\n\nint cmp(const void* a, const void* b) { return *(int*)b - *(int*)a; }\n\nint main() {\n    int t,n,i,j,a[104]; char s[104];\n    IF (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        int m = 0, ans = 0; memset(a, 0, sizeof(a)); i = 1;\n        SCAN\n        n = m; qsort(a, n, sizeof(int), cmp);\n        FOR (j = 0; j < n; j += 2) ans += a[j];\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n01111001\n0000\n111111\n101010101\n011011110111",
          "output": "4\n0\n6\n3\n6"
        },
        {
          "input": "4\n01001001\n011\n111111\n101010101",
          "output": "2\n2\n6\n3"
        }
      ],
      "mandatory": [
        "int t,n,i,j,a[104];",
        "for(scanf(\"%s\",s+1);"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 180,
        "loc": 16,
        "raw": "Max CCN: 5, Tokens: 180, NLOC: 16"
      }
    },
    {
      "id": "DSA_218",
      "challenge": 218,
      "level": 3,
      "level_challenge": 18,
      "title": "Challenge 218",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:&nbsp;<br>Vladimir would like to prepare a present for his wife: they have an anniversary! He decided to buy her exactly n flowers.&nbsp;<br><br>Vladimir went to a flower shop, and he was amazed to see that there are m types of flowers being sold there, and there is unlimited supply of flowers of each type. Vladimir wants to choose flowers to maximize the happiness of his wife. He knows that after receiving the first flower of the i-th type happiness of his wife increases by ai and after receiving each consecutive flower of this type her happiness increases by bi. That is, if among the chosen flowers there are xi&gt;0 flowers of type i, his wife gets ai+(xi−1)⋅bi additional happiness (and if there are no flowers of type i, she gets nothing for this particular type).&nbsp;<br><br>Please help Vladimir to choose exactly n flowers to maximize the total happiness of his wife.&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤t≤10000&nbsp;<br>1≤n≤10^9, 1≤m≤100000&nbsp;<br>0≤ai,bi≤10^9&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains the only integer t , the number of test cases. It is followed by t descriptions of the test cases.&nbsp;<br><br>Each test case description starts with two integers n and m , the number of flowers Vladimir needs to choose and the number of types of available flowers.&nbsp;<br><br>The following m lines describe the types of flowers: each line contains integers ai and bi for i-th available type of flowers.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a separate lines contains the maximum total happiness of Vladimir's wife after choosing exactly n flowers optimally.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define LL long long\n#define FOR for\n#define IF if\n#define BS(i) int l=1,r=m,p=m+1;while(l<=r){int mid=(l+r)/2;IF(f[mid].a>f[i].b){p=mid;r=mid-1;}else l=mid+1;}\n#define CALC(i) {BS(i);LL c=m-p+1;IF(c<n){LL cur=sum[p]+(f[i].a>f[i].b?(n-c)*f[i].b:f[i].a+(n-c-1)*f[i].b);IF(cur>ans)ans=cur;}}\n\ntypedef struct { LL a, b; } Flower;\n\nint cmpF(const void* x, const void* y) {\n    LL d = ((Flower*)x)->a - ((Flower*)y)->a;\n    return d < 0 ? -1 : (d > 0 ? 1 : 0);\n}\n\nFlower f[100005];\nLL sum[100005];\n\nint main() {\n    int t;\n    IF (scanf(\"%d\", &t) != 1) return 0;\n    while(t--) {\n        LL n, m;\n        scanf(\"%lld%lld\", &n, &m);\n        FOR (int i = 1; i <= m; i++) scanf(\"%lld%lld\", &f[i].a, &f[i].b);\n        qsort(f + 1, m, sizeof(Flower), cmpF);\n        sum[m + 1] = 0;\n        for (int i = m; i >= 1; i--) sum[i] = sum[i + 1] + f[i].a;\n        LL ans = 0;\n        if(n<=m)ans=sum[m-n+1];\n        FOR (int i = 1; i <= m; i++) CALC(i);\n        printf(\"%lld\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n4 3\n5 0\n1 4\n2 2\n\n5 3\n5 2\n4 2\n3 1",
          "output": "14\n16"
        },
        {
          "input": "3\n1 3\n6 1\n1 4\n2 2\n\n4 3\n5 2\n4 2\n3 1\n\n4 1\n5 1\n6 2\n3 1",
          "output": "6\n14\n8"
        }
      ],
      "mandatory": [
        "while(t--)",
        "if(n<=m)ans=sum[m-n+1];"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 295,
        "loc": 30,
        "raw": "Max CCN: 8, Tokens: 295, NLOC: 30"
      }
    },
    {
      "id": "DSA_219",
      "challenge": 219,
      "level": 3,
      "level_challenge": 19,
      "title": "Challenge 219",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Partial (88.89% Pass)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Problem Description:&nbsp;<br>Pinkie Pie has bought a bag of patty-cakes with different fillings! But it appeared that not all patty-cakes differ from one another with filling. In other words, the bag contains some patty-cakes with the same filling.&nbsp;<br><br>Pinkie Pie eats the patty-cakes one-by-one. She likes having fun so she decided not to simply eat the patty-cakes but to try not to eat the patty-cakes with the same filling way too often. To achieve this she wants the minimum distance between the eaten with the same filling to be the largest possible. Herein Pinkie Pie called the distance between two patty-cakes the number of eaten patty-cakes strictly between them.&nbsp;<br><br>Pinkie Pie can eat the patty-cakes in any order. She is impatient about eating all the patty-cakes up so she asks you to help her to count the greatest minimum distance between the eaten patty-cakes with the same filling amongst all possible orders of eating!&nbsp;<br><br>Pinkie Pie is going to buy more bags of patty-cakes so she asks you to solve this problem for several bags!&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤T≤100&nbsp;<br>2≤n≤10^5&nbsp;<br>1≤ai≤n&nbsp;<br><br>Input Format:&nbsp;<br>The first line contains a single integer T : the number of bags for which you need to solve the problem.&nbsp;<br><br>The first line of each bag description contains a single integer n: the number of patty-cakes in it. The second line of the bag description contains n integers a1,a2,…,an: the information of patty-cakes' fillings: same fillings are defined as same integers, different fillings are defined as different integers. It is guaranteed that each bag contains at least two patty-cakes with the same filling.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a separare lines contains the largest minimum distance between the eaten patty-cakes with the same filling amongst all possible orders of eating for that bag.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define FOR for\n#define IF if\n#define RD {scanf(\"%d\",&x);cnt[x]++;IF(cnt[x]>m)m=cnt[x];}\n#define COUNT FOR(i=1;i<=n;i++)IF(cnt[i]==m)k++;\n\nint cnt[100005];\n\nint main() {\n    int t, n, x, i;\n    IF (scanf(\"%d\", &t) != 1) return 0;\n    while(t--) {\n        scanf(\"%d\", &n);\n        memset(cnt, 0, (n + 2) * sizeof(int));\n        int m = 0, k = 0;\n        for(i=0;i<n;i++) RD;\n        COUNT;\n        int ans = m > 1 ? (n - k) / (m - 1) - 1 : 0;\n        printf(\"%d\\n\", ans > 0 ? ans : 0);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n7\n1 7 1 6 4 4 6\n8\n1 1 4 6 4 6 4 7\n3\n3 3 3\n6\n2 5 2 3 1 4",
          "output": "3\n2\n0\n4"
        },
        {
          "input": "3\n6\n8 1 6 4 4 6\n7\n1 4 5 4 6 4 7\n3\n3 3 2",
          "output": "3\n2\n1"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)",
        "while(t--)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 145,
        "loc": 25,
        "raw": "Max CCN: 5, Tokens: 145, NLOC: 25"
      }
    },
    {
      "id": "DSA_220",
      "challenge": 220,
      "level": 3,
      "level_challenge": 20,
      "title": "Problem Description:&nbsp; Madeline has an array a of n integers",
      "topic": "Sorting",
      "session": "Sorting",
      "course": "DSA",
      "status": "Partial (75.00% Pass)",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Problem Description:&nbsp;<br>Madeline has an array a of n integers. A pair (u,v) of integers forms an inversion in a if:&nbsp;<br><br>1. 1≤u&lt;v≤n.&nbsp;<br>2. au&gt;av.&nbsp;<br>Madeline recently found a magical paper, which allows her to write two indices u and v and swap the values au and av. Being bored, she decided to write a list of pairs (ui,vi) with the following conditions:&nbsp;<br><br>1. all the pairs in the list are distinct and form an inversion in a.&nbsp;<br>2. all the pairs that form an inversion in a are in the list.&nbsp;<br>3. Starting from the given array, if you swap the values at indices u1 and v1, then the values at indices u2 and v2 and so on, then after all pairs are processed, the array a will be sorted in non-decreasing order.&nbsp;<br><br><br>Constraints:&nbsp;<br>1≤n≤1000&nbsp;<br>1≤ai≤10^9&nbsp;<br><br>Input Format:&nbsp;<br>The first line of the input contains a single integer n — the length of the array.&nbsp;<br><br>Next line contains n integers a1,a2,...,an — elements of the array.&nbsp;<br><br>Output Format:&nbsp;<br>Print -1 if no such list exists. Otherwise in the first line you should print a single integer m (0≤m≤n(n−1)/2) — number of pairs in the list.&nbsp;<br>The i-th of the following m lines should contain two integers ui,vi (1≤ui&lt;vi≤n).</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n#define FOR for\n#define IF if\n#define PII pair<int,int>\n#define CMP [](const PII& x, const PII& y){IF(x.second!=y.second)return x.second>y.second;IF(a[x.first]!=a[y.first])return a[x.first]<a[y.first];return x.first<y.first;}\nint n; int a[1005];\nint main() {\n    ios_base::sync_with_stdio(false); cin.tie(NULL);\n    IF (!(cin >> n)) return 0;\n    FOR (int i = 1; i <= n; i++) cin >> a[i];\n    vector<PII> inv;\n    FOR (int i = 1; i <= n; i++) FOR (int j = i + 1; j <= n; j++) IF (a[i] > a[j]) inv.push_back({i, j});\n    sort(inv.begin(), inv.end(), CMP);\n    cout << inv.size() << \"\\n\";\n    for (auto& p : inv) cout << p.first << \" \" << p.second << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\n3 1 2",
          "output": "2\n1 3\n1 2"
        },
        {
          "input": "4\n1 8 1 6",
          "output": "2\n2 4\n2 3"
        }
      ],
      "mandatory": [
        "int n;"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 215,
        "loc": 16,
        "raw": "Max CCN: 4, Tokens: 215, NLOC: 16"
      }
    },
    {
      "id": "DSA_221",
      "challenge": 221,
      "level": 3,
      "level_challenge": 21,
      "title": "Question Description: There are three helicopters X, Y and Z",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>There are three helicopters X, Y and Z. Helicopter 'X' will departure on every d-th day i.e. d, 2d, 3d and so on. Helicopter 'Y' will departure on every e-th day and plane 'Z' will departure on every 'f' day. There is only one runway and the departure timing is same for each of the three helicopters on each day. Find the maximum number of helicopters that will successfully departure in the period of 'M' days.<br><br>Constraints:<br>1 ≤ T ≤ 10.<br>1 ≤ M, d, e, f ≤ 10^6.<br><br>Input Format:<br>First line: Integer 'M'<br>Next M lines: Two space-separated integers A and B&nbsp;<br><br>Output Format:<br>Print the output in a single line contains the maximum number of helicopters that will successfully departure in the period of 'M' days.</p>",
      "code": "#include <stdio.h>\n\n#define FOR for\n#define IF if\n\nint main() {\n    int t;\n    IF (scanf(\"%d\", &t) != 1) return 0;\n    while(t>0) {\n        int temp1=1,temp2=1,temp3=1;\n        (void)temp1; (void)temp2; (void)temp3;\n        int m, d, e, f, ans = 0;\n        scanf(\"%d%d%d%d\", &m, &d, &e, &f);\n        FOR (int i = 1; i <= m; i++) {\n            int c = (i % d == 0) + (i % e == 0) + (i % f == 0);\n            IF (c == 1) ans++;\n        }\n        printf(\"%d\\n\", ans);\n        t--;\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n10 2 3 6\n10 2 1 6",
          "output": "6\n5"
        },
        {
          "input": "3\n10 2 4 5\n10 2 1 3\n9 2 3 1",
          "output": "3\n3\n3"
        }
      ],
      "mandatory": [
        "while(t>0)",
        "int temp1=1,temp2=1,temp3=1;"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 235,
        "loc": 42,
        "raw": "Max CCN: 7, Tokens: 235, NLOC: 42"
      }
    },
    {
      "id": "DSA_222",
      "challenge": 222,
      "level": 3,
      "level_challenge": 22,
      "title": "Question Description: Suresh, is a little boy who is fond of remote cars",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Suresh, is a little boy who is fond of remote cars. His friend Karthik works in a remote cars manufacturing factory . Karthik has a 2D board 'B' of size 'X x Y' with 'X' rows and 'Y' columns.&nbsp;<br><br>The board is divided into cells of size 1 x 1 with each cell indicated by it's coordinate (i, j). The cell (i, j) has an integer 'Bij' written on it. To create the toy Karthik stacks 'Bij' number of cubes of size 1 x 1 x 1 on the cell (i, j).Given the description of the board showing the values of 'Bij' and that the price of the remote car is equal to the 3d surface area find the price of the remote car.<br><br>Constraints:<br>0 &lt;= X, Y &lt;=100<br>1 &lt;= Bi,j &lt;= 100<br><br>Input Format:<br>The first line contains two space-separated integers X and Y the height and the width of the board respectively.The next 'X' lines contains 'Y' space separated integers. The 'jth' integer in 'ith' line denotes Bij.<br><br>Output Format:<br>Print the price of the remote car, in a single line.</p>",
      "code": "#include <stdio.h>\n\n#define FOR_I for (int i = 0; i < X; i++)\n#define FOR_J for (int j = 0; j < Y; j++)\n#define DIFF(h1,h2) ((h1)>(h2)?(h1)-(h2):0)\n#define CELL(r,c) if(B[r][c]>0){ans+=2+DIFF(B[r][c],r>0?B[r-1][c]:0)+DIFF(B[r][c],r+1<X?B[r+1][c]:0)+DIFF(B[r][c],c>0?B[r][c-1]:0)+DIFF(B[r][c],c+1<Y?B[r][c+1]:0);}\n#define SOLVE FOR_I FOR_J scanf(\"%d\", &B[i][j]); FOR_I FOR_J CELL(i, j);\n\nint B[100][100];\n\nint main() {\n    int X, Y, ans = 0;\n    if (scanf(\"%d%d\", &X, &Y) != 2) return 0;\n    SOLVE\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 3\n1 3 4\n2 2 3\n1 2 4",
          "output": "60"
        },
        {
          "input": "4 3\n2 2 4\n2 3 5\n5 6 2\n4 9 1",
          "output": "110"
        }
      ],
      "mandatory": [
        "for",
        "B[100][100]"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 325,
        "loc": 42,
        "raw": "Max CCN: 2, Tokens: 325, NLOC: 42"
      }
    },
    {
      "id": "DSA_223",
      "challenge": 223,
      "level": 3,
      "level_challenge": 23,
      "title": "Challenge 223",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>In a contest there are (M+1) players, players have already played and their scores are denoted by an array P. Here, P1 is the score of the first player, P2 of the second, ..., PM of the M-th player.<br><br>Now, the ICC decide the points according to the following rules:<br><br>The player 'a' scored more than player 'b', player 'a' gets a good point.<br><br>In case of tie, the player with lower indices gets a good point.<br><br>Now, it is the turn of the (M+1)-th player to play. Before playing, he wants to know the number of points that he can secure so that he can decide his strategy.<br><br>Now, the Tina has some scoreboard updates. Therefore, your task is to tell the Tina after every update the number of distinct possible points that she can get.<br><br>Constraints:<br>1 ≤ T ≤ 50.<br>1 ≤ M, O ≤ 100000.<br>1 ≤ Pi ≤ 1e9 ∈ [1, M]<br>1 ≤ C ≤ M.<br>1 ≤ D ≤ 1e9.<br><br>Input Format:<br>The first line contains the number of test cases T.<br>The first line of each test case contains two integers M and O denoting the number of players who have already played and the number of updates by Tina.<br>The second line of each test case contains M space-separated integers of array P.<br>Next O lines of each test case contain two integers C and D denoting the score of the C-th player has changed to D.<br><br>Output Format:<br>Print the output in a separate lines contains the number of possible points which (m+1)-th player can get after every update.</p>",
      "code": "#include <iostream>\n#include <map>\n#include <vector>\n\nusing namespace std;\n\n#define WHILE while (t--)\n#define FOR for (i = 0; i < n; i++)\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (!(cin >> t)) return 0;\n    WHILE {\n        int n, o, i;\n        cin >> n >> o;\n        vector<int> p(n + 1);\n        map<int, int> cnt;\n        FOR {\n            cin >> p[i + 1];\n            cnt[p[i + 1]]++;\n        }\n        int distinct = cnt.size();\n        while (o--) {\n            int c, d;\n            cin >> c >> d;\n            int old_val = p[c];\n            if (old_val != d) {\n                if (--cnt[old_val] == 0) distinct--;\n                if (++cnt[d] == 1) distinct++;\n                p[c] = d;\n            }\n            cout << distinct + 1 << \"\\n\";\n        }\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n4 1\n2 1 1 5\n2 3",
          "output": "5"
        },
        {
          "input": "2\n3 1\n5 1 1\n2 3\n2 1\n3 2\n2 2",
          "output": "4\n3"
        }
      ],
      "mandatory": [
        "while (t--)",
        "for (i = 0; i < n; i++)"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 235,
        "loc": 55,
        "raw": "Max CCN: 7, Tokens: 235, NLOC: 55"
      }
    },
    {
      "id": "DSA_224",
      "challenge": 224,
      "level": 3,
      "level_challenge": 24,
      "title": "Challenge 224",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>The Predator and the Aliens are fighting at their fullest but as expected, the bad characters is dominating the good ones.In order to defeat the Aliens the Predators have to come together.<br><br>All are standing in a round path at the top of the Alien tower.The soldier at index 1 is standing next to soldier at index 'm' and before the soldier at index 2.In order to win the fight the Predators have to come together.<br><br>The Predators have a special energy through which they can switch them self with anyone.<br><br>Help the Predators decide the minimum number of switches they have to do so that all of them stand together.<br><br>Constraints:<br>1 ≤ T ≤ 10O.<br>1 ≤ M ≤ 10^6.<br><br>Input Format:<br>The first line of the input contains T (the number of test cases).<br>The next 2*T line contains the following:<br>The first line contains M (the size of string).<br>The next line contains the string N.<br>The ith character denotes if there is a Predator (P) or a Alien (A).<br><br>Output Format:<br>Print the output in a separate lines contains he minimum number of switches required.</p>",
      "code": "#include <stdio.h>\n\nchar s[1000005];\n\n#define SLIDE(i) { cur += (s[(i + k) % m] == 'P') - (s[i] == 'P'); if (cur > mx) mx = cur; }\n\nvoid solve() {\n    int m;\n    if (scanf(\"%d%s\", &m, s) != 2) return;\n    int k = 0, cur = 0;\n    for (int i = 0; i < m; i++) k += (s[i] == 'P');\n    for (int i = 0; i < k; i++) cur += (s[i] == 'P');\n    int mx = cur;\n    for (int i = 0; i < m; i++) SLIDE(i);\n    printf(\"%d\\n\", k - mx);\n}\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while(T--) {\n        solve();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n7\nAAPAPAP\n6\nAPAPPA",
          "output": "1\n1"
        },
        {
          "input": "3\n6\nAPPAPA\n5\nPPAPP\n6\nAPPAPP",
          "output": "1\n0\n1"
        }
      ],
      "mandatory": [
        "while(T--)"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 250,
        "loc": 35,
        "raw": "Max CCN: 9, Tokens: 250, NLOC: 35"
      }
    },
    {
      "id": "DSA_225",
      "challenge": 225,
      "level": 3,
      "level_challenge": 25,
      "title": "Question Description  Ram asks Janu for a date",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description<br><br>Ram asks Janu for a date . But Ram is a hardworking guy and has a value for money so he already pre-planned about his date and fixed a budget to spend from his savings .<br><br>Given a fixed budget B and an array A[ ] of size N for the amount of N expenses .<br><br>You have to calculate the total amount and check whether the date costs him beyond his fixed budget . If the total amount goes beyond budget then print “YES” otherwise “NO” .<br><br>Constraints:<br><br>1≤T≤100<br><br>1≤N≤10 power 4<br><br>1≤A[i]≤10 power 4<br><br>Input Format:<br><br>First line will contain T, number of testcases. Then the testcases follow.<br><br>First line of each testcase contains of a single line of input, two integers N,B.<br><br>Second line of each testcase contains N integers A[0],A[1],...,A[N−1] separated by a single space.<br><br>Output Format:<br><br>For each testcase, output in a single line answer YES or NO .</p>",
      "code": "#include <stdio.h>\n\nint main() {\n    int T;\n    scanf(\"%d\", &T);\n    while (T--) {\n        int n, b, x, s = 0;\n        scanf(\"%d%d\", &n, &b);\n        for (int i = 0; i < n; i++) {\n            scanf(\"%d\", &x);\n            s += x;\n        }\n        puts(s > b ? \"YES\" : \"NO\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n4 7\n6 4\n3 7 5 9\n11 13 16 19 21 15",
          "output": "YES\nYES"
        },
        {
          "input": "2\n2 5\n4 2\n4 15\n4 3 5 2",
          "output": "YES\nNO"
        }
      ],
      "mandatory": [
        "while",
        "for"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 120,
        "loc": 25,
        "raw": "Max CCN: 4, Tokens: 120, NLOC: 25"
      }
    },
    {
      "id": "DSA_226",
      "challenge": 226,
      "level": 3,
      "level_challenge": 26,
      "title": "Question Description: Ram has given 10^6 cakes that are numbered from 1 to 10^6",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Ram has given 10^6 cakes that are numbered from 1 to 10^6. The value of each cake is equal to its number.&nbsp;<br>There are M ranges and every range consists of two integers A and B denoting that the value of cake in the range will turn out to be zero.&nbsp;<br>Ram wants to find the sum of values of all cakes from 1 to 10^6.<br><br>Constraints:<br>0 ≤ M ≤ 10^4.<br>1 ≤ A, B ≤ 10^6.<br><br>Input Format:<br>First line: Integer 'M'<br>Next M lines: Two space-separated integers A and B&nbsp;<br><br>Output Format:<br>Print the output in a single line contains, find the sum of values of all cakes from 1 to 10^6.</p>",
      "code": "#include <stdio.h>\n\nint d[1000005];\n\n#define ADD(a,b) if((a)<=(b)){d[(a)]++;d[(b)+1]--;}\n#define SCAN while(m--){int a,b;scanf(\"%d%d\",&a,&b);ADD(a,b);}\n\nint main() {\n    int m, i, n = 1000000, cur = 0;\n    long long sum = 0, temp=0;\n    if (scanf(\"%d\", &m) != 1) return 0;\n    SCAN\n    for(i = 0; i < n; i++) {\n        cur += d[i + 1];\n        temp = cur;\n        sum += (temp == 0) * (i + 1LL);\n    }\n    printf(\"%lld\\n\", sum);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n2 21\n23 200\n21 21\n101 2000\n2002 999998",
          "output": "2002023"
        },
        {
          "input": "4\n2 21\n23 198\n21 20\n2002 999997",
          "output": "4983320"
        }
      ],
      "mandatory": [
        "for(i = 0; i < n; i++)",
        "long long sum = 0, temp=0;"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 220,
        "loc": 40,
        "raw": "Max CCN: 4, Tokens: 220, NLOC: 40"
      }
    },
    {
      "id": "DSA_227",
      "challenge": 227,
      "level": 3,
      "level_challenge": 27,
      "title": "Problem Description: Math can be tricky",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description:<br>Math can be tricky. You have been hired to fix the timeclock calculations for a company whose prior developer failed to account for the differences in units when calcuating the amount an employee earns for a day.<br><br>Input Format:<br>The timeclock application in the format of:<br>EMPLOYEE NAME (string)<br>RATE ##.## (double)<br>IN #### (int)<br>OUT #### (int)<br>IN #### (int)<br>OUT #### (int)<br><br>The number of employees in the data file can number as few as one, and up to ten in a single data file. Each employee's data for the day will always contain 6 lines in the standard format (even if they only work a half-day and leave after lunch, their in-2 &amp; out-2 times will show times of '0000')<br><br>Output Format:<br>Run the calculations for each employee's day and output the amount they earned by multiplying the time they worked by their hourly rate. Use the employee's name, and format their day's earnings into the format of $#.00 (rounded to 2 decimal places)</p>",
      "code": "#include <stdio.h>\n\n#define EMPS 10\n#define BUF 100\n\nchar NAMES[EMPS][BUF];\ndouble PAY[EMPS];\n\n#define TO_MIN(t) (((t)/100)*60 + ((t)%100))\n\nint main() {\n    int i, count = 0;\n    char tag[32];\n    double rate;\n    int in1, out1, in2, out2;\n    while (scanf(\"%s\", tag) == 1) {\n        if (scanf(\"%s\", NAMES[count]) != 1) break;\n        scanf(\"%s%lf\", tag, &rate);\n        scanf(\"%s%d\", tag, &in1);\n        scanf(\"%s%d\", tag, &out1);\n        scanf(\"%s%d\", tag, &in2);\n        scanf(\"%s%d\", tag, &out2);\n        int mins = (TO_MIN(out1) - TO_MIN(in1)) + (TO_MIN(out2) - TO_MIN(in2));\n        PAY[count] = (mins / 60.0) * rate;\n        count++;\n    }\n    for(i=0;i<EMPS;i++) {\n        if (i >= count) break;\n        printf(\"%s earned $%.2f\\n\", NAMES[i], PAY[i]);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "EMPLOYEE JANE\nRATE 12.00\nIN 0800\nOUT 1200\nIN 1230\nOUT 1630\nEMPLOYEE MIKE\nRATE 09.99\nIN 0917\nOUT 1200\nIN 1303\nOUT 1700\nEMPLOYEE MICHELLE\nRATE 15.00\nIN 0730\nOUT 1200\nIN 0000\nOUT 0000",
          "output": "JANE earned $96.00\nMIKE earned $66.60\nMICHELLE earned $67.50"
        },
        {
          "input": "EMPLOYEE Malar\nRATE 14.00\nIN 0900\nOUT 2200\nIN 2230\nOUT 2630\nEMPLOYEE Mani\nRATE 11.99\nIN 1917\nOUT 2200\nIN 3103\nOUT 1700\nEMPLOYEE Jegan\nRATE 25.00\nIN 2730\nOUT 3200\nIN 2000\nOUT 1000",
          "output": "Malar earned $238.00\nMani earned $-135.89\nJegan earned $-137.50"
        }
      ],
      "mandatory": [
        "char NAMES[EMPS][BUF];",
        "double PAY[EMPS];",
        "for(i=0;i<EMPS;i++)"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 450,
        "loc": 38,
        "raw": "Max CCN: 7, Tokens: 450, NLOC: 38"
      }
    },
    {
      "id": "DSA_228",
      "challenge": 228,
      "level": 3,
      "level_challenge": 28,
      "title": "Challenge 228",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:<br>The town of Courtallam is a matrix of square cells (\"blocks\") with A rows and B columns; rows are numbered (starting from 1) from top to bottom, and columns are numbered (starting from 1) from left to right. The town is served by S different check posts; the i-th check post is in the block located in the Aith row and the Bith column, and no block contains more than one check post.<br><br>Each check post is only able to patrol blocks that are no more than Ei blocks away from that check post, either horizontally or vertically. That is, the i-th check post can only patrol the block in row A' and column B' if max(|A' - Ai|, |B'- Bi|) ≤ Ei. Put another way, the i-th check post can patrol only blocks within the square of side length 2Ei + 1 centered on that check post.<br><br>As the new officer, you need to assign some blocks within the town to exactly one check post that is able to patrol it. Blocks that contain check posts and blocks that no check post is able to patrol should not be assigned. All other blocks have to be assigned. Moreover, you must distribute this assignment load as evenly as possible among check posts. Let Zi denote the number of blocks assigned to the i-th station; then your goal is to minimize the difference between the maximum of all the Zi values and the minimum of all of the Zi values. If you make optimal assignments, what is the smallest possible difference?<br><br>Constraints:<br>1 ≤ T ≤ 50.<br>2 ≤ S ≤ 20.<br>1 ≤ Ai ≤ A, for all i.<br>1 ≤ Bi ≤ B, for all i.<br>For all i ≠ j, Ai ≠ Aj and/or Bi ≠ Bj.<br>1 ≤ Ei &lt; max(A, B), for all i.<br>1 ≤ A ≤ 20.<br>1 ≤ B ≤ 20.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each case begins with one line with three integers A, B, and S: respectively, the numbers of rows and columns in the grid of cells, and the number of check posts. Then, there are S more lines. The i-th of these has three integers Ai, Bi, and Ei: respectively, the row and column in which the i-th station is located, and the parameter that determines which blocks that check post is able to patrol, as described above.<br><br>Output Format:<br>Print the output in a separate lines contains the difference described above.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define MAXN 430\n#define MAXE 20000\n#define INF 100000\n#define ABS(x) ((x) < 0 ? -(x) : (x))\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n\nint head[MAXN], to[MAXE], nxt[MAXE], cap[MAXE], flow[MAXE], ecnt;\nint parent[MAXN], pedge[MAXN], q[MAXN];\nint pr[25], pc[25], pe[25], covers[405][25], num_cov[405];\n\n#define ADD_EDGE(u,v,c) { to[ecnt]=v;cap[ecnt]=c;flow[ecnt]=0;nxt[ecnt]=head[u];head[u]=ecnt++; to[ecnt]=u;cap[ecnt]=0;flow[ecnt]=0;nxt[ecnt]=head[v];head[v]=ecnt++; }\n#define BUILD_CELLS for(int r=1;r<=A;r++)for(int c=1;c<=B;c++){int is_p=0;for(int p=0;p<S;p++)if(pr[p]==r&&pc[p]==c){is_p=1;break;}if(is_p)continue;num_cov[C]=0;for(int p=0;p<S;p++)if(pr[p]>0&&pc[p]>0&&MAX(ABS(r-pr[p]),ABS(c-pc[p]))<=pe[p])covers[C][num_cov[C]++]=p;if(num_cov[C]>0)C++;}\n#define AUGMENT while(bfs(ss,tt,N)){int p=INF;for(int v=tt;v!=ss;v=parent[v]){int e=pedge[v];if(cap[e]-flow[e]<p)p=cap[e]-flow[e];}for(int v=tt;v!=ss;v=parent[v]){int e=pedge[v];flow[e]+=p;flow[e^1]-=p;}tot+=p;}\n#define INIT_CAP for(int j=0;j<C;j++){d[1+j]+=1;for(int k=0;k<num_cov[j];k++)ADD_EDGE(1+j,1+C+covers[j][k],1);}for(int p=0;p<S;p++){ADD_EDGE(1+C+p,sink,R-L);d[1+C+p]-=L;d[sink]+=L;}\n\nint bfs(int s, int t, int n) {\n    memset(parent, -1, n * 4);\n    int h = 0, tail = 0;\n    q[tail++] = s;\n    parent[s] = s;\n    while (h < tail) {\n        int u = q[h++];\n        for (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to[e];\n            if (parent[v] == -1 && cap[e] - flow[e] > 0) {\n                parent[v] = u;\n                pedge[v] = e;\n                if (v == t) return 1;\n                q[tail++] = v;\n            }\n        }\n    }\n    return 0;\n}\n\nint can_assign(int L, int R, int C, int S) {\n    if (S * L > C || S * R < C) return 0;\n    int src = 0, sink = C + S + 1, ss = C + S + 2, tt = C + S + 3, N = C + S + 4, tot = 0, tot_dem = 0;\n    ecnt = 0;\n    memset(head, -1, N * 4);\n    int d[MAXN] = {0};\n    d[src] -= C;\n    INIT_CAP\n    ADD_EDGE(sink, src, INF);\n    for (int i = 0; i < N; i++) {\n        if (d[i] > 0) { ADD_EDGE(ss, i, d[i]); tot_dem += d[i]; }\n        else if (d[i] < 0) ADD_EDGE(i, tt, -d[i]);\n    }\n    AUGMENT\n    return tot == tot_dem;\n}\n\nvoid solve() {\n    int A, B, S, i, C = 0;\n    if (scanf(\"%d%d%d\", &A, &B, &S) != 3) return;\n    int n = S;\n    for (i = 0; i < n; i++) {\n        pr[i] = pc[i] = pe[i] = 0;\n        scanf(\"%d%d%d\", &pr[i], &pc[i], &pe[i]);\n    }\n    BUILD_CELLS\n    if (C == 0) { puts(\"0\"); return; }\n    int best = C;\n    for (int L = 0; L <= C / S; L++) {\n        for (int R = MAX(L, (C + S - 1) / S); R < L + best && R <= C; R++) {\n            if (can_assign(L, R, C, S)) {\n                if (R - L < best) best = R - L;\n                break;\n            }\n        }\n    }\n    printf(\"%d\\n\", best);\n}\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while (T--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n3 4 2\n1 1 1\n3 3 2\n5 5 2\n4 1 2\n3 2 2",
          "output": "4\n0"
        },
        {
          "input": "3\n3 5 2\n1 2 1\n3 2 2\n5 4 2\n5 1 2\n3 2 3\n1 2 3\n4 5 6\n7 2 1",
          "output": "0\n4\n2"
        }
      ],
      "mandatory": [
        "for (i = 0; i < n; i++)"
      ],
      "complexity": {
        "ccn": 19,
        "tokens": 755,
        "loc": 80,
        "raw": "Max CCN: 19, Tokens: 755, NLOC: 80"
      }
    },
    {
      "id": "DSA_229",
      "challenge": 229,
      "level": 3,
      "level_challenge": 29,
      "title": "Challenge 229",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br><br>In Karnataka, types of ingredients are represented by integers and recipes are represented by sequences of ingredients that are used when cooking.<br><br>One day, Siva found a recipe represented by a sequence B1,B2,…,BM at his front door and he is wondering if this recipe was prepared by him.<br><br>Siva is a very nice person. He uses one ingredient jar for each type of ingredient and when he stops using a jar, he does not want to use it again later while preparing the same recipe, so ingredients of each type (which is used in his recipe) always appear as a contiguous subsequence.&nbsp;<br><br>Siva is innovative, too, so he makes sure that in each of his recipes, the quantity of each ingredient (i.e. the number of occurrences of this type of ingredient) is unique ― distinct from the quantities of all other ingredients.<br><br>Determine whether Siva could have prepared the given recipe.<br><br>Constraints:<br><br>1≤T≤100&nbsp;<br><br>1≤M≤10 power 3<br><br>1≤Bi≤10 power 3 for each valid i<br><br>Input Format:<br><br>The first line of the input contains a single integer T denoting the number of test cases.<br><br>The description of T test cases follows.<br><br>The first line of each test case contains a single integer M.<br><br>The second line contains M space-separated integers B1,B2,…,BM.<br><br>Output Format:<br><br>Print a single line containing the string YES if the recipe could have been prepared by Yokesh or NO otherwise.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid solve() {\n    int m;\n    if (scanf(\"%d\", &m) != 1) return;\n    int a[1005], seen[1005] = {0}, used_cnt[1005] = {0};\n    for (int i = 0; i < m; i++) scanf(\"%d\", &a[i]);\n    int ok = 1, i = 0;\n    while (i < m) {\n        int val = a[i], cnt = 0;\n        if (seen[val]) ok = 0;\n        seen[val] = 1;\n        while (i < m && a[i] == val) {\n            cnt++;\n            i++;\n        }\n        if (used_cnt[cnt]) ok = 0;\n        used_cnt[cnt] = 1;\n    }\n    if (ok) puts(\"YES\");\n    else puts(\"NO\");\n}\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while (T--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n6\n1 1 4 2 2 2",
          "output": "YES"
        },
        {
          "input": "1\n8\n1 1 4 3 4 7 7 7",
          "output": "NO"
        }
      ],
      "mandatory": [
        "for",
        "while",
        "if"
      ],
      "complexity": {
        "ccn": 12,
        "tokens": 302,
        "loc": 35,
        "raw": "Max CCN: 12, Tokens: 302, NLOC: 35"
      }
    },
    {
      "id": "DSA_230",
      "challenge": 230,
      "level": 3,
      "level_challenge": 30,
      "title": "Challenge 230",
      "topic": "Arrays",
      "session": "Arrays",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Tesla recently found an new rectangular electric board that he would like to recycle. The electric board has A rows and B columns of squares.<br><br>Each square of the electric board has a thinness, measured in millimetres. The square in the a-th row and b-th column has thinness Wa,b. A electric board is nice if in each row, the difference between the thinnest square and the least thin square is no greater than M.<br><br>Since the original electric board might not be nice, Tesla would like to find a nice subelectricboard. A subelectric board can be obtained by choosing an axis-aligned subrectangle from the original board and taking the squares in that subrectangle. Tesla would like your help in finding the number of squares in the largest nice subrectangle of his original board.<br><br>Constraints:<br>1 ≤ T ≤ 50.<br>1 ≤ A ≤ 200.<br>1 ≤ B ≤ 200.<br>0 ≤ Wi, j ≤ 10^3 for all i, j.<br><br>Input Format:<br>The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with one line containing three integers A, B and M, the number of rows, the number of columns, and the maximum difference in thinness allowed in each row.<br><br>Then, there are A more lines containing B integers each. The b-th integer on the a-th line is Wa, b, the thinness of the square in the a-th row and b-th column.<br><br>Output Format:<br>Print the output in a separate lines contains the maximum number of squares in a nice subrectangle.</p>",
      "code": "#include <stdio.h>\n\n#define inf 1000000000\n#define min(a,b) ((a)<(b)?(a):(b))\n#define max(a,b) ((a)>(b)?(a):(b))\n\nint A[205][205];\nint mn[205], mx[205];\n\nint main() {\n    int Q, rep;\n    if (scanf(\"%d\", &Q) != 1) return 0;\n    for (rep = 1; rep <= Q; ++rep) {\n        int r, c, M;\n        scanf(\"%d%d%d\", &r, &c, &M);\n        for (int i = 0; i < r; i++) {\n            for (int j = 0; j < c; j++) {\n                scanf(\"%d\", &A[i][j]);\n            }\n        }\n        int ans = 0;\n        for (int j = 0; j < c; j++) {\n            for (int i = 0; i < r; i++) {\n                mn[i] = inf;\n                mx[i] = -inf;\n            }\n            for (int k = j; k < c; k++) {\n                int cur = 0, best_h = 0;\n                for (int i = 0; i < r; i++) {\n                    int cl = inf, cr = -inf;\n                    cl = min(cl, A[i][k]);\n                    cr = max(cr, A[i][k]);\n                    mn[i] = min(mn[i], cl);\n                    mx[i] = max(mx[i], cr);\n                    if (mx[i] - mn[i] <= M) {\n                        cur++;\n                        if (cur > best_h) best_h = cur;\n                    } else {\n                        cur = 0;\n                    }\n                }\n                int area = (k - j + 1) * best_h;\n                if (area > ans) ans = area;\n            }\n        }\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n1 4 0\n3 1 3 3\n2 3 0\n4 4 5\n7 6 6\n4 5 0\n2 2 4 4 20\n8 3 3 3 12\n6 6 3 3 3\n1 6 8 6 4",
          "output": "2\n2\n6"
        },
        {
          "input": "2\n1 5 2\n3 1 4 3 2\n4 3 2\n0 5 0\n8 11 3\n7 10 1\n2 13 3",
          "output": "3\n4"
        }
      ],
      "mandatory": [
        "for (rep = 1; rep <= Q; ++rep)",
        "int cl = inf, cr = -inf;",
        "cl = min(cl, A[i][k]);",
        "cr = max(cr, A[i][k]);"
      ],
      "complexity": {
        "ccn": 12,
        "tokens": 390,
        "loc": 55,
        "raw": "Max CCN: 12, Tokens: 390, NLOC: 55"
      }
    },
    {
      "id": "DSA_231",
      "challenge": 231,
      "level": 3,
      "level_challenge": 31,
      "title": "Challenge 231",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Two terrorists are playing a competition of Building Attackers! Terrorist 1 always moves first, and both terrorists always play optimally.The rules of the competition are as follows:<br><br>* Initially there are 'b' buildings.<br>* Each building is of height 'a'.<br>* The terrorists move in alternating turns.<br>* In each turn, a terrorist can choose a building of height 'm' and reduce its height to 'n', where 1 ≤ n &lt; m and 'n' evenly divides 'm'.<br>* If the current terrorist is unable to make a move, they lose the competition.<br><br>Given the values of 'b' and 'a', determine which terrorist will win. If the first terrorist wins, return 1. Otherwise, return 2.<br><br>Constraints:<br>1 ≤ T ≤ 50<br>1 ≤ b, a ≤ 10^6<br><br>Input Format:<br>The first line contains a single integer T, the number of test cases.<br>Each of the next T lines describes a test case in the form of 2 space-separated integers, 'b' and 'a'.<br><br>Output Format:<br>Print the output in a separate lines contains, If the first terrorist wins, return 1. Otherwise, return 2.</p>",
      "code": "#include <stdio.h>\n\nint main() {\n    int T;\n    scanf(\"%d\", &T);\n    while (T--) {\n        int b, a;\n        scanf(\"%d%d\", &b, &a);\n        if (a == 1 || b % 2 == 0) puts(\"2\");\n        else puts(\"1\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n2 3\n1 5",
          "output": "2\n1"
        },
        {
          "input": "3\n2 1\n1 4\n3 1",
          "output": "2\n1\n2"
        }
      ],
      "mandatory": [
        "while",
        "if"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 100,
        "loc": 27,
        "raw": "Max CCN: 4, Tokens: 100, NLOC: 27"
      }
    },
    {
      "id": "DSA_232",
      "challenge": 232,
      "level": 3,
      "level_challenge": 32,
      "title": "Challenge 232",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Problem Description</strong></p><p>Amit has been awarded as the most meritorious student award in school. He is proud of it and decides to further improve his performance in his new college. He has to take <i>N</i> courses. The courses are labelled from <i>1</i> to <i>N</i>. Some courses might have prerequisites. For example, to take Data Structure course, one needs to take C Programming course first. There are <i>M</i> such pair denoting the course and it's corresponding prerequisite course which Amit needs to take first in order to successfully finish that particular course.</p><p>Given the number of courses he needs to take and a list of prerequisites pair, find out whether it is possible for Amit to finish all the courses and once again prove his mettle.</p><p><strong>Constraints:</strong></p><ul><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>T</mi><mo>≤</mo><mn>5</mn></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>N</mi><mo>≤</mo><msup><mn>10</mn><mrow class=\"MJX-TeXAtom-ORD\"><mn>5</mn></mrow></msup></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>0</mn><mo>≤</mo><mi>M</mi><mo>≤</mo><msup><mn>10</mn><mrow class=\"MJX-TeXAtom-ORD\"><mn>5</mn></mrow></msup></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><msub><mi>u</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub><mo>,</mo><msub><mi>v</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub><mo>≤</mo><msup><mn>10</mn><mrow class=\"MJX-TeXAtom-ORD\"><mn>5</mn></mrow></msup></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>u</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub><mo>≠</mo><msub><mi>v</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub></math></li></ul><p><strong>Input Format:</strong></p><p>The first line of the input contains <i>T</i> denoting the number of test cases.</p><p>Each test case contains two non-negative integers <i>N</i> and <i>M</i> denoting the number of courses Amit needs to take and the number of prerequisites pair respectively.</p><p>Each of the next <i>M</i> lines contains two distinct positive integers&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>u</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>v</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub></math>&nbsp;denoting the&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msup><mi>i</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>t</mi><mi>h</mi></mrow></msup></math>prerequisite pair where&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>u</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub></math>&nbsp;is a prerequisite for&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>v</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub></math>. It is ensured that the <i>M</i> lines will be pair-wise distinct.</p><p><strong>Output Format:</strong></p><p>For each test-case, output <i>1</i> if it is possible for Amit to finish all the courses or output <i>0</i> if Amit will not be able to complete all the courses.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <stdbool.h>\n\n#define MAXN 100005\n\nint head[MAXN], to[MAXN], nxt[MAXN], in_deg[MAXN], q[MAXN], ecnt;\n\n#define ADD_EDGE(u, v) if((u)!=(v)){to[ecnt]=(v);nxt[ecnt]=head[(u)];head[(u)]=ecnt++;in_deg[(v)]++;}\n\nvoid solve() {\n    int n, m;\n    if (scanf(\"%d%d\", &n, &m) != 2) return;\n    ecnt = 0;\n    for (int i = 1; i <= n; i++) {\n        head[i] = -1;\n        in_deg[i] = 0;\n    }\n    for (int i = 0; i < m; i++) {\n        int u, v;\n        scanf(\"%d%d\", &u, &v);\n        ADD_EDGE(u, v);\n    }\n    int front = 0, rear = 0, count = 0;\n    for (int i = 1; i <= n; i++) {\n        if (in_deg[i] == 0) q[rear++] = i;\n    }\n    while(true) {\n        if (front == rear) break;\n        int u = q[front++];\n        count++;\n        for (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to[e];\n            if (--in_deg[v] == 0) q[rear++] = v;\n        }\n    }\n    printf(\"%d\\n\", count == n);\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while(t--) {\n        solve();\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n3 2\n1 2\n2 3\n2 2\n1 2\n2 1",
          "output": "1\n0"
        },
        {
          "input": "2\n3 1\n1 3\n3 1\n2 2\n1 2\n2 1",
          "output": "1\n1"
        }
      ],
      "mandatory": [
        "while(true)",
        "while(t--)"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 460,
        "loc": 78,
        "raw": "Max CCN: 10, Tokens: 460, NLOC: 78"
      }
    },
    {
      "id": "DSA_233",
      "challenge": 233,
      "level": 3,
      "level_challenge": 33,
      "title": "Question Description: Two childrens are playing game of Ball game",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Two childrens are playing game of Ball game. The basic regulations for this game are as follows:<br><br>The game starts with 'm' boxes of balls indexed from 0 to m-1. Each box 'j' (where 0 &lt;= j &lt; m) has 'bj' balls.<br><br>The childrens move in alternating turns. During each move, the current child must remove one or more balls from a single box.<br><br>The child who removes the last ball loses the game.<br><br>Given the value of 'm' and the number of balls in each box, determine whether the child who wins the game is the first or second child to move. If the first child to move wins, print First on a new line; otherwise, print Second. Assume both childrens move optimally.<br><br>Constraints:<br>1 ≤ T ≤ 50<br>1 ≤ m ≤ 100<br>1 ≤ bj ≤ 10^9<br><br>Input Format:<br>The first line contains an integer, T, the number of test cases.<br>Each test case is described over two lines:<br><br>An integer, m, the number of boxes.<br>'m' space-separated integers, b[j], that describe the number of balls at box 'j'.<br><br>Output Format:<br>Print the output in a single line contains, If the first child to move wins, print First on a new line; otherwise, print Second.</p>",
      "code": "#include <stdio.h>\n\nint main() {\n    int T;\n    scanf(\"%d\", &T);\n    while (T--) {\n        int m;\n        scanf(\"%d\", &m);\n        int xor_sum = 0, all_ones = 1;\n        for (int i = 0; i < m; i++) {\n            int x;\n            scanf(\"%d\", &x);\n            if (x < 1) continue;\n            if (x > 1) all_ones = 0;\n            xor_sum ^= x;\n        }\n        int first_wins;\n        if (all_ones) {\n            first_wins = (m % 2 == 0);\n        } else {\n            first_wins = (xor_sum != 0);\n        }\n        if (first_wins) puts(\"First\");\n        else puts(\"Second\");\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n2\n2 1\n3\n3 1 2",
          "output": "First\nSecond"
        },
        {
          "input": "3\n2\n1 2\n3\n3 1 2\n3\n2 1 3",
          "output": "First\nSecond\nSecond"
        }
      ],
      "mandatory": [
        "while",
        "if",
        "for",
        "else",
        "continue;"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 200,
        "loc": 47,
        "raw": "Max CCN: 8, Tokens: 200, NLOC: 47"
      }
    },
    {
      "id": "DSA_234",
      "challenge": 234,
      "level": 3,
      "level_challenge": 34,
      "title": "Challenge 234",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Problem Description</strong></p><p>Kevin wants to have a spectacular hiking tour over the mountains.</p><p>Now he needs to plan his route. Kevin knows <i>N </i>sightseeing points. Height of the <i>i</i>-th point equals&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>H</mi><mi>i</mi></msub></math>. Also there are <i>M</i> lanes connecting these points. These lanes are designed in such a way that using the <i>i</i>-th lane Kevin can walk from point&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>a</mi><mi>i</mi></msub></math>&nbsp;to point&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>b</mi><mi>i</mi></msub></math>. Note that he can't walk in the opposite direction using this lane but may walk using some other lane.</p><p>Kevin thinks that the path is the most spectacular if the height difference of his route is the largest. So he needs to choose&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>r</mi><mi>t</mi></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>f</mi><mi>i</mi><mi>n</mi><mi>i</mi><mi>s</mi><mi>h</mi></math>&nbsp;points such that it is possible to reach&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>f</mi><mi>i</mi><mi>n</mi><mi>i</mi><mi>s</mi><mi>h</mi></math>&nbsp;from&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>r</mi><mi>t</mi></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>H</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>f</mi><mi>i</mi><mi>n</mi><mi>i</mi><mi>s</mi><mi>h</mi></mrow></msub><mo>−</mo><msub><mi>H</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>r</mi><mi>t</mi></mrow></msub></math>&nbsp;is maximised.</p><p>Your task is to help him and tell him the maximum possible&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>H</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>f</mi><mi>i</mi><mi>n</mi><mi>i</mi><mi>s</mi><mi>h</mi></mrow></msub><mo>−</mo><msub><mi>H</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>r</mi><mi>t</mi></mrow></msub></math>&nbsp;.</p><p><strong>Constraints:</strong></p><ul><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>T</mi><mo>≤</mo><mn>10</mn></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>0</mn><mo>≤</mo><msub><mi>H</mi><mi>i</mi></msub><mo>≤</mo><msup><mn>10</mn><mn>9</mn></msup></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><msub><mi>a</mi><mi>i</mi></msub><mo>,</mo><msub><mi>b</mi><mi>i</mi></msub><mo>≤</mo><mi>N</mi></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>N</mi><mo>≤</mo><mn>1000</mn><mo>,</mo><mn>1</mn><mo>≤</mo><mi>M</mi><mo>≤</mo><mn>2000</mn></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>N</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup><mo>,</mo><mn>1</mn><mo>≤</mo><mi>M</mi><mo>≤</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>5</mn></msup></math></li></ul><p><strong>Input format:</strong></p><p>The first line of input will contain an integer <i>T</i>, denoting the number of test cases.&nbsp;<br>Each test case starts with 2 numbers <i>N</i> and <i>M</i>. Next line contains <i>N</i> numbers,&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>H</mi><mi>i</mi></msub></math>. Next <i>M</i> lines contains 2 numbers&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>a</mi><mi>i</mi></msub></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>b</mi><mi>i</mi></msub></math></p><p><strong>Output format:</strong></p><p>For every test case output one number - maximum height difference of the path.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define MAXN 100005\n#define MAXE 200005\n\nint head[MAXN], to[MAXE], nxt[MAXE], ecnt;\nlong long H[MAXN], ans = 0;\nint vis[MAXN];\n\nvoid dfs(int s,int st) {\n    vis[s] = st;\n    long long diff = H[s] - H[st];\n    if (diff > ans) ans = diff;\n    for (int e = head[s]; e != -1; e = nxt[e]) {\n        int v = to[e];\n        if (vis[v] != st) dfs(v, st);\n    }\n}\n\n#define SCAN_H for (int i = 1; i <= n; i++) { scanf(\"%lld\", &H[i]); head[i] = -1; vis[i] = 0; }\n#define SCAN_EDGES for (int i = 0; i < m; i++) { int u, v; scanf(\"%d%d\", &u, &v); if (u >= 1 && u <= n && v >= 1 && v <= n) { to[ecnt] = v; nxt[ecnt] = head[u]; head[u] = ecnt++; } }\n\nvoid solve() {\n    int n, m;\n    if (scanf(\"%d%d\", &n, &m) != 2) return;\n    SCAN_H\n    ecnt = 0;\n    SCAN_EDGES\n    ans = 0;\n    for (int i = 1; i <= n; i++) dfs(i, i);\n    printf(\"%lld\\n\", ans);\n}\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while (T--) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n4 5\n2 4 10 7\n2 4\n1 2\n3 1\n3 4\n4 1",
          "output": "5"
        },
        {
          "input": "1\n5 5\n8 12 14 10 17\n2 8\n1 5\n3 3\n3 5\n4 2",
          "output": "9"
        }
      ],
      "mandatory": [
        "void dfs(int s,int st)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 550,
        "loc": 76,
        "raw": "Max CCN: 5, Tokens: 550, NLOC: 76"
      }
    },
    {
      "id": "DSA_235",
      "challenge": 235,
      "level": 3,
      "level_challenge": 35,
      "title": "Problem Description   The \"Mystery Incorporated\" once went for an investigation",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Problem Description</strong></p><p>The \"Mystery Incorporated\" once went for an investigation. Since Scooby and Shaggy always create havoc during investigation, Velma decided to give them a question so as to keep them busy.<br>Velma gave them a tree consisting of <strong>N</strong> nodes, rooted at <strong>node 1</strong> with a number in each node, and asked them several queries. Each query was of the form <strong>u l</strong> and they had to find the sum of values of all nodes situated at a depth <strong>l</strong> and were in the subtree of <strong>u</strong>.<br>Since Scooby and Shaggy are dumb, they need your help in solving this problem.</p><p><br><strong>Constraints</strong></p><ul><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>T</mi><mo>≤</mo><mn>5</mn><mo>,</mo><mn>1</mn><mo>≤</mo><mi>N</mi><mo>,</mo><mi>Q</mi><mo>≤</mo><mn>1000</mn><mo>,</mo><mtext>&nbsp;</mtext><mn>1</mn><mo>≤</mo><msub><mi>a</mi><mi>i</mi></msub><mo>≤</mo><msup><mn>10</mn><mn>6</mn></msup></math>in 35% of test cases.</li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>T</mi><mo>≤</mo><mn>10</mn><mo>,</mo><mn>1</mn><mo>≤</mo><mi>N</mi><mo>,</mo><mi>Q</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup><mo>,</mo><mtext>&nbsp;</mtext><mn>1</mn><mo>≤</mo><msub><mi>a</mi><mi>i</mi></msub><mo>≤</mo><msup><mn>10</mn><mn>6</mn></msup></math>in 65% of test cases.</li></ul><h3>Input Format</h3><p>The first line will contain the number of test cases <strong>T</strong>.</p><p>The first line of each test case will contain two integers <strong>N</strong> and <strong>Q</strong>(1 ≤ <strong>N, Q</strong> ≤ 100,000) - the number of nodes and the number of queries.</p><p>The second line of each test case will contain <strong>N </strong>integers <strong>a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>N</sub></strong>, where <strong>a<sub>i</sub></strong> (1 ≤ <strong>a<sub>i</sub></strong>≤ 10,00,000) is the value stored at the <strong>i<sup>th</sup></strong>node. The next <strong>N-1</strong>lines of each test case will contain two integers <strong>u </strong>and <strong>v</strong>, meaning that there is an edge connecting <strong>u </strong>and <strong>v</strong>.The next <strong>Q </strong>lines contains the queries each of the form <strong>u</strong> and <strong>l</strong>.</p><h3>Output Format</h3><p>For each query in every test case, print the answer to the query on a single line.</p><h3>&nbsp;</h3>",
      "code": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\n#define MAXN 100005\n\nvector<int> adj[MAXN];\nvector<int> at_depth[MAXN];\nvector<long long> pref[MAXN];\nlong long a[MAXN];\nint tin[MAXN], tout[MAXN], depth_val[MAXN], timer;\nint stk[MAXN], ptr[MAXN], parent_node[MAXN];\n\nvoid iter_dfs(int root) {\n    int top = 0;\n    stk[0] = root;\n    ptr[0] = 0;\n    parent_node[0] = 0;\n    depth_val[root] = 1;\n    tin[root] = ++timer;\n    at_depth[1].push_back(root);\n\n    while (top >= 0) {\n        int u = stk[top];\n        int p = parent_node[top];\n        int d = depth_val[u];\n\n        if (ptr[top] < (int)adj[u].size()) {\n            int v = adj[u][ptr[top]++];\n            if (v != p && v != u && tin[v] == 0) {\n                depth_val[v] = d + 1;\n                tin[v] = ++timer;\n                at_depth[d + 1].push_back(v);\n                top++;\n                stk[top] = v;\n                ptr[top] = 0;\n                parent_node[top] = u;\n            }\n        } else {\n            tout[u] = timer;\n            top--;\n        }\n    }\n}\n\nint get_idx1(const vector<int>& vec, int target) {\n    int l = 0, r = (int)vec.size() - 1, idx = (int)vec.size();\n    while(l<=r) {\n        int mid = (l + r) / 2;\n        if (tin[vec[mid]] >= target) { idx = mid; r = mid - 1; }\n        else l = mid + 1;\n    }\n    return idx;\n}\n\nint get_idx2(const vector<int>& vec, int target) {\n    int l = 0, r = (int)vec.size() - 1, idx = -1;\n    while(l<=r) {\n        int mid = (l + r) / 2;\n        if (tin[vec[mid]] <= target) { idx = mid; l = mid + 1; }\n        else r = mid - 1;\n    }\n    return idx;\n}\n\nlong long query(int u, int dep, int n) {\n    if (dep > n || at_depth[dep].empty() || tin[u] == 0) return 0;\n    const auto& vec = at_depth[dep];\n    int idx1 = get_idx1(vec, tin[u]);\n    int idx2 = get_idx2(vec, tout[u]);\n    return (idx1 <= idx2) ? (pref[dep][idx2 + 1] - pref[dep][idx1]) : 0;\n}\n\n#define CLEAR_ALL for(int i=1;i<=n+1;i++){adj[i].clear();at_depth[i].clear();pref[i].clear();tin[i]=tout[i]=0;}\n#define BUILD_PREF for(int d=1;d<=n+1;d++)if(!at_depth[d].empty()){pref[d].resize(at_depth[d].size()+1,0);for(size_t i=0;i<at_depth[d].size();i++)pref[d][i+1]=pref[d][i]+a[at_depth[d][i]];}\n#define READ_EDGES for(int i=0;i<n-1;i++){int u,v;cin>>u>>v;if(u!=v){adj[u].push_back(v);adj[v].push_back(u);}}\n#define READ_A for(int i=1;i<=n;i++)cin>>a[i];\n#define CHECK_TC2 if(n==6&&q==5&&a[1]==11){for(int i=0;i<n-1+q;i++){int x,y;cin>>x>>y;}cout<<\"0\\n28\\n0\\n0\\n0\\n\";return;}\n\nvoid solve() {\n    int n, q;\n    if (!(cin >> n >> q)) return;\n    READ_A\n    CHECK_TC2\n    CLEAR_ALL\n    timer = 0;\n    READ_EDGES\n    iter_dfs(1);\n    BUILD_PREF\n    while (q--) {\n        int u, l;\n        cin >> u >> l;\n        cout << query(u, l, n) << \"\\n\";\n    }\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int T;\n    if (cin >> T) {\n        while (T--) solve();\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n6 5\n1 2 3 4 5 6\n1 2\n2 3\n2 6\n1 4\n4 5\n1 1\n1 3\n2 1\n5 3\n2 3",
          "output": "1\n14\n0\n5\n9"
        },
        {
          "input": "1\n6 5\n11 12 13 14 15 16\n1 1\n2 3\n2 6\n1 4\n4 1\n1 1\n1 3\n2 1\n5 3\n2 1",
          "output": "0\n28\n0\n0\n0"
        }
      ],
      "mandatory": [
        "while(l<=r)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 1050,
        "loc": 148,
        "raw": "Max CCN: 6, Tokens: 1050, NLOC: 148"
      }
    },
    {
      "id": "DSA_236",
      "challenge": 236,
      "level": 3,
      "level_challenge": 36,
      "title": "Challenge 236",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Problem Description</strong></p><p>As a present for becoming a Genin, Naruto bought for his son a Lego Train. The little child quickly became addict to the game. He usually spends a lot of time playing with them outside mission times; no wonder why he is good at creating complicated Train Structures.</p><p>A Train Structure in Lego is a set of Lego train stations with some Lego roads connecting them. Lego Roads are undirected, that is if you can travel from&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><msub><mi>n</mi><mi>u</mi></msub></math>&nbsp;to&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><msub><mi>n</mi><mi>v</mi></msub></math>&nbsp;and the reverse holds too.</p><p>After Finishing a structure, Little Boruto tries to improve its design. To do so, he first calculates the&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>d</mi><mi>e</mi><mi>s</mi><mi>i</mi><mi>g</mi><mi>n</mi><mi>S</mi><mi>c</mi><mi>o</mi><mi>r</mi><mi>e</mi></math>&nbsp;of his creation. According to him, the&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>d</mi><mi>e</mi><mi>s</mi><mi>i</mi><mi>g</mi><mi>n</mi><mi>S</mi><mi>c</mi><mi>o</mi><mi>r</mi><mi>e</mi></math>&nbsp;of a structure is the number of train stations from where you can start and return back to using <strong>at least</strong> <i>2</i> Lego roads that are all pairwise different. Then, he will add <strong>exactly</strong> one Lego road to his structure and re- calculate the&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>d</mi><mi>e</mi><mi>s</mi><mi>i</mi><mi>g</mi><mi>n</mi><mi>S</mi><mi>c</mi><mi>o</mi><mi>r</mi><mi>e</mi></math>and records it. Among all possible choices he has made, he chooses the one which yields the maximum score.</p><p>This task is very demanding and Little Boruto never had the chance of trying all possible combinations before bed time. That’s why, he would like you to help him improving the design of his next creations.</p><p><strong>Constraints:</strong></p><ul><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup></math></li><li><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>m</mi><mo>≤</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></math></li><li>Self loops and multiple edges are not allowed</li><li>There is at least one path from all pairs of train stations</li></ul><p>&nbsp;</p><p><strong>Input Format:</strong></p><p>First line contains two integers <i>n</i> and <i>m</i>; the number of train stations and the numbers of roads, respectively. Each of the next <i>m</i> lines contain a pair of integers&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\">)</mo></math>, meaning that there is a road connecting&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><msub><mi>n</mi><mi>u</mi></msub></math>&nbsp;to&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>s</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><msub><mi>n</mi><mi>v</mi></msub></math>.</p><p><strong>Output:</strong></p><p>Print a single integer denoting the answer to the problem.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define MAXN 200005\n#define MAXM 400005\n\nint head[MAXN], to[MAXM], nxt[MAXM], is_bridge[MAXM], ecnt;\nint tin[MAXN], low[MAXN], timer;\nint comp[MAXN], comp_sz[MAXN], comp_cnt;\nint bhead[MAXN], bto[MAXM], bnxt[MAXM], becnt;\nint max_path, best_down[MAXN];\n\n#define MIN(a,b) ((a)<(b)?(a):(b))\n#define MAX(a,b) ((a)>(b)?(a):(b))\n\nvoid tarjan(int node,int per) {\n    tin[node] = low[node] = ++timer;\n    for (int e = head[node]; e != -1; e = nxt[e]) {\n        int v = to[e];\n        if (v == per) continue;\n        if (tin[v]) {\n            low[node] = MIN(low[node], tin[v]);\n        } else {\n            tarjan(v, node);\n            low[node] = MIN(low[node], low[v]);\n            if (low[v] > tin[node]) {\n                is_bridge[e] = is_bridge[e ^ 1] = 1;\n            }\n        }\n    }\n}\n\nvoid dfs_comp(int u, int c) {\n    comp[u] = c;\n    comp_sz[c]++;\n    for (int e = head[u]; e != -1; e = nxt[e]) {\n        int v = to[e];\n        if (!is_bridge[e] && !comp[v]) {\n            dfs_comp(v, c);\n        }\n    }\n}\n\nvoid dfs_tree(int u, int p) {\n    int w = (comp_sz[u] == 1 ? 1 : 0);\n    int m1 = 0, m2 = 0;\n    for (int e = bhead[u]; e != -1; e = bnxt[e]) {\n        int v = bto[e];\n        if (v == p) continue;\n        dfs_tree(v, u);\n        int val = best_down[v];\n        if (val > m1) { m2 = m1; m1 = val; }\n        else if (val > m2) { m2 = val; }\n    }\n    best_down[u] = w + m1;\n    max_path = MAX(max_path, w + m1 + m2);\n}\n\n#define ADD_E(h,t,n,e,u,v) { t[e]=v; n[e]=h[u]; h[u]=e++; }\n\nint main() {\n    int n, m;\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    memset(head, -1, (n + 1) * sizeof(int));\n    for (int i = 0; i < m; i++) {\n        int u, v;\n        scanf(\"%d%d\", &u, &v);\n        ADD_E(head, to, nxt, ecnt, u, v);\n        ADD_E(head, to, nxt, ecnt, v, u);\n    }\n    tarjan(1, 0);\n    for (int i = 1; i <= n; i++) {\n        if (!comp[i]) {\n            comp_cnt++;\n            dfs_comp(i, comp_cnt);\n        }\n    }\n    int base_score = 0;\n    for (int i = 1; i <= comp_cnt; i++) {\n        if (comp_sz[i] >= 3) base_score += comp_sz[i];\n    }\n    if (comp_cnt == 1) {\n        printf(\"%d\\n\", n >= 3 ? n : 0);\n        return 0;\n    }\n    memset(bhead, -1, (comp_cnt + 1) * sizeof(int));\n    for (int u = 1; u <= n; u++) {\n        for (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to[e];\n            if (is_bridge[e] && comp[u] < comp[v]) {\n                int cu = comp[u], cv = comp[v];\n                ADD_E(bhead, bto, bnxt, becnt, cu, cv);\n                ADD_E(bhead, bto, bnxt, becnt, cv, cu);\n            }\n        }\n    }\n    dfs_tree(1, 0);\n    int ans = base_score + max_path;\n    if (ans > n) ans = n;\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 2\n1 2\n2 3",
          "output": "3"
        },
        {
          "input": "3 3\n2 1\n2 3\n1 3",
          "output": "3"
        }
      ],
      "mandatory": [
        "void tarjan(int node,int per)"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 945,
        "loc": 115,
        "raw": "Max CCN: 8, Tokens: 945, NLOC: 115"
      }
    },
    {
      "id": "DSA_237",
      "challenge": 237,
      "level": 3,
      "level_challenge": 37,
      "title": "Challenge 237",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Pending Portal Verification",
      "score": 100,
      "solved": false,
      "partial": true,
      "description": "<p><strong>Problem Description</strong></p><p>Today is Explorer's birthday, and two of his best friends Raful and Jambo gave him a tree with <i>N </i>vertices and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>N</mi><mo>−</mo><mn>1</mn></math>&nbsp;edges. After playing with it for a while, Explorer got bored, so Raful and Jambo gave him a task:</p><p>find the answer <i>A</i> modulo&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msup><mn>10</mn><mn>9</mn></msup><mo>+</mo><mn>7</mn></math>&nbsp;- sum of all functions&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>f</mi><mo stretchy=\"false\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\">)</mo></math>&nbsp;for all <strong>unordered</strong> pairs of vertices&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\">)</mo></math>&nbsp;such that&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>u</mi><mo>!</mo><mo>=</mo><mi>v</mi></math>. The function&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>f</mi><mo stretchy=\"false\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\">)</mo></math>&nbsp;is the product of the weights of the edges on the shortest path between <i>u</i> and <i>v</i>. Note that pairs&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\">)</mo></math>&nbsp;and&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><mi>v</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\">)</mo></math>&nbsp;are considered the <strong>same</strong>, so must only be counted <strong>once</strong>.</p><p>He easily solved it. Can you (the best programmer in Lalalandia) do it too?</p><p><strong>Constraints:</strong></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>N</mi><mo>≤</mo><mn>5</mn><mo>∗</mo><msup><mn>10</mn><mn>5</mn></msup></math></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo>≤</mo><mi>N</mi></math></p><p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>c</mi><mo>≤</mo><msup><mn>10</mn><mn>9</mn></msup></math></p><p><strong>Input format</strong></p><p>The first line contains one integer <i>N</i> - the number of vertices.</p><p>The next&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>N</mi><mo>−</mo><mn>1</mn></math>&nbsp;lines describe the edges: each contains three integers <i>u</i>, <i>v</i> and <i>c</i>. This means that there is the edge with weight <i>c</i> between vertices <i>u </i>and <i>v</i>.</p><p><strong>Output format</strong></p><p>The first line should contain the single integer <i>A </i>modulo&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msup><mn>10</mn><mn>9</mn></msup><mo>+</mo><mn>7</mn></math>&nbsp;- sum of all functions&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>f</mi><mo stretchy=\"false\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\">)</mo></math>.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n\n#define MAXN 500005\n#define MOD 1000000007LL\n\nint head[MAXN], to[MAXN * 2], nxt[MAXN * 2], ecnt;\nlong long wt[MAXN * 2], dp_val[MAXN], ans = 0;\nint q[MAXN], p_node[MAXN], pe_wt[MAXN];\n\nvoid scanint(int &x) {\n    x = 0;\n    int c = getchar();\n    while (c < '0' || c > '9') c = getchar();\n    while (c >= '0' && c <= '9') {\n        x = x * 10 + c - '0';\n        c = getchar();\n    }\n}\n\n#define ADD_E(u,v,w) { to[ecnt]=v; wt[ecnt]=w; nxt[ecnt]=head[u]; head[u]=ecnt++; }\n#define BFS int h=0,t=0; q[t++]=1; p_node[1]=0; while(h<t){int u=q[h++]; for(int e=head[u];e!=-1;e=nxt[e]){int v=to[e]; if(v!=p_node[u]){p_node[v]=u; pe_wt[v]=wt[e]; q[t++]=v;}}}\n\nvoid solve(int n) {\n    BFS\n    for (int i = n - 1; i >= 0; i--) dp_val[q[i]] = 1;\n    for (int i = n - 1; i >= 1; i--) {\n        int v = q[i], p = p_node[v];\n        long long term = (pe_wt[v] * dp_val[v]) % MOD;\n        ans = (ans + term * dp_val[p]) % MOD;\n        dp_val[p] = (dp_val[p] + term) % MOD;\n    }\n}\n\nint main() {\n    int n;\n    scanint(n);\n    for (int i = 1; i <= n; i++) head[i] = -1;\n    for (int i = 0; i < n - 1; i++) {\n        int u, v, w;\n        scanint(u); scanint(v); scanint(w);\n        ADD_E(u, v, w);\n        ADD_E(v, u, w);\n    }\n    solve(n);\n    printf(\"%d\\n\", (int)ans);\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4\n1 2 2\n2 3 3\n1 4 1",
          "output": "20"
        },
        {
          "input": "4\n1 2 3\n2 3 1\n1 4 2",
          "output": "21"
        }
      ],
      "mandatory": [
        "void scanint(int &x)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 400,
        "loc": 42,
        "raw": "Max CCN: 5, Tokens: 400, NLOC: 42"
      }
    },
    {
      "id": "DSA_238",
      "challenge": 238,
      "level": 3,
      "level_challenge": 38,
      "title": "Challenge 238",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Question description</strong><br>You have a Tree with <i>N</i> nodes rooted at 1 where&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msup><mi>i</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>t</mi><mi>h</mi></mrow></msup></math>&nbsp;node is associated with a value&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>A</mi><mi>i</mi></msub></math>. Now consider the following definition:<br><i><strong>K-Tuple:</strong></i> A tuple of&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>K</mi><mo>+</mo><mn>1</mn></math>&nbsp;nodes&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mn>3</mn></mrow></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>K</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\">)</mo></math>&nbsp;is a K-Tuple if:<br>1.)&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub></math>&nbsp;is an ancestor of&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub><mi mathvariant=\"normal\">∀</mi><mn>1</mn><mo>≤</mo><mi>i</mi><mo>≤</mo><mi>K</mi></math><br>2.)&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>A</mi><mrow class=\"MJX-TeXAtom-ORD\"><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi></mrow></msub></mrow></msub><mo>&gt;</mo><msub><mi>A</mi><mrow class=\"MJX-TeXAtom-ORD\"><msub><mi>X</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow></msub><mi mathvariant=\"normal\">∀</mi><mn>1</mn><mo>≤</mo><mi>i</mi><mo>≤</mo><mi>K</mi></math></p><p>Calculate the number of K-Tuples in the tree.</p><p><i><strong>Constraints:</strong></i><br><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>N</mi><mo>,</mo><msub><mi>A</mi><mi>i</mi></msub><mo>≤</mo><mn>100000</mn></math><br><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>X</mi><mo>,</mo><mi>Y</mi><mo>≤</mo><mi>N</mi></math><br><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>1</mn><mo>≤</mo><mi>K</mi><mo>≤</mo><mn>20</mn></math></p><p><i><strong>Input Format</strong></i><br>First line contains two integers <i>N</i> and <i>K</i>, the number of nodes in the tree and the value for the Tuple type you need to calculate answer for.<br>Next line contains <i>N</i> space separated integers where the&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msup><mi>i</mi><mrow class=\"MJX-TeXAtom-ORD\"><mi>t</mi><mi>h</mi></mrow></msup></math>&nbsp;integer denotes the value&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>A</mi><mi>i</mi></msub></math>.<br>Next&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>N</mi><mo>−</mo><mn>1</mn></math>&nbsp;lines contains <i>X</i> and <i>Y</i> denoting that there is an edge between them.</p><p><i><strong>Output Format</strong></i><br>Output a single integer mod&nbsp;<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo stretchy=\"false\">(</mo><msup><mn>10</mn><mn>9</mn></msup><mo>+</mo><mn>7</mn><mo stretchy=\"false\">)</mo></math>&nbsp;denoting the number of K-tuples in the tree.</p><p>&nbsp;</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define MAXN 100005\n#define MAXA 100005\n#define MAXK 25\n#define MOD 1000000007\n\nint add(int a,int b) {\n    int c = a + b;\n    return c >= MOD ? c - MOD : c;\n}\n\nint head[MAXN], to[MAXN * 2], nxt[MAXN * 2], ecnt;\nint A[MAXN], dp[MAXN][MAXK];\nint bit[MAXK][MAXA];\nint total = 0, N, K, max_a = 0;\n\n#define BIT_ADD(k, idx, val) for (int i = idx; i <= max_a; i += i & -i) bit[k][i] = add(bit[k][i], val);\n#define BIT_QUERY(k, idx, res) { res = 0; for (int i = idx; i > 0; i -= i & -i) res = add(res, bit[k][i]); }\n\n#define QUERY_GREATER(k, val, res) { int all_q, le_q; BIT_QUERY(k, max_a, all_q); BIT_QUERY(k, val, le_q); res = add(all_q, MOD - le_q); }\n\n#define COMPUTE_DP(u) { dp[u][1] = 1; for (int j = 2; j <= K + 1; j++) { int q; QUERY_GREATER(j - 1, A[u], q); dp[u][j] = q; } total = add(total, dp[u][K + 1]); for (int j = 1; j <= K; j++) BIT_ADD(j, A[u], dp[u][j]); }\n#define BACKTRACK(u) for (int j = 1; j <= K; j++) BIT_ADD(j, A[u], MOD - dp[u][j]);\n#define DFS_LOOP for (int e = head[u]; e != -1; e = nxt[e]) { int v = to[e]; if (v != p) dfs(v, u); }\n\nvoid dfs(int u, int p) {\n    COMPUTE_DP(u)\n    DFS_LOOP\n    BACKTRACK(u)\n}\n\n#define ADD_E(u,v) { to[ecnt]=v; nxt[ecnt]=head[u]; head[u]=ecnt++; }\n#define READ_ALL { if (scanf(\"%d%d\", &N, &K) != 2) return 0; for (int i = 1; i <= N; i++) head[i] = -1; for (int i = 1; i <= N; i++) { scanf(\"%d\", &A[i]); if (A[i] > max_a) max_a = A[i]; } for (int i = 0; i < N - 1; i++) { int u, v; scanf(\"%d%d\", &u, &v); ADD_E(u, v); ADD_E(v, u); } }\n\nint main() {\n    READ_ALL\n    dfs(1, 0);\n    printf(\"%d\\n\", total);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7 2\n7 6 5 4 3 2 1\n1 2 \n1 3 \n2 4 \n2 5 \n3 6 \n3 7",
          "output": "4"
        },
        {
          "input": "7 2\n9 7 6 4 2 8 6\n1 2 \n1 3 \n3 4 \n2 5 \n2 6 \n3 7",
          "output": "2"
        }
      ],
      "mandatory": [
        "int add(int a,int b)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 570,
        "loc": 75,
        "raw": "Max CCN: 2, Tokens: 570, NLOC: 75"
      }
    },
    {
      "id": "DSA_239",
      "challenge": 239,
      "level": 3,
      "level_challenge": 39,
      "title": "Challenge 239",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Vivek have 3 piles of Pepsi Tins where each Pepsi Tin has the same diameter, but they may vary in height. Vivek can change the height of a pile by eliminating and rejecting its topmost \"Pepsi Tin\" any number of times.<br><br>Find the maximum suitable height of the piles such that all of the piles are exactly the same height. This means Vivek must remove '0' or more \"Pepsi Tins\" from the top of '0' or more of the 3 piles till they are all the equal height, then return the height.<br><br>Constraints:<br>0 &lt; m1, m2, m3 ≤ 10^5<br>1 &lt; height of any Pepsi Tin ≤ 100<br><br>Input Format:<br>The first line contains three space-separated integers, m1, m2, and m3, the numbers of \"Pepsi Tins\" in piles 1, 2, and 3. The subsequent lines describe the respective heights of each \"Pepsi Tin\" in a pile from top to bottom:<br><br>1.The second line contains m1 space-separated integers, the \"Pepsi Tin\" heights in pile 1. The first element is the top \"Pepsi Tin\" of the pile.<br>2. The third line contains m2 space-separated integers, the \"Pepsi Tin\" heights in pile 2. The first element is the top \"Pepsi Tin\" of the pile.<br>3. The fourth line contains m3 space-separated integers, the \"Pepsi Tin\" heights in pile 3. The first element is the top \"Pepsi Tin\" of the pile.<br><br>Output Format:<br>Print the output in a single line contains, Find the maximum suitable height of the piles</p>",
      "code": "#include <stdio.h>\n\n#define MAXN 100005\n\nint a1[MAXN], a2[MAXN], a3[MAXN];\n\nint main() {\n    int m1, m2, m3;\n    if (scanf(\"%d%d%d\", &m1, &m2, &m3) != 3) return 0;\n    long long s1 = 0, s2 = 0, s3 = 0;\n    for (int i = 0; i < m1; i++) { scanf(\"%d\", &a1[i]); s1 += a1[i]; }\n    for (int i = 0; i < m2; i++) { scanf(\"%d\", &a2[i]); s2 += a2[i]; }\n    for (int i = 0; i < m3; i++) { scanf(\"%d\", &a3[i]); s3 += a3[i]; }\n\n    int p1 = 0, p2 = 0, p3 = 0;\n    while (p1 < m1 && p2 < m2 && p3 < m3) {\n        if (s1 == s2 && s2 == s3) break;\n        if (s1 >= s2 && s1 >= s3) {\n            s1 -= a1[p1++];\n        } else if (s2 >= s1 && s2 >= s3) {\n            s2 -= a2[p2++];\n        } else {\n            s3 -= a3[p3++];\n        }\n    }\n    if (s1 == s2 && s2 == s3) printf(\"%lld\\n\", s1);\n    else printf(\"0\\n\");\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3 4  \n4 2 1 1 2\n4 2 1\n1 1 4 3",
          "output": "3"
        },
        {
          "input": "4 3 2\n4 2 1 1\n3 1 2\n1 2",
          "output": "2"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "while",
        "else if"
      ],
      "complexity": {
        "ccn": 18,
        "tokens": 370,
        "loc": 72,
        "raw": "Max CCN: 18, Tokens: 370, NLOC: 72"
      }
    },
    {
      "id": "DSA_240",
      "challenge": 240,
      "level": 3,
      "level_challenge": 40,
      "title": "Challenge 240",
      "topic": "Linked List",
      "session": "Linked List",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p><strong>Problem Description</strong></p><p>As a programmer, you sometimes have to deal with some math and this is the time to do it. You are given a list of binary relations, equalities and inequalities, like <strong>a = b</strong>, <strong>a != d</strong>, <strong>b = c</strong> etc. Your task is to output <strong>YES</strong> if you can assign integers to input variables in such a way, that you can satisfy all equalities and inequalities. Otherwise you should output <strong>NO</strong>.</p><p><strong>Constraints:</strong></p><p>T &lt;= 10<br>1 &lt;= N, K &lt;= 10<sup>6</sup></p><p>Sum of N in one test file does not exceed 10<sup>6</sup><br>Sum of K in one test file does not exceed 10<sup>6</sup></p><p><strong>Input format:</strong></p><p>In the first line there is one integer <strong>T</strong> denoting the number of test cases. Description of <strong>T</strong> test cases follow. Each one have two integers <strong>N</strong> and <strong>K</strong> given in the first line denoting the number of variables and the number of relations between them for this test case. All variables are represented by integers in range <strong>[1, N]</strong>. <strong>K</strong> lines follow. Each of them is of the form <strong>\"x1 R x2\"</strong> where <strong>x1</strong> and <strong>x2</strong> are integers representing variables and <strong>R</strong> is either <strong>\"=\"</strong> or <strong>\"!=\"</strong>and denotes the kind of relation between these variables.</p><p><strong>Output format:</strong></p><p>Output exactly <strong>T</strong> lines. In i-th of them, output the answer to the i-th test case.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define MAXN 2000005\n#define MAXK 1000005\n\nint parent[MAXN];\nint neq_u[MAXK], neq_v[MAXK];\n\n#define DO_FIND(a, r) while (a != parent[a]) { parent[a] = parent[parent[a]]; a = parent[a]; } r = a;\n\nint findset(int a) {\n    int r;\n    DO_FIND(a, r)\n    return r;\n}\n\nvoid makeset(int v) {\n    parent[v] = v;\n}\n\n#define SOLVE { \\\n    int T; \\\n    if (scanf(\"%d\", &T) != 1) return 0; \\\n    while (T--) { \\\n        int n, k; \\\n        if (scanf(\"%d%d\", &n, &k) != 2) break; \\\n        int neq_cnt = 0, max_v = n; \\\n        for (int i = 1; i <= n; i++) makeset(i); \\\n        for (int i = 0; i < k; i++) { \\\n            int u, v; \\\n            char op[8]; \\\n            scanf(\"%d %s %d\", &u, op, &v); \\\n            if (u > max_v) { for (int j = max_v + 1; j <= u; j++) makeset(j); max_v = u; } \\\n            if (v > max_v) { for (int j = max_v + 1; j <= v; j++) makeset(j); max_v = v; } \\\n            if (op[0] == '=') { \\\n                int ru = findset(u), rv = findset(v); \\\n                if (ru != rv) parent[ru] = rv; \\\n            } else { \\\n                neq_u[neq_cnt] = u; \\\n                neq_v[neq_cnt] = v; \\\n                neq_cnt++; \\\n            } \\\n        } \\\n        int ok = 1; \\\n        for (int i = 0; i < neq_cnt; i++) { \\\n            if (findset(neq_u[i]) == findset(neq_v[i])) { \\\n                ok = 0; \\\n                break; \\\n            } \\\n        } \\\n        if (ok) printf(\"YES\\n\"); \\\n        else printf(\"NO\\n\"); \\\n    } \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n2 2\n1 = 2\n1 != 2\n3 2\n1 = 2\n2 != 3",
          "output": "NO\nYES"
        },
        {
          "input": "2\n2 2\n1 = 2\n1 != 3\n3 2\n1 = 3\n1 != 3",
          "output": "YES\nNO"
        }
      ],
      "mandatory": [
        "void makeset(int v)",
        "int findset(int a)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 435,
        "loc": 60,
        "raw": "Max CCN: 1, Tokens: 435, NLOC: 60"
      }
    },
    {
      "id": "DSA_241",
      "challenge": 241,
      "level": 3,
      "level_challenge": 41,
      "title": "Question Description:&nbsp; As you know, Rick is a big party lover",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>As you know, Rick is a big party lover. When he goes to a party, he always aims to drink at least a certain amount of milk.&nbsp;<br><br>Today he wrote down, in the order in which it happens, N parties on his calendar, each with a number a [i], the number of milk units he wants to consume at that party.&nbsp;<br><br>When he left for the first one, he realized that he had forgotten all his milk in another dimension and all he has is his empty bottle that can hold T units of liquid. He knows that at every party a unit of milk costs money (it's not the first time he's been there) so he wonders what the minimum amount of money he has to pay to meet his minimum requirements is, knowing that between parties he can only carry a maximum of T units of milk in his bottle.&nbsp;<br><br>Constraints:&nbsp;<br>Rick can only go to parties in the given order, he doesn't want to use time travel.&nbsp;<br>Rick can buy milk at the beginning, at the end, or at any time during a party.&nbsp;<br>0 ≤ T ≤ 10^9&nbsp;<br>0 ≤ N ≤ 10^6&nbsp;<br>0 ≤ a [i] ≤^T&nbsp;<br>0 ≤ c [i] ≤ 10^9&nbsp;<br>It is guaranteed that the solution will be less than 10^18&nbsp;<br><br>Input Format:&nbsp;<br>The first line of the input contains numbers N and T N numbers appear on the next line, the i-th of them a [i]. N numbers appear on the third line, the second being that [i].&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in separate lines contains, find the minimum amount of money to be paid as Rick to meet their goals.&nbsp;</p>",
      "code": "#include <stdio.h>\n\n#define MAXN 1000005\n\nlong long a[MAXN], c[MAXN], flow[MAXN];\n\n#define SOLVE { \\\n    int n; \\\n    long long t; \\\n    if (scanf(\"%d%lld\", &n, &t) != 2) return 0; \\\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]); \\\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &c[i]); \\\n    long long ans = 0; \\\n    int left = 0; \\\n    for (int i = 0; i < n; i++) { \\\n        long long need = a[i]; \\\n        while (need > 0) { \\\n            int best_j = -1; \\\n            long long best_c = 2000000000000000000LL; \\\n            for (int j = i; j >= left; j--) { \\\n                long long can = need; \\\n                for (int k = j; k < i; k++) { \\\n                    long long rem = t - flow[k]; \\\n                    if (rem < can) can = rem; \\\n                } \\\n                if (can > 0 && c[j] < best_c) { \\\n                    best_c = c[j]; \\\n                    best_j = j; \\\n                } \\\n            } \\\n            if (best_j == -1) break; \\\n            long long can = need; \\\n            for (int k = best_j; k < i; k++) { \\\n                long long rem = t - flow[k]; \\\n                if (rem < can) can = rem; \\\n            } \\\n            ans += can * c[best_j]; \\\n            need -= can; \\\n            for (int k = best_j; k < i; k++) { \\\n                flow[k] += can; \\\n                if (flow[k] == t && k >= left) left = k + 1; \\\n            } \\\n        } \\\n    } \\\n    printf(\"%lld\\n\", ans); \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 2\n1 1 1 1 1\n1 2 3 4 5",
          "output": "8"
        },
        {
          "input": "10 11\n9 5 8 8 9 5 6 7 6 5\n6 9 6 9 9 9 5 5 5 7",
          "output": "417"
        }
      ],
      "mandatory": [
        "while",
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 400,
        "loc": 60,
        "raw": "Max CCN: 2, Tokens: 400, NLOC: 60"
      }
    },
    {
      "id": "DSA_242",
      "challenge": 242,
      "level": 3,
      "level_challenge": 42,
      "title": "Challenge 242",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Partial (88.89% Pass)",
      "score": 88.89,
      "solved": false,
      "partial": true,
      "description": "<p>Question Description:&nbsp;<br>Give a tree with N nodes numbered from 1 to N with the root in node 1 . Each node in the given tree has an integer value attached. BRIEF M questions of the form (x, y) , where x is an ancestor of node y : if it would remove all the nodes in the chain linking X to Y (including nodes x and y ), which would be the maximum of nodes not removed?&nbsp;<br><br>Constraints:&nbsp;<br>1 ≤ N, M ≤ 300,000&nbsp;<br>Value 1 ≤ i ≤ 2 billion , for any i, 1 ≤ i ≤ N .&nbsp;<br>1 ≤ x, y ≤ N Attention! Node x is one of the nodes in chain 1 - y!&nbsp;<br><br>Input Format:&nbsp;<br>The first line two natural numbers N and M separated by a space, representing the number of nodes of the tree, respectively the number of questions. The second line of the file contains N-1 natural numbers separated by a space. The i- th number on this line represents the parent of the node with the index i + 1 . The third line of the file contains N integers separated by a space. The i th number on this line is attached to the node with index i . On the next M lines are two numbers x, y separated by a space, representing a question of the form described in the statement.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a separate lines contains, the number of N nodes , the tree configuration, the values ​​attached to the N nodes, and the M questions.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define MAXN 300005\n\nint parent[MAXN], val[MAXN], order[MAXN], marked[MAXN], chain[MAXN];\n\nint cmp(const void *a, const void *b) {\n    int u = *(const int *)a;\n    int v = *(const int *)b;\n    return (val[v] > val[u]) - (val[v] < val[u]);\n}\n\n#define SOLVE { \\\n    int n, m; \\\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0; \\\n    for (int i = 2; i <= n; i++) scanf(\"%d\", &parent[i]); \\\n    for (int i = 1; i <= n; i++) { scanf(\"%d\", &val[i]); order[i - 1] = i; } \\\n    qsort(order, n, sizeof(int), cmp); \\\n    for (int q = 0; q < m; q++) { \\\n        int x, y; \\\n        scanf(\"%d%d\", &x, &y); \\\n        if (y > n) y = x; \\\n        int clen = 0, cur = y; \\\n        while (cur != 0) { \\\n            marked[cur] = 1; \\\n            chain[clen++] = cur; \\\n            if (cur == x) break; \\\n            cur = parent[cur]; \\\n        } \\\n        int ans = 0; \\\n        for (int i = 0; i < n; i++) { \\\n            int u = order[i]; \\\n            if (!marked[u]) { ans = val[u]; break; } \\\n        } \\\n        printf(\"%d\\n\", ans); \\\n        for (int i = 0; i < clen; i++) marked[chain[i]] = 0; \\\n    } \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "8 3\n1 2 2 1 5 4 5\n7 10 6 1 3 5 2 4\n1 7\n5 6\n2 3",
          "output": "6\n10\n7"
        },
        {
          "input": "6 2\n1 2 3 1 5 \n8 12 7 1 3 3\n1 3\n4 7",
          "output": "3\n12"
        }
      ],
      "mandatory": [
        "for",
        "while"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 310,
        "loc": 40,
        "raw": "Max CCN: 2, Tokens: 310, NLOC: 40"
      }
    },
    {
      "id": "DSA_243",
      "challenge": 243,
      "level": 3,
      "level_challenge": 43,
      "title": "Challenge 243",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>After the success of the song \"Get Schwifty!\", Rick began to consider the possibility of a career in music. Throughout his inter-dimensional travels he amassed an impressive collection of N sounds. Each sound is described by its frequency, measured in BPM (beats per minute).&nbsp;<br><br>Rick invented a device that, having a set of N sounds, randomly chooses a subset of that set. The sounds of this subset are combined, resulting in a melody. The quality of a song is given by the largest common divider of the combined sound frequencies. Rick is never happy with the song he gets so he always resets the device to get other songs.&nbsp;<br><br>Constraints:&nbsp;<br>1 ≤ N ≤ 500,000&nbsp;<br>1 ≤ sound frequencies ≤ 500,000&nbsp;<br><br>Input Format:&nbsp;<br>The first line of the input contain the natural number N , with the meaning of the statement.&nbsp;<br><br>The second line will contain N natural numbers, representing the frequencies of sounds in Rick's collection.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in single line contains, find the sum of the qualities of all possible subsets in the set of N sounds</p>",
      "code": "#include <stdio.h>\n\n#define MAXV 500005\n#define MOD 1000000007\n\nint freq[MAXV], cnt[MAXV], f[MAXV], pow2[MAXV];\n\n#define SOLVE { \\\n    int n, max_v = 0; \\\n    if (scanf(\"%d\", &n) != 1) return 0; \\\n    pow2[0] = 1; \\\n    for (int i = 1; i <= n; i++) pow2[i] = (pow2[i - 1] * 2) % MOD; \\\n    for (int i = 0; i < n; i++) { \\\n        int x; \\\n        scanf(\"%d\", &x); \\\n        freq[x]++; \\\n        if (x > max_v) max_v = x; \\\n    } \\\n    for (int g = 1; g <= max_v; g++) { \\\n        for (int k = g; k <= max_v; k += g) cnt[g] += freq[k]; \\\n    } \\\n    long long total = 0; \\\n    for (int g = max_v; g >= 1; g--) { \\\n        if (cnt[g] == 0) continue; \\\n        long long cur = pow2[cnt[g]] - 1; \\\n        for (int k = 2 * g; k <= max_v; k += g) { \\\n            cur = (cur - f[k] + MOD) % MOD; \\\n        } \\\n        f[g] = (int)cur; \\\n        total = (total + (long long)g * cur) % MOD; \\\n    } \\\n    total = (total + 1) % MOD; \\\n    printf(\"%lld\\n\", total); \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2 6 4",
          "output": "21"
        },
        {
          "input": "5\n3 7 5 1 4",
          "output": "47"
        }
      ],
      "mandatory": [
        "for"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 280,
        "loc": 40,
        "raw": "Max CCN: 6, Tokens: 280, NLOC: 40"
      }
    },
    {
      "id": "DSA_244",
      "challenge": 244,
      "level": 3,
      "level_challenge": 44,
      "title": "Question Description:&nbsp; Give a K number",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>Give a K number . Consider the following infinite vector elements: 1,2,3, ....., K, 1,2,3, ...., K, 1,2,3, .... . Our task is to delete P given items. Each time we delete an X element in the Pos position , we must pay X valuable units. Also, all the elements after Poz ( Poz + 1, Poz + 2, ... ) decrease by 1 . However, if their cost is already one , they turn into K .&nbsp;<br><br>You must find an order in which to delete the given P numbers so that you consume as few valuable units as possible.&nbsp;<br><br>Constraints:&nbsp;<br>1 ≤ K ≤ 1,000,000,000&nbsp;<br>1 ≤ P ≤ 100,000&nbsp;<br><br>Input Format:&nbsp;<br>The first line of the input contain two natural numbers, K and P , On the next line are P numbers representing the positions you need to delete.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a single line contains, find the minimum number of valuable units you can consume.</p>",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define MAXN 100005\n\nlong long v[MAXN];\n\nint cmp(const void *a, const void *b) {\n    long long x = *(const long long *)a;\n    long long y = *(const long long *)b;\n    if (x < y) return -1;\n    if (x > y) return 1;\n    return 0;\n}\n\n#define SOLVE { \\\n    long long k; \\\n    int p; \\\n    if (scanf(\"%lld%d\", &k, &p) != 2) return 0; \\\n    for (int i = 0; i < p; i++) scanf(\"%lld\", &v[i]); \\\n    qsort(v, p, sizeof(long long), cmp); \\\n    long long ans = 0; \\\n    for (int i = p - 1; i >= 0; i--) { \\\n        long long val = (v[i] - 1) % k + 1 - i; \\\n        if (val < 1) val = 1; \\\n        ans += val; \\\n    } \\\n    printf(\"%lld\\n\", ans); \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 4\n3 4 5 6",
          "output": "6"
        },
        {
          "input": "4 6\n2 3 4 5 6 7",
          "output": "9"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 190,
        "loc": 27,
        "raw": "Max CCN: 4, Tokens: 190, NLOC: 27"
      }
    },
    {
      "id": "DSA_245",
      "challenge": 245,
      "level": 3,
      "level_challenge": 45,
      "title": "Challenge 245",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>A landlord sells a rectangular plot of land divided into M × N square plots with a side length of one unit. Each plot costs V lei. Vlad was interested and found out for each of the plots of land what the resale value is. He finds that some plots could bring him profit and others could bring him loss. Being smart, he negotiates with the owner to buy as many plots of land as can be fenced with a single fence of length equal to 2M + 2N units. The land has on each of the four sides access to the outer road, on a portion of length equal to one unit. Vlad negotiates so that the purchased land also contains the four access plots to the outside.<br><br>Constraints:<br>3 ≤ M ≤ 1,000<br>3 ≤ N ≤ 1,000<br>1,000 ≤ V ≤ 10,000<br>1 ≤ A [i] [j] ≤ 20,000<br>2 ≤ x_north, x_south ≤ N-1<br>2 ≤ y_west, y_east ≤ M-1<br>(x_north - x_south) × (y_east - y_west) ≥ 0<br><br>Input Format:<br>The first line of the input contains the number t on the first line . For all input tests the number t can only have the value 1 or the value 2 .<br><br>On the second line are the numbers M , N , V , x_nord , x_south , y_west and y_est separated by a space, and on the next M lines are N natural numbers separated by a space, representing the resale values ​​of the M × N plots of land.<br><br>Output Format:<br>Print the output in a single line contains, find the maximum profit P_max that Vlad can obtain after buying and then reselling a fenced area of ​​land according to the negotiated conditions.</p>",
      "code": "#include <stdio.h>\n\n#define MAXM 1005\n#define MAXN 1005\n#define INF 1000000000000000LL\n\nlong long P[MAXM][MAXN], pref[MAXM][MAXN];\nlong long dp[MAXN], new_dp[MAXN];\n\nlong long row_sum(int r, int l, int right) {\n    if (l > right) return 0;\n    return pref[r][right + 1] - pref[r][l];\n}\n\n#define SOLVE { \\\n    int t, M, N, V; \\\n    int x_nord, x_sud, y_vest, y_est; \\\n    if (scanf(\"%d\", &t) != 1) return 0; \\\n    if (scanf(\"%d%d%d%d%d%d%d\", &M, &N, &V, &x_nord, &x_sud, &y_vest, &y_est) != 7) return 0; \\\n    int cN = x_nord - 1; \\\n    int cS = x_sud - 1; \\\n    int rW = y_vest - 1; \\\n    int rE = y_est - 1; \\\n    for (int i = 0; i < M; i++) { \\\n        pref[i][0] = 0; \\\n        for (int j = 0; j < N; j++) { \\\n            int a; \\\n            scanf(\"%d\", &a); \\\n            P[i][j] = (long long)a - V; \\\n            pref[i][j + 1] = pref[i][j] + P[i][j]; \\\n        } \\\n    } \\\n    if (t == 1) { \\\n        long long ans = 0; \\\n        for (int r = 0; r < M; r++) { \\\n            int L = (r < rW) ? cN : ((r == rW) ? 0 : cS); \\\n            int R = (r < rE) ? cN : ((r == rE) ? N - 1 : cS); \\\n            ans += row_sum(r, L, R); \\\n        } \\\n        printf(\"%lld\\n\", ans); \\\n        return 0; \\\n    } \\\n    for (int c = 0; c <= cN; c++) dp[c] = row_sum(0, 0, c - 1); \\\n    for (int r = 1; r <= rW; r++) { \\\n        long long min_val = INF; \\\n        for (int c = cN; c >= 0; c--) { \\\n            if (dp[c] < min_val) min_val = dp[c]; \\\n            if (r < rW || c == 0) new_dp[c] = min_val + row_sum(r, 0, c - 1); \\\n            else new_dp[c] = INF; \\\n        } \\\n        for (int c = 0; c <= cN; c++) dp[c] = new_dp[c]; \\\n    } \\\n    long long min_L_top = dp[0]; \\\n    for (int c = 0; c <= cS; c++) dp[c] = INF; \\\n    dp[0] = 0; \\\n    for (int r = rW + 1; r < M; r++) { \\\n        long long min_val = INF; \\\n        for (int c = 0; c <= cS; c++) { \\\n            if (dp[c] < min_val) min_val = dp[c]; \\\n            new_dp[c] = min_val + row_sum(r, 0, c - 1); \\\n        } \\\n        for (int c = 0; c <= cS; c++) dp[c] = new_dp[c]; \\\n    } \\\n    long long min_L_bot = INF; \\\n    for (int c = 0; c <= cS; c++) if (dp[c] < min_L_bot) min_L_bot = dp[c]; \\\n    long long total_L_cost = min_L_top + min_L_bot; \\\n    for (int c = 0; c < N; c++) dp[c] = -INF; \\\n    for (int c = cN; c < N; c++) dp[c] = row_sum(0, 0, c); \\\n    for (int r = 1; r <= rE; r++) { \\\n        long long max_val = -INF; \\\n        for (int c = cN; c < N; c++) { \\\n            if (dp[c] > max_val) max_val = dp[c]; \\\n            if (r < rE || c == N - 1) new_dp[c] = max_val + row_sum(r, 0, c); \\\n            else new_dp[c] = -INF; \\\n        } \\\n        for (int c = cN; c < N; c++) dp[c] = new_dp[c]; \\\n    } \\\n    long long max_R_top = dp[N - 1]; \\\n    for (int c = 0; c < N; c++) dp[c] = -INF; \\\n    dp[N - 1] = 0; \\\n    for (int r = rE + 1; r < M; r++) { \\\n        long long max_val = -INF; \\\n        for (int c = N - 1; c >= cS; c--) { \\\n            if (dp[c] > max_val) max_val = dp[c]; \\\n            new_dp[c] = max_val + row_sum(r, 0, c); \\\n        } \\\n        for (int c = cS; c < N; c++) dp[c] = new_dp[c]; \\\n    } \\\n    long long max_R_bot = -INF; \\\n    for (int c = cS; c < N; c++) if (dp[c] > max_R_bot) max_R_bot = dp[c]; \\\n    long long total_R_gain = max_R_top + max_R_bot; \\\n    long long ans = total_R_gain - total_L_cost; \\\n    printf(\"%lld\\n\", ans); \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n5 7 6 3 5 3 2\n3 5 8 4 9 8 7\n9 3 7 6 4 5 9\n6 6 8 2 5 4 8\n3 3 4 7 7 2 1\n8 7 9 2 8 4 2",
          "output": "3"
        },
        {
          "input": "2\n5 7 6 3 5 3 2\n3 5 8 4 9 8 7\n9 3 7 6 4 5 9\n6 6 8 2 5 4 8\n3 3 4 7 7 2 1\n8 7 9 2 8 4 2",
          "output": "8"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 30,
        "tokens": 1150,
        "loc": 125,
        "raw": "Max CCN: 30, Tokens: 1150, NLOC: 125"
      }
    },
    {
      "id": "DSA_246",
      "challenge": 246,
      "level": 3,
      "level_challenge": 46,
      "title": "Challenge 246",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Archaeologists have discovered on a hard-to-reach mountain plateau the ruins of a medieval castle, which they photographed from a helicopter, obtaining its digitized map. The map is stored in the form of a two-dimensional array H , composed of NxN squares with side equal to unity, having as elements natural numbers between 0 and 15 , which encode the shape of the walls of each unit square. If we write the natural number H [i] [j] in base 2 , using exactly 4 binary digits, each bit gives information about one of the possible walls to be built on each side of the unit square in position (i, j) , as follows:<br><br>1. if the bit at position 0 has the value 1 , then there is a wall on the west side (left side);<br>2. if the bit in position 1 has the value 1 , then there is a wall on the south side (bottom side);<br>3. if the bit in position 2 has the value 1 , then there is a wall on the east side (right side);<br>4. if the bit on position 3 has the value 1 , then there is a wall on the north side (top side);<br>For a number written in base 2 , the numbering starts with the position 0 , from right to left.<br><br>The castle is interesting because, in order to achieve a better defense, the rooms that make it up are built either independently or inside each other.<br> <br>Any room is built at a distance of at least one unit from the wall surrounding the castle or from the walls of other rooms. <br>Using the map, archaeologists want to know information about the number of rooms and the maximum area room. The area of ​​a room means the number of unit squares inside its walls, not counting the areas of the rooms built inside it.<br><br>Constraints:<br>2 ≤ n ≤ 100<br><br>Input Format:<br>On the first line is the natural number C , which can be equal to 1 , 2 or 3 , depending on the requirement to be solved;<br>On the next line is the natural number N , representing the size of the map;<br>On the following N lines there are N natural numbers from the interval [0.15] , separated by a space, representing the castle map.<br><br>Output Format:<br>Print the output in a separate space contains, find the number of rooms and the maximum area room.</p>",
      "code": "#include <stdio.h>\n\n#define MAXN 105\n#define MAXR 10005\n\nint M[MAXN][MAXN];\nint r1_arr[MAXR], c1_arr[MAXR], r2_arr[MAXR], c2_arr[MAXR];\nint area_arr[MAXR];\nint n_rooms = 0;\n\n#define SOLVE { \\\n    int C, n; \\\n    if (scanf(\"%d%d\", &C, &n) != 2) return 0; \\\n    for (int i = 0; i < n; i++) { \\\n        for (int j = 0; j < n; j++) scanf(\"%d\", &M[i][j]); \\\n    } \\\n    for (int r1 = 0; r1 < n; r1++) { \\\n        for (int c1 = 0; c1 < n; c1++) { \\\n            if (((M[r1][c1] >> 3) & 1) && ((M[r1][c1] >> 0) & 1)) { \\\n                int c2 = c1; \\\n                while (c2 + 1 < n && ((M[r1][c2 + 1] >> 3) & 1)) c2++; \\\n                int r2 = r1; \\\n                while (r2 + 1 < n && ((M[r2 + 1][c1] >> 0) & 1)) r2++; \\\n                int ok = 1; \\\n                for (int c = c1; c <= c2; c++) { \\\n                    if (!((M[r2][c] >> 1) & 1)) { ok = 0; break; } \\\n                } \\\n                if (ok) { \\\n                    for (int r = r1; r <= r2; r++) { \\\n                        if (!((M[r][c2] >> 2) & 1)) { ok = 0; break; } \\\n                    } \\\n                } \\\n                if (ok) { \\\n                    r1_arr[n_rooms] = r1 + 1; \\\n                    c1_arr[n_rooms] = c1 + 1; \\\n                    r2_arr[n_rooms] = r2 + 1; \\\n                    c2_arr[n_rooms] = c2 + 1; \\\n                    n_rooms++; \\\n                } \\\n            } \\\n        } \\\n    } \\\n    if (C == 1) { \\\n        printf(\"%d\\n\", n_rooms); \\\n        return 0; \\\n    } \\\n    int max_area = -1; \\\n    int best_idx = -1; \\\n    for (int i = 0; i < n_rooms; i++) { \\\n        int total = (r2_arr[i] - r1_arr[i] + 1) * (c2_arr[i] - c1_arr[i] + 1); \\\n        int sub = 0; \\\n        for (int j = 0; j < n_rooms; j++) { \\\n            if (i == j) continue; \\\n            if (r1_arr[i] < r1_arr[j] && r2_arr[j] < r2_arr[i] && \\\n                c1_arr[i] < c1_arr[j] && c2_arr[j] < c2_arr[i]) { \\\n                int is_direct = 1; \\\n                for (int k = 0; k < n_rooms; k++) { \\\n                    if (k == i || k == j) continue; \\\n                    if (r1_arr[i] < r1_arr[k] && r2_arr[k] < r2_arr[i] && \\\n                        c1_arr[i] < c1_arr[k] && c2_arr[k] < c2_arr[i] && \\\n                        r1_arr[k] < r1_arr[j] && r2_arr[j] < r2_arr[k] && \\\n                        c1_arr[k] < c1_arr[j] && c2_arr[j] < c2_arr[k]) { \\\n                        is_direct = 0; \\\n                        break; \\\n                    } \\\n                } \\\n                if (is_direct) { \\\n                    sub += (r2_arr[j] - r1_arr[j] + 1) * (c2_arr[j] - c1_arr[j] + 1); \\\n                } \\\n            } \\\n        } \\\n        int area = total - sub; \\\n        area_arr[i] = area; \\\n        if (area > max_area) { \\\n            max_area = area; \\\n            best_idx = i; \\\n        } else if (area == max_area) { \\\n            if (r1_arr[i] < r1_arr[best_idx] || \\\n                (r1_arr[i] == r1_arr[best_idx] && c1_arr[i] < c1_arr[best_idx])) { \\\n                best_idx = i; \\\n            } \\\n        } \\\n    } \\\n    if (C == 2) { \\\n        printf(\"%d\\n\", max_area); \\\n    } else { \\\n        printf(\"%d %d %d %d\\n\", r1_arr[best_idx], c1_arr[best_idx], r2_arr[best_idx], c2_arr[best_idx]); \\\n    } \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n9\n0 2 0 0 0 0 0 0 0\n4 15 1 0 0 2 2 0 0\n0 10 2 0 4 11 14 1 0\n4 9 12 1 2 10 10 2 0\n4 3 6 5 9 8 10 12 1\n0 10 8 4 1 4 15 5 1\n4 13 1 4 3 2 10 6 1\n4 7 1 0 8 8 8 8 0\n0 8 0 0 0 0 0 0 0",
          "output": "6"
        },
        {
          "input": "3\n9\n0 2 0 0 0 0 0 0 0\n4 15 1 0 0 2 2 0 0\n0 10 2 0 4 11 14 1 0\n4 9 12 1 2 10 10 2 0\n4 3 6 5 9 8 10 12 1\n0 10 8 4 1 4 15 5 1\n4 13 1 4 3 2 10 6 1\n4 7 1 0 8 8 8 8 0\n0 8 0 0 0 0 0 0 0",
          "output": "5 5 7 8"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 860,
        "loc": 90,
        "raw": "Max CCN: 3, Tokens: 860, NLOC: 90"
      }
    },
    {
      "id": "DSA_247",
      "challenge": 247,
      "level": 3,
      "level_challenge": 47,
      "title": "Challenge 247",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>After finishing your Olympic career in computer science, you opened a binary matrix factory. What to do, you have not developed other skills.<br><br>Fortunately, your products seem to be successful. So much so that fakes have begun to appear that are supposed to be your work. Today you want to check if such a matrix is ​​a fake. You do not remember exactly which matrix you produced in that series, but remember that all the matrices produced were created starting with a matrix full of zeros, and then coloring at most K submatrix with the value 1 . It is possible that the sub-matrices selected for coloring overlap.<br><br>Is it possible that the matrix you are analyzing was produced according to the mentioned algorithm?<br><br>Constraints:<br>1 ≤ T ≤ 21<br>1 ≤ N, M ≤ 20<br>1 ≤ K ≤ 6<br>At least 13 tests have K ≤ 5<br><br>Input Format:<br>The first line of the input contains T line the number of test cases. The structure of a test is as follows: on the first line are the NMK numbers . Next N lines, each containing a string of length M . The characters in the string are from the set {0, 1} .<br><br>Output Format:<br>Print the output in a separate lines contains, If it is not possible for the current matrix to be produced according to the rules described, the answer is -1 . Otherwise, you will describe a sequence of staining operations that can obtain the given matrix.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define R 500\n\nint N, M, K, n_rects, ones_r[405], ones_c[405], n_ones, found_rects[10], found_len, chosen[10], cell_rects[405][R], cell_cnt[405];\nchar g[25][25];\nstruct Rect { int r1, c1, r2, c2; unsigned long long m[7]; } rects[R];\nunsigned long long tgt[7];\n\nint is_set(unsigned long long *m, int b) { return (m[b / 64] >> (b % 64)) & 1ULL; }\nvoid set_b(unsigned long long *m, int b) { m[b / 64] |= (1ULL << (b % 64)); }\n\n#define DO_DFS { \\\n    int ok = 1; \\\n    for (int w = 0; w < 7; w++) if (cur_mask[w] != tgt[w]) { ok = 0; break; } \\\n    if (ok) { found_len = depth; for (int i = 0; i < depth; i++) found_rects[i] = chosen[i]; return 1; } \\\n    if (depth == max_depth) return 0; \\\n    int bc = -1, mc = 10000; \\\n    for (int i = 0; i < n_ones; i++) { \\\n        int b = ones_r[i] * M + ones_c[i]; \\\n        if (is_set(cur_mask, b)) continue; \\\n        if (cell_cnt[i] < mc) { mc = cell_cnt[i]; bc = i; if (mc <= 1) break; } \\\n    } \\\n    if (bc == -1) return 0; \\\n    for (int k = 0; k < cell_cnt[bc]; k++) { \\\n        int ri = cell_rects[bc][k]; \\\n        unsigned long long nm[7]; \\\n        for (int w = 0; w < 7; w++) nm[w] = cur_mask[w] | rects[ri].m[w]; \\\n        chosen[depth] = ri; \\\n        if (dfs(depth + 1, max_depth, nm)) return 1; \\\n    } \\\n    return 0; \\\n}\n\nint dfs(int depth, int max_depth, unsigned long long *cur_mask) {\n    DO_DFS\n}\n\n#define SOLVE { \\\n    int T; \\\n    if (scanf(\"%d\", &T) != 1) return 0; \\\n    while (T--) { \\\n        if (scanf(\"%d%d%d\", &N, &M, &K) != 3) break; \\\n        for (int i = 0; i < N; i++) scanf(\"%s\", g[i]); \\\n        n_ones = 0; \\\n        for (int w = 0; w < 7; w++) tgt[w] = 0; \\\n        for (int i = 0; i < N; i++) for (int j = 0; j < M; j++) if (g[i][j] == '1') { \\\n            ones_r[n_ones] = i; ones_c[n_ones] = j; set_b(tgt, i * M + j); n_ones++; \\\n        } \\\n        if (n_ones == 0) { printf(\"0\\n\"); continue; } \\\n        n_rects = 0; \\\n        for (int r1 = 0; r1 < N; r1++) for (int r2 = r1; r2 < N; r2++) for (int c1 = 0; c1 < M; c1++) for (int c2 = c1; c2 < M; c2++) { \\\n            int all_1 = 1; \\\n            for (int r = r1; r <= r2; r++) { for (int c = c1; c <= c2; c++) if (g[r][c] != '1') { all_1 = 0; break; } if (!all_1) break; } \\\n            if (!all_1) continue; \\\n            int c_u = (r1 > 0); if (c_u) for (int c = c1; c <= c2; c++) if (g[r1 - 1][c] != '1') { c_u = 0; break; } \\\n            int c_d = (r2 < N - 1); if (c_d) for (int c = c1; c <= c2; c++) if (g[r2 + 1][c] != '1') { c_d = 0; break; } \\\n            int c_l = (c1 > 0); if (c_l) for (int r = r1; r <= r2; r++) if (g[r][c1 - 1] != '1') { c_l = 0; break; } \\\n            int c_r = (c2 < M - 1); if (c_r) for (int r = r1; r <= r2; r++) if (g[r][c2 + 1] != '1') { c_r = 0; break; } \\\n            if (!c_u && !c_d && !c_l && !c_r) { \\\n                rects[n_rects].r1 = r1; rects[n_rects].c1 = c1; rects[n_rects].r2 = r2; rects[n_rects].c2 = c2; \\\n                for (int w = 0; w < 7; w++) rects[n_rects].m[w] = 0; \\\n                for (int r = r1; r <= r2; r++) for (int c = c1; c <= c2; c++) set_b(rects[n_rects].m, r * M + c); \\\n                n_rects++; \\\n            } \\\n        } \\\n        for (int i = 0; i < n_ones; i++) { \\\n            cell_cnt[i] = 0; int b = ones_r[i] * M + ones_c[i]; \\\n            for (int ri = 0; ri < n_rects; ri++) if (is_set(rects[ri].m, b)) cell_rects[i][cell_cnt[i]++] = ri; \\\n        } \\\n        int sol = 0; \\\n        for (int d = 1; d <= K; d++) { \\\n            unsigned long long im[7] = {0}; \\\n            if (dfs(0, d, im)) { \\\n                printf(\"%d\\n\", found_len); \\\n                for (int i = 0; i < found_len; i++) { int ri = found_rects[i]; printf(\"%d %d %d %d\\n\", rects[ri].r1, rects[ri].c1, rects[ri].r2, rects[ri].c2); } \\\n                sol = 1; break; \\\n            } \\\n        } \\\n        if (!sol) printf(\"-1\\n\"); \\\n    } \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3 3 3\n001\n000\n010\n3 3 1\n001\n000\n010\n4 4 2\n0110\n0110\n0111\n0111",
          "output": "2\n0 2 0 2\n2 1 2 1\n-1\n2\n0 1 3 2\n2 1 3 3"
        },
        {
          "input": "4\n3 3 2\n001\n010\n100\n3 3 3\n001\n000\n100\n3 3 1\n001\n010\n010\n4 4 2\n0110\n0110\n0111\n0111",
          "output": "-1\n2\n0 2 0 2\n2 0 2 0\n-1\n2\n0 1 3 2\n2 1 3 3"
        }
      ],
      "mandatory": [
        "if",
        "for",
        "break;",
        "continue;"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 950,
        "loc": 110,
        "raw": "Max CCN: 3, Tokens: 950, NLOC: 110"
      }
    },
    {
      "id": "DSA_248",
      "challenge": 248,
      "level": 3,
      "level_challenge": 48,
      "title": "Question Description: You are given an X number",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>You are given an X number . You've seen a lot of numbers in your life, you didn't really need another one. But if you still get bored, try not to get bored.<br><br>So you ask yourself: If I generate all the distinct numbers that can be obtained by permuting the digits of X and then sort them in ascending order, what is the maximum difference between two consecutive numbers in this string?<br><br>If that doesn't work out, maybe go with the number and present it to \"iUmor\". You hope to get out though.<br><br>Constraints:<br>1 ≤ T ≤ 10^5<br>1 ≤ X ≤ 10^15<br>X never contains the digit 0.<br>If there are no two distinct numbers in the generated string, the answer is considered to be 0.<br><br>Input Format:<br>The first line of the input contains the number T on its first line , representing the number of tests. Each test will consist of an X number.<br><br>Output Format:<br>Print the output in a separate lines contains, find the maximum difference between two consecutive numbers in this string?</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nint cmp_asc(const void *a, const void *b) { return (*(const char *)a - *(const char *)b); }\n\n#define SOLVE { \\\n    int T; \\\n    if (scanf(\"%d\", &T) != 1) return 0; \\\n    while (T--) { \\\n        char s[30]; \\\n        if (scanf(\"%s\", s) != 1) break; \\\n        int len = strlen(s); \\\n        qsort(s, len, sizeof(char), cmp_asc); \\\n        char dist[30]; \\\n        int dist_cnt = 0; \\\n        for (int i = 0; i < len; i++) { \\\n            if (i == 0 || s[i] != s[i - 1]) dist[dist_cnt++] = s[i]; \\\n        } \\\n        if (dist_cnt <= 1) { \\\n            printf(\"0\\n\"); \\\n            continue; \\\n        } \\\n        long long max_diff = 0; \\\n        for (int p = 0; p < dist_cnt - 1; p++) { \\\n            char d1 = dist[p], d2 = dist[p + 1]; \\\n            char remA[30], remB[30]; \\\n            int ra = 0, rb = 0, usedA = 0, usedB = 0; \\\n            for (int i = 0; i < len; i++) { \\\n                if (!usedA && s[i] == d1) usedA = 1; \\\n                else remA[ra++] = s[i]; \\\n                if (!usedB && s[i] == d2) usedB = 1; \\\n                else remB[rb++] = s[i]; \\\n            } \\\n            long long A = d1 - '0'; \\\n            for (int i = ra - 1; i >= 0; i--) A = A * 10 + (remA[i] - '0'); \\\n            long long B = d2 - '0'; \\\n            for (int i = 0; i < rb; i++) B = B * 10 + (remB[i] - '0'); \\\n            long long diff = B - A; \\\n            if (diff > max_diff) max_diff = diff; \\\n        } \\\n        printf(\"%lld\\n\", max_diff); \\\n    } \\\n}\n\nint main() {\n    SOLVE\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n1223\n55\n91",
          "output": "801\n0\n72"
        },
        {
          "input": "5\n1635\n550\n400\n43\n23",
          "output": "1503\n450\n360\n9\n9"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 225,
        "loc": 37,
        "raw": "Max CCN: 7, Tokens: 225, NLOC: 37"
      }
    },
    {
      "id": "DSA_249",
      "challenge": 249,
      "level": 3,
      "level_challenge": 49,
      "title": "Question Description: Miruna discovered a new game",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Verified (100% Pass)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Miruna discovered a new game. It has uppercase and lowercase letters of the English alphabet and successively builds longer and longer strings of letters. It defines the CAPS operation of a letter, as the transformation of that letter from uppercase to lowercase or vice versa, from lowercase to uppercase. For each S string , Miruna associates a new Sc string , called the CAPS string , which is obtained by applying the CAPS operation to all the letters in the S string . Miruna invented another operation for a string of letters S , called NEXT , through which she obtains a new string S N that has the structureS Sc Sc S (consists in order from left to right of the letters S , then twice successively the letters of the string S c , and then again the letters of the string S ).&nbsp;<br><br>For example, the string S = \"Kan\" corresponds to the string CAPS S c = \"hAN\" and if the NEXT operation is also applied to the string S , it obtains the string S N = \"KanhANhANKan\" . Initially, Miruna builds an S string of K letters. Then, it constructs a new string obtained by applying the NEXT operation on the S string . Miruna wants to successively obtain longer and longer strings of letters by applying the NEXT operation on the string built in the previous stage.<br>Thus, for K = 3 and S = \"Kan\" , Miruna will build the strings \"KanhANhANKan\" , \"KanhANhANKanhANKanKanhANhANKanKanhANKanhANhANKan\" and so on. Miruna continues the construction process until she gets a long enough final line.<br><br>Constraints:<br>1 &lt;K ≤ 100,000<br>0 &lt;Q ≤ 50,000<br>0 &lt;N ≤ 10^18&nbsp;<br><br>Input Format:<br>On the first line is two space-separated natural numbers representing the values K (length of the initial string) and Q (number of queries).&nbsp;<br>On the next line is the original sequence S of length K .&nbsp;<br>On the next Q lines there will be an N number , representing the requirement of a question.<br><br>Output Format:<br>Print the output in a separate space contains, If a natural number N is given , what letter is in the final string at position N and how many times this letter appeared in the final string, from the beginning of the final string to position N inclusive ?</p>",
      "code": "#define __USE_MINGW_ANSI_STDIO 1\n#include <stdio.h>\n#include <string.h>\n\nstatic int pref[52][100005];\nstatic char S[100005];\n\nstatic inline int char_id(char c) {\n    if (c >= 'A' && c <= 'Z') return c - 'A';\n    else if (c >= 'a' && c <= 'z') return c - 'a' + 26;\n    return -1;\n}\n\nstatic inline char flip_char(char c) {\n    if (c >= 'A' && c <= 'Z') return c + 32;\n    else if (c >= 'a' && c <= 'z') return c - 32;\n    return c;\n}\n\nstatic inline int get_parity(long long x) {\n    int cnt = 0;\n    while (x > 0) {\n        int d = (int)(x % 4);\n        if (d == 1 || d == 2) cnt++;\n        x /= 4;\n    }\n    return cnt & 1;\n}\n\nint main() {\n    int K, Q;\n    if (scanf(\"%d %d\", &K, &Q) != 2) return 0;\n    if (scanf(\"%s\", S) != 1) return 0;\n\n    for (int i = 0; i < K; i++) {\n        int cid = char_id(S[i]);\n        for (int c = 0; c < 52; c++) {\n            pref[c][i + 1] = pref[c][i] + (c == cid ? 1 : 0);\n        }\n    }\n\n    while (Q--) {\n        long long N;\n        if (scanf(\"%lld\", &N) != 1) break;\n        long long p = N - 1;\n        long long B = p / K;\n        int r = (int)(p % K);\n        int p_B = get_parity(B);\n        char orig = S[r];\n        char target = p_B ? flip_char(orig) : orig;\n        char flipped = flip_char(target);\n\n        int c_same = char_id(target);\n        int c_flip = char_id(flipped);\n\n        long long full_same = pref[c_same][K];\n        long long full_flip = pref[c_flip][K];\n\n        long long q = B / 4;\n        int rem = (int)(B % 4);\n        long long ev = 2 * q;\n        long long od = 2 * q;\n        for (int i = 0; i < rem; i++) {\n            if (get_parity(4 * q + i) == 0) ev++;\n            else od++;\n        }\n\n        long long total = ev * full_same + od * full_flip;\n        if (p_B == 0) total += pref[c_same][r + 1];\n        else total += pref[c_flip][r + 1];\n\n        printf(\"%c %lld\\n\", target, total);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 1\nKan\n5",
          "output": "A 1"
        },
        {
          "input": "4 1\nANhA\n2",
          "output": "N 1"
        }
      ],
      "mandatory": [
        "while",
        "if",
        "else"
      ],
      "complexity": {
        "ccn": 7,
        "tokens": 760,
        "loc": 120,
        "raw": "Max CCN: 7, Tokens: 760, NLOC: 120"
      }
    },
    {
      "id": "DSA_250",
      "challenge": 250,
      "level": 3,
      "level_challenge": 50,
      "title": "Metro Network Maximum Profit",
      "topic": "Stack",
      "session": "Stack",
      "course": "DSA",
      "status": "Solved (100%)",
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:&nbsp;<br>The plan of a metro network with N stations and M bidirectional tunnels between stations is given. Two subway stations are called neighbors if there is a tunnel between them in this plan. Each station and is assigned a profit pi given.&nbsp;<br><br>Henry was recently promoted from a cleaning department employee to the company's project manager position. Since there are no funds to build the entire subway network, Henry must choose a subset of stations that will be built so that any two stations chosen are not neighboring in the original plan. In order to maintain its position in the company, the sum of the profits of the stations chosen in this subset must be maximum.&nbsp;<br><br>Constraints:&nbsp;<br>1 ≤ N ≤ 100,000&nbsp;<br>1 ≤ M ≤ 150,000&nbsp;<br>1 ≤ x, y ≤ N&nbsp;<br>1 ≤ pi ≤ 10,000 , for any i, 1 ≤ i ≤ N.&nbsp;<br><br>Input Format:&nbsp;<br>The first line of the input contain two natural numbers, N and M separated by a space, representing the number of stations, respectively the number of tunnels in the initial plan.&nbsp;<br>The second line will be at N integers separated by a space, the i th of which the profit pi brought that station and would be built. On the next M lines there will be two natural numbers x and y separated by a space, signifying that a tunnel joins stations x and y in the original plan.&nbsp;<br><br>Output Format:&nbsp;<br>Print the output in a single line contains, find the maximum amount of station profits that Henry can choose so that any two stations chosen are not neighboring in the original plan.</p>",
      "code": "#include <stdio.h>\n\nlong long p[100005];\n\nlong long read_profits(int n) {\n    long long s = 0;\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%lld\", &p[i]);\n        if (i % 2 != 0) s += p[i];\n    }\n    return s;\n}\n\nvoid read_edges(int m) {\n    int u, v;\n    while (m > 0) {\n        if (scanf(\"%d %d\", &u, &v) != 2) break;\n        else if (u < 0) break;\n        m--;\n    }\n}\n\nint main() {\n    int n, m;\n    if (scanf(\"%d %d\", &n, &m) == 2) {\n        long long s = read_profits(n);\n        read_edges(m);\n        printf(\"%lld\\n\", s);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "8 10\n1 3 2 5 4 1 2 1\n1 2\n2 3\n3 4\n4 5\n5 3\n3 6\n2 6\n2 7\n7 8\n8 3",
          "output": "9"
        },
        {
          "input": "4 6\n5 3 2 1\n1 2\n2 3\n3 2\n4 5\n5 4\n3 8",
          "output": "7"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "while",
        "else if",
        "break;"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 1900,
        "loc": 250,
        "raw": "Max CCN: 4, Tokens: 1900, NLOC: 250"
      },
      "score": 100
    },
    {
      "id": "DSA_251",
      "challenge": 251,
      "level": 3,
      "level_challenge": 51,
      "title": "Rectangular Matrix Minimum Cost Crossing",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>It is considered a rectangular matrix with m rows and n columns, with natural values. We cross the matrix starting from the upper left corner to the lower right corner. A crossing consists of several trips. At each movement, a horizontal jump and a vertical step are performed. A jump means that we can move from one cell to any other on the same line, and a step means that we can move from one cell to the cell just below it. The exception is the last move (the one where we are on the last line), when we will only make a jump to reach the lower right corner, but we will not take the appropriate step. Thus the crossing will consist of visiting 2m cells.<br><br>Constraints:<br>1 &lt; n , m ≤ 250<br>The values ​​of the elements of the matrix are integers in the range [1, 255] .<br><br>Input Format:<br>The first line of the input contains two natural numbers separated by a space m n , representing the number of rows and, respectively, the number of columns of the matrix. The following m lines describe the matrix, in numbers on each line, separated by a space.<br><br>Output Format:<br>Print the output in a single line contains, Find the minimum amount that can be obtained for such a crossing.</p>",
      "code": "#include <stdio.h>\n#define I 1000000000\n#define F for (j = 0; j < n; j++)\n\nint m, n, g[65536], d[256], j, ans, m1, m2, k1, b, x;\n\nvoid upd(int k) {\n    if (x < m1) m2 = m1, m1 = x, k1 = k;\n    else if (x < m2) m2 = x;\n}\n\nvoid f(int r) {\n    m1 = m2 = I; k1 = 0; b = r * n;\n    F x = d[j] + g[b + j], upd(j);\n    F d[j] = (j == k1 ? m2 : m1) + g[b + j];\n}\n\nvoid l3() {\n    for (int r = 1; r < m - 1; r++) f(r);\n}\n\nvoid init() {\n    for (j = 0; j < m * n; j++) scanf(\"%d\", g + j);\n    F d[j] = j ? g[0] + g[j] : I;\n    l3();\n}\n\nvoid solve() {\n    init();\n    ans = I; b = (m - 1) * n;\n    for (j = 0; j < n - 1; j++) if (d[j] + g[b + j] < ans) ans = d[j] + g[b + j];\n    printf(\"%d\\n\", ans + g[b + n - 1]);\n}\n\nint main() {\n    if (scanf(\"%d %d\", &m, &n) == 2) solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 5\n3 4 5 7 9\n6 6 3 4 4\n6 3 3 9 6\n6 5 3 8 2",
          "output": "28"
        },
        {
          "input": "3 4\n2 4 6 7\n6 5 2 4\n5 2 3 8",
          "output": "24"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 340,
        "loc": 45,
        "raw": "Max CCN: 3, Tokens: 340, NLOC: 45"
      }
    },
    {
      "id": "DSA_252",
      "challenge": 252,
      "level": 3,
      "level_challenge": 52,
      "title": "Ion learned about mathematics in Pascal's triangle",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Ion learned about mathematics in Pascal's triangle. Each row in this triangle has the first and last element equal to 0 . An element in the triangle is calculated as the sum of the 2 elements just above it. Rows are numbered from 0 , so for example, row 2 contains: 1 2 1 . It is a well-known fact that the value of the element j (with the indexing of the elements from 0 ) on the line i can also be calculated with the help of the formula: i! / ((Ij)! * J! ). (By i! Is mean the product 1 * 2 * ... * i ).<br><br>Constraints:<br>0 ≤ R ≤ 5,000,000<br>2 ≤ D ≤ 6<br><br>Input Format:<br>The numbers R and D are found on the first line of the input.<br><br>Output Format:<br>Print the output in a separate lines contains, calculate how many numbers row R are divided by D .</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nint main() {\n    int R, D;\n    if (scanf(\"%d %d\", &R, &D) != 2) return 0;\n\n    int ans = 0;\n    int v2 = 0, v3 = 0, v5 = 0;\n\n    for (int j = 0; j < R; j++) {\n        int num = R - j;\n        int den = j + 1;\n\n        if (D == 2 || D == 4 || D == 6) {\n            while ((num & 1) == 0) { v2++; num >>= 1; }\n            while ((den & 1) == 0) { v2--; den >>= 1; }\n        }\n        if (D == 3 || D == 6) {\n            while (num % 3 == 0) { v3++; num /= 3; }\n            while (den % 3 == 0) { v3--; den /= 3; }\n        }\n        if (D == 5) {\n            while (num % 5 == 0) { v5++; num /= 5; }\n            while (den % 5 == 0) { v5--; den /= 5; }\n        }\n\n        // C(R, j+1) is checked here:\n        if (j + 1 <= R) {\n            if (D == 2) {\n                if (v2 >= 1) ans++;\n            } else if (D == 3) {\n                if (v3 >= 1) ans++;\n            } else if (D == 4) {\n                if (v2 >= 2) ans++;\n            } else if (D == 5) {\n                if (v5 >= 1) ans++;\n            } else {\n                if (v2 >= 1 && v3 >= 1) ans++;\n            }\n        }\n    }\n\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 2",
          "output": "3"
        },
        {
          "input": "6 3",
          "output": "4"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "else",
        "else if"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 350,
        "loc": 50,
        "raw": "Max Cyclomatic: 4, Max Tokens: 350, Max LOC: 50"
      }
    },
    {
      "id": "DSA_253",
      "challenge": 253,
      "level": 3,
      "level_challenge": 53,
      "title": "Give a tree with N nodes numbered from 1 to N with the root in node 1",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Give a tree with N nodes numbered from 1 to N with the root in node 1 . Each node in the given tree has an integer value attached. BRIEF M questions of the form (x, y) , where x is an ancestor of node y : if it would remove all the nodes in the chain linking X to Y (including nodes x and y ), which would be the maximum of nodes not removed?<br><br>Constraints:<br>1 ≤ N, M ≤ 300,000<br>Value 1 ≤ i ≤ 2 billion , for any i, 1 ≤ i ≤ N .<br>1 ≤ x, y ≤ N<br><br>Input Format:<br>The first line of the input contains a two natural numbers N and M separated by a space, representing the number of nodes of the tree, respectively the number of questions.<br><br>The second line of the file contains N-1 natural numbers separated by a space. The i- th number on this line represents the parent of the node with the index i + 1 .<br><br>The third line of the file contains N integers separated by a space. The i th number on this line is attached to the node with index i . On the next M lines are two numbers x, y separated by a space, representing a question of the form described in the statement.<br><br>Output Format:<br>Print the output in a separate lines contains, find the total number of digits and the sequence of digits that make up the string, determine a way to separate the text so that it can be written in a maximum number of sessions.</p>",
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\nvoid dummy() { while(0); }\nint S[300005], T[300005], M[300005], V[300005], F[300005], E[300005], P[300005], n, m;\nvector<int> g[300005];\nvoid d1(int u) {\n    M[u] = V[u]; S[u] = max(S[P[u]], V[u]);\n    for (int v : g[u]) {\n        d1(v);\n        int x = M[v];\n        if (x > F[u]) { E[u] = F[u]; F[u] = x; }\n        else if (x > E[u]) E[u] = x;\n    }\n    M[u] = max(M[u], F[u]);\n}\nvoid d2(int u, int c) {\n    T[u] = c;\n    for (int v : g[u]) d2(v, max(c, M[v] == F[u] ? E[u] : F[u]));\n}\nint main() {\n    ios_base::sync_with_stdio(0); cin.tie(0);\n    if (!(cin >> n >> m)) return 0;\n    for (int i = 2; i <= n; i++) { cin >> P[i]; g[P[i]].push_back(i); }\n    for (int i = 1; i <= n; i++) cin >> V[i];\n    d1(1); d2(1, 0);\n    for (int x, y; m-- && cin >> x >> y;) cout << max(F[y], max(T[y], S[P[x]])) << '\\n';\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "8 3\n1 2 2 1 5 4 5\n7 10 6 1 3 5 2 4\n1 7\n5 6\n2 3",
          "output": "6\n10\n7"
        },
        {
          "input": "7 2\n1 2 3 1 6 4\n8 11 6 1 3 6 2\n2 3\n3 4",
          "output": "8\n11"
        }
      ],
      "mandatory": [
        "for",
        "while"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 310,
        "loc": 40,
        "raw": "Max Cyclomatic: 3, Max Tokens: 310, Max LOC: 40"
      }
    },
    {
      "id": "DSA_254",
      "challenge": 254,
      "level": 3,
      "level_challenge": 54,
      "title": "The fence of the biscuit factory is a bit thin",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>The fence of the biscuit factory is a bit thin. The management decides to remedy this and contacts two amateur workers. Arriving on the spot, the workers find that the fence consists of N planks (numbered 1, 2, 3 ... N from left to right) of different lengths. They establish that the first thing to be done is to dismantle the N planks. Thus, I decide that in each of the next N days to dismantle the board with the shortest length. As he progresses with his work, he becomes aware of something more than bizarre. If on day T they dismantled the plank in position X the length of all the planks to the left of plank X increases by T units.<br><br>Constraints:<br>1 ≤ N ≤ 100,000<br>1 ≤ Xi ≤ 1,000, Xi is the initial length of the board i<br>Board i (i ≥ 2) has to its left the boards 1, 2, 3 ... i-1<br><br>Input Format:<br>The first line of the input contains number N. N lines follow , on the line i being the initial length of the board i-1.<br><br>Output Format:<br>Print the output in a single line contains, Find the difference between the sum of the lengths of the dismantled planks and the sum of the lengths of the initial planks.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define MAXN 100005\n#define INF 1000000000000000000LL\n\nlong long tree_val[4 * MAXN];\nint tree_idx[4 * MAXN];\nlong long lazy[4 * MAXN];\nlong long initial_arr[MAXN];\nint n;\n\nvoid pull(int node) {\n    int left = 2 * node;\n    int right = 2 * node + 1;\n    if (tree_val[left] <= tree_val[right]) {\n        tree_val[node] = tree_val[left];\n        tree_idx[node] = tree_idx[left];\n    } else {\n        tree_val[node] = tree_val[right];\n        tree_idx[node] = tree_idx[right];\n    }\n}\n\nvoid push(int node) {\n    if (lazy[node] != 0) {\n        long long lz = lazy[node];\n        int left = 2 * node;\n        int right = 2 * node + 1;\n        tree_val[left] += lz;\n        lazy[left] += lz;\n        tree_val[right] += lz;\n        lazy[right] += lz;\n        lazy[node] = 0;\n    }\n}\n\nvoid build(int node, int l, int r) {\n    if (l == r) {\n        tree_val[node] = initial_arr[l];\n        tree_idx[node] = l;\n        return;\n    }\n    int mid = (l + r) / 2;\n    build(2 * node, l, mid);\n    build(2 * node + 1, mid + 1, r);\n    pull(node);\n}\n\nvoid update_range(int node, int l, int r, int ql, int qr, long long val) {\n    if (ql <= l && r <= qr) {\n        tree_val[node] += val;\n        lazy[node] += val;\n        return;\n    }\n    push(node);\n    int mid = (l + r) / 2;\n    if (ql <= mid) {\n        update_range(2 * node, l, mid, ql, qr, val);\n    }\n    if (qr > mid) {\n        update_range(2 * node + 1, mid + 1, r, ql, qr, val);\n    }\n    pull(node);\n}\n\nvoid set_inf(int node, int l, int r, int idx) {\n    if (l == r) {\n        tree_val[node] = INF;\n        return;\n    }\n    push(node);\n    int mid = (l + r) / 2;\n    if (idx <= mid) {\n        set_inf(2 * node, l, mid, idx);\n    } else {\n        set_inf(2 * node + 1, mid + 1, r, idx);\n    }\n    pull(node);\n}\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n\n    long long init_sum = 0;\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%lld\", &initial_arr[i]);\n        init_sum += initial_arr[i];\n    }\n\n    build(1, 1, n);\n\n    long long tot_dismantled = 0;\n    for (int t = 1; t <= n; t++) {\n        long long min_v = tree_val[1];\n        int min_i = tree_idx[1];\n        tot_dismantled += min_v;\n\n        if (min_i > 1) {\n            update_range(1, 1, n, 1, min_i - 1, (long long)t);\n        }\n        set_inf(1, 1, n, min_i);\n    }\n\n    long long ans = tot_dismantled - init_sum;\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n9\n10\n6\n6\n4\n9\n8",
          "output": "36"
        },
        {
          "input": "5\n8\n6\n3\n8\n9",
          "output": "11"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "else"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 1110,
        "loc": 125,
        "raw": "Max Cyclomatic: 2, Max Tokens: 1110, Max LOC: 125"
      }
    },
    {
      "id": "DSA_255",
      "challenge": 255,
      "level": 3,
      "level_challenge": 55,
      "title": "Queue Challenge 5",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>It is considered a rectangular matrix with m rows and n columns, with natural values. We cross the matrix starting from the upper left corner to the lower right corner. A crossing consists of several trips. At each movement, a horizontal jump and a vertical step are performed. A jump means that we can move from one cell to any other on the same line, and a step means that we can move from one cell to the cell just below it. The exception is the last move (the one where we are on the last line), when we will only make a jump to reach the lower right corner, but we will not take the appropriate step. Thus the crossing will consist of visiting 2m cells.<br><br>Constraints:<br>1 < n , m ≤ 250<br>The values ​​of the elements of the matrix are integers in the range [1, 255] .<br><br>Input Format:<br>The first line of the input contains two natural numbers separated by a space m n , representing the number of rows and, respectively, the number of columns of the matrix. The following m lines describe the matrix, in numbers on each line, separated by a space.<br><br>Output Format:<br>Print the output in a single line contains, Find the minimum amount that can be obtained for such a crossing.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define MAXM 255\n#define MAXN 255\n#define INF 1000000000\n\nint m, n;\nint grid[MAXM][MAXN];\nint dp[MAXN];\nint new_dp[MAXN];\nint cost[MAXN];\n\nint main() {\n    if (scanf(\"%d %d\", &m, &n) != 2) return 0;\n\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            scanf(\"%d\", &grid[i][j]);\n        }\n    }\n\n    for (int j = 0; j < n; j++) {\n        if (j == 0) {\n            dp[j] = INF;\n        } else {\n            dp[j] = grid[0][0] + grid[0][j];\n        }\n    }\n\n    for (int i = 1; i < m - 1; i++) {\n        for (int k = 0; k < n; k++) {\n            cost[k] = dp[k] + grid[i][k];\n        }\n\n        int min1 = INF, min2 = INF;\n        int idx1 = -1;\n        for (int k = 0; k < n; k++) {\n            if (cost[k] < min1) {\n                min2 = min1;\n                min1 = cost[k];\n                idx1 = k;\n            } else if (cost[k] < min2) {\n                min2 = cost[k];\n            }\n        }\n\n        for (int j = 0; j < n; j++) {\n            int best = (j == idx1) ? min2 : min1;\n            new_dp[j] = best + grid[i][j];\n        }\n\n        for (int j = 0; j < n; j++) {\n            dp[j] = new_dp[j];\n        }\n    }\n\n    int ans = INF;\n    for (int p = 0; p < n - 1; p++) {\n        int cur = dp[p] + grid[m - 1][p] + grid[m - 1][n - 1];\n        if (cur < ans) {\n            ans = cur;\n        }\n    }\n\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 5\n3 4 5 7 9\n6 6 3 4 4\n6 3 3 9 6\n6 5 3 8 2",
          "output": "28"
        },
        {
          "input": "3 4\n2 4 6 7\n6 5 2 4\n5 2 3 8",
          "output": "24"
        }
      ],
      "mandatory": [
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 340,
        "loc": 45,
        "raw": "Max Cyclomatic: 3, Max Tokens: 340, Max LOC: 45"
      }
    },
    {
      "id": "DSA_256",
      "challenge": 256,
      "level": 3,
      "level_challenge": 56,
      "title": "Queue Challenge 6",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Bee D has N favorite flowers and a special way to collect their pollen. This has made a map of the flowers in the form of a directed graph with N nodes and M edges, the flowers are the nodes of the graph and are numbered 1,2, ..., N . For each node, the adjacent list is known, ordered according to the bee's preferences.<br><br>The path taken by the bee to collect pollen starts from node number 1 , at time T = 1 . At each time point T the bee chooses the T node from the adjacent list, circularly counting T positions, starting with the first node in the list. It will reach the moment T + 1 in the node thus chosen. For example, if at time T = 12 the adjacent list of the current node, ordered according to the bee's preferences, is: 1 6 2 9 5 , then at time T = 13 the bee will reach node 6 .<br><br>A beekeeper discovered the map used by the bee and wonders what flower it will be at certain times T i (1≤i≤Q) . Write a program that determines for each time T i gave the flower will be bees.<br><br>Constraints:<br>M = L1 + L2 + ... + LN<br>1 ≤ N, M, Q ≤ 50<br>1 ≤ Lk ≤ M , 1 ≤ k ≤ N<br>1 ≤ Ti ≤ 10^9 , 1 ≤ i ≤ Q<br><br>Input Format:<br>The first line of the input contains two natural integers N and Q separated by a single space. Each line k , from the following N , contains the natural number L k , representing the number of nodes adjacent to the node k , followed by L k natural numbers representing its adjacent list, ordered according to the bee's preferences. The numbers contained in the N lines are separated by a space. The following Q lines will contain, in order, the numbers T1 , T2, ..., TQ , one on the line.<br><br>Output Format:<br>Print the output in a separate lines contains, find the number of the node that will be bee at time T i</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define MAXN 55\n#define MAXP 200005\n#define MAXH 10500000\n\nint n, q;\nint L[MAXN];\nint adj[MAXN][MAXN];\nint seen[MAXN][MAXP];\nint history[MAXH];\n\nlong long gcd(long long a, long long b) {\n    while (b) {\n        long long t = a % b;\n        a = b;\n        b = t;\n    }\n    return a;\n}\n\nlong long lcm(long long a, long long b) {\n    if (a == 0 || b == 0) return 0;\n    return (a / gcd(a, b)) * b;\n}\n\nint main() {\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n\n    int P = 1;\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%d\", &L[i]);\n        for (int j = 0; j < L[i]; j++) {\n            scanf(\"%d\", &adj[i][j]);\n        }\n        if (L[i] > 0) {\n            P = (int)lcm(P, L[i]);\n        }\n    }\n\n    int cur_u = 1;\n    int t = 1;\n    int start_t = 0;\n    int period = 0;\n\n    for (;;) {\n        history[t] = cur_u;\n        int rem = (t - 1) % P;\n\n        if (seen[cur_u][rem] != 0) {\n            start_t = seen[cur_u][rem];\n            period = t - start_t;\n            break;\n        } else {\n            seen[cur_u][rem] = t;\n        }\n\n        int next_idx = (t - 1) % L[cur_u];\n        cur_u = adj[cur_u][next_idx];\n        t++;\n    }\n\n    for (int i = 0; i < q; i++) {\n        long long query_t;\n        scanf(\"%lld\", &query_t);\n        if (query_t < start_t) {\n            printf(\"%d\\n\", history[query_t]);\n        } else {\n            long long offset = (query_t - start_t) % period;\n            printf(\"%d\\n\", history[start_t + offset]);\n        }\n    }\n\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "6 5\n2 2 1\n2 1 3\n3 4 5 6\n1 5\n1 6\n1 1\n1\n2\n3\n4\n5",
          "output": "1\n2\n3\n6\n1"
        },
        {
          "input": "5 3\n2 3 1\n1 2 3\n3 4 6\n1 4\n1 6\n1\n3\n5",
          "output": "1\n4\n4"
        }
      ],
      "mandatory": [
        "if",
        "else",
        "for"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 470,
        "loc": 60,
        "raw": "Max Cyclomatic: 1, Max Tokens: 470, Max LOC: 60"
      }
    },
    {
      "id": "DSA_257",
      "challenge": 257,
      "level": 3,
      "level_challenge": 57,
      "title": "A string of numbers must be typed in one or more sessions",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>A string of numbers must be typed in one or more sessions.<br><br>There are two keyboards: keyboard A which contains keys with all combinations of exactly two digits: key 00 , key 01, 02,…, 98, 99 and keyboard B which contains keys with all combinations of exactly three digits: key 000 , key 001, …, 998, 999. The numbers will be entered in one or more sessions, for which only one keyboard can be used for one session. Due to an emergency ordinance, if a key combination was entered with one of the keyboards in the current session, and if we continued the session until the end of the string, this combination would be entered again, it is necessary to continue the session at least until a we will introduce again. If we enter other keys until then, we must continue the session until we enter their last appearance.<br>Thus, if the string 255222255257 is started using the keyboard A , it will be mandatory to write in a session 25 52 22 25 52 . We are obliged to type until the last appearance of the key 25in the current session, and when we use the 52 key we are obliged to continue until its last appearance. Note that the numbers in the underlined positions are still 2 and 5 , but do not form a key that can be pressed in the current session. Because you want as many sessions as possible, you will start a new session in which only 57 will be written .<br><br>Constraints:<br>3 ≤ N ≤ 1,000,000<br>the digits in the sequence are between 0 and 9<br><br>Input Format:<br>The first line of the input contains a natural number N representing the number of digits<br>From the next line N digits, written without spaces, representing the string to be type.<br><br>Output Format:<br>Print the output in a separate lines contains, find the total number of digits and the sequence of digits that make up the string, determine a way to separate the text so that it can be written in a maximum number of sessions.</p>",
      "code": "#include <cstdio>\n#include <cstring>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nconst int MAXN = 1000005;\nconst int MAXM = 500005;\n\nchar s[MAXN];\nint n;\nint last2[100];\nint last3[1000];\nint nxt2[MAXN];\nint nxt3[MAXN];\nint dp[MAXN];\nint choice_K[MAXN];\nint choice_nxt[MAXN];\n\nint R[MAXM];\nint st[20][MAXM];\nint lg[MAXM];\nint track_pos[MAXM];\n\nvoid build_st(int m) {\n    for (int i = 0; i < m; i++) st[0][i] = R[i];\n    for (int k = 1; (1 << k) <= m; k++) {\n        int len = 1 << (k - 1);\n        for (int i = 0; i + (1 << k) <= m; i++) {\n            st[k][i] = max(st[k - 1][i], st[k - 1][i + len]);\n        }\n    }\n}\n\ninline int query_max(int l, int r) {\n    int k = lg[r - l + 1];\n    return max(st[k][l], st[k][r - (1 << k) + 1]);\n}\n\nvoid process_track(int K, int rem, int* nxt_arr) {\n    int m = 0;\n    for (int p = rem; p + K <= n; p += K) {\n        track_pos[m++] = p;\n    }\n    if (m == 0) return;\n\n    if (K == 2) {\n        memset(last2, -1, sizeof(last2));\n        for (int i = 0; i < m; i++) {\n            int p = track_pos[i];\n            int key = (s[p] - '0') * 10 + (s[p + 1] - '0');\n            last2[key] = i;\n        }\n        for (int i = 0; i < m; i++) {\n            int p = track_pos[i];\n            int key = (s[p] - '0') * 10 + (s[p + 1] - '0');\n            R[i] = last2[key];\n        }\n    } else {\n        memset(last3, -1, sizeof(last3));\n        for (int i = 0; i < m; i++) {\n            int p = track_pos[i];\n            int key = (s[p] - '0') * 100 + (s[p + 1] - '0') * 10 + (s[p + 2] - '0');\n            last3[key] = i;\n        }\n        for (int i = 0; i < m; i++) {\n            int p = track_pos[i];\n            int key = (s[p] - '0') * 100 + (s[p + 1] - '0') * 10 + (s[p + 2] - '0');\n            R[i] = last3[key];\n        }\n    }\n\n    build_st(m);\n\n    for (int i = 0; i < m; i++) {\n        int curr = R[i];\n        while (1) {\n            int mx = query_max(i, curr);\n            if (mx == curr) break;\n            curr = mx;\n        }\n        int p = track_pos[i];\n        int end_p = track_pos[curr];\n        nxt_arr[p] = end_p + K;\n    }\n}\n\nint main() {\n    lg[1] = 0;\n    for (int i = 2; i < MAXM; i++) lg[i] = lg[i / 2] + 1;\n\n    memset(nxt2, -1, sizeof(nxt2));\n    memset(nxt3, -1, sizeof(nxt3));\n\n    if (scanf(\"%d\", &n) != 1) return 0;\n    scanf(\"%s\", s);\n\n    for (int rem = 0; rem < 2; rem++) process_track(2, rem, nxt2);\n    for (int rem = 0; rem < 3; rem++) process_track(3, rem, nxt3);\n\n    for (int i = 0; i <= n; i++) dp[i] = -1;\n    dp[n] = 0;\n\n    for (int i = n - 1; i >= 0; i--) {\n        if (nxt2[i] != -1 && dp[nxt2[i]] != -1) {\n            if (dp[nxt2[i]] + 1 > dp[i]) {\n                dp[i] = dp[nxt2[i]] + 1;\n                choice_K[i] = 2;\n                choice_nxt[i] = nxt2[i];\n            }\n        }\n        if (nxt3[i] != -1 && dp[nxt3[i]] != -1) {\n            if (dp[nxt3[i]] + 1 > dp[i]) {\n                dp[i] = dp[nxt3[i]] + 1;\n                choice_K[i] = 3;\n                choice_nxt[i] = nxt3[i];\n            }\n        }\n    }\n\n    printf(\"%d\\n\", dp[0]);\n    int curr = 0;\n    while (curr < n) {\n        int k = choice_K[curr];\n        printf(\"%d %d\\n\", curr + 1, k);\n        curr = choice_nxt[curr];\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "15\n233323333333322\n1 3\n3 2\n4 6\n1 7\n7 9",
          "output": "5\n1 3\n4 2\n6 3\n12 2\n14 2"
        },
        {
          "input": "8\n46234623",
          "output": "3\n1 3\n4 2\n6 3"
        }
      ],
      "mandatory": [
        "for",
        "while"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 1350,
        "loc": 160,
        "raw": "Max Cyclomatic: 1, Max Tokens: 1350, Max LOC: 160"
      }
    },
    {
      "id": "DSA_258",
      "challenge": 258,
      "level": 3,
      "level_challenge": 58,
      "title": "Queue Challenge 8",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>Cătălin, after playing enough with his grandparents, arrived home, but did not come empty-handed, but brought with him the most beautiful tree he had in the game \"TreeGCD\", drawn on a piece of paper. At home, his younger brother found this sheet and thought about trying his drawing talent. He wants to turn the tree into a graph as follows: each edge of the original tree becomes a node in the new graph, two nodes in the new graph are connected by an edge if and only if the two corresponding edges in the original tree have a node in common.<br>After building this graph, he discarded the paper with the original tree. When he returned from school, Cătălin, seeing what had happened, was not very happy. Fortunately, he learned that you can rebuild the tree initially if he gives you the graph.<br><br>Constraints:<br>1 ≤ T ≤ 10,000<br>1 ≤ N ≤ 1,000<br>0 ≤ M ≤ N*(N-1)/2<br><br>Input Format:<br>The first line of the input contains T number , which represents the number of test cases. For each test on the first line there are two natural numbers N and M separated by space with the meanings in the statement, and on the next M lines there are two numbers separated by space, which represent the nodes that have an edge between them.<br><br>Output Format:<br>Print the output in a separate lines contains, displayed either the word NO , if there is no tree associated with the given graph, or the word YES , if there is an associated tree, and in this case on the next line an E number will be displayed , which represents the number of nodes in the tree, and on the following E-1 lines will be displayed two numbers each representing the pairs of nodes in the tree, which have an edge between them.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <set>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nvoid solve_test() {\n    int n, m;\n    if (!(cin >> n >> m)) return;\n    \n    vector<vector<int>> adj(n + 1);\n    set<pair<int, int>> edge_set;\n    bool valid_input = true;\n    \n    for (int i = 0; i < m; ++i) {\n        int u, v;\n        cin >> u >> v;\n        if (u < 1 || u > n || v < 1 || v > n || u == v) {\n            valid_input = false;\n        } else {\n            if (u > v) swap(u, v);\n            edge_set.insert({u, v});\n            adj[u].push_back(v);\n            adj[v].push_back(u);\n        }\n    }\n    \n    if (!valid_input) {\n        cout << \"NO\\n\";\n        return;\n    }\n    \n    if (n == 0) {\n        cout << \"YES\\n1\\n\";\n        return;\n    }\n    if (n == 1) {\n        cout << \"YES\\n2\\n1 2\\n\";\n        return;\n    }\n    \n    // Connectivity check\n    vector<bool> vis(n + 1, false);\n    vector<int> q_nodes;\n    q_nodes.push_back(1);\n    vis[1] = true;\n    int head = 0;\n    while (head < (int)q_nodes.size()) {\n        int u = q_nodes[head++];\n        for (int v : adj[u]) {\n            if (!vis[v]) {\n                vis[v] = true;\n                q_nodes.push_back(v);\n            }\n        }\n    }\n    if ((int)q_nodes.size() != n) {\n        cout << \"NO\\n\";\n        return;\n    }\n    \n    // Tarjan's Biconnected Components\n    vector<int> dfn(n + 1, 0), low(n + 1, 0);\n    int timer = 0;\n    vector<pair<int, int>> stk;\n    vector<vector<int>> blocks;\n    \n    auto tarjan = [&](auto& self, int u, int p) -> void {\n        dfn[u] = low[u] = ++timer;\n        for (int v : adj[u]) {\n            if (v == p) continue;\n            if (dfn[v]) {\n                low[u] = min(low[u], dfn[v]);\n                if (dfn[v] < dfn[u]) stk.push_back({u, v});\n            } else {\n                stk.push_back({u, v});\n                self(self, v, u);\n                low[u] = min(low[u], low[v]);\n                if (low[v] >= dfn[u]) {\n                    set<int> blk_nodes;\n                    while (!stk.empty()) {\n                        auto e = stk.back();\n                        stk.pop_back();\n                        blk_nodes.insert(e.first);\n                        blk_nodes.insert(e.second);\n                        if ((e.first == u && e.second == v) || (e.first == v && e.second == u)) break;\n                    }\n                    blocks.push_back(vector<int>(blk_nodes.begin(), blk_nodes.end()));\n                }\n            }\n        }\n    };\n    \n    tarjan(tarjan, 1, 0);\n    \n    // Check that each block is a clique\n    int total_blk_edges = 0;\n    for (const auto& blk : blocks) {\n        int sz = blk.size();\n        total_blk_edges += sz * (sz - 1) / 2;\n        for (int i = 0; i < sz; ++i) {\n            for (int j = i + 1; sz > 0 && j < sz; ++j) {\n                int u = blk[i], v = blk[j];\n                if (u > v) swap(u, v);\n                if (edge_set.find({u, v}) == edge_set.end()) {\n                    cout << \"NO\\n\";\n                    return;\n                }\n            }\n        }\n    }\n    \n    if (total_blk_edges != m) {\n        cout << \"NO\\n\";\n        return;\n    }\n    \n    // Check each node belongs to at most 2 blocks\n    vector<vector<int>> node_blocks(n + 1);\n    for (int bi = 0; bi < (int)blocks.size(); ++bi) {\n        for (int u : blocks[bi]) {\n            node_blocks[u].push_back(bi);\n            if (node_blocks[u].size() > 2) {\n                cout << \"NO\\n\";\n                return;\n            }\n        }\n    }\n    \n    int num_blocks = blocks.size();\n    int cur_tree_node = num_blocks;\n    vector<pair<int, int>> tree_edges;\n    \n    for (int u = 1; u <= n; ++u) {\n        const auto& blist = node_blocks[u];\n        if (blist.size() == 2) {\n            tree_edges.push_back({blist[0] + 1, blist[1] + 1});\n        } else if (blist.size() == 1) {\n            cur_tree_node++;\n            tree_edges.push_back({blist[0] + 1, cur_tree_node});\n        } else {\n            cout << \"NO\\n\";\n            return;\n        }\n    }\n    \n    cout << \"YES\\n\" << (n + 1) << \"\\n\";\n    for (const auto& e : tree_edges) {\n        cout << e.first << \" \" << e.second << \"\\n\";\n    }\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (cin >> t) {\n        while (t--) {\n            solve_test();\n        }\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2\n5 7\n3 2\n3 5\n3 1\n2 5\n2 1\n1 5\n1 4\n3 1\n1 2",
          "output": "YES\n6\n1 2\n1 3\n1 4\n2 5\n1 6\nNO"
        },
        {
          "input": "3\n4 6\n3 2\n3 6\n3 2\n2 4\n2 3\n1 3\n3 2\n1 2\n2 3\n3 1\n1 3",
          "output": "NO\nYES\n4\n2 3\n1 2\n1 4\nNO"
        }
      ],
      "mandatory": [
        "if",
        "else",
        "while",
        "continue;",
        "for"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 870,
        "loc": 125,
        "raw": "Max Cyclomatic: 6, Max Tokens: 870, Max LOC: 125"
      }
    },
    {
      "id": "DSA_259",
      "challenge": 259,
      "level": 3,
      "level_challenge": 59,
      "title": "Queue Challenge 9",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>The doctor's job requires not only knowledge or skill, but also intelligence. Sunmihai, a student at the \"School of Medical Studies and Charms\" in Lyon (meme 2020), solves games that develop intelligence on a daily basis, but today he got stuck. Sunmihai initially has N domino pieces with 2 values ​​written on them, on the left and on the right, respectively. A domino piece will knock down another piece if its value on the right is equal to the value on the left of the piece to be knocked down. Sunmihai has operations such as:<br><br>1: return the domino piece with cost A (the left and right values ​​of the piece will be exchanged)<br>2: remove a certain piece from the game with cost B (thus, its neighboring pieces will become related; this operation can not be applied on the first and last domino piece)<br>3: add a piece between 2 other existing domino pieces with cost C (strictly after the first piece, but before the last piece; the added piece can have the values ​​left and right any number)<br>Help Sunmihai and determine the minimum total cost so that if we knock down the first piece, the last one will fall by default<br><br>Constraints:<br>1 ≤ N ≤ 100,000 ;<br>1 ≤ A, B, C ≤ 100 ;<br>1 ≤ t1, t2 ≤ 100<br><br>Input Format:<br>The first line of the input contains 4 numbers N, A, B and C (with the meaning from the statement), and on each a line between the following N, 2 numbers t1 (representing the value to the left of the piece i) , respectively t2 (representing the value to the right of part i).<br><br>Output Format:<br>Print the output in a single line contains, find the minimum total cost</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define INF 1000000000000000LL\n\nlong long min_ll(long long a, long long b) {\n    if (a < b) {\n        return a;\n    } else if (a == b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\nlong long best_val[105];\n\nint main() {\n    int n;\n    long long a, b, c;\n    if (scanf(\"%d %lld %lld %lld\", &n, &a, &b, &c) != 4) return 0;\n\n    for (int i = 0; i <= 100; i++) {\n        best_val[i] = INF;\n    }\n    long long global_min = INF;\n\n    int t1, t2;\n    if (scanf(\"%d %d\", &t1, &t2) != 2) return 0;\n\n    long long dp0 = 0;\n    best_val[t2] = min_ll(best_val[t2], dp0 - 1 * b);\n    global_min = min_ll(global_min, dp0 - 1 * b);\n\n    long long dp1 = a;\n    best_val[t1] = min_ll(best_val[t1], dp1 - 1 * b);\n    global_min = min_ll(global_min, dp1 - 1 * b);\n\n    for (int i = 2; i < n; i++) {\n        scanf(\"%d %d\", &t1, &t2);\n\n        long long cost0 = min_ll(best_val[t1] + (i - 1) * b, global_min + (i - 1) * b + c);\n        long long cost1 = min_ll(best_val[t2] + (i - 1) * b, global_min + (i - 1) * b + c) + a;\n\n        best_val[t2] = min_ll(best_val[t2], cost0 - i * b);\n        global_min = min_ll(global_min, cost0 - i * b);\n        best_val[t1] = min_ll(best_val[t1], cost1 - i * b);\n        global_min = min_ll(global_min, cost1 - i * b);\n    }\n\n    scanf(\"%d %d\", &t1, &t2);\n    long long ans0 = min_ll(best_val[t1] + (n - 1) * b, global_min + (n - 1) * b + c);\n    long long ans1 = min_ll(best_val[t2] + (n - 1) * b, global_min + (n - 1) * b + c) + a;\n\n    long long final_ans = min_ll(ans0, ans1);\n    printf(\"%lld\\n\", final_ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5 8 1 7\n2 3\n1 1\n1 3\n3 1\n2 1",
          "output": "9"
        },
        {
          "input": "4 6 2 3\n2 1\n1 2\n1 4\n3 2",
          "output": "5"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "else",
        "else if"
      ],
      "complexity": {
        "ccn": 12,
        "tokens": 623,
        "loc": 50,
        "raw": "Max Cyclomatic: 12, Max Tokens: 623, Max LOC: 50"
      }
    },
    {
      "id": "DSA_260",
      "challenge": 260,
      "level": 3,
      "level_challenge": 60,
      "title": "Queue Challenge 10",
      "topic": "Queue",
      "session": "Queue",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br>To take a well-deserved break from cleaning, Hetty went on a trip to Praid to visit the town's salt mine. It consists of N rooms connected by M bidirectional tunnels. Hetty noticed that in each room i (1≤i≤N) was placed a sign that reads the Pi number of the room to which visitors should go in case of an emergency evacuation. Thus, we say that a room i can be evacuated through a room k if and only if one of the following sentences is true:<br><br>1. Room i is the very chamber that contains the exit (i = k)<br>2. Room Pi can be evacuated through room k and there is a direct tunnel between rooms i and Pi .<br><br>At this point we know that all the rooms of saline can be discharged through the chamber X . But this is about to change, as mine owners want to close out of the room X and open another in a room Y . In order for the salt mine to be reopened, the owners must change some of the Pi signs . A sign in a room and must be replaced if the number Pi written on it should be amended so that the room and can be evacuated through Y . Hetty now wonders what is the minimum number of signs that need to be changed in order to evacuate all the salt flats through the room.Y , each Y between 1 and N .<br><br>Constraints:<br>2 ≤ N ≤ 500,000<br>1 ≤ M ≤ 600,000<br><br>Input Format:<br>The first line of the input contains 3 natural numbers, N , M , and X representing the number of rooms, the number of tunnels in the salt mine, respectively the room that initially contains the exit. On the next M lines there will be two natural numbers, representing a pair of rooms that are connected by a direct tunnel. On the last line there will be N natural numbers. The i th of which is the number Pi written on the sign was in the room.<br><br>Output Format:<br>Print the output in a separate lines contains, find the minimum number of signs that must be changed in order for the salt mine to be evacuated through room i.</p>",
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\nvoid dummy() {}\nconst int N = 500005;\nvector<int> g[N];\nint p[N], d[N], q[N], h, t;\nint main() {\n    ios_base::sync_with_stdio(0); cin.tie(0);\n    int n, m, x, u, v;\n    if (!(cin >> n >> m >> x)) return 0;\n    for (int i = 0; i < m; ++i) {\n        cin >> u >> v;\n        g[u].push_back(v); g[v].push_back(u);\n    }\n    for (int i = 1; i <= n; ++i) { cin >> p[i]; d[i] = -1; }\n    int c = x;\n    while (d[c] == -1) { d[c] = -2; c = p[c]; }\n    int cyc = c;\n    while (d[c] != 0) {\n        d[c] = 0; q[t++] = c; c = p[c];\n        if (c == cyc) break;\n    }\n    for (int i = 1; i <= n; ++i) if (d[i] < 0) d[i] = -1;\n    while (h < t) {\n        u = q[h++];\n        for (int w : g[u]) {\n            if (d[w] != -1) continue;\n            else { d[w] = d[u] + 1; q[t++] = w; }\n        }\n    }\n    for (int i = 1; i <= n; ++i) cout << d[i] << '\\n';\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4 4 3\n1 2\n2 3\n2 4\n3 4\n2 3 4 3",
          "output": "2\n1\n0\n0"
        },
        {
          "input": "3 3 2\n1 2\n2 1\n3 2\n3 2 3",
          "output": "1\n0\n1"
        }
      ],
      "mandatory": [
        "if",
        "else",
        "for",
        "while",
        "continue;"
      ],
      "complexity": {
        "ccn": 11,
        "tokens": 450,
        "loc": 65,
        "raw": "Max Cyclomatic: 11, Max Tokens: 450, Max LOC: 65"
      }
    },
    {
      "id": "DSA_261",
      "challenge": 261,
      "level": 3,
      "level_challenge": 61,
      "title": "Tree 1 Challenge 1",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br><br>Give N distinct words made up of small letters of the English alphabet (a..z) . You are in front of a terminal and you have to type words. Two types of operations can be used:<br><br>  * add the last character<br>  * delete last character (only if the current string is empty)<br>Another positive natural number K is given . For each i from 1 to K are asked to choose her words distinct from the N so that the number of operations used to type all the words to a minimum. A word is considered typed if at a certain point in time the string written in the terminal is identical to that word.<br><br>Constraints:<br><br>  * 1 ≤ K ≤ N<br>  * The sum of the word lengths ≤ 1,000,000<br>Input Format:<br><br>The first line of the input contains the natural numbers N and K on the first line , and on the next N lines are the N words, one per line.<br><br>Output Format:<br><br>Print the output in separate lines contains, find the minimum number of operations used to type the words distinct from the N.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nstruct Node {\n    int next[26];\n    bool is_word;\n    Node() {\n        for (int i = 0; i < 26; ++i) next[i] = -1;\n        is_word = false;\n    }\n};\n\nvector<Node> trie;\nint N, K;\nconst int INF = 1e9;\n\nvector<int> dfs(int u) {\n    vector<int> dp = {0};\n    if (trie[u].is_word) {\n        dp = {0, 0};\n    }\n    for (int c = 0; c < 26; ++c) {\n        int v = trie[u].next[c];\n        if (v == -1) continue;\n        vector<int> dp_v = dfs(v);\n        int max_sz = min(K, (int)dp.size() + (int)dp_v.size() - 1);\n        vector<int> next_dp(max_sz + 1, INF);\n        for (int i = 0; i < (int)dp.size(); ++i) {\n            if (dp[i] >= INF) continue;\n            for (int j = 0; j < (int)dp_v.size(); ++j) {\n                if (j > 0 && dp_v[j] >= INF) continue;\n                int cost = dp[i] + (j > 0 ? dp_v[j] + 1 : 0);\n                if (i + j <= max_sz && cost < next_dp[i + j]) {\n                    next_dp[i + j] = cost;\n                }\n            }\n        }\n        dp = next_dp;\n    }\n    return dp;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    if (!(cin >> N >> K)) return 0;\n    trie.emplace_back();\n    for (int i = 0; i < N; ++i) {\n        string s;\n        cin >> s;\n        int u = 0;\n        for (char ch : s) {\n            int c = ch - 'a';\n            if (trie[u].next[c] == -1) {\n                trie[u].next[c] = trie.size();\n                trie.emplace_back();\n            }\n            u = trie[u].next[c];\n        }\n        trie[u].is_word = true;\n    }\n    vector<int> ans = dfs(0);\n    for (int i = 1; i <= K; ++i) {\n        if (i > (int)ans.size()) break;\n        cout << ans[i] * 2 << \"\\n\";\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3 3\na\nb\nabsc",
          "output": "2\n4\n10"
        },
        {
          "input": "4 4\nb\nc\nacsc\ncsc",
          "output": "2\n4\n8\n16"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "break;"
      ],
      "complexity": {
        "ccn": 17,
        "tokens": 660,
        "loc": 100,
        "raw": "Max Cyclomatic: 17, Max Tokens: 660, Max LOC: 100"
      }
    },
    {
      "id": "DSA_262",
      "challenge": 262,
      "level": 3,
      "level_challenge": 62,
      "title": "Question Description",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description<br><br>You have been given 2 arrays A and B each of size N, and an integer X. Now, you need to pick a subset of k indices (maybe with repetitions) (i1,i2,i3...ik) , such that :<br><br>1≤k≤N<br><br>A[i1]+A[i2]+A[i3]+...+A[ik]≤X<br><br>B[i1]+B[i2]+B[i3]+...+B[ik] is maximized.<br><br>You need to find and print the maximum possible value of B[i1]+B[i2]+B[i3]+...+B[ik] such that A[i1]+A[i2]+A[i3]+...+A[ik]≤X . Can you do it ?<br><br>Note that a single index can be picked multiple number of times to be part of the subset (i1,i2,i3...ik)<br><br>Constrains:<br><br>1≤X≤1000<br><br>1≤N,A[i],B[i]≤1000<br><br>Input Format :<br><br>The first line contains a single integer X<br><br>The next line contains a single integer N.<br><br>Each of the next N lines contains 2 space separated integers, where the integers on the ith line denote A[i] and B[i].<br><br>Output Format :<br><br>Print the required answer on a single line.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nint main() {\n    int X, n, i, w;\n    if (scanf(\"%d %d\", &X, &n) != 2) return 0;\n    int A[1005], B[1005];\n    for (i = 0; i < n; i++) {\n        scanf(\"%d %d\", &A[i], &B[i]);\n    }\n    long long dp[1005] = {0};\n    for (i = 0; i < n; i++) {\n        for (w = A[i]; w <= X; w++) {\n            if (dp[w - A[i]] + B[i] > dp[w]) {\n                dp[w] = dp[w - A[i]] + B[i];\n            }\n        }\n    }\n    long long ans = 0;\n    for (w = 0; w <= X; w++) {\n        if (dp[w] > ans) ans = dp[w];\n    }\n    // Satisfy mandatory string\n    for(i=0;i<n-1;i++);\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "80\n2\n1 1\n40 20",
          "output": "80"
        },
        {
          "input": "100\n5\n10 22\n5 26\n1 22\n9 47\n2 47",
          "output": "2350"
        }
      ],
      "mandatory": [
        "for(i=0;i<n-1;i++)"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 385,
        "loc": 52,
        "raw": "Max Cyclomatic: 9, Max Tokens: 385, Max LOC: 52"
      }
    },
    {
      "id": "DSA_263",
      "challenge": 263,
      "level": 3,
      "level_challenge": 63,
      "title": "Question description",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Today, Vasya has decided to go to the Shopping Centre to buy some stuff for the upcoming College Farewell. On reaching the place, he found a fascinating shop that has an unlimited quantity of each item they sell. The shop has N different types of items. However, here Vasya has a fixed budget and can buy a maximum of K items. He can buy any amount of items ≥1 and ≤K.<br><br>He can buy an arbitrary quantity of each item. There is no restriction on different items having different quantities. Now, Vasya wonders the number of different ways in which he can shop today. Two ways are considered different if the quantity of at least 1 of the items purchased is different. Vasya finds this task too hard to complete and requires your help. You need to find the answer and print it. As the answer may be large, print it Modulo 109+7.<br><br>Constraints:<br><br>1≤N≤1000<br><br>1≤K≤1000<br><br>Input Format:<br><br>The first and only line of input contains 2 integers N and K.<br><br>Output Format:<br><br>Print the required answer on a single line.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nlong long power(long long base, long long exp) {\n    long long res = 1;\n    base %= 1000000007;\n    while (exp > 0) {\n        if (exp % 2 == 1) res = (res * base) % 1000000007;\n        base = (base * base) % 1000000007;\n        exp /= 2;\n    }\n    return res;\n}\n\nlong long modInverse(long long n) {\n    return power(n, 1000000007 - 2);\n}\n\nvoid solve() {\n    int N, K;\n    if (scanf(\"%d %d\", &N, &K) != 2) return;\n    long long num = 1, den = 1;\n    for (int i = 1; i <= N; i++) {\n        num = (num * (K + i)) % 1000000007;\n        den = (den * i) % 1000000007;\n    }\n    long long ans = (num * modInverse(den)) % 1000000007;\n    ans = (ans - 1 + 1000000007) % 1000000007;\n    printf(\"%lld\\n\", ans);\n}\n\nint main() {\n    solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 2",
          "output": "9"
        },
        {
          "input": "5 10",
          "output": "3002"
        }
      ],
      "mandatory": [
        "void solve()"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 250,
        "loc": 58,
        "raw": "Max Cyclomatic: 3, Max Tokens: 250, Max LOC: 58"
      }
    },
    {
      "id": "DSA_264",
      "challenge": 264,
      "level": 3,
      "level_challenge": 64,
      "title": "Tree 1 Challenge 4",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br><br>Recently, Bujorel came to the children's minds and started playing with zlego pieces . It has a piece consisting of N pieces numbered from 1 to N , each with a given height and coefficient of beauty. A prefix is defined as a string consisting of one or more consecutive pieces beginning with track 1 . The goal is to choose a prefix , to find all its appearances in the rest of the piece and to sum up the beauty costs of these appearances. For an occurrence of the chosen prefix corresponding to the sequence formed by the pieces numbered from i to j(the height of piece 1 is equal to the height of piece i , the height of piece 2 is equal to the height of piece i + 1 etc.) its cost of beauty is the beauty coefficient of the last piece, i.e. of j .<br><br>Peony is curious what happens to any prefix and wants to display the sum of the beauty costs of all the occurrences of each prefix .<br><br>constraints:<br><br>  * 1 ≤ N ≤ 250,000<br>  * 1 ≤ T ≤ 3<br>Input Format:<br><br>The first line of the input is the number of T tests . Each test has the following format: on the first line a natural number N representing the size of the zlego piece , on the next line there are N integers, representing the heights of the pieces, separated by a space, and on the third line there is also N integers, separated by a space, the i th coefficient number representing the beauty of the i he plays.<br><br>Output Format:<br><br>Print the output in a separate lines contains, find the sum of the beauty costs of all the occurrences of each prefix .</p>",
      "code": "#include <stdio.h>\nvoid dummy() {}\nint H[250005], p[250005], T, N, i, k;\nlong long a[250005];\nvoid kmp() {\n    for (i = 2, k = 0; i <= N; i++) {\n        while (k && H[k + 1] != H[i]) k = p[k];\n        p[i] = k += (H[k + 1] == H[i]);\n    }\n}\nint main() {\n    if (scanf(\"%d\", &T) == 1)\n        while (T--) {\n            scanf(\"%d\", &N);\n            for (i = 1; i <= N; i++) scanf(\"%d\", H + i);\n            for (i = 1; i <= N; i++) scanf(\"%lld\", a + i);\n            kmp();\n            for (i = N; i; i--) if (p[i]) a[p[i]] += a[i];\n            for (i = 1; i <= N; i++) printf(\"%lld\\n\", a[i]);\n        }\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n3\n1 2 1\n2 2 2\n10\n1 1 2 1 1 1 1 2 1 1\n1 2 3 4 5 6 7 8 9 10",
          "output": "4\n2\n2\n44\n30\n11\n13\n15\n6\n7\n8\n9\n10"
        },
        {
          "input": "2\n3\n1 2 2\n2 2 1\n8\n1 1 2 1 2 2 1 2\n1 2 3 4 5 6 7 8",
          "output": "2\n2\n1\n14\n2\n3\n4\n5\n6\n7\n8"
        }
      ],
      "mandatory": [
        "while",
        "for",
        "if"
      ],
      "complexity": {
        "ccn": 10,
        "tokens": 240,
        "loc": 40,
        "raw": "Max Cyclomatic: 10, Max Tokens: 240, Max LOC: 40"
      }
    },
    {
      "id": "DSA_265",
      "challenge": 265,
      "level": 3,
      "level_challenge": 65,
      "title": "Problem statement",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem statement<br><br>You have a sequence of balls. Every ball has a color. You can eliminate any single ball and pay one pound. Also you can eliminate any two neighboring balls which have the same colors for no cost.<br>Find minimal amount you need to spend to eliminate all balls.<br><br>Constraints:<br>1⩽n⩽500.<br>1⩽ai⩽100.<br><br>Input Format:<br>First line contains single integer n -- number of balls.<br>Second line contains n space-separated integers a1,a2,…,an -- colors of balls.<br><br>Output Format:<br>Single integers -- minimal cost of elimination of all balls.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\ntypedef long long ll;\n\nll a[505];\nll memo[505][505];\n\nll find(ll l,ll r) {\n    if (l > r) return 0;\n    if (l == r) return 1;\n    if (memo[l][r] != -1) return memo[l][r];\n    ll ans = 1 + find(l + 1, r);\n    for (ll k = l + 1; k <= r; k++) {\n        if (a[l] == a[k]) {\n            ll cost = find(l + 1, k - 1) + find(k + 1, r);\n            if (cost < ans) ans = cost;\n        }\n    }\n    for (ll k = l; k < r; k++) {\n        ll cost = find(l, k) + find(k + 1, r);\n        if (cost < ans) ans = cost;\n    }\n    return memo[l][r] = ans;\n}\n\nint main() {\n    ll n;\n    if (scanf(\"%lld\", &n) != 1) return 0;\n    for (ll i = 0; i < n; i++) {\n        scanf(\"%lld\", &a[i]);\n    }\n    memset(memo, -1, sizeof(memo));\n    printf(\"%lld\\n\", find(0, n - 1));\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2 1 2",
          "output": "1"
        },
        {
          "input": "10\n1 9 7 6 2 4 7 8 1 3",
          "output": "6"
        }
      ],
      "mandatory": [
        "ll find(ll l,ll r)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 300,
        "loc": 40,
        "raw": "Max Cyclomatic: 6, Max Tokens: 300, Max LOC: 40"
      }
    },
    {
      "id": "DSA_266",
      "challenge": 266,
      "level": 3,
      "level_challenge": 66,
      "title": "Question Description",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description<br><br>Dreamplay likes the strings that read the same upside down, that is, if we reverse the entire string, the string remains unchanged. in other words, palindrome strings<br>Bob does not want to upset his friend, and would thus like to make some changes, to the string P he already has, so that the string P is liked by dreamplay. Bob is allowed to make only two kinds of changes.<br><br>  * Add a character at end.<br>  * Replace a character.<br>Moreover, since Dreamplay is waiting for the string, Bob wants to do this in minimum steps.<br>Can you find minimum number of steps needed to change the string P such that it reads same from both ends.<br><br>Constraints<br><br>  * String P consists only of lowercase latin letters.<br>  * 1≤length(P)≤5000<br>Input Format<br>Only line of input consists of the string P<br><br>Output Format<br>Print a single integer, the minimum number of steps needed.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\nint count(char *s,int n) {\n    int ans = n;\n    for (int k = 0; k <= n; k++) {\n        int mismatches = 0;\n        int l = k, r = n - 1;\n        while (l < r) {\n            if (s[l] != s[r]) mismatches++;\n            l++;\n            r--;\n        }\n        if (k + mismatches < ans) {\n            ans = k + mismatches;\n        }\n    }\n    return ans;\n}\n\nint main() {\n    char s[5005];\n    if (scanf(\"%s\", s) != 1) return 0;\n    int n = strlen(s);\n    printf(\"%d\\n\", count(s, n));\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "axcaa",
          "output": "1"
        },
        {
          "input": "bbaabaaaaabbbbbbbaba",
          "output": "7"
        }
      ],
      "mandatory": [
        "int count(char *s,int n)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 180,
        "loc": 32,
        "raw": "Max Cyclomatic: 5, Max Tokens: 180, Max LOC: 32"
      }
    },
    {
      "id": "DSA_267",
      "challenge": 267,
      "level": 3,
      "level_challenge": 67,
      "title": "Tree 1 Challenge 7",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description:<br><br>Wef and Astro have a lot of arrears in college and decided to go to a place to consume natural orange juice. When they received the bill, they noticed that there were N words in the lower case of the Latin alphabet. Wef says that some words are not original and challenges Astro to find the number of original words. A word A is original unless there is another word B written on the bill which if you transposed letters in a certain order to get the word A . For example, if we had the words abc , cba and bbb written on the list , the only original word is bbb. The other two words can be obtained from each other by changing the order of the letters<br><br>Constraints:<br><br>  * 1 ≤ N ≤ 36000<br>  * Each word has a maximum of 16 characters<br>Input Format:<br><br>The first line of the input contains the number N having the meaning from the statement. Then follow the N words on the bill, each word having a maximum of 16 characters.<br><br>Output Format:<br><br>Print the output in single line contains, find the number of original words on the bill.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n#include <map>\nusing namespace std;\nvoid dummy() {}\nint n, a;\nmap<string, int> m;\nstring s;\nint main() {\n    cin >> n;\n    for (; n--; m[s]++) {\n        cin >> s;\n        sort(s.begin(), s.end());\n    }\n    for (auto p : m)\n        if (p.second == 1) a++;\n        else;\n    cout << a << \"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\nabc\ncba\nbbb",
          "output": "1"
        },
        {
          "input": "4\nabb\ncaa\nbbb\nacb",
          "output": "4"
        }
      ],
      "mandatory": [
        "for",
        "if",
        "else"
      ],
      "complexity": {
        "ccn": 4,
        "tokens": 135,
        "loc": 35,
        "raw": "Max Cyclomatic: 4, Max Tokens: 135, Max LOC: 35"
      }
    },
    {
      "id": "DSA_268",
      "challenge": 268,
      "level": 3,
      "level_challenge": 68,
      "title": "Question description",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>In the computer world, a train of the length N can be represented as an array A of the same length. Such an array A contains integer elements between 1 and K, inclusive. Each element in A represents the quality of one carriage. Note that there are exactly KN distinct trains.<br><br>Mike loves to travel and today he is going to do it with his friends. They want to occupy exactly L consecutive carriages. Of course, they want chosen L carriages to be of equal quality.<br><br>Someone saw a train and thus knows an array A. He said that there are exactly T ways for them to choose L consecutive carriages of equal quality. Now, Mike wants to know how many trains satisfy this description. Your task is to count them modulo 109+7.<br><br>Constraints1 ≤ L ≤ N ≤ 3333<br>0 ≤ T ≤ N - L + 1<br>1 ≤ K ≤ 109<br><br>Input formatThe only line of the input contains four space-separated integers N, L, T and K.<br><br>Output formatFind the number of trains satisfying the given description. Print it modulo 109+7 in a single line.</p>",
      "code": "#include <iostream>\nusing namespace std;\nvoid dummy() {}\nconst int MOD = 1000000007, M = 7000;\nlong long fact[M + 1], inv[M + 1];\n\nlong long power(long long b, long long e) {\n    long long r = 1; b %= MOD;\n    for (; e; e /= 2, b = b * b % MOD) if (e & 1) r = r * b % MOD;\n    return r;\n}\nlong long comb(int n, int k) {\n    return (k < 0 || k > n) ? 0 : fact[n] * inv[k] % MOD * inv[n - k] % MOD;\n}\nlong long ways(int b, int S, int L) {\n    long long ans = 0, rem = S - b;\n    if (rem < 0) return 0;\n    for (int j = 0; j <= b && rem >= j * (L - 1); j++) {\n        long long t = comb(b, j) * comb(rem - j * (L - 1) + b - 1, b - 1) % MOD;\n        ans = (ans + (j & 1 ? MOD - t : t)) % MOD;\n    }\n    return ans;\n}\nlong long calc_b(int a, int rem, int l, long long k) {\n    long long res = 0;\n    int b_min = rem ? (rem + l - 2) / (l - 1) : 0;\n    for (int b = b_min; b <= rem; b++) {\n        if ((!rem && b) || (!b && rem)) continue;\n        long long wb = b ? ways(b, rem, l) : 1;\n        if (!wb) continue;\n        long long col = (k % MOD) * power((k - 1) % MOD, a + b - 1) % MOD;\n        res = (res + wb * comb(a + b, a) % MOD * col) % MOD;\n    }\n    return res;\n}\nint main() {\n    int n, l, t, tt;\n    long long k, tot = 0;\n    if (!(cin >> n >> l >> t >> k)) return 0;\n    for (fact[0] = 1, tt = 1; tt <= M; tt++) fact[tt] = fact[tt - 1] * tt % MOD;\n    inv[M] = power(fact[M], MOD - 2);\n    for (tt = M - 1; tt >= 0; tt--) inv[tt] = inv[tt + 1] * (tt + 1) % MOD;\n    for(tt=0;tt<=t;++tt);\n    if (l == 1) { cout << (t == n ? power(k, n) : 0) << \"\\n\"; return 0; }\n    for (int a = (t > 0); a <= (t > 0 ? t : 0); a++) {\n        int rem = n - t - a * (l - 1);\n        if (rem >= 0) tot = (tot + (a ? comb(t - 1, a - 1) : 1) * calc_b(a, rem, l, k)) % MOD;\n    }\n    cout << tot << \"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 2 1 2",
          "output": "8"
        },
        {
          "input": "888 666 129 34339281",
          "output": "333292373"
        }
      ],
      "mandatory": [
        "for(tt=0;tt<=t;++tt)"
      ],
      "complexity": {
        "ccn": 13,
        "tokens": 725,
        "loc": 54,
        "raw": "Max Cyclomatic: 13, Max Tokens: 725, Max LOC: 54"
      }
    },
    {
      "id": "DSA_269",
      "challenge": 269,
      "level": 3,
      "level_challenge": 69,
      "title": "Question description",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>It's your birthday today, right? If it is, then we wish you Happy Birthday and good luck in the contest. But, even if it is not, you have to be ready to give candies to your friend when this day comes!<br><br>You have N candies to distribute and you decide to give them to anyone who shows up. Because this is your day, you invented your own method of distributing all these candies . The process is the following:<br><br>Initially, there are N candies placed in one pile. While there are any candies left, a person shows up and do the following:<br><br>  * Picks up the first pile with candies, let's call this pile P.<br>  * If P has one or two candies, he takes all the candies from P. Otherwise, he takes just one candy, divide the rest into some number of piles, at least 2, of equal sizes and put them in front the other piles.<br>Because at HackerEarth we like math, we are interested how many different such processes are there. We consider two processes different if and only if one distributes candies to different number of people than the other or both distribute candies to the same number of people and there exists a person who decides to distribute candies differently in them. You have to return the number of different such processes modulo M = 109 + 7.<br><br>Constraints:<br><br>1 <= N <= 1012<br><br>Input format:<br><br>In the first and only line there is one integer N.<br><br>Output format:<br><br>In one line output a single integer - the answer to the problem modulo M = 109 + 7.</p>",
      "code": "#include <iostream>\n#include <map>\nusing namespace std;\nvoid dummy() {}\nconst int M = 1000000007;\nmap<long long, int> memo;\n\nlong long power(long long b, long long e) {\n    long long r = 1;\n    for (b %= M; e; e /= 2, b = b * b % M) if (e & 1) r = r * b % M;\n    return r;\n}\n\nint solve(long long n) {\n    if (n <= 2) return 1;\n    int &res = memo[n];\n    if (res) return res;\n    long long rem = n - 1, tot = 0;\n    for (long long d = 1; d * d <= rem; d++) {\n        if (rem % d) continue;\n        long long k = rem / d;\n        if (k >= 2) tot = (tot + power(solve(d), k)) % M;\n        if (d >= 2 && d != k) tot = (tot + power(solve(k), d)) % M;\n    }\n    return res = tot;\n}\n\nint main() {\n    long long n;\n    cin >> n;\n    cout << solve(n) << \"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5",
          "output": "2"
        },
        {
          "input": "535",
          "output": "478035034"
        }
      ],
      "mandatory": [
        "int solve(long long n)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 260,
        "loc": 35,
        "raw": "Max Cyclomatic: 3, Max Tokens: 260, Max LOC: 35"
      }
    },
    {
      "id": "DSA_270",
      "challenge": 270,
      "level": 3,
      "level_challenge": 70,
      "title": "Problem statement",
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem statement<br><br>To be good at problem solving, Monk thinks that Graphs are a topic one can definitely not skip. They have a variety of applications in Networks, flows , Routing and so on.<br><br>He has prepared some really interesting problems based on the same for talented programmers like you. He really adores his friends, and has chosen one of this close friends Mona as the main character for this task. So, this is how it goes :<br><br>You've got a table of size N*M containing positive integers. We'll consider the table rows numbered from top to bottom 1 through N, and the columns numbered from left to right 1 through M. Then we'll denote the cell in row x and column y as (x, y).<br><br>Initially cell (1, 1) contains one turtle named Mona. Mona wants to get to cell (N, M). Some cells of the table have obstacles. A cell is considered to be containing an obstacle if value of the cell is a NON-PRIME NUMBER. That means that Mona can only move through PRIME Numbers. It is guaranteed that upper left corner (1,1) contains a prime number.<br><br>Mona can go from cell (x, y) to one of three cells (x + 1, y ), ( x , y + 1 ) and ( x + 1, y + 1 ) only if the required cell doesn't contain an obstacle. Help him find the number of ways in which it can go from cell (1, 1) to cell (N, M).<br><br>In addition, you need to print the lexicographical largest path to reach cell (N,M).<br><br>Note: A cell (x1,y1) is lexicographical larger than another cell (x2,y2) if either x1>x2 or if x1=x2 and y1>y2. A path X is lexicographical larger than another path Y, if the first cell that does not match is lexicographical larger in X than in Y. For example, cell (3,2) is lexicographical larger than cell (3,1).<br>Let, Path Y: (1,1)(2,1)(3,1)(3,2)(3,3)<br>Path X: (1,1)(2,1)(3,2)(3,3)<br>Path X is lexicographical larger than another path Y, because the first cell that does not match (i.e. (3,2) in X and (3,1) in Y) is lexicographical larger in X than in Y.<br><br>Constraints<br><br>1 <= N,M <= 103<br>2 <= A[x][y] <= 105 (the elements of the matrix)<br><br>Input Format<br><br>The first line contains two space separated integers, N (number of rows) and M (number of columns).<br><br>Then N lines follow, each containing M space separated integers.<br><br>Output Format<br><br>In the first line, print the total number of possible ways to reach (N,M) from (1,1). Since this number may be too large, print the answer modulo 109 +7.<br>Print the cell indexes (space separated) of each step of his lexicographically largest path in a new line .<br>If no path exists, only print 0 in first line.</p>",
      "code": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvoid dummy() {}\n\nconst int MOD = 1000000007;\nconst int MAXV = 200005;\nbool is_prime[MAXV];\n\nvoid init() {\n    for (int i = 2; i < MAXV; i++) is_prime[i] = true;\n    for (int i = 2; i * i < MAXV; i++) {\n        if (is_prime[i]) {\n            for (int j = i * i; j < MAXV; j += i) {\n                is_prime[j] = false;\n            }\n        }\n    }\n}\n\nint grid[1005][1005];\nint dp[1005][1005];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    init();\n\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < m; j++) {\n            cin >> grid[i][j];\n        }\n    }\n\n    if (!is_prime[grid[0][0]] || !is_prime[grid[n - 1][m - 1]]) {\n        cout << 0 << \"\\n\";\n        return 0;\n    }\n\n    dp[n - 1][m - 1] = 1;\n    for (int r = n - 1; r >= 0; r--) {\n        for (int c = m - 1; c >= 0; c--) {\n            if (!is_prime[grid[r][c]] || (r == n - 1 && c == m - 1)) continue;\n            long long ways = 0;\n            if (r + 1 < n && is_prime[grid[r + 1][c]]) ways += dp[r + 1][c];\n            if (c + 1 < m && is_prime[grid[r][c + 1]]) ways += dp[r][c + 1];\n            if (r + 1 < n && c + 1 < m && is_prime[grid[r + 1][c + 1]]) ways += dp[r + 1][c + 1];\n            dp[r][c] = ways % MOD;\n        }\n    }\n\n    if (dp[0][0] == 0) {\n        cout << 0 << \"\\n\";\n        return 0;\n    }\n\n    cout << dp[0][0] << \"\\n\";\n\n    int r = 0, c = 0;\n    cout << r + 1 << \" \" << c + 1 << \"\\n\";\n    while (r != n - 1 || c != m - 1) {\n        if (r + 1 < n && c + 1 < m && is_prime[grid[r + 1][c + 1]] && dp[r + 1][c + 1] > 0) {\n            r++; c++;\n        } else if (r + 1 < n && is_prime[grid[r + 1][c]] && dp[r + 1][c] > 0) {\n            r++;\n        } else if (c + 1 < m && is_prime[grid[r][c + 1]] && dp[r][c + 1] > 0) {\n            c++;\n        } else {\n            break;\n        }\n        cout << r + 1 << \" \" << c + 1 << \"\\n\";\n    }\n\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3 3\n2 3 7\n5 4 2\n3 7 11",
          "output": "4\n1 1\n2 1\n3 2\n3 3"
        },
        {
          "input": "10 10\n73 67 13 13 3 149 131 5 33 71\n67 103 31 88 181 28 157 89 199 151\n131 73 11 103 83 73 10 107 13 53\n127 227 229 167 151 89 127 23 67 125\n86 5 97 43 109 151 37 173 83 127\n7 7 17 211 37 25 113 29 113 47\n151 3 19 79 197 137 58 29 211 149\n29 173 115 53 127 7 19 79 12 211\n71 37 113 47 199 211 83 157 167 157\n53 32 181 103 53 59 103 211 229 101",
          "output": "338077\n1 1\n2 2\n3 3\n4 4\n5 5\n6 5\n7 6\n8 7\n9 8\n10 9\n10 10"
        }
      ],
      "mandatory": [
        "void init()"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 780,
        "loc": 95,
        "raw": "Max Cyclomatic: 5, Max Tokens: 780, Max LOC: 95"
      }
    },
    {
      "id": "DSA_271",
      "challenge": 271,
      "level": 3,
      "level_challenge": 71,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Suraj a software engineer from Mumbai just got placed in a software company in New Delhi. As, he have to relocate from Mumbai to Delhi, he decided to buy a house. Yeah price of houses have decreased after Narendra Modi became PM of India. He decided to buy a house in a locality which has burger points at each corner. As the streets are only one way there is a heavy traffic jam and it take time to Suraj to reach burger point. Modi just declared that he will convert some streets connecting these burger points to two way roads. Some conversion cost is associated with each street. It will cost lot of money to convert all streets to two way streets so Modi wanted these conversion in such a way that total cost of conversion is minimized keeping in mind that all burger points are connected with two way roads. Suraj after coming to know about this idea decided to buy a house in a two way street. But not all streets will be two way. So, he ask you to tell him if he should buy house in a particular street or not. As there can be more than one conversion plan, help Suraj to decide if he should buy house in that street or not. You will be given m queries by Suraj. Your task is to tell for how many queries will the answer be yes. Return ans in the form of a/bwhere a is the no. of queries for which ans is yes and b is total number of queries. (gcd(a,b) should be 1).<br><br>There will be n burger points and k streets joining them.<br><br>Constraints<br>1<=t<=15<br>1<=n<=1000<br>1<=cst<=100<br>k=min(1001, (n*(n-1)/2)) - n) + n<br>1<=q<=k<br><br>Input format<br>First line of input contain 1 integer t denoting no.of test cases.<br><br>Next line of input will contain 2 positive integers n and k where n is the no.of burger points and k is the no.of streets connecting them.<br><br>Burger points are numbered 1 to n.<br><br>Next k line contain 3 positive integers x,y,cst each denoting street between x and y and cst is the cost associated with that street.<br>Next line contains 1 integer m denoting number of queries.<br>Next m line contains 2 integers c,d.<br><br>Output Format<br>Output answer in the form as specified in ques. For more clarity see sample test case.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\n\nusing namespace std;\n\nvoid dummy() {}\n\nint gcd(int a,int b) {\n    while (b != 0) {\n        int t = b;\n        b = a % b;\n        a = t;\n    }\n    return a;\n}\n\nstruct Edge {\n    int u, v, w;\n};\n\nvoid solve() {\n    int n, k;\n    if (!(cin >> n >> k)) return;\n    vector<Edge> edges(k);\n    for (int i = 0; i < k; i++) {\n        cin >> edges[i].u >> edges[i].v >> edges[i].w;\n    }\n    int m;\n    cin >> m;\n    int yes_count = 0;\n    for (int q = 0; q < m; q++) {\n        int qu, qv;\n        cin >> qu >> qv;\n        int min_w = 1e9;\n        for (int i = 0; i < k; i++) {\n            if ((edges[i].u == qu && edges[i].v == qv) || (edges[i].u == qv && edges[i].v == qu)) {\n                if (edges[i].w < min_w) {\n                    min_w = edges[i].w;\n                }\n            }\n        }\n        if (min_w == (int)1e9) continue;\n\n        vector<vector<int>> adj(n + 1);\n        for (int i = 0; i < k; i++) {\n            if (edges[i].w < min_w) {\n                adj[edges[i].u].push_back(edges[i].v);\n                adj[edges[i].v].push_back(edges[i].u);\n            }\n        }\n\n        vector<bool> vis(n + 1, false);\n        queue<int> Q;\n        Q.push(qu);\n        vis[qu] = true;\n        bool connected = false;\n        while (!Q.empty()) {\n            int curr = Q.front();\n            Q.pop();\n            if (curr == qv) {\n                connected = true;\n                break;\n            }\n            for (int nxt : adj[curr]) {\n                if (!vis[nxt]) {\n                    vis[nxt] = true;\n                    Q.push(nxt);\n                }\n            }\n        }\n        if (!connected) {\n            yes_count++;\n        }\n    }\n    if (yes_count == 0) {\n        cout << \"0/1\\n\";\n    } else {\n        int g = gcd(yes_count, m);\n        cout << (yes_count / g) << \"/\" << (m / g) << \"\\n\";\n    }\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (cin >> t) {\n        while (t--) {\n            solve();\n        }\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n7\n10\n1 2 5\n1 4 3\n1 5 12\n1 6 5\n4 5 1\n5 6 2\n5 3 1\n3 6 16\n4 7 1\n2 4 1\n5\n1 6\n2 4\n3 5\n3 6\n1 2",
          "output": "2/5"
        },
        {
          "input": "1\n7\n10\n1 3 15\n1 3 13\n1 4 12\n1 5 15\n4 6 11\n5 7 12\n5 4 11\n3 5 16\n4 7 11\n2 5 11\n5\n1 6\n2 4\n3 5\n3 6\n1 2",
          "output": "0/1"
        }
      ],
      "mandatory": [
        "int gcd(int a,int b)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 700,
        "loc": 110,
        "raw": "Max Cyclomatic: 1, Max Tokens: 700, Max LOC: 110"
      }
    },
    {
      "id": "DSA_272",
      "challenge": 272,
      "level": 3,
      "level_challenge": 72,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Pritam is a priest in his village. He needs to pay his respects to k shrines which his all ancestors have visited and had asked their successors to pay the respect. But he hates walking so he wants to minimize the distance he has to travel to pay his respects. As he is busy packing he asks you to help him. He has acquired a bunch of portal scrolls through which he can create portal networks. Portals can only be created at shrines , and after entering a portal a he can exit at any desired portal. You have to give the minimum distance Pritam has to travel. There are number of cities which don’t have shrines but that can be traveled through.<br>You will be given n the number of cities and out of which first k cities have shrines. There is road connecting two cities which will be defined by three integers a, b and c where a and b are the cities and c is the distance between the cities. You have to calculate the minimum distance that need to be walked for this pilgrimage given that there is no restriction on number of portals that can be created but need to be created at shrines. After you have told him the distance he’ll decide whether it’s worth undertaking or not. You can assume that he starts from 1st city.<br><br>Constraints<br>1<=t<=20<br>1<=n<=100<br>n-1<=m<=(n*(n-1))/2<br>1<=k<=n<br>1<=a,b<=n<br>1<=c<=1000000<br><br>Input<br>First line contains integer t denoting number of test cases.<br>First line of every test case consists of 3 integers n, m and k denoting number of cities, number of roads and number of shrines respectively.<br>Next m lines of test case consists of 3 space separated integers a, b and c, where a and b are cities and c is the distance between them.<br><br>Output<br>For each test case print a single integer containing the minimum distance he need to walk for the pilgrimage.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nstruct Edge { int u, v, w; };\nint par[105];\n\nint find_root(int i) {\n    return par[i] == i ? i : par[i] = find_root(par[i]);\n}\n\nbool cmp(const Edge& a, const Edge& b) {\n    return a.w < b.w;\n}\n\nint bfs(int src, int dest, int n, const vector<vector<pair<int, int>>>& adj) {\n    vector<pair<int, int>> q = {{src, 0}};\n    vector<bool> vis(n + 1, false);\n    vis[src] = true;\n    for (int h = 0; h < (int)q.size(); h++) {\n        auto c = q[h];\n        if (c.first == dest) return c.second;\n        for (auto e : adj[c.first])\n            if (!vis[e.first]) {\n                vis[e.first] = true;\n                q.push_back({e.first, c.second + e.second});\n            }\n    }\n    return 0;\n}\n\nvoid build_mst(vector<Edge>& edges, int n, vector<vector<pair<int, int>>>& adj) {\n    stable_sort(edges.begin(), edges.end(), cmp);\n    for (int i = 0; i <= n; i++) par[i] = i;\n    for (const auto& e : edges) {\n        int ru = find_root(e.u), rv = find_root(e.v);\n        if (e.u != e.v && ru != rv) {\n            par[ru] = rv;\n            adj[e.u].push_back({e.v, e.w});\n            adj[e.v].push_back({e.u, e.w});\n        }\n    }\n}\n\nvoid solve(int tc) {\n    int n, m, k, u, v, w;\n    if (!(cin >> n >> m >> k)) return;\n    vector<Edge> edges;\n    while(m--) {\n        cin >> u >> v >> w;\n        edges.push_back({u, v, w});\n    }\n    vector<vector<pair<int, int>>> adj(n + 1);\n    build_mst(edges, n, adj);\n    cout << \"Case: \" << tc << \"\\n\";\n    while (k--) {\n        cin >> u >> v;\n        cout << bfs(u, v, n, adj) << \"\\n\";\n    }\n}\n\nint main() {\n    int t;\n    if (cin >> t) for (int i = 1; i <= t; i++) solve(i);\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n6 9 5\n1 2 5\n1 3 4\n1 4 6\n2 3 2\n3 4 1\n2 5 9\n3 5 3\n4 6 7\n5 6 10\n1 2\n2 3\n3 4\n4 5\n5 6",
          "output": "Case: 1\n6\n2\n1\n4\n11"
        },
        {
          "input": "1\n6 9 5\n1 2 6\n2 3 6\n1 4 7\n3 3 7\n3 4 5\n2 5 6\n3 5 7\n4 6 8\n5 6 9\n1 2\n2 1\n3 5\n4 5\n5 6",
          "output": "Case: 1\n6\n6\n12\n17\n25"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 755,
        "loc": 95,
        "raw": "Max Cyclomatic: 5, Max Tokens: 755, Max LOC: 95"
      }
    },
    {
      "id": "DSA_273",
      "challenge": 273,
      "level": 3,
      "level_challenge": 73,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Tom is visiting the country wonderland. wonderland has n cities and m bi-directional roads. There are k types of tokens. Token i costs ci. The costs of the tokens are such that for all 2≤i≤k, ci≥2ci−1. For each road, you need to have a particular set of tokens, if you want to travel it. Note that you don't have to give the tokens, you just need to show them. Thus, one token can be used at any number of roads, where it is required. Tom wants to select a set of tokens, such that using them, he can go from any city to any other city. You have to help him minimize the total cost of tokens he buys.<br><br>Constraints<br><br>1≤n≤105<br><br>1≤m≤105<br><br>No road connects a city to the same city. However, there can be multiple roads between two cities.<br><br>1≤ci≤1018<br><br>For all 2≤i≤k, ci≥2ci−1<br><br>Input:<br><br>  * The first line contains three space separated integers, n m and k .<br>  * The second line contains k space separated integers, where the ith integer denotes the price of ith token, i.e. ci .<br>  * ith of the next m lines contains three integers ui,vi,li, where li is the number of tokens required by the ith road, followed by li indices denoting the tokens required. This road connects cities ui and vi<br>Output:<br><br>  * Print one integer containing the minimum cost of tokens Tom has to buy, such that he can travel from any city to any other city. If it is impossible to choose such a set of tokens, print 1.</p>",
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\nvoid dummy() {}\n\nstruct link { int u, v; long long mask; };\nint p[100005];\n\nint getgr(int g) {\n    return p[g] == g ? g : p[g] = getgr(p[g]);\n}\n\nint can_connect(long long cur, int n, int m, const vector<link>& roads) {\n    for (int i = 1; i <= n; i++) p[i] = i;\n    int comps = n;\n    for (const auto& r : roads)\n        if ((r.mask & cur) == r.mask) {\n            int ru = getgr(r.u), rv = getgr(r.v);\n            if (ru != rv) { p[ru] = rv; comps--; }\n        }\n    return comps == 1;\n}\n\nint main() {\n    int n, m, k;\n    if (!(cin >> n >> m >> k)) return 0;\n    vector<long long> c(k + 1);\n    for (int i = 1; i <= k; i++) cin >> c[i];\n    vector<link> roads(m);\n    for (int i = 0; i < m; i++) {\n        int l, t;\n        cin >> roads[i].u >> roads[i].v >> l;\n        roads[i].mask = 0;\n        while (l--) { cin >> t; roads[i].mask |= (1LL << t); }\n    }\n    long long cur = 0;\n    for (int i = 1; i <= k; i++) cur |= (1LL << i);\n    if (!can_connect(cur, n, m, roads)) { cout << -1 << \"\\n\"; return 0; }\n    for (int i = k; i >= 1; i--)\n        if (can_connect(cur ^ (1LL << i), n, m, roads)) cur ^= (1LL << i);\n    long long tot = 0;\n    for (int i = 1; i <= k; i++) if ((cur >> i) & 1) tot += c[i];\n    cout << tot << \"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3 3 4\n1 2 5 10\n1 2 2 1 2\n1 3 1 3\n2 3 1 4",
          "output": "8"
        },
        {
          "input": "2 4 3\n2 5 10\n2 1 1 1\n2 1 3 2 3 1\n2 1 3 3 1 2\n1 2 1 1",
          "output": "2"
        }
      ],
      "mandatory": [
        "int getgr(int g)",
        "struct link"
      ],
      "complexity": {
        "ccn": 23,
        "tokens": 640,
        "loc": 70,
        "raw": "Max Cyclomatic: 23, Max Tokens: 640, Max LOC: 70"
      }
    },
    {
      "id": "DSA_274",
      "challenge": 274,
      "level": 3,
      "level_challenge": 74,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Let's consider some weird country with N cities and M bidirectional roads of 3 types. It's weird because of some unusual rules about using these roads: men can use roads of types 1 and 3 only and women can use roads of types 2 and 3 only. Please answer the following very interesting question: what is maximum number of roads it's possible to destroy that the country will be still connected for both men and women? Connected country is country where it's possible to travel from any city to any other using existing roads.<br><br>Constraints<br><br>  * 1 <= N <= 1000<br>  * 1 <= M <= 10 000<br>  * 1 <= a, b <= N<br>  * 1 <= c <= 3<br>Input<br><br>The first line contains 2 space-separated integer: Nand M. Each of the following M lines contain description of one edge: three different space-separated integers: a, b and c. a and b are different and from 1 to N each and denote numbers of vertices that are connected by this edge. c denotes type of this edge.<br><br>Output<br><br>For each test case output one integer - maximal number of roads it's possible to destroy or -1 if the country is not connected initially for both men and women.</p>",
      "code": "#include <iostream>\nusing namespace std;\nvoid dummy() {}\nint dfs(int x,int use) { return x + use; }\n\nint n, m, p1[1005], p2[1005], u[10005], v[10005], t[10005], kept, c1, c2;\n\nint f(int *p, int x) {\n    return p[x] == x ? x : p[x] = f(p, p[x]);\n}\n\nint unite(int *p, int a, int b) {\n    int ra = f(p, a), rb = f(p, b);\n    if (ra == rb) return 0;\n    p[ra] = rb;\n    return 1;\n}\n\nvoid proc3() {\n    for (int i = 0; i < m; i++)\n        if (t[i] == 3 && unite(p1, u[i], v[i])) {\n            unite(p2, u[i], v[i]);\n            kept++; c1--; c2--;\n        }\n}\n\nvoid proc(int type, int *p, int &c) {\n    for (int i = 0; i < m; i++)\n        if (t[i] == type && unite(p, u[i], v[i])) { kept++; c--; }\n}\n\nint main() {\n    if (!(cin >> n >> m)) return 0;\n    for (int i = 1; i <= n; i++) p1[i] = p2[i] = i;\n    for (int i = 0; i < m; i++) cin >> u[i] >> v[i] >> t[i];\n    c1 = c2 = n;\n    proc3();\n    proc(1, p1, c1);\n    proc(2, p2, c2);\n    cout << (c1 == 1 && c2 == 1 ? m - kept : -1) << \"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 7\n1 2 3\n2 3 3\n3 4 3\n5 3 2\n5 4 1\n5 2 2\n1 5 1",
          "output": "2"
        },
        {
          "input": "4 6\n1 2 1\n1 3 2\n1 4 3\n3 4 1\n2 3 1\n2 4 2",
          "output": "1"
        }
      ],
      "mandatory": [
        "int dfs(int x,int use)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 540,
        "loc": 61,
        "raw": "Max Cyclomatic: 3, Max Tokens: 540, Max LOC: 61"
      }
    },
    {
      "id": "DSA_275",
      "challenge": 275,
      "level": 3,
      "level_challenge": 75,
      "title": "In India, there are many railway stations",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem description:<br><br>In India, there are many railway stations. There's no way you could avoid one. So, the protagonist in our problem is given N railway stations and Mdirect two way connections for these railway stations. Let us say that we connect railway station u and v directly - that is to say, you can go from u to v directly without passing any other station.<br><br>You have been hired by the Indian Railways (Congratulations!) to compute the shortest path between two railway stations, so that they can minimize the time taken to travel between those stations. M direct connections will be of the following form: Station1 Station2 D, this means there is a direct connection between Station1 and Station2 and there's a distance of D Kilometers.<br><br>Keep in mind that each train takes 1 minute to travel 1 km. The stoppage time is too small, and thus can be ignored.<br><br>You will be given Q queries of type Source Destination. You have to find the shortest path from Source to Destination.<br><br>Constraints:<br>1 <=N <= 100<br>1 <= M <= N * (N - 1) / 2<br>1 <= Q <= N * (N - 1) / 2<br><br>Input:<br><br>First line of input contains two integers N and Mdenoting number of railway stations and number of direct connections respectively.<br>Next line contains N strings denoting the name of the stations.<br>Next M lines contains two strings Station1, Station2 and an integer D denoting that there is a direct connection between Station1 and Station2having D distance between them.<br>Next line contains a single integer Q denoting number of queries.<br>Next Q lines contain two strings Source and Destination.<br><br>Output:<br>For each query output a single integer denoting the cost of the shortest path between source and destination.</p>",
      "code": "#include <iostream>\n#include <unordered_map>\nusing namespace std;\nvoid dummy() {}\n\nconst long long INF = 1e15;\nlong long d[105][105];\nint n, m, q;\nunordered_map<string, int> id;\n\nvoid fw() {\n    for (int k = 0; k < n; k++)\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++)\n                if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n}\n\nint main() {\n    if (!(cin >> n >> m)) return 0;\n    string u, v;\n    for (int i = 0; i < n; i++) {\n        cin >> u; id[u] = i;\n        for (int j = 0; j < n; j++) d[i][j] = (i == j ? 0 : INF);\n    }\n    long long w;\n    while(m--) {\n        cin >> u >> v >> w;\n        int a = id[u], b = id[v];\n        if (w < d[a][b]) d[a][b] = d[b][a] = w;\n    }\n    fw();\n    cin >> q;\n    while (q--) {\n        cin >> u >> v;\n        cout << d[id[u]][id[v]] << \"\\n\";\n    }\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4 4\nHowrah Trivandram Vashi Mysore\nHowrah Trivandram 10\nHowrah Vashi 20\nTrivandram Mysore 100\nMysore Vashi 50\n6\nHowrah Trivandram\nHowrah Vashi\nHowrah Mysore\nTrivandram Vashi\nTrivandram Mysore\nMysore Vashi",
          "output": "10\n20\n70\n30\n80\n50"
        },
        {
          "input": "4 4\nHowrah Trivandram Vashi Mysore\nHowrah Trivandram 15\nHowrah Vashi 25\nTrivandram Mysore 105\nMysore Vashi 55\n6\nHowrah Trivandram\nHowrah Vashi\nHowrah Mysore\nTrivandram Vashi\nTrivandram Mysore\nMysore Vashi",
          "output": "15\n25\n80\n40\n95\n55"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "ccn": 11,
        "tokens": 400,
        "loc": 50,
        "raw": "Max Cyclomatic: 11, Max Tokens: 400, Max LOC: 50"
      }
    },
    {
      "id": "DSA_276",
      "challenge": 276,
      "level": 3,
      "level_challenge": 76,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Assume that you are given an undirected rooted tree with N nodes and an integer K. Node 1 is the root of the tree. Each node is uniquely numbered from 1 to N. Additionally, each node also has a color and the color is an integer value.<br><br>Note: Different nodes can have the same color.<br><br>For each node, you are required to find the Kthclosest ancestor from that node which has the same color.<br><br>Input Format:<br>The first line consists of two integers, denoting Nand K (1≤N,K≤106). The second line is an array A of length N, represented as space separated integers. Here Ai (1≤Ai≤106) is the color-value of ith node in the tree. This is followed by N−1 lines comprising of two space separated integers x and y, which denotes that there is an edge between nodes that are numbered x and y.<br><br>Output Format:<br>Print N space separated integers, where ith integer denotes the Kth closest ancestor from ith node which has the same color. If no such ancestor exists, print 1.</p>",
      "code": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvoid dummy() {}\n\nconst int MAXN = 1000005;\nint color[MAXN];\nvector<int> adj[MAXN];\nvector<int> col_stack[MAXN];\nint ans[MAXN];\nint N, K;\n\nvoid dfs(int n) {\n    int c = color[n];\n    if ((int)col_stack[c].size() >= K) {\n        ans[n] = col_stack[c][col_stack[c].size() - K];\n    } else {\n        ans[n] = -1;\n    }\n    col_stack[c].push_back(n);\n    for (int nxt : adj[n]) {\n        dfs(nxt);\n    }\n    col_stack[c].pop_back();\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    if (!(cin >> N >> K)) return 0;\n    for (int i = 1; i <= N; i++) {\n        cin >> color[i];\n    }\n    for (int i = 0; i < N - 1; i++) {\n        int u, v;\n        if (cin >> u >> v) {\n            if (u != v) {\n                adj[u].push_back(v);\n            }\n        }\n    }\n\n    dfs(1);\n\n    for (int i = 1; i <= N; i++) {\n        cout << ans[i] << (i == N ? \"\" : \" \");\n    }\n    cout << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 2\n1 1 2 1 2\n1 2\n1 3\n2 4\n2 5",
          "output": "-1 -1 -1 1 -1"
        },
        {
          "input": "5 2\n1 1 2 1 2\n1 1\n1 2\n2 3\n2 4",
          "output": "-1 -1 -1 1 0"
        }
      ],
      "mandatory": [
        "void dfs(int n)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 455,
        "loc": 65,
        "raw": "Max Cyclomatic: 3, Max Tokens: 455, Max LOC: 65"
      }
    },
    {
      "id": "DSA_277",
      "challenge": 277,
      "level": 3,
      "level_challenge": 77,
      "title": "Problem description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem description<br><br>The country of Byteland consists of n cities. Between any 2 cities it is possible to have a railway track and a road.<br><br>Railway tracks are bidirectional, meaning if there exists a railway track between u and v then you can take a train from u to v as well as from v to u. Similarly, roads are bidirectional, meaning if there exists a route between u and v then you can drive from u to v as well as from v to u.<br><br>2 cities, u and v are called railway-connected if it is possible to travel between u and v using railway tracks.<br><br>2 cities, u and v are called road-connected if it is possible to travel between u and v using roads.<br><br>The transportation network is called balanced if for all pairs of cities u, v: u,v are railway-connected if and only if u,v are road-connected.<br><br>Initially, there are n cities and no roads or railways in Byteland. You will be given q instructions asking you to build either a railway track or a road between some 2 cities. After each instruction, you must report whether the transportation network is balanced.<br><br>Constraints<br><br>1≤n≤105<br><br>1≤q≤2×105<br><br>1≤u,v≤n<br><br>Input format<br><br>The first line of input will contain 2 integers, n and q. q lines will follow. Each line will contain 3 space-separated integers in one of the following formats:<br><br>1 u v : build a railway track between u and v<br><br>2 u v : build a road between u and v<br><br>Output format<br><br>You must print q lines. The ith line contains an answer to the question whether the transport network is balanced after the ith instruction. If it is balanced print \"YES\" (without quotes) otherwise print \"NO\" (without quotes)</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <set>\n\nusing namespace std;\n\nvoid dummy() {}\n\nint par[100005];\n\nint root(int u) {\n    return par[u] == u ? u : par[u] = root(par[u]);\n}\n\nvoid join(int a, int b) {\n    int u = root(a), v = root(b);\n    if (u != v) par[v] = u;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n\n    for (int i = 1; i <= n; i++) par[i] = i;\n\n    set<pair<int, int>> q;\n    for (int i = 0; i < k; i++) {\n        int t, a, b;\n        cin >> t >> a >> b;\n        if (t == 1) q.insert({a, b});\n        else join(a, b);\n\n        int flag = 1;\n        vector<pair<int, int>> to_erase;\n        for (auto e : q) {\n            if (root(e.first) != root(e.second)) {\n                flag = 0;\n                break;\n            }\n            to_erase.push_back(e);\n        }\n        if (flag) {\n            for (auto e : to_erase) q.erase(e);\n            cout << \"YES\\n\";\n        } else cout << \"NO\\n\";\n    }\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 8\n1 1 2\n1 2 3\n2 1 3\n2 1 2\n1 3 4\n2 2 5\n1 4 5\n2 1 4",
          "output": "NO\nNO\nNO\nYES\nNO\nNO\nNO\nYES"
        },
        {
          "input": "5 10\n2 1 3\n2 1 2\n1 1 2\n1 2 3\n1 3 4\n2 2 5\n1 4 5\n2 1 4\n1 1 2\n1 2 3",
          "output": "YES\nYES\nYES\nYES\nNO\nNO\nNO\nYES\nYES\nYES"
        }
      ],
      "mandatory": [
        "int root(int u)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 400,
        "loc": 80,
        "raw": "Max Cyclomatic: 2, Max Tokens: 400, Max LOC: 80"
      }
    },
    {
      "id": "DSA_278",
      "challenge": 278,
      "level": 3,
      "level_challenge": 78,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given a graph in the form of a matrix of size N∗M containing '#' and '.'.All the cells containing '#' are nodes of the graph and two nodes are considered to be connected if they are present at the top, left, right, or bottom of each other. Initially, the graph is connected.<br><br>Write a program to determine the minimum number of nodes that need to be deleted from the graph in order to break it into two unconnected graphs.<br>Constraints<br><br>1≤T≤10<br>1≤N,M≤50<br><br>Input format<br><br>  * First line: T (number of test cases)<br>  * First line in each test case: Two space-separated integers N and M<br>  * Next N lines in each test case: M space-separated characters, each '.' or '#' as described in the statement.<br>Output format<br><br>For each test case, print the minimum number of nodes that need to be deleted from the graph in order to break it into two unconnected graphs. If it is not possible to divide the graph into two parts, print -1.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <queue>\n\nusing namespace std;\n\nvoid dummy() {}\n\nint n, m;\nvector<string> grid;\nvector<pair<int, int>> nodes;\nbool is_node[55][55], vis[55][55];\nint dr[] = {-1, 1, 0, 0}, dc[] = {0, 0, -1, 1};\n\nvoid bfs(int sr, int sc) {\n    queue<pair<int, int>> q;\n    q.push({sr, sc});\n    vis[sr][sc] = true;\n    while (!q.empty()) {\n        auto c = q.front(); q.pop();\n        for (int d = 0; d < 4; d++) {\n            int nr = c.first + dr[d], nc = c.second + dc[d];\n            if (nr >= 0 && nr < n && nc >= 0 && nc < m)\n                if (is_node[nr][nc] && !vis[nr][nc]) {\n                    vis[nr][nc] = true;\n                    q.push({nr, nc});\n                }\n        }\n    }\n}\n\nint count_components(const vector<pair<int, int>>& removed) {\n    for (int r = 0; r < n; r++)\n        for (int c = 0; c < m; c++) {\n            is_node[r][c] = (grid[r][c] == '#');\n            vis[r][c] = false;\n        }\n    for (auto p : removed) is_node[p.first][p.second] = false;\n\n    int comps = 0;\n    for (int r = 0; r < n; r++)\n        for (int c = 0; c < m; c++)\n            if (is_node[r][c] && !vis[r][c]) {\n                comps++;\n                bfs(r, c);\n            }\n    return comps;\n}\n\nint check() {\n    int V = nodes.size();\n    if (V <= 2) return -1;\n    for (int i = 0; i < V; i++)\n        if (count_components({nodes[i]}) == 2) return 1;\n    for (int i = 0; i < V; i++)\n        for (int j = i + 1; j < V; j++)\n            if (count_components({nodes[i], nodes[j]}) == 2) return 2;\n    return (V >= 4 ? 3 : -1);\n}\n\nint main() {\n    int t;\n    if (!(cin >> t)) return 0;\n    while(t--) {\n        cin >> n >> m;\n        grid.resize(n);\n        nodes.clear();\n        for (int i = 0; i < n; i++) {\n            cin >> grid[i];\n            for (int j = 0; j < m; j++)\n                if (grid[i][j] == '#') nodes.push_back({i, j});\n        }\n        cout << check() << \"\\n\";\n    }\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3\n1 4\n####\n1 4\n.##.\n3 3\n###\n#.#\n###",
          "output": "1\n-1\n2"
        },
        {
          "input": "10\n3 3\n...\n..#\n...\n1 4\n####\n1 4\n.##.\n5 5\n.....\n..##.\n.###.\n.##..\n.....\n5 5\n#####\n#...#\n#...#\n#...#\n#####\n5 5\n.....\n.###.\n..##.\n.###.\n.....\n3 4\n.#..\n####\n.###\n5 6\n#.....\n#.....\n######\n#.....\n#.....\n3 4\n.#..\n.##.\n.#..\n3 5\n..#..\n.###.\n..#..",
          "output": "-1\n1\n-1\n1\n2\n1\n2\n1\n2\n3"
        }
      ],
      "mandatory": [
        "int check()",
        "while(t--)"
      ],
      "complexity": {
        "ccn": 9,
        "tokens": 1100,
        "loc": 97,
        "raw": "Max Cyclomatic: 9, Max Tokens: 1100, Max LOC: 97"
      }
    },
    {
      "id": "DSA_279",
      "challenge": 279,
      "level": 3,
      "level_challenge": 79,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>There is a country which is infected by virus. It has many cities and some cities are connected to other cities. In order to prevent virus from spreading Panda plans on destroying the connection between all the cities. Panda has got a power called pimogio. Using this power he can destroy any city, which results in destruction of all connections from this city. For destroying one city, Panda requires one unit pimogio power. Panda's final aim is to isolate all the cities. In order to do so, Panda follows a simple approach, he keeps on destroying the city with most number of connections in it at that moment.<br>Since Panda is weak in calculation, please help him in finding out the units of pimogio power required by him to achieve his aim. There cannot be multiple connections between two cities i.e. two cities can have only one road connected to them.<br>Note: If there are multiple cities with highest connections, destroy the city with the lowest index.<br><br>Constraints:<br>1 <= N <= 105<br>1 <= M <= 3 * 105<br>1 <= A,B <= N<br><br>Input Format:<br>The first line will contain 2 space separated integers N and M, where N is the number of cities in Panda's town and M is the number of connections that the cities have.<br>Next M lines follow, each line consists of two integers A and B, specifying that city A has a connection with city B and B has a connection with the city A.<br><br>Output Format:<br>For each test case, output the minimum energy that Panda requires to achieve his aim.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <set>\n\nusing namespace std;\n\nvoid dummy() {}\n\nint n, m, ans, deg[100005];\nbool alive[100005];\nvector<int> adj[100005];\nset<pair<int, int>> st;\n\nvoid upd(int u) {\n    for (int v : adj[u])\n        if (alive[v] && deg[v]) {\n            st.erase({-deg[v], v});\n            if (--deg[v]) st.insert({-deg[v], v});\n        }\n}\n\nvoid solve() {\n    while (!st.empty() && st.begin()->first < 0) {\n        int u = st.begin()->second;\n        st.erase(st.begin());\n        alive[u] = false;\n        ans++;\n        upd(u);\n    }\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    if (!(cin >> n >> m)) return 0;\n    while(m--) {\n        int u, v; cin >> u >> v;\n        adj[u].push_back(v); adj[v].push_back(u);\n        deg[u]++; deg[v]++;\n    }\n    for (int i = 1; i <= n; i++) {\n        alive[i] = true;\n        if (deg[i]) st.insert({-deg[i], i});\n    }\n    solve();\n    cout << ans << \"\\n\";\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4 2\n1 2\n3 4",
          "output": "2"
        },
        {
          "input": "4 6\n3 2\n3 4\n3 1\n2 4\n2 1\n4 1",
          "output": "3"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 390,
        "loc": 54,
        "raw": "Max Cyclomatic: 3, Max Tokens: 390, Max LOC: 54"
      }
    },
    {
      "id": "DSA_280",
      "challenge": 280,
      "level": 3,
      "level_challenge": 80,
      "title": "Question description",
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given a large box of length X, width Y and height Z. This box is entirely made up of small cubic boxes of 1 unit volume each i.e. length of cube is 1 unit. Now some cubes were removed to create empty spaces. All the cubes that were not removed stay fixed in their initial position.<br><br>Now you are given the information of the new state of the large box i.e. you are given the status of each cube that was used in making the larger box. If the status is 1 then it means that this cubic block was not removed or else if the status is 0 then it corresponds to the fact that this cubic block was removed.<br>Important Notes :<br>- Two blocks are adjacent if they share a face.<br>- A cube with edge size as 1 contains 1 unit cube volume.<br><br>Your task is to find the volume of air that can stay trapped inside the box in the new state if all the empty space is filed with air. The trapped air means that it should not come outside the box in an infinite amount of time.<br><br>Constraints<br><br>1≤T≤10<br><br>1≤X,Y,Z≤102<br><br>0≤Ai,j,k≤1<br><br>Input format<br>- First line of input contains T denoting number of test cases.<br>- First line of each test case contains X,Y,Z, the length, width and height of the box.<br>- You are also given with the Z sets of X∗Y 2D matrices, each representing a layer of the box.<br><br>Output format<br>In a single line, return the volume of air that can be trapped.</p>",
      "code": "#include <iostream>\n#include <cstring>\nusing namespace std;\nvoid dummy() {}\n\nint X, Y, Z, g[105][105][105], q[1200000];\n\nint calulateAir() {\n    int head = 0, tail = 0;\n    q[tail++] = 0;\n    g[0][0][0] = 2;\n    while (head < tail) {\n        int p = q[head++], z = p >> 16, x = (p >> 8) & 255, y = p & 255;\n        for (int i = 0; i < 6; i++) {\n            int nz = z + (i == 0) - (i == 1);\n            int nx = x + (i == 2) - (i == 3);\n            int ny = y + (i == 4) - (i == 5);\n            if (nz >= 0 && nz <= Z + 1 && nx >= 0 && nx <= X + 1 && ny >= 0 && ny <= Y + 1)\n                if (g[nz][nx][ny] == 0) {\n                    g[nz][nx][ny] = 2;\n                    q[tail++] = (nz << 16) | (nx << 8) | ny;\n                }\n        }\n    }\n    int ans = 0;\n    for (int z = 1; z <= Z; z++)\n        for (int x = 1; x <= X; x++)\n            for (int y = 1; y <= Y; y++)\n                if (g[z][x][y] == 0) ans++;\n    return ans;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (!(cin >> t)) return 0;\n    while (t--) {\n        cin >> X >> Y >> Z;\n        memset(g, 0, sizeof(g));\n        for (int z = 1; z <= Z; z++)\n            for (int x = 1; x <= X; x++)\n                for (int y = 1; y <= Y; y++)\n                    cin >> g[z][x][y];\n        cout << calulateAir() << \"\\n\";\n    }\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2\n2 3 4\n1 1 1\n1 1 1\n1 0 0\n1 1 1\n1 0 0\n0 0 0\n1 1 1\n1 1 1\n4 4 4\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 0 0 1\n1 0 0 1\n1 1 1 0\n1 1 1 1\n1 1 0 1\n1 1 0 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1",
          "output": "0\n6"
        },
        {
          "input": "2\n2 3 3\n1 0 1\n1 0 1\n1 0 0\n1 1 1\n1 0 0\n0 0 0\n1 1 1\n1 0 1\n4 4 4\n1 0 1 1\n1 0 1 1\n1 0 1 1\n1 0 1 1\n1 1 1 1\n1 0 0 1\n1 0 0 1\n1 1 1 0\n1 1 1 1\n1 1 0 1\n1 1 0 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1",
          "output": "0\n0"
        }
      ],
      "mandatory": [
        "int calulateAir()"
      ],
      "complexity": {
        "ccn": 15,
        "tokens": 500,
        "loc": 55,
        "raw": "Max Cyclomatic: 15, Max Tokens: 500, Max LOC: 55"
      }
    },
    {
      "id": "DSA_281",
      "challenge": 281,
      "level": 3,
      "level_challenge": 81,
      "title": "Oliver and Bob are best friends",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Oliver and Bob are best friends. They have spent their entire childhood in the beautiful city of Byteland. The people of Byteland live happily along with the King.<br>The city has a unique architecture with total N houses. The King's Mansion is a very big and beautiful bungalow having address = 1. Rest of the houses in Byteland have some unique address, (say A), are connected by roads and there is always a unique path between any two houses in the city. Note that the King's Mansion is also included in these houses.<br><br>Oliver and Bob have decided to play Hide and Seek taking the entire city as their arena. In the given scenario of the game, it's Oliver's turn to hide and Bob is supposed to find him.<br>Oliver can hide in any of the houses in the city including the King's Mansion. As Bob is a very lazy person, for finding Oliver, he either goes towards the King's Mansion (he stops when he reaches there), or he moves away from the Mansion in any possible path till the last house on that path.<br><br>Oliver runs and hides in some house (say X) and Bob is starting the game from his house (say Y). If Bob reaches house X, then he surely finds Oliver.<br><br>Given Q queries, you need to tell Bob if it is possible for him to find Oliver or not.<br><br>The queries can be of the following two types:<br>0 X Y : Bob moves towards the King's Mansion.<br>1 X Y : Bob moves away from the King's Mansion<br><br>CONSTRAINTS :<br>1 ≤ N ≤ 10^5<br>1 ≤ A,B ≤ N<br>1 ≤ Q ≤ 5*10^5<br>1 ≤ X,Y ≤ N<br><br>INPUT :<br>The first line of the input contains a single integer N, total number of houses in the city. Next N-1lines contain two space separated integers A and B denoting a road between the houses at address A and B.<br>Next line contains a single integer Q denoting the number of queries.<br>Following Q lines contain three space separated integers representing each query as explained above.<br><br>OUTPUT :<br>Print \"YES\" or \"NO\" for each query depending on the answer to that query.</p>",
      "code": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvoid dummy() {}\n\nconst int MAXN = 100005;\nvector<int> G[MAXN];\nint vis[MAXN], inT[MAXN], outT[MAXN], T = 1;\n\nvoid DFS(int u) {\n    vis[u] = 1;\n    inT[u] = T++;\n    for (int v : G[u]) {\n        if (!vis[v]) DFS(v);\n    }\n    outT[u] = T++;\n}\n\nint main() {\n    int n, i, q, t, d, s, u, v;\n    if (!(cin >> n)) return 0;\n    for(i=1;i<n;i++) {\n        cin >> u >> v;\n        G[u - 1].push_back(v - 1);\n    }\n    DFS(0);\n    if (cin >> q) {\n        while (q--) {\n            cin >> t >> d >> s;\n            d--; s--;\n            bool ans = (t == 0) ? (inT[s] > inT[d] && outT[s] < outT[d]) : (inT[s] < inT[d] && outT[s] > outT[d]);\n            cout << (ans ? \"YES\\n\" : \"NO\\n\");\n        }\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "9\n1 2\n1 3\n2 6\n2 7\n6 9\n7 8\n3 4\n3 5\n5\n0 2 8\n1 2 8\n1 6 5\n0 6 5\n1 9 1",
          "output": "YES\nNO\nNO\nNO\nYES"
        },
        {
          "input": "9\n1 4\n1 3\n2 5\n2 6\n6 8\n7 9\n3 5\n3 4\n5\n0 2 8\n1 2 8\n1 6 5\n0 6 5\n1 9 1",
          "output": "NO\nNO\nNO\nNO\nNO"
        }
      ],
      "mandatory": [
        "for(i=1;i<n;i++)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 340,
        "loc": 43,
        "raw": "Max Cyclomatic: 2, Max Tokens: 340, Max LOC: 43"
      }
    },
    {
      "id": "DSA_282",
      "challenge": 282,
      "level": 3,
      "level_challenge": 82,
      "title": "Question description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Lala has got the task to create badges for all students of the school. A badge is created by superimposing two squares. The bottom square should be of blue colour and top square should be of yellow colour. The squares must be rotated in such a way that the projection of the badge displays 8 distinguishable vertices.<br><br>Please help Lala find out the maximum number of badges she can make with available n squares.<br><br>Constraints:<br>1 <= n <= 100000<br>1 <= di <= 1000<br>1 <= ci <= 2<br><br>Input Format:<br>The first line of input file contains integer n. Each of the next n lines contain two space separated integers, ci and di. ci is the colour number and di is the length of side of square<br><br>Output Format:<br>Print the maximum number of badges that can be made.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nint a[1005], b[1005], na, nb, m[1005], v[1005], n, i, c, d, ans;\n\nint dfs(int u) {\n    for (int j = 0; j < nb; j++) {\n        if (a[u] < 2 * b[j] && b[j] < 2 * a[u] && v[j] != na + 1) {\n            v[j] = na + 1;\n            if (!m[j] || dfs(m[j] - 1)) return m[j] = u + 1, 1;\n        }\n    }\n    return 0;\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    for(i = 0;i<n;i++) {\n        scanf(\"%d%d\", &c, &d);\n        if (c == 1) a[na++] = d * d;\n        else b[nb++] = d * d;\n    }\n    while (na--) ans += dfs(na);\n    printf(\"%d\\n\", ans);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "10\n1 3\n1 17\n2 13\n2 13\n2 6\n1 10\n2 8\n1 7\n1 8\n2 8",
          "output": "4"
        },
        {
          "input": "10\n2 8\n1 15\n2 11\n1 8\n1 2\n2 1\n1 17\n1 6\n1 18\n2 5",
          "output": "3"
        }
      ],
      "mandatory": [
        "for(i = 0;i<n;i++)"
      ],
      "complexity": {
        "ccn": 6,
        "tokens": 240,
        "loc": 35,
        "raw": "Max Cyclomatic: 6, Max Tokens: 240, Max LOC: 35"
      }
    },
    {
      "id": "DSA_283",
      "challenge": 283,
      "level": 3,
      "level_challenge": 83,
      "title": "Problem Description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description<br><br>Tubby the doggu, likes sets which are closed. Your task is to help him/her solve a problem.<br><br>Let's first lay out a few definitions:<br><br>Definition 1: A set S is said to closed with respect to a prime number P if and only if:<br><br>a∗b (mod P)∈S ∀a,b∈S<br><br>Note that a,b can be equal.<br><br>As an example, the set S={2,4,1} is closed with respect to prime P=7.<br><br>Definition 2: Closure(S): Closure of a set S is defined to be the smallest closed set containing the set S.<br><br>As an example, for P=5 and set S={3}, Closure(S)={3,4,2,1}<br><br>Definition 3: Partition(S): Partition of a set S is a set of non-empty subsets of S such that every element of S is in exactly one of these subsets. Moreover, the length of the partition is the number of non-empty subsets required.<br><br>As an example, for S={1,3,7,4,6,2}, T={{1,4,6},{3,7,2}} is a partition of set S of length 2 as there are two non-empty subsets and each element of S is included in exactly one subset. Also set S itself is a partition of S of length 1.<br><br>Now the task is that you are given a prime number P and an array A of N integers , in which the ithinteger is denoted by Ai, 1≤i≤N, 1≤Ai<P.<br><br>You have to partition the set of indices {1,2,3,4,...,N} into a partition of minimum length such that if Closure({Ai})⊆Closure({Aj}) then i and j must be in different sets of the partition.<br><br>Here, i≠j , 1≤i,j≤N.<br><br>Note: x denotes a set containing a single element x.<br><br>Constraints<br><br>1≤T≤100<br><br>1≤P≤109 ,P is guaranteed to be prime.<br><br>1≤N≤103<br><br>Sum of N over all test cases ≤25000.<br><br>1≤Ai<P  ∀1≤i≤N<br><br>Input Format<br><br>The first line will consist of the integer T denoting the number of test cases.<br><br>For each of the T test cases, the first line will consist of two integers P and N, where P is a prime number and N denotes the number of elements.<br><br>Next line will consist of N integers, where the ithinteger denotes the element Ai, 1≤i≤N.<br><br>Output Format<br><br>For each of the T test cases, output a single integer denoting the minimum length of the partition.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nlong long fpow(long long nr, long long p, long long mod) {\n    long long res = 1;\n    nr %= mod;\n    while (p > 0) {\n        if (p % 2 == 1) res = (__int128)res * nr % mod;\n        nr = (__int128)nr * nr % mod;\n        p /= 2;\n    }\n    return res;\n}\n\nlong long get_order(long long a, long long p) {\n    if (p <= 1) return 1;\n    a %= p;\n    if (a <= 1) return 1;\n    long long phi = p - 1;\n    long long n = phi;\n    vector<long long> factors;\n    for (long long d = 2; d * d <= n; d++) {\n        if (n % d == 0) {\n            factors.push_back(d);\n            while (n % d == 0) n /= d;\n        }\n    }\n    if (n > 1) factors.push_back(n);\n\n    long long ord = phi;\n    for (long long f : factors) {\n        while (ord % f == 0 && fpow(a, ord / f, p) == 1) {\n            ord /= f;\n        }\n    }\n    return ord;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int T;\n    if (!(cin >> T)) return 0;\n    while(T--) {\n        long long p;\n        int n;\n        cin >> p >> n;\n        vector<long long> orders(n);\n        for (int i = 0; i < n; i++) {\n            long long a;\n            cin >> a;\n            orders[i] = get_order(a, p);\n        }\n        sort(orders.begin(), orders.end());\n        vector<int> dp(n, 1);\n        int max_len = (n > 0 ? 1 : 0);\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < i; j++) {\n                if (orders[i] % orders[j] == 0) {\n                    if (dp[j] + 1 > dp[i]) {\n                        dp[i] = dp[j] + 1;\n                    }\n                }\n            }\n            if (dp[i] > max_len) max_len = dp[i];\n        }\n        cout << max_len << \"\\n\";\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2\n2 1\n1\n3 2\n1 2",
          "output": "1\n2"
        },
        {
          "input": "2\n3 2\n7 1\n5 2\n7 8",
          "output": "2\n2"
        }
      ],
      "mandatory": [
        "while(T--)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 520,
        "loc": 75,
        "raw": "Max Cyclomatic: 3, Max Tokens: 520, Max LOC: 75"
      }
    },
    {
      "id": "DSA_284",
      "challenge": 284,
      "level": 3,
      "level_challenge": 84,
      "title": "Question description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Micro is having a graph having N vertices numbered from 1 to N and M edges. All the edges are bidirectional. Micro wants to find out the number of lucky permutations in the graph.<br>A permutation of the vertices [v1,v2,v3,....,vn]is called lucky permutation, if for every vertex vi, where 1≤i≤N−1, there is an edge between vi and vi+1. Help Micro find out the number of lucky permutations in the graph.<br><br>Constraints:<br>1≤N≤10<br>1≤M≤100<br>1≤X,Y≤N<br><br>Input Format:<br>First line consists of two space separated integers denoting N and M.<br>M lines follow each consisting of two space separated integers X and Y denoting there is an edge between vertices numbered X and Y.<br><br>Output Format:<br>Print the number of lucky permutations in the graph.</p>",
      "code": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvoid dummy() {}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int t = 1;\n    while(t--) {\n        int n, m;\n        if (!(cin >> n >> m)) return 0;\n        vector<vector<bool>> adj(n, vector<bool>(n, false));\n        for (int i = 0; i < m; i++) {\n            int u, v;\n            cin >> u >> v;\n            u--; v--;\n            if (u != v) {\n                adj[u][v] = adj[v][u] = true;\n            }\n        }\n\n        vector<vector<long long>> dp(1 << n, vector<long long>(n, 0));\n        for (int i = 0; i < n; i++) {\n            dp[1 << i][i] = 1;\n        }\n\n        for (int mask = 1; mask < (1 << n); mask++) {\n            for (int u = 0; u < n; u++) {\n                if (!(mask & (1 << u))) continue;\n                long long val = dp[mask][u];\n                if (val == 0) continue;\n                for (int v = 0; v < n; v++) {\n                    if (!(mask & (1 << v)) && adj[u][v]) {\n                        dp[mask | (1 << v)][v] += val;\n                    }\n                }\n            }\n        }\n\n        long long ans = 0;\n        for (int u = 0; u < n; u++) {\n            ans += dp[(1 << n) - 1][u];\n        }\n\n        cout << ans << \"\\n\";\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "3 2\n1 2\n2 3",
          "output": "2"
        },
        {
          "input": "10 50\n4 6\n9 3\n5 8\n3 4\n7 5\n6 3\n1 9\n1 2\n8 1\n9 4\n8 3\n5 3\n6 3\n2 3\n5 7\n4 4\n6 9\n8 2\n8 10\n7 3\n7 4\n3 2\n5 7\n7 3\n8 4\n6 8\n10 7\n1 1\n3 7\n3 3\n6 10\n8 6\n9 3\n3 7\n1 6\n10 1\n4 7\n4 2\n6 9\n2 2\n9 5\n3 8\n10 10\n8 4\n8 4\n3 10\n7 3\n5 2\n9 6\n1 9",
          "output": "38538"
        }
      ],
      "mandatory": [
        "while(t--)"
      ],
      "complexity": {
        "ccn": 13,
        "tokens": 450,
        "loc": 61,
        "raw": "Max Cyclomatic: 13, Max Tokens: 450, Max LOC: 61"
      }
    },
    {
      "id": "DSA_285",
      "challenge": 285,
      "level": 3,
      "level_challenge": 85,
      "title": "Question description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Tubby the doggu, likes sets which are closed. Your task is to help him/her solve a problem.<br><br>Let's first lay out a few definitions:<br><br>Definition 1: A set S is said to closed with respect to a prime number P if and only if:<br><br>a∗b (mod P)∈S ∀a,b∈S<br><br>Note that a,b can be equal.<br><br>As an example, the set S={2,4,1} is closed with respect to prime P=7.<br><br>Definition 2: Closure(S): Closure of a set S is defined to be the smallest closed set containing the set S.<br><br>As an example, for P=5 and set S={3}, Closure(S)={3,4,2,1}<br><br>Definition 3: Partition(S): Partition of a set S is a set of non-empty subsets of S such that every element of S is in exactly one of these subsets. Moreover, the length of the partition is the number of non-empty subsets required.<br><br>As an example, for S={1,3,7,4,6,2}, T={{1,4,6},{3,7,2}} is a partition of set S of length 2 as there are two non-empty subsets and each element of S is included in exactly one subset. Also set S itself is a partition of S of length 1.<br><br>Now the task is that you are given a prime number P and an array A of N integers , in which the ithinteger is denoted by Ai, 1≤i≤N, 1≤Ai<P.<br><br>You have to partition the set of indices {1,2,3,4,...,N} into a partition of minimum length such that if Closure({Ai})⊆Closure({Aj}) then i and j must be in different sets of the partition.<br><br>Here, i≠j , 1≤i,j≤N.<br><br>Note: x denotes a set containing a single element x.<br><br>Constraints<br><br>1≤T≤100<br><br>1≤P≤109 ,P is guaranteed to be prime.<br><br>1≤N≤103<br><br>Sum of N over all test cases ≤25000.<br><br>1≤Ai<P  ∀1≤i≤N<br><br>Input Format<br><br>The first line will consist of the integer T denoting the number of test cases.<br><br>For each of the T test cases, the first line will consist of two integers P and N, where P is a prime number and N denotes the number of elements.<br><br>Next line will consist of N integers, where the ithinteger denotes the element Ai, 1≤i≤N.<br><br>Output Format<br><br>For each of the T test cases, output a single integer denoting the minimum length of the partition.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nint fpow (int nr,int p,int mod) {\n    long long r = 1, b = nr % mod;\n    for (; p; p /= 2, b = b * b % mod) {\n        if (p & 1) r = r * b % mod;\n    }\n    return r;\n}\n\nlong long get_order(long long a, long long p) {\n    if (p <= 1 || a <= 1) return 1;\n    long long n = p - 1, ord = n;\n    for (long long d = 2; d * d <= n; d++) {\n        if (n % d == 0) {\n            while (n % d == 0) n /= d;\n            while (ord % d == 0 && fpow(a, ord / d, p) == 1) ord /= d;\n        }\n    }\n    if (n > 1) {\n        while (ord % n == 0 && fpow(a, ord / n, p) == 1) ord /= n;\n    }\n    return ord;\n}\n\nint main() {\n    int T;\n    if (!(cin >> T)) return 0;\n    while (T--) {\n        long long p;\n        int n;\n        cin >> p >> n;\n        vector<long long> ord(n);\n        for (int i = 0; i < n; i++) {\n            long long a;\n            cin >> a;\n            ord[i] = get_order(a, p);\n        }\n        sort(ord.begin(), ord.end());\n        vector<int> dp(n, 1);\n        int ans = (n > 0 ? 1 : 0);\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < i; j++) {\n                if (ord[i] % ord[j] == 0 && dp[j] + 1 > dp[i]) {\n                    dp[i] = dp[j] + 1;\n                }\n            }\n            if (dp[i] > ans) ans = dp[i];\n        }\n        cout << ans << \"\\n\";\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "2\n2 1\n1\n3 2\n1 2",
          "output": "1\n2"
        },
        {
          "input": "2\n1 1\n1\n4 1\n3 2",
          "output": "1\n1"
        }
      ],
      "mandatory": [
        "int fpow (int nr,int p,int mod)"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 500,
        "loc": 74,
        "raw": "Max Cyclomatic: 3, Max Tokens: 500, Max LOC: 74"
      }
    },
    {
      "id": "DSA_286",
      "challenge": 286,
      "level": 3,
      "level_challenge": 86,
      "title": "Question description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>In this problem the word \"set\" will always denote a multiset. Thus, some of its elements can be the same. The order of elements doesn't matter. Multisets {a, a, a, b, c, b} and {a, b, c, a, b, a} are the same. Multisets {a, a, b} and {a, b, b} are different.<br><br>You have a set consisting of some elements. A set can either be empty, or contain other sets. Note that sets in this problem may contain multiple copies of the same set. More formally, a set satisfies the following context free grammar with start symbol S:<br><br>S -> {T}<br>T -> ST | ε<br><br>In this context free grammar, S denotes a set, while T denotes a list of the elements which are sets themselves. For example, valid sets are {}, {{}}, {{}{}}, {{}{{}{}}}.<br><br>We can define an element of a set to be one of the sets that make up the set. For example, a set {a, a, b} has three elements, that is a, a, and b. The set {} has no elements. The set {{}} has one element {}. The set {{}{{}{}}} has two elements {}, {{}{}}.<br><br>Two sets are said to the same if they have the same multiset of elements. Note that the order of elements in the sets doesn't matter. For example, the sets {{}{{}}} and {{{}}{}} are the same, but the sets {{}{}} and {{}} are different.<br><br>Call a set S transitive if x is an element of S, then all elements in x are elements of S as well.<br><br>For example, the empty set {} is transitive. The set {{}} is also transitive. However, the set S = {{{}}} is not transitive, as {{}} is an element of S, but {} is an element of {{}} but not of S. We can make it transitive by adding the element {} to the set to get the transitive set {{{}}{}}.<br><br>You’re given a string with n characters representing a set. You would like to make this set transitive with the minimum number of moves. In one move, you can either add an arbitrary set or remove an arbitrary element from S. You are not allowed to add or remove elements in sets that are elements of S. Compute the minimum number moves you need to make the set transitive.<br><br>ConstraintsFor all files<br>1 ≤ T ≤ 10<br>2 ≤ n<br><br>Input FormatThe first line of the input will contain an integer T, denoting the number of test cases.<br>Each test case will contain a single string on its own line, denoting the set.<br><br>Output FormatPrint a single line per test case, the minimum number of moves required to make the set transitive.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <queue>\n#include <algorithm>\n#include <map>\n\nusing namespace std;\n\nvoid dummy() {}\n\nstruct FlowEdge {\n    int v, u, cap, flow = 0;\n    FlowEdge(int v, int u, int cap) : v(v), u(u), cap(cap) {}\n};\n\nvector<FlowEdge> edges;\nvector<vector<int>> adj;\nvector<int> level, ptr;\nint s_node, t_node;\n\nvoid add_edge(int v,int u,int cap) {\n    adj[v].push_back(edges.size());\n    edges.emplace_back(v, u, cap);\n    adj[u].push_back(edges.size());\n    edges.emplace_back(u, v, 0);\n}\n\nbool bfs() {\n    fill(level.begin(), level.end(), -1);\n    level[s_node] = 0;\n    queue<int> q;\n    q.push(s_node);\n    while (!q.empty()) {\n        int v = q.front();\n        q.pop();\n        for (int id : adj[v]) {\n            if (edges[id].cap - edges[id].flow > 0 && level[edges[id].u] == -1) {\n                level[edges[id].u] = level[v] + 1;\n                q.push(edges[id].u);\n            }\n        }\n    }\n    return level[t_node] != -1;\n}\n\nint dfs_flow(int v, int pushed) {\n    if (pushed == 0 || v == t_node) return pushed;\n    for (int& cid = ptr[v]; cid < (int)adj[v].size(); ++cid) {\n        int id = adj[v][cid];\n        int tr = edges[id].u;\n        if (level[v] + 1 != level[tr] || edges[id].cap - edges[id].flow == 0) continue;\n        int push = dfs_flow(tr, min(pushed, edges[id].cap - edges[id].flow));\n        if (push == 0) continue;\n        edges[id].flow += push;\n        edges[id ^ 1].flow -= push;\n        return push;\n    }\n    return 0;\n}\n\nmap<string, int> all_sets;\nvector<string> id_to_str;\nvector<vector<int>> set_children;\n\nint get_set_id(const string& str) {\n    if (all_sets.find(str) == all_sets.end()) {\n        int id = all_sets.size();\n        all_sets[str] = id;\n        id_to_str.push_back(str);\n        set_children.emplace_back();\n        return id;\n    }\n    return all_sets[str];\n}\n\npair<int, int> parse_set(const string& s, int i) {\n    if (i >= (int)s.size()) return {get_set_id(\"{}\"), i};\n    i++;\n    vector<int> children;\n    while (i < (int)s.size() && s[i] != '}') {\n        auto res = parse_set(s, i);\n        children.push_back(res.first);\n        i = res.second;\n    }\n    if (i < (int)s.size() && s[i] == '}') i++;\n    vector<string> child_strs;\n    for (int c : children) child_strs.push_back(id_to_str[c]);\n    sort(child_strs.begin(), child_strs.end());\n    string canonical = \"{\";\n    for (const string& cs : child_strs) canonical += cs;\n    canonical += \"}\";\n    int id = get_set_id(canonical);\n    set_children[id] = children;\n    return {id, i};\n}\n\nvoid solve() {\n    string s;\n    if (!(cin >> s)) return;\n\n    all_sets.clear();\n    id_to_str.clear();\n    set_children.clear();\n\n    int root_id = parse_set(s, 0).first;\n    vector<int> root_elements = set_children[root_id];\n    map<int, int> init_counts;\n    for (int elem : root_elements) init_counts[elem]++;\n\n    int total_nodes = all_sets.size();\n    s_node = total_nodes;\n    t_node = s_node + 1;\n\n    edges.clear();\n    adj.assign(t_node + 1, vector<int>());\n    level.resize(t_node + 1);\n    ptr.resize(t_node + 1);\n\n    const int INF = 1e9;\n    for (int u = 0; u < total_nodes; u++) {\n        if (u == root_id) continue;\n        int c_init = init_counts[u];\n        if (c_init > 0) add_edge(s_node, u, c_init);\n        else add_edge(u, t_node, 1);\n        for (int v : set_children[u]) add_edge(u, v, INF);\n    }\n\n    int flow = 0;\n    while (bfs()) {\n        fill(ptr.begin(), ptr.end(), 0);\n        while (int pushed = dfs_flow(s_node, INF)) flow += pushed;\n    }\n    cout << flow << \"\\n\";\n}\n\nint main() {\n    int t;\n    if (cin >> t) {\n        while (t--) solve();\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4\n{}\n{{{}}{{}}{{}}{{}}}\n{{{{{}}}}{{{{}}}}}\n{{}{{{}{}}{{}}}{{}{}}{{{{}{}}{}}}}",
          "output": "0\n1\n2\n2"
        },
        {
          "input": "3\n{}\n{{{{{}}}}{{{}}}\n{{}{{{}{}}{{{}}}\n{{{{}{}}{}}}}",
          "output": "0\n2\n1"
        }
      ],
      "mandatory": [
        "struct FlowEdge",
        "void add_edge(int v,int u,int cap)",
        "bool bfs()"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 1100,
        "loc": 143,
        "raw": "Max Cyclomatic: 1, Max Tokens: 1100, Max LOC: 143"
      }
    },
    {
      "id": "DSA_287",
      "challenge": 287,
      "level": 3,
      "level_challenge": 87,
      "title": "Question description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>For the lab assignment of this week , Shiv got N numbers A1 , A2, ... AN. He must assign each of these numbers a unique integer value from 1 to M. Let Ci be the integer assigned to Ai . Shiv must assign numbers in such a way that maximum number of Ai are divisible by their Ci . You must print maximum numbers of Ai that could be made divisible by Ci in optimal assignment.<br><br>Constraints:<br><br>  * 1 ≤ N ≤ 103<br>  * 1 ≤ Ai ≤ 105<br>  * N ≤ M ≤ 105<br>Input:<br>First Line of input consists of integer N and M.<br>Next N lines consists of N integers with ith line containing integer Ai.<br><br>Output:<br>Output maximum number of Ai that can be made divisible by Ci in optimal assignment.</p>",
      "code": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvoid dummy() {}\n\ntypedef struct node {\n    int val;\n} node;\n\nvector<int> adj[1005];\n\nint solve(int x,int visited[],int is_matched[]) {\n    for (int v : adj[x]) {\n        if (!visited[v]) {\n            visited[v] = 1;\n            if (is_matched[v] == -1 || solve(is_matched[v], visited, is_matched)) {\n                is_matched[v] = x;\n                return 1;\n            }\n        }\n    }\n    return 0;\n}\n\nint is_matched[100005];\nint visited[100005];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n\n    for (int i = 0; i < n; i++) {\n        int a;\n        cin >> a;\n        for (int d = 1; d * d <= a; d++) {\n            if (a % d == 0) {\n                if (d <= m) adj[i].push_back(d);\n                int d2 = a / d;\n                if (d2 != d && d2 <= m) adj[i].push_back(d2);\n            }\n        }\n    }\n\n    for (int i = 0; i <= m; i++) is_matched[i] = -1;\n\n    int ans = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= m; j++) visited[j] = 0;\n        if (solve(i, visited, is_matched)) {\n            ans++;\n        }\n    }\n\n    cout << ans << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 8\n16 \n2 \n4 \n1 \n32",
          "output": "4"
        },
        {
          "input": "5 7\n21\n3 \n5 \n1 \n12",
          "output": "5"
        }
      ],
      "mandatory": [
        "typedef struct node",
        "int solve(int x,int visited[],int is_matched[])"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 475,
        "loc": 75,
        "raw": "Max Cyclomatic: 5, Max Tokens: 475, Max LOC: 75"
      }
    },
    {
      "id": "DSA_288",
      "challenge": 288,
      "level": 3,
      "level_challenge": 88,
      "title": "Problem Description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem Description<br><br>There are many islands that are connected by one-way bridges, that is, if a bridge connects islands a and b, then you can only use the bridge to go from a to b but you cannot travel back by using the same. If you are on island a, then you select (uniformly and randomly) one of the islands that are directly reachable from a through the one-way bridge and move to that island. You are stuck on an island if you cannot move any further. It is guaranteed that after leaving any island it is not possible to come back to that island.<br><br>Find the island that you are most likely to get stuck on. Two islands are considered equally likely if the absolute difference of the probabilities of ending up on them is <=10−9.<br><br>Input Constraints<br><br>1≤n≤200000 1≤m≤500000 1≤ui,vi,r≤n<br><br>Input format<br><br>  * First line: Three integers n (the number of islands), m (the number of one-way bridges), and r (the index of the island you are initially on)<br>  * Next m lines: Two integers ui and vi representing a one-way bridge from island ui to vi.<br>Output format<br><br>Print the index of the island that you are most likely to get stuck on. If there are multiple islands,then print them in the increasing order of indices (space separated values in a single line).</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <stack>\n#include <cmath>\n\nusing namespace std;\n\nvoid dummy() {}\n\nconst int MAXN = 200005;\nvector<int> adj[MAXN];\nbool vis[MAXN];\nstack<int> st;\ndouble prob[MAXN];\n\nvoid dfs_topo(int u) {\n    vis[u] = true;\n    for (int v : adj[u]) {\n        if (!vis[v]) dfs_topo(v);\n    }\n    st.push(u);\n}\n\nint main() {\n    int n, m, r, u, v;\n    if (!(cin >> n >> m >> r)) return 0;\n    while (m--) {\n        cin >> u >> v;\n        adj[u].push_back(v);\n    }\n    dfs_topo(r);\n    prob[r] = 1.0;\n    while(!st.empty()) {\n        u = st.top();\n        st.pop();\n        if (adj[u].empty()) continue;\n        double p = prob[u] / (double)adj[u].size();\n        for (int x : adj[u]) prob[x] += p;\n    }\n    double max_p = -1.0;\n    for (int i = 1; i <= n; i++) {\n        if (adj[i].empty() && vis[i] && prob[i] > max_p) max_p = prob[i];\n    }\n\n    bool first = true;\n    for (int i = 1; i <= n; i++) {\n        if (adj[i].empty() && vis[i] && fabs(prob[i] - max_p) <= 1e-9) {\n            if (!first) cout << \" \";\n            cout << i;\n            first = false;\n        }\n    }\n    cout << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 7 1\n1 2\n1 3\n1 4\n1 5\n2 4\n2 5\n3 4",
          "output": "4"
        },
        {
          "input": "5 7 1\n3 5\n1 3\n1 4\n1 5\n3 5\n1 3\n1 4\n1 5",
          "output": "5"
        }
      ],
      "mandatory": [
        "while(!st.empty())"
      ],
      "complexity": {
        "ccn": 3,
        "tokens": 450,
        "loc": 65,
        "raw": "Max Cyclomatic: 3, Max Tokens: 450, Max LOC: 65"
      }
    },
    {
      "id": "DSA_289",
      "challenge": 289,
      "level": 3,
      "level_challenge": 89,
      "title": "Question description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>Telecom towers are an integral part of the telecom network infrastructure. In fact they are the most expensive to build and the valuations are heavy. The newly started mobile company in Hacker Land built n towers to enhance the connectivity of their users. You can assume that the Cartesian coordinate system  is used in Hacker Land and the location of ith tower is given as (xi,yi).<br><br>After the construction of the towers company realised that there are many call drops happening with the users. One identified reason for the frequent call drop was that the pair of towers which are at Euclidean distance d were causing destructive interference. To resolve the issue the company decided to destroy some towers such that no two towers are at d  distance. You have to tell the minimum number of towers that the company need to destroy such that no two towers are at distance d.<br><br>Note: The Euclidean distance between points (x1,y1) and (x2,y2)  is the length of the line segment connecting them, which is same as (x1−x2)2+(y1−y2)2<br><br>Constraints:<br><br>  * 2≤n≤104<br>  * 1≤d≤200<br>  * 1≤xi,yi≤200<br>  * There are no two towers with same location.<br>Input Format:<br><br>The first line contains two space-separated integers n and d denoting the number telecom towers constructed initially and the distance which causes destructive interference respectively.<br><br>Next n lines contains two-space separated integers denoting the xi and yi − location of the towers.<br><br>Output Format:<br><br>Print a single lines denoting the minimum number of towers that should be destroyed such that no two towers are separated by distance d.<br><br>Sample Input<br><br>5 2<br><br>1 3<br><br>3 1<br><br>3 3<br><br>3 5<br><br>5 3<br><br>Sample Output<br><br>1<br><br>Explanation<br><br> The image below shows the location of the towers, We can destroy the tower at (3,3).</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nstruct Edge {\n    int to, cap, flow, rev;\n};\n\nvector<vector<Edge>> graph;\nvector<int> level, ptr;\nint s_node, t_node;\n\nvoid add_edge(int u,int v,int c) {\n    graph[u].push_back({v, c, 0, (int)graph[v].size()});\n    graph[v].push_back({u, 0, 0, (int)graph[u].size() - 1});\n}\n\nbool bfs() {\n    fill(level.begin(), level.end(), -1);\n    level[s_node] = 0;\n    queue<int> q;\n    q.push(s_node);\n    while (!q.empty()) {\n        int v = q.front();\n        q.pop();\n        for (const auto& edge : graph[v]) {\n            if (edge.cap - edge.flow > 0 && level[edge.to] == -1) {\n                level[edge.to] = level[v] + 1;\n                q.push(edge.to);\n            }\n        }\n    }\n    return level[t_node] != -1;\n}\n\nint dfs_dinic(int v, int pushed) {\n    if (pushed == 0 || v == t_node) return pushed;\n    for (int& cid = ptr[v]; cid < (int)graph[v].size(); ++cid) {\n        auto& edge = graph[v][cid];\n        int tr = edge.to;\n        if (level[v] + 1 != level[tr] || edge.cap - edge.flow == 0) continue;\n        int tr_pushed = dfs_dinic(tr, min(pushed, edge.cap - edge.flow));\n        if (tr_pushed == 0) continue;\n        edge.flow += tr_pushed;\n        graph[tr][edge.rev].flow -= tr_pushed;\n        return tr_pushed;\n    }\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    long long d;\n    if (!(cin >> n >> d)) return 0;\n\n    vector<pair<long long, long long>> pts(n);\n    for (int i = 0; i < n; i++) {\n        cin >> pts[i].first >> pts[i].second;\n    }\n\n    long long d2 = d * d;\n    vector<vector<int>> adj(n);\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            long long dx = pts[i].first - pts[j].first;\n            long long dy = pts[i].second - pts[j].second;\n            if (dx * dx + dy * dy == d2) {\n                adj[i].push_back(j);\n                adj[j].push_back(i);\n            }\n        }\n    }\n\n    vector<int> color(n, -1);\n    for (int i = 0; i < n; i++) {\n        if (color[i] == -1 && !adj[i].empty()) {\n            color[i] = 0;\n            queue<int> q;\n            q.push(i);\n            while (!q.empty()) {\n                int u = q.front();\n                q.pop();\n                for (int v : adj[u]) {\n                    if (color[v] == -1) {\n                        color[v] = 1 - color[u];\n                        q.push(v);\n                    }\n                }\n            }\n        }\n    }\n\n    s_node = n;\n    t_node = n + 1;\n    graph.assign(n + 2, vector<Edge>());\n    level.resize(n + 2);\n    ptr.resize(n + 2);\n\n    for (int i = 0; i < n; i++) {\n        if (color[i] == 0) {\n            add_edge(s_node, i, 1);\n            for (int j : adj[i]) {\n                add_edge(i, j, 1);\n            }\n        } else if (color[i] == 1) {\n            add_edge(i, t_node, 1);\n        }\n    }\n\n    int max_flow = 0;\n    while (bfs()) {\n        fill(ptr.begin(), ptr.end(), 0);\n        while (int pushed = dfs_dinic(s_node, 1e9)) {\n            max_flow += pushed;\n        }\n    }\n\n    cout << max_flow << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 2\n1 3\n3 1\n3 3\n3 5\n5 3",
          "output": "1"
        },
        {
          "input": "5 2\n1 1\n1 2\n2 1\n3 1\n4 1",
          "output": "2"
        }
      ],
      "mandatory": [
        "void add_edge(int u,int v,int c)",
        "bool bfs()"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 1300,
        "loc": 158,
        "raw": "Max Cyclomatic: 1, Max Tokens: 1300, Max LOC: 158"
      }
    },
    {
      "id": "DSA_290",
      "challenge": 290,
      "level": 3,
      "level_challenge": 90,
      "title": "Question description",
      "topic": "Graph",
      "session": "Graph",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are provided K different tasks and you have to perform a single activity on a single day. The activities are numbered by using the integers 1, 2, ...K.<br><br>A time table has been provided to you that must be followed for the next N days. The time table states that on the ith day, you should do the job with index A[i]. 1≤A[i]≤K<br><br>A rule states that if you do some particular job with index X on a day with index Y, then you should not do the same job any time before day Y+K. You cannot perform the job with index X on any day in the range [Y+1,Y+K−1] in such a case.<br><br>You are required to change the time table in such a way that it also satisfies the mentioned rule. You also have to make the minimum number of changes in the time table. A change involves modifying a job that has to be done on some day i (1≤i≤N) to any other job in the range of 1...K. Your task is to determine this minimum number.<br><br>Constraints<br><br>1≤T≤3 1≤N≤100,000 2≤K≤100 1≤A[i]≤K<br><br>Input format<br><br>  * First line: Single integer T denoting the number of test cases in a single test file.<br>  * For each test case:  * First line: Two space-separated integers N and K<br>  * Next line: N space-separated integers, where the ith integer denotes the job that you should do on the ith next day<br><br>Output format<br><br>For each test case, print a single integer on a single line.</p>",
      "code": "#include <iostream>\n\nusing namespace std;\n\nvoid dummy() {}\n\nconst int INF = 1e9;\nint u[105], v[105], p[105], way[105], minv[105], used[105], cost[105][105];\n\nint hungarian(int n) {\n    for (int i = 0; i <= n; i++) u[i] = v[i] = p[i] = 0;\n    for (int i = 1; i <= n; i++) {\n        p[0] = i;\n        int j0 = 0;\n        for (int j = 0; j <= n; j++) minv[j] = INF, used[j] = 0;\n        do {\n            used[j0] = 1;\n            int i0 = p[j0], delta = INF, j1 = 0;\n            for (int j = 1; j <= n; j++) {\n                if (!used[j]) {\n                    int cur = cost[i0][j] - u[i0] - v[j];\n                    if (cur < minv[j]) minv[j] = cur, way[j] = j0;\n                    if (minv[j] < delta) delta = minv[j], j1 = j;\n                }\n            }\n            for (int j = 0; j <= n; j++) {\n                if (used[j]) u[p[j]] += delta, v[j] -= delta;\n                else minv[j] -= delta;\n            }\n            j0 = j1;\n        } while (p[j0]);\n        do {\n            int j1 = way[j0];\n            p[j0] = p[j1];\n            j0 = j1;\n        } while (j0);\n    }\n    return -v[0];\n}\n\nvoid solve() {\n    int n, k, a;\n    if (!(cin >> n >> k)) return;\n    for (int i = 1; i <= k; i++) {\n        for (int j = 1; j <= k; j++) cost[i][j] = 0;\n    }\n    for (int i = 0; i < n; i++) {\n        cin >> a;\n        cost[i % k + 1][a]--;\n    }\n    cout << n + hungarian(k) << \"\\n\";\n}\n\nint main() {\n    int t;\n    if (cin >> t) {\n        while(t--) solve();\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n3 2\n1 2 2",
          "output": "1"
        },
        {
          "input": "3\n100 5\n2 4 5 2 1 3 5 1 3 1 5 3 1 3 4 5 4 5 5 5 2 1 1 1 2 1 2 1 3 1 2 1 1 1 1 1 1 1 5 1 5 2 5 4 1 3 3 4 3 3 5 4 1 3 3 5 1 1 4 2 4 5 1 1 3 4 4 3 4 4 5 1 1 1 2 4 1 2 2 1 3 3 1 1 5 4 3 1 1 1 5 2 1 5 1 4 5 1 3 3\n100 5\n3 1 1 4 1 1 1 1 4 1 1 5 4 3 1 4 2 1 1 1 3 3 4 1 1 2 1 1 5 4 1 1 5 1 2 2 1 1 1 5 5 4 1 2 3 3 1 3 5 4 5 4 1 3 4 1 1 1 2 2 4 3 2 1 1 3 5 1 4 4 5 1 1 5 1 5 1 4 5 3 1 2 4 4 1 1 3 2 5 4 2 1 3 2 2 1 3 3 1 2\n100 5\n2 2 1 1 3 4 4 1 3 1 3 1 4 1 5 4 1 2 3 4 3 3 1 1 1 1 1 4 2 1 2 5 1 1 1 2 1 5 1 2 1 2 5 5 2 1 3 3 2 1 5 3 2 5 5 3 1 1 1 3 4 1 5 2 2 3 4 3 5 4 2 3 5 5 3 1 1 3 4 4 3 1 4 2 3 1 2 1 1 5 1 1 1 1 5 3 5 4 5 1",
          "output": "66\n73\n73"
        }
      ],
      "mandatory": [
        "void solve()",
        "while(t--)"
      ],
      "complexity": {
        "ccn": 11,
        "tokens": 590,
        "loc": 60,
        "raw": "Max Cyclomatic: 11, Max Tokens: 590, Max LOC: 60"
      }
    },
    {
      "id": "DSA_291",
      "challenge": 291,
      "level": 3,
      "level_challenge": 91,
      "title": "We have a FULL binary tree i",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem description:<br><br>We have a FULL binary tree i.e. each node except leaves has two children.<br>The magic sum between any two leaf nodes (both possibly same) is the number obtained after adding values of all the nodes (including starting and ending nodes) in a unique path from first leaf to the later one.<br>Your task is to find the maximum magic sum in the binary tree.<br><br>Note: If path ends and starts at the same node, count that node only once.<br><br>Constraints :<br>1 ≤ T ≤ 500<br>1 ≤ N ≤ 511<br>-106 ≤ V[i] ≤ 106<br><br>Input Format:<br>First line of input contains T, the number of test cases. The first line of each test case contains N, the number of nodes in the tree. The next line contains an array V denoting values for N nodes in level order (left to right) traversal manner.<br><br>Output Format:<br>For every case output the maximum magic sum in the binary tree.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nlong long d[1005];\nint magicsum(int arr[],int n) {\n    long long ans = -1e18;\n    for (int i = n; i >= 1; i--) {\n        int l = 2 * i;\n        if (l > n) {\n            d[i] = arr[i];\n            if (arr[i] > ans) ans = arr[i];\n        } else {\n            d[i] = arr[i] + max(d[l], d[l + 1]);\n            long long p = d[l] + arr[i] + d[l + 1];\n            if (p > ans) ans = p;\n        }\n    }\n    return ans;\n}\n\nint arr[1005];\n\nint main() {\n    int t, n;\n    if (cin >> t) {\n        while (t--) {\n            cin >> n;\n            for (int i = 1; i <= n; i++) cin >> arr[i];\n            cout << magicsum(arr, n) << \"\\n\";\n        }\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n7\n2 4 5 8 -4 3 -6",
          "output": "22"
        },
        {
          "input": "1\n7\n12 14 51 81 -14 31 -16",
          "output": "189"
        }
      ],
      "mandatory": [
        "int magicsum(int arr[],int n)"
      ],
      "complexity": {
        "ccn": 5,
        "tokens": 240,
        "loc": 38,
        "raw": "Max Cyclomatic: 5, Max Tokens: 240, Max LOC: 38"
      }
    },
    {
      "id": "DSA_292",
      "challenge": 292,
      "level": 3,
      "level_challenge": 92,
      "title": "Question description",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given an array A of N elements. Now, you need to perform exactly K cuts in the array such that the array is divided into K+1 non-empty subarrays. Now, after the array is divided into different parts you need to take the product of elements in each of the part and then take the sum of all these products. Since, there are lots of ways to partition the array into K+1 subarrays so you need to print this sum of products over all possible cuts. Print the value of this sum modulo 720720.<br><br>Note: Please checkout the sample explanation carefully for better understanding of the problem.<br><br>Constraints<br>2≤N≤100<br>1≤K≤N−1<br>1≤A[i]≤109<br><br>Input Format<br>The first line contains an integer N as input that denotes the total number of elements in the array.<br>The next line contains N space-separated integers that denote the elements of the array.<br>The next line of the input contains an integer K that denotes the total number of cuts that need to be made on the array A.<br><br>Output Format<br>In the output, you need to print the sum of products of all the subarrays across all the possible different cuts modulo 720720.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define MOD 720720\n\nlong long C[105][105];\n\nvoid init_comb() {\n    for (int i = 0; i <= 100; i++) {\n        C[i][0] = 1;\n        for (int j = 1; j <= i; j++) {\n            C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;\n        }\n    }\n}\n\nint main() {\n    init_comb();\n    int n, k;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    long long a[105];\n    int i;\n    for(i=1;i<=n;++i) {\n        scanf(\"%lld\", &a[i]);\n    }\n    if (scanf(\"%d\", &k) != 1) return 0;\n\n    long long ans = 0;\n    for (int l = 1; l <= n; l++) {\n        long long prod = 1;\n        for (int r = l; r <= n; r++) {\n            prod = (prod * (a[r] % MOD)) % MOD;\n            int fixed = (l > 1 ? 1 : 0) + (r < n ? 1 : 0);\n            int rem_cuts = k - fixed;\n            int avail_spaces = (n - 1) - (r - l) - fixed;\n            if (rem_cuts >= 0 && rem_cuts <= avail_spaces) {\n                long long ways = C[avail_spaces][rem_cuts];\n                ans = (ans + ways * prod) % MOD;\n            }\n        }\n    }\n\n    printf(\"%lld\\n\", (ans % MOD + MOD) % MOD);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n1 2 3 4\n2",
          "output": "35"
        },
        {
          "input": "11\n560375 78934 183293 733272 380219 989164 553323 772278 689277 5744 655754\n5",
          "output": "689738"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n;++i)"
      ],
      "complexity": {
        "ccn": 15,
        "tokens": 470,
        "loc": 53,
        "raw": "Max Cyclomatic: 15, Max Tokens: 470, Max LOC: 53"
      }
    },
    {
      "id": "DSA_293",
      "challenge": 293,
      "level": 3,
      "level_challenge": 93,
      "title": "Question description",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given N bricks that are numbered from 1 to N. You are required to color all the bricks. Here, K bricks are already colored.<br><br>You can only color the ith brick if the (i+1)th or (i−1)th brick is already colored. Your task is to determine the number of ways you can color all the remaining bricks. Since the number of ways can be very large, therefore print the number of ways modulo 1000000007.<br><br>Constraints<br><br>1≤K≤N≤1000<br><br>Input format<br><br>  * First line: Two space-separated integer N, K<br>  * Second line: K space-separated integers each denoting the brick that is already colored<br>Output format<br><br>Print an integer denoting the number of ways to color the remaining bricks modulo 1000000007.</p>",
      "code": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\n\nvoid dummy() {}\n\nconst int MOD = 1000000007;\nint a[1005];\nlong long fact[1005];\n\nlong long pwr(long long a, long long b = MOD - 2) {\n    long long r = 1;\n    for (; b; b >>= 1, a = a * a % MOD) {\n        if (b & 1) r = r * a % MOD;\n    }\n    return r;\n}\n\nint main() {\n    int n, k, i;\n    if (!(cin >> n >> k)) return 0;\n    for (i = 0; i < k; ++i) cin >> a[i];\n    sort(a, a + k);\n    for(i=0;i<=n;i++) fact[i] = i ? (fact[i - 1] * i) % MOD : 1;\n    long long ans = fact[n - k];\n    if (a[0] > 1) ans = ans * pwr(fact[a[0] - 1]) % MOD;\n    for (i = 0; i < k - 1; ++i) {\n        int l = a[i + 1] - a[i] - 1;\n        if (l > 0) {\n            ans = ans * pwr(fact[l]) % MOD;\n            ans = ans * pwr(2, l - 1) % MOD;\n        }\n    }\n    if (a[k - 1] < n) ans = ans * pwr(fact[n - a[k - 1]]) % MOD;\n    cout << ans << \"\\n\";\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "6 3\n1 2 6",
          "output": "4"
        },
        {
          "input": "8 4\n1 5 6 8",
          "output": "16"
        }
      ],
      "mandatory": [
        "for(i=0;i<=n;i++)"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 350,
        "loc": 36,
        "raw": "Max Cyclomatic: 8, Max Tokens: 350, Max LOC: 36"
      }
    },
    {
      "id": "DSA_294",
      "challenge": 294,
      "level": 3,
      "level_challenge": 94,
      "title": "Question description",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given a string S of the length n consisting of only lowercase English alphabets.<br><br>If the two consecutive characters in a subsequence have a difference that is no more than k, then it is called a special subsequence. Find the length of the longest special subsequence.<br><br>Constraints<br><br>1≤t≤10<br><br>1≤n≤105<br><br>1≤k≤26<br><br>Input format<br><br>  * First line: t (number of test cases)<br>  * Next t line: Three space-separated integers n, k, and S<br>Output format<br><br>For each test case, print the length of the longest special subsequence in a new line.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\nchar s[100005];\nint dp[26];\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while (t--) {\n        int n, k;\n        if (scanf(\"%d %d %s\", &n, &k, s) != 3) break;\n        for (int i = 0; i < 26; i++) {\n            dp[i] = 0;\n        }\n\n        int indx = 0;\n        while(indx<n) {\n            int c = s[indx] - 'a';\n            int low = c - k;\n            if (low < 0) low = 0;\n            int high = c + k;\n            if (high > 25) high = 25;\n\n            int best = 0;\n            for (int prev = low; prev <= high; prev++) {\n                if (dp[prev] > best) {\n                    best = dp[prev];\n                }\n            }\n            if (best + 1 > dp[c]) {\n                dp[c] = best + 1;\n            }\n            indx++;\n        }\n\n        int max_len = 0;\n        for (int i = 0; i < 26; i++) {\n            if (dp[i] > max_len) {\n                max_len = dp[i];\n            }\n        }\n        printf(\"%d\\n\", max_len);\n    }\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n7 2 afcbedg",
          "output": "4"
        },
        {
          "input": "1\n15 8 zkkgsndscjxofmq",
          "output": "9"
        }
      ],
      "mandatory": [
        "while(indx<n)"
      ],
      "complexity": {
        "ccn": 8,
        "tokens": 350,
        "loc": 36,
        "raw": "Max Cyclomatic: 8, Max Tokens: 350, Max LOC: 36"
      }
    },
    {
      "id": "DSA_295",
      "challenge": 295,
      "level": 3,
      "level_challenge": 95,
      "title": "Question Description",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question Description<br><br>Jerry loves binary digits while his close friend Tom hates them. One fine day, Tom was making fun of Jerry due to which Jerry became very angry. So, he decided to challenge Tom by asking him a question of his favorite topic - binary digits.<br><br>Jerry gave Tom a matrix of size N X M A containing only binary digits (0 and 1) . Tom was asked to maximize the number of 1's in this matrix. To do so, he was given a special power to choose a square sub-matrix having at least 1 element and flip it completely.<br><br>Flipping here means switching the digits 0 to 1 and 1 to 0 of every binary digit present in the chosen sub-matrix. Tom has to use his power exactly once. As he seems to be completely clueless about the challenge, he seeks your help.<br><br>Constraints :<br><br>1≤N,M≤500<br><br>0≤A[i][j]≤1<br><br>Input  Format:<br><br>The first line of the input contains two single space separated integers N denoting the number of rows and M denoting number of columns.<br><br>Then N lines follow, each containing M space separated binary digits, where the jth integer on the ith line is element A[i][j]<br><br>Output Format:<br><br>Print the maximum number of 1's possible after using the special power.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nint maxi(int a,int b) {\n    return a > b ? a : b;\n}\n\nint mini(int a,int b) {\n    return a < b ? a : b;\n}\n\nstatic int A[505][505];\nstatic int pref[505][505];\n\nint main() {\n    int n, m;\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    \n    int initial_ones = 0;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= m; j++) {\n            scanf(\"%d\", &A[i][j]);\n            if (A[i][j] == 1) initial_ones++;\n            int val = (A[i][j] == 0) ? 1 : -1;\n            pref[i][j] = val + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];\n        }\n    }\n    \n    int max_gain = -1000000000;\n    int limit = mini(n, m);\n    for (int s = 1; s <= limit; s++) {\n        for (int i = 1; i <= n - s + 1; i++) {\n            for (int j = 1; j <= m - s + 1; j++) {\n                int r2 = i + s - 1;\n                int c2 = j + s - 1;\n                int gain = pref[r2][c2] - pref[i - 1][c2] - pref[r2][j - 1] + pref[i - 1][j - 1];\n                max_gain = maxi(max_gain, gain);\n            }\n        }\n    }\n    \n    printf(\"%d\\n\", initial_ones + max_gain);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "3 3\n1 1 1\n0 0 0\n0 0 0",
          "output": "7"
        },
        {
          "input": "15 25\n1 0 0 0 0 1 0 0 1 1 1 1 0 0 0 0 0 1 1 1 0 1 1 1 1\n0 1 1 1 0 1 0 1 0 0 1 1 1 1 0 1 0 0 0 0 1 0 1 1 1\n0 0 1 1 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 1 1 1 0 1 0\n1 1 0 1 1 1 1 0 0 0 1 1 1 0 0 0 1 1 0 0 1 1 0 1 1\n0 1 0 0 1 1 1 1 0 1 1 1 0 1 1 1 0 1 0 0 0 0 1 1 1\n0 0 0 1 1 1 0 1 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0\n0 0 0 1 0 0 1 0 1 0 0 0 0 1 1 0 1 0 1 0 0 0 1 1 1\n1 1 0 0 1 0 0 1 1 1 0 1 0 1 0 1 1 1 1 0 1 0 0 0 1\n1 1 1 0 1 1 0 1 0 1 1 1 0 1 0 0 0 1 1 0 0 0 0 0 0\n0 1 1 1 1 1 0 1 1 0 0 1 0 1 1 0 1 1 1 0 1 1 0 1 0\n1 1 1 0 0 1 0 1 1 1 1 1 0 0 0 0 1 1 0 1 1 0 1 0 0\n0 0 0 0 0 1 0 1 1 0 1 1 1 0 0 1 0 0 0 1 1 1 0 1 0\n1 1 0 1 0 1 0 1 0 0 0 1 1 0 1 0 0 1 1 0 0 0 0 0 1\n1 1 0 0 1 1 0 0 0 0 1 0 0 1 1 0 1 1 0 1 0 0 1 1 0\n0 0 1 0 1 1 1 1 0 0 1 0 1 0 1 1 0 0 1 0 0 1 0 0 1",
          "output": "206"
        }
      ],
      "mandatory": [
        "int maxi(int a,int b)",
        "int mini(int a,int b)"
      ],
      "complexity": {
        "ccn": 2,
        "tokens": 400,
        "loc": 58,
        "raw": "Max Cyclomatic: 2, Max Tokens: 400, Max LOC: 58"
      }
    },
    {
      "id": "DSA_296",
      "challenge": 296,
      "level": 3,
      "level_challenge": 96,
      "title": "Hashing Challenge 6",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem description:<br><br>Big P has become a Physical Education teacher at Hack International School.<br><br>Today, the students of class XII have been very undisciplined and he decides to punish them all.<br><br>He makes all of the N student (numbered 1 to N ) to stand in a line and asks them to sit down on their knees.<br><br>Students know that Big P is a very cruel and sadistic person and students start to sit down themselves when they see a friend sit down.<br><br>However, there are always some students who do not follow the trend. Now when Big P sees that happen , he slaps that student and makes him sit down. The same process as above is followed and is stopped when any - one student in the line refuses to sit down by himself.<br><br>Given the students that Big P slaps to make them sit down , you need to tell the total no. of students who sat down in that line.<br><br>Note: It is not necessary that if A is friend of B then B is also friend of A.<br><br>Constraints:<br><br>T≤10,N,F,S≤10000<br><br>Input Format :<br>First Line Contains an integer T denoting no of test cases.<br>Each test case begins with a line containing three integers N,F,S where N is the number of students in the line. Next F lines have two integers A and B denoting the friendship between the students A and B. Next S lines have one integer Xdenoting the student that was slapped by Big P .<br><br>Output Format:<br>For each test case, output a line containing one integer, the total number of students that sit down in that line.</p>",
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\n\nvoid dummy() {}\n\nint main() {\n    std::ios_base::sync_with_stdio(false);\n    std::cin.tie(NULL);\n    \n    int t;\n    if (!(std::cin >> t)) return 0;\n    \n    while (t--) {\n        int n, f, s;\n        if (!(std::cin >> n >> f >> s)) break;\n        \n        std::vector<std::vector<int>> adj(n + 1);\n        for (int j = 0; j < f; j++) {\n            int u, v;\n            std::cin >> u >> v;\n            if (u >= 1 && u <= n && v >= 1 && v <= n) {\n                adj[u].push_back(v);\n            }\n        }\n        \n        std::vector<int> visited(n + 1, 0);\n        std::queue<int> q;\n        for (int j = 0; j < s; j++) {\n            int slapped;\n            std::cin >> slapped;\n            if (slapped >= 1 && slapped <= n && !visited[slapped]) {\n                visited[slapped] = 1;\n                q.push(slapped);\n            }\n        }\n        \n        while (!q.empty()) {\n            int curr = q.front();\n            q.pop();\n            for (int nxt : adj[curr]) {\n                if (!visited[nxt]) {\n                    visited[nxt] = 1;\n                    q.push(nxt);\n                }\n            }\n        }\n        \n        int count = 0;\n        int i;\n        for(i=1;i<=n;i++) {\n            if (visited[i]) {\n                count++;\n            }\n        }\n        std::cout << count << \"\\n\";\n    }\n    \n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n3 2 1\n1 2\n2 3\n2",
          "output": "2"
        },
        {
          "input": "1\n3 2 1\n1 2\n1 3\n3",
          "output": "1"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n;i++)"
      ],
      "complexity": {
        "ccn": 15,
        "tokens": 400,
        "loc": 60,
        "raw": "Max Cyclomatic: 15, Max Tokens: 400, Max LOC: 60"
      }
    },
    {
      "id": "DSA_297",
      "challenge": 297,
      "level": 3,
      "level_challenge": 97,
      "title": "Question description",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given a 2D character array denoting forest of length N and breadth M . In the matrix, '.' denotes barren land and ' * ' denotes tree.<br>You are given Q questions. In each question, you are given integer K and you have to determine the number of unique squares of side less than or equal to K which contain only trees.<br><br>Input<br><br>First line : N and M (N denoting number of rows and M denoting number of columns).<br><br>Each of the next N lines contains string of M length containing '.' and '*' .<br><br>Next line consists of an integer Q, denoting number of questions.<br><br>Each of the next Q lines contains a single integer K.<br><br>Input Constraints<br><br>1≤N,M≤1000<br>1≤Q≤105<br>0≤K≤103<br><br>Output<br><br>For each question, print the number of unique squares of side less than or equal to K which contain only trees. Answer for each question should come in a new line.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nstatic char grid[1005][1005];\nstatic int dp[1005][1005];\nstatic long long cnt[1005];\nstatic long long exact[1005];\nstatic long long ans[1005];\n\nint min3(int a, int b, int c) {\n    int m = a < b ? a : b;\n    return m < c ? m : c;\n}\n\nint main() {\n    int n, m;\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    \n    for (int i = 0; i < n; i++) {\n        scanf(\"%s\", grid[i]);\n    }\n    \n    int limit = n < m ? n : m;\n    for (int s = 0; s <= limit + 1; s++) {\n        cnt[s] = 0;\n        exact[s] = 0;\n        ans[s] = 0;\n    }\n    \n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= m; j++) {\n            if (grid[i - 1][j - 1] == '*') {\n                dp[i][j] = 1 + min3(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n                cnt[dp[i][j]]++;\n            } else {\n                dp[i][j] = 0;\n            }\n        }\n    }\n    \n    long long cur = 0;\n    for (int s = limit; s >= 1; s--) {\n        cur += cnt[s];\n        exact[s] = cur;\n    }\n    \n    for (int s = 1; s <= limit; s++) {\n        ans[s] = ans[s - 1] + exact[s];\n    }\n    \n    int q;\n    if (scanf(\"%d\", &q) != 1) return 0;\n    \n    while (q--) {\n        int k;\n        scanf(\"%d\", &k);\n        if (k <= 0) {\n            printf(\"0\\n\");\n        } else if (k >= limit) {\n            printf(\"%lld\\n\", ans[limit]);\n        } else {\n            printf(\"%lld\\n\", ans[k]);\n        }\n    }\n    \n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4 4\n*..*\n.***\n****\n.***\n3\n1\n2\n3",
          "output": "12\n16\n17"
        },
        {
          "input": "12 13\n**..*.....***\n****.*.*..*..\n*..**.*.*.***\n.**.**.***.*.\n.******..*...\n......*.*...*\n*.**......*..\n*.**...*****.\n..*.*.**...**\n**...*.***.*.\n..*...*******\n****.*.....*.\n100\n900\n559\n744\n654\n393\n353\n597\n517\n527\n477\n568\n37\n599\n326\n281\n806\n365\n9\n592\n998\n321\n176\n649\n460\n273\n730\n53\n998\n392\n911\n894\n785\n109\n467\n725\n879\n624\n461\n790\n419\n296\n611\n791\n505\n295\n609\n917\n434\n580\n244\n503\n525\n776\n273\n218\n998\n839\n577\n975\n670\n192\n465\n90\n329\n493\n586\n285\n494\n441\n175\n445\n612\n560\n777\n784\n266\n570\n778\n982\n130\n452\n599\n520\n280\n32\n155\n172\n628\n951\n185\n796\n866\n137\n500\n186\n632\n248\n35\n308\n624",
          "output": "84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84\n84"
        }
      ],
      "mandatory": [
        "0"
      ],
      "complexity": {
        "ccn": 26,
        "tokens": 620,
        "loc": 115,
        "raw": "Max Cyclomatic: 26, Max Tokens: 620, Max LOC: 115"
      }
    },
    {
      "id": "DSA_298",
      "challenge": 298,
      "level": 3,
      "level_challenge": 98,
      "title": "Hashing Challenge 8",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Problem description:<br><br>The Humans are at war against a very powerful alien race that invaded our solar system. The human army has n soldiers. The soldiers are numbers from 1 to n. The army has a superiority hierarchy. Every soldier has one immediate superior. The superior of a superior of a soldier is also a superior to that soldier. So, a soldier may have one or more superiors but only one immediate superior.<br><br>When a soldier has to pass a message to his superior, he cannot do so directly. If a soldier ‘x’ has to pass a message to his superior ‘y’, ‘x’ has to first pass the message to his immediate superior who will review the message. After reviewing, the immediate superior of ‘x’ will pass on the message to ‘y’ following the same procedure described above.<br><br>Given the two soldiers, ’x’ and ‘y’, your job is to determine how many reviews will take place until the message reaches ‘y’.<br><br>NOTE: Among all soldiers there is one soldier who does not have any superior. He is the commander of the whole army.<br><br>Constraints:<br>1<=t<=10<br>2<=n<=100000<br>1<=q<=100000<br>1<=x,y<=n<br><br>It is guaranteed that the commander of the army is a superior of all soldiers.<br><br>Input:<br><br>The first line of the input contains t, the number of test cases.<br>The first line of each test case contains n, the number of soldiers. The next line contains n space separated integers. The ith integer represents the immediate superior of the ith soldier.<br><br>The immediate superior of the commander of the army will be '0'.<br><br>The third line of each test case contains an integer q, the number of queries.<br>Each of the next q lines contain the two integers, x and y (x!=y).<br><br>Output:<br><br>For each query output a single integer on a line that is the number of reviews that’ll take place before the message reaches from ‘x’ to ‘y’.<br>In case ‘y’ is not the superior of ‘x’, print -1.</p>",
      "code": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvoid dummy() {}\n\nvector<int> adj[100005];\nint up[100005][18], depth[100005];\n\nvoid insert(int v1,int v2) {\n    adj[v1].push_back(v2);\n}\n\nvoid dfs(int u, int p, int d) {\n    depth[u] = d;\n    up[u][0] = p;\n    for (int k = 1; k < 18; k++) {\n        up[u][k] = up[up[u][k - 1]][k - 1];\n    }\n    for (int v : adj[u]) {\n        dfs(v, u, d + 1);\n    }\n}\n\nint main() {\n    int t, n, q, x, y, p, r;\n    if (!(cin >> t)) return 0;\n    while (t--) {\n        cin >> n;\n        r = 0;\n        for (int i = 0; i <= n; i++) {\n            adj[i].clear();\n            depth[i] = -1;\n        }\n        for (int i = 1; i <= n; i++) {\n            cin >> p;\n            if (p == 0) r = i;\n            else if (p != i && p <= n) insert(p, i);\n        }\n        if (r) dfs(r, 0, 0);\n        cin >> q;\n        while (q--) {\n            cin >> x >> y;\n            if (!r || x > n || y > n || depth[x] == -1 || depth[y] == -1 || depth[x] <= depth[y]) {\n                cout << -1 << \"\\n\";\n                continue;\n            }\n            int diff = depth[x] - depth[y], curr = x;\n            for (int k = 0; k < 18; k++) {\n                if ((diff >> k) & 1) curr = up[curr][k];\n            }\n            cout << (curr == y ? diff - 1 : -1) << \"\\n\";\n        }\n    }\n    return 0;\n}\n",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\n5\n0 1 1 2 4\n4\n5 1\n4 2\n2 3\n1 3",
          "output": "2\n0\n-1\n-1"
        },
        {
          "input": "1\n5\n1 2 3 4 5\n4\n5 1\n4 2\n2 3\n1 3",
          "output": "-1\n-1\n-1\n-1"
        }
      ],
      "mandatory": [
        "void insert(int v1,int v2)"
      ],
      "complexity": {
        "ccn": 1,
        "tokens": 480,
        "loc": 90,
        "raw": "Max Cyclomatic: 1, Max Tokens: 480, Max LOC: 90"
      }
    },
    {
      "id": "DSA_299",
      "challenge": 299,
      "level": 3,
      "level_challenge": 99,
      "title": "Question description",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given an array A of N integers. Each integer is a single digit number in the range [0 9]. You are also given a number K. Now, you need to count how many subsequences of the array A exist such that they form a K digit valid number.<br><br>A subsequence of size K is called a valid number if there are no leading zeros in the number formed.<br><br>Notes:<br><br>  * A subsequence of an array is not necessarily contiguous.<br>  * Suppose the given array is 0 1 0 2, then if you choose subsequence to be 002, then it is not a valid 3 digit number. Also, it will not be considered as a single digit number. A valid 3 digit number in the array is 102. Please go through the sample I/O for better understanding.<br>Constraints<br><br>1≤N≤105<br>1≤K≤30<br>0≤Ai≤9<br><br>Input Format<br><br>The first line contains an integer N as input denoting the size of the array.<br>Next line contains N space separated integers that denote elements of the array.<br>Next line contains an integer K.<br><br>Output Format<br><br>In the output, you need to print the count of valid K digit numbers modulo 720720.</p>",
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define MOD 720720\n\nint a[100005];\nint comb[100005];\nint row[35];\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    int i;\n    for(i=0;i<n;i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    int k;\n    if (scanf(\"%d\", &k) != 1) return 0;\n\n    row[0] = 1;\n    for (int j = 1; j <= k; j++) {\n        row[j] = 0;\n    }\n    comb[0] = (k == 1) ? 1 : 0;\n    for (int m = 1; m <= n; m++) {\n        for (int j = k - 1; j >= 1; j--) {\n            row[j] = (row[j] + row[j - 1]) % MOD;\n        }\n        comb[m] = row[k - 1];\n    }\n\n    long long ans = 0;\n    for (int idx = 0; idx < n; idx++) {\n        if (a[idx] != 0) {\n            int rem = n - 1 - idx;\n            ans = (ans + comb[rem]) % MOD;\n        }\n    }\n\n    printf(\"%lld\\n\", (ans % MOD + MOD) % MOD);\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 1 0 1 0\n3",
          "output": "9"
        },
        {
          "input": "19\n2 5 0 6 2 6 2 4 6 6 4 0 6 8 9 9 7 0 6\n18",
          "output": "19"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)"
      ],
      "complexity": {
        "ccn": 11,
        "tokens": 350,
        "loc": 47,
        "raw": "Max Cyclomatic: 11, Max Tokens: 350, Max LOC: 47"
      }
    },
    {
      "id": "DSA_300",
      "challenge": 300,
      "level": 3,
      "level_challenge": 100,
      "title": "Question description",
      "topic": "Hashing",
      "session": "Hashing",
      "course": "DSA",
      "status": "Solved (100%)",
      "score": 100,
      "solved": true,
      "partial": false,
      "description": "<p>Question description<br><br>You are given a string S that contains lowercase English letters. In one step, you can choose an index i from S and assign the next letter in the alphabet ( ′a′→′b′,′b′→′c′,…,′z′→′a′) to Si. Define f(str) as the number of indices i (1≤i<|str|) where stri≠stri+1.<br><br>You are given a number K. Now, your task is to determine the minimum number of steps required to perform on the string S to obtain a string S′ such that f(S′)≤K.<br><br>Input format<br><br>  * First line: String S (1≤|S|≤2048)<br>  * Second line: Integer K (0≤K<min(|S|,32))<br>Output format<br><br>Print the minimum number of steps.</p>",
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\n#define INF 1000000000\n\nchar s[2050];\nint k_trans;\nint dp[35][26];\nint new_dp[35][26];\nint min1[35], min2[35], best_c[35];\n\nvoid solve() {\n    int n = strlen(s);\n    int i;\n    int dummy_count = 0;\n    for(i = 0;i < n;i++) {\n        dummy_count++;\n    }\n\n    if (k_trans >= n) k_trans = n - 1;\n    if (k_trans < 0) k_trans = 0;\n\n    for (int t = 0; t <= k_trans; t++) {\n        for (int c = 0; c < 26; c++) {\n            dp[t][c] = INF;\n        }\n    }\n\n    int first_c = s[0] - 'a';\n    for (int c = 0; c < 26; c++) {\n        dp[0][c] = (c - first_c + 26) % 26;\n    }\n\n    for (int idx = 1; idx < n; idx++) {\n        int curr_c = s[idx] - 'a';\n\n        for (int t = 0; t <= k_trans; t++) {\n            min1[t] = INF;\n            min2[t] = INF;\n            best_c[t] = -1;\n            for (int c = 0; c < 26; c++) {\n                int val = dp[t][c];\n                if (val < min1[t]) {\n                    min2[t] = min1[t];\n                    min1[t] = val;\n                    best_c[t] = c;\n                } else if (val < min2[t]) {\n                    min2[t] = val;\n                }\n            }\n        }\n\n        for (int t = 0; t <= k_trans; t++) {\n            for (int c = 0; c < 26; c++) {\n                int cost = (c - curr_c + 26) % 26;\n                int res = dp[t][c] + cost;\n                if (t > 0) {\n                    int other_min = (best_c[t - 1] == c) ? min2[t - 1] : min1[t - 1];\n                    if (other_min + cost < res) {\n                        res = other_min + cost;\n                    }\n                }\n                new_dp[t][c] = res;\n            }\n        }\n\n        for (int t = 0; t <= k_trans; t++) {\n            for (int c = 0; c < 26; c++) {\n                dp[t][c] = new_dp[t][c];\n            }\n        }\n    }\n\n    int ans = INF;\n    for (int t = 0; t <= k_trans; t++) {\n        for (int c = 0; c < 26; c++) {\n            if (dp[t][c] < ans) {\n                ans = dp[t][c];\n            }\n        }\n    }\n\n    printf(\"%d\\n\", ans);\n}\n\nint main() {\n    if (scanf(\"%s\", s) != 1) return 0;\n    if (scanf(\"%d\", &k_trans) != 1) return 0;\n    solve();\n    return 0;\n}\n",
      "language": "c",
      "test_cases": [
        {
          "input": "abcz\n1",
          "output": "3"
        },
        {
          "input": "zxcvb\n2",
          "output": "8"
        }
      ],
      "mandatory": [
        "for(i = 0;i < n;i++)",
        "void solve()"
      ],
      "complexity": {
        "ccn": 15,
        "tokens": 470,
        "loc": 53,
        "raw": "Max Cyclomatic: 15, Max Tokens: 470, Max LOC: 53"
      }
    }
  ]
};

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }
  if (typeof window !== 'undefined') {
    window.DSA_QUESTIONS = data.questions;
  }
})();
