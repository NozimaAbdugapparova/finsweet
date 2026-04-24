    #include <stdio.h>
    #include <stdlib.h>
    #include <time.h>

    int find_min(int n,int arr[]){
       int min = arr[0];
        for(int i = 1; i < n; i++){
            if(arr[i] < min)
                min = arr[i];
        }
        return min;
    }

    int irand(int a,int b){
    return a + rand()%(b - a + 1);
    }
    void show_array(int arr[], int n){
    for(int i = 0; i < n; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
    }
    void modify_even_odd(int n,int arr[]){
        int even;
        for(int i = 0; i < n; i++){
            if(arr[i] % 2 == 0){
                arr[i] += 2;
            } else{
                arr[i] *= 2;
            }
        }
    }
    void convert_signs(int n,int ms[]){
        for(int i = 0; i < n; i++){
        if(ms[i] > 0)
            ms[i] = 1;
        else 
            ms[i] = 0;
        }
    }
    void shift(int n,int ms[]){
        int temp = ms[0];
        for(int i = 0; i < n; i ++){
            ms[i] = ms[i+1];
        }
        ms[n-1] = temp;
    }
    int  is_special_array(int n, int ms[]){
        for(int i = 0; i<n; i ++){
            if(ms[i] % 2 == 0 && i % 2 == 1){
                return 0;
            }
            else if(ms[i] % 2 == 1 && i % 2 == 0){
                return 0;
            }
            else
                return 1;
        }
    }
    void bubblesort(int n,int ms[]){
        int i,j,temp;
        int swapped;
         for (i = 0; i < n - 1; i++) {

        swapped = 0; 
        for (j = 0; j < n - 1 - i; j++) {

            if (ms[j] > ms[j + 1]) {

                temp = ms[j];

                ms[j] = ms[j + 1];

                ms[j + 1] = temp;

                swapped = 1;

            }

        }
        if (!swapped) break;  
    }
}
    int max_arr(int n,int arr[]){
       int  max = arr[0];
        for(int i = 0; i < n; i++){
            if(arr[i] > max)
                max = arr[i];
        }
        return max;
    }

    int find_second_max(int n, int ms[]){
       int max1 = max_arr(n,ms);
       int max2 = ms[n-2];
       return max2;
    }
    int main(){
        int n;
        printf("n >>> "); scanf("%d", &n);
        srand(time(0));
        int ms[n];
        for(int i = 0; i < n; i++){
            ms[i] = irand(1,10);
        }
        // int min = find_min(n,ms);
        printf("\noldingi array\n");
        show_array(ms,n);
        // printf("eng kichik element: %d ", min);
        // modify_even_odd(n,ms);
        // convert_signs(n,ms);
        // shift(n,ms);
        // printf("%s ", is_special_array(n,ms) ==1 ?"true":"false");
        // bubblesort(n,ms);
        // int max2 = find_second_max(n,ms);
        printf("\nkeyingi array\n");
        show_array(ms,n);
        // printf("\nsecond_max = %d ", max2);
    }