
package facturaiva;

import javax.swing.JOptionPane;

public class Deposito {
     public static void main(String[] args) {
        String nombre, aticulo;
        int cantidad, valuro, subtotal, id;
        double iva , total;
        nombre =  JOptionPane.showInputDialog(null,"****tienda no te pases****"
                + "|||||||||||");
        id = Integer.parseInt( JOptionPane.showInputDialog("escriba su id cliente"));
        nombre = JOptionPane.showInputDialog("escriba su nombre cliente");
        JOptionPane.showInputDialog(null,"****Articulo*****");
        aticulo = JOptionPane.showInputDialog("escriba la descripcion del articulo");
        cantidad = Integer.parseInt( JOptionPane.showInputDialog("escriba la cantidad de articulo"));
        valuro = Integer.parseInt( JOptionPane.showInputDialog("escriba su  valor unitario"));
        
        subtotal = valuro * cantidad;
        iva = subtotal * 0.19;
        total = subtotal + iva;
        JOptionPane.showInternalMessageDialog(null, "***descripcion factura*** \n"
                + "||||||||||||||||||"
        );
        JOptionPane.showInternalMessageDialog(null,"id cliente" + id + "\n"
        + "cliente" + nombre + "\n"
        + "Articulo" + aticulo + "\n"
        + "cantidad" + cantidad + "\n"
        + "valor unitario: $" + valuro +"\n"
        + "subtotal: $" + subtotal +"\n"
        + "iva: $" + iva + "\n"
        + "total: $" + total);
        

     }
  
    
}
