#include <stdio.h>
#include <stdlib.h>

int yosh(int N)
{
return 2026-N;
}

int main()
{
int A;
system("clear");
printf("Yoshingizni kiriting.\n");
scanf("%d", &A);
printf("Siz tugulgan yil - %d yil", yosh(A));

return 0;
}
