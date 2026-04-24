#include <stdio.h>
#include <stdlib.h>

int kattasi(int a, int b)
{
if (a>b)
return a;
else
return b;
}

int main()
{
int a,b;
system("clear");
printf("Sonni kiriting.\n");
scanf("%d", &a);

printf("Sonni kiriting.\n");
scanf("%d", &b);

printf("Bu sonning kattasi  %d", kattasi(a,b));

return 0;

}
