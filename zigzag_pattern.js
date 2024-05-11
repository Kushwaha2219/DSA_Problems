public class zigzag {
    public static class Node{
         int data;
         Node next;
         Node(int data){
             this.data=data;
             this.next=null;
         }
     }

    public static Node head;
    public void addFirst(int data){
        Node newnode= new Node(data);
        Node temp=head;
        if(head==null){
            head=newnode;
            return;
        }
        newnode.next=head;
        head=newnode;

    }
    public void zigzag(){
        Node slow=head;
        Node fast=head;
        while(fast!=null&&fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        Node mid=slow;
        Node prev=null;
        Node curr=mid;
        Node next;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        Node LH=head;
        Node RH=prev;
        Node ln;
        Node rn;
        while(LH.next!=null&&RH.next!=null){
            ln=LH.next;
            LH.next=RH;
            rn=RH.next;
            RH.next=ln;

            LH=ln;
            RH=rn;
        }
    }
    public void print(){
        Node pointer=head;
        if(head==null){
            System.out.println("Empty List");
        }
        while(pointer!=null){
            System.out.print(pointer.data+"->");
            pointer=pointer.next;
        }
        System.out.print("null");
        System.out.println();
    }
    public static void main(String []args){
        zigzag ll=new zigzag();
        ll.addFirst(13);
        ll.addFirst(12);
        ll.addFirst(11);
        ll.addFirst(10);
        ll.addFirst(9) ;
        ll.print();
        ll.zigzag();
        ll.print();
    }
}
