class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n1=nums1.length;
        int n2=nums2.length;

        int nums3[]=new int[n1+n2];
        int n3=nums3.length;
        mergeArrays(nums1, nums2, n1, n2, nums3);
        if (n3 % 2 == 0) {
            int z = n3 / 2;
            int e = nums3[z-1];
            int q = nums3[z];

            double ans = (e + q) / 2.0;
            return ans;
        }

        // If length if array is odd
        else {
            int z = Math.round(n3 / 2);
            return nums3[z];
        }
    }
    public static void mergeArrays(int[] arr1, int[] arr2, int n1, int n2, int[] arr3){
        int i = 0;  
        int j = 0;  
        int k = 0;  
         
        // traverse the arr1 and insert its element in arr3
        while(i < n1){   
         arr3[k++] = arr1[i++];   
        }   
         
        // now traverse arr2 and insert in arr3
        while(j < n2){   
         arr3[k++] = arr2[j++];   
        }   
         
        // sort the whole array arr3
        Arrays.sort(arr3);   
    }
}
