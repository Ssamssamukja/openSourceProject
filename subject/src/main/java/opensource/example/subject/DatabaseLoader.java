package opensource.example.subject;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.List;

public class DatabaseLoader {
    public void loadToDatabase(List<String[]> csvData, Connection conn) throws Exception {
        String sql = "INSERT INTO your_table (column1, column2, column3) VALUES (?, ?, ?)";

        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            for (String[] row : csvData) {
                pstmt.setString(1, row[0]);
                pstmt.setString(2, row[1]);
                pstmt.setString(3, row[2]);
                pstmt.executeUpdate();
            }
        }
    }
}