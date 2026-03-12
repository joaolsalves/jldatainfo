using System;
using System.Windows.Forms;

namespace MeuProjeto
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            Form form = new Form();
            Button button = new Button();

            button.Text = "Hello World";
            button.Click += (sender, e) => MessageBox.Show("Hello World!");

            form.Controls.Add(button);
            Application.Run(form);
        }
    }
}
