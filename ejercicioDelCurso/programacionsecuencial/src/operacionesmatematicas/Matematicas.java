
package operacionesmatematicas;

import javax.swing.JOptionPane;


public class Matematicas {

    
    public static void main(String[] args) {
        int n1, n2, suma, resta, multi;
        double divi;
      n1 = Integer.parseInt(  JOptionPane.showInputDialog("escriba un numero entero"));
      n2 = Integer.parseInt(  JOptionPane.showInputDialog("escriba otro numero entero"));
      suma = n1 +n2;
      resta =n1 - n2;
      multi =n1 * n2;
      divi =n1 / n2;
      JOptionPane.showMessageDialog(null,"la suma es:" + suma);
      JOptionPane.showMessageDialog(null,"la resta es:" + resta);
      JOptionPane.showMessageDialog(null,"la multi es:" + multi);
      JOptionPane.showMessageDialog(null,"la divicion es:" + divi);


     
    }
    
}
